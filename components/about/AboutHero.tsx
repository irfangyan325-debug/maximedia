'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <>
      <style>{`
        .about-hero-section {
          background: #ffffff;
          padding-top: var(--nav-h);
          overflow: hidden;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(32px, 5vw, 80px);
          align-items: center;
          padding: clamp(28px, 8vw, 26px) 0;
          width: 100%;
        }
        .about-hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        /* Dot grid decoration top-right */
        .about-hero-dots {
          position: absolute;
          top: 10px;
          right: -10px;
          width: 120px;
          height: 120px;
          background-image: radial-gradient(circle, rgba(26,86,219,0.18) 1.5px, transparent 1.5px);
          background-size: 14px 14px;
          pointer-events: none;
          z-index: 0;
        }
        /* Main tall image card */
        .about-hero-main-card {
          position: relative;
          width: clamp(280px, 42vw, 420px);
          aspect-ratio: 3/4;
          border-radius: clamp(18px, 3vw, 28px);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(26,86,219,0.16);
          border: 3px solid rgba(26,86,219,0.1);
          background: #d0e8f8;
          z-index: 2;
          flex-shrink: 0;
        }
        /* Small overlapping card bottom-left */
        .about-hero-small-card {
          position: absolute;
          bottom: clamp(-20px,-4vw,-32px);
          left: clamp(-20px,-4vw,-32px);
          width: clamp(130px, 22vw, 210px);
          aspect-ratio: 1/1;
          border-radius: clamp(14px, 2.5vw, 20px);
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.2);
          border: 3px solid #ffffff;
          background: #a8d4f0;
          z-index: 3;
        }

        /* Tablet */
        @media (max-width: 860px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-hero-right {
            order: -1;
            justify-content: center;
          }
          .about-hero-main-card {
            width: clamp(260px, 65vw, 380px);
          }
        }

        /* Mobile */
        @media (max-width: 520px) {
          .about-hero-dots { display: none; }
          .about-hero-main-card {
            width: clamp(220px, 75vw, 320px);
          }
          .about-hero-small-card {
            bottom: -16px;
            left: -12px;
            width: clamp(100px, 28vw, 160px);
          }
          .about-hero-btns a {
            flex: 1;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>

      <section className="about-hero-section">
        {/* Faint bg gradient */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(ellipse 60% 70% at 10% 50%, rgba(26,86,219,0.04) 0%, transparent 60%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="about-hero-grid">

            {/* ── LEFT: Copy ── */}
            <div>
              {/* Line 1: RESULTS DRIVEN — yellow with thick underline */}
              <h1 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                marginBottom: '0',
              }}>
                <span style={{
                  color: 'var(--yellow)',
                  display: 'block',
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--yellow)',
                  textDecorationThickness: 'clamp(4px,0.8vw,7px)',
                  textUnderlineOffset: '6px',
                  marginBottom: '4px',
                }}>
                  RESULTS DRIVEN
                </span>

                <span style={{ color: 'var(--blue)', display: 'block', lineHeight: 1.05 }}>
                  SOCIAL MEDIA<br />EXPERTS
                </span>
              </h1>

              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: 'rgba(12,26,78,0.72)',
                lineHeight: 1.7,
                marginTop: 'clamp(20px, 3vw, 28px)',
                marginBottom: 'clamp(24px, 4vw, 36px)',
                maxWidth: '480px',
              }}>
                We{' '}
                <strong style={{ color: 'var(--blue)', fontWeight: 800 }}>
                  create, scale, and refine
                </strong>{' '}
                what you need.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }} className="about-hero-btns">
                <Link
                  href="/contact"
                  className="font-display font-black uppercase"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: 'clamp(14px,2vw,18px) clamp(24px,3vw,36px)',
                    background: 'var(--yellow)',
                    color: '#0c1a4e',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.72rem, 1.3vw, 0.82rem)',
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    border: '2px solid #0c1a4e',
                    boxShadow: '0 4px 0 #0c1a4e',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 0 #0c1a4e'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 0 #0c1a4e'
                  }}
                >
                  GET YOUR FREE CUSTOM PROPOSAL
                </Link>
              </div>
            </div>

            <div className="about-hero-right">
              <div className="about-hero-dots" />

              <div className="about-hero-main-card">
                <Image
                  src="/images/about-hero-main.png"
                  alt="MAXIMEDIA social media results"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 520px) 75vw, (max-width: 860px) 65vw, 42vw"
                  priority
                />
              </div>

              {/* Small overlapping card — uses a cropped portion of same image 
                  Replace src with a different case study image when available */}
              <div className="about-hero-small-card">
                <Image
                  src="/images/about-small.png"
                  alt="MAXIMEDIA case study"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 520px) 28vw, (max-width: 860px) 22vw, 18vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}