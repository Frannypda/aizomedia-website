const IMG = '/Brand/assets/Creativos'
const COS = `${IMG}/Cosmeticos`
const MOD = `${IMG}/Moda`
const SUP = `${IMG}/Suplemetaci%C3%B3n`

type Card = { img: string; alt: string }

const row1: Card[] = [
  { img: `${SUP}/anuncio-meta-ads-suplementacion-omega-3-epa-dha-capsulas-story.jpg`, alt: 'Anuncio Meta Ads suplementación Omega 3 EPA DHA cápsulas' },
  { img: `${COS}/anuncio-meta-ads-cosmeticos-contorno-ojos-mirada-luminosa-story.jpg`, alt: 'Anuncio Meta Ads cosméticos contorno de ojos mirada luminosa' },
  { img: `${MOD}/anuncio-meta-ads-moda-chandal-anime-street-couture-edicion-limitada-story.jpg`, alt: 'Anuncio Meta Ads moda chándal Anime Street Couture edición limitada' },
  { img: `${COS}/anuncio-meta-ads-cosmeticos-perfume-mist-the-aura-story.jpg`, alt: 'Anuncio Meta Ads cosméticos perfume mist The Aura' },
  { img: `${SUP}/anuncio-meta-ads-suplementacion-ashwagandha-ksm66-productividad-story.jpg`, alt: 'Anuncio Meta Ads suplementación Ashwagandha KSM-66 productividad' },
  { img: `${COS}/anuncio-meta-ads-cosmeticos-crema-facial-vegana-antiedad-story.jpg`, alt: 'Anuncio Meta Ads cosméticos crema facial vegana antiedad' },
  { img: `${MOD}/anuncio-meta-ads-moda-hoodie-anime-street-couture-streetwear-story.jpg`, alt: 'Anuncio Meta Ads moda hoodie Anime Street Couture streetwear' },
  { img: `${COS}/anuncio-meta-ads-cosmeticos-leche-limpiadora-piel-sensible-story.jpg`, alt: 'Anuncio Meta Ads cosméticos leche limpiadora piel sensible' },
  { img: `${COS}/anuncio-meta-ads-cosmeticos-serum-facial-antiaging-story.jpg`, alt: 'Anuncio Meta Ads cosméticos sérum facial antiaging' },
  { img: `${COS}/anuncio-meta-ads-cosmeticos-hair-mist-hidratacion-capilar-story.jpg`, alt: 'Anuncio Meta Ads cosméticos hair mist hidratación capilar' },
  { img: `${COS}/anuncio-meta-ads-cosmeticos-pack-protector-solar-spf50-story.jpg`, alt: 'Anuncio Meta Ads cosméticos pack protector solar SPF50' },
]

const row2: Card[] = [...row1].reverse()


function CreCard({ card }: { card: Card }) {
  return (
    <div className="cre-card cre-c916">
      <img src={card.img} alt={card.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  )
}

function CreRow({ cards, cls }: { cards: Card[]; cls: string }) {
  const doubled = [...cards, ...cards]
  return (
    <div className={`cre-row ${cls}`}>
      {doubled.map((c, i) => <CreCard key={i} card={c} />)}
    </div>
  )
}

export default function CreativosSection() {
  return (
    <section className="sec-cre" id="creativos">
      <div className="cre-head">
        <span className="tag">Pack Creativos</span>
        <h2 className="r r1" style={{ fontSize: 'clamp(28px,3.2vw,44px)', marginBottom: '14px' }}>
          Creativos que paran el scroll<br />y llevan al clic.
        </h2>
        <p className="r r2" style={{ fontSize: '17px', color: 'var(--grey)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
          Piezas para Meta Ads producidas para marcas de ecommerce. Logos difuminados por
          confidencialidad — los formatos y layouts son reales.
        </p>
      </div>

      <div className="cre-track">
        <CreRow cards={row1} cls="cre-row-fwd" />
        <CreRow cards={row2} cls="cre-row-rev" />
      </div>
    </section>
  )
}
