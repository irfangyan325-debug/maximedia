'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/data'

const CARD_COLORS = [
  { from: '#1a3fcc', to: '#0d2a9e' },
  { from: '#1565c0', to: '#0d47a1' },
  { from: '#1a56db', to: '#1341b5' },
  { from: '#1976d2', to: '#1565c0' },
  { from: '#1e40af', to: '#1e3a8a' },
]

export default function BlogPreviewSection() {
  const trackRef   = useRef<HTMLDivElement>(null)
  const [active, setActive]   = useState(2)
  const [canPrev, setCanPrev] = useState(true)
  const [canNext, setCanNext] = useState(true)

  const CARD_W   = 320
  const CARD_GAP = 0
  const CENTER_W = 340

  const scrollToIdx = useCallback((idx: number) => {
    const track = trackRef.current
    if (!track) return
    const targetScroll = idx * CARD_W - (track.clientWidth / 2 - CARD_W / 2)
    track.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' })
    setActive(idx)
  }, [])

  // Initial center
  useEffect(() => { scrollToIdx(2) }, [scrollToIdx])

  const prev = () => { const n = Math.max(active - 1, 0);            scrollToIdx(n); }
  const next = () => { const n = Math.min(active + 1, BLOG_POSTS.length - 1); scrollToIdx(n); }

  // Sync active on scroll
  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const idx = Math.round((track.scrollLeft + track.clientWidth / 2 - CARD_W / 2) / CARD_W)
    const clamped = Math.max(0, Math.min(idx, BLOG_POSTS.length - 1))
    setActive(clamped)
    setCanPrev(clamped > 0)
    setCanNext(clamped < BLOG_POSTS.length - 1)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <section style={{ background: '#ffffff', padding: '90px 0 100px', overflow: 'hidden' }}>

      <div
        className="container"
        style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}
      >
        <div>
          <h2
            className="font-display font-black uppercase"
            style={{ fontSize: 'clamp(3.6rem, 3.5vw, 4.4rem)', lineHeight: 1.1, color: 'var(--blue)', marginBottom: '8px' }}
          >
            EXPLORE OUR SOCIAL MEDIA<br />
            INSIGHTS &amp; RESOURCES
          </h2>
          <p
            className="font-display font-black uppercase"
            style={{ fontSize: '1.78rem', letterSpacing: '0.1em', color: 'var(--yellow)' }}
          >
            FROM THE MAXIMEDIA BLOG
          </p>
        </div>

        {/* Dark "SEE MORE" pill button */}
        <Link
          href="/blog"
          className="font-display font-black uppercase"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '12px 22px',
            background: '#0c1a4e',
            color: '#fff',
            borderRadius: '8px',
            fontSize: '0.78rem',
            letterSpacing: '0.1em',
            textDecoration: 'none',
            transition: 'background 0.2s',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#0c1a4e')}
        >
          SEE MORE
        </Link>
      </div>

      {/* ── Slider track ────────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            paddingLeft:  'max(28px, calc((100vw - 1240px) / 2 + 28px))',
            paddingRight: 'max(28px, calc((100vw - 1240px) / 2 + 28px))',
            gap: '16px',
            alignItems: 'center',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          {BLOG_POSTS.map((post, i) => {
            const isActive = i === active
            const colors   = CARD_COLORS[i % CARD_COLORS.length]

            return (
              <div
                key={post.slug}
                onClick={() => scrollToIdx(i)}
                style={{
                  flex:          `0 0 ${isActive ? '340px' : '300px'}`,
                  width:         isActive ? '340px' : '300px',
                  scrollSnapAlign: 'center',
                  cursor:        isActive ? 'default' : 'pointer',
                  transition:    'all 0.35s ease',
                  transform:     isActive ? 'scale(1)' : 'scale(0.93)',
                  opacity:       isActive ? 1 : 0.75,
                  borderRadius:  '16px',
                  overflow:      'hidden',
                  boxShadow:     isActive
                    ? '0 20px 60px rgba(26,86,219,0.22)'
                    : '0 4px 20px rgba(26,86,219,0.08)',
                  border:        isActive ? '2px solid rgba(26,86,219,0.3)' : '2px solid transparent',
                  background:    '#fff',
                }}
              >
                {/* Image area — vivid blue with emoji */}
                <div style={{
                  height: '260px',
                  background: `linear-gradient(145deg, ${colors.from}, ${colors.to})`,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  {/* Decorative dots top-right */}
                  <div style={{
                    position: 'absolute', top: '12px', right: '14px',
                    display: 'grid', gridTemplateColumns: 'repeat(4,6px)', gap: '4px',
                  }}>
                    {Array.from({ length: 12 }).map((_, d) => (
                      <div key={d} style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)' }} />
                    ))}
                  </div>

                  {/* Three-dot menu (active card only) */}
                  {isActive && (
                    <div style={{ position: 'absolute', top: '14px', right: '14px', color: '#fff', fontSize: '1.2rem', letterSpacing: '2px' }}>···</div>
                  )}

                  {/* Big emoji */}
                  <span style={{ fontSize: '5.5rem', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))' }}>
                    {post.emoji}
                  </span>

                  {/* Instagram-style bar (active only) */}
                  {isActive && (
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      background: 'rgba(255,255,255,0.97)',
                      padding: '10px 14px 8px',
                      borderTop: '1px solid rgba(26,86,219,0.1)',
                    }}>
                      {/* Icons row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <div style={{ display: 'flex', gap: '12px' }}>
                          {['❤️', '💬', '✈️'].map((ic) => (
                            <span key={ic} style={{ fontSize: '1.1rem', cursor: 'pointer' }}>{ic}</span>
                          ))}
                        </div>
                        <span style={{ fontSize: '1.1rem', cursor: 'pointer' }}>🔖</span>
                      </div>
                      <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0c1a4e', margin: '0 0 2px' }}>100k views</p>
                      <p style={{ fontSize: '0.7rem', color: 'rgba(12,26,78,0.5)', margin: 0 }}>View all 1,205 comments</p>
                      <p style={{ fontSize: '0.65rem', color: 'rgba(12,26,78,0.35)', margin: 0 }}>1 day ago</p>
                    </div>
                  )}
                </div>

                {/* Text area */}
                <div style={{ padding: '16px 18px 20px', background: '#fff' }}>
                  <h3
                    className="font-display font-black uppercase"
                    style={{
                      fontSize: '0.78rem',
                      letterSpacing: '0.04em',
                      lineHeight: 1.4,
                      color: 'var(--blue)',
                      marginBottom: '8px',
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(12,26,78,0.58)', lineHeight: 1.55 }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ← Prev arrow (overlaid on left of center) */}
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(calc(-50% - 190px))',
            bottom: '118px',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: canPrev ? 'var(--yellow)' : 'rgba(255,255,255,0.6)',
            border: 'none',
            cursor: canPrev ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '1rem',
            color: '#0c1a4e',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            transition: 'all 0.2s',
            zIndex: 10,
          }}
        >
          ←
        </button>

        {/* → Next arrow */}
        <button
          onClick={next}
          disabled={!canNext}
          aria-label="Next"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(calc(-50% + 190px))',
            bottom: '118px',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: canNext ? 'var(--yellow)' : 'rgba(255,255,255,0.6)',
            border: 'none',
            cursor: canNext ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '1rem',
            color: '#0c1a4e',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
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