export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="w">
        <div className="foot-top">
          <div className="foot-brand">
            <img src="/Brand/assets/Logos/aizomedia..svg" alt="Aizomedia" className="foot-logo" />
            <p>Agencia de Conversión Post-Clic para Ecommerce Shopify.</p>
            <p>
              <a href="mailto:aizomediaagency@gmail.com">aizomediaagency@gmail.com</a>
            </p>
          </div>

          <div className="foot-links">
            <p className="foot-links-title">Legal</p>
            <a href="/politica-de-privacidad">Política de privacidad</a>
            <a href="/politica-de-cookies">Política de cookies</a>
            <a href="/aviso-legal">Aviso legal</a>
          </div>

          <div className="foot-links">
            <p className="foot-links-title">Navegación</p>
            <a href="/#servicios">Servicios</a>
            <a href="/#sprint">Sprint</a>
            <a href="/#resultados">Resultados</a>
            <a href="/#equipo">Equipo</a>
            <a href="/reservar">Contacto</a>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© 2026 Aizomedia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
