'use client'
import { useState, useRef, useCallback, useEffect } from 'react'

interface Props {
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
  initialPos?: number
  note?: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = '✗ Antes',
  afterLabel = '✓ Después',
  initialPos = 38,
  note,
}: Props) {
  const [pos, setPos] = useState(initialPos)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98)
    setPos(pct)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging) updatePos(e.clientX) }
    const onTouch = (e: TouchEvent) => { if (dragging) updatePos(e.touches[0].clientX) }
    const onUp = () => setDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [dragging, updatePos])

  return (
    <>
      <div className="cro-ba-slider" ref={containerRef}>
        {/* base = after state */}
        <img className="cro-ba-before" src={afterSrc} alt="Después del Sprint" draggable={false} />
        {/* overlay = before state, clipped from left */}
        <div className="cro-ba-after-wrap" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img className="cro-ba-after" src={beforeSrc} alt="Antes del Sprint" draggable={false} />
        </div>
        <div
          className={`cro-ba-handle${dragging ? ' active' : ''}`}
          style={{ left: `${pos}%` }}
          onMouseDown={() => setDragging(true)}
          onTouchStart={() => setDragging(true)}
        >
          <div className="cro-ba-line" />
          <div className="cro-ba-knob">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M6 3L2 9l4 6M12 3l4 6-4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <span className="cro-badge cro-badge-bad" style={{ opacity: pos > 14 ? 1 : 0 }}>{beforeLabel}</span>
        <span className="cro-badge cro-badge-good" style={{ opacity: pos < 86 ? 1 : 0 }}>{afterLabel}</span>
      </div>
      {note && <p className="cro-ba-note">{note}</p>}
    </>
  )
}
