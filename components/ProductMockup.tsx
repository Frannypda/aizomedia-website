'use client'
import { useState } from 'react'

export default function ProductMockup() {
  const [after, setAfter] = useState(false)

  return (
    <section className="sec-pmock" id="mockup">
      <div className="w">
        <div className="h2c r">
          <div>
            <span className="tag">Cómo lo hacemos</span>
            <h2>Una página de producto.<br />Dos realidades.</h2>
          </div>
          <p>
            Esto es lo que ocurre cuando aplicamos CRO a una tienda real. Cada elemento
            tiene un motivo — y cada cambio tiene un impacto medible en ventas.
          </p>
        </div>

        <div className="pmock-tabs r">
          <button className={`ptab${!after ? ' on' : ''}`} onClick={() => setAfter(false)}>
            ✗ Antes del Sprint
          </button>
          <button className={`ptab${after ? ' on' : ''}`} onClick={() => setAfter(true)}>
            ✓ Después del Sprint
          </button>
        </div>

        <div className="pmock-browser r r2">
          {/* URL bar */}
          <div className="pb-chrome">
            <div className="pb-dots">
              <div className="pb-dot" /><div className="pb-dot" /><div className="pb-dot" />
            </div>
            <div className="pb-urlbar">tutienda.myshopify.com/products/zapatillas-pro</div>
          </div>

          {/* Page content */}
          <div className="pb-body">
            {/* Left: product image */}
            <div className="pb-col-img">
              <div className="pb-main-img">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c4d0e4" strokeWidth="1.2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <div className="pb-thumbs">
                <div className="pb-tn sel" /><div className="pb-tn" /><div className="pb-tn" />
              </div>
            </div>

            {/* Right: product info */}
            <div className={`pb-col-info${after ? ' is-after' : ''}`}>

              {/* State label */}
              <div className={`pb-state-tag ${after ? 'after' : 'before'}`}>
                {after ? '✓ Optimizado con Sprint' : '✗ Sin optimizar'}
              </div>

              {/* Title */}
              <div>
                <div className="pb-prod-title">
                  {after
                    ? 'Zapatillas Running Pro · Confort para 800+ km'
                    : 'Zapatillas Running Pro'}
                </div>
                <div className={`ann-chip ${after ? 'good' : 'bad'}`}>
                  {after ? '✓ Título con beneficio' : '✗ Sin propuesta de valor'}
                </div>
              </div>

              {/* Stars */}
              <div>
                <div className="pb-stars" style={{ opacity: after ? 1 : 0.25 }}>
                  {after
                    ? <><span className="sg">★★★★★</span> 48 reseñas verificadas</>
                    : <><span className="sd">★★★★★</span> Sin reseñas visibles</>}
                </div>
                <div className={`ann-chip ${after ? 'good' : 'bad'}`}>
                  {after ? '✓ Prueba social activa' : '✗ Sin prueba social'}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="pb-price">
                  €89{after && <s>€120</s>}
                </div>
                <div className={`ann-chip ${after ? 'good' : 'bad'}`}>
                  {after ? '✓ Precio anclado' : '✗ Sin precio de referencia'}
                </div>
              </div>

              {/* Description */}
              <div>
                <div className="pb-desc">
                  {after ? (
                    <ul>
                      <li>Suela reforzada para 800+ km de uso</li>
                      <li>Amortiguación adaptativa de impacto</li>
                      <li>Tejido transpirable con secado rápido</li>
                    </ul>
                  ) : (
                    <p>Zapatillas de alta calidad para tu día a día. Disponibles en varios colores y tallas. Máxima comodidad y durabilidad garantizada.</p>
                  )}
                </div>
                <div className={`ann-chip ${after ? 'good' : 'bad'}`}>
                  {after ? '✓ Beneficios concretos' : '✗ Descripción vaga'}
                </div>
              </div>

              {/* CTA */}
              <div>
                <button className={`pb-add-btn ${after ? 'after' : 'before'}`}>
                  {after ? 'Añadir al carrito — Envío gratis hoy →' : 'Añadir al carrito'}
                </button>
                <div className={`ann-chip ${after ? 'good' : 'bad'}`} style={{ marginTop: '6px' }}>
                  {after ? '✓ CTA con propuesta de valor' : '✗ CTA genérico'}
                </div>
              </div>

              {/* Trust signals */}
              <div>
                <div className="pb-trust">
                  <span className={`pb-trust-item ${after ? 'vis' : 'hid'}`}>30 días devolución</span>
                  <span className={`pb-trust-item ${after ? 'vis' : 'hid'}`}>Pago seguro</span>
                  <span className={`pb-trust-item ${after ? 'vis' : 'hid'}`}>Envío en 24h</span>
                </div>
                <div className={`ann-chip ${after ? 'good' : 'bad'}`}>
                  {after ? '✓ 3 trust signals' : '✗ Sin señales de confianza'}
                </div>
              </div>

            </div>
          </div>
        </div>

        <p className="pmock-caption r">
          Ejemplo ilustrativo · Los cambios reales se definen tras el diagnóstico de tu tienda
        </p>
      </div>
    </section>
  )
}
