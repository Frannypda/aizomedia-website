import type { Metadata } from 'next'
import DeckClientInit from '@/components/DeckClientInit'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios — Aizomedia',
  robots: { index: false, follow: false },
}

export default function DeckLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DeckClientInit />
      <div id="sp" />
      <nav className="deck-top-nav">
        <div className="w">
          <div className="deck-top-nav-in">
            <Link href="/" aria-label="Aizomedia">
              <img
                src="/Brand/assets/Logos/aizomedia..svg"
                alt="Aizomedia"
                style={{ height: '26px', width: 'auto', filter: 'brightness(0) invert(1)', display: 'block' }}
              />
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Link href="/deck" className="deck-breadcrumb">← Todos los servicios</Link>
              <Link href="/reservar" className="btn btn-g" style={{ padding: '10px 20px', fontSize: '13px' }}>
                Reservar llamada
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  )
}
