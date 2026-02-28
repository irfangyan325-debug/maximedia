'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE, SERVICES } from '@/lib/data'

const AGENCY_LINKS = [
  { label: 'About',    href: '/about' },
  { label: 'Careers',  href: '/careers' },
  { label: 'Resources',href: '/blog' },
  { label: 'Work',     href: '/work' },
  { label: 'Contact',  href: '/contact' },
]

const SERVICE_LINKS = [
  'Social Media Strategy',
  'Social Media Management',
  'Community Management & Listening',
  'Social Content Production',
  'Paid Social Advertising',
  'Influencer Marketing',
  'Data Analysis ROI Modeling',
  'Social Media Consulting',
  'Outbound Engagement',
  'Social Selling',
  'Reddit Marketing Agency',
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn',  href: '#', bg: '#0077b5', icon: 'in' },
  { label: 'Facebook',  href: '#', bg: '#1877f2', icon: 'f' },
  { label: 'X',         href: '#', bg: '#000000', icon: '𝕏' },
  { label: 'Pinterest', href: '#', bg: '#e60023', icon: 'P' },
  { label: 'YouTube',   href: '#', bg: '#ff0000', icon: '▶' },
  { label: 'TikTok',    href: '#', bg: '#010101', icon: '♪' },
  { label: 'Instagram', href: '#', bg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', icon: '◻' },
  { label: 'Reddit',    href: '#', bg: '#ff4500', icon: 'R' },
]

const PARTNERS = [
  { label: 'Google Partner' },
  { label: 'TikTok Shop Partner' },
  { label: 'TikTok Marketing Partner' },
  { label: 'Meta Business Partner' },
  { label: 'Reddit Marketing Partner' },
  { label: 'LinkedIn Marketing Partner' },
  { label: 'Pinterest Partner' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subDone, setSubDone] = useState(false)

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubDone(true); setEmail('') }
  }

  return (
    <footer style={{ background: '#ffffff', borderTop: '2px solid rgba(26,86,219,0.08)' }}>

      {/* ══════════════════════════════════════════════════
          SECTION 1 — White: Location + Agency + Services
      ══════════════════════════════════════════════════ */}
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1.6fr',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* ── Location block ── */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            {/* Yellow pin circle */}
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'var(--yellow)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, fontSize: '1.6rem',
              boxShadow: '0 4px 16px rgba(245,197,24,0.3)',
            }}>
              📍
            </div>
            <div>
              <p style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0c1a4e', marginBottom: '4px', lineHeight: 1.4 }}>
                MAXIMEDIA: THE Social Media Agency
              </p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(12,26,78,0.55)', lineHeight: 1.8 }}>
                {SITE.address}<br />
                {SITE.city}<br />
                {SITE.phone}
              </p>
            </div>
          </div>

          {/* ── Agency links ── */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '0.92rem', color: '#0c1a4e', marginBottom: '16px' }}>
              Agency
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {AGENCY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ fontSize: '0.88rem', color: 'rgba(12,26,78,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(12,26,78,0.6)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services links ── */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '0.92rem', color: '#0c1a4e', marginBottom: '16px' }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    style={{ fontSize: '0.87rem', color: 'rgba(12,26,78,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(12,26,78,0.6)')}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — Yellow newsletter banner
      ══════════════════════════════════════════════════ */}
      <div className="container" style={{ paddingBottom: '48px' }}>
        <div style={{
          background: 'var(--yellow)',
          borderRadius: '20px',
          padding: '40px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '32px',
          alignItems: 'center',
        }}>
          {/* Left: text + form */}
          <div>
            <h2
              className="font-display font-black uppercase"
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                lineHeight: 1.1,
                color: '#0c1a4e',
                marginBottom: '24px',
                letterSpacing: '-0.01em',
              }}
            >
              JOIN 10,000+ MARKETERS GETTING<br />
              AHEAD ON SOCIAL. SUBSCRIBE NOW.
            </h2>

            {subDone ? (
              <p style={{ fontWeight: 700, color: '#0c1a4e', fontSize: '0.95rem' }}>
                ✅ You're subscribed! Welcome to the community.
              </p>
            ) : (
              <form onSubmit={handleSub}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'rgba(12,26,78,0.6)', marginBottom: '8px' }}>
                  Email Address*
                </p>
                <div style={{ display: 'flex', gap: '0', maxWidth: '460px' }}>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '14px 16px',
                      border: '2px solid rgba(12,26,78,0.2)',
                      borderRight: 'none',
                      borderRadius: '8px 0 0 8px',
                      fontSize: '0.88rem',
                      outline: 'none',
                      background: '#fff',
                      color: '#0c1a4e',
                    }}
                  />
                  <button
                    type="submit"
                    className="font-display font-black uppercase"
                    style={{
                      padding: '14px 22px',
                      background: '#0c1a4e',
                      color: 'var(--yellow)',
                      border: 'none',
                      borderRadius: '0 8px 8px 0',
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#0c1a4e')}
                  >
                    SUBSCRIBE TO NEWSLETTER
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: illustration emoji */}
          <div style={{ fontSize: '5rem', flexShrink: 0, opacity: 0.85 }}>
            📋
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — Light grey: GET IN TOUCH + socials
      ══════════════════════════════════════════════════ */}
      <div style={{ background: '#f4f6fb', padding: '64px 0 56px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            className="font-display font-black uppercase"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#0c1a4e', marginBottom: '10px', letterSpacing: '-0.02em' }}
          >
            GET IN TOUCH
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(12,26,78,0.55)', marginBottom: '32px' }}>
            But only if you&apos;re ready to turn clicks into clients.
          </p>

          {/* Social icon circles */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: s.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)'
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — White: Partner badges + copyright
      ══════════════════════════════════════════════════ */}
      <div style={{ background: '#ffffff', borderTop: '2px solid rgba(26,86,219,0.08)' }}>
        <div className="container" style={{ padding: '32px 28px 16px' }}>

          {/* Partner badge row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '24px',
          }}>
            {PARTNERS.map((p) => (
              <div
                key={p.label}
                style={{
                  padding: '8px 16px',
                  border: '1.5px solid rgba(26,86,219,0.15)',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'rgba(12,26,78,0.55)',
                  background: '#fff',
                  letterSpacing: '0.03em',
                  whiteSpace: 'nowrap',
                }}
              >
                {p.label}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(26,86,219,0.1)', marginBottom: '20px' }} />

          {/* Copyright + legal links */}
          <div style={{ textAlign: 'center', paddingBottom: '28px' }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(12,26,78,0.45)', marginBottom: '8px' }}>
              Copyright © {new Date().getFullYear()} MAXIMEDIA LLC. All rights reserved.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {[
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Privacy Policy',   href: '/privacy' },
                { label: 'FAQ',              href: '/faq' },
                { label: 'Sitemap',          href: '/sitemap' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ fontSize: '0.8rem', color: 'rgba(12,26,78,0.5)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(12,26,78,0.5)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
