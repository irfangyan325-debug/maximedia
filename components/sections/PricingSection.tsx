'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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

        /* Accordion card — matching screenshot: light blue bg, light blue border, offset shadow */
        .acc-item {
          border: 2px solid #b8dff0;
          border-radius: 14px;
          overflow: hidden;
          background: #d6eaf8;
          position: relative;
          box-shadow: 5px 5px 0px #b8dff0;
          transition: box-shadow 0.2s ease;
        }
        .acc-item-open {
          border-color: #7ec8e3;
          box-shadow: 5px 5px 0px #a0cce8;
        }

        /* Blue tab notch on right edge */
        .acc-item::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -2px;
          transform: translateY(-50%);
          width: 6px;
          height: clamp(36px,5vw,56px);
          background: var(--blue);
          border-radius: 4px 0 0 4px;
        }

        /* Toggle button — plain blue square */
        .acc-toggle-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          flex-shrink: 0;
          background: var(--blue);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .acc-toggle-btn:hover { background: #1341b5; }

        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr; gap: 40px; }
          .pricing-image-col { max-width: 360px; margin: 0 auto; width: 100%; }
        }
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
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pricing-grid">

            {/* ── LEFT: Real photo ── */}
            <div className="pricing-image-col" style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '20px',
                overflow: 'hidden',
                maxWidth: '420px',
                margin: '0 auto',
                aspectRatio: '4/5',
                /* Matching card border style */
                border: '2px solid #b8dff0',
                boxShadow: '6px 6px 0px #b8dff0, 0 16px 48px rgba(26,86,219,0.12)',
              }}>
                <Image
                  src="/images/pricing-photo.png"
                  alt="Our team at work"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width:900px) 80vw, 42vw"
                />
              </div>

              {/* Target badge — bottom corner, matching screenshot */}
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                right: 'calc(50% - 200px)',
                fontSize: '3rem',
                zIndex: 2,
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
              }}>
                🎯
              </div>
            </div>

            {/* ── RIGHT: Text + Accordion + CTA ── */}
            <div>
              <h2 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(1.5rem,3.5vw,2.6rem)',
                lineHeight: 1.1,
                color: 'var(--blue)',
                marginBottom: 'clamp(24px,4vw,36px)',
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
                    <div key={item.title} className={`acc-item${isOpen ? ' acc-item-open' : ''}`}>

                      {/* Header button */}
                      <button
                        onClick={() => toggle(i)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: 'clamp(14px,2vw,18px) clamp(16px,2.5vw,20px)',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          gap: '12px',
                        }}
                      >
                        <span className="font-display font-black" style={{
                          fontSize: 'clamp(0.72rem,1.3vw,0.82rem)',
                          letterSpacing: '0.08em',
                          color: 'var(--blue)',
                          textAlign: 'left',
                          textTransform: 'uppercase',
                        }}>
                          {item.title}
                        </span>
                        <div className="acc-toggle-btn">
                          {isOpen ? '−' : '+'}
                        </div>
                      </button>

                      {/* Expanded content */}
                      {isOpen && (
                        <div style={{
                          padding: '0 clamp(16px,2.5vw,20px) clamp(16px,2.5vw,20px)',
                          borderTop: '1.5px solid rgba(26,86,219,0.15)',
                        }}>
                          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
                            {item.items.map(point => (
                              <li key={point} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '10px',
                                fontSize: 'clamp(0.82rem,1.5vw,0.87rem)',
                                color: 'rgba(12,26,78,0.72)',
                                lineHeight: 1.6,
                              }}>
                                {/* Blue dot bullet — matching screenshot */}
                                <span style={{
                                  width: '7px',
                                  height: '7px',
                                  borderRadius: '50%',
                                  background: 'var(--blue)',
                                  flexShrink: 0,
                                  marginTop: '6px',
                                }} />
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

              {/* CTA button */}
              <Link
                href="#contact"
                className="font-display font-black uppercase"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: 'clamp(14px,2.5vw,18px) 24px',
                  background: '#0c1a4e',
                  color: 'var(--yellow)',
                  fontSize: 'clamp(0.75rem,1.5vw,0.82rem)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  border: '2px solid #0c1a4e',
                  boxShadow: '0 4px 0 rgba(0,0,0,0.3)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.borderColor = 'var(--blue)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0c1a4e'; e.currentTarget.style.borderColor = '#0c1a4e' }}
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