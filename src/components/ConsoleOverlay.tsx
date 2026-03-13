import { useEffect, useState } from 'react'
import './ConsoleOverlay.css'

interface LogEntry {
  type: 'log' | 'error' | 'warn'
  message: string
  timestamp: string
}

export default function ConsoleOverlay() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Capture console.log
    const originalLog = console.log
    console.log = (...args) => {
      originalLog(...args)
      const message = args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' ')
      addLog('log', message)
    }

    // Capture console.error
    const originalError = console.error
    console.error = (...args) => {
      originalError(...args)
      const message = args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' ')
      addLog('error', message)
    }

    // Capture console.warn
    const originalWarn = console.warn
    console.warn = (...args) => {
      originalWarn(...args)
      const message = args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' ')
      addLog('warn', message)
    }

    // Capture uncaught errors
    const handleError = (event: ErrorEvent) => {
      addLog('error', `${event.message} at ${event.filename}:${event.lineno}`)
    }
    window.addEventListener('error', handleError)

    return () => {
      console.log = originalLog
      console.error = originalError
      console.warn = originalWarn
      window.removeEventListener('error', handleError)
    }
  }, [])

  const addLog = (type: LogEntry['type'], message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [...prev.slice(-49), { type, message, timestamp }])
  }

  if (!isVisible) {
    return (
      <button className="console-toggle" onClick={() => setIsVisible(true)}>
        📋
      </button>
    )
  }

  return (
    <div className="console-overlay">
      <div className="console-header">
        <span>Console</span>
        <button onClick={() => setIsVisible(false)}>✕</button>
      </div>
      <div className="console-logs">
        {logs.map((log, i) => (
          <div key={i} className={`console-log console-${log.type}`}>
            <span className="console-time">{log.timestamp}</span>
            <span className="console-msg">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
