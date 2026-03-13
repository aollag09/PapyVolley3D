import * as THREE from 'three'
import { BALL_RADIUS, COURT_X, COURT_Z, NET_HEIGHT, NET_THICKNESS, GRAVITY } from './constants'

function makeVolleyballTexture(): THREE.CanvasTexture {
  const S = 512
  const canvas = document.createElement('canvas')
  canvas.width = S; canvas.height = S
  const ctx = canvas.getContext('2d')!

  // Base: warm white
  ctx.fillStyle = '#f0ede0'
  ctx.fillRect(0, 0, S, S)

  // Panel colours — volleyball has 8 panels in 3 colours
  const panels = [
    { color: '#e8c44a', cx: S * 0.25, cy: S * 0.25, rx: S * 0.30, ry: S * 0.28 },
    { color: '#3a7bd5', cx: S * 0.75, cy: S * 0.25, rx: S * 0.30, ry: S * 0.28 },
    { color: '#e8c44a', cx: S * 0.75, cy: S * 0.75, rx: S * 0.30, ry: S * 0.28 },
    { color: '#3a7bd5', cx: S * 0.25, cy: S * 0.75, rx: S * 0.30, ry: S * 0.28 },
  ]
  for (const p of panels) {
    ctx.beginPath()
    ctx.ellipse(p.cx, p.cy, p.rx, p.ry, 0, 0, Math.PI * 2)
    ctx.fillStyle = p.color
    ctx.fill()
  }

  // Seam lines
  ctx.strokeStyle = '#c0bbb0'
  ctx.lineWidth = 6
  ctx.lineCap = 'round'

  // Horizontal seam (curved)
  ctx.beginPath()
  ctx.moveTo(0, S * 0.5)
  ctx.bezierCurveTo(S * 0.25, S * 0.38, S * 0.75, S * 0.62, S, S * 0.5)
  ctx.stroke()

  // Vertical seam (curved)
  ctx.beginPath()
  ctx.moveTo(S * 0.5, 0)
  ctx.bezierCurveTo(S * 0.38, S * 0.25, S * 0.62, S * 0.75, S * 0.5, S)
  ctx.stroke()

  // Diagonal seams
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.bezierCurveTo(S * 0.3, S * 0.2, S * 0.7, S * 0.4, S, S * 0.5)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(S, 0)
  ctx.bezierCurveTo(S * 0.7, S * 0.2, S * 0.3, S * 0.4, 0, S * 0.5)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(0, S)
  ctx.bezierCurveTo(S * 0.3, S * 0.8, S * 0.7, S * 0.6, S, S * 0.5)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(S, S)
  ctx.bezierCurveTo(S * 0.7, S * 0.8, S * 0.3, S * 0.6, 0, S * 0.5)
  ctx.stroke()

  return new THREE.CanvasTexture(canvas)
}

export class Ball {
  readonly object3D: THREE.Mesh
  readonly position = new THREE.Vector3()
  readonly velocity = new THREE.Vector3()

  constructor() {
    const tex = makeVolleyballTexture()
    this.object3D = new THREE.Mesh(
      new THREE.SphereGeometry(BALL_RADIUS, 32, 32),
      new THREE.MeshLambertMaterial({ map: tex }),
    )
    this.object3D.castShadow = true
  }

  place(x: number, y: number, z: number) {
    this.position.set(x, y, z)
    this.velocity.set(0, 0, 0)
    this.object3D.position.copy(this.position)
  }

  /** Returns scorer (1 or 2) if ball hit the floor, else 0 */
  update(dt: number): 0 | 1 | 2 {
    const prevX = this.position.x

    this.velocity.y -= GRAVITY * dt
    this.position.addScaledVector(this.velocity, dt)

    // Spin the ball visually
    this.object3D.rotation.x += this.velocity.z * dt * 0.4
    this.object3D.rotation.z -= this.velocity.x * dt * 0.4

    // Z walls
    if (Math.abs(this.position.z) > COURT_Z - BALL_RADIUS) {
      this.position.z = Math.sign(this.position.z) * (COURT_Z - BALL_RADIUS)
      this.velocity.z *= -0.8
    }
    // X end walls
    if (Math.abs(this.position.x) > COURT_X - BALL_RADIUS) {
      this.position.x = Math.sign(this.position.x) * (COURT_X - BALL_RADIUS)
      this.velocity.x *= -0.8
    }

    // Net — top edge
    const netHalf = NET_THICKNESS / 2 + BALL_RADIUS
    if (
      Math.abs(this.position.x) < netHalf &&
      this.position.y - BALL_RADIUS < NET_HEIGHT &&
      this.velocity.y < 0
    ) {
      this.position.y = NET_HEIGHT + BALL_RADIUS
      this.velocity.y = Math.abs(this.velocity.y) * 0.72
      this.velocity.x *= 0.96
    // Net — side
    } else if (prevX * this.position.x < 0 && this.position.y < NET_HEIGHT + BALL_RADIUS) {
      this.position.x = prevX > 0 ? netHalf : -netHalf
      this.velocity.x = Math.sign(prevX) * Math.max(Math.abs(this.velocity.x) * 0.96, 3.6)
    }

    // Floor → score
    if (this.position.y <= BALL_RADIUS) {
      this.position.y = BALL_RADIUS
      this.velocity.set(0, 0, 0)
      this.object3D.position.copy(this.position)
      return this.position.x < 0 ? 2 : 1
    }

    this.object3D.position.copy(this.position)
    return 0
  }
}
