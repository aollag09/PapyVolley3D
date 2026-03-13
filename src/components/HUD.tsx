import type { GameStatus, DifficultyLevel } from '../game/GameEngine'
import './HUD.css'

const DIFF_LABELS: Record<DifficultyLevel, string> = {
  easy: '🟢 Easy',
  medium: '🟡 Medium',
  hard: '🔴 Hard',
}

interface HUDProps {
  status: GameStatus
  onDifficulty: (d: DifficultyLevel) => void
}

export default function HUD({ status, onDifficulty }: HUDProps) {
  const { score, state, lastScorer, winner, difficulty } = status

  return (
    <div className="hud">
      <div className="scoreboard">
        <div className="scoreboard-left">
          <div className="scoreboard-title">Papy Volley 3D</div>
          <div className="scoreboard-content">
            <span className="team blue">You</span>
            <span className="score">{score[0]} – {score[1]}</span>
            <span className="team red">CPU</span>
          </div>
        </div>

        <div className="diff-bar">
          {(['easy', 'medium', 'hard'] as DifficultyLevel[]).map(d => (
            <button
              key={d}
              className={`diff-btn ${difficulty === d ? 'active' : ''}`}
              onClick={() => onDifficulty(d)}
            >
              {DIFF_LABELS[d]}
            </button>
          ))}
        </div>
      </div>

      {state === 'waiting' && (
        <div className="message">
          {lastScorer !== null && (
            <div className="scored">{lastScorer === 1 ? 'You scored!' : 'CPU scored!'}</div>
          )}
          <div className="prompt">Press any key or tap JUMP to serve</div>
        </div>
      )}

      {state === 'gameover' && (
        <div className="message gameover">
          <div className="scored">{winner === 1 ? '🎉 You win!' : 'CPU wins!'}</div>
          <div className="prompt">Press any key to restart</div>
        </div>
      )}
    </div>
  )
}
