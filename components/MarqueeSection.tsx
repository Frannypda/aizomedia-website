const items = [
  'Aizomedia', 'Conversión Post-Clic', 'CRO Shopify',
  'Meta Ads', 'Email Marketing', 'Sprint 14 días', 'Sin Permanencia',
]

function Track() {
  return (
    <>
      {[0, 1, 2, 3].map((g) => (
        <div className="mq-item" key={g}>
          {items.map((t, i) => (
            <span key={i}>
              <span className="mq-text">{t}</span>
              <span className="mq-dot" />
            </span>
          ))}
        </div>
      ))}
    </>
  )
}

export default function MarqueeSection() {
  return (
    <div className="mq-wrap">
      <div className="mq-track">
        <Track />
      </div>
    </div>
  )
}
