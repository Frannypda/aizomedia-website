import BeforeAfterSlider from './BeforeAfterSlider'

export default function CasosSection() {
  return (
    <section className="sec-casos">
      <div className="w">
        <div className="casos-head r">
          <span className="tag">Caso real · ChrisFitness</span>
          <h2>De página de producto caída<br />a drop agotado.</h2>
          <p>Mismo producto. Mismo tráfico. Solo cambiamos la página de producto.</p>
        </div>

        <div className="r">
          <BeforeAfterSlider
            beforeSrc="/Brand/assets/Casos/cf-pdp-antes.png"
            afterSrc="/Brand/assets/Casos/cf-pdp-despues.jpg"
            beforeLabel="✗ Antes"
            afterLabel="✓ Después del Sprint"
            initialPos={40}
          />
        </div>

        <div className="casos-puntos r">
          <div className="caso-punto">
            <span className="caso-punto-tag caso-tag-bad">Antes</span>
            <p>Banner de cookies tapando el producto. Sin jerarquía visual ni urgencia.</p>
          </div>
          <div className="caso-punto-arrow">→</div>
          <div className="caso-punto">
            <span className="caso-punto-tag caso-tag-good">Después</span>
            <p>Barra de urgencia, reseñas junto al precio, tallas agotadas visibles, CTA único.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
