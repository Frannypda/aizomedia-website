'use client'
import { useState } from 'react'

const testimonios = [
  {
    id: 'dzzero',
    youtubeId: 'YD8XVKIDe90',
    portada: '/Brand/assets/Testimonios videos/Testimonio Dzzero/portada.png',
    cliente: 'Dzzero',
    frase: '"Al principio me pareció que era dinero. Al día de hoy me parece barato. Hemos multiplicado la facturación por 20 en solo 2 meses."',
    featured: true,
  },
  {
    id: 'alfredo',
    youtubeId: 'gTNbjriqoaU',
    portada: `https://img.youtube.com/vi/gTNbjriqoaU/hqdefault.jpg`,
    cliente: 'Alfredo M.',
    frase: '"Nunca os van a defraudar. Día a día he crecido a su lado una verdadera barbaridad."',
    featured: false,
  },
  {
    id: 'oscar',
    youtubeId: 'JQVfjavjPGg',
    portada: `https://img.youtube.com/vi/JQVfjavjPGg/hqdefault.jpg`,
    cliente: 'Oscar C.',
    frase: '"Los resultados son tangibles. Son gente muy proactiva, con lo cual es fácil ir creciendo."',
    featured: false,
  },
  {
    id: 'javier',
    youtubeId: 'bqvw0jCbULg',
    portada: `https://img.youtube.com/vi/bqvw0jCbULg/hqdefault.jpg`,
    cliente: 'Javier C.',
    frase: '"Gracias a ellos hemos conseguido vídeos virales. Más clientes y más gente que confía en nosotros."',
    featured: false,
  },
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

        <div className="test-carousel">
          {testimonios.map((t) => (
            <div key={t.id} className={`tcar-card r${t.featured ? ' tcar-feat' : ''}`}>
              <div className="tcar-video">
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
                    className="tcar-thumb"
                    onClick={() => play(t.id)}
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
                  <span className="tag tag-w" style={{ fontSize: '10px', marginBottom: '10px' }}>
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
