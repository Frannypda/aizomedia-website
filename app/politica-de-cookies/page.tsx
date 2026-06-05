import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ClientInit from '@/components/ClientInit'

export const metadata: Metadata = {
  title: 'Política de Cookies — Aizomedia',
  robots: 'noindex',
}

export default function PoliticaCookies() {
  return (
    <>
      <ClientInit />
      <NavBar />
      <main>
        <section className="sec-legal">
          <div className="w">
            <div className="legal-doc">
              <h1>Política de Cookies</h1>
              <p className="legal-date">Última actualización: junio de 2026</p>

              <h2>¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo cuando
                los visitas. Sirven para que el sitio funcione correctamente y para recopilar información
                sobre cómo se usa.
              </p>

              <h2>Cookies que usa esta web</h2>
              <p>Esta web utiliza exclusivamente cookies técnicas y de terceros necesarias para el funcionamiento del servicio:</p>

              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Proveedor</th>
                    <th>Finalidad</th>
                    <th>Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cookies de sesión del embed</td>
                    <td>Cal.com</td>
                    <td>Funcionamiento del calendario de reservas incrustado en la página de contacto</td>
                    <td>Sesión</td>
                  </tr>
                  <tr>
                    <td>Cookies técnicas de Next.js</td>
                    <td>Propias</td>
                    <td>Correcto funcionamiento de la aplicación web (enrutamiento, hidratación)</td>
                    <td>Sesión</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Esta web <strong>no utiliza cookies analíticas, publicitarias ni de rastreo</strong> propias.
                Los proveedores de terceros indicados (Cal.com) pueden establecer sus propias cookies, que
                están sujetas a sus respectivas políticas de privacidad.
              </p>

              <h2>Cómo gestionar las cookies</h2>
              <p>Puedes configurar tu navegador para bloquear o eliminar cookies. A continuación encontrarás las instrucciones de los navegadores más habituales:</p>
              <ul>
                <li><strong>Google Chrome:</strong> Configuración › Privacidad y seguridad › Cookies</li>
                <li><strong>Mozilla Firefox:</strong> Opciones › Privacidad y seguridad › Cookies</li>
                <li><strong>Safari:</strong> Preferencias › Privacidad › Gestionar datos del sitio web</li>
                <li><strong>Microsoft Edge:</strong> Configuración › Cookies y permisos del sitio</li>
              </ul>
              <p>
                Ten en cuenta que bloquear ciertas cookies puede afectar al correcto funcionamiento de
                algunos elementos de la web, como el calendario de reservas.
              </p>

              <h2>Responsable</h2>
              <p>Ferrer Alliance SL (Aizomedia) — CIF B75911255 — Calle de Dolores Ibarruri 7, 28942 Fuenlabrada, Madrid</p>

              <h2>Contacto</h2>
              <p>
                Si tienes dudas sobre el uso de cookies en esta web, escríbenos a{' '}
                <a href="mailto:aizomediaagency@gmail.com">aizomediaagency@gmail.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
