'use client'

import Link from 'next/link'
import { SERVICES } from '@/lib/data'

// 3D-style emoji icons matching the screenshot illustration style
const SERVICE_ICONS: Record<string, string> = {
  'strategy':   '💡',
  'content':    '🎥',
  'management': '👥',
  'paid':       '💳',
  'influencer': '🎯',
  'selling':    '🔗',
}

// Light pastel background per card (matching screenshot's light tinted cards)
const CARD_BG: Record<string, string> = {
  'strategy':   'rgba(255,220,180,0.25)',
  'content':    'rgba(180,220,255,0.25)',
  'management': 'rgba(180,200,255,0.25)',
  'paid':       'rgba(180,240,200,0.2)',
  'influencer': 'rgba(220,180,255,0.2)',
  'selling':    'rgba(255,200,220,0.2)',
}

export default function ServicesSection() {
  const displayServices = SERVICES.slice(0, 6)

  return (
    <section style={{ background: '#ffffff', padding: '90px 0 80px', overflow: 'hidden' }}>
      <div className="container">

        {/* ── Heading ──────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <h2
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
              lineHeight: 1.1,
              color: 'var(--blue)',
              marginBottom: '6px',
              letterSpacing: '-0.01em',
            }}
          >
            OUR COMPREHENSIVE SOCIAL MEDIA MARKETING
          </h2>
          <h2
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
              lineHeight: 1.1,
              color: 'var(--yellow)',
              textDecoration: 'underline',
              textDecorationColor: 'var(--yellow)',
              textDecorationThickness: '5px',
              textUnderlineOffset: '7px',
              letterSpacing: '-0.01em',
            }}
          >
            SERVICES
          </h2>
        </div>

        {/* ── 3-column grid ────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '32px',
        }}>
          {displayServices.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              style={{
                display: 'block',
                textDecoration: 'none',
                background: CARD_BG[s.id] ?? 'rgba(200,220,255,0.2)',
                border: '2px solid rgba(26,86,219,0.14)',
                borderRadius: '16px',
                padding: '24px 22px 28px',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26,86,219,0.35)'
                e.currentTarget.style.transform   = 'translateY(-4px)'
                e.currentTarget.style.boxShadow   = '0 16px 40px rgba(26,86,219,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26,86,219,0.14)'
                e.currentTarget.style.transform   = 'translateY(0)'
                e.currentTarget.style.boxShadow   = 'none'
              }}
            >
              {/* 3D icon */}
              <div style={{
                fontSize: '2.8rem',
                marginBottom: '16px',
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))',
                lineHeight: 1,
              }}>
                {SERVICE_ICONS[s.id] ?? s.icon}
              </div>

              {/* Title */}
              <h3
                className="font-display font-black uppercase"
                style={{
                  fontSize: 'clamp(0.85rem, 1.4vw, 0.98rem)',
                  lineHeight: 1.25,
                  color: 'var(--blue)',
                  marginBottom: '14px',
                  letterSpacing: '0.01em',
                }}
              >
                {s.title}
              </h3>

              {/* Bullet points */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {s.points.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '0.83rem',
                      color: 'rgba(12,26,78,0.65)',
                      lineHeight: 1.5,
                    }}
                  >
                    {/* Bullet dot */}
                    <span style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'var(--blue)',
                      flexShrink: 0,
                      marginTop: '6px',
                    }} />
                    {p}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {/* ── Footer row ───────────────────────────────── */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '0.88rem',
            color: 'rgba(12,26,78,0.4)',
            fontStyle: 'italic',
            marginBottom: '24px',
            letterSpacing: '0.02em',
          }}>
            And more...
          </p>

          {/* Yellow "SEE ALL SERVICES" button */}
          <Link
            href="/services"
            className="font-display font-black uppercase"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 40px',
              background: 'var(--yellow)',
              color: '#0c1a4e',
              borderRadius: '10px',
              fontSize: '0.88rem',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(245,197,24,0.4)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background  = 'var(--yellow-dark)'
              e.currentTarget.style.transform   = 'translateY(-2px)'
              e.currentTarget.style.boxShadow   = '0 12px 30px rgba(245,197,24,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background  = 'var(--yellow)'
              e.currentTarget.style.transform   = 'translateY(0)'
              e.currentTarget.style.boxShadow   = '0 6px 20px rgba(245,197,24,0.4)'
            }}
          >
            SEE ALL SERVICES
          </Link>
        </div>

      </div>
    </section>
  )
}