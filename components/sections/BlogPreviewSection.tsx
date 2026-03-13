'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BLOG_POSTS } from '@/lib/data'

// ── Replace with your actual blog post cover images in /public/images/blog/ ──
const BLOG_IMAGES: Record<string, string> = {
  'canva-alternatives':              '/images/blog/canva-alternatives.jpg',
  'facebook-instant-experience-ads': '/images/blog/facebook-instant-experience-ads.jpg',
  'topics-to-attract-students':      '/images/blog/topics-to-attract-students.jpg',
  'social-media-marketing-for-gyms': '/images/blog/social-media-marketing-for-gyms.jpg',
  'instagram-interactive-stories-ads':'/images/blog/instagram-interactive-stories-ads.jpg',
}

export default function BlogPreviewSection() {
  const trackRef   = useRef<HTMLDivElement>(null)
  const [active, setActive]   = useState(2)
  const [canPrev, setCanPrev] = useState(true)
  const [canNext, setCanNext] = useState(true)

  const CARD_W = 320

  const scrollToIdx = useCallback((idx: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: Math.max(0, idx * CARD_W - (track.clientWidth / 2 - CARD_W / 2)), behavior: 'smooth' })
    setActive(idx)
  }, [])

  useEffect(() => { scrollToIdx(2) }, [scrollToIdx])

  const prev = () => scrollToIdx(Math.max(active - 1, 0))
  const next = () => scrollToIdx(Math.min(active + 1, BLOG_POSTS.length - 1))

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

      <div className="container" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <div>
          <h2 className="font-display font-black uppercase" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', lineHeight: 1.1, color: 'var(--blue)', marginBottom: '8px' }}>
            EXPLORE OUR SOCIAL MEDIA<br />INSIGHTS &amp; RESOURCES
          </h2>
          <p className="font-display font-black uppercase" style={{ fontSize: 'clamp(0.9rem,1.8vw,1.1rem)', letterSpacing: '0.1em', color: 'var(--yellow)' }}>
            FROM THE MAXIMEDIA BLOG
          </p>
        </div>

        <Link href="/blog" className="font-display font-black uppercase" style={{
          display: 'inline-flex', alignItems: 'center',
          padding: '12px 22px', background: '#0c1a4e', color: '#fff',
          borderRadius: '8px', fontSize: '0.78rem', letterSpacing: '0.1em',
          textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--blue)'}
          onMouseLeave={e => e.currentTarget.style.background = '#0c1a4e'}
        >
          SEE MORE
        </Link>
      </div>

      {/* Slider */}
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
            const imgSrc   = BLOG_IMAGES[post.slug] ?? '/images/blog/default.jpg'

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
                  /* Matching card style */
                  border:        isActive ? '2px solid #b8dff0' : '2px solid rgba(184,223,240,0.4)',
                  boxShadow:     isActive ? '6px 6px 0px #b8dff0, 0 16px 48px rgba(26,86,219,0.15)' : '0 4px 16px rgba(26,86,219,0.08)',
                  background:    '#fff',
                  position:      'relative',
                }}
              >
                {/* ── Full-bleed blog cover image ── */}
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden', background: '#c9e8f5' }}>
                  <Image
                    src={imgSrc}
                    alt={post.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.4s ease',
                      transform: isActive ? 'scale(1)' : 'scale(1.06)',
                    }}
                    sizes="(max-width:640px) 90vw, 340px"
                  />

                  {/* Dark gradient overlay for tag readability */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(0,0,0,0.32) 100%)',
                    pointerEvents: 'none',
                  }} />

                  {/* Tag pill — bottom left of image */}
                  <div style={{
                    position: 'absolute', bottom: '10px', left: '12px',
                    background: 'var(--yellow)',
                    color: '#0c1a4e',
                    fontSize: '0.6rem', fontWeight: 800,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '3px 10px', borderRadius: '100px',
                    border: '1.5px solid #0c1a4e',
                  }}>
                    {post.tag}
                  </div>

                  {/* Read time — bottom right */}
                  <div style={{
                    position: 'absolute', bottom: '10px', right: '12px',
                    background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)',
                    color: '#fff', fontSize: '0.6rem', fontWeight: 700,
                    padding: '3px 8px', borderRadius: '100px',
                  }}>
                    {post.readTime}
                  </div>
                </div>

                {/* ── Blue tab notch (right edge) ── */}
                <div style={{
                  position: 'absolute', top: '50%', right: 0,
                  transform: 'translateY(-50%)',
                  width: '5px', height: '56px',
                  background: 'var(--blue)',
                  borderRadius: '4px 0 0 4px',
                }} />

                {/* Text area */}
                <div style={{ padding: '14px 18px 18px', background: '#fff' }}>
                  {/* Date + author */}
                  <p style={{ fontSize: '0.68rem', color: 'rgba(12,26,78,0.42)', marginBottom: '8px', fontWeight: 600 }}>
                    {post.date} · {post.author ?? 'MAXIMEDIA Team'}
                  </p>

                  <h3 className="font-display font-black uppercase" style={{
                    fontSize: '0.78rem', letterSpacing: '0.03em',
                    lineHeight: 1.4, color: 'var(--blue)', marginBottom: '8px',
                  }}>
                    {post.title}
                  </h3>

                  {isActive && (
                    <p style={{ fontSize: '0.75rem', color: 'rgba(12,26,78,0.58)', lineHeight: 1.55 }}>
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* ← Prev arrow */}
        <button onClick={prev} disabled={!canPrev} aria-label="Previous" style={{
          position: 'absolute', left: '50%',
          transform: 'translateX(calc(-50% - 190px))',
          bottom: '118px', width: '40px', height: '40px',
          borderRadius: '8px',
          background: canPrev ? 'var(--yellow)' : 'rgba(200,220,240,0.6)',
          border: canPrev ? '2px solid #0c1a4e' : '2px solid transparent',
          boxShadow: canPrev ? '0 3px 0 #0c1a4e' : 'none',
          cursor: canPrev ? 'pointer' : 'default',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: '1rem', color: '#0c1a4e',
          transition: 'all 0.2s', zIndex: 10,
        }}>←</button>

        {/* → Next arrow */}
        <button onClick={next} disabled={!canNext} aria-label="Next" style={{
          position: 'absolute', left: '50%',
          transform: 'translateX(calc(-50% + 190px))',
          bottom: '118px', width: '40px', height: '40px',
          borderRadius: '8px',
          background: canNext ? 'var(--yellow)' : 'rgba(200,220,240,0.6)',
          border: canNext ? '2px solid #0c1a4e' : '2px solid transparent',
          boxShadow: canNext ? '0 3px 0 #0c1a4e' : 'none',
          cursor: canNext ? 'pointer' : 'default',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: '1rem', color: '#0c1a4e',
          transition: 'all 0.2s', zIndex: 10,
        }}>→</button>
      </div>

    </section>
  )
}