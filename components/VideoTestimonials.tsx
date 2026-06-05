'use client'
import { useState, useEffect } from 'react'

interface VideoData {
  youtubeId: string
  cover: string
  name: string
  role: string
  anim: string
}

const videos: VideoData[] = [
  {
    youtubeId: 'JQVfjavjPGg',
    cover: '/Brand/assets/Testimonios videos/Testimonio Atlas Vital/Testimonio Atlas Vital(1)/Testimonio Atlas Vital(1)-Cover.jpg',
    name: 'Atlas Vital',
    role: 'CVR 0.9% → 2.8% · Suplementación natural',
    anim: 'r1',
  },
  {
    youtubeId: 'bqvw0jCbULg',
    cover: '/Brand/assets/Testimonios videos/Testimonio Epicars con portada/Testimonio Epicars con portada-Cover.jpg',
    name: 'Epicars',
    role: 'ROAS 1.8x → 4.3x · Automoción',
    anim: 'r2',
  },
  {
    youtubeId: 'gTNbjriqoaU',
    cover: '/Brand/assets/Testimonios videos/Testimonio Alfaroteca con portada/Testimonio Alfaroteca con portada-Cover.jpg',
    name: 'Alfaroteca',
    role: 'Bounce 78% → 54% · Arte y cultura',
    anim: 'r3',
  },
]

export default function VideoTestimonials() {
  const [modal, setModal] = useState<{ youtubeId: string; name: string } | null>(null)

  const openModal = (youtubeId: string, name: string) => {
    setModal({ youtubeId, name })
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModal(null)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* Video modal */}
      <div
        className={`modal${modal ? ' on' : ''}`}
        id="modal"
        onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
      >
        <div className="modal-in">
          <button className="modal-x" onClick={closeModal}>✕</button>
          <div className="modal-vw">
            {modal && (
              <iframe
                src={`https://www.youtube.com/embed/${modal.youtubeId}?autoplay=1`}
                title={modal.name}
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            )}
          </div>
          <p className="modal-name">{modal?.name}</p>
        </div>
      </div>

      <section className="sec-test">
        <div className="w">
          <div className="h2c r">
            <div>
              <span className="tag">Testimonios en vídeo</span>
              <h2>Lo que dicen<br />los que ya confiaron.</h2>
            </div>
            <p>
              Tres fundadores. En sus propias palabras. Sin guión, sin edición, sin filtros.
              Pulsa para ver el vídeo completo.
            </p>
          </div>

          <div className="tgrid">
            {videos.map((v) => (
              <div
                key={v.name}
                className={`tc rs ${v.anim}`}
                onClick={() => openModal(v.youtubeId, v.name)}
              >
                <div className="tc-vid">
                  <img src={v.cover} alt={`Portada del testimonio de ${v.name}`} />
                  <div className="tc-play">
                    <div className="pring">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0a1a35">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="tc-meta">
                  <div className="tc-name">{v.name}</div>
                  <div className="tc-role">{v.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
