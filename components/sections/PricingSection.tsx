'use client'

import { useState } from 'react'
import Link from 'next/link'

const ACCORDIONS = [
  {
    title: 'FLEXIBLE SOLUTIONS TAILORED TO YOUR NEEDS',
    items: [
      'Custom Packages Based on Scope and Goals',
      'Retainer, Project-Based, and Consulting Options',
      'Scalable Engagements for Startups to Enterprises',
    ],
  },
  {
    title: 'TRANSPARENT PRICING FOCUSED ON VALUE',
    items: [
      'Clear Deliverables with No Hidden Fees',
      'Scalable Plans That Grow With Your Business',
      'ROI-Focused Reporting Every Month',
    ],
  },
]

export default function PricingSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .pricing-image-col { display: block; }

        /* Tablet ≤ 900px */
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .pricing-image-col {
            max-width: 360px;
            margin: 0 auto;
            width: 100%;
          }
        }

        /* Mobile ≤ 520px */
        @media (max-width: 520px) {
          .pricing-image-col { display: none; }
          .pricing-grid { gap: 0; }
        }
      `}</style>

      <section style={{
        background: '#ffffff',
        padding: 'clamp(60px,8vw,100px) 0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Background arcs */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(ellipse 80% 80% at 10% 50%, rgba(26,86,219,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 90% 50%, rgba(26,86,219,0.04) 0%, transparent 55%)
          `,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pricing-grid">

            {/* ── LEFT: Image (hidden on mobile) ── */}
            <div className="pricing-image-col" style={{ position: 'relative' }}>
              {/* Concentric ring decoration */}
              <div aria-hidden style={{
                position: 'absolute', inset: '-40px',
                backgroundImage: `repeating-radial-gradient(
                  circle at 50% 50%,
                  transparent 0px, transparent 58px,
                  rgba(26,86,219,0.07) 59px, transparent 60px
                )`,
                borderRadius: '50%', zIndex: 0,
              }} />

              {/* Image frame */}
              <div style={{
                position: 'relative', zIndex: 1,
                borderRadius: '18px', overflow: 'hidden',
                maxWidth: '420px', margin: '0 auto',
                boxShadow: '0 24px 64px rgba(26,86,219,0.14)',
                aspectRatio: '4/5',
                background: 'linear-gradient(135deg, #e8edf8, #d0daee)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(145deg, #c8d5ee, #a8bde0)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: '12px',
                }}>
                  <span style={{ fontSize: 'clamp(3rem,6vw,4rem)' }}>👨‍💼</span>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(26,86,219,0.6)', fontWeight: 600 }}>
                    Replace with your photo
                  </span>
                </div>
              </div>

              {/* Target badge */}
              <div style={{
                position: 'absolute', bottom: '-10px',
                right: 'calc(50% - 200px)', fontSize: '3rem', zIndex: 2,
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
              }}>🎯</div>
            </div>

            {/* ── RIGHT: Text + Accordion + CTA ── */}
            <div>
              <h2 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(1.5rem,3.5vw,2.6rem)', lineHeight: 1.1,
                color: 'var(--blue)', marginBottom: 'clamp(24px,4vw,36px)',
                letterSpacing: '-0.01em',
              }}>
                UNDERSTANDING OUR<br />
                PARTNERSHIP MODELS<br />
                &amp; INVESTMENT
              </h2>

              {/* Accordions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {ACCORDIONS.map((item, i) => {
                  const isOpen = openIndex === i
                  return (
                    <div key={item.title} style={{
                      border: `2px solid ${isOpen ? 'var(--blue)' : 'rgba(26,86,219,0.2)'}`,
                      borderRadius: '10px', overflow: 'hidden',
                      transition: 'border-color 0.2s ease', background: '#fff',
                    }}>
                      <button
                        onClick={() => toggle(i)}
                        style={{
                          width: '100%', display: 'flex', alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: 'clamp(12px,2vw,16px) clamp(14px,2.5vw,18px)',
                          background: 'transparent', border: 'none', cursor: 'pointer', gap: '12px',
                        }}
                      >
                        <span className="font-display font-black" style={{
                          fontSize: 'clamp(0.7rem,1.3vw,0.78rem)',
                          letterSpacing: '0.08em', color: 'var(--blue)',
                          textAlign: 'left', textTransform: 'uppercase',
                        }}>
                          {item.title}
                        </span>
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                          background: isOpen ? 'var(--blue)' : 'var(--blue-subtle)',
                          border: '1.5px solid var(--blue-border)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'background 0.2s ease',
                          color: isOpen ? '#fff' : 'var(--blue)',
                          fontSize: '1.2rem', fontWeight: 700, lineHeight: 1,
                        }}>
                          {isOpen ? '−' : '+'}
                        </div>
                      </button>

                      {isOpen && (
                        <div style={{ padding: '0 clamp(14px,2.5vw,18px) clamp(14px,2.5vw,18px)', borderTop: '1px solid rgba(26,86,219,0.12)' }}>
                          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px' }}>
                            {item.items.map(point => (
                              <li key={point} style={{
                                display: 'flex', alignItems: 'flex-start', gap: '10px',
                                fontSize: 'clamp(0.82rem,1.5vw,0.87rem)',
                                color: 'var(--text-secondary)', lineHeight: 1.6,
                              }}>
                                <span style={{
                                  width: '18px', height: '18px', borderRadius: '50%',
                                  background: 'var(--yellow)', flexShrink: 0,
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  fontSize: '0.6rem', fontWeight: 900, color: '#0c1a4e', marginTop: '2px',
                                }}>✓</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '100%',
                  padding: 'clamp(14px,2.5vw,18px) 24px',
                  background: '#0c1a4e', color: 'var(--yellow)',
                  fontFamily: 'var(--font-display)', fontWeight: 900,
                  fontSize: 'clamp(0.75rem,1.5vw,0.82rem)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  borderRadius: '10px', textDecoration: 'none',
                  transition: 'all 0.22s ease', border: '2px solid transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.borderColor = 'var(--blue)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0c1a4e';     e.currentTarget.style.borderColor = 'transparent' }}
              >
                REQUEST YOUR CUSTOM PROPOSAL
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}