import Link from 'next/link'
import Image from 'next/image'
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
        <div className="absolute inset-0 pointer-events-none grid-texture" style={{ opacity: 0.5 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            padding: 'clamp(40px, 8vw, 100px) 0',
          }}>

            {/* ── Left: copy ── */}
            <div style={{ order: 1 }}>
              <h1
                className="font-display font-black uppercase"
                style={{
                  fontSize: 'clamp(1.6rem, 5vw, 3.1rem)',
                  lineHeight: 1.3,
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
                  border: '2px solid #0c1a4e',
                  boxShadow: '0 5px 0 #0c1a4e',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                LET&apos;S DRIVE GROWTH TOGETHER
              </Link>
            </div>

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
                  border: '8px solid #ffffff',
                  background: '#000',
                  overflow: 'hidden',
                  boxShadow: '4px 8px 32px rgba(12,26,78,0.18)',
                  position: 'relative',
                }}>

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

                
                  <Image
                    src="/images/hero-phone-screen.png"
                    alt="Social media content preview"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top', }}
                    sizes="(max-width: 768px) 30vw, 22vw"
                    priority
                  />
                </div>

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

      <style>{`
        @media (max-width: 480px) {
          .hero-phone-col { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-phone-col { min-height: 280px !important; }
        }
      `}</style>
    </>
  )
}