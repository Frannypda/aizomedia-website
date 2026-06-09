import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'CRO Continuo — Aizomedia' }

const weeks = [
  { n: 'Semana 1', title: 'Análisis y priorización', desc: 'Revisamos los datos del mes anterior. Identificamos qué mejoró, qué necesita iteración y cuál es el siguiente activo a trabajar según el roadmap.' },
  { n: 'Semanas 2 — 3', title: 'Implementación directa', desc: 'Trabajamos sobre un activo principal: una página, una sección clave del funnel o un flujo completo como el checkout. Implementado en Shopify.' },
  { n: 'Semana 4', title: 'Informe mensual + Loom', desc: 'Recibes todos los cambios realizados, el impacto observado y el backlog priorizado para el mes siguiente. Más un Loom explicando las decisiones clave.' },
]

export default function CROPage() {
  return (
    <>
      {/* HERO */}
      <section className="deck-hero">
        <div className="deck-hero-orb1" />
        <div className="deck-hero-orb2" />
        <div className="w">
          <div className="deck-hero-inner">
            <span className="tag tag-w" style={{ animation: 'wup .6s .05s var(--ease) both' }}>CRO Continuo</span>
            <div className="deck-hero-price">
              <span className="deck-hero-price-num">850 € + IVA / mes</span>
              <span className="deck-hero-price-period">· Mínimo 3 meses</span>
            </div>
            <h1>
              El Sprint encuentra los problemas.<br />
              El CRO Continuo los resuelve<br />
              <em>mes a mes, con datos reales.</em>
            </h1>
            <p className="deck-hero-sub">
              Un activo principal implementado en Shopify cada mes. Análisis de datos, implementación directa y Loom de entrega incluidos. Sin rediseños, sin suposiciones.
            </p>
            <div className="deck-hero-ctas">
              <Link href="/reservar" className="btn btn-g" style={{ fontSize: '16px', padding: '14px 28px' }}>Empezar CRO Continuo →</Link>
              <a href="#como-funciona" className="btn btn-ghost-w">Ver cómo funciona</a>
            </div>
            <p className="deck-hero-note">Se presenta únicamente después del Sprint · Sin permanencia pasados 3 meses</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="deck-sec" id="como-funciona">
        <div className="w">
          <div className="deck-sec-head r">
            <span className="tag">Cómo funciona</span>
            <h2>Un ciclo mensual de mejora basado en datos.</h2>
            <p>Cada mes sigue el mismo ritmo: analizamos, implementamos y entregamos. Sin sorpresas, sin variación de scope.</p>
          </div>
          <div className="deck-weeks">
            {weeks.map((w, i) => (
              <div className={`deck-week r r${i + 1}`} key={w.n}>
                <div className="deck-week-n">{w.n}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="r r4" style={{ marginTop: '28px', padding: '24px 28px', background: 'var(--bg)', borderRadius: '14px', border: '1px solid var(--line)' }}>
            <p style={{ fontSize: '14px', color: 'var(--grey)', lineHeight: '1.7' }}>
              <strong style={{ color: 'var(--n)', fontWeight: 700 }}>Tests A/B —</strong>{' '}
              Los aplicamos cuando el volumen de tráfico lo justifica. Si no hay suficiente tráfico para resultados válidos, iteramos directamente — igualmente efectivo y más rápido.
            </p>
          </div>
        </div>
      </section>

      {/* INCLUDES / EXCLUDES */}
      <section className="deck-sec-grey">
        <div className="w">
          <div className="deck-2col">
            <div>
              <div className="deck-sec-head r">
                <span className="tag">Qué incluye cada mes</span>
                <h2>Trabajo real con un CAP de scope definido.</h2>
                <p>Un activo principal y hasta 4 ajustes menores. Suficiente para mover la aguja sin dispersión.</p>
              </div>
              <div className="deck-list check r r1">
                <div className="deck-list-title">Incluye</div>
                <ul>
                  <li>Análisis mensual del funnel con datos reales</li>
                  <li>1 activo principal implementado en Shopify</li>
                  <li>Hasta 4 ajustes menores sobre lo ya implementado</li>
                  <li>Informe mensual con cambios, resultados y backlog</li>
                  <li>Loom de entrega mensual</li>
                  <li>Tests A/B cuando el tráfico lo permite</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="deck-sec-head r r1" style={{ marginBottom: '28px' }}>
                <span className="tag" style={{ color: 'var(--red)', background: 'var(--red-p)' }}>Límites del servicio</span>
                <h2>Lo que no entra en el scope mensual.</h2>
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
              <div className="r r3" style={{ marginTop: '24px', padding: '20px 24px', background: 'rgba(10,26,53,.04)', borderRadius: '12px', border: '1px solid var(--line)' }}>
                <p style={{ fontSize: '13px', color: 'var(--grey)', fontStyle: 'italic', lineHeight: '1.65' }}>
                  Este servicio se presenta únicamente después del Sprint, cuando el diagnóstico confirma que hay margen claro de mejora sostenida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="deck-cta">
        <div className="w">
          <div className="deck-cta-inner r">
            <span className="tag tag-w" style={{ marginBottom: '24px' }}>CRO Continuo</span>
            <h2>Mejora constante,<br /><em>mes a mes.</em></h2>
            <p>Análisis + implementación + Loom cada 30 días.</p>
            <span className="deck-price-big">850 €</span>
            <span className="deck-price-period">+ IVA / mes · Mínimo 3 meses</span>
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
