'use client'
import { useState, useRef, useCallback, useEffect } from 'react'

const changes = [
  {
    before: 'Imagen del producto desplazada bajo cabeceras y navegación secundaria.',
    change: 'Visual del producto centrado y dominante como primer elemento visible.',
    why: 'El usuario decide en 3 segundos si sigue o se va. El primer frame es el único que importa.',
  },
  {
    before: 'Valoraciones enterradas bajo la descripción técnica del producto.',
    change: 'Puntuación y número de reseñas visibles junto al precio, en el pliegue.',
    why: 'La prueba social neutraliza la duda antes de que aparezca. Junto al precio justifica la compra.',
  },
  {
    before: 'Cuatro acciones disponibles: carrito, wishlist, comparar, compartir.',
    change: 'Un único botón de compra en color de alto contraste con copy orientado al beneficio.',
    why: 'Cada acción adicional divide la atención. Una página de producto tiene un único trabajo.',
  },
  {
    before: 'Ficha técnica con lista de ingredientes como primer bloque de texto.',
    change: 'Bullets de beneficio concreto antes de las especificaciones técnicas.',
    why: 'Los clientes compran resultados, no fórmulas. El beneficio primero baja la barrera cognitiva.',
  },
]

export default function CROSection() {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
  const touchX = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98)
    setPos(pct)
  }, [])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (dragging) updatePos(e.clientX) }
    const onTouchMove = (e: TouchEvent) => { if (dragging) updatePos(e.touches[0].clientX) }
    const onUp = () => setDragging(false)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [dragging, updatePos])

  return (
    <section className="sec-cro-ba">
      <div className="w">
        <div className="cro-ba-head r">
          <span className="tag tag-w">Caso real · PDP</span>
          <h2>De página de producto genérica<br />a máquina de conversión.</h2>
          <p>Mismo tráfico, misma marca. Solo cambiamos la página de producto.</p>
        </div>

        <div className="cro-ba-slider" ref={containerRef}>
          <img
            className="cro-ba-before"
            src="/Brand/assets/CRo/Mega-Immuno-despues.png"
            alt="Después"
            draggable={false}
          />
          <div
            className="cro-ba-after-wrap"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              className="cro-ba-after"
              src="/Brand/assets/CRo/Nutrimmuno%20antes.png"
              alt="Antes"
              draggable={false}
            />
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

          <span className="cro-badge cro-badge-bad" style={{ opacity: pos > 14 ? 1 : 0 }}>✗ Antes</span>
          <span className="cro-badge cro-badge-good" style={{ opacity: pos < 86 ? 1 : 0 }}>✓ Después del Sprint</span>
        </div>

        <div
          className="cro-why-grid"
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            const delta = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(delta) < 50) return
            setActiveCard(prev => delta < 0 ? Math.min(prev + 1, changes.length - 1) : Math.max(prev - 1, 0))
          }}
        >
          {changes.map((c, i) => (
            <div key={i} className={`cro-why-card${activeCard !== i ? ' cro-card-hidden' : ''}`}>
              <div className="cro-why-row">
                <span className="cro-why-tag cro-why-tag-bad">Antes</span>
                <p className="cro-why-text">{c.before}</p>
              </div>
              <div className="cro-why-arrow">↓</div>
              <div className="cro-why-row">
                <span className="cro-why-tag cro-why-tag-good">Cambio</span>
                <p className="cro-why-text">{c.change}</p>
              </div>
              <div className="cro-why-reason">
                <span className="cro-why-reason-label">Por qué funciona</span>
                <p>{c.why}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cro-stepper">
          {changes.map((_, i) => (
            <button key={i} className={`stepper-dot${activeCard === i ? ' active' : ''}`} onClick={() => setActiveCard(i)} aria-label={`Cambio ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
