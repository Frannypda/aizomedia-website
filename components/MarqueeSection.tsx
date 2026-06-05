const logos = [
  { src: '/Brand/assets/Logos de clientes/La pinilla.png', alt: 'La Pinilla' },
  { src: '/Brand/assets/Logos de clientes/Megaimmuno.png', alt: 'Megaimmuno' },
  { src: '/Brand/assets/Logos de clientes/Dzzero.png', alt: 'Dzzero' },
  { src: '/Brand/assets/Logos de clientes/Animme Street couture.png', alt: 'Anime Street Couture' },
  { src: '/Brand/assets/Logos de clientes/Little circus.png', alt: 'Little Circus' },
]

const doubled = [...logos, ...logos, ...logos, ...logos]

export default function MarqueeSection() {
  return (
    <div className="mq-wrap">
      <div className="mq-logos-track">
        {doubled.map((l, i) => (
          <div className="mq-logo-item" key={i}>
            <img src={l.src} alt={l.alt} className="mq-logo-img" />
          </div>
        ))}
      </div>
    </div>
  )
}
