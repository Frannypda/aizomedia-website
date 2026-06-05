'use client'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div id="fcta" style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transition: 'opacity .3s' }}>
      <a href="/reservar">
        <span className="fdot" />
        Quiero mi Sprint →
      </a>
    </div>
  )
}
