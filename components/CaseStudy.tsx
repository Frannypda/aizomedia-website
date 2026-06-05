const results = [
  {
    client: 'Ecommerce · Moda',
    sprint: 'Sprint de Conversión',
    metrics: [
      { label: 'CVR', before: '0.9%', after: '2.8%', delta: '+211%', up: true },
      { label: 'Bounce', before: '78%', after: '54%', delta: '−24pp', up: false },
      { label: 'CPA', before: '€18.4', after: '€8.6', delta: '−53%', up: false },
    ],
    anim: 'rs r1',
  },
  {
    client: 'Ecommerce · Salud',
    sprint: 'Meta Ads Full-Funnel',
    metrics: [
      { label: 'ROAS', before: '1.8x', after: '4.3x', delta: '+139%', up: true },
      { label: 'CPM', before: '€14.2', after: '€9.1', delta: '−36%', up: false },
      { label: 'CTR', before: '1.1%', after: '2.6%', delta: '+136%', up: true },
    ],
    anim: 'rs r2',
  },
  {
    client: 'Ecommerce · Hogar',
    sprint: 'CRO Continuo',
    metrics: [
      { label: 'AOV', before: '€48', after: '€71', delta: '+48%', up: true },
      { label: 'CVR', before: '1.4%', after: '2.9%', delta: '+107%', up: true },
      { label: 'Revenue', before: '—', after: '+62%', delta: 'vs mes anterior', up: true },
    ],
    anim: 'rs r3',
  },
]

export default function CaseStudy() {
  return (
    <section className="sec-case">
      <div className="w">
        <div className="h2c r">
          <div>
            <span className="tag">Resultados reales</span>
            <h2>Números reales.<br />Clientes reales.</h2>
          </div>
          <p>
            Sin promesas de porcentajes antes de ver tu cuenta. Estos son resultados
            de sprints ya entregados — métricas anonimizadas por confidencialidad.
          </p>
        </div>

        <div className="case-cards-grid">
          {results.map((r) => (
            <div className={`rcard ${r.anim}`} key={r.client}>
              <div className="rcard-top">
                <div>
                  <div className="rcard-client">{r.client}</div>
                  <div className="rcard-sprint">{r.sprint}</div>
                </div>
                <div className="rcard-tag">14 días</div>
              </div>
              <div className="rcard-metrics">
                {r.metrics.map((m) => (
                  <div className="rmet" key={m.label}>
                    <div className="rmet-label">{m.label}</div>
                    <div className="rmet-flow">
                      <span className="rmet-before">{m.before}</span>
                      <span className="rmet-arrow">→</span>
                      <span className="rmet-after">{m.after}</span>
                    </div>
                    <div className={`rmet-delta ${m.up ? 'up' : 'down'}`}>{m.delta}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="case-note r">
          * Métricas anonimizadas · Sprint de Conversión Ecommerce · Shopify
        </p>
      </div>
    </section>
  )
}
