import { useEffect, useState } from 'react'
import './SplashScreen.css'

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  symbol: ['🌿', '✦', '◈', '❋', '⊕', '✿', '❂', '⋆', '॰'][i % 9],
  size: 0.6 + Math.random() * 1.2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 4 + Math.random() * 4,
}))

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('enter') // enter → show → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('show'), 300)
    const t2 = setTimeout(() => setPhase('exit'), 3200)
    const t3 = setTimeout(() => onDone(), 4000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  return (
    <div className={`splash splash--${phase}`}>
      {/* Animated background rings */}
      <div className="splash__rings">
        <div className="splash__ring splash__ring--1" />
        <div className="splash__ring splash__ring--2" />
        <div className="splash__ring splash__ring--3" />
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="splash__particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}rem`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.symbol}
        </span>
      ))}

      {/* Center content */}
      <div className="splash__center">
        <div className="splash__lotus">🪷</div>

        <div className="splash__sanskrit">आयुर्वेद</div>

        <div className="splash__divider">
          <span />
          <span className="splash__divider-dot" />
          <span />
        </div>

        <h1 className="splash__title">Guleria's Ayurveda</h1>
        <p className="splash__subtitle">Mentorship Program</p>

        <p className="splash__tagline">
          Clarity &nbsp;•&nbsp; Discipline &nbsp;•&nbsp; Purpose
        </p>

        <div className="splash__loader">
          <div className="splash__loader-bar" />
        </div>
      </div>

      {/* Bottom text */}
      <p className="splash__bottom">
        Life Mastery Through Ayurveda — With Vyasa (Dr. Praveen Guleria)
      </p>
    </div>
  )
}
