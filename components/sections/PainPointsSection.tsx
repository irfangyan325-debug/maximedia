import { PAIN_POINTS } from '@/lib/data'

const PAIN_ICONS: Record<string, string> = {
  '📉': '🧲',
  '🌀': '📈',
  '📊': '📊',
  '🎨': '💡',
}

export default function PainPointsSection() {
  return (
    <>
      <style>{`
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        /* Tablet */
        @media (max-width: 900px) {
          .pain-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }
        /* Mobile */
        @media (max-width: 480px) {
          .pain-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .pain-heading br { display: none; }
        }
      `}</style>

      <section style={{ background: '#ffffff', padding: 'clamp(48px,7vw,80px) 0 0' }}>
        <div className="container">

          {/* Heading */}
          <h2
            className="font-display font-black uppercase pain-heading"
            style={{
              fontSize: 'clamp(1.4rem,4vw,2.8rem)',
              lineHeight: 1.1,
              color: 'var(--blue)',
              textAlign: 'center',
              margin: '0 auto clamp(32px,5vw,52px)',
              letterSpacing: '-0.01em',
            }}
          >
            TIRED OF SOCIAL MEDIA EFFORTS THAT<br />DON&apos;T DELIVER?
          </h2>

          {/* Cards */}
          <div className="pain-grid">
            {PAIN_POINTS.map((p) => (
              <div
                key={p.title}
                style={{
                  background: '#ffffff',
                  border: '2px solid rgba(26,86,219,0.15)',
                  borderRadius: '16px',
                  padding: 'clamp(18px,3vw,28px) clamp(14px,2vw,20px) clamp(16px,2.5vw,24px)',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(219, 26, 26, 0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                
                {/* Icon */}
                <div style={{
                  fontSize: 'clamp(2rem,4vw,3.2rem)',
                  marginBottom: 'clamp(10px,2vw,18px)',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))',
                  lineHeight: 1,
                }}>
                  {PAIN_ICONS[p.icon] ?? p.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-black uppercase"
                  style={{
                    fontSize: 'clamp(0.68rem,1.2vw,0.82rem)',
                    lineHeight: 1.3,
                    color: 'var(--blue)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {p.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Blue wave */}
        <div style={{ lineHeight: 0, marginTop: 'clamp(36px,5vw,56px)' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
            <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="var(--blue)" />
          </svg>
        </div>
      </section>
    </>
  )
}