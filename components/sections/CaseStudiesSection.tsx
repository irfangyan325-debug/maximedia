'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/data'

// Vivid image-like gradient backgrounds per client (light/photo feel)
const CARD_VISUALS: Record<string, { bg: string; textOnBg: string }> = {
  'Angi':          { bg: 'linear-gradient(145deg, #e8f4f8, #b3d4e8)', textOnBg: '#1a3f6e' },
  'Angostura':     { bg: 'linear-gradient(145deg, #fef9ec, #f5e6c0)', textOnBg: '#7a4a10' },
  'Bear Paw':      { bg: 'linear-gradient(145deg, #f0ebe3, #d6c9b5)', textOnBg: '#5a3a1a' },
  'Carnival':      { bg: 'linear-gradient(145deg, #daeeff, #a8d4f5)', textOnBg: '#0d2a5e' },
  'Mellow':        { bg: 'linear-gradient(145deg, #fdf3e8, #f5d9b0)', textOnBg: '#7a4a10' },
  'Cell Coverage': { bg: 'linear-gradient(145deg, #eef2fc, #c8d5f0)', textOnBg: '#1a3070' },
  'Conexpo':       { bg: 'linear-gradient(145deg, #e8f0e8, #c0d4b8)', textOnBg: '#1a3a1a' },
  'First Trade':   { bg: 'linear-gradient(145deg, #fdeced, #f5c0c4)', textOnBg: '#6a1a20' },
}

export default function CaseStudiesSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive]   = useState(2)
  const [canPrev, setCanPrev] = useState(true)
  const [canNext, setCanNext] = useState(true)

  const CARD_W = 300
  const GAP    = 16

  const scrollToIdx = useCallback((idx: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(idx, CASE_STUDIES.length - 1))
    const offset = clamped * (CARD_W + GAP) - (track.clientWidth / 2 - CARD_W / 2)
    track.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' })
    setActive(clamped)
    setCanPrev(clamped > 0)
    setCanNext(clamped < CASE_STUDIES.length - 1)
  }, [])

  useEffect(() => { scrollToIdx(2) }, [scrollToIdx])

  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const idx = Math.round((track.scrollLeft + track.clientWidth / 2 - CARD_W / 2) / (CARD_W + GAP))
    const clamped = Math.max(0, Math.min(idx, CASE_STUDIES.length - 1))
    setActive(clamped)
    setCanPrev(clamped > 0)
    setCanNext(clamped < CASE_STUDIES.length - 1)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <section style={{ background: '#c9e8f5', overflow: 'hidden', paddingBottom: '80px' }}>

      {/* ── Header ──────────────────────────────────────── */}
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={{ maxWidth: '780px' }}>
          <h2
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              lineHeight: 1.1,
              color: 'var(--blue)',
              marginBottom: '28px',
              letterSpacing: '-0.01em',
            }}
          >
            REAL RESULTS: SEE HOW WE DRIVE GROWTH FOR<br />
            BRANDS LIKE YOURS
          </h2>

          {/* Outline "EXPLORE MORE CASE STUDIES" button */}
          <Link
            href="/work"
            className="font-display font-black uppercase"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              background: 'transparent',
              color: 'var(--blue)',
              border: '2px solid var(--blue)',
              borderRadius: '10px',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--blue)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--blue)'
            }}
          >
            EXPLORE MORE CASE STUDIES
          </Link>
        </div>
      </div>

      {/* ── Slider track ────────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: `${GAP}px`,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            paddingLeft:  'max(28px, calc((100vw - 1240px) / 2 + 28px))',
            paddingRight: 'max(28px, calc((100vw - 1240px) / 2 + 28px))',
            paddingTop: '10px',
            paddingBottom: '10px',
            alignItems: 'flex-end',
          }}
        >
          {CASE_STUDIES.map((cs, i) => {
            const isActive = i === active
            const vis = CARD_VISUALS[cs.client] ?? { bg: 'linear-gradient(145deg,#daeeff,#a8d4f5)', textOnBg: '#0d2a5e' }

            return (
              <div
                key={cs.slug}
                onClick={() => !isActive && scrollToIdx(i)}
                style={{
                  flex:         `0 0 ${CARD_W}px`,
                  width:        `${CARD_W}px`,
                  scrollSnapAlign: 'center',
                  cursor:       isActive ? 'default' : 'pointer',
                  transition:   'transform 0.35s ease, opacity 0.35s ease, box-shadow 0.35s ease',
                  transform:    isActive ? 'scale(1) translateY(0)' : 'scale(0.93) translateY(8px)',
                  opacity:      isActive ? 1 : 0.72,
                  borderRadius: '16px',
                  overflow:     'hidden',
                  background:   '#fff',
                  border:       isActive ? '2px solid rgba(26,86,219,0.35)' : '2px solid transparent',
                  boxShadow:    isActive
                    ? '0 16px 50px rgba(26,86,219,0.18)'
                    : '0 4px 16px rgba(0,0,0,0.08)',
                }}
              >
                {/* Image area */}
                <div style={{
                  height: '280px',
                  background: vis.bg,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  {/* Big emoji as content */}
                  <span style={{
                    fontSize: '5.5rem',
                    filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))',
                  }}>
                    {cs.emoji}
                  </span>

                  {/* Client tag badge top-left */}
                  <div style={{
                    position: 'absolute',
                    top: '10px', left: '10px',
                    background: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    color: vis.textOnBg,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase' as const,
                    border: '1px solid rgba(255,255,255,0.6)',
                  }}>
                    {cs.client}
                  </div>

                  {/* Tags bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap' as const,
                  }}>
                    {cs.tags.slice(0, 2).map((tag) => (
                      <span key={tag} style={{
                        background: 'rgba(255,255,255,0.75)',
                        backdropFilter: 'blur(4px)',
                        borderRadius: '100px',
                        padding: '3px 10px',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        color: vis.textOnBg,
                        letterSpacing: '0.04em',
                        border: '1px solid rgba(255,255,255,0.5)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Text area — only visible on active card */}
                <div style={{
                  padding: '18px 18px 20px',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  minHeight: '90px',
                }}>
                  <h3
                    className="font-display font-black uppercase"
                    style={{
                      fontSize: '1rem',
                      color: 'var(--blue)',
                      marginBottom: '8px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {cs.client}
                  </h3>
                  <p style={{
                    fontSize: '0.84rem',
                    color: 'rgba(12,26,78,0.62)',
                    lineHeight: 1.6,
                  }}>
                    {cs.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ← Prev arrow */}
        <button
          onClick={() => scrollToIdx(active - 1)}
          disabled={!canPrev}
          aria-label="Previous"
          style={{
            position: 'absolute',
            bottom: '44px',
            left: '50%',
            transform: 'translateX(calc(-50% - 60px))',
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: canPrev ? 'var(--yellow)' : 'rgba(255,255,255,0.5)',
            border: 'none',
            cursor: canPrev ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '1.1rem',
            color: '#0c1a4e',
            boxShadow: canPrev ? '0 4px 16px rgba(245,197,24,0.4)' : 'none',
            transition: 'all 0.2s',
            zIndex: 10,
          }}
        >
          ←
        </button>

        {/* → Next arrow */}
        <button
          onClick={() => scrollToIdx(active + 1)}
          disabled={!canNext}
          aria-label="Next"
          style={{
            position: 'absolute',
            bottom: '44px',
            left: '50%',
            transform: 'translateX(calc(-50% + 60px))',
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: canNext ? 'var(--yellow)' : 'rgba(255,255,255,0.5)',
            border: 'none',
            cursor: canNext ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '1.1rem',
            color: '#0c1a4e',
            boxShadow: canNext ? '0 4px 16px rgba(245,197,24,0.4)' : 'none',
            transition: 'all 0.2s',
            zIndex: 10,
          }}
        >
          →
        </button>

      </div>

    </section>
  )
}