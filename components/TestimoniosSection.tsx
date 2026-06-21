const testimonios = [
  {
    youtubeId: 'gTNbjriqoaU',
    cliente: 'Alfredo M.',
    frase: '"Nunca os van a defraudar. Día a día he crecido a su lado una verdadera barbaridad."',
  },
  {
    youtubeId: 'JQVfjavjPGg',
    cliente: 'Oscar C.',
    frase: '"Los resultados son tangibles. Son gente muy proactiva, con lo cual es fácil ir creciendo."',
  },
  {
    youtubeId: 'bqvw0jCbULg',
    cliente: 'Javier C.',
    frase: '"Gracias a ellos hemos conseguido vídeos virales. Más clientes y más gente que confía en nosotros."',
  },
]

export default function TestimoniosSection() {
  return (
    <section className="sec-test" id="resultados">
      <div className="w">
        <div className="test-head r">
          <span className="tag tag-w">Testimonios</span>
          <h2>Lo que dicen los que ya lo han probado.</h2>
          <p>Founders de ecommerce que pasaron por el Sprint.</p>
        </div>

        <a
          href="https://www.youtube.com/shorts/YD8XVKIDe90"
          target="_blank"
          rel="noopener noreferrer"
          className="test-feat r"
        >
          <div className="test-feat-img-wrap">
            <img
              src="/Brand/assets/Testimonios videos/Testimonio Dzzero/portada.png"
              alt="Testimonio Dzzero — ×20 en facturación en 2 meses"
              className="test-feat-img"
            />
            <div className="test-feat-play">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="test-feat-body">
            <span className="tag tag-w">Resultado destacado</span>
            <p className="test-feat-frase">
              &ldquo;Al principio me pareció que era dinero. Al día de hoy me parece barato. Hemos multiplicado la facturación por 20 en solo 2 meses.&rdquo;
            </p>
            <div className="test-feat-meta">
              <span className="test-feat-name">Dzzero</span>
              <span className="test-feat-arrow">Ver testimonio completo →</span>
            </div>
          </div>
        </a>

        <div className="test-grid">
          {testimonios.map((t, i) => (
            <div key={i} className={`tcard r r${i + 1}`}>
              <div className="tcard-video">
                <iframe
                  src={`https://www.youtube.com/embed/${t.youtubeId}`}
                  title={`Testimonio de ${t.cliente}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              </div>
              <div className="tcard-info">
                <p className="tcard-frase">{t.frase}</p>
                <div className="tcard-meta">
                  <span className="tcard-name">{t.cliente}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
