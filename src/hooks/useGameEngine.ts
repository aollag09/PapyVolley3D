import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { GameEngine } from '../game/GameEngine'
import type { GameStatus, DifficultyLevel } from '../game/GameEngine'

const DEFAULT_STATUS: GameStatus = {
  score: [0, 0],
  state: 'waiting',
  lastScorer: null,
  winner: null,
  difficulty: 'medium',
}

export function useGameEngine(canvasRef: RefObject<HTMLCanvasElement | null>) {
  const engineRef = useRef<GameEngine | null>(null)
  const [status, setStatus] = useState<GameStatus>(DEFAULT_STATUS)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const engine = new GameEngine(canvas)
    engineRef.current = engine
    engine.onStatusChange = setStatus
    engine.start()

    return () => {
      engine.dispose()
      engineRef.current = null
    }
  }, [canvasRef])

  const setDifficulty = (d: DifficultyLevel) => engineRef.current?.setDifficulty(d)
  const setJoystickKeys = (keys: Set<string>) => engineRef.current?.setJoystickKeys(keys)
  const handleJoystickInput = () => engineRef.current?.handleJoystickInput()

  return { status, setDifficulty, setJoystickKeys, handleJoystickInput }
}
