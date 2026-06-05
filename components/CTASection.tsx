export default function CTASection() {
  return (
    <section className="sec-cta" id="contacto">
      <div className="w">
        <span className="tag tag-w r">Siguiente paso</span>
        <h2 className="r r1">
          ¿Listo para descubrir<br />qué está frenando tus ventas?
        </h2>
        <p className="cta-sub r r2">
          14 días. Diagnóstico real + cambios implementados. Sin permanencia, sin compromisos.
        </p>
        <div className="cta-btns r r3">
          <a
            href="/reservar"
            className="btn btn-g"
          >
            Quiero mi Sprint →
          </a>
          <a href="/reservar" className="btn btn-wout">
            Contactar por email
          </a>
        </div>
        <p className="cta-note r r4">
          Máx. 7 plazas al mes &nbsp;·&nbsp; Sin permanencia &nbsp;·&nbsp; Shopify + Paid Media activo
        </p>
      </div>
    </section>
  )
}
