'use client'

import { useState } from 'react'
import Link from 'next/link'

const VIDEO_TYPES = [
  {
    tab: 'TESTIMONIAL',
    icon: '🗣️',
    title: 'Testimonial Videos',
    desc: 'Real customers, real stories. Testimonial videos are the most trusted form of social proof — and we produce them at scale with genuine talent that resonates with your audience.',
    bullets: ['Authentic storytelling', 'Professional talent direction', 'Multi-format delivery'],
    bg: 'linear-gradient(135deg,#dceeff,#eef6ff)',
  },
  {
    tab: 'PRODUCT DEMO',
    icon: '📦',
    title: 'Product Demo Videos',
    desc: 'Show don\'t tell. Our product demo videos showcase exactly how your product works, addressing objections and driving purchase decisions with clear, compelling visuals.',
    bullets: ['Clear feature walkthrough', 'Objection handling', 'Platform-optimized format'],
    bg: 'linear-gradient(135deg,#fff3d4,#fffbf0)',
  },
  {
    tab: 'HOW TO',
    icon: '📋',
    title: 'How-To & Tutorial Videos',
    desc: 'Educational content that positions your brand as the authority. How-to videos build trust, generate organic reach, and keep your audience coming back for more.',
    bullets: ['Step-by-step clarity', 'Expert positioning', 'High shareability'],
    bg: 'linear-gradient(135deg,#d4f0e8,#f0faf5)',
  },
  {
    tab: 'CREATOR VIDEOS',
    icon: '🌟',
    title: 'Creator-Style Videos',
    desc: 'Native, authentic content that blends seamlessly into feeds. Our creator network produces thumb-stopping videos that feel organic — not like ads — so audiences actually watch.',
    bullets: ['UGC-native style', 'Platform trend-matched', 'High-engagement hooks'],
    bg: 'linear-gradient(135deg,#ffe0ec,#fff5f8)',
  },
]

export default function StudiosVideoTypes() {
  const [active, setActive] = useState(0)
  const current = VIDEO_TYPES[active]

  return (
    <>
      <style>{`
        .vt-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: clamp(24px,4vw,36px);
        }
        .vt-tab-btn {
          padding: clamp(9px,1.2vw,12px) clamp(14px,2vw,22px);
          border-radius: 8px;
          border: 2px solid rgba(26,86,219,0.2);
          background: transparent;
          cursor: pointer;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.68rem,1.1vw,0.78rem);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--blue);
          transition: all 0.18s ease;
          white-space: nowrap;
        }
        .vt-tab-btn.active {
          background: var(--blue);
          border-color: var(--blue);
          color: #fff;
          box-shadow: 0 4px 14px rgba(26,86,219,0.3);
        }
        .vt-tab-btn:hover:not(.active) {
          border-color: var(--blue);
          background: rgba(26,86,219,0.06);
        }
        .vt-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px,4vw,56px);
          align-items: center;
        }
        @media (max-width: 720px) {
          .vt-content-grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>

      <section style={{ background: '#f2f5fc', padding: 'clamp(64px,9vw,104px) 0' }}>
        <div className="container">

          {/* Heading */}
          <div style={{ marginBottom: 'clamp(28px,4vw,44px)' }}>
            <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--yellow)', marginBottom: '8px' }}>
              VIDEO CONTENT
            </p>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.6rem,4vw,2.8rem)', color: 'var(--blue)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>
              LET&apos;S TALK{' '}
              <span style={{ color: 'var(--yellow)', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textDecorationThickness: '4px', textUnderlineOffset: '5px' }}>VIDEO</span>
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="vt-tabs">
            {VIDEO_TYPES.map((v, i) => (
              <button key={v.tab} className={`vt-tab-btn${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
                {v.tab}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="vt-content-grid">
            {/* Left: text */}
            <div>
              <div style={{ fontSize: 'clamp(2.4rem,4vw,3.2rem)', marginBottom: '14px' }}>{current.icon}</div>
              <h3 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', color: 'var(--blue)',
                lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '14px',
              }}>
                {current.title}
              </h3>
              <p style={{ fontSize: 'clamp(0.88rem,1.5vw,0.97rem)', color: 'rgba(12,26,78,0.65)', lineHeight: 1.82, marginBottom: '18px' }}>
                {current.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {current.bullets.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.6rem', color: '#fff', fontWeight: 900, flexShrink: 0,
                    }}>✓</span>
                    <span style={{ fontSize: 'clamp(0.82rem,1.3vw,0.9rem)', color: 'rgba(12,26,78,0.72)', fontWeight: 600 }}>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="font-display font-black uppercase" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: 'clamp(12px,1.8vw,15px) clamp(20px,3vw,32px)',
                background: 'var(--yellow)', color: '#0c1a4e',
                borderRadius: '9px', fontSize: 'clamp(0.72rem,1.2vw,0.8rem)',
                letterSpacing: '0.1em', textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(245,197,24,0.4)',
                border: '2px solid #0c1a4e',
              }}>
                GET STARTED →
              </Link>
            </div>

            {/* Right: visual */}
            <div style={{
              background: current.bg,
              borderRadius: 'clamp(16px,3vw,24px)',
              aspectRatio: '1/1',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 'clamp(4rem,8vw,6rem)',
              border: '1.5px solid rgba(26,86,219,0.1)',
              boxShadow: '0 8px 32px rgba(26,86,219,0.08)',
              transition: 'background 0.3s ease',
            }}>
              <span style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.12))' }}>{current.icon}</span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}