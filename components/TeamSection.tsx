const members = [
  {
    name: 'David',
    role: 'Paid Media · Meta Ads',
    bio: 'Especialista en diagnóstico de campañas y estructura full-funnel. El que sabe por qué el tráfico no convierte antes de tocar nada. Optimización diaria con datos reales.',
    img: '/Brand/assets/Fotos personales/David aizomedia.jpg',
    anim: 'rl r1',
  },
  {
    name: 'Franny',
    role: 'CRO · Post-Clic',
    bio: 'Especialista en lo que el usuario ve, siente y decide después del clic. Página de producto, checkout y mensaje. La que convierte el tráfico en ventas con cambios quirúrgicos.',
    img: '/Brand/assets/Fotos personales/Franny Aizomedia.jpg',
    anim: 'rr r2',
  },
]

export default function TeamSection() {
  return (
    <section className="sec-team" id="equipo">
      <div className="w">
        <div className="h2c r">
          <div>
            <span className="tag">El equipo</span>
            <h2>Dos perfiles.<br />Un objetivo.</h2>
          </div>
          <p>
            No somos una agencia con account managers. Somos David y Franny — los dos
            trabajamos directamente en tu cuenta, sin intermediarios.
          </p>
        </div>

        <div className="team-grid">
          {members.map((m) => (
            <div className={`pcard ${m.anim}`} key={m.name}>
              <div className="imgw">
                <img src={m.img} alt={m.name} />
              </div>
              <div className="pi">
                <div className="pi-name">{m.name}</div>
                <div className="pi-role">{m.role}</div>
                <p className="pi-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
