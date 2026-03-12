'use client'

import { useState } from 'react'
import Link from 'next/link'

const ITEMS = [
  {
    title: 'DEDICATED SOCIAL STUDIO',
    desc: 'Our studio produces social content your audience actually WANTS to see. Videos, photos, text, and the sweet spot where they meet — we do it all.',
    icon: '🎯',
  },
  {
    title: 'THE SOCIAL MEDIA AGENCY',
    desc: 'We are a full-service social media agency with deep expertise across every major platform — from Instagram and TikTok to LinkedIn and beyond.',
    icon: '📱',
  },
  {
    title: 'WORLD-CLASS CLIENTS',
    desc: 'We have worked with 500+ global brands including Fortune 500 companies, delivering campaigns that drive real measurable results.',
    icon: '🏆',
  },
  {
    title: 'RESULTS DRIVEN',
    desc: 'Every strategy we build is anchored in your business outcomes. We track, measure, and optimize relentlessly to maximize your ROI.',
    icon: '📈',
  },
  {
    title: 'DIVERSE',
    desc: 'Our team brings unique perspectives from different backgrounds and cultures — giving your brand the edge it needs to connect with any audience.',
    icon: '🌎',
  },
]

export default function WorkWhyChooseUs() {
  const [active, setActive] = useState(0)

  return (
    <>
      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 4vw, 56px);
          align-items: start;
        }
        .why-tab {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(14px,2vw,18px) clamp(18px,2.5vw,24px);
          border-radius: 10px;
          border: 2px solid rgba(26,86,219,0.18);
          background: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
          text-align: left;
          margin-bottom: 10px;
        }
        .why-tab.active {
          background: var(--blue);
          border-color: var(--blue);
          box-shadow: 0 6px 24px rgba(26,86,219,0.28);
        }
        .why-tab:hover:not(.active) {
          border-color: rgba(26,86,219,0.4);
          background: rgba(26,86,219,0.04);
        }
        .why-tab-label {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.75rem, 1.3vw, 0.88rem);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--blue);
          transition: color 0.2s;
        }
        .why-tab.active .why-tab-label { color: #ffffff; }
        .why-tab-arrow {
          width: clamp(30px,4vw,38px);
          height: clamp(30px,4vw,38px);
          border-radius: 8px;
          border: 2px solid rgba(26,86,219,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          color: var(--blue);
          flex-shrink: 0;
          transition: all 0.2s;
          background: transparent;
        }
        .why-tab.active .why-tab-arrow {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.35);
          color: #ffffff;
        }

        /* Tablet */
        @media (max-width: 860px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .why-detail-col { order: -1; }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .why-cta-btn { width: 100%; text-align: center; justify-content: center; }
        }
      `}</style>

      <section style={{
        background: '#c9e8f5',
        padding: 'clamp(56px,8vw,90px) 0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div className="container">

          {/* Heading */}
          <h2 className="font-display font-black uppercase" style={{
            fontSize: 'clamp(1.8rem,5vw,3.2rem)',
            lineHeight: 1.0,
            color: 'var(--blue)',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(28px,4vw,44px)',
          }}>
            WHY CHOOSE US
          </h2>

          <div className="why-grid">

            {/* ── LEFT: Tab list + CTA ── */}
            <div>
              {ITEMS.map((item, i) => (
                <button
                  key={item.title}
                  className={`why-tab${active === i ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="why-tab-label">{item.title}</span>
                  <div className="why-tab-arrow">→</div>
                </button>
              ))}

              {/* Dark CTA button below tabs */}
              <div style={{ marginTop: 'clamp(20px,3vw,32px)' }}>
                <Link
                  href="/contact"
                  className="font-display font-black uppercase why-cta-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: 'clamp(14px,2vw,18px) clamp(22px,3vw,32px)',
                    background: '#0c1a4e',
                    color: 'var(--yellow)',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.7rem,1.3vw,0.8rem)',
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#0c1a4e' }}
                >
                  GET YOUR FREE CUSTOM PROPOSAL
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Detail card ── */}
            <div className="why-detail-col" style={{ position: 'relative' }}>
              {/* Floating 🎯 top-left of card */}
              <div style={{
                position: 'absolute',
                top: 'clamp(-20px,-3vw,-28px)',
                left: 'clamp(20px,4vw,48px)',
                fontSize: 'clamp(2rem,4vw,3rem)',
                filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))',
                zIndex: 2,
                pointerEvents: 'none',
              }}>
                🎯
              </div>

              {/* White detail card */}
              <div style={{
                background: '#ffffff',
                borderRadius: 'clamp(16px,3vw,24px)',
                padding: 'clamp(32px,5vw,56px) clamp(24px,4vw,44px)',
                boxShadow: '0 8px 40px rgba(26,86,219,0.1)',
                minHeight: 'clamp(240px,30vw,340px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'visible',
              }}>
                <h3 className="font-display font-black uppercase" style={{
                  fontSize: 'clamp(1rem,2vw,1.3rem)',
                  color: 'var(--blue)',
                  letterSpacing: '0.01em',
                  marginBottom: 'clamp(12px,2vw,18px)',
                  lineHeight: 1.2,
                }}>
                  {ITEMS[active].title}
                </h3>
                <p style={{
                  fontSize: 'clamp(0.88rem,1.5vw,0.98rem)',
                  color: 'rgba(12,26,78,0.65)',
                  lineHeight: 1.8,
                }}>
                  {ITEMS[active].desc}
                </p>
              </div>

              {/* Floating 🎯 bottom-right of card */}
              <div style={{
                position: 'absolute',
                bottom: 'clamp(-20px,-3vw,-28px)',
                right: 'clamp(8px,2vw,20px)',
                fontSize: 'clamp(2rem,4vw,3rem)',
                filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))',
                zIndex: 2,
                pointerEvents: 'none',
              }}>
                🎯
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}