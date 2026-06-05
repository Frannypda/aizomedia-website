export default function ShopifyMockup() {
  return (
    <section className="sec-shopify">
      <div className="w">
        <div className="shopify-head r">
          <span className="tag">Para tiendas Shopify</span>
          <h2 className="r r1">
            Así se ve tu panel<br />cuando el post-clic convierte.
          </h2>
          <p className="r r2">
            Lo que ocurre en tu Shopify cuando alineamos tráfico, creatividades y
            experiencia post-clic. De 0.9% a 2.8% de conversión en 14 días.
          </p>
        </div>

        <div className="shopify-mock-wrap rs r3">
          <div className="shopify-sprint-tag">Estado: Después del Sprint</div>
          <div className="shopify-mock">
            <div className="shopify-browser">
              <div className="sb-dots">
                <span /><span /><span />
              </div>
              <div className="sb-url">admin.shopify.com/store/tu-tienda/analytics</div>
            </div>
            <div className="shopify-ui">
              <div className="shopify-sidebar">
                <div className="ss-logo">
                  <div className="ss-logo-sq" />
                  Tu tienda
                </div>
                <div className="ss-nav">
                  <div className="ss-item">Inicio</div>
                  <div className="ss-item">Pedidos</div>
                  <div className="ss-item active">Análisis</div>
                  <div className="ss-item">Productos</div>
                  <div className="ss-item">Clientes</div>
                  <div className="ss-item">Marketing</div>
                </div>
              </div>
              <div className="shopify-main">
                <div className="sm-topbar">
                  <div className="sm-title">Resumen de ventas</div>
                  <div className="sm-date-btn">Últimos 14 días ▾</div>
                </div>
                <div className="sm-kpis">
                  <div className="smk">
                    <div className="smk-l">Ventas totales</div>
                    <div className="smk-v">€24,830</div>
                    <div className="smk-d">↑ +68% vs antes</div>
                  </div>
                  <div className="smk">
                    <div className="smk-l">Pedidos</div>
                    <div className="smk-v">287</div>
                    <div className="smk-d">↑ +71%</div>
                  </div>
                  <div className="smk hl">
                    <div className="smk-l">Tasa de conversión</div>
                    <div className="smk-v">2.8%</div>
                    <div className="smk-d">↑ +1.9pp</div>
                  </div>
                  <div className="smk">
                    <div className="smk-l">Ticket medio</div>
                    <div className="smk-v">€86.5</div>
                    <div className="smk-d">↑ +12%</div>
                  </div>
                </div>
                <div className="sm-chart-panel">
                  <div className="sm-chart-title">Ventas diarias</div>
                  <svg className="sm-chart-svg" viewBox="0 0 580 80" fill="none" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="shopG" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#95bf47" stopOpacity=".3" />
                        <stop offset="100%" stopColor="#95bf47" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="25" x2="580" y2="25" stroke="#f0f0f0" strokeWidth="1" />
                    <line x1="0" y1="50" x2="580" y2="50" stroke="#f0f0f0" strokeWidth="1" />
                    <line x1="0" y1="70" x2="580" y2="70" stroke="#f0f0f0" strokeWidth="1" />
                    <path
                      d="M0 72 L52 68 L104 65 L156 58 L208 50 L260 42 L312 34 L364 26 L416 19 L468 12 L520 7 L580 3 L580 80 L0 80 Z"
                      fill="url(#shopG)"
                    />
                    <path
                      d="M0 72 L52 68 L104 65 L156 58 L208 50 L260 42 L312 34 L364 26 L416 19 L468 12 L520 7 L580 3"
                      stroke="#95bf47"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      className="shop-line"
                      id="shopLine"
                    />
                  </svg>
                </div>
                <div className="sm-orders-panel">
                  <div className="smo-title">Pedidos recientes</div>
                  <div className="smo-row">
                    <span className="smo-num">#1082</span>
                    <span className="smo-desc">Pedido completado · 2 productos</span>
                    <span className="smo-badge">Pagado</span>
                    <span className="smo-price">€124.00</span>
                  </div>
                  <div className="smo-row">
                    <span className="smo-num">#1081</span>
                    <span className="smo-desc">Pedido completado · 1 producto</span>
                    <span className="smo-badge">Pagado</span>
                    <span className="smo-price">€67.50</span>
                  </div>
                  <div className="smo-row">
                    <span className="smo-num">#1080</span>
                    <span className="smo-desc">Pedido completado · 3 productos</span>
                    <span className="smo-badge">Pagado</span>
                    <span className="smo-price">€198.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
