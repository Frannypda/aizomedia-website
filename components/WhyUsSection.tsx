const cards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Sin intermediarios',
    body: 'David y Franny trabajan directamente en tu cuenta. Sin account managers, sin juniors, sin cadena de teléfono roto entre quien decide y quien ejecuta.',
    anim: 'rs r1',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: 'Diagnóstico antes de tocar',
    body: 'Nunca hacemos cambios a ciegas. Primero encontramos exactamente qué frena tus ventas — luego actuamos. El diagnóstico es la mitad del trabajo.',
    anim: 'rs r2',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: 'Entrega en 14 días',
    body: 'El Sprint tiene fecha de entrega garantizada. Sin procesos que se alargan, sin consultas sin conclusión. Diagnóstico completo + cambios implementados en 14 días naturales.',
    anim: 'rs r3',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Sin permanencia',
    body: 'El Sprint es pago único. Si después tiene sentido seguir, lo hablamos. Si no, te quedas con el diagnóstico y el roadmap completo. Sin ataduras.',
    anim: 'rs r4',
  },
]

export default function WhyUsSection() {
  return (
    <section className="sec-why">
      <div className="w">
        <div className="h2c r">
          <div>
            <span className="tag">Por qué nosotros</span>
            <h2>Hay mucho humo<br />en este sector.</h2>
          </div>
          <p>
            Muchas agencias prometen porcentajes sin diagnóstico real. Nosotros empezamos
            por encontrar el problema — luego actuamos con datos, no con intuición.
          </p>
        </div>

        <div className="why-grid">
          {cards.map((c) => (
            <div className={`wcard ${c.anim}`} key={c.title}>
              <div className="wcard-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
