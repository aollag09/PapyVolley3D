import * as THREE from 'three'
import { Court } from './Court'
import { Ball } from './Ball'
import { Player } from './Player'
import { BLOB_RADIUS, BALL_RADIUS, WIN_SCORE } from './constants'
import { DIFFICULTIES } from './difficulty'
import type { DifficultyLevel } from './difficulty'
import { predictBallLanding, createProjectionRing } from './BallProjection'

export type GameState = 'waiting' | 'playing' | 'gameover'

export interface GameStatus {
  score: [number, number]
  state: GameState
  lastScorer: 1 | 2 | null
  winner: 1 | 2 | null
  difficulty: DifficultyLevel
}

export type { DifficultyLevel }

// ── Orbit camera state ────────────────────────────────────────────
const TARGET = new THREE.Vector3(-2.5, 0.5, -1.5)
const orbit = {
  theta: -0.5,      // horizontal angle (radians)
  phi: 0.90,        // vertical angle (radians, 0=top π=bottom)
  radius: 28,
  dragging: false,
  lastX: 0,
  lastY: 0,
}

function applyOrbit(camera: THREE.PerspectiveCamera) {
  const sinPhi = Math.sin(orbit.phi)
  camera.position.set(
    TARGET.x + orbit.radius * sinPhi * Math.sin(orbit.theta),
    TARGET.y + orbit.radius * Math.cos(orbit.phi),
    TARGET.z + orbit.radius * sinPhi * Math.cos(orbit.theta),
  )
  camera.lookAt(TARGET)
}

export class GameEngine {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private rafId: number | null = null
  private lastTime = 0

  private court: Court
  private ball: Ball
  private player1: Player
  private player2: Player
  private projectionRing: THREE.Mesh

  private keys = new Set<string>()
  private joystickKeys = new Set<string>()
  private score: [number, number] = [0, 0]
  private state: GameState = 'waiting'
  private lastScorer: 1 | 2 | null = null
  private winner: 1 | 2 | null = null
  private nextServer: 1 | 2 = 2
  private difficulty: DifficultyLevel = 'medium'

  onStatusChange: ((s: GameStatus) => void) | null = null

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    this.renderer.shadowMap.enabled = true

    this.scene = new THREE.Scene()
    // Beach sunset sky — gradient from blue to orange
    const gradCanvas = document.createElement('canvas')
    gradCanvas.width = 256
    gradCanvas.height = 256
    const gradCtx = gradCanvas.getContext('2d')!
    const grad = gradCtx.createLinearGradient(0, 0, 0, 256)
    grad.addColorStop(0, '#87ceeb')      // Sky blue at top
    grad.addColorStop(0.5, '#ffcc99')    // Peachy mid
    grad.addColorStop(1, '#ff9966')      // Orange at horizon
    gradCtx.fillStyle = grad
    gradCtx.fillRect(0, 0, 256, 256)
    const gradTex = new THREE.CanvasTexture(gradCanvas)
    this.scene.background = gradTex

    this.camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 0.1, 200)
    applyOrbit(this.camera)

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const sun = new THREE.DirectionalLight(0xffffff, 1.2)
    sun.position.set(5, 10, 5)
    sun.castShadow = true
    sun.shadow.camera.left = -20
    sun.shadow.camera.right = 20
    sun.shadow.camera.top = 20
    sun.shadow.camera.bottom = -20
    sun.shadow.mapSize.width = 2048
    sun.shadow.mapSize.height = 2048
    this.scene.add(sun)

    this.court = new Court()
    this.scene.add(this.court.object3D)

    this.ball = new Ball()
    this.scene.add(this.ball.object3D)

    this.player1 = new Player({ side: -1, color: 0x4488ff })
    this.player2 = new Player({ side: 1, color: 0xff4444, isAI: true })
    this.scene.add(this.player1.object3D)
    this.scene.add(this.player1.shadowMesh)
    this.scene.add(this.player2.object3D)
    this.scene.add(this.player2.shadowMesh)

    this.projectionRing = createProjectionRing()
    this.scene.add(this.projectionRing)

    this.placeServe()

    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
    window.addEventListener('resize', this.onResize)
    canvas.addEventListener('mousedown', this.onMouseDown)
    canvas.addEventListener('mousemove', this.onMouseMove)
    canvas.addEventListener('mouseup', this.onMouseUp)
    canvas.addEventListener('mouseleave', this.onMouseUp)
    canvas.addEventListener('wheel', this.onWheel, { passive: true })
  }

  private placeServe() {
    const x = this.nextServer === 1 ? -2 : 2
    this.ball.place(x, 10, 0)

    // Reposition blobs toward centre of their half, z=0
    this.player1.moveTo(-3, 0)
    this.player2.moveTo(3, 0)

    this.state = 'waiting'
    this.emit()
  }

  private launchServe() {
    const vx = this.nextServer === 1 ? 5.5 : -5.5
    const vz = (Math.random() - 0.5) * 1.5
    this.ball.velocity.set(vx, 7, vz)
    this.state = 'playing'
    this.emit()
  }

  start() {
    this.lastTime = performance.now()
    const loop = (t: number) => {
      this.rafId = requestAnimationFrame(loop)
      const dt = Math.min((t - this.lastTime) / 1000, 0.05)
      this.lastTime = t
      this.tick(dt)
      this.renderer.render(this.scene, this.camera)
    }
    this.rafId = requestAnimationFrame(loop)
  }

  private tick(dt: number) {
    // Merge keyboard and joystick keys
    const mergedKeys = new Set([...this.keys, ...this.joystickKeys])

    const ballRef = { position: this.ball.position, velocity: this.ball.velocity }
    this.player1.update(dt, mergedKeys, ballRef)
    this.player2.update(dt, this.keys, ballRef)

    // Update ball landing projection
    if (this.state === 'playing') {
      const blobs = [this.player1.position, this.player2.position]
      const landing = predictBallLanding(ballRef, blobs)
      if (landing) {
        this.projectionRing.position.x = landing.position.x
        this.projectionRing.position.z = landing.position.z
        this.projectionRing.visible = !landing.onBlob
      } else {
        this.projectionRing.visible = false
      }
    } else {
      this.projectionRing.visible = false
    }

    if (this.state !== 'playing') return

    const scorer = this.ball.update(dt)
    this.resolvePlayerBall(this.player1)
    this.resolvePlayerBall(this.player2)

    if (scorer !== 0) {
      this.score[scorer - 1]++
      this.lastScorer = scorer
      this.nextServer = scorer

      if (this.score[scorer - 1] >= WIN_SCORE) {
        this.winner = scorer
        this.state = 'gameover'
        this.emit()
      } else {
        this.placeServe()
      }
    }
  }

  private resolvePlayerBall(player: Player) {
    const dx = this.ball.position.x - player.position.x
    const dy = this.ball.position.y - player.position.y
    const dz = this.ball.position.z - player.position.z
    const distSq = dx * dx + dy * dy + dz * dz
    const minDist = BLOB_RADIUS + BALL_RADIUS

    if (distSq < minDist * minDist && distSq > 0.0001) {
      const dist = Math.sqrt(distSq)
      const nx = dx / dist, ny = dy / dist, nz = dz / dist
      const overlap = minDist - dist
      this.ball.position.x += nx * overlap
      this.ball.position.y += ny * overlap
      this.ball.position.z += nz * overlap

      const rvx = this.ball.velocity.x - player.velocity.x
      const rvy = this.ball.velocity.y - player.velocity.y
      const rvz = this.ball.velocity.z - player.velocity.z
      const relDot = rvx * nx + rvy * ny + rvz * nz

      if (relDot < 0) {
        // Bias the collision normal upward for better control (0=pure physics, 1=always vertical)
        const BIAS = 0.65
        const bnx = nx * (1 - BIAS)
        const bny = ny * (1 - BIAS) + BIAS
        const bnz = nz * (1 - BIAS)
        const blen = Math.sqrt(bnx * bnx + bny * bny + bnz * bnz)
        const fnx = bnx / blen, fny = bny / blen, fnz = bnz / blen

        const brelDot = (this.ball.velocity.x - player.velocity.x) * fnx
                      + (this.ball.velocity.y - player.velocity.y) * fny
                      + (this.ball.velocity.z - player.velocity.z) * fnz

        const r = 0.95
        this.ball.velocity.x -= (1 + r) * brelDot * fnx - player.velocity.x * 0.15
        this.ball.velocity.y -= (1 + r) * brelDot * fny - player.velocity.y * 0.15
        this.ball.velocity.z -= (1 + r) * brelDot * fnz - player.velocity.z * 0.15
        const MAX_SPEED = 20
        const speed = this.ball.velocity.length()
        if (speed > MAX_SPEED) this.ball.velocity.multiplyScalar(MAX_SPEED / speed)

        // Fun expression when hitting the ball!
        player.onBallHit()
      }
    }
  }

  // ── Input handlers ────────────────────────────────────────────

  private onKeyDown = (e: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault()
    this.keys.add(e.key)
    if (e.repeat) return
    if (this.state === 'waiting') {
      this.launchServe()
    } else if (this.state === 'gameover') {
      this.score = [0, 0]
      this.winner = null
      this.lastScorer = null
      this.nextServer = 2
      this.player1.reset()
      this.player2.reset()
      this.placeServe()
    }
  }

  private onKeyUp = (e: KeyboardEvent) => this.keys.delete(e.key)

  private onMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return
    orbit.dragging = true
    orbit.lastX = e.clientX
    orbit.lastY = e.clientY
  }

  private onMouseMove = (e: MouseEvent) => {
    if (!orbit.dragging) return
    const dx = e.clientX - orbit.lastX
    const dy = e.clientY - orbit.lastY
    orbit.lastX = e.clientX
    orbit.lastY = e.clientY
    orbit.theta -= dx * 0.005
    orbit.phi = Math.max(0.15, Math.min(Math.PI * 0.48, orbit.phi + dy * 0.005))
    applyOrbit(this.camera)
  }

  private onMouseUp = () => { orbit.dragging = false }

  private onWheel = (e: WheelEvent) => {
    orbit.radius = Math.max(8, Math.min(50, orbit.radius + e.deltaY * 0.03))
    applyOrbit(this.camera)
  }

  private onResize = () => {
    const canvas = this.renderer.domElement
    this.camera.aspect = canvas.clientWidth / canvas.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  }

  setDifficulty(d: DifficultyLevel) {
    this.difficulty = d
    this.player2.aiDifficulty = DIFFICULTIES[d]
    this.emit()
  }

  setJoystickKeys(keys: Set<string>) {
    this.joystickKeys = new Set(keys)
  }

  handleJoystickInput() {
    if (this.state === 'waiting') {
      this.launchServe()
    } else if (this.state === 'gameover') {
      this.score = [0, 0]
      this.winner = null
      this.lastScorer = null
      this.nextServer = 2
      this.player1.reset()
      this.player2.reset()
      this.placeServe()
    }
  }

  private emit() {
    this.onStatusChange?.({
      score: [this.score[0], this.score[1]],
      state: this.state,
      lastScorer: this.lastScorer,
      winner: this.winner,
      difficulty: this.difficulty,
    })
  }

  dispose() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId)
    const canvas = this.renderer.domElement
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
    window.removeEventListener('resize', this.onResize)
    canvas.removeEventListener('mousedown', this.onMouseDown)
    canvas.removeEventListener('mousemove', this.onMouseMove)
    canvas.removeEventListener('mouseup', this.onMouseUp)
    canvas.removeEventListener('mouseleave', this.onMouseUp)
    canvas.removeEventListener('wheel', this.onWheel)
    ;(this.projectionRing.geometry as THREE.TorusGeometry).dispose()
    ;(this.projectionRing.material as THREE.MeshBasicMaterial).dispose()
    this.renderer.dispose()
  }
}
