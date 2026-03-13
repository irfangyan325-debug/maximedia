'use client'

import Link from 'next/link'
import { SERVICES } from '@/lib/data'

const SERVICE_ICONS: Record<string, string> = {
  'strategy':   '💡',
  'content':    '🎥',
  'management': '👥',
  'paid':       '💳',
  'influencer': '🎯',
  'selling':    '🔗',
}

export default function ServicesSection() {
  const displayServices = SERVICES.slice(0, 6)

  return (
    <>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 520px) {
          .services-grid { grid-template-columns: 1fr; gap: 14px; }
          .services-cta-btn { width: 100%; justify-content: center; }
        }

        /* Card — matching screenshot */
        .svc-card {
          display: block;
          text-decoration: none;
          background: #ffffff;
          border: 2px solid #b8dff0;
          border-radius: 20px;
          padding: clamp(20px,3vw,28px) clamp(18px,2.5vw,26px) clamp(22px,3.5vw,32px);
          position: relative;
          overflow: hidden;
          /* Offset shadow — matches screenshot */
          box-shadow: 6px 6px 0px #b8dff0, 0 4px 16px rgba(26,86,219,0.06);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .svc-card:hover {
          transform: translateY(-5px);
          box-shadow: 6px 12px 0px #a0cce8, 0 12px 32px rgba(26,86,219,0.12);
        }

        /* Blue tab notch on right edge */
        .svc-card::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -2px;
          transform: translateY(-50%);
          width: 6px;
          height: clamp(44px,7vw,72px);
          background: var(--blue);
          border-radius: 4px 0 0 4px;
        }

        .svc-title {
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          line-height: 1.25;
          color: var(--blue);
          margin-bottom: clamp(12px,2vw,18px);
          letter-spacing: 0.01em;
        }

        .svc-bullet {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: clamp(0.8rem, 1.2vw, 0.88rem);
          color: rgba(12,26,78,0.68);
          line-height: 1.55;
        }
        .svc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--blue);
          flex-shrink: 0;
          margin-top: 5px;
        }
      `}</style>

      <section style={{ background: '#ffffff', padding: 'clamp(56px,8vw,90px) 0 clamp(48px,7vw,80px)', overflow: 'hidden' }}>
        <div className="container">

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px,5vw,52px)' }}>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.6rem,4vw,2.6rem)', lineHeight: 1.1,
              color: 'var(--blue)', marginBottom: '6px', letterSpacing: '-0.01em',
            }}>
              OUR COMPREHENSIVE SOCIAL MEDIA MARKETING
            </h2>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.6rem,4vw,2.6rem)', lineHeight: 1.1,
              color: 'var(--yellow)',
              textDecoration: 'underline', textDecorationColor: 'var(--yellow)',
              textDecorationThickness: '5px', textUnderlineOffset: '7px',
              letterSpacing: '-0.01em',
            }}>
              SERVICES
            </h2>
          </div>

          {/* Grid */}
          <div className="services-grid">
            {displayServices.map((s) => (
              <Link key={s.id} href={s.href} className="svc-card">

                {/* Emoji icon — top-left */}
                <div style={{
                  fontSize: 'clamp(3rem,6vw,4.5rem)',
                  marginBottom: 'clamp(14px,2.5vw,22px)',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))',
                  lineHeight: 1,
                }}>
                  {SERVICE_ICONS[s.id] ?? s.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-black uppercase svc-title">{s.title}</h3>

                {/* Bullets */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {s.points.map(p => (
                    <li key={p} className="svc-bullet">
                      <span className="svc-dot" />
                      {p}
                    </li>
                  ))}
                </ul>

              </Link>
            ))}
          </div>

          {/* Footer */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.88rem', color: 'rgba(12,26,78,0.4)', fontStyle: 'italic', marginBottom: '20px', letterSpacing: '0.02em' }}>
              And more...
            </p>
            <Link
              href="/services"
              className="font-display font-black uppercase services-cta-btn"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: 'clamp(13px,2vw,16px) clamp(24px,4vw,40px)',
                background: 'var(--yellow)', color: '#0c1a4e',
                borderRadius: '10px', fontSize: 'clamp(0.78rem,1.5vw,0.88rem)',
                letterSpacing: '0.1em', textDecoration: 'none',
                border: '2px solid #0c1a4e',
                boxShadow: '0 5px 0 #0c1a4e',
                transition: 'all 0.15s ease',
              }}
            >
              SEE ALL SERVICES →
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}