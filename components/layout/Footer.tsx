'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE } from '@/lib/data'

const AGENCY_LINKS = [
  { label: 'About',     href: '/about' },
  { label: 'Careers',   href: '/careers' },
  { label: 'Resources', href: '/blog' },
  { label: 'Work',      href: '/work' },
  { label: 'Contact',   href: '/contact' },
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
  { label: 'LinkedIn',  href: '#', bg: '#0077b5',                                                                       icon: 'in' },
  { label: 'Facebook',  href: '#', bg: '#1877f2',                                                                       icon: 'f'  },
  { label: 'X',         href: '#', bg: '#000000',                                                                       icon: '𝕏'  },
  { label: 'Pinterest', href: '#', bg: '#e60023',                                                                       icon: 'P'  },
  { label: 'YouTube',   href: '#', bg: '#ff0000',                                                                       icon: '▶'  },
  { label: 'TikTok',    href: '#', bg: '#010101',                                                                       icon: '♪'  },
  { label: 'Instagram', href: '#', bg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',               icon: '◻'  },
  { label: 'Reddit',    href: '#', bg: '#ff4500',                                                                       icon: 'R'  },
]

const PARTNERS = [
  'Google Partner',
  'TikTok Shop Partner',
  'TikTok Marketing Partner',
  'Meta Business Partner',
  'Reddit Marketing Partner',
  'LinkedIn Marketing Partner',
  'Pinterest Partner',
]

export default function Footer() {
  const [email,   setEmail]   = useState('')
  const [subDone, setSubDone] = useState(false)

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubDone(true); setEmail('') }
  }

  return (
    <>
      <style>{`
        /* ── Footer responsive grid ── */
        .footer-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.6fr;
          gap: 48px;
          align-items: start;
        }
        .footer-newsletter-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: center;
        }
        .footer-newsletter-emoji { display: block; }
        .footer-sub-row { flex-direction: row; }
        .footer-sub-input { border-right: none; border-radius: 8px 0 0 8px; }
        .footer-sub-btn   { border-radius: 0 8px 8px 0; }

        /* Tablet ≤ 768px */
        @media (max-width: 768px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-location-col { grid-column: 1 / -1; }
          .footer-newsletter-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .footer-newsletter-emoji { display: none; }
        }

        /* Mobile ≤ 480px */
        @media (max-width: 480px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-location-col { grid-column: auto; }
          .footer-sub-row { flex-direction: column !important; }
          .footer-sub-input {
            border-right: 2px solid rgba(12,26,78,0.2) !important;
            border-radius: 8px !important;
          }
          .footer-sub-btn {
            border-radius: 8px !important;
            width: 100%;
            text-align: center;
          }
          .footer-newsletter-inner { padding: 28px 20px !important; }
          .footer-partner-row { gap: 6px !important; }
          .footer-legal-row  { gap: 10px !important; flex-wrap: wrap; justify-content: center; }
        }
      `}</style>

      <footer style={{ background: '#ffffff', borderTop: '2px solid rgba(26,86,219,0.08)' }}>

        {/* ══ SECTION 1 — Location + Agency + Services ══ */}
        <div className="container" style={{ paddingTop: '56px', paddingBottom: '48px' }}>
          <div className="footer-top-grid">

            {/* Location */}
            <div className="footer-location-col" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: 'var(--yellow)', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', boxShadow: '0 4px 16px rgba(245,197,24,0.3)',
              }}>📍</div>
              <div>
                <p style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0c1a4e', marginBottom: '4px', lineHeight: 1.4 }}>
                  MAXIMEDIA: THE Social Media Agency
                </p>
                <p style={{ fontSize: '0.84rem', color: 'rgba(12,26,78,0.55)', lineHeight: 1.85 }}>
                  {SITE.address}<br />{SITE.city}<br />{SITE.phone}
                </p>
              </div>
            </div>

            {/* Agency links */}
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0c1a4e', marginBottom: '14px', letterSpacing: '0.04em' }}>
                Agency
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                {AGENCY_LINKS.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      style={{ fontSize: '0.87rem', color: 'rgba(12,26,78,0.58)', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(12,26,78,0.58)')}
                    >{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0c1a4e', marginBottom: '14px', letterSpacing: '0.04em' }}>
                Services
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                {SERVICE_LINKS.map(s => (
                  <li key={s}>
                    <Link
                      href="/services"
                      style={{ fontSize: '0.86rem', color: 'rgba(12,26,78,0.58)', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(12,26,78,0.58)')}
                    >{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ══ SECTION 2 — Newsletter (Yellow) ══ */}
        <div className="container" style={{ paddingBottom: '48px' }}>
          <div
            className="footer-newsletter-grid footer-newsletter-inner"
            style={{ background: 'var(--yellow)', borderRadius: '20px', padding: '40px 48px' }}
          >
            {/* Left: text + form */}
            <div>
              <h2 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.9rem)', lineHeight: 1.15,
                color: '#0c1a4e', marginBottom: '20px', letterSpacing: '-0.01em',
              }}>
                JOIN 10,000+ MARKETERS GETTING<br />
                AHEAD ON SOCIAL. SUBSCRIBE NOW.
              </h2>

              {subDone ? (
                <p style={{ fontWeight: 700, color: '#0c1a4e', fontSize: '0.95rem' }}>
                  ✅ You&apos;re subscribed! Welcome to the community.
                </p>
              ) : (
                <form onSubmit={handleSub}>
                  <p style={{ fontSize: '0.76rem', fontWeight: 700, color: 'rgba(12,26,78,0.6)', marginBottom: '8px' }}>
                    Email Address*
                  </p>
                  <div className="footer-sub-row" style={{ display: 'flex', maxWidth: '460px', gap: '0' }}>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="footer-sub-input"
                      style={{
                        flex: 1,
                        padding: '13px 14px',
                        border: '2px solid rgba(12,26,78,0.2)',
                        fontSize: '0.88rem',
                        outline: 'none',
                        background: '#fff',
                        color: '#0c1a4e',
                        fontFamily: 'inherit',
                        minWidth: 0,
                      }}
                    />
                    <button
                      type="submit"
                      className="font-display font-black uppercase footer-sub-btn"
                      style={{
                        padding: '13px 18px',
                        background: '#0c1a4e',
                        color: 'var(--yellow)',
                        border: 'none',
                        fontSize: '0.72rem',
                        letterSpacing: '0.08em',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'background 0.2s',
                        fontFamily: 'inherit',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--blue)')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#0c1a4e')}
                    >
                      SUBSCRIBE TO NEWSLETTER
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: emoji (hidden on mobile via CSS) */}
            <div className="footer-newsletter-emoji" style={{ fontSize: '5rem', flexShrink: 0, opacity: 0.85 }}>
              📋
            </div>
          </div>
        </div>

        {/* ══ SECTION 3 — Get In Touch + Socials ══ */}
        <div style={{ background: '#f4f6fb', padding: 'clamp(40px,6vw,64px) 0 clamp(36px,5vw,56px)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
              color: '#0c1a4e', marginBottom: '8px', letterSpacing: '-0.02em',
            }}>
              GET IN TOUCH
            </h2>
            <p style={{ fontSize: '0.93rem', color: 'rgba(12,26,78,0.55)', marginBottom: '28px' }}>
              But only if you&apos;re ready to turn clicks into clients.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(6px,1.5vw,12px)', flexWrap: 'wrap', maxWidth: '520px', margin: '0 auto' }}>
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 'clamp(42px,6vw,52px)', height: 'clamp(42px,6vw,52px)',
                    borderRadius: '50%', background: s.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 900, fontSize: 'clamp(0.9rem,1.6vw,1.1rem)',
                    textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    transition: 'transform 0.2s, box-shadow 0.2s', flexShrink: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.22)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)';   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 4 — Partners + Copyright ══ */}
        <div style={{ background: '#ffffff', borderTop: '2px solid rgba(26,86,219,0.08)' }}>
          <div className="container" style={{ padding: 'clamp(24px,4vw,32px) 0 clamp(16px,3vw,24px)' }}>

            {/* Partner badges */}
            <div className="footer-partner-row" style={{
              display: 'flex', flexWrap: 'wrap', gap: '10px',
              justifyContent: 'center', marginBottom: '20px',
            }}>
              {PARTNERS.map(p => (
                <div key={p} style={{
                  padding: 'clamp(6px,1vw,8px) clamp(10px,2vw,16px)',
                  border: '1.5px solid rgba(26,86,219,0.15)',
                  borderRadius: '8px',
                  fontSize: 'clamp(0.65rem,1.2vw,0.75rem)',
                  fontWeight: 700,
                  color: 'rgba(12,26,78,0.5)',
                  background: '#fff',
                  letterSpacing: '0.03em',
                  whiteSpace: 'nowrap',
                }}>
                  {p}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(26,86,219,0.1)', marginBottom: '18px' }} />

            {/* Copyright + legal */}
            <div style={{ textAlign: 'center', paddingBottom: 'clamp(16px,3vw,28px)' }}>
              <p style={{ fontSize: 'clamp(0.72rem,1.3vw,0.8rem)', color: 'rgba(12,26,78,0.42)', marginBottom: '10px' }}>
                Copyright © {new Date().getFullYear()} MAXIMEDIA LLC. All rights reserved.
              </p>
              <div className="footer-legal-row" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {[
                  { label: 'Terms of Service', href: '/terms'   },
                  { label: 'Privacy Policy',   href: '/privacy' },
                  { label: 'FAQ',              href: '/faq'     },
                  { label: 'Sitemap',          href: '/sitemap' },
                ].map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{ fontSize: 'clamp(0.72rem,1.3vw,0.8rem)', color: 'rgba(12,26,78,0.48)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(12,26,78,0.48)')}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

      </footer>
    </>
  )
}