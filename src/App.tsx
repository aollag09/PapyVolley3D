import { useRef } from 'react'
import { useGameEngine } from './hooks/useGameEngine'
import HUD from './components/HUD'
import './App.css'

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { status, setDifficulty } = useGameEngine(canvasRef)

  return (
    <div className="app">
      <canvas ref={canvasRef} className="game-canvas" />
      <HUD status={status} onDifficulty={setDifficulty} />
    </div>
  )
}
