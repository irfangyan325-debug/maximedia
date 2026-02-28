import { PAIN_POINTS } from '@/lib/data'

const PAIN_ICONS: Record<string, string> = {
  '📉': '🧲',
  '🌀': '📈',
  '📊': '📊',
  '🎨': '💡',
}

export default function PainPointsSection() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0 0' }}>
      <div className="container">

        {/* Heading */}
        <h2
          className="font-display font-black uppercase"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            lineHeight: 1.1,
            color: 'var(--blue)',
            textAlign: 'center',
            marginBottom: '52px',
            maxWidth: '780px',
            margin: '0 auto 52px',
            letterSpacing: '-0.01em',
          }}
        >
          TIRED OF SOCIAL MEDIA EFFORTS THAT<br />DON&apos;T DELIVER?
        </h2>

        {/* 4 pain point cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          paddingBottom: '0',
        }}>
          {PAIN_POINTS.map((p) => (
            <div
              key={p.title}
              style={{
                background: '#ffffff',
                border: '2px solid rgba(26,86,219,0.15)',
                borderRadius: '16px',
                padding: '28px 20px 24px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(26,86,219,0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Bottom-right blue accent corner */}
              <div style={{
                position: 'absolute',
                bottom: 0, right: 0,
                width: '60px', height: '60px',
                background: 'var(--blue)',
                borderRadius: '14px 0 14px 0',
                opacity: 0.1,
              }} />

              {/* 3D icon */}
              <div style={{
                fontSize: '3.2rem',
                marginBottom: '18px',
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))',
                lineHeight: 1,
              }}>
                {PAIN_ICONS[p.icon] ?? p.icon}
              </div>

              {/* Title */}
              <h3
                className="font-display font-black uppercase"
                style={{
                  fontSize: '0.82rem',
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

      {/* Blue wave into next section */}
      <div style={{ lineHeight: 0, marginTop: '56px' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="var(--blue)" />
        </svg>
      </div>
    </section>
  )
}