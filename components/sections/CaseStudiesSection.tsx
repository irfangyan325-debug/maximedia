'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CASE_STUDIES } from '@/lib/data'

const CARD_IMAGES: Record<string, string> = {
  'Angi':          '/images/case-studies/angi.jpg',
  'Angostura':     '/images/case-studies/angostura.jpg',
  'Bear Paw':      '/images/case-studies/bear-paw.jpg',
  'Carnival':      '/images/case-studies/carnival.jpg',
  'Mellow':        '/images/case-studies/mellow.jpg',
  'Cell Coverage': '/images/case-studies/cell-coverage.jpg',
  'Conexpo':       '/images/case-studies/conexpo.jpg',
  'First Trade':   '/images/case-studies/first-trade.jpg',
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
    <section style={{ background: '#e4f5fa', overflow: 'hidden', paddingBottom: '80px' }}>

      <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={{ maxWidth: '980px' }}>
          <h2
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
              lineHeight: 1.1,
              color: 'var(--blue)',
              marginBottom: '28px',
              letterSpacing: '-0.01em',
            }}
          >
            REAL RESULTS: SEE HOW WE DRIVE GROWTH FOR<br />
            BRANDS LIKE YOURS
          </h2>

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
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--blue)' }}
          >
            EXPLORE MORE CASE STUDIES
          </Link>
        </div>
      </div>

      {/* ── Slider ── */}
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
            const imgSrc = CARD_IMAGES[cs.client] ?? '/images/case-studies/default.jpg'

            return (
              <div
                key={cs.slug}
                onClick={() => !isActive && scrollToIdx(i)}
                style={{
                  flex:            `0 0 ${CARD_W}px`,
                  width:           `${CARD_W}px`,
                  scrollSnapAlign: 'center',
                  cursor:          isActive ? 'default' : 'pointer',
                  transition:      'transform 0.35s ease, opacity 0.35s ease, box-shadow 0.35s ease',
                  transform:       isActive ? 'scale(1) translateY(0)' : 'scale(0.93) translateY(8px)',
                  opacity:         isActive ? 1 : 0.82,
                  borderRadius:    '16px',
                  overflow:        'hidden',
                  background:      '#fff',
                  // Active: white border + strong shadow; inactive: subtle shadow
                  border:          isActive ? '2.5px solid #ffffff' : '2px solid rgba(255,255,255,0.35)',
                  boxShadow:       isActive
                    ? '0 20px 56px rgba(26,86,219,0.22), 0 2px 8px rgba(0,0,0,0.12)'
                    : '0 4px 16px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '360px',
                  overflow: 'hidden',
                }}>
                  <Image
                    src={imgSrc}
                    alt={cs.client}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.4s ease',
                      transform: isActive ? 'scale(1)' : 'scale(1.05)',
                    }}
                    sizes="300px"
                  />

                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.12) 100%)',
                    pointerEvents: 'none',
                  }} />

                  {/* Tags bottom of image */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap',
                  }}>
                    {cs.tags.slice(0, 2).map(tag => (
                      <span key={tag} style={{
                        background: 'rgba(255,255,255,0.82)',
                        backdropFilter: 'blur(6px)',
                        borderRadius: '100px',
                        padding: '3px 10px',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        color: '#0c1a4e',
                        letterSpacing: '0.04em',
                        border: '1px solid rgba(255,255,255,0.6)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: '18px 20px 22px',
                  background: '#ffffff',
                  opacity:   isActive ? 1 : 0,
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

        <button
          onClick={() => scrollToIdx(active - 1)}
          disabled={!canPrev}
          aria-label="Previous"
          style={{
            position: 'absolute',
            bottom: '44px',
            left: '50%',
            transform: 'translateX(calc(-50% - 60px))',
            width: '52px', height: '52px',
            borderRadius: '12px',
            background: canPrev ? 'var(--yellow)' : 'rgba(255,255,255,0.5)',
            border: canPrev ? '2px solid #0c1a4e' : '2px solid transparent',
            boxShadow: canPrev ? '0 4px 0 #0c1a4e' : 'none',
            cursor: canPrev ? 'pointer' : 'default',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '1.1rem', color: '#0c1a4e',
            transition: 'all 0.2s',
            zIndex: 10,
          }}
        >
          ←
        </button>

        <button
          onClick={() => scrollToIdx(active + 1)}
          disabled={!canNext}
          aria-label="Next"
          style={{
            position: 'absolute',
            bottom: '44px',
            left: '50%',
            transform: 'translateX(calc(-50% + 60px))',
            width: '52px', height: '52px',
            borderRadius: '12px',
            background: canNext ? 'var(--yellow)' : 'rgba(255,255,255,0.5)',
            border: canNext ? '2px solid #0c1a4e' : '2px solid transparent',
            boxShadow: canNext ? '0 4px 0 #0c1a4e' : 'none',
            cursor: canNext ? 'pointer' : 'default',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '1.1rem', color: '#0c1a4e',
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