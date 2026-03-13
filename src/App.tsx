import { useRef } from 'react'
import { useGameEngine } from './hooks/useGameEngine'
import HUD from './components/HUD'
import VirtualJoystick from './components/VirtualJoystick'
import './App.css'

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { status, setDifficulty, setJoystickKeys, handleJoystickInput } = useGameEngine(canvasRef)

  return (
    <div className="app">
      <canvas ref={canvasRef} className="game-canvas" />
      <HUD status={status} onDifficulty={setDifficulty} />
      <VirtualJoystick onKeysChange={setJoystickKeys} onJumpPress={handleJoystickInput} />
    </div>
  )
}
