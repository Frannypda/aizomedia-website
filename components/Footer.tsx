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
            <a
              href="https://www.instagram.com/aizomedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-ig"
              aria-label="Instagram de Aizomedia"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.1" fill="currentColor" strokeWidth="2"/>
              </svg>
              @aizomedia
            </a>
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
