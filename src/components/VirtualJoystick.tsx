import { useRef, useEffect, useCallback } from 'react'
import './VirtualJoystick.css'

interface VirtualJoystickProps {
  onKeysChange: (keys: Set<string>) => void
  onJumpPress?: () => void
}

export default function VirtualJoystick({ onKeysChange, onJumpPress }: VirtualJoystickProps) {
  // Check if device supports touch (not in state to avoid hook violations)
  const isTouchDevice =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0

  if (!isTouchDevice) {
    return null
  }
  const joystickRef = useRef<HTMLDivElement>(null)
  const knobRef = useRef<HTMLDivElement>(null)
  const keysRef = useRef<Set<string>>(new Set())
  const touchIdRef = useRef<number | null>(null)

  const updateKeys = useCallback(() => {
    onKeysChange(new Set(keysRef.current))
  }, [onKeysChange])


  const handleJoystickMove = useCallback((touch: { clientX: number; clientY: number }) => {
    if (!joystickRef.current || !knobRef.current) return

    const rect = joystickRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const radius = rect.width / 2 - 8

    const dx = touch.clientX - cx
    const dy = touch.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const ratio = Math.min(1, dist / radius)

    const angle = Math.atan2(dy, dx)
    const x = Math.cos(angle) * radius * ratio
    const y = Math.sin(angle) * radius * ratio

    knobRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`

    // Determine direction (more sensitive with lower deadzone)
    const keys = keysRef.current
    keys.clear()

    if (ratio > 0.2) {  // Lower deadzone for better responsiveness
      // Use vector components for smoother direction detection
      const dx = Math.cos(angle)
      const dy = Math.sin(angle)

      // Detect primarily horizontal movement
      if (Math.abs(dx) > Math.abs(dy) * 0.5) {
        if (dx > 0) {
          keys.add('ArrowRight')
        } else {
          keys.add('ArrowLeft')
        }
      }

      // Detect primarily vertical movement
      if (Math.abs(dy) > Math.abs(dx) * 0.5) {
        if (dy < 0) {
          keys.add('ArrowUp')
        } else {
          keys.add('ArrowDown')
        }
      }
    }

    updateKeys()
  }, [updateKeys])

  const handleJoystickStart = useCallback((e: React.TouchEvent) => {
    if (touchIdRef.current !== null) return
    const touch = e.touches[0]
    touchIdRef.current = touch.identifier
    // Call onJumpPress to trigger serve if waiting
    onJumpPress?.()
    handleJoystickMove(touch)
  }, [onJumpPress, handleJoystickMove])


  const handleJoystickEnd = useCallback(() => {
    if (knobRef.current) {
      knobRef.current.style.transform = 'translate(-50%, -50%)'
    }
    touchIdRef.current = null
    keysRef.current.clear()
    updateKeys()
  }, [updateKeys])

  const handleJumpPress = useCallback(() => {
    keysRef.current.add(' ')
    updateKeys()
    // Call onJumpPress to trigger serve if waiting
    onJumpPress?.()
  }, [updateKeys, onJumpPress])

  const handleJumpRelease = useCallback(() => {
    keysRef.current.delete(' ')
    updateKeys()
  }, [updateKeys])

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (touchIdRef.current === null) return
      for (const touch of e.touches) {
        if (touch.identifier === touchIdRef.current) {
          handleJoystickMove(touch)
          break
        }
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchIdRef.current === null) return
      const stillPresent = Array.from(e.touches).some(
        (t) => t.identifier === touchIdRef.current
      )
      if (!stillPresent) {
        handleJoystickEnd()
      }
    }

    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleJoystickMove, handleJoystickEnd])

  return (
    <div className="virtual-joystick-container">
      <div
        className="joystick"
        ref={joystickRef}
        onTouchStart={handleJoystickStart}
      >
        <div className="joystick-knob" ref={knobRef} />
      </div>
      <button
        className="jump-btn"
        onTouchStart={handleJumpPress}
        onTouchEnd={handleJumpRelease}
        onMouseDown={handleJumpPress}
        onMouseUp={handleJumpRelease}
        onMouseLeave={handleJumpRelease}
      >
        JUMP
      </button>
    </div>
  )
}
