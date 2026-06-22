'use client'
import { useState } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

const casos = [
  {
    id: 'megaimmuno',
    categoria: 'Sprint CRO · Suplementación',
    titulo: 'De página de producto caída a máquina de conversión.',
    desc: 'Rediseño completo de PDP: visual del producto dominante desde el primer frame, prueba social junto al precio y un único CTA de alto contraste. Mismo tráfico, más ventas.',
    tags: ['Sprint CRO', 'PDP', 'Ecommerce'],
    imgAfter: '/Brand/assets/CRo/Mega-Immuno-despues.png',
    sliderBefore: '/Brand/assets/CRo/Nutrimmuno%20antes.png',
    sliderAfter: '/Brand/assets/CRo/Mega-Immuno-despues.png',
  },
  {
    id: 'chrisfitness',
    categoria: 'Sprint CRO · Streetwear',
    titulo: 'De tienda descuidada a drop agotado.',
    desc: 'Ecommerce de drop rediseñado de cero: barra de urgencia activa, ficha de producto con reseñas junto al precio, tallas con stock en tiempo real y CTA con precio integrado.',
    tags: ['Sprint CRO', 'PDP', 'Homepage'],
    imgAfter: '/Brand/assets/Casos/cf-pdp-despues.jpg',
    sliderBefore: '/Brand/assets/Casos/cf-pdp-antes.png',
    sliderAfter: '/Brand/assets/Casos/cf-pdp-despues.jpg',
  },
]

export default function CasosEstudioSection() {
  const [open, setOpen] = useState<string | null>('megaimmuno')

  return (
    <section className="sec-casos-est" id="casos">
      {/* Preload slider images so they're cached before the accordion opens */}
      <div style={{ display: 'none' }} aria-hidden>
        {casos.map(c => (
          <span key={c.id}>
            <img src={c.sliderBefore} alt="" />
            <img src={c.sliderAfter} alt="" />
          </span>
        ))}
      </div>
      <div className="w">
        <div className="casos-est-head r">
          <span className="tag tag-w">Casos de éxito</span>
          <h2>El trabajo que habla<br />por nosotros.</h2>
          <p>Proyectos reales, resultados medibles.</p>
        </div>

        <div className="casos-est-list">
          {casos.map((c, i) => (
            <article key={c.id} className={`caso-est-card r r${i + 1}`}>
              <div className="caso-est-img-wrap">
                <img src={c.imgAfter} alt={c.titulo} className="caso-est-img" />
                <div className="caso-est-img-overlay" />
              </div>
              <div className="caso-est-body">
                <span className="caso-est-cat">{c.categoria}</span>
                <h3 className="caso-est-titulo">{c.titulo}</h3>
                <p className="caso-est-desc">{c.desc}</p>
                <div className="caso-est-tags">
                  {c.tags.map(t => (
                    <span key={t} className="caso-est-tag">{t}</span>
                  ))}
                </div>
                <button
                  className="caso-est-cta"
                  onClick={() => setOpen(open === c.id ? null : c.id)}
                >
                  {open === c.id ? 'Cerrar comparativa ↑' : 'Ver comparativa antes / después →'}
                </button>
              </div>

              {open === c.id && (
                <div className="caso-est-slider">
                  <BeforeAfterSlider
                    key={c.id}
                    beforeSrc={c.sliderBefore}
                    afterSrc={c.sliderAfter}
                    beforeLabel="✗ Antes"
                    afterLabel="✓ Después del Sprint"
                    initialPos={38}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
