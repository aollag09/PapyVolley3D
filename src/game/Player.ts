import * as THREE from 'three'
import { COURT_X, COURT_Z, BLOB_RADIUS, BLOB_SPEED, BLOB_JUMP_VEL, GRAVITY, NET_THICKNESS } from './constants'
import type { AIDifficulty } from './difficulty'
import { DIFFICULTIES } from './difficulty'

const NET_MARGIN = NET_THICKNESS / 2 + BLOB_RADIUS + 0.05

interface PlayerOptions {
  side: -1 | 1
  color: number
  isAI?: boolean
}

interface EyeData {
  pupil: THREE.Mesh
  // base position of the pupil in local space (center of eyeball front)
  baseX: number
  baseY: number
  baseZ: number
  maxOffset: number
}

interface EyebrowData {
  mesh: THREE.Mesh
  baseY: number
  baseRotY: number
  side: 1 | -1  // left or right eyebrow
}

export class Player {
  readonly object3D: THREE.Group
  readonly shadowMesh: THREE.Mesh
  readonly position = new THREE.Vector3()
  readonly velocity = new THREE.Vector3()
  readonly side: -1 | 1
  readonly isAI: boolean
  private onGround = true
  private eyes: EyeData[] = []
  private eyebrows: EyebrowData[] = []
  private jumpCooldown = 0
  private ballHitTime = 0  // For ball hit expression
  aiDifficulty: AIDifficulty = DIFFICULTIES.medium

  constructor({ side, color, isAI = false }: PlayerOptions) {
    this.side = side
    this.isAI = isAI
    this.position.set(side * 3, 0, 0)
    this.object3D = new THREE.Group()

    // Body
    const body = new THREE.Mesh(
      new THREE.SphereGeometry(BLOB_RADIUS, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshLambertMaterial({ color }),
    )
    body.scale.y = 0.72
    this.object3D.add(body)

    // Eyes
    const R = BLOB_RADIUS
    // -side: player 1 (left) faces +x, player 2 (right) faces -x
    const ex = -side * R * 0.50
    const ey = R * 0.44
    const eyeSpread = R * 0.30
    const rWhite = R * 0.20
    const rPupil = R * 0.08
    const rShine = R * 0.03
    const maxOff = rWhite * 0.48   // max pupil travel inside eyeball

    const whiteMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
    const blackMat = new THREE.MeshLambertMaterial({ color: 0x0a0a0a })
    const shineMat = new THREE.MeshBasicMaterial({ color: 0xffffff })

    for (const ez of [eyeSpread, -eyeSpread]) {
      // White eyeball
      const white = new THREE.Mesh(new THREE.SphereGeometry(rWhite, 14, 14), whiteMat)
      white.position.set(ex, ey, ez)
      this.object3D.add(white)

      // Pupil (starts centered on front face of eyeball)
      const pupilBaseX = ex - side * rWhite * 0.55   // slightly in front of the white
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(rPupil, 12, 12), blackMat)
      pupil.position.set(pupilBaseX, ey, ez)
      this.object3D.add(pupil)

      // Shine
      const shine = new THREE.Mesh(new THREE.SphereGeometry(rShine, 8, 8), shineMat)
      shine.position.set(pupilBaseX - side * rPupil * 0.3, ey + rPupil * 0.5, ez + rPupil * 0.4)
      this.object3D.add(shine)

      this.eyes.push({ pupil, baseX: pupilBaseX, baseY: ey, baseZ: ez, maxOffset: maxOff })
    }

    // Eyebrows — fun and expressive! (aligned with eyes)
    const browMat = new THREE.MeshLambertMaterial({ color: 0x333333 })
    //const browWidth = R * 0.30
    //const browHeight = R * 0.07
    //const depth = R * 0.08;

    const browWidth = R * 0.07
    const browHeight = R * 0.07
    const depth = R * 0.35;
    let browSide = 1
    for (const ez of [eyeSpread, -eyeSpread]) {
      const brow = new THREE.Mesh(
        new THREE.BoxGeometry(browWidth, browHeight, depth),
        browMat,
      )
      const browY = ey + R * 0.09  // Just above the eyes
      // Position brows slightly forward on the face for better visibility
      const browX = ex + side * R * 0.15
      brow.position.set(browX, browY, ez)
      brow.rotation.z = browSide * 0.11  // neutral angle at rest
      brow.rotation.x = browSide * 0.2
      brow.rotation.y = browSide * 0.4
      brow.castShadow = false
      this.object3D.add(brow)
      this.eyebrows.push({ mesh: brow, baseY: browY, baseRotY: browSide * 0.12, side: browSide as 1 | -1 })
      browSide = -browSide
    }

    // Shadow (separate, added to scene in GameEngine)
    this.shadowMesh = new THREE.Mesh(
      new THREE.CircleGeometry(BLOB_RADIUS * 0.85, 32),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false }),
    )
    this.shadowMesh.rotation.x = -Math.PI / 2
    this.shadowMesh.renderOrder = 1
    this.shadowMesh.position.set(this.position.x, 0.015, this.position.z)

    this.object3D.position.copy(this.position)
  }

  update(
    dt: number,
    keys: Set<string>,
    ball?: { position: THREE.Vector3; velocity: THREE.Vector3 },
  ) {
    if (this.isAI && ball) {
      this.updateAI(ball.position, ball.velocity)
    } else {
      this.updateHuman(keys)
    }

    if (this.jumpCooldown > 0) this.jumpCooldown -= dt
    if (this.ballHitTime > 0) this.ballHitTime -= dt

    this.velocity.y -= GRAVITY * dt
    this.position.addScaledVector(this.velocity, dt)

    if (this.position.y <= 0) {
      this.position.y = 0
      this.velocity.y = 0
      this.onGround = true
    } else {
      this.onGround = false
    }

    const xMin = this.side === -1 ? -(COURT_X - BLOB_RADIUS) : NET_MARGIN
    const xMax = this.side === -1 ? -NET_MARGIN : COURT_X - BLOB_RADIUS
    this.position.x = Math.max(xMin, Math.min(xMax, this.position.x))
    this.position.z = Math.max(-(COURT_Z - BLOB_RADIUS), Math.min(COURT_Z - BLOB_RADIUS, this.position.z))

    this.velocity.x = 0
    this.velocity.z = 0

    // Pupils track the ball
    if (ball) {
      for (const eye of this.eyes) {
        // Direction from eye world pos to ball, projected onto yz (the face plane)
        const worldEyeY = this.position.y + eye.baseY
        const worldEyeZ = this.position.z + eye.baseZ
        const dy = ball.position.y - worldEyeY
        const dz = ball.position.z - worldEyeZ
        const len = Math.sqrt(dy * dy + dz * dz)
        const scale = len > 0.1 ? eye.maxOffset / len : 0
        eye.pupil.position.set(
          eye.baseX,
          eye.baseY + Math.max(-eye.maxOffset, Math.min(eye.maxOffset, dy * scale)),
          eye.baseZ + Math.max(-eye.maxOffset, Math.min(eye.maxOffset, dz * scale)),
        )
      }
    }

    // Animate eyebrows — fun expressions!
    // Linear eyebrow lift based on current blob height
    const maxJumpHeight = BLOB_JUMP_VEL * BLOB_JUMP_VEL / (2 * GRAVITY)
    const heightRatio = Math.max(0, Math.min(1, this.position.y / maxJumpHeight))
    const minLift = 0.3
    const maxLift = 0.8
    const baseJumpLift = minLift + (maxLift - minLift) * heightRatio

    for (const brow of this.eyebrows) {
      // Eyebrows follow the jump height smoothly
      brow.mesh.position.y = brow.baseY + baseJumpLift

      // Hit/Angry: eyebrows frowned together, lifted higher
      const isFrowning = this.ballHitTime > 0
      let targetRotY = brow.baseRotY
      if (isFrowning) {
        targetRotY = brow.side * 0.5  // More pronounced frown
      }
      brow.mesh.rotation.y += (targetRotY - brow.mesh.rotation.y) * 0.2
    }

    // Shadow
    const s = Math.max(0.3, 1 - this.position.y * 0.12)
    this.shadowMesh.position.set(this.position.x, 0.015, this.position.z)
    this.shadowMesh.scale.setScalar(s)
    ;(this.shadowMesh.material as THREE.MeshBasicMaterial).opacity = 0.35 * s

    this.object3D.position.copy(this.position)
  }

  private updateHuman(keys: Set<string>) {
    this.velocity.x = keys.has('ArrowLeft') ? -BLOB_SPEED : keys.has('ArrowRight') ? BLOB_SPEED : 0
    this.velocity.z = keys.has('ArrowUp') ? -BLOB_SPEED : keys.has('ArrowDown') ? BLOB_SPEED : 0
    if (keys.has(' ') && this.onGround) {
      this.velocity.y = BLOB_JUMP_VEL
      this.onGround = false
    }
  }

  private updateAI(ballPos: THREE.Vector3, ballVel: THREE.Vector3) {
    const d = this.aiDifficulty
    const offsetX = NET_MARGIN + BLOB_RADIUS * 0.8
    const targetX = Math.max(offsetX, Math.min(COURT_X - BLOB_RADIUS, ballPos.x + d.offsetX))
    const targetZ = Math.max(-(COURT_Z - BLOB_RADIUS), Math.min(COURT_Z - BLOB_RADIUS, ballPos.z))

    const dx = targetX - this.position.x
    const dz = targetZ - this.position.z
    const len = Math.sqrt(dx * dx + dz * dz)
    if (len > 0.1) {
      this.velocity.x = (dx / len) * d.speed
      this.velocity.z = (dz / len) * d.speed
    }

    const ballFalling = ballVel.y < 1
    const ballOnMySide = ballPos.x > 0
    const dist2d = Math.sqrt((ballPos.x - this.position.x) ** 2 + (ballPos.z - this.position.z) ** 2)

    if (this.onGround && this.jumpCooldown <= 0 && ballOnMySide && ballFalling && dist2d < d.reactionDist) {
      this.velocity.y = BLOB_JUMP_VEL
      this.onGround = false
      this.jumpCooldown = d.jumpCooldown
    }
  }

  moveTo(x: number, z: number) {
    this.position.set(x, 0, z)
    this.velocity.set(0, 0, 0)
    this.onGround = true
    this.object3D.position.copy(this.position)
    this.shadowMesh.position.set(x, 0.015, z)
    this.shadowMesh.scale.setScalar(1)
  }

  reset() {
    this.moveTo(this.side * 3, 0)
  }

  onBallHit() {
    this.ballHitTime = 0.2  // Show angry expression for 0.2 seconds
  }
}
