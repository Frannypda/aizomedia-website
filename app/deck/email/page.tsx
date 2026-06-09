import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Email Marketing — Aizomedia' }

const accesses = ['Cuenta Klaviyo (o la creamos)', 'Acceso a Shopify', 'Logo, colores y tipografía de marca']

export default function EmailPage() {
  return (
    <>
      {/* HERO */}
      <section className="deck-hero">
        <div className="deck-hero-orb1" />
        <div className="deck-hero-orb2" />
        <div className="w">
          <div className="deck-hero-inner">
            <span className="tag tag-w" style={{ animation: 'wup .6s .05s var(--ease) both' }}>Email Marketing — Klaviyo</span>
            <div className="deck-hero-price">
              <span className="deck-hero-price-num">600 € + IVA / mes</span>
              <span className="deck-hero-price-period">· Mínimo 3 meses</span>
            </div>
            <h1>
              Klaviyo configurado y gestionado<br />
              desde el mes 1.<br />
              <em>El setup está incluido, sin coste adicional.</em>
            </h1>
            <p className="deck-hero-sub">
              Flows esenciales activados en el primer mes. Campañas segmentadas por comportamiento y reportes mensuales con revenue atribuido a partir del mes 2.
            </p>
            <div className="deck-hero-ctas">
              <Link href="/reservar" className="btn btn-g" style={{ fontSize: '16px', padding: '14px 28px' }}>Empezar Email Marketing →</Link>
              <a href="#como-funciona" className="btn btn-ghost-w">Ver qué incluye</a>
            </div>
            <p className="deck-hero-note">Setup del mes 1 incluido · Sin coste adicional de integración · Mínimo 3 meses</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="deck-sec" id="como-funciona">
        <div className="w">
          <div className="deck-sec-head r">
            <span className="tag">Cómo funciona</span>
            <h2>Dos fases: activación en el mes 1, optimización continua desde el mes 2.</h2>
            <p>El primer mes lo dedicamos a construir la base correcta. A partir del mes 2, el canal ya trabaja para generar revenue.</p>
          </div>
          <div className="email-flow r">
            <div className="email-flow-card month1">
              <div className="efc-label">Mes 1 — Setup y activación</div>
              <h4>Construimos la base desde cero</h4>
              <ul>
                <li>Configuración de Klaviyo: listas, segmentos e integración con Shopify</li>
                <li>Flow de bienvenida: primera impresión automatizada</li>
                <li>Flow de carrito abandonado: recuperación de ventas perdidas</li>
                <li>Flow post-compra: fidelización desde la primera compra</li>
                <li>Primera campaña enviada antes de acabar el mes</li>
              </ul>
            </div>
            <div className="email-flow-card month2">
              <div className="efc-label">Mes 2 en adelante — Gestión mensual</div>
              <h4>El canal trabaja y escala</h4>
              <ul>
                <li>2-3 campañas mensuales segmentadas por comportamiento</li>
                <li>Optimización continua de flows con datos reales</li>
                <li>A/B tests en subject lines y contenido</li>
                <li>Reporte mensual: apertura, clics, revenue atribuido y recomendaciones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSES + EXCLUDES */}
      <section className="deck-sec-grey">
        <div className="w">
          <div className="deck-2col">
            <div>
              <div className="deck-sec-head r">
                <span className="tag">Accesos necesarios</span>
                <h2>Lo que necesitamos para empezar.</h2>
                <p>Si no tienes cuenta de Klaviyo, la creamos en la onboarding. Incluido sin coste adicional.</p>
              </div>
              <div className="access-badges r r1" style={{ marginTop: '4px' }}>
                {accesses.map((a) => <div className="access-badge" key={a}>{a}</div>)}
              </div>
            </div>
            <div>
              <div className="deck-sec-head r r1">
                <span className="tag" style={{ color: 'var(--red)', background: 'var(--red-p)' }}>Qué no incluye</span>
                <h2>Fuera del scope de Email Marketing.</h2>
              </div>
              <div className="deck-list cross r r2">
                <div className="deck-list-title red">No incluye</div>
                <ul>
                  <li>Suscripción de Klaviyo (la paga el cliente — empieza gratis)</li>
                  <li>Diseño gráfico avanzado fuera de plantillas de marca</li>
                  <li>SMS o push notifications</li>
                  <li>Desarrollo de integraciones custom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="deck-cta">
        <div className="w">
          <div className="deck-cta-inner r">
            <span className="tag tag-w" style={{ marginBottom: '24px' }}>Email Marketing</span>
            <h2>El canal que convierte<br /><em>a los que ya conocen tu marca.</em></h2>
            <p>Setup incluido en el mes 1. Revenue atribuido desde el mes 2.</p>
            <span className="deck-price-big">600 €</span>
            <span className="deck-price-period">+ IVA / mes · Mínimo 3 meses · Suscripción Klaviyo aparte</span>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/reservar" className="btn btn-g" style={{ fontSize: '16px', padding: '15px 32px' }}>Reservar llamada →</Link>
              <Link href="/deck" className="btn btn-ghost-w">Ver todos los servicios</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
