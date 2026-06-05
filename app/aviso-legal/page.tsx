import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ClientInit from '@/components/ClientInit'

export const metadata: Metadata = {
  title: 'Aviso Legal — Aizomedia',
  robots: 'noindex',
}

export default function AvisoLegal() {
  return (
    <>
      <ClientInit />
      <NavBar />
      <main>
        <section className="sec-legal">
          <div className="w">
            <div className="legal-doc">
              <h1>Aviso Legal</h1>
              <p className="legal-date">Última actualización: junio de 2026</p>

              <h2>1. Identificación del titular</h2>
              <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa:</p>
              <ul>
                <li><strong>Denominación social:</strong> Ferrer Alliance SL</li>
                <li><strong>CIF:</strong> B75911255</li>
                <li><strong>Domicilio social:</strong> Calle de Dolores Ibarruri 7, 28942 Fuenlabrada, Madrid</li>
                <li><strong>Registro Mercantil:</strong> Pendiente de inscripción</li>
                <li><strong>Actividad:</strong> Agencia de conversión post-clic para ecommerce en Shopify</li>
                <li><strong>Nombre comercial:</strong> Aizomedia</li>
                <li><strong>Email de contacto:</strong> aizomediaagency@gmail.com</li>
                <li><strong>Sitio web:</strong> aizomedia.com</li>
              </ul>

              <h2>2. Objeto y ámbito de aplicación</h2>
              <p>
                El presente Aviso Legal regula el acceso y uso del sitio web de Aizomedia, así como los
                contenidos y servicios puestos a disposición de los usuarios. El acceso y uso de este sitio
                implica la aceptación íntegra de este aviso legal.
              </p>

              <h2>3. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos del sitio web (textos, imágenes, gráficos, logotipos, iconos, código fuente
                y demás elementos) son propiedad de Aizomedia o de terceros que han autorizado su uso, y están
                protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.
              </p>
              <p>
                Queda prohibida la reproducción, distribución, comunicación pública o transformación de dichos
                contenidos sin la autorización expresa y por escrito de Aizomedia, salvo para uso personal y
                privado no comercial.
              </p>

              <h2>4. Condiciones de uso</h2>
              <p>El usuario se compromete a hacer un uso adecuado del sitio web y, en particular, a no:</p>
              <ul>
                <li>Usar el sitio para actividades ilícitas o contrarias a la buena fe</li>
                <li>Introducir o difundir contenidos falsos, difamatorios o que vulneren derechos de terceros</li>
                <li>Utilizar mecanismos automatizados para extraer contenido del sitio sin autorización</li>
              </ul>

              <h2>5. Exclusión de responsabilidad</h2>
              <p>
                Aizomedia no garantiza la disponibilidad continua del sitio web y no será responsable de los
                daños que pudieran derivarse de interrupciones técnicas o del uso indebido del sitio por parte
                de terceros.
              </p>
              <p>
                El sitio puede contener enlaces a webs de terceros. Aizomedia no controla esos sitios y no
                asume responsabilidad alguna por sus contenidos.
              </p>

              <h2>6. Legislación aplicable y jurisdicción</h2>
              <p>
                Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del
                acceso o uso de este sitio web, las partes se someten a los juzgados y tribunales españoles
                competentes, con renuncia a cualquier otro fuero que pudiera corresponderles.
              </p>

              <h2>7. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con el uso de este sitio web, puedes contactar con nosotros
                en <a href="mailto:aizomediaagency@gmail.com">aizomediaagency@gmail.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
