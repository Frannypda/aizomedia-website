'use client'
import { useEffect } from 'react'

export default function ClientInit() {
  useEffect(() => {
    // scroll progress bar
    const sp = document.getElementById('sp')
    const updateProgress = () => {
      if (sp) {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100
        sp.style.width = pct + '%'
      }
    }
    window.addEventListener('scroll', updateProgress, { passive: true })

    // nav sticky shadow
    const nav = document.getElementById('nav')
    const updateNav = () => nav?.classList.toggle('nav-scrolled', window.scrollY > 20)
    window.addEventListener('scroll', updateNav, { passive: true })

    // floating CTA visibility
    const fcta = document.getElementById('fcta')
    const topEl = document.getElementById('top')
    let fctaObserver: IntersectionObserver | null = null
    if (fcta && topEl) {
      fctaObserver = new IntersectionObserver(
        (e) => fcta.classList.toggle('on', !e[0].isIntersecting),
        { threshold: 0 }
      )
      fctaObserver.observe(topEl)
    }

    // reveal animations
    const ro = new IntersectionObserver(
      (entries) => entries.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add('on')
          ro.unobserve(x.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    )
    document.querySelectorAll('.r,.rs,.rl,.rr').forEach((el) => ro.observe(el))

    // chart line animations
    const cho = new IntersectionObserver(
      (entries) => entries.forEach((x) => {
        if (!x.isIntersecting) return
        x.target.querySelectorAll('.chart-line').forEach((l, i) =>
          setTimeout(() => l.classList.add('drawn'), i * 200)
        )
        cho.unobserve(x.target)
      }),
      { threshold: 0.3 }
    )
    document.querySelectorAll('.sec-dash').forEach((el) => cho.observe(el))

    // sprint timeline line draw
    const stObs = new IntersectionObserver(
      (entries) => entries.forEach((x) => {
        if (!x.isIntersecting) return
        document.querySelector('.st-line')?.classList.add('on')
        stObs.unobserve(x.target)
      }),
      { threshold: 0.15 }
    )
    const stTimeline = document.querySelector('.sprint-timeline')
    if (stTimeline) stObs.observe(stTimeline)

    // shopify chart
    const shopObs = new IntersectionObserver(
      (entries) => entries.forEach((x) => {
        if (!x.isIntersecting) return
        const l = document.getElementById('shopLine')
        if (l) setTimeout(() => l.classList.add('drawn'), 400)
        shopObs.unobserve(x.target)
      }),
      { threshold: 0.3 }
    )
    const shopMock = document.querySelector('.shopify-mock')
    if (shopMock) shopObs.observe(shopMock)

    // parallax hero orbs
    const ho1 = document.getElementById('ho1')
    const ho2 = document.getElementById('ho2')
    const updateOrbs = () => {
      const y = window.scrollY
      if (ho1) ho1.style.transform = `translateY(${y * 0.35}px)`
      if (ho2) ho2.style.transform = `translateY(${y * 0.2}px)`
    }
    window.addEventListener('scroll', updateOrbs, { passive: true })

    // mouse parallax on hero cards
    const hr = document.getElementById('hr')
    const hcards = document.querySelectorAll('.hcard')
    let px = window.innerWidth > 860
    const updatePx = () => { px = window.innerWidth > 860 }
    window.addEventListener('resize', updatePx)
    const handleMouse = (e: MouseEvent) => {
      if (!px || !hr) return
      const rc = hr.getBoundingClientRect()
      const dx = (e.clientX - rc.left - rc.width / 2) / (rc.width / 2)
      const dy = (e.clientY - rc.top - rc.height / 2) / (rc.height / 2)
      hcards.forEach((c) => {
        const el = c as HTMLElement
        const d = +(el.dataset.d || 8)
        const rot = +(el.dataset.rot || 0)
        el.style.transform = `rotate(${rot}deg) translate(${dx * d}px,${dy * d}px)`
        el.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)'
      })
    }
    document.addEventListener('mousemove', handleMouse)

    // magnetic buttons
    type MagEntry = { el: Element; move: (e: Event) => void; leave: () => void }
    const magEntries: MagEntry[] = []
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
      magEntries.push({ el: b, move, leave })
    })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('scroll', updateNav)
      window.removeEventListener('scroll', updateOrbs)
      window.removeEventListener('resize', updatePx)
      document.removeEventListener('mousemove', handleMouse)
      fctaObserver?.disconnect()
      ro.disconnect()
      cho.disconnect()
      stObs.disconnect()
      shopObs.disconnect()
      magEntries.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return null
}
