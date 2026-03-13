'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const PORTFOLIO_CARDS = [
  { image: '/images/portfolio/dicks-sporting-1.jpg',  label: "Dick's Sporting Goods", accent: '#ff6b35' },
  { image: '/images/portfolio/beef-obradys.jpg',       label: "Beef O'Brady's",         accent: '#f5c518' },
  { image: '/images/portfolio/dicks-sporting-2.jpg',   label: "Dick's Sporting Goods",  accent: '#c0392b' },
  { image: '/images/portfolio/a3c-festival.jpg',       label: 'A3C Festival',            accent: '#f5c518' },
  { image: '/images/portfolio/samsung.jpg',            label: 'Samsung',                 accent: '#f5c518' },
  { image: '/images/portfolio/angi.jpg',               label: 'Angi',                    accent: '#fff'    },
  { image: '/images/portfolio/carnival.jpg',           label: 'Carnival',                accent: '#f5c518' },
  { image: '/images/portfolio/shokz.jpg',              label: 'SHOKZ',                   accent: '#fff'    },
]

const PILL_POINTS = [
  { bold: 'DATA-DRIVEN STRATEGIES', rest: 'TAILORED TO YOUR GOALS'          },
  { bold: 'EXPERT EXECUTION',       rest: 'ACROSS ALL MAJOR PLATFORMS'      },
  { bold: 'TRANSPARENT REPORTING',  rest: 'FOCUSED ON KEY BUSINESS METRICS' },
]

export default function DeliversSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(1)

  const scrollToIdx = useCallback((idx: number) => {
    const track = trackRef.current
    if (!track) return
    const cardW = 420 + 16
    track.scrollTo({ left: Math.max(0, idx * cardW - (track.clientWidth / 2 - 420 / 2)), behavior: 'smooth' })
    setActive(idx)
  }, [])

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % PORTFOLIO_CARDS.length
        const track = trackRef.current
        if (track) {
          const cardW = 420 + 16
          track.scrollTo({ left: Math.max(0, next * cardW - (track.clientWidth / 2 - 420 / 2)), behavior: 'smooth' })
        }
        return next
      })
    }, 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <section style={{ background: 'var(--blue)', paddingBottom: 0, overflow: 'hidden' }}>

      {/* ── Heading + pill points ── */}
      <div style={{ textAlign: 'center', padding: '60px 28px 32px' }}>
        <h2
          className="font-display font-black uppercase"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.9rem)',
            lineHeight: 1.1,
            color: '#ffffff',
            margin: '0 auto 28px',
            letterSpacing: '-0.01em',
          }}
        >
          MAXIMEDIA DELIVERS STRATEGIC SOCIAL<br />MARKETING THAT CONVERTS
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '44px' }}>
          {PILL_POINTS.map((pt) => (
            <div key={pt.bold} style={{ textAlign: 'center', maxWidth: '320px' }}>
              <span style={{ fontWeight: 900, color: 'var(--yellow)', fontSize: '1.0rem', letterSpacing: '0.04em' }}>
                {pt.bold}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.0rem', letterSpacing: '0.04em' }}>
                {' '}{pt.rest}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingLeft:  'max(28px, calc((100vw - 1240px) / 2 + 28px))',
            paddingRight: 'max(28px, calc((100vw - 1240px) / 2 + 28px))',
            alignItems: 'flex-end',
          }}
        >
          {PORTFOLIO_CARDS.map((card, i) => {
            const isActive = i === active
            return (
              <div
                key={i}
                onClick={() => !isActive && scrollToIdx(i)}
                style={{
                  flex:           '0 0 420px',
                  width:          '420px',
                  height:         isActive ? '360px' : '300px',
                  scrollSnapAlign:'center',
                  cursor:         isActive ? 'default' : 'pointer',
                  borderRadius:   '20px 20px 0 0',
                  overflow:       'hidden',
                  background:     '#111',
                  borderTop:      isActive ? '2px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.12)',
                  borderLeft:     isActive ? '2px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.12)',
                  borderRight:    isActive ? '2px solid rgba(255,255,255,0.5)' : '2px solid rgba(255,255,255,0.12)',
                  borderBottom:   'none',
                  transition:     'all 0.4s ease',
                  transform:      isActive ? 'translateY(0)' : 'translateY(20px)',
                  position:       'relative',
                  boxShadow:      isActive ? '0 -12px 40px rgba(0,0,0,0.25)' : 'none',
                  flexShrink:     0,
                }}
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.4s ease',
                    transform: isActive ? 'scale(1)' : 'scale(1.04)',
                  }}
                  sizes="420px"
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Brand label */}
                <div style={{
                  position:   'absolute',
                  bottom:     '14px',
                  left:       '16px',
                  background: 'rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '8px',
                  padding:    '5px 12px',
                  fontSize:   '0.68rem',
                  fontWeight: 800,
                  color:      card.accent,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border:     '1px solid rgba(255,255,255,0.15)',
                }}>
                  {card.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}