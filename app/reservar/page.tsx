import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ClientInit from '@/components/ClientInit'
import ReservarFlow from '@/components/ReservarFlow'

export const metadata: Metadata = {
  title: 'Reserva tu llamada — Aizomedia',
  description: 'Cuéntanos tu situación y reserva una videollamada de 30 min. Analizamos tu ecommerce Shopify y te decimos exactamente qué está frenando tus ventas.',
}

export default function Reservar() {
  return (
    <>
      <ClientInit />
      <NavBar />
      <main>
        <section className="sec-res-hero">
          <div className="ho ho1" style={{ opacity: 0.6 }} />
          <div className="ho ho2" style={{ opacity: 0.4 }} />
          <div className="w">
            <ReservarFlow />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
