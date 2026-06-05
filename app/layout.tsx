import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700'],
  style: ['italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aizomedia — Agencia de Conversión Post-Clic para Ecommerce Shopify',
  description: 'CRO, Meta Ads, Email Marketing y Creatividades para ecommerce en Shopify. Diagnóstico + implementación real en 14 días. Sin permanencia.',
  metadataBase: new URL('https://aizomedia.com'),
  openGraph: {
    title: 'Aizomedia — Agencia de Conversión Post-Clic para Ecommerce Shopify',
    description: 'Tienes tráfico. Tienes anuncios. Pero las ventas no llegan como deberían. Eso lo arreglamos en 14 días.',
    url: 'https://aizomedia.com',
    siteName: 'Aizomedia',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aizomedia — Agencia de Conversión Post-Clic para Ecommerce Shopify',
    description: 'Tienes tráfico. Tienes anuncios. Pero las ventas no llegan como deberían. Eso lo arreglamos en 14 días.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
