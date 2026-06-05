'use client'
import { useState, useRef } from 'react'

const floatingIcons = [
  { left: '4%', dur: '22s', delay: '0s', icon: 'bag' },
  { left: '16%', dur: '18s', delay: '5s', icon: 'cart' },
  { left: '32%', dur: '26s', delay: '2s', icon: 'truck' },
  { left: '52%', dur: '20s', delay: '8s', icon: 'chart' },
  { left: '68%', dur: '24s', delay: '3s', icon: 'bag' },
  { left: '84%', dur: '19s', delay: '11s', icon: 'cart' },
]

function BagIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}
function CartIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
    </svg>
  )
}
function TruckIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 5v4h-7V8z" />
      <circle cx="5.5" cy="18.5" r="1.5" /><circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
  )
}
function ChartIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

const TOTAL = 5

export default function ServicesSection() {
  const [active, setActive] = useState(0)
  const touchX = useRef(0)

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(delta) < 50) return
    setActive(prev => delta < 0 ? Math.min(prev + 1, TOTAL - 1) : Math.max(prev - 1, 0))
  }

  const h = (i: number) => active !== i ? ' srv-hidden' : ''

  return (
    <section className="sec-srv" id="servicios">
      {floatingIcons.map((fi, i) => (
        <div key={i} className="srv-float" style={{ left: fi.left, bottom: '-60px', animationDuration: fi.dur, animationDelay: fi.delay }}>
          {fi.icon === 'bag' && <BagIcon stroke="rgba(10,26,53,.5)" />}
          {fi.icon === 'cart' && <CartIcon stroke="rgba(62,125,94,.45)" />}
          {fi.icon === 'truck' && <TruckIcon stroke="rgba(10,26,53,.4)" />}
          {fi.icon === 'chart' && <ChartIcon stroke="rgba(62,125,94,.4)" />}
        </div>
      ))}

      <div className="w">
        <div className="inner">
          <div className="srv-head">
            <span className="tag r">Nuestros servicios</span>
            <h2 className="r r1">Todo lo que necesitas<br />para convertir y escalar.</h2>
            <p className="srv-intro r r2">
              Cinco servicios. Un sistema. Empiezas por el Sprint — lo que viene después,
              solo si tiene sentido para ti.
            </p>
          </div>

          <div className="srv-grid" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div className={`sc sc-feat${h(0)}`}>
              <div className="sc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="2" strokeLinecap="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div className="sc-step">La puerta de entrada</div>
              <h3>Sprint de Conversión</h3>
              <p>14 días. Entramos en tu tienda, encontramos exactamente dónde se pierde la venta, lo arreglamos, y te dejamos un roadmap para los siguientes 30 días. Sin permanencia.</p>
            </div>

            <div className={`sc${h(1)}`}>
              <div className="sc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <h3>CRO Continuo</h3>
              <p>Si el Sprint deja margen claro de mejora, seguimos. Cada mes optimizamos una parte del funnel con datos reales — sin rediseños, sin cambios a ciegas.</p>
            </div>

            <div className={`sc${h(2)}`}>
              <div className="sc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3>Meta Ads</h3>
              <p>Campañas diseñadas para llevar al usuario correcto a una tienda que ya convierte. No para quemar presupuesto en tráfico que luego no compra.</p>
            </div>

            <div className={`sc${h(3)}`}>
              <div className="sc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>Email Marketing</h3>
              <p>Recuperas a los clientes que ya pasaron por tu tienda. Flows y campañas que hacen crecer el LTV sin gastar más en adquisición.</p>
            </div>

            <div className={`sc sc-creative${h(4)}`} style={{ gridColumn: 'span 2' }}>
              <div className="sc-creative-inner">
                <div className="sc-icon" style={{ marginBottom: 0, flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <div className="sc-creative-text">
                  <h3>Pack Creativos</h3>
                  <p>Piezas para Meta Ads diseñadas para detener el scroll y vender. Formatos 1:1, 4:5 y 9:16 con copy y ángulos probados.</p>
                  <div className="creative-previews">
                    <div className="cp-item">1:1<br />Estático</div>
                    <div className="cp-item">4:5<br />Vídeo</div>
                    <div className="cp-item">9:16<br />Story</div>
                    <div className="cp-item">+7<br />piezas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="srv-stepper">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <button key={i} className={`stepper-dot${active === i ? ' active' : ''}`} onClick={() => setActive(i)} aria-label={`Servicio ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
