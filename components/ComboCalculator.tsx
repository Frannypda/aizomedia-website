'use client'
import { useState } from 'react'
import Link from 'next/link'

const SERVICES = [
  { id: 'cro', name: 'CRO Continuo', price: 850, desc: 'Optimización mensual del funnel', href: '/deck/cro' },
  { id: 'meta', name: 'Meta Ads', price: 800, desc: 'Gestión de campañas FB + IG', href: '/deck/meta' },
  { id: 'email', name: 'Email Marketing', price: 600, desc: 'Klaviyo: setup + gestión mensual', href: '/deck/email' },
]

const COMBOS: Record<string, { price: number; saving: number }> = {
  'cro+meta': { price: 1500, saving: 150 },
  'email+meta': { price: 1250, saving: 150 },
  'cro+email': { price: 1300, saving: 150 },
  'cro+email+meta': { price: 1900, saving: 350 },
}

export default function ComboCalculator() {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (id: string) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])

  const sortedKey = [...selected].sort().join('+')
  const combo = COMBOS[sortedKey]
  const baseTotal = selected.reduce((sum, id) => sum + (SERVICES.find((s) => s.id === id)?.price ?? 0), 0)
  const finalPrice = combo?.price ?? baseTotal
  const saving = combo?.saving ?? 0

  return (
    <div className="combo-calc-wrap r">
      <div className="combo-calc-inner">
        <div className="combo-options">
          {SERVICES.map((s) => {
            const on = selected.includes(s.id)
            return (
              <button key={s.id} className={`combo-opt${on ? ' selected' : ''}`} onClick={() => toggle(s.id)}>
                <div className="combo-opt-check">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4>{s.name}</h4>
                <div className="combo-opt-price">{s.price.toLocaleString('es-ES')} €/mes</div>
              </button>
            )
          })}
        </div>

        <div className="combo-result">
          <div className="combo-result-nums">
            {selected.length === 0 ? (
              <p className="combo-result-none">Selecciona los servicios que te interesan para ver el precio combinado con descuento.</p>
            ) : (
              <>
                <div className="combo-result-label">Total mensual{saving > 0 ? ' con descuento' : ''}</div>
                <div className="combo-result-total">
                  {finalPrice.toLocaleString('es-ES')} <span className="combo-result-total-period">€/mes</span>
                </div>
                {saving > 0 && (
                  <div className="combo-result-saving">✓ Ahorro de {saving.toLocaleString('es-ES')} €/mes</div>
                )}
                <div className="combo-result-detail">
                  {saving > 0
                    ? `Sin descuento serían ${baseTotal.toLocaleString('es-ES')} €/mes · Sin IVA · Mínimo 3 meses`
                    : selected.length === 1
                      ? 'Añade otro servicio para obtener descuento en combo.'
                      : 'Sin IVA · Mínimo 3 meses'}
                </div>
              </>
            )}
          </div>
          {selected.length > 0 && (
            <div className="combo-result-cta">
              <Link href="/reservar" className="btn btn-g">Reservar llamada →</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
