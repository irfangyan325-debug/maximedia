'use client'

import { useState, useEffect, useCallback } from 'react'

const PLATFORMS = [
  { name:'TikTok',    emoji:'🎵', floatEmoji:'🎵', color:'#010101', desc:"We embrace trends, jump on challenges, and create authentic, native-feeling video content tailored to your niche. From creative concepts to influencer collaborations, we make sure your brand gets noticed in TikTok's fast-moving feed." },
  { name:'Facebook',  emoji:'📘', floatEmoji:'📘', color:'#1877f2', desc:'Our team builds community-driven strategies with a mix of organic content, boosted posts, and paid campaigns. We prioritize shareable content, meaningful conversations, and audience insights to keep your brand top-of-mind.' },
  { name:'Instagram', emoji:'📸', floatEmoji:'📸', color:'#e1306c', desc:'We craft scroll-stopping visuals, Stories, and Reels designed to engage your audience and drive interaction. From branded campaigns to influencer partnerships and interactive content, we optimize every post for reach and relevance.' },
  { name:'YouTube',   emoji:'▶️', floatEmoji:'▶️', color:'#ff0000', desc:'We develop long-form and short-form video strategies built for discovery and audience retention. From branded series to campaign launches and educational content, our team handles concepting, production, and optimization to grow subscribers and views.' },
  { name:'LinkedIn',  emoji:'💼', floatEmoji:'💼', color:'#0a66c2', desc:'For B2B audiences and professional storytelling, we focus on thought leadership, industry insights, and brand credibility. Our strategy balances promotional content with value-driven posts that grow your network and spark conversation.' },
  { name:'Pinterest', emoji:'📌', floatEmoji:'📌', color:'#e60023', desc:"Our approach turns inspiration into action — creating visually driven pins and boards that align with your brand's aesthetic and audience interests. We optimize for both organic discovery and paid campaigns." },
  { name:'X',         emoji:'𝕏',  floatEmoji:'𝕏',  color:'#000000', desc:"We keep your brand in the conversation with timely, relevant posts, community engagement, and real-time trend participation. Whether it's witty banter, live event coverage, or customer support, we keep your brand visible and responsive." },
]

export default function MgmtPlatforms() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive(a => (a + 1) % PLATFORMS.length), [])
  const prev = () => setActive(a => (a - 1 + PLATFORMS.length) % PLATFORMS.length)

  // Auto-slide every 3.5s
  useEffect(() => {
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [next])

  const p = PLATFORMS[active]

  return (
    <>
      <style>{`
        .mpl-section {
          background: #fef9e7;
          padding: clamp(64px,9vw,100px) 0;
          position: relative;
          overflow: hidden;
        }
        /* white wave top */
        .mpl-wave-top {
          position: absolute;
          top: -2px; left: 0; right: 0;
          line-height: 0;
          pointer-events: none;
        }

        .mpl-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px,6vw,80px);
          align-items: center;
        }

        /* Yellow platform card */
        .mpl-card {
          background: var(--yellow);
          border-radius: clamp(18px,3vw,26px);
          padding: clamp(28px,4vw,44px);
          position: relative;
          overflow: hidden;
          min-height: clamp(280px,36vw,320px);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
        }

        /* Floating emoji decorations */
        .mpl-float-top {
          position: absolute;
          top: clamp(12px,2vw,20px);
          right: clamp(12px,2vw,24px);
          font-size: clamp(2.8rem,5vw,4.2rem);
          filter: drop-shadow(0 6px 16px rgba(0,0,0,0.2));
          line-height: 1;
        }
        .mpl-float-bottom {
          position: absolute;
          bottom: clamp(12px,2vw,20px);
          left: clamp(12px,2vw,24px);
          font-size: clamp(2.2rem,4vw,3.2rem);
          filter: drop-shadow(0 6px 16px rgba(0,0,0,0.2));
          line-height: 1;
        }

        .mpl-platform-name {
          font-size: clamp(1.8rem,4vw,3rem);
          line-height: 1.0;
          color: #0c1a4e;
          letter-spacing: -0.02em;
          margin-bottom: clamp(12px,2vw,18px);
          position: relative;
          z-index: 1;
        }
        .mpl-platform-desc {
          font-size: clamp(0.85rem,1.4vw,0.98rem);
          color: rgba(12,26,78,0.75);
          line-height: 1.78;
          position: relative;
          z-index: 1;
        }

        /* Right side */
        .mpl-right-heading {
          font-size: clamp(1.8rem,4vw,3.2rem);
          line-height: 1.05;
          color: #0c1a4e;
          letter-spacing: -0.02em;
          margin-bottom: clamp(16px,2.5vw,24px);
        }
        .mpl-right-desc {
          font-size: clamp(0.9rem,1.5vw,1.02rem);
          color: rgba(12,26,78,0.7);
          line-height: 1.8;
          margin-bottom: clamp(10px,1.5vw,14px);
        }
        .mpl-right-hint {
          font-size: clamp(0.78rem,1.2vw,0.88rem);
          color: rgba(12,26,78,0.45);
          line-height: 1.65;
        }

        /* Arrow buttons — dark square, below card */
        .mpl-arrows {
          display: flex;
          gap: 12px;
          margin-top: clamp(20px,3vw,28px);
        }
        .mpl-arrow {
          width: clamp(44px,6vw,56px);
          height: clamp(44px,6vw,56px);
          border-radius: 10px;
          background: #0c1a4e;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(0.9rem,1.5vw,1.1rem);
          font-weight: 900;
          color: var(--yellow);
          cursor: pointer;
          transition: background 0.15s ease, transform 0.15s ease;
          flex-shrink: 0;
        }
        .mpl-arrow:hover { background: var(--blue); transform: scale(1.05); }

        /* Dot indicators */
        .mpl-dots {
          display: flex;
          gap: 8px;
          margin-top: clamp(14px,2vw,20px);
          align-items: center;
        }
        .mpl-dot {
          height: 8px;
          border-radius: 4px;
          background: rgba(12,26,78,0.2);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
          width: 8px;
        }
        .mpl-dot-active {
          background: #0c1a4e;
          width: 24px;
        }

        @media (max-width: 768px) {
          .mpl-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>

      <section className="mpl-section">
        {/* White wave top */}
        <div className="mpl-wave-top">
          <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }} preserveAspectRatio="none">
            <path d="M0,0 C360,48 1080,0 1440,32 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>

        <div className="container">
          <div className="mpl-grid">

            <div>
              <div className="mpl-card">
                <div className="mpl-float-top">{p.floatEmoji}</div>
                <div className="mpl-float-bottom">{p.floatEmoji}</div>

                <h3 className="font-display font-black uppercase mpl-platform-name">
                  {p.name}
                </h3>
                <p className="mpl-platform-desc">{p.desc}</p>
              </div>

              {/* Arrows + dots below card */}
              <div className="mpl-arrows">
                <button className="mpl-arrow" onClick={prev} aria-label="Previous platform">←</button>
                <button className="mpl-arrow" onClick={next} aria-label="Next platform">→</button>
              </div>
              <div className="mpl-dots">
                {PLATFORMS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`mpl-dot${i === active ? ' mpl-dot-active' : ''}`}
                    aria-label={`Platform ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right — static heading + description */}
            <div>
              <h2 className="font-display font-black uppercase mpl-right-heading">
                ACHIEVE SUCCESS ACROSS EVERY SOCIAL PLATFORM
              </h2>
              <p className="mpl-right-desc">
                Our team brings the skills, strategy, and creative firepower your brand needs to thrive
                across every major social platform. We understand the unique opportunities, audiences,
                and content styles that work best on each, and we tailor your strategy to match.
              </p>
              <p className="mpl-right-hint">
                Click the arrows below for an up-close look at how we show up for your brand, platform by platform:
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}