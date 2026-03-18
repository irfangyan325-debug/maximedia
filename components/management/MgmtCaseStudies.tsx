'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Replace image paths with your actual case study photos in /public/images/case-studies/
const CASES = [
  { client:'Angi',          slug:'angi',          logo:'Angi',          desc:'Reached homeowners by producing helpful TikTok content starring vetted pros.',                                      image:'/images/case-studies/angi.jpg' },
  { client:'Angostura',     slug:'angostura',     logo:'ANGOSTURA',     desc:'Recipe for success? Global strategy, thumb-stopping content, unparalleled results. Shaken, not stirred.',           image:'/images/case-studies/angostura.jpg' },
  { client:'Bear Paw',      slug:'bear-paw',      logo:'BEARPAW 🐾',    desc:'It comes down to expert promotion advertising and targeting: the secret to minimum ad spend and maximum results.',  image:'/images/case-studies/bear-paw.jpg' },
  { client:'Gift Card Shop', slug:'gift-card-shop', logo:'Gift Card Shop', desc:'1,500%+ increase in organic leads. The perfect gift? A significant increase in social media followers.',         image:'/images/case-studies/gift-card-shop.jpg' },
  { client:'Mellow',        slug:'mellow',        logo:'Mellow',        desc:'Developed a paid ad strategy featuring eye-catching visuals and precise audience targeting.',                        image:'/images/case-studies/mellow.jpg' },
]

const CARD_W = 300
const GAP    = 16

export default function MgmtCaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive]   = useState(2)
  const [canPrev, setCanPrev] = useState(true)
  const [canNext, setCanNext] = useState(true)

  const scrollToIdx = useCallback((idx: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(idx, CASES.length - 1))
    const offset  = clamped * (CARD_W + GAP) - (track.clientWidth / 2 - CARD_W / 2)
    track.scrollTo({ left: Math.max(0, offset), behavior:'smooth' })
    setActive(clamped)
    setCanPrev(clamped > 0)
    setCanNext(clamped < CASES.length - 1)
  }, [])

  useEffect(() => { scrollToIdx(2) }, [scrollToIdx])

  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const idx     = Math.round((track.scrollLeft + track.clientWidth / 2 - CARD_W / 2) / (CARD_W + GAP))
    const clamped = Math.max(0, Math.min(idx, CASES.length - 1))
    setActive(clamped)
    setCanPrev(clamped > 0)
    setCanNext(clamped < CASES.length - 1)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', onScroll, { passive:true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <>
      <style>{`
        .mcs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: clamp(24px,4vw,40px);
          padding: 0 max(28px, calc((100vw - 1240px) / 2 + 28px));
        }
        .mcs-title {
          font-size: clamp(1.8rem,4vw,3rem);
          line-height: 1.0;
          color: var(--yellow);
          font-style: italic;
          letter-spacing: -0.01em;
        }
        .mcs-see-more {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: #0c1a4e;
          color: var(--yellow);
          border-radius: 8px;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-decoration: none;
          border: none;
          transition: background 0.15s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .mcs-see-more:hover { background: var(--blue); }

        /* Track */
        .mcs-track {
          display: flex;
          gap: ${GAP}px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding-left:  max(28px, calc((100vw - 1240px) / 2 + 28px));
          padding-right: max(28px, calc((100vw - 1240px) / 2 + 28px));
          padding-top: 12px;
          padding-bottom: 12px;
          align-items: flex-end;
        }
        .mcs-track::-webkit-scrollbar { display: none; }

        /* Card */
        .mcs-card {
          flex: 0 0 ${CARD_W}px;
          width: ${CARD_W}px;
          scroll-snap-align: center;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          transition: all 0.35s ease;
          background: #fff;
          cursor: pointer;
        }
        .mcs-card-inactive {
          transform: scale(0.93) translateY(8px);
          opacity: 0.78;
          border: 2px solid transparent;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }
        .mcs-card-active {
          transform: scale(1) translateY(0);
          opacity: 1;
          border: 2px solid var(--yellow);
          box-shadow: 0 20px 56px rgba(0,0,0,0.14);
          cursor: default;
        }

        /* Photo area */
        .mcs-photo {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          background: #e8e0d8;
        }

        /* Active card: logo bar on top */
        .mcs-logo-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          background: rgba(255,255,255,0.96);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          border-bottom: 1px solid rgba(245,197,24,0.2);
        }
        .mcs-logo-text {
          font-size: 0.85rem;
          font-weight: 900;
          color: #0c1a4e;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* Active card bottom text */
        .mcs-info {
          padding: 16px 18px 20px;
          background: #fff;
        }
        .mcs-client-name {
          font-size: 1rem;
          color: var(--blue);
          font-style: italic;
          letter-spacing: 0.02em;
          margin-bottom: 6px;
        }
        .mcs-client-desc {
          font-size: 0.82rem;
          color: rgba(12,26,78,0.62);
          line-height: 1.6;
        }

        /* Yellow square arrows — below slider, centered */
        .mcs-arrows {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: clamp(16px,3vw,28px);
        }
        .mcs-arrow {
          width: clamp(44px,5vw,54px);
          height: clamp(44px,5vw,54px);
          border-radius: 10px;
          background: var(--yellow);
          border: 2px solid #0c1a4e;
          box-shadow: 0 4px 0 #0c1a4e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 900;
          color: #0c1a4e;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .mcs-arrow:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 0 #0c1a4e; }
        .mcs-arrow:disabled { opacity: 0.3; cursor: default; box-shadow: 0 2px 0 #0c1a4e; }
      `}</style>

      <section style={{ background:'#ffffff', padding:'clamp(64px,9vw,100px) 0', overflow:'hidden' }}>

        {/* Header */}
        <div className="mcs-header">
          <h2 className="font-display font-black uppercase mcs-title">CASE STUDIES</h2>
          <Link href="/work" className="font-display font-black uppercase mcs-see-more">SEE MORE</Link>
        </div>

        {/* Slider track */}
        <div ref={trackRef} className="mcs-track">
          {CASES.map((c, i) => {
            const isActive = i === active
            return (
              <div
                key={c.slug}
                onClick={() => !isActive && scrollToIdx(i)}
                className={`mcs-card ${isActive ? 'mcs-card-active' : 'mcs-card-inactive'}`}
              >
                {/* Photo */}
                <div className="mcs-photo">
                  {/* Active: logo bar on top */}
                  {isActive && (
                    <div className="mcs-logo-bar">
                      <span className="mcs-logo-text">{c.logo}</span>
                    </div>
                  )}
                  <Image
                    src={c.image}
                    alt={c.client}
                    fill
                    style={{
                      objectFit:'cover',
                      objectPosition:'center',
                      transition:'transform 0.4s ease',
                      transform: isActive ? 'scale(1)' : 'scale(1.06)',
                    }}
                    sizes="300px"
                  />
                  {/* Dark gradient bottom */}
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)', pointerEvents:'none' }} />
                </div>

                {/* Active: client name + description below photo */}
                {isActive && (
                  <div className="mcs-info">
                    <h3 className="font-display font-black uppercase mcs-client-name">{c.client}</h3>
                    <p className="mcs-client-desc">{c.desc}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Yellow arrows */}
        <div className="mcs-arrows">
          <button className="mcs-arrow" onClick={() => scrollToIdx(active - 1)} disabled={!canPrev} aria-label="Previous">←</button>
          <button className="mcs-arrow" onClick={() => scrollToIdx(active + 1)} disabled={!canNext} aria-label="Next">→</button>
        </div>

      </section>
    </>
  )
}