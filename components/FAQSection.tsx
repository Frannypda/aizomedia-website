'use client'
import { useState } from 'react'

const faqs = [
  {
    q: '¿Para quién es el Sprint?',
    a: 'Para founders de ecommerce en Shopify con tráfico de pago activo — principalmente Meta Ads. Si facturáis entre 10.000 y 50.000 €/mes y el problema está después del clic, el Sprint es para ti.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Acceso a tu tienda Shopify, acceso a tus campañas activas y un briefing de 20-30 minutos. Nada más. No tocamos campañas, no necesitamos presupuesto adicional.',
  },
  {
    q: '¿Cuánto dura el Sprint?',
    a: '14 días naturales desde el briefing. Recibes el diagnóstico completo, las implementaciones y el Loom con el roadmap de los siguientes 30 días. Si no cumplimos, lo compensamos.',
  },
  {
    q: '¿Hay permanencia?',
    a: 'No. El Sprint es pago único, sin permanencia. Si después tiene sentido seguir, lo hablamos. Si no, te quedas con el diagnóstico y el roadmap.',
  },
  {
    q: '¿El Sprint garantiza más ventas?',
    a: 'Lo que garantizamos es el trabajo: diagnóstico real, implementaciones reales y entrega en 14 días. Los resultados dependen de tu situación concreta — por eso empezamos con diagnóstico, no con promesas de porcentajes.',
  },
]

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="sec-faq">
      <div className="w">
        <div className="faq-lay">
          <div className="faq-l r">
            <span className="tag">Preguntas frecuentes</span>
            <h2>Todo lo que necesitas saber.</h2>
            <p>Si tienes alguna duda que no esté aquí, escríbenos. Respondemos en menos de 24 horas.</p>
            <a href="/reservar" className="btn btn-g">Hablar con el equipo →</a>
          </div>

          <div className="faq-list r r2">
            {faqs.map((faq, i) => (
              <div className={`fi${open === i ? ' on' : ''}`} key={i}>
                <div className="fi-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{faq.q}</span>
                  <div className="fi-icon">
                    <PlusIcon />
                  </div>
                </div>
                <div className="fi-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
