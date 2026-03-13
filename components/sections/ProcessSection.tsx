'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { PROCESS_STEPS } from '@/lib/data'

export default function ProcessSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive]   = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const getCardWidth = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const firstCard = track.querySelector<HTMLElement>('[data-card]')
    if (!firstCard) return 0
    return firstCard.offsetWidth + 20
  }, [])

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
    onScroll()
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const scrollTo = (idx: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: getCardWidth() * idx, behavior: 'smooth' })
    setActive(idx)
  }

  return (
    <>
      <style>{`
        .ps-card {
          flex: 0 0 280px;
          width: 280px;
          scroll-snap-align: start;
          background: #ffffff;
          border: 2px solid #b8dff0;
          border-radius: 20px;
          padding: 28px 24px 32px;
          position: relative;
          overflow: hidden;
          min-height: 220px;
          /* Offset shadow matching design system */
          box-shadow: 6px 6px 0px #c9e8f5, 0 8px 32px rgba(0,0,0,0.18);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .ps-card:hover {
          transform: translateY(-4px);
          box-shadow: 6px 10px 0px #b8dff0, 0 16px 40px rgba(0,0,0,0.22);
        }
        /* Blue tab notch on right edge */
        .ps-card::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -2px;
          transform: translateY(-50%);
          width: 6px;
          height: clamp(44px,7vw,72px);
          background: var(--blue);
          border-radius: 4px 0 0 4px;
        }
      `}</style>

      <section style={{ background: 'var(--blue)', padding: '90px 0 72px', overflow: 'hidden' }}>

        {/* Heading + arrows */}
        <div className="container mb-12" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <h2
            className="font-display font-black uppercase"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)', lineHeight: 1.6, color: '#fff', maxWidth: 700 }}
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
            {[
              { fn: () => scrollTo(Math.max(active - 1, 0)),                    enabled: canPrev, label: '←' },
              { fn: () => scrollTo(Math.min(active + 1, PROCESS_STEPS.length - 1)), enabled: canNext, label: '→' },
            ].map(({ fn, enabled, label }) => (
              <button
                key={label}
                onClick={fn}
                aria-label={label === '←' ? 'Previous' : 'Next'}
                style={{
                  width: '48px', height: '48px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.35)',
                  background: enabled ? 'var(--yellow)' : 'rgba(255,255,255,0.1)',
                  color: enabled ? '#0c1a4e' : 'rgba(255,255,255,0.4)',
                  fontSize: '1.1rem', fontWeight: 900,
                  cursor: enabled ? 'pointer' : 'default',
                  transition: 'all 0.2s ease',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingLeft:  'max(28px, calc((100vw - 1240px) / 2 + 28px))',
            paddingRight: 'max(28px, calc((100vw - 1240px) / 2 + 28px))',
            paddingBottom: '8px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} data-card className="ps-card">

              {/* Yellow STEP pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'var(--yellow)',
                color: '#0c1a4e',
                fontWeight: 800,
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '5px 14px',
                borderRadius: '100px',
                marginBottom: '18px',
                border: '2px solid #0c1a4e',
                boxShadow: '0 2px 0 #0c1a4e',
              }}>
                STEP {step.step}
              </div>

              {/* Title */}
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

        <div className="container" style={{ marginTop: '28px', display: 'flex', alignItems: 'center' }}>
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
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                margin: '0 10px',
                padding: 0,
                flexShrink: 0,
              }}
            />
          ))}
          <div style={{ flex: 1, height: '1.5px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
        </div>

      </section>
    </>
  )
}