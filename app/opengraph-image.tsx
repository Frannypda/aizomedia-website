import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Aizomedia — Agencia de Conversión Post-Clic para Ecommerce Shopify'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0a1a35 0%, #183059 60%, #0f2347 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative circle top-right */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'rgba(78,152,112,0.12)', display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '60px',
          width: '260px', height: '260px', borderRadius: '50%',
          background: 'rgba(78,152,112,0.07)', display: 'flex',
        }} />

        {/* Tag */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px',
        }}>
          <div style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#4e9870',
          }} />
          <span style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', color: '#4e9870', textTransform: 'uppercase' }}>
            Agencia de Conversión · Shopify
          </span>
        </div>

        {/* Logo / Name */}
        <div style={{ fontSize: '72px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', display: 'flex' }}>
          Aizomedia.
        </div>

        {/* Headline */}
        <div style={{ fontSize: '26px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, maxWidth: '700px', display: 'flex' }}>
          Tu problema no es el tráfico. Es lo que pasa después del clic.
        </div>

        {/* Bottom stats */}
        <div style={{ display: 'flex', gap: '48px', marginTop: '56px' }}>
          {[
            { val: '2.8%', lbl: 'Conversión' },
            { val: '4.3x', lbl: 'ROAS Meta' },
            { val: '14 días', lbl: 'Por Sprint' },
          ].map((s) => (
            <div key={s.lbl} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff' }}>{s.val}</span>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
