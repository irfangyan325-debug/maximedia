import Link from 'next/link'
import { CLIENT_LOGOS } from '@/lib/data'

export default function HeroSection() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO — white bg, left text, right phone + blue blob
      ══════════════════════════════════════════════════ */}
      <section
        style={{
          background: '#ffffff',
          paddingTop: 'var(--nav-h)',
          minHeight: '100vh',
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
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            padding: '80px 0',
          }}>

            {/* ── LEFT: Copy ──────────────────────────────── */}
            <div>
              {/* Main headline — matches screenshot exactly */}
              <h1
                className="font-display font-black uppercase"
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.01em',
                  marginBottom: '0',
                }}
              >
                {/* Line 1 — blue */}
                <span style={{ color: 'var(--blue)', display: 'block' }}>
                  YOUR RESULTS-DRIVEN
                </span>
                {/* Line 2 — yellow with underline */}
                <span style={{
                  color: 'var(--yellow)',
                  display: 'block',
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--yellow)',
                  textDecorationThickness: '5px',
                  textUnderlineOffset: '6px',
                }}>
                  SOCIAL MARKETING
                </span>
                {/* Line 3 — blue */}
                <span style={{ color: 'var(--blue)', display: 'block' }}>
                  AGENCY FOR
                </span>
                {/* Line 4 — blue */}
                <span style={{ color: 'var(--blue)', display: 'block' }}>
                  MEASURABLE GROWTH
                </span>
              </h1>

              {/* Subtext */}
              <p style={{
                fontSize: '1rem',
                color: 'rgba(12,26,78,0.7)',
                lineHeight: 1.75,
                maxWidth: '460px',
                margin: '24px 0 32px',
              }}>
                <strong style={{ color: 'var(--blue)', fontWeight: 800 }}>
                  Stop Guessing, Start Growing:
                </strong>{' '}
                Partner with a Social Marketing Agency Focused on Your Bottom Line
              </p>

              {/* Yellow CTA button — exact match */}
              <Link
                href="#contact"
                className="font-display font-black uppercase"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  background: 'var(--yellow)',
                  color: '#0c1a4e',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  boxShadow: '0 6px 24px rgba(245,197,24,0.4)',
                  transition: 'all 0.2s ease',
                }}
              >
                LET&apos;S DRIVE GROWTH TOGETHER
              </Link>
            </div>

            {/* ── RIGHT: Phone + blue blob ─────────────────── */}
            <div style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '520px',
            }}>
              {/* Blue blob behind phone */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-40%, -50%)',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'var(--blue)',
                zIndex: 0,
              }} />

              {/* Phone outline — matches the thin line-art style */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                width: '240px',
                height: '490px',
              }}>
                {/* Outer frame — thin black outline like screenshot */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '36px',
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
                    width: '80px',
                    height: '20px',
                    borderRadius: '20px',
                    background: '#0c1a4e',
                    zIndex: 10,
                  }} />

                  {/* Screen — photo-like content */}
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
                    {/* Simulated social post image */}
                    <div style={{
                      width: '86%',
                      height: '58%',
                      borderRadius: '14px',
                      background: 'linear-gradient(145deg, #87ceeb 0%, #4a90d9 40%, #f5c518 70%, #e8a020 100%)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4rem',
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
                      <div style={{ display: 'flex', gap: '10px' }}>
                        {['❤️', '💬', '↗️'].map((ic) => (
                          <span key={ic} style={{ fontSize: '0.9rem' }}>{ic}</span>
                        ))}
                      </div>
                      <span style={{
                        fontSize: '0.6rem',
                        fontWeight: 800,
                        color: 'var(--blue)',
                      }}>
                        100K+ views
                      </span>
                    </div>

                    {/* Username */}
                    <div style={{
                      marginTop: '8px',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      color: '#0c1a4e',
                      opacity: 0.7,
                    }}>
                      @maximedia
                    </div>
                  </div>
                </div>

                {/* Shadow line under phone (like screenshot's thin line-art shadow) */}
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

      {/* ══════════════════════════════════════════════════
          CLIENT LOGOS MARQUEE — plain white, greyed logos
      ══════════════════════════════════════════════════ */}
      <div style={{
        background: '#ffffff',
        borderTop: '1px solid rgba(26,86,219,0.08)',
        borderBottom: '1px solid rgba(26,86,219,0.08)',
        padding: '28px 0',
        overflow: 'hidden',
      }}>
        <div className="marquee-track">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
            <span
              key={i}
              style={{
                padding: '0 36px',
                height: '36px',
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '0.82rem',
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
    </>
  )
}