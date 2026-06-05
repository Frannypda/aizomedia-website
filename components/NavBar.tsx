'use client'
import { useState, useEffect, useRef } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const close = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <div className={`mobile-nav${open ? ' open' : ''}`} id="mobileNav">
        <button className="mnav-close" onClick={close} aria-label="Cerrar menú">✕</button>
        <a href="/#servicios" onClick={close}>Servicios</a>
        <a href="/#sprint" onClick={close}>Sprint</a>
        <a href="/#resultados" onClick={close}>Resultados</a>
        <a href="/#equipo" onClick={close}>Equipo</a>
        <a href="/reservar" onClick={close} style={{ color: 'var(--gl)' }}>
          Quiero mi Sprint →
        </a>
      </div>

      <nav id="nav" className={hidden ? 'nav-hidden' : ''}>
        <div className="w">
          <div className="nav-in">
            <a href="/" className="nav-logo">
              <img src="/Brand/assets/Logos/aizomedia..svg" alt="Aizomedia" style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </a>
            <ul className="nav-links">
              <li><a href="/#servicios">Servicios</a></li>
              <li><a href="/#sprint">Sprint</a></li>
              <li><a href="/#resultados">Resultados</a></li>
              <li><a href="/#equipo">Equipo</a></li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <a href="/reservar" className="btn btn-g" style={{ padding: '11px 22px', fontSize: '14px' }}>
                Quiero mi Sprint →
              </a>
              <button className={`burger${open ? ' open' : ''}`} onClick={toggle} aria-label="Menú">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
