function MiniChart({ id, d1, d2 }: { id: string; d1: string; d2: string }) {
  return (
    <svg className="mc-chart" viewBox="0 0 200 52" fill="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3e7d5e" stopOpacity=".25" />
          <stop offset="100%" stopColor="#3e7d5e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={d1} fill={`url(#${id})`} />
      <path d={d2} stroke="var(--g)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="chart-line" />
    </svg>
  )
}

export default function DashboardSection() {
  return (
    <section className="sec-dash" id="resultados">
      <div className="w">
        <span className="tag tag-w r">Resultados reales</span>
        <h2 className="r r1">Los números hablan solos.</h2>
        <p className="dash-sub r r2">
          Métricas reales de clientes reales. Esto es lo que ocurre cuando el post-clic funciona.
        </p>

        <div className="dash-grid">
          <div className="mc r r1">
            <div className="mc-label">Tasa de conversión</div>
            <div className="mc-val">2.8%</div>
            <div className="mc-delta">↑ desde 0.9%</div>
            <MiniChart
              id="g1"
              d1="M0 48 L40 40 L80 36 L110 26 L140 16 L170 8 L200 3 L200 52 L0 52 Z"
              d2="M0 48 L40 40 L80 36 L110 26 L140 16 L170 8 L200 3"
            />
            <div className="mc-note">Sprint de conversión · Shopify</div>
          </div>

          <div className="mc r r2">
            <div className="mc-label">ROAS Meta Ads</div>
            <div className="mc-val">4.3x</div>
            <div className="mc-delta">↑ desde 1.8x</div>
            <MiniChart
              id="g2"
              d1="M0 50 L50 44 L90 42 L120 30 L150 14 L180 6 L200 3 L200 52 L0 52 Z"
              d2="M0 50 L50 44 L90 42 L120 30 L150 14 L180 6 L200 3"
            />
            <div className="mc-note">Meta Ads · Campaña full-funnel</div>
          </div>

          <div className="mc r r3">
            <div className="mc-label">Coste por adquisición</div>
            <div className="mc-val">−52%</div>
            <div className="mc-delta">↓ de €18 a €8.6</div>
            <MiniChart
              id="g3"
              d1="M0 4 L40 12 L80 16 L110 26 L140 34 L170 44 L200 50 L200 52 L0 52 Z"
              d2="M0 4 L40 12 L80 16 L110 26 L140 34 L170 44 L200 50"
            />
            <div className="mc-note">CRO Continuo · Funnel optimizado</div>
          </div>
        </div>
      </div>
    </section>
  )
}
