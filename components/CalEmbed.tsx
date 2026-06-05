'use client'

import { useEffect } from 'react'

declare global {
  interface Window { Cal: any }
}

export default function CalEmbed() {
  useEffect(() => {
    // Cal.com queue initializer — debe correr antes de que cargue el script
    ;(function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => { a.q.push(ar) }
      const d = document
      C.Cal = C.Cal || function (...args: any[]) {
        const cal = C.Cal
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          const s = d.createElement('script') as HTMLScriptElement
          s.src = A
          d.head.appendChild(s)
          cal.loaded = true
        }
        if (args[0] === L) {
          const api = (...a: any[]) => p(api, a)
          const namespace = args[1]
          ;(api as any).q = []
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], args)
            p(cal, ['-', namespace, args])
          } else {
            p(cal, args)
          }
          return
        }
        p(cal, args)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal('init', 'sprint-ecommerce', { origin: 'https://cal.com' })

    window.Cal.ns['sprint-ecommerce']('inline', {
      elementOrSelector: '#cal-embed',
      config: { layout: 'month_view' },
      calLink: 'aizomedia/sprint-ecommerce',
    })
  }, [])

  return (
    <div
      id="cal-embed"
      style={{ width: '100%', height: '100%', minHeight: '700px', overflow: 'scroll' }}
    />
  )
}
