'use client'

import { useState } from 'react'
import ContactForm from './ContactForm'
import CalEmbed from './CalEmbed'

export default function ReservarFlow() {
  const [step, setStep] = useState<'form' | 'cal'>('form')

  if (step === 'cal') {
    return (
      <div className="res-cal-step">
        <div className="res-cal-head">
          <span className="tag tag-w">Último paso</span>
          <h2>Elige el día y hora <em>que mejor te venga.</em></h2>
          <p>Videollamada de 30 min. Te enviaremos el enlace por email.</p>
        </div>
        <div className="res-cal-embed">
          <CalEmbed />
        </div>
      </div>
    )
  }

  return (
    <div className="res-layout">
      <div className="res-left r">
        <span className="tag tag-w">Llamada gratuita · Sin compromiso</span>
        <h1>
          Cuéntanos tu caso.<br />
          <em>Elige tu hueco.</em>
        </h1>
        <p className="res-sub">
          Rellena el formulario, elige el día y hora que mejor te venga
          y nos vemos en videollamada. Sin pitch, sin rollo.
        </p>

        <div className="res-steps">
          <div className="res-step">
            <span className="rs-num">01</span>
            <div>
              <strong>Rellenas el formulario</strong>
              <span>Nos cuentas tu situación en 2 minutos.</span>
            </div>
          </div>
          <div className="res-step">
            <span className="rs-num">02</span>
            <div>
              <strong>Eliges día y hora</strong>
              <span>El calendario aparece al instante, tú decides cuándo.</span>
            </div>
          </div>
          <div className="res-step">
            <span className="rs-num">03</span>
            <div>
              <strong>Videollamada de 30 min</strong>
              <span>Te decimos exactamente qué falla y cómo lo arreglamos.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="res-right r r2">
        <div className="res-form-card">
          <ContactForm onSuccess={() => setStep('cal')} />
        </div>
      </div>
    </div>
  )
}
