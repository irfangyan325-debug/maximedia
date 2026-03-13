'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function TeamHero() {
  return (
    <>
      <style>{`
        .ah-section {
          background: var(--blue);
          padding-top: var(--nav-h, 74px);
          overflow: hidden;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        /* Subtle radial glow top-center */
        .ah-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(ellipse 70% 60% at 20% 40%, rgba(245,197,24,0.07) 0%, transparent 55%);
        }

        /* ── 2-col grid ── */
        .ah-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: clamp(32px,5vw,72px);
          align-items: center;
          padding: clamp(48px,8vw,80px) 0;
          width: 100%;
        }

        /* ── LEFT copy ── */
        .ah-heading {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(2.6rem,6.5vw,5.2rem);
          line-height: 1.0;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          margin: 0 0 clamp(6px,1vw,10px);
        }
        .ah-meet   { color: #ffffff; }
        .ah-our-team {
          color: var(--yellow);
          text-decoration: underline;
          text-decoration-color: var(--yellow);
          text-decoration-thickness: clamp(4px,0.9vw,7px);
          text-underline-offset: 8px;
        }

        .ah-body {
          font-size: clamp(0.9rem,1.6vw,1.06rem);
          color: rgba(255,255,255,0.88);
          line-height: 1.78;
          margin-bottom: clamp(20px,3vw,28px);
          max-width: 560px;
        }
        .ah-body p + p { margin-top: 14px; }

        /* Yellow-bordered dark button — matching screenshot */
        .ah-btn {
          display: inline-flex;
          align-items: center;
          padding: clamp(14px,2vw,18px) clamp(24px,3.5vw,40px);
          background: var(--yellow);
          color: #0c1a4e;
          border-radius: 8px;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.7rem,1.3vw,0.82rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 2.5px solid #0c1a4e;
          box-shadow: 0 5px 0 #0c1a4e;
          transition: all 0.15s;
          white-space: nowrap;
        }
        .ah-btn:hover { transform: translateY(-2px); box-shadow: 0 7px 0 #0c1a4e; }

        /* ── RIGHT photo ── */
        .ah-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Photo card with light blue border + rounded corners */
        .ah-photo-card {
          position: relative;
          width: 100%;
          max-width: clamp(340px,52vw,620px);
          aspect-ratio: 4/3;
          border-radius: clamp(18px,3vw,28px);
          overflow: hidden;
          border: 3px solid rgba(180,220,245,0.55);
          box-shadow: 0 0 0 6px rgba(255,255,255,0.08), 0 24px 64px rgba(0,0,0,0.28);
          background: #1a3a6e;
          z-index: 2;
        }

        /* Floating emojis */
        .ah-emoji {
          position: absolute;
          line-height: 1;
          pointer-events: none;
          z-index: 4;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.2));
        }
        .ah-emoji-wave   { top: -10px; left: 50%; transform: translateX(-60px); font-size: clamp(2.4rem,4.5vw,3.8rem); }
        .ah-emoji-hands  { bottom: -14px; left: 50%; transform: translateX(-80px); font-size: clamp(2rem,3.5vw,3rem); }
        .ah-emoji-thumbs { bottom: -10px; right: clamp(-10px,1vw,4px); font-size: clamp(1.8rem,3vw,2.6rem); }

        /* Dot grid — bottom right of the section */
        .ah-dots {
          position: absolute;
          bottom: clamp(12px,3vw,32px);
          right: clamp(12px,3vw,32px);
          width: clamp(80px,12vw,140px);
          height: clamp(80px,12vw,140px);
          background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px);
          background-size: 14px 14px;
          pointer-events: none;
          z-index: 1;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .ah-grid {
            grid-template-columns: 1fr;
            gap: clamp(36px,6vw,56px);
            text-align: center;
          }
          .ah-right { order: -1; }
          .ah-body  { margin-left: auto; margin-right: auto; text-align: left; }
          .ah-btn-wrap { justify-content: center; }
          .ah-photo-card { max-width: clamp(300px,80vw,520px); }
          .ah-emoji-wave   { left: 50%; transform: translateX(-50px); }
          .ah-emoji-hands  { left: 50%; transform: translateX(-60px); }
        }
        @media (max-width: 480px) {
          .ah-heading { font-size: clamp(2.2rem,10vw,3.2rem); }
          .ah-emoji-thumbs { display: none; }
          .ah-dots { width: 70px; height: 70px; }
        }
      `}</style>

      <section className="ah-section">
        <div className="ah-glow" aria-hidden />
        <div className="ah-dots"  aria-hidden />

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="ah-grid">

            {/* ── LEFT: Copy ── */}
            <div>
              <h1 className="ah-heading">
                <span className="ah-meet">MEET </span>
                <span className="ah-our-team">OUR TEAM</span>
              </h1>

              <div className="ah-body" style={{ marginTop: 'clamp(20px,3vw,32px)' }}>
                <p>
                  We&apos;re a fun, energetic team of diverse individuals who are passionate about what
                  we do AND what our clients can do with the help of our experienced team.
                </p>
                <p>
                  Meet our talented leaders who drive the success of the business and help your
                  brand make waves in the digital world.
                </p>
              </div>

              <div className="ah-btn-wrap" style={{ display: 'flex' }}>
                <Link
                  href="/contact"
                  className="ah-btn"
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 7px 0 #0c1a4e'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 5px 0 #0c1a4e'
                  }}
                >
                  GET YOUR FREE CUSTOM PROPOSAL
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Team photo + floating emojis ── */}
            <div className="ah-right">
              {/* 👋 wave — top */}
              <span className="ah-emoji ah-emoji-wave" aria-hidden>👋</span>

              {/* Team photo card */}
              <div className="ah-photo-card">
                <Image
                  src="/images/about-team.png"
                  alt="The MAXIMEDIA team"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 480px) 80vw, (max-width: 860px) 80vw, 52vw"
                  priority
                />
              </div>

              {/* 🙌 raised hands — bottom center */}
              <span className="ah-emoji ah-emoji-hands" aria-hidden>🙌</span>

              {/* 👍 thumbs up — bottom right */}
              <span className="ah-emoji ah-emoji-thumbs" aria-hidden>👍</span>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}