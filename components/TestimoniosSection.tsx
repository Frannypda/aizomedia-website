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
