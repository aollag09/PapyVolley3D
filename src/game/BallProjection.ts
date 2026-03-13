import * as THREE from 'three'
import { GRAVITY, COURT_X, COURT_Z, BALL_RADIUS, NET_HEIGHT, NET_THICKNESS, BLOB_RADIUS } from './constants'

interface BallState {
  position: THREE.Vector3
  velocity: THREE.Vector3
}

interface LandingPoint {
  position: THREE.Vector3
  onBlob: boolean
}

/**
 * Predicts where the ball will land given current position and velocity.
 * Simulates gravity, bounces, and checks for blob collisions.
 */
export function predictBallLanding(ball: BallState, blobs: THREE.Vector3[]): LandingPoint | null {
  const maxSteps = 500
  const dt = 0.016 // ~60fps simulation step

  // Make copies to avoid mutating original state
  const pos = ball.position.clone()
  const vel = ball.velocity.clone()

  for (let step = 0; step < maxSteps; step++) {
    vel.y -= GRAVITY * dt

    pos.addScaledVector(vel, dt)

    // Check floor collision
    if (pos.y <= BALL_RADIUS) {
      return {
        position: pos.clone(),
        onBlob: false,
      }
    }

    // Check blob collisions
    for (const blobPos of blobs) {
      const dx = pos.x - blobPos.x
      const dy = pos.y - blobPos.y
      const dz = pos.z - blobPos.z
      const distSq = dx * dx + dy * dy + dz * dz
      const minDist = BLOB_RADIUS + BALL_RADIUS

      if (distSq < minDist * minDist) {
        return {
          position: pos.clone(),
          onBlob: true,
        }
      }
    }

    // Wall bounces (simplified - just for continuity)
    if (Math.abs(pos.z) > COURT_Z - BALL_RADIUS) {
      pos.z = Math.sign(pos.z) * (COURT_Z - BALL_RADIUS)
      vel.z *= -0.8
    }
    if (Math.abs(pos.x) > COURT_X - BALL_RADIUS) {
      pos.x = Math.sign(pos.x) * (COURT_X - BALL_RADIUS)
      vel.x *= -0.8
    }

    // Net collision (simplified)
    const netHalf = NET_THICKNESS / 2 + BALL_RADIUS
    if (Math.abs(pos.x) < netHalf && pos.y - BALL_RADIUS < NET_HEIGHT && vel.y < 0) {
      pos.y = NET_HEIGHT + BALL_RADIUS
      vel.y = Math.abs(vel.y) * 0.72
      vel.x *= 0.96
    }

    // Stop if ball is essentially stationary on ground
    if (pos.y <= BALL_RADIUS && vel.length() < 0.5) {
      return {
        position: pos.clone(),
        onBlob: false,
      }
    }
  }

  return null
}

/**
 * Creates a visual ring to indicate landing position
 */
export function createProjectionRing(): THREE.Mesh {
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.6, 0.1, 16, 100),
    new THREE.MeshBasicMaterial({
      color: 0xaaddff,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      fog: false,
    }),
  )
  ring.rotation.x = -Math.PI / 2 // lay flat on ground
  ring.position.y = 0.02 // slight offset from ground
  ring.visible = false
  return ring
}
