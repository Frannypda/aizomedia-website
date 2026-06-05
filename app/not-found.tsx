import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Página no encontrada — Aizomedia',
  robots: 'noindex',
}

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main>
        {/* Bloque navy */}
        <section style={{
          background: 'linear-gradient(145deg, #07101f, #0a1a35 45%, #183059 100%)',
          padding: '100px 24px 120px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Círculos decorativos */}
          <div style={{
            position: 'absolute', top: '-100px', right: '-100px',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'rgba(62,125,94,0.08)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-60px',
            width: '320px', height: '320px', borderRadius: '50%',
            background: 'rgba(62,125,94,0.05)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#4e9870',
              marginBottom: '24px',
            }}>
              Error 404
            </p>

            <h1 style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Esta página no existe.
            </h1>

            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '440px',
              lineHeight: 1.65,
              margin: '0 auto 48px',
            }}>
              Puede que la URL haya cambiado o que hayas escrito algo mal. Sin drama.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  background: 'linear-gradient(135deg, #3e7d5e, #2d5f47)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '15px',
                  borderRadius: '8px',
                  letterSpacing: '-0.01em',
                }}
              >
                Volver al inicio →
              </Link>
              <Link
                href="/reservar"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '15px',
                  borderRadius: '8px',
                }}
              >
                Reservar llamada
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
