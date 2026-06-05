import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ClientInit from '@/components/ClientInit'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Aizomedia',
  robots: 'noindex',
}

export default function PoliticaPrivacidad() {
  return (
    <>
      <ClientInit />
      <NavBar />
      <main>
        <section className="sec-legal">
          <div className="w">
            <div className="legal-doc">
              <h1>Política de Privacidad</h1>
              <p className="legal-date">Última actualización: junio de 2026</p>

              <h2>1. Responsable del tratamiento</h2>
              <p><strong>Denominación social:</strong> Ferrer Alliance SL</p>
              <p><strong>Nombre comercial:</strong> Aizomedia</p>
              <p><strong>CIF:</strong> B75911255</p>
              <p><strong>Domicilio:</strong> Calle de Dolores Ibarruri 7, 28942 Fuenlabrada, Madrid</p>
              <p><strong>Email de contacto:</strong> aizomediaagency@gmail.com</p>
              <p><strong>Actividad:</strong> Agencia de conversión post-clic para ecommerce en Shopify</p>

              <h2>2. Qué datos recogemos</h2>
              <p>A través del formulario de contacto de la web recogemos los siguientes datos personales:</p>
              <ul>
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>URL de la tienda online</li>
                <li>Información sobre el negocio: facturación aproximada y descripción del principal problema</li>
              </ul>

              <h2>3. Para qué usamos tus datos</h2>
              <p>Los datos recogidos se utilizan exclusivamente para:</p>
              <ul>
                <li>Atender tu solicitud y responder a tu consulta</li>
                <li>Contactar contigo en relación a los servicios de Aizomedia</li>
                <li>Gestionar la reserva de videollamada de diagnóstico</li>
              </ul>
              <p>No utilizamos tus datos para fines distintos a los indicados. No los cedemos a terceros salvo obligación legal, excepto a los proveedores de servicio indicados en el apartado 8.</p>

              <h2>4. Base legal</h2>
              <p>
                El tratamiento se basa en el consentimiento que prestas voluntariamente al enviar el formulario
                (art. 6.1.a del Reglamento General de Protección de Datos). Puedes retirar ese consentimiento
                en cualquier momento escribiendo a aizomediaagency@gmail.com, sin que ello afecte a la licitud
                del tratamiento previo a la retirada.
              </p>

              <h2>5. Durante cuánto tiempo conservamos los datos</h2>
              <p>
                Conservamos tus datos durante el tiempo necesario para atender tu solicitud y, si existe relación
                comercial, mientras dure. Tras su finalización, los bloqueamos durante los plazos legalmente
                establecidos y procedemos a su eliminación.
              </p>

              <h2>6. Tus derechos</h2>
              <p>Tienes derecho a:</p>
              <ul>
                <li><strong>Acceso:</strong> conocer qué datos tuyos tratamos</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> solicitar que eliminemos tus datos cuando ya no sean necesarios</li>
                <li><strong>Oposición:</strong> oponerte al tratamiento en determinadas circunstancias</li>
                <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado y de uso común</li>
                <li><strong>Limitación:</strong> solicitar que restrinjamos el tratamiento</li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, escríbenos a{' '}
                <a href="mailto:aizomediaagency@gmail.com">aizomediaagency@gmail.com</a>.
                Si consideras que el tratamiento no es conforme a la normativa, también puedes
                presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).
              </p>

              <h2>7. Seguridad</h2>
              <p>
                Aplicamos las medidas técnicas y organizativas apropiadas para proteger tus datos personales
                frente a accesos no autorizados, pérdida, alteración o destrucción, en cumplimiento del RGPD.
              </p>

              <h2>8. Proveedores de servicio</h2>
              <p>Para prestar el servicio utilizamos los siguientes proveedores que pueden tratar tus datos en nuestro nombre:</p>
              <ul>
                <li><strong>Resend</strong> (resend.com) — Envío de notificaciones por correo electrónico</li>
                <li><strong>Cal.com</strong> (cal.com) — Gestión de reservas de videollamada</li>
              </ul>
              <p>Estos proveedores actúan como encargados del tratamiento y están sujetos a sus propias políticas de privacidad y, en todo caso, a los requisitos del RGPD.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
