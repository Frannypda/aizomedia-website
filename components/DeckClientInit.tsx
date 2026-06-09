'use client'
import { useEffect } from 'react'

export default function DeckClientInit() {
  useEffect(() => {
    const sp = document.getElementById('sp')
    const updateProgress = () => {
      if (sp) {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100
        sp.style.width = pct + '%'
      }
    }
    window.addEventListener('scroll', updateProgress, { passive: true })

    const ro = new IntersectionObserver(
      (entries) => entries.forEach((x) => {
        if (x.isIntersecting) { x.target.classList.add('on'); ro.unobserve(x.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    )
    document.querySelectorAll('.r,.rs,.rl,.rr').forEach((el) => ro.observe(el))

    const tlObs = new IntersectionObserver(
      (entries) => entries.forEach((x) => {
        if (!x.isIntersecting) return
        document.querySelector('.deck-tl-line')?.classList.add('on')
        tlObs.unobserve(x.target)
      }),
      { threshold: 0.15 }
    )
    const tl = document.querySelector('.deck-timeline')
    if (tl) tlObs.observe(tl)

    type MagEntry = { el: Element; move: (e: Event) => void; leave: () => void }
    const mag: MagEntry[] = []
    document.querySelectorAll('.btn-g,.btn-n').forEach((b) => {
      const move = (e: Event) => {
        const me = e as MouseEvent
        const r = b.getBoundingClientRect()
        ;(b as HTMLElement).style.transform =
          `translate(${(me.clientX - r.left - r.width / 2) * 0.13}px,${(me.clientY - r.top - r.height / 2) * 0.15}px) translateY(-2px)`
      }
      const leave = () => { (b as HTMLElement).style.transform = '' }
      b.addEventListener('mousemove', move)
      b.addEventListener('mouseleave', leave)
      mag.push({ el: b, move, leave })
    })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      ro.disconnect()
      tlObs.disconnect()
      mag.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return null
}
