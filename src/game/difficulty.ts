import { BLOB_RADIUS, BLOB_SPEED } from './constants'

export type DifficultyLevel = 'easy' | 'medium' | 'hard'

export interface AIDifficulty {
  speed: number
  jumpCooldown: number   // seconds between jumps
  reactionDist: number   // max 2D distance to trigger jump
  offsetX: number        // how far behind ball to stand
}

export const DIFFICULTIES: Record<DifficultyLevel, AIDifficulty> = {
  easy: {
    speed: BLOB_SPEED * 0.35,
    jumpCooldown: 2.0,
    reactionDist: BLOB_RADIUS * 2.5,
    offsetX: BLOB_RADIUS * 0.3,
  },
  medium: {
    speed: BLOB_SPEED * 0.8,
    jumpCooldown: 1.2,
    reactionDist: BLOB_RADIUS * 3.5,
    offsetX: BLOB_RADIUS * 0.6,
  },
  hard: {
    speed: BLOB_SPEED * 1.5,
    jumpCooldown: 0.6,
    reactionDist: BLOB_RADIUS * 5.0,
    offsetX: BLOB_RADIUS * 0.85,
  },
}
