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
    <section
      style={{
        background: '#ffffff',
        padding: '100px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background arc decoration (light blue arcs like screenshot) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(ellipse 80% 80% at 10% 50%, rgba(26,86,219,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 90% 50%, rgba(26,86,219,0.04) 0%, transparent 55%)
          `,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >

          {/* ── LEFT: Image ─────────────────────────────── */}
          <div style={{ position: 'relative' }}>
            {/* Concentric arc rings behind image */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: '-40px',
                backgroundImage: `
                  repeating-radial-gradient(
                    circle at 50% 50%,
                    transparent 0px,
                    transparent 58px,
                    rgba(26,86,219,0.07) 59px,
                    transparent 60px
                  )
                `,
                borderRadius: '50%',
                zIndex: 0,
              }}
            />

            {/* Image frame */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '18px',
                overflow: 'hidden',
                maxWidth: '420px',
                margin: '0 auto',
                boxShadow: '0 24px 64px rgba(26,86,219,0.14)',
                aspectRatio: '4/5',
                background: 'linear-gradient(135deg, #e8edf8, #d0daee)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Placeholder — swap <img src="..." /> when you have a real photo */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(145deg, #c8d5ee, #a8bde0)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '4rem' }}>👨‍💼</span>
                <span style={{ fontSize: '0.82rem', color: 'rgba(26,86,219,0.6)', fontWeight: 600 }}>
                  Replace with your photo
                </span>
              </div>
            </div>

            {/* Target emoji badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-10px',
                right: 'calc(50% - 200px)',
                fontSize: '3rem',
                zIndex: 2,
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
              }}
            >
              🎯
            </div>
          </div>

          {/* ── RIGHT: Text + Accordion + CTA ───────────── */}
          <div>
            {/* Title */}
            <h2
              className="font-display font-black uppercase"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                lineHeight: 1.1,
                color: 'var(--blue)',
                marginBottom: '36px',
                letterSpacing: '-0.01em',
              }}
            >
              UNDERSTANDING OUR<br />
              PARTNERSHIP MODELS<br />
              &amp; INVESTMENT
            </h2>

            {/* Accordion items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {ACCORDIONS.map((item, i) => {
                const isOpen = openIndex === i
                return (
                  <div
                    key={item.title}
                    style={{
                      border: `2px solid ${isOpen ? 'var(--blue)' : 'rgba(26,86,219,0.2)'}`,
                      borderRadius: '10px',
                      overflow: 'hidden',
                      transition: 'border-color 0.2s ease',
                      background: '#fff',
                    }}
                  >
                    {/* Header row */}
                    <button
                      onClick={() => toggle(i)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 18px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        gap: '12px',
                      }}
                    >
                      <span
                        className="font-display font-black"
                        style={{
                          fontSize: '0.78rem',
                          letterSpacing: '0.08em',
                          color: 'var(--blue)',
                          textAlign: 'left',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.title}
                      </span>

                      {/* + / − box */}
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          background: isOpen ? 'var(--blue)' : 'var(--blue-subtle)',
                          border: '1.5px solid var(--blue-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'background 0.2s ease',
                          color: isOpen ? '#fff' : 'var(--blue)',
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {isOpen ? '−' : '+'}
                      </div>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 18px 18px',
                          borderTop: '1px solid rgba(26,86,219,0.12)',
                        }}
                      >
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px' }}>
                          {item.items.map((point) => (
                            <li
                              key={point}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '10px',
                                fontSize: '0.87rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                              }}
                            >
                              <span
                                style={{
                                  width: '18px',
                                  height: '18px',
                                  borderRadius: '50%',
                                  background: 'var(--yellow)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.6rem',
                                  fontWeight: 900,
                                  color: '#0c1a4e',
                                  flexShrink: 0,
                                  marginTop: '2px',
                                }}
                              >
                                ✓
                              </span>
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

            {/* Dark CTA button — exact match to screenshot */}
            <Link
              href="#contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '18px 24px',
                background: '#0c1a4e',
                color: 'var(--yellow)',
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'all 0.22s ease',
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--blue)'
                e.currentTarget.style.borderColor = 'var(--blue)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0c1a4e'
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              REQUEST YOUR CUSTOM PROPOSAL
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}