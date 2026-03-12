'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function StudiosHero() {
  return (
    <>
      <style>{`
        .sh-section {
          background: #0c0496;
          padding-top: var(--nav-h);
          overflow: hidden;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .sh-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(24px, 4vw, 64px);
          align-items: center;
          padding: clamp(48px, 8vw, 88px) 0;
          width: 100%;
        }

        /* ── Phone mockup ── */
        .sh-phone-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        /* Blue oval blob behind phone */
        .sh-blob {
          position: absolute;
          width: 72%;
          aspect-ratio: 1 / 1.1;
          background: var(--blue);
          border-radius: 50%;
          top: 50%;
          right: 2%;
          transform: translateY(-50%);
          z-index: 0;
        }
        /* Phone outline shell */
        .sh-phone {
          position: relative;
          z-index: 2;
          width: clamp(180px, 28vw, 300px);
          filter: drop-shadow(0 24px 48px rgba(0,0,0,0.18));
        }
        .sh-phone-outer {
          border: 3.5px solid #0c1a4e;
          border-radius: clamp(28px, 5vw, 44px);
          background: #0c1a4e;
          padding: clamp(8px, 1.5vw, 12px);
          position: relative;
        }
        /* Notch */
        .sh-notch {
          width: 36%;
          height: clamp(8px,1.5vw,12px);
          background: #0c1a4e;
          border-radius: 0 0 12px 12px;
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }
        /* Screen */
        .sh-screen {
          border-radius: clamp(20px, 4vw, 34px);
          overflow: hidden;
          aspect-ratio: 9/16;
          position: relative;
          background: #111;
        }
        /* Bottom bar */
        .sh-phone-bar {
          display: flex;
          justify-content: space-around;
          padding: clamp(6px,1vw,10px) 0 clamp(4px,0.8vw,6px);
          background: #0c1a4e;
          margin-top: 2px;
          border-radius: 0 0 clamp(24px,4vw,38px) clamp(24px,4vw,38px);
        }
        .sh-phone-bar span {
          font-size: clamp(0.38rem,0.7vw,0.5rem);
          color: rgba(255,255,255,0.55);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* Tablet */
        @media (max-width: 860px) {
          .sh-grid { grid-template-columns: 1fr; gap: 40px; }
          .sh-phone-wrap { order: -1; }
          .sh-phone { width: clamp(160px, 42vw, 240px); }
          .sh-blob { width: 80%; }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .sh-cta-btn { width: 100%; justify-content: center; text-align: center; }
          .sh-phone { width: clamp(150px, 48vw, 200px); }
        }
      `}</style>

      <section className="sh-section">
        <div aria-hidden style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: '50%', pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(26,86,219,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
          opacity: 0.6,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="sh-grid">

            <div>
              <h1 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(2.2rem, 5.8vw, 4.4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                marginBottom: 'clamp(18px, 3vw, 28px)',
              }}>
                <span className="block text-white">
                  Let’s Create Content That
                </span>
                <span style={{
                  color: 'var(--yellow)',
                  display: 'block',
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--yellow)',
                  textDecorationThickness: 'clamp(4px, 0.7vw, 7px)',
                  textUnderlineOffset: '4px',
                }}>
                  Gets Added To Cart
                </span>
              </h1>

              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: '#ffffff',
                lineHeight: 1.75,
                maxWidth: '500px',
                marginBottom: 'clamp(24px, 4vw, 36px)',
              }}>
                The one stop shop for all your production needs!!
              </p>

              <Link
                href="/contact"
                className="font-display font-black uppercase sh-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: 'clamp(14px, 2vw, 18px) clamp(24px, 3.5vw, 40px)',
                  background: 'var(--yellow)',
                  color: '#0c1a4e',
                  borderRadius: '8px',
                  fontSize: 'clamp(0.72rem, 1.3vw, 0.82rem)',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  border: '2.5px solid #0c1a4e',
                  boxShadow: '0 5px 0 #0c1a4e',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 7px 0 #0c1a4e'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 5px 0 #0c1a4e'
                }}
              >
                BOOK MY SHOOT
              </Link>
            </div>

            <div className="sh-phone-wrap">
              <div className="sh-blob" />

              <div className="sh-phone">
                <div className="sh-phone-outer">
                  <div className="sh-notch" />

                  <div className="sh-screen">
                    <Image
                      src="/images/studios-phone.png"
                      alt="Social media content production"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      sizes="(max-width: 480px) 48vw, (max-width: 860px) 42vw, 28vw"
                      priority
                    />
                  </div>

                  <div className="sh-phone-bar">
                    {['LEARN', 'VIDEO', 'PHOTO', 'MORE'].map(l => (
                      <span key={l}>{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}