const phases = [
  {
    n: '01',
    days: 'Días 1 – 4',
    title: 'Encontramos el problema',
    body: 'Entramos en tu Shopify, miramos tus campañas y en 4 días sabemos exactamente qué está frenando las ventas. No intuiciones — datos reales. Qué entiende el usuario en los primeros 5 segundos, dónde abandona, qué mensaje no conecta.',
    anim: 'r1',
  },
  {
    n: '02',
    days: 'Días 5 – 11',
    title: 'Lo arreglamos en producción',
    body: 'Implementamos 2 o 3 mejoras directamente en tu tienda. Copy de ficha de producto, prueba social, estructura del checkout. Donde más duele — no donde es más fácil.',
    anim: 'r2',
  },
  {
    n: '03',
    days: 'Días 12 – 14',
    title: 'Te explicamos todo y trazamos el siguiente paso',
    body: 'Un vídeo de 10 a 15 minutos explicando cada cambio y por qué lo hicimos. Más un roadmap priorizado de los próximos 30 días para que no pierdas el rumbo.',
    anim: 'r3',
  },
]

export default function SprintSection() {
  return (
    <section className="sec-sprint" id="sprint">
      <div className="w">
        <div className="sprint-center r">
          <span className="tag">Cómo funciona</span>
          <h2>El Sprint de Conversión Ecommerce</h2>
          <p>
            14 días. Diagnóstico real más implementación directa en tu tienda.
            No es un PDF — es trabajo real que puedes ver desde el día 1.
          </p>
        </div>

        <div className="sprint-timeline">
          <div className="st-line" />
          {phases.map((ph) => (
            <div className={`st-phase r ${ph.anim}`} key={ph.n}>
              <div className="st-dot">{ph.n}</div>
              <div className="st-content">
                <div className="st-days">{ph.days}</div>
                <h3>{ph.title}</h3>
                <p>{ph.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="garantia r">
          <div className="garantia-i">🛡</div>
          <div>
            <h4>Garantía operativa</h4>
            <p>
              Si en 14 días no recibes diagnóstico completo, implementaciones y Loom
              final — aplicamos descuento directo en el siguiente mes. Sin letra pequeña.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
