import Image from 'next/image'

const mqLogos = [
  { src: '/Brand/assets/Logos de clientes/La pinilla.png', alt: 'La Pinilla' },
  { src: '/Brand/assets/Logos de clientes/Megaimmuno.png', alt: 'Megaimmuno' },
  { src: '/Brand/assets/Logos de clientes/Animme Street couture.png', alt: 'Anime Street Couture' },
  { src: '/Brand/assets/Logos de clientes/Little circus.png', alt: 'Little Cirkus' },
]
const mqDoubled = [...mqLogos, ...mqLogos, ...mqLogos, ...mqLogos]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="ho ho1" id="ho1" />
      <div className="ho ho2" id="ho2" />
      <div className="ho ho3" />
      <div className="w">
        <div className="hero-grid">
          <div>
            <span className="tag tag-w">Agencia de Conversión · Shopify</span>
            <h1>
              Tu problema no es el tráfico.{' '}
              <em>Es lo que pasa después del clic.</em>
            </h1>
            <p className="hero-sub">
              Tienes tráfico. Tienes anuncios. Pero las ventas no llegan como deberían.
              Eso lo arreglamos en 14 días.
            </p>
            <div className="hero-ctas">
              <a href="/reservar" className="btn btn-g">Quiero mi Sprint →</a>
              <a href="#servicios" className="btn btn-ghost-w">Ver servicios</a>
            </div>
            <div className="hero-ms">
              <div className="hms-item">
                <span className="hms-val">2.8%</span>
                <span className="hms-lbl">Conversión</span>
              </div>
              <div className="hms-sep" />
              <div className="hms-item">
                <span className="hms-val">4.3x</span>
                <span className="hms-lbl">ROAS Meta</span>
              </div>
              <div className="hms-sep" />
              <div className="hms-item">
                <span className="hms-val">14</span>
                <span className="hms-lbl">Días por Sprint</span>
              </div>
            </div>

            <div className="hero-clients">
              <div className="hero-clients-logos">
                <div className="logo-bubble">
                  <Image src="/Brand/assets/Logos de clientes/La pinilla.png" alt="La Pinilla" width={38} height={38} />
                </div>
                <div className="logo-bubble">
                  <Image src="/Brand/assets/Logos de clientes/Animme Street couture.png" alt="Anime Street Couture" width={38} height={38} />
                </div>
                <div className="logo-bubble">
                  <Image src="/Brand/assets/Logos de clientes/Megaimmuno.png" alt="Megaimmuno" width={38} height={38} />
                </div>
              </div>
              <p className="hero-clients-label">+15 marcas han trabajado con nosotros</p>
            </div>
          </div>

          <div className="hero-right" id="hr">
            <div className="dcard dc1">
              <div className="dc1-inner">
                <div>
                  <div className="dcard-label">Tasa de conversión</div>
                  <div className="dcard-val">
                    2.8<span className="unit">%</span>
                  </div>
                  <div className="dcard-badge">↑ +1.9pp vs antes</div>
                </div>
                <div className="dc1-chart">
                  <div className="cvr-bars">
                    <div className="cvr-bar b" />
                    <div className="cvr-bar b" />
                    <div className="cvr-bar b" />
                    <div className="cvr-bar b" />
                    <div className="cvr-bar a" />
                    <div className="cvr-bar a" />
                    <div className="cvr-bar a" />
                    <div className="cvr-bar a" />
                  </div>
                  <div className="cvr-leg">
                    <span className="lb">Antes</span>
                    <span className="la">Después</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dcard dc2">
              <div className="dcard-label">ROAS Meta Ads</div>
              <div className="dcard-val">
                4.3<span className="unit">x</span>
              </div>
              <div className="dcard-badge">↑ desde 1.8x</div>
            </div>
            <div className="dcard dc3">
              <div className="dcard-label">Sprints completados</div>
              <div className="dcard-val">
                12<span className="unit">+</span>
              </div>
              <div className="dcard-badge">✓ Sin permanencia</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mq-section">
        <p className="mq-title">Marcas que han confiado en nosotros</p>
        <div className="mq-wrap">
          <div className="mq-logos-track">
            {mqDoubled.map((l, i) => (
              <div className="mq-logo-item" key={i}>
                <img src={l.src} alt={l.alt} className="mq-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-ind">
        <div className="si-line" />
        <span className="si-text">Scroll</span>
      </div>
    </section>
  )
}
