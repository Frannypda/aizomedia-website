import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Meta Ads — Aizomedia' }

const monthly = [
  'Estructura full-funnel: captación (TOF), consideración (MOF) y conversión (BOF)',
  'Optimización diaria de lunes a viernes: pujas, audiencias, creatividades y presupuesto',
  'Análisis semanal de rendimiento con ajustes en tiempo real',
  'Reporte mensual con CTR, ROAS, CAC y recomendaciones para el mes siguiente',
]

const funnel = [
  { tag: 'TOF', label: 'Top of Funnel — Captación', title: 'Audiencias frías', desc: 'Campañas de prospección hacia públicos nuevos. Intereses, comportamientos y lookalikes de tus mejores clientes.', cls: 'funnel-tof' },
  { tag: 'MOF', label: 'Middle of Funnel — Consideración', title: 'Retargeting suave', desc: 'Impactamos a visitantes que ya conocen tu marca pero no han comprado. Contenido de valor y prueba social.', cls: 'funnel-mof' },
  { tag: 'BOF', label: 'Bottom of Funnel — Conversión', title: 'Retargeting de conversión', desc: 'Visitantes del carrito, producto y checkout. Los más cercanos a comprar. Máxima presión de cierre.', cls: 'funnel-bof' },
]

const accesses = ['Business Manager', 'Cuenta publicitaria', 'Píxel de Meta instalado', 'Catálogo de productos (si aplica)']

export default function MetaPage() {
  return (
    <>
      {/* HERO */}
      <section className="deck-hero">
        <div className="deck-hero-orb1" />
        <div className="deck-hero-orb2" />
        <div className="w">
          <div className="deck-hero-inner">
            <span className="tag tag-w" style={{ animation: 'wup .6s .05s var(--ease) both' }}>Meta Ads — Facebook & Instagram</span>
            <div className="deck-hero-price">
              <span className="deck-hero-price-num">800 € + IVA / mes</span>
              <span className="deck-hero-price-period">· Mínimo 3 meses</span>
            </div>
            <h1>
              No solo optimizamos el tráfico.<br />
              Nos aseguramos de que ese tráfico<br />
              <em>llega a una tienda que ya convierte.</em>
            </h1>
            <p className="deck-hero-sub">
              Gestión completa full-funnel en Meta para ecommerce en Shopify. Captación, consideración y conversión coordinadas desde el primer mes.
            </p>
            <div className="deck-hero-ctas">
              <Link href="/reservar" className="btn btn-g" style={{ fontSize: '16px', padding: '14px 28px' }}>Empezar Meta Ads →</Link>
              <a href="#que-incluye" className="btn btn-ghost-w">Ver qué incluye</a>
            </div>
            <p className="deck-hero-note">Sin IVA · Presupuesto publicitario aparte · Mínimo 3 meses</p>
          </div>
        </div>
      </section>

      {/* MONTHLY */}
      <section className="deck-sec" id="que-incluye">
        <div className="w">
          <div className="deck-2col">
            <div>
              <div className="deck-sec-head r">
                <span className="tag">Qué incluye cada mes</span>
                <h2>Gestión activa, no configuración y olvido.</h2>
                <p>Optimización diaria de lunes a viernes. No configuramos la campaña y desaparecemos — estamos encima todos los días.</p>
              </div>
              <div className="deck-list check r r1">
                <div className="deck-list-title">Incluye mensualmente</div>
                <ul>
                  {monthly.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
            <div>
              <div className="deck-sec-head r r1">
                <span className="tag">Estructura de campaña</span>
                <h2>Full-funnel desde el primer mes.</h2>
                <p>Tres capas de campaña coordinadas para impactar al comprador en cada fase de su decisión.</p>
              </div>
              <div className="funnel-flow r r2">
                {funnel.map((f) => (
                  <div className="funnel-stage" key={f.tag}>
                    <span className={`funnel-stage-tag ${f.cls}`}>{f.label}</span>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                <p>Acceso como administrador o con rol de anunciante. Sin excepciones — sin acceso no podemos gestionar.</p>
              </div>
              <div className="access-badges r r1">
                {accesses.map((a) => <div className="access-badge" key={a}>{a}</div>)}
              </div>
            </div>
            <div>
              <div className="deck-sec-head r r1">
                <span className="tag" style={{ color: 'var(--red)', background: 'var(--red-p)' }}>Qué no incluye</span>
                <h2>Fuera del scope de Meta Ads.</h2>
              </div>
              <div className="deck-list cross r r2">
                <div className="deck-list-title red">No incluye</div>
                <ul>
                  <li>Producción de creatividades (disponible como Pack Creativos)</li>
                  <li>Diseño gráfico</li>
                  <li>Gestión de otras plataformas de pago (Google, TikTok)</li>
                  <li>CRO o mejoras en la tienda</li>
                  <li>El presupuesto publicitario (lo paga el cliente)</li>
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
            <span className="tag tag-w" style={{ marginBottom: '24px' }}>Meta Ads</span>
            <h2>Tráfico cualificado hacia<br /><em>una tienda que convierte.</em></h2>
            <p>Full-funnel desde el primer mes. Sin configuración y olvido.</p>
            <span className="deck-price-big">800 €</span>
            <span className="deck-price-period">+ IVA / mes · Mínimo 3 meses · Presupuesto publicitario aparte</span>
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
