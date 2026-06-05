const quotes = [
  {
    text: 'Llevo 3 meses trabajando con David y Fran y estoy muy contento. Los resultados son tangibles — son gente muy proactiva.',
    name: 'Atlas Vital',
    result: 'CVR 0.9% → 2.8% · Suplementación natural',
    anim: 'r1',
  },
  {
    text: 'Gracias a ellos hemos conseguido vídeos virales y por consecuencia más clientes y más gente que nos conoce y confía en nosotros.',
    name: 'Epicars',
    result: 'ROAS 1.8x → 4.3x · Automoción',
    anim: 'r2',
  },
  {
    text: 'Nunca os van a defraudar. Para mí es un auténtico orgullo y un placer poder trabajar con ellos.',
    name: 'Alfaroteca',
    result: 'Bounce 78% → 54% · Arte y cultura',
    anim: 'r3',
  },
]

export default function QuotesSection() {
  return (
    <section className="sec-quotes">
      <div className="w">
        <div className="sec-quotes-head r">
          <span className="tag">Lo que dicen de nosotros</span>
          <h2 className="r r1">
            Founders reales.<br />Resultados tangibles.
          </h2>
          <p className="r r2">
            Sin guión. Sus propias palabras, en el momento en que lo vivieron.
          </p>
        </div>

        <div className="qcards">
          {quotes.map((q) => (
            <div className={`qcard rs ${q.anim}`} key={q.name}>
              <div className="qcard-mark">&ldquo;</div>
              <p className="qcard-text">{q.text}</p>
              <div className="qcard-foot">
                <div className="qcf-dot" />
                <div>
                  <div className="qcf-name">{q.name}</div>
                  <div className="qcf-result">{q.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
