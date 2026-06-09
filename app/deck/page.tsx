import type { Metadata } from 'next'
import Link from 'next/link'
import ComboCalculator from '@/components/ComboCalculator'

export const metadata: Metadata = { title: 'Servicios — Aizomedia' }

const monthly = [
  {
    tag: 'Mensual · Mínimo 3 meses',
    name: 'CRO Continuo',
    desc: 'Optimización mensual del funnel con implementación directa en Shopify. Un activo principal + hasta 4 ajustes menores + informe + Loom cada mes.',
    price: '850', period: '€ / mes',
    href: '/deck/cro',
    cta: 'Ver detalle del servicio',
  },
  {
    tag: 'Mensual · Mínimo 3 meses',
    name: 'Meta Ads',
    desc: 'Gestión completa full-funnel en Facebook e Instagram. Captación, consideración y conversión coordinadas + optimización diaria.',
    price: '800', period: '€ / mes',
    href: '/deck/meta',
    cta: 'Ver detalle del servicio',
  },
  {
    tag: 'Mensual · Mínimo 3 meses',
    name: 'Email Marketing',
    desc: 'Klaviyo configurado desde cero (setup incluido en mes 1) + gestión mensual de flows y campañas segmentadas.',
    price: '600', period: '€ / mes',
    href: '/deck/email',
    cta: 'Ver detalle del servicio',
  },
]

export default function DeckHubPage() {
  return (
    <>
      {/* HUB HERO */}
      <section className="deck-hub-hero">
        <div className="deck-hub-hero-orb" />
        <div className="w">
          <div className="deck-hub-hero-inner">
            <span className="tag tag-w" style={{ animation: 'wup .6s .05s var(--ease) both' }}>Solo accesible vía link · No indexado</span>
            <h1>
              Servicios<br />
              <em>AIZOMEDIA</em>
            </h1>
            <p className="deck-hub-hero-sub">
              Todo lo que hacemos, explicado con detalle. Precios, alcance y garantías sin letra pequeña.
            </p>
          </div>
        </div>
      </section>

      {/* SPRINT — FEATURED */}
      <section className="deck-sec-grey">
        <div className="w">
          <div className="deck-sec-head r">
            <span className="tag">Punto de entrada recomendado</span>
            <h2>Sprint de Conversión Ecommerce</h2>
            <p style={{ maxWidth: '640px' }}>
              Diagnóstico completo + implementación directa en 14 días. Los 4 puntos donde más ventas se pierden, arreglados en Shopify. No es un informe — son cambios reales en tu tienda.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--grey)', textDecoration: 'line-through' }}>720 €</span>
                <div style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: '44px', fontWeight: 800, color: 'var(--n)', letterSpacing: '-.04em', lineHeight: 1 }}>
                  590 <span style={{ fontSize: '20px', fontWeight: 500, color: 'var(--grey)', fontFamily: 'var(--font-inter),sans-serif' }}>€ + IVA</span>
                </div>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, background: '#e8a020', color: '#fff', padding: '6px 14px', borderRadius: '100px', letterSpacing: '.04em', textTransform: 'uppercase' }}>Oferta verano</span>
              <span style={{ fontSize: '13px', color: 'var(--grey)', background: '#fff', border: '1px solid var(--line)', padding: '6px 14px', borderRadius: '100px', fontWeight: 600 }}>Pago único · Sin permanencia</span>
              <span style={{ fontSize: '13px', color: 'var(--gd)', background: 'var(--gp)', padding: '6px 14px', borderRadius: '100px', fontWeight: 700 }}>🛡️ Garantía: si no entregamos en 14 días, devolución total</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
              <Link href="/deck/sprint" className="btn btn-n">Ver detalle del Sprint →</Link>
              <Link href="/reservar" className="btn btn-g">Reservar ahora</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MONTHLY SERVICES */}
      <section className="deck-sec">
        <div className="w">
          <div className="deck-sec-head r">
            <span className="tag">Servicios mensuales</span>
            <h2>Gestión continua para escalar.</h2>
            <p>Se contratan de forma independiente o combinados con descuento. Cada uno tiene su scope y precio claro.</p>
          </div>
          <div className="deck-srv-grid">
            {monthly.map((s, i) => (
              <div className={`deck-srv-card r r${i + 1}`} key={s.name}>
                <div className="deck-srv-tag">{s.tag}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <Link href={s.href} className="deck-srv-card-link">{s.cta} →</Link>
                <div className="deck-srv-price" style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--line)' }}>{s.price} <span>{s.period} + IVA</span></div>
              </div>
            ))}
          </div>

          {/* PACK CREATIVOS */}
          <div className="deck-pack-row" style={{ marginTop: '18px' }}>
            <div className="deck-srv-card r r1">
              <div className="deck-srv-tag">Pack único · Sin permanencia</div>
              <h3>Pack Creativos S</h3>
              <p>5 creatividades para Meta Ads. Formatos 1:1, 4:5 y 9:16. Copy y ángulos de venta incluidos.</p>
              <Link href="/reservar" className="deck-srv-card-link">Pedir Pack S →</Link>
              <div className="deck-srv-price" style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--line)' }}>297 <span>€ + IVA</span></div>
            </div>
            <div className="deck-srv-card r r2">
              <div className="deck-srv-tag">Pack único · Sin permanencia</div>
              <h3>Pack Creativos L</h3>
              <p>10 creatividades para Meta Ads. Formatos 1:1, 4:5 y 9:16. Copy y ángulos de venta incluidos.</p>
              <Link href="/reservar" className="deck-srv-card-link">Pedir Pack L →</Link>
              <div className="deck-srv-price" style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--line)' }}>497 <span>€ + IVA</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* COMBO CALCULATOR */}
      <section className="deck-sec-grey">
        <div className="w">
          <div className="deck-sec-head r">
            <span className="tag">Combos con descuento</span>
            <h2>Combina servicios mensuales y ahorra.</h2>
            <p>Contratando dos o más servicios juntos se aplica descuento automático. Selecciona los que te interesan para ver el precio final.</p>
          </div>
          <ComboCalculator />
          <div className="r" style={{ marginTop: '20px', padding: '16px 20px', background: '#fff', borderRadius: '12px', border: '1px solid var(--line)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '14px', color: 'var(--grey)', lineHeight: 1.6 }}>
              Los combos aplican a los tres servicios mensuales (CRO Continuo, Meta Ads, Email Marketing). Sprint y Pack Creativos son servicios independientes con precio fijo.
            </span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="deck-cta">
        <div className="w">
          <div className="deck-cta-inner r">
            <span className="tag tag-w" style={{ marginBottom: '24px' }}>¿Listo para empezar?</span>
            <h2>El siguiente paso es<br /><em>una llamada de 30 minutos.</em></h2>
            <p>Sin compromiso. Vemos si hay encaje y qué servicio tiene más sentido para tu situación.</p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
              <Link href="/reservar" className="btn btn-g" style={{ fontSize: '16px', padding: '15px 32px' }}>Reservar llamada →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
