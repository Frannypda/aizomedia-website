import type { Metadata } from 'next'
import Link from 'next/link'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

export const metadata: Metadata = { title: 'Sprint de Conversión — Aizomedia' }

const features = [
  { icon: '🎯', title: 'Briefing inicial 20-30 min', desc: 'Sesión para entender tu tienda, tu producto y tu cliente. Nada de plantillas.' },
  { icon: '🔍', title: 'Auditoría completa del funnel', desc: 'Home → colección → producto → carrito → checkout. Los 5 puntos del recorrido del comprador.' },
  { icon: '⚡', title: '4 implementaciones en Shopify', desc: 'Los 4 puntos de mayor impacto, ejecutados directamente. Copy, estructura, prueba social o fricción.' },
  { icon: '🎬', title: 'Loom de entrega', desc: 'Vídeo de 10-15 min explicando cada cambio y el razonamiento detrás de cada decisión.' },
  { icon: '📋', title: 'Roadmap 30 días', desc: 'Los siguientes pasos priorizados para mantener el momentum más allá del Sprint.' },
  { icon: '🔑', title: 'Solo acceso de colaborador', desc: 'No hace falta instalar nada. Solo acceso al panel de Shopify. Sin apps de pago.' },
]

const phases = [
  {
    n: '01', label: 'Días 1 — 3', title: 'Diagnóstico: encontramos dónde pierde ventas el funnel',
    desc: 'Revisamos tu tienda completa: home, colección, página de producto, carrito y checkout. Analizamos comportamiento de usuarios y datos disponibles. Al final de la fase tienes los 4 puntos de mayor pérdida identificados y priorizados. Necesitamos un briefing de 20-30 min para entender tu producto y tu cliente ideal.',
  },
  {
    n: '02', label: 'Días 4 — 11', title: 'Implementación: cirugía directa en Shopify',
    desc: 'Actuamos sobre los 4 puntos identificados. Puede ser copy de página de producto, estructura del hero, prueba social, gestión de objeciones o fricción en el checkout — lo que el diagnóstico indique. Todo implementado directamente en tu tienda, sin que tengas que tocar nada.',
  },
  {
    n: '03', label: 'Días 12 — 14', title: 'Entrega: Loom explicativo + roadmap',
    desc: 'Recibes un vídeo de 10-15 minutos con cada cambio y su razonamiento. Más un roadmap priorizado para los próximos 30 días para que el trabajo no se detenga al acabar el Sprint.',
  },
]

export default function SprintPage() {
  return (
    <>
      {/* HERO */}
      <section className="deck-hero">
        <div className="deck-hero-orb1" />
        <div className="deck-hero-orb2" />
        <div className="w">
          <div className="deck-hero-inner">
            <span className="tag tag-w" style={{ animation: 'wup .6s .05s var(--ease) both' }}>Sprint de Conversión Ecommerce</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '8px', animation: 'wup .6s .1s var(--ease) both' }}>
              <span style={{ fontSize: '22px', color: 'rgba(255,255,255,.45)', textDecoration: 'line-through', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700 }}>720 €</span>
              <span style={{ fontSize: '13px', fontWeight: 700, background: '#e8a020', color: '#fff', padding: '5px 12px', borderRadius: '100px', letterSpacing: '.04em', textTransform: 'uppercase' }}>Oferta verano</span>
              <span style={{ fontSize: '28px', fontWeight: 800, color: '#fff', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif' " }}>590 € + IVA</span>
            </div>
            <h1>
              Tu funnel tiene 4 puntos<br />
              donde pierde ventas.<br />
              <em>Los encontramos y los arreglamos en 14 días.</em>
            </h1>
            <p className="deck-hero-sub">
              Diagnóstico completo e implementación directa en Shopify. No es un informe con recomendaciones — son cambios reales en tu tienda desde el día 4.
            </p>
            <div className="deck-hero-ctas">
              <Link href="/reservar" className="btn btn-g" style={{ fontSize: '16px', padding: '14px 28px' }}>Reservar Sprint →</Link>
              <a href="#como-funciona" className="btn btn-ghost-w">Ver cómo funciona</a>
            </div>
            <p className="deck-hero-note">Máximo 7 Sprints activos al mes · Disponibilidad inmediata</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="deck-sec" id="como-funciona">
        <div className="w">
          <div className="deck-sec-head r">
            <span className="tag">Cómo funciona</span>
            <h2>14 días. Diagnóstico real + cambios implementados.</h2>
            <p>Una sesión de briefing, 10 días de trabajo y una entrega completa. Sin reuniones intermedias innecesarias.</p>
          </div>
          <div className="deck-timeline">
            <div className="deck-tl-line" />
            {phases.map((ph, i) => (
              <div className={`deck-phase r r${i + 1}`} key={ph.n}>
                <div className="deck-phase-dot">{ph.n}</div>
                <div>
                  <div className="deck-phase-label">{ph.label}</div>
                  <h3>{ph.title}</h3>
                  <p>{ph.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <section className="sec-cro-ba">
        <div className="w">
          <div className="cro-ba-head r">
            <span className="tag tag-w">Caso real · Nutrimmuno</span>
            <h2>Misma tienda, mismo tráfico.<br />Solo cambiamos lo que bloqueaba las ventas.</h2>
            <p>Desliza para comparar antes y después del Sprint.</p>
          </div>
          <BeforeAfterSlider
            beforeSrc="/Brand/assets/CRo/Nutrimmuno%20antes%20ancho%20completo.png"
            afterSrc="/Brand/assets/CRo/Mega-Immuno-despues.png"
            beforeLabel="✗ Antes del Sprint"
            afterLabel="✓ Después del Sprint"
            initialPos={38}
            note="Mismo producto · Mismo presupuesto publicitario · Distinta conversión"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="deck-sec-grey">
        <div className="w">
          <div className="deck-sec-head r">
            <span className="tag">Qué incluye</span>
            <h2>Todo lo necesario para diagnóstico e implementación.</h2>
          </div>
          <div className="deck-feat-grid">
            {features.map((f, i) => (
              <div className={`deck-feat r r${(i % 4) + 1}`} key={f.title}>
                <div className="deck-feat-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE + GUARANTEE */}
      <section className="deck-sec">
        <div className="w">
          <div className="deck-2col">
            <div>
              <div className="deck-sec-head r">
                <span className="tag">Alcance definido</span>
                <h2>Scope cerrado.<br />Ejecución al 100%.</h2>
                <p>El Sprint tiene un alcance quirúrgico. Así garantizamos velocidad y calidad real en 14 días, sin dispersión.</p>
              </div>
              <div className="deck-garantia r">
                <div className="deck-garantia-icon">🛡️</div>
                <div>
                  <h3>Garantía 100% — sin letra pequeña</h3>
                  <p>Si en 14 días no entregamos diagnóstico completo, implementaciones y Loom final, te devolvemos el 100% del importe. Sin preguntas. Sin descuentos parciales.</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div className="deck-list check r r1">
                <div className="deck-list-title">Incluye</div>
                <ul>
                  <li>Briefing inicial de 20-30 min</li>
                  <li>Auditoría completa del funnel (5 páginas)</li>
                  <li>4 implementaciones directas en Shopify</li>
                  <li>Loom de entrega de 10-15 min</li>
                  <li>Roadmap priorizado de los próximos 30 días</li>
                </ul>
              </div>
              <div className="deck-list cross r r2">
                <div className="deck-list-title red">No incluye</div>
                <ul>
                  <li>Rediseño completo de la tienda</li>
                  <li>Diseño gráfico o fotografía de producto</li>
                  <li>Instalación de apps o desarrollo a medida</li>
                  <li>Gestión de campañas de publicidad</li>
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
            <span className="tag tag-w" style={{ marginBottom: '24px' }}>Empieza hoy</span>
            <h2>Diagnóstico + implementación<br /><em>en 14 días exactos.</em></h2>
            <p style={{ color: '#fff' }}>Si no entregamos en 14 días, te devolvemos el 100%.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', margin: '8px 0 4px' }}>
              <span style={{ fontSize: '22px', color: 'rgba(255,255,255,.4)', textDecoration: 'line-through', fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontWeight: 700 }}>720 €</span>
              <span style={{ fontSize: '13px', fontWeight: 700, background: '#e8a020', color: '#fff', padding: '5px 12px', borderRadius: '100px', letterSpacing: '.04em', textTransform: 'uppercase' }}>Oferta verano</span>
            </div>
            <span className="deck-price-big">590 €</span>
            <span className="deck-price-period">+ IVA · Pago único · Sin permanencia</span>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/reservar" className="btn btn-g" style={{ fontSize: '16px', padding: '15px 32px' }}>Reservar Sprint ahora</Link>
              <Link href="/deck" className="btn btn-ghost-w">Ver todos los servicios</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
