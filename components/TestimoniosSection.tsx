'use client'
import { useState, useRef, useCallback } from 'react'

const testimonios = [
  {
    id: 'dzzero',
    youtubeId: 'YD8XVKIDe90',
    portada: '/Brand/assets/Testimonios videos/Testimonio Dzzero/portada.png',
    cliente: 'Dzzero',
    frase: '"Al principio me pareció que era dinero. Al día de hoy me parece barato. ×20 en 2 meses."',
    star: true,
  },
  {
    id: 'alfredo',
    youtubeId: 'gTNbjriqoaU',
    portada: '/Brand/assets/Testimonios videos/Testimonio Alfaroteca con portada/Testimonio Alfaroteca con portada-Cover.jpg',
    cliente: 'Alfredo M.',
    frase: '"Nunca os van a defraudar. Día a día he crecido a su lado una verdadera barbaridad."',
    star: false,
  },
  {
    id: 'oscar',
    youtubeId: 'JQVfjavjPGg',
    portada: '/Brand/assets/Testimonios videos/Testimonio Atlas Vital/Testimonio Atlas Vital(1)/Testimonio Atlas Vital(1)-Cover.jpg',
    cliente: 'Oscar C.',
    frase: '"Los resultados son tangibles. Son gente muy proactiva, con lo cual es fácil ir creciendo."',
    star: false,
  },
  {
    id: 'javier',
    youtubeId: 'bqvw0jCbULg',
    portada: '/Brand/assets/Testimonios videos/Testimonio Epicars con portada/Testimonio Epicars con portada-Cover.jpg',
    cliente: 'Javier C.',
    frase: '"Gracias a ellos hemos conseguido vídeos virales. Más clientes y más gente que confía en nosotros."',
    star: false,
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
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    dragging.current = true
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0)
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0
    if (trackRef.current) trackRef.current.dataset.dragging = '1'
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.current || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.4
  }, [])

  const stopDrag = useCallback(() => {
    dragging.current = false
    if (trackRef.current) delete trackRef.current.dataset.dragging
  }, [])

  const play = (id: string) => {
    if (dragging.current) return
    setPlaying(prev => ({ ...prev, [id]: true }))
  }

  return (
    <section className="sec-test" id="resultados">
      <div className="w">
        <div className="test-head r">
          <span className="tag tag-w">Testimonios</span>
          <h2>Lo que dicen los que ya lo han probado.</h2>
          <p>Founders de ecommerce que pasaron por el Sprint.</p>
        </div>
      </div>

      <div
        className="test-carousel"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {testimonios.map((t) => (
          <div key={t.id} className={`tcar-card${t.star ? ' tcar-star' : ''}`}>
            <div className="tcar-video">
              {playing[t.id] ? (
                <iframe
                  src={`https://www.youtube.com/embed/${t.youtubeId}?autoplay=1`}
                  title={`Testimonio de ${t.cliente}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }}
                />
              ) : (
                <button
                  className="tcar-thumb"
                  onClick={() => play(t.id)}
                  aria-label={`Ver testimonio de ${t.cliente}`}
                >
                  <img src={t.portada} alt={`Testimonio de ${t.cliente}`} />
                  <div className="tcar-overlay">
                    <div className="tcar-play-btn">
                      <PlayIcon size={22} />
                    </div>
                    <div className="tcar-caption">
                      <span className="tcar-caption-name">{t.cliente}</span>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w">
        <p className="test-drag-hint">
          <span>←</span> arrastra para ver más <span>→</span>
        </p>
      </div>
    </section>
  )
}
