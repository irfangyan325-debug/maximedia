import Image from 'next/image'

export default function AboutStory() {
  return (
    <>
      <style>{`
        .about-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 96px);
          align-items: center;
        }
        @media (max-width: 860px) {
          .about-story-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-story-photo-col {
            max-width: 480px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>

      <section style={{
        background: '#ffffff',
        padding: 'clamp(64px,9vw,110px) 0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Faint arc decoration */}
        <div aria-hidden style={{
          position: 'absolute', top: 0, right: 0, width: '420px', height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,86,219,0.04) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-story-grid">

            {/* ── LEFT: Photo + floating stat badges ── */}
            <div className="about-story-photo-col" style={{ position: 'relative' }}>

              {/* Top-right badge: 500+ CLIENTS */}
              <div style={{
                position: 'absolute',
                top: 'clamp(-14px,-2.5vw,-20px)',
                right: 'clamp(-8px,-1.5vw,-20px)',
                zIndex: 10,
                background: '#ffffff',
                borderRadius: '14px',
                padding: 'clamp(10px,1.5vw,14px) clamp(14px,2vw,22px)',
                boxShadow: '0 8px 32px rgba(26,86,219,0.18)',
                border: '1.5px solid rgba(26,86,219,0.1)',
                display: 'flex', alignItems: 'center', gap: '10px',
                whiteSpace: 'nowrap',
              }}>
                <span style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)' }}>🤝</span>
                <span className="font-display font-black uppercase" style={{
                  fontSize: 'clamp(0.8rem,1.4vw,1rem)', color: 'var(--blue)', letterSpacing: '0.04em',
                }}>
                  500+ CLIENTS
                </span>
              </div>

              {/* Main photo — rounded card exactly like screenshot */}
              <div style={{
                borderRadius: 'clamp(16px,3vw,24px)',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '3/4',
                boxShadow: '0 20px 64px rgba(26,86,219,0.15)',
                border: '2px solid rgba(26,86,219,0.07)',
              }}>
                <Image
                  src="/images/about-story.png"
                  alt="MAXIMEDIA team collaborating"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 860px) 90vw, 45vw"
                  priority
                />
              </div>

              {/* Bottom-left badge: 15 YEARS */}
              <div style={{
                position: 'absolute',
                bottom: 'clamp(-14px,-2.5vw,-20px)',
                left: 'clamp(-8px,-1.5vw,-20px)',
                zIndex: 10,
                background: '#ffffff',
                borderRadius: '14px',
                padding: 'clamp(10px,1.5vw,14px) clamp(14px,2vw,22px)',
                boxShadow: '0 8px 32px rgba(26,86,219,0.18)',
                border: '1.5px solid rgba(26,86,219,0.1)',
                display: 'flex', alignItems: 'center', gap: '10px',
                whiteSpace: 'nowrap',
              }}>
                <span style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)' }}>📣</span>
                <span className="font-display font-black uppercase" style={{
                  fontSize: 'clamp(0.8rem,1.4vw,1rem)', color: 'var(--blue)', letterSpacing: '0.04em',
                }}>
                  15 YEARS
                </span>
              </div>
            </div>

            {/* ── RIGHT: Text ── */}
            <div style={{ paddingTop: 'clamp(16px,3vw,24px)', paddingBottom: 'clamp(16px,3vw,24px)' }}>

              {/* OUR STORY — bold blue, exact match to screenshot size */}
              <h2 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(2.4rem,5.5vw,3.8rem)',
                lineHeight: 1.0,
                color: 'var(--blue)',
                letterSpacing: '-0.02em',
                marginBottom: 'clamp(20px,3vw,32px)',
              }}>
                OUR STORY
              </h2>

              {/* Lead — larger weight, matching screenshot */}
              <p style={{
                fontSize: 'clamp(1rem,2vw,1.18rem)',
                color: '#0c1a4e',
                lineHeight: 1.7,
                fontWeight: 600,
                marginBottom: 'clamp(14px,2vw,20px)',
              }}>
                We partner with global brands to deliver social media content efficiently and effectively,
                reaching a wide audience.
              </p>

              {/* Body paragraph 1 */}
              <p style={{
                fontSize: 'clamp(0.88rem,1.5vw,0.97rem)',
                color: 'rgba(12,26,78,0.65)',
                lineHeight: 1.85,
                marginBottom: 'clamp(12px,2vw,18px)',
              }}>
                Our four offices located throughout the United States showcase our efficient operations.
              </p>

              {/* Body paragraph 2 */}
              <p style={{
                fontSize: 'clamp(0.88rem,1.5vw,0.97rem)',
                color: 'rgba(12,26,78,0.65)',
                lineHeight: 1.85,
              }}>
                Expansion has always been at the core of our journey. By connecting with more people,
                both online and in person, we can continue to grow and create new opportunities.
                We are eager to learn about your story and assist you in sharing it with your audience.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}