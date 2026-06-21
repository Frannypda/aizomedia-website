'use client'
import { useState } from 'react'

const testimonios = [
  {
    id: 'alfredo',
    youtubeId: 'gTNbjriqoaU',
    cliente: 'Alfredo M.',
    frase: '"Nunca os van a defraudar. Día a día he crecido a su lado una verdadera barbaridad."',
  },
  {
    id: 'oscar',
    youtubeId: 'JQVfjavjPGg',
    cliente: 'Oscar C.',
    frase: '"Los resultados son tangibles. Son gente muy proactiva, con lo cual es fácil ir creciendo."',
  },
  {
    id: 'javier',
    youtubeId: 'bqvw0jCbULg',
    cliente: 'Javier C.',
    frase: '"Gracias a ellos hemos conseguido vídeos virales. Más clientes y más gente que confía en nosotros."',
  },
]

const carouselAll = [
  {
    id: 'dzzero',
    youtubeId: 'YD8XVKIDe90',
    portada: '/Brand/assets/Testimonios videos/Testimonio Dzzero/portada.png',
    cliente: 'Dzzero',
    frase: '"Al principio me pareció que era dinero. Al día de hoy me parece barato. Hemos multiplicado la facturación por 20 en solo 2 meses."',
    featured: true,
  },
  ...testimonios.map(t => ({
    ...t,
    portada: `https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`,
    featured: false,
  })),
]

function PlayIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function TestimoniosSection() {
  const [playing, setPlaying] = useState<Record<string, boolean>>({})
  const play = (id: string) => setPlaying(prev => ({ ...prev, [id]: true }))

  return (
    <section className="sec-test" id="resultados">
      <div className="w">
        <div className="test-head r">
          <span className="tag tag-w">Testimonios</span>
          <h2>Lo que dicen los que ya lo han probado.</h2>
          <p>Founders de ecommerce que pasaron por el Sprint.</p>
        </div>

        {/* ── DESKTOP: tarjeta destacada Dzzero ── */}
        <div className="test-feat r">
          <div className="test-feat-video">
            {playing['dzzero'] ? (
              <iframe
                src="https://www.youtube.com/embed/YD8XVKIDe90?autoplay=1"
                title="Testimonio Dzzero"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="test-feat-iframe"
              />
            ) : (
              <button
                className="test-feat-thumb"
                onClick={() => play('dzzero')}
                aria-label="Ver testimonio de Dzzero"
              >
                <img
                  src="/Brand/assets/Testimonios videos/Testimonio Dzzero/portada.png"
                  alt="Dzzero — ×20 en facturación en 2 meses"
                />
                <div className="test-feat-play">
                  <PlayIcon size={24} />
                </div>
              </button>
            )}
          </div>
          <div className="test-feat-body">
            <span className="tag tag-w">Resultado destacado</span>
            <div className="test-feat-stat">
              <span className="test-feat-stat-num">×20</span>
              <span className="test-feat-stat-label">en facturación en solo 2 meses</span>
            </div>
            <p className="test-feat-frase">
              &ldquo;Al principio me pareció que era dinero. Al día de hoy me parece barato. Hemos multiplicado la facturación por 20 en solo 2 meses.&rdquo;
            </p>
            <div className="test-feat-meta">
              <span className="test-feat-name">— Dzzero</span>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: grid de los 3 testimonios ── */}
        <div className="test-grid">
          {testimonios.map((t) => (
            <div key={t.id} className="tcard r">
              <div className="tcard-video">
                {playing[t.id] ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${t.youtubeId}?autoplay=1`}
                    title={`Testimonio de ${t.cliente}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                ) : (
                  <button
                    className="tcard-thumb"
                    onClick={() => play(t.id)}
                    aria-label={`Ver testimonio de ${t.cliente}`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`}
                      alt={`Testimonio de ${t.cliente}`}
                    />
                    <div className="tcard-play">
                      <PlayIcon />
                    </div>
                  </button>
                )}
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

        {/* ── MÓVIL: carrusel horizontal con los 4 testimonios ── */}
        <div className="test-carousel">
          {carouselAll.map((t) => (
            <div key={`m-${t.id}`} className={`tcar-card${t.featured ? ' tcar-feat' : ''}`}>
              <div className="tcar-video">
                {playing[`m-${t.id}`] ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${t.youtubeId}?autoplay=1`}
                    title={`Testimonio de ${t.cliente}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                ) : (
                  <button
                    className="tcar-thumb"
                    onClick={() => play(`m-${t.id}`)}
                    aria-label={`Ver testimonio de ${t.cliente}`}
                  >
                    <img src={t.portada} alt={`Testimonio de ${t.cliente}`} />
                    <div className="tcar-play">
                      <PlayIcon size={22} />
                    </div>
                  </button>
                )}
              </div>
              <div className="tcar-info">
                {t.featured && (
                  <span className="tag tag-w" style={{ fontSize: '10px', marginBottom: '12px' }}>
                    Resultado destacado
                  </span>
                )}
                <p className="tcar-frase">{t.frase}</p>
                <div className="tcar-meta">
                  <span className="tcar-name">{t.cliente}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
