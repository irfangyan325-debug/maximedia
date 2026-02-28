'use client'

import Link from 'next/link'
import { TESTIMONIALS } from '@/lib/data'

// Company logo placeholder badges — coloured like the screenshot logos
const LOGO_STYLES: Record<string, { bg: string; color: string; text: string }> = {
  'National Park Service':                { bg: '#1a3f2e', color: '#fff',     text: 'NPS'   },
  'Fras-le':                              { bg: '#c0392b', color: '#fff',     text: 'FRASLE'},
  'Association of Equipment Manufacturers':{ bg: '#1a56db', color: '#fff',    text: 'AEM'   },
  'Inverness Dermatology':                { bg: '#2c3e7a', color: '#fff',     text: 'INV'   },
}

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#ffffff', padding: '90px 0 100px' }}>
      <div className="container">

        {/* ── Header row ──────────────────────────────── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          <h2
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              lineHeight: 1.08,
              color: 'var(--blue)',
              letterSpacing: '-0.01em',
            }}
          >
            WHAT OUR CLIENTS SAY
          </h2>

          {/* Dark "SEE MORE" pill — matches screenshot */}
          <Link
            href="/work"
            className="font-display font-black uppercase"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 22px',
              background: '#0c1a4e',
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              transition: 'background 0.2s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            SEE MORE
          </Link>
        </div>

        {/* ── 2-column grid ───────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}>
          {TESTIMONIALS.map((t) => {
            const logo = LOGO_STYLES[t.company] ?? { bg: 'var(--blue)', color: '#fff', text: t.company.slice(0, 3).toUpperCase() }

            return (
              <div
                key={t.name}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid rgba(26,86,219,0.12)',
                  borderRadius: '16px',
                  padding: '28px 28px 24px',
                  boxShadow: '0 2px 16px rgba(26,86,219,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.25s, border-color 0.25s, transform 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = '0 12px 40px rgba(26,86,219,0.13)'
                  el.style.borderColor = 'rgba(26,86,219,0.28)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = '0 2px 16px rgba(26,86,219,0.06)'
                  el.style.borderColor = 'rgba(26,86,219,0.12)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                {/* Top row: logo badge + quote mark */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '18px' }}>
                  {/* Company logo badge */}
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    background: logo.bg,
                    color: logo.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '0.65rem',
                    letterSpacing: '0.04em',
                    textAlign: 'center',
                    flexShrink: 0,
                    border: '1.5px solid rgba(0,0,0,0.08)',
                  }}>
                    {logo.text}
                  </div>

                  {/* Big yellow quote mark */}
                  <span style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '3.5rem',
                    lineHeight: 1,
                    color: 'var(--yellow)',
                    fontWeight: 900,
                    marginTop: '-6px',
                  }}>
                    "
                  </span>
                </div>

                {/* Quote text */}
                <p style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.78,
                  color: 'rgba(12,26,78,0.68)',
                  flex: 1,
                  marginBottom: '24px',
                }}>
                  {t.quote}
                </p>

                {/* Author */}
                <div style={{ borderTop: '1.5px solid rgba(26,86,219,0.08)', paddingTop: '18px' }}>
                  <p
                    className="font-display font-black uppercase"
                    style={{
                      fontSize: '1rem',
                      color: 'var(--blue)',
                      marginBottom: '2px',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(12,26,78,0.48)', fontWeight: 500 }}>
                    {t.company}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
