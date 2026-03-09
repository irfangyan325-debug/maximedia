import Link from 'next/link'
import { CLIENT_LOGOS } from '@/lib/data'

export default function HeroSection() {
  return (
    <>
      <section
        style={{
          background: '#ffffff',
          paddingTop: 'var(--nav-h)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Faint dot grid */}
        <div className="absolute inset-0 pointer-events-none grid-texture" style={{ opacity: 0.5 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            padding: 'clamp(40px, 8vw, 100px) 0',
          }}>

            {/* ── LEFT: Copy ──────────────────────────────── */}
            <div style={{ order: 1 }}>
              <h1
                className="font-display font-black uppercase"
                style={{
                  fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.01em',
                  marginBottom: '0',
                }}
              >
                <span style={{ color: 'var(--blue)', display: 'block' }}>
                  YOUR RESULTS-DRIVEN
                </span>
                <span style={{
                  color: 'var(--yellow)',
                  display: 'block',
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--yellow)',
                  textDecorationThickness: '4px',
                  textUnderlineOffset: '6px',
                }}>
                  SOCIAL MARKETING
                </span>
                <span style={{ color: 'var(--blue)', display: 'block' }}>AGENCY FOR</span>
                <span style={{ color: 'var(--blue)', display: 'block' }}>MEASURABLE GROWTH</span>
              </h1>

              <p style={{
                fontSize: 'clamp(0.88rem, 2vw, 1rem)',
                color: 'rgba(12,26,78,0.7)',
                lineHeight: 1.75,
                maxWidth: '460px',
                margin: 'clamp(16px, 3vw, 24px) 0 clamp(20px, 4vw, 32px)',
              }}>
                <strong style={{ color: 'var(--blue)', fontWeight: 800 }}>
                  Stop Guessing, Start Growing:
                </strong>{' '}
                Partner with a Social Marketing Agency Focused on Your Bottom Line
              </p>

              <Link
                href="#contact"
                className="font-display font-black uppercase"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)',
                  background: 'var(--yellow)',
                  color: '#0c1a4e',
                  borderRadius: '10px',
                  fontSize: 'clamp(0.72rem, 1.5vw, 0.82rem)',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  boxShadow: '0 6px 24px rgba(245,197,24,0.4)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                LET&apos;S DRIVE GROWTH TOGETHER
              </Link>
            </div>

            {/* ── RIGHT: Phone + blue blob ─────────────────── */}
            {/* Hidden on very small screens, shown from sm up */}
            <div
              className="hero-phone-col"
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'clamp(320px, 50vw, 520px)',
                order: 2,
              }}
            >
              {/* Blue blob */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-40%, -50%)',
                width: 'clamp(240px, 40vw, 420px)',
                height: 'clamp(240px, 40vw, 420px)',
                borderRadius: '50%',
                background: 'var(--blue)',
                zIndex: 0,
              }} />

              {/* Phone frame */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                width: 'clamp(160px, 22vw, 240px)',
                height: 'clamp(326px, 45vw, 490px)',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 'clamp(24px, 4vw, 36px)',
                  border: '3px solid #0c1a4e',
                  background: '#fff',
                  overflow: 'hidden',
                  boxShadow: '4px 8px 32px rgba(12,26,78,0.18)',
                  position: 'relative',
                }}>
                  {/* Notch */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'clamp(50px, 8vw, 80px)',
                    height: '18px',
                    borderRadius: '20px',
                    background: '#0c1a4e',
                    zIndex: 10,
                  }} />

                  {/* Screen */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(170deg, #1a56db 0%, #a8d4f0 40%, #f5e6c0 70%, #e8c87a 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '36px',
                    overflow: 'hidden',
                  }}>
                    {/* Post image */}
                    <div style={{
                      width: '86%',
                      height: '58%',
                      borderRadius: '14px',
                      background: 'linear-gradient(145deg, #87ceeb 0%, #4a90d9 40%, #f5c518 70%, #e8a020 100%)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      marginBottom: '12px',
                    }}>
                      🏖️
                    </div>

                    {/* Engagement bar */}
                    <div style={{
                      width: '86%',
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {['❤️', '💬', '↗️'].map((ic) => (
                          <span key={ic} style={{ fontSize: '0.85rem' }}>{ic}</span>
                        ))}
                      </div>
                      <span style={{ fontSize: '0.58rem', fontWeight: 800, color: 'var(--blue)' }}>
                        100K+ views
                      </span>
                    </div>

                    <div style={{ marginTop: '8px', fontSize: '0.58rem', fontWeight: 700, color: '#0c1a4e', opacity: 0.7 }}>
                      @maximedia
                    </div>
                  </div>
                </div>

                {/* Shadow under phone */}
                <div style={{
                  position: 'absolute',
                  bottom: '-16px',
                  left: '10%',
                  right: '10%',
                  height: '3px',
                  background: 'rgba(12,26,78,0.15)',
                  borderRadius: '50%',
                  filter: 'blur(4px)',
                }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Client Logos Marquee ── */}
      <div style={{
        background: '#ffffff',
        borderTop: '1px solid rgba(26,86,219,0.08)',
        borderBottom: '1px solid rgba(26,86,219,0.08)',
        padding: 'clamp(18px, 3vw, 28px) 0',
        overflow: 'hidden',
      }}>
        <div className="marquee-track">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
            <span
              key={i}
              style={{
                padding: '0 clamp(16px, 3vw, 36px)',
                height: '36px',
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.65rem, 1.5vw, 0.82rem)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: 'rgba(12,26,78,0.22)',
                whiteSpace: 'nowrap',
                cursor: 'default',
                flexShrink: 0,
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        /* Mobile: stack vertically, hide phone on very small screens */
        @media (max-width: 480px) {
          .hero-phone-col { display: none !important; }
        }

        /* Tablet: show phone but smaller */
        @media (max-width: 768px) {
          .hero-phone-col {
            min-height: 280px !important;
          }
        }
      `}</style>
    </>
  )
}