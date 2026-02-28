'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { PROCESS_STEPS } from '@/lib/data'

export default function ProcessSection() {
  const trackRef    = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  /* ── measure real card width from DOM ── */
  const getCardWidth = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const firstCard = track.querySelector<HTMLElement>('[data-card]')
    if (!firstCard) return 0
    const gap = 20 // gap-5 = 20px
    return firstCard.offsetWidth + gap
  }, [])

  /* ── sync dot + arrows on scroll ── */
  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const cw = getCardWidth()
    if (!cw) return
    const idx = Math.round(track.scrollLeft / cw)
    setActive(Math.min(idx, PROCESS_STEPS.length - 1))
    setCanPrev(track.scrollLeft > 8)
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 8)
  }, [getCardWidth])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', onScroll, { passive: true })
    // initial state
    onScroll()
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const scrollTo = (idx: number) => {
    const track = trackRef.current
    if (!track) return
    const cw = getCardWidth()
    track.scrollTo({ left: cw * idx, behavior: 'smooth' })
    setActive(idx)
  }

  const prev = () => scrollTo(Math.max(active - 1, 0))
  const next = () => scrollTo(Math.min(active + 1, PROCESS_STEPS.length - 1))

  return (
    <section style={{ background: 'var(--blue)', padding: '90px 0 72px', overflow: 'hidden' }}>

      {/* ─── Heading + arrows ─────────────────────────── */}
      <div className="container mb-12" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
        <h2
          className="font-display font-black uppercase"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.08, color: '#fff', maxWidth: 700 }}
        >
          <span style={{
            color: 'var(--yellow)',
            textDecoration: 'underline',
            textDecorationColor: 'var(--yellow)',
            textDecorationThickness: '4px',
            textUnderlineOffset: '7px',
          }}>
            OUR PROVEN PROCESS
          </span>
          {': HOW WE'}
          <br />
          DELIVER SOCIAL MEDIA SUCCESS
        </h2>

        {/* Prev / Next arrows */}
        <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
          {[{ fn: prev, enabled: canPrev, label: '←' }, { fn: next, enabled: canNext, label: '→' }].map(({ fn, enabled, label }) => (
            <button
              key={label}
              onClick={fn}
              aria-label={label === '←' ? 'Previous' : 'Next'}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.35)',
                background: enabled ? 'var(--yellow)' : 'rgba(255,255,255,0.1)',
                color: enabled ? '#0c1a4e' : 'rgba(255,255,255,0.4)',
                fontSize: '1.1rem',
                fontWeight: 900,
                cursor: enabled ? 'pointer' : 'default',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Scrollable card track ────────────────────── */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          /* left padding = container margin so cards align with heading */
          paddingLeft:  'max(28px, calc((100vw - 1240px) / 2 + 28px))',
          /* right padding so last card doesn't hug edge */
          paddingRight: 'max(28px, calc((100vw - 1240px) / 2 + 28px))',
          paddingBottom: '4px',
          scrollbarWidth: 'none',       /* Firefox */
          msOverflowStyle: 'none',      /* IE */
        }}
      >
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.step}
            data-card
            style={{
              /* Card is always 280px wide — guarantees overflow on all screens */
              flex: '0 0 280px',
              width: '280px',
              scrollSnapAlign: 'start',
              background: '#ffffff',
              borderRadius: '20px',
              padding: '28px 24px 32px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.22), 4px 4px 0 rgba(0,0,0,0.1)',
              border: '2px solid rgba(200,215,255,0.6)',
              minHeight: '220px',
            }}
          >
            {/* Yellow STEP pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'var(--yellow)',
              color: '#0c1a4e',
              fontWeight: 800,
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              padding: '5px 14px',
              borderRadius: '100px',
              marginBottom: '18px',
            }}>
              STEP {step.step}
            </div>

            {/* Bold blue title */}
            <h3
              className="font-display font-black uppercase"
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.18,
                color: 'var(--blue)',
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p style={{ fontSize: '0.83rem', lineHeight: 1.65, color: 'rgba(12,26,78,0.58)' }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* ─── Dot + line navigation ────────────────────── */}
      <div
        className="container"
        style={{ marginTop: '28px', display: 'flex', alignItems: 'center' }}
      >
        {/* Left line */}
        <div style={{ flex: 1, height: '1.5px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />

        {PROCESS_STEPS.map((step, i) => (
          <button
            key={step.step}
            onClick={() => scrollTo(i)}
            aria-label={`Go to step ${step.step}`}
            style={{
              width:      i === active ? '14px' : '10px',
              height:     i === active ? '14px' : '10px',
              borderRadius: '50%',
              background: i === active ? 'var(--yellow)' : 'rgba(255,255,255,0.38)',
              border:     i === active ? '2px solid rgba(255,255,255,0.55)' : '2px solid transparent',
              cursor:     'pointer',
              transition: 'all 0.25s ease',
              margin:     '0 10px',
              padding:    0,
              flexShrink: 0,
            }}
          />
        ))}

        {/* Right line */}
        <div style={{ flex: 1, height: '1.5px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
      </div>

    </section>
  )
}