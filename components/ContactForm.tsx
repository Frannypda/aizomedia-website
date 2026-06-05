'use client'

import { useState } from 'react'

type State = 'idle' | 'loading' | 'ok' | 'error'

export default function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [state, setState] = useState<State>('idle')
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', tienda: '', facturacion: '', problema: '',
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        onSuccess ? onSuccess() : setState('ok')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'ok') {
    return (
      <div className="cf-success">
        <div className="cf-success-icon">✓</div>
        <h3>Recibido.</h3>
        <p>Ahora elige el día y hora que mejor te venga para la videollamada.</p>
      </div>
    )
  }

  return (
    <form className="cf" onSubmit={submit}>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-nombre">Nombre</label>
          <input
            id="cf-nombre" type="text" placeholder="Tu nombre"
            value={form.nombre} onChange={e => set('nombre', e.target.value)} required
            suppressHydrationWarning
          />
        </div>
        <div className="cf-field">
          <label htmlFor="cf-telefono">Teléfono</label>
          <input
            id="cf-telefono" type="tel" placeholder="+34 600 000 000"
            value={form.telefono} onChange={e => set('telefono', e.target.value)} required
            suppressHydrationWarning
          />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email" type="email" placeholder="tu@email.com"
          value={form.email} onChange={e => set('email', e.target.value)} required
          suppressHydrationWarning
        />
      </div>

      <div className="cf-field">
        <label htmlFor="cf-tienda">URL de tu tienda Shopify</label>
        <input
          id="cf-tienda" type="url" placeholder="https://tutienda.com"
          value={form.tienda} onChange={e => set('tienda', e.target.value)} required
          suppressHydrationWarning
        />
      </div>

      <div className="cf-field">
        <label htmlFor="cf-facturacion">Facturación mensual aproximada</label>
        <select
          id="cf-facturacion"
          value={form.facturacion}
          onChange={e => set('facturacion', e.target.value)}
          required
        >
          <option value="" disabled>Selecciona un rango</option>
          <option value="Menos de 3.000€/mes">Menos de 3.000€/mes</option>
          <option value="Entre 3.000€ y 10.000€/mes">Entre 3.000€ y 10.000€/mes</option>
          <option value="Entre 10.000€ y 30.000€/mes">Entre 10.000€ y 30.000€/mes</option>
          <option value="Más de 30.000€/mes">Más de 30.000€/mes</option>
        </select>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-problema">¿Cuál es tu principal problema ahora mismo?</label>
        <textarea
          id="cf-problema"
          placeholder="Tengo tráfico pero nadie compra, mi ROAS ha bajado, no sé por qué no convierto..."
          rows={4}
          value={form.problema}
          onChange={e => set('problema', e.target.value)}
          required
        />
      </div>

      {state === 'error' && (
        <p className="cf-error">Algo ha fallado. Escríbenos a aizomediaagency@gmail.com</p>
      )}

      <button type="submit" className="btn btn-g cf-submit" disabled={state === 'loading'}>
        {state === 'loading' ? 'Enviando...' : 'Siguiente: elige tu hueco →'}
      </button>

      <p className="cf-note">Sin compromiso · Videollamada de 30 min</p>
    </form>
  )
}
