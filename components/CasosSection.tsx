'use client'
import { useState } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

const casos = [
  {
    key: 'pdp',
    label: 'Ficha de producto',
    beforeSrc: '/Brand/assets/Casos/cf-pdp-antes.png',
    afterSrc: '/Brand/assets/Casos/cf-pdp-despues.jpg',
    beforeNote: 'Cookie banner tapando el producto. Nav básica. Sin jerarquía ni urgencia.',
    afterNote: 'Barra de anuncio, estrellitas junto al precio, tallas agotadas visibles, CTA único con precio.',
  },
  {
    key: 'plp',
    label: 'Homepage',
    beforeSrc: '/Brand/assets/Casos/cf-plp-antes.png',
    afterSrc: '/Brand/assets/Casos/cf-plp-despues.png',
    beforeNote: 'Home genérica. Nav solo con "Home / Contact". Sin barra de urgencia ni identidad de marca.',
    afterNote: 'Announcement bar, tipografía hero de impacto, badge de drop activo, CTA principal claro.',
  },
]

export default function CasosSection() {
  const [active, setActive] = useState('pdp')
  const caso = casos.find(c => c.key === active)!

  return (
    <section className="sec-casos">
      <div className="w">
        <div className="casos-head r">
          <span className="tag">Caso real · ChrisFitness</span>
          <h2>De tienda descuidada<br />a drop agotado.</h2>
          <p>Mismo producto. Mismo tráfico. Solo cambiamos las páginas.</p>
        </div>

        <div className="casos-tabs r">
          {casos.map(c => (
            <button
              key={c.key}
              className={`casos-tab${active === c.key ? ' active' : ''}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="r">
          <BeforeAfterSlider
            key={active}
            beforeSrc={caso.beforeSrc}
            afterSrc={caso.afterSrc}
            beforeLabel="✗ Antes"
            afterLabel="✓ Después del Sprint"
            initialPos={40}
          />
        </div>

        <div className="casos-puntos r">
          <div className="caso-punto">
            <span className="caso-punto-tag caso-tag-bad">Antes</span>
            <p>{caso.beforeNote}</p>
          </div>
          <div className="caso-punto-arrow">→</div>
          <div className="caso-punto">
            <span className="caso-punto-tag caso-tag-good">Después</span>
            <p>{caso.afterNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
