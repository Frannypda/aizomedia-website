const stats = [
  { num: '+1.9', unit: 'pp', desc: 'más ventas por cada 100 visitas' },
  { num: '4.3', unit: 'x', desc: 'ROAS medio conseguido' },
  { num: '14', unit: ' días', desc: 'de entrega garantizada' },
  { num: '0€', unit: '', desc: 'permanencia ni compromisos' },
]

export default function StatsBar() {
  return (
    <section className="sec-stats">
      <div className="w">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item r" key={i}>
              <div className="stat-num">
                {s.num}<span className="stat-unit">{s.unit}</span>
              </div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
