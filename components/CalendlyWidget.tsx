'use client'

import Script from 'next/script'

export default function CalendlyWidget() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/aizomediaagency/sprint-de-conversion?hide_event_type_details=1&hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}
