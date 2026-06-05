const problems = [
  {
    n: '01',
    title: '"Las campañas van bien… hasta que dejan de ir"',
    body: 'Un mes genial, el siguiente un desastre. Tu agencia no sabe explicarte por qué. Y tú tampoco.',
    anim: 'rl r1',
  },
  {
    n: '02',
    title: '"Tengo visitas pero la tienda no convierte"',
    body: 'El tráfico llega. Pero algo pasa entre el clic y la compra que nadie termina de identificar.',
    anim: 'rr r2',
  },
  {
    n: '03',
    title: '"Para vender tengo que rebajar"',
    body: 'Descuentos, promos, urgencia artificial. Funciona a corto plazo. Destroza el margen a largo.',
    anim: 'rl r3',
  },
  {
    n: '04',
    title: '"Pruebo cosas pero nada termina de funcionar"',
    body: 'Cambias el botón, el copy, la foto. Algo mejora un poco. Nada cambia el juego.',
    anim: 'rr r4',
  },
]

export default function ProblemSection() {
  return (
    <section className="sec-prob">
      <div className="w">
        <span className="tag tag-red r">El problema</span>
        <h2 className="r r1">¿Te suena alguna<br />de estas frases?</h2>
        <p className="prob-sub r r2">
          Si llevas un tiempo con esta sensación, el problema no está donde crees.
        </p>
        <div className="prob-grid">
          {problems.map((p) => (
            <div className={`pc ${p.anim}`} key={p.n}>
              <div className="pc-n">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
