'use client'

import { useState } from 'react'

const SERVICES_LIST = [
  'Social Media Strategy',
  'Social Selling',
  'Social Media Management',
  'Data Analysis & ROI Modeling',
  'Community Management',
  'Paid Social Advertising',
  'Influencer Marketing',
  'Content Production',
]

const BUDGET_OPTIONS = [
  'Under $1,000 / month',
  '$1,000 – $3,000 / month',
  '$3,000 – $5,000 / month',
  '$5,000 – $10,000 / month',
  '$10,000+ / month',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 16px',
  borderRadius: '8px',
  border: '1.5px solid rgba(26,86,219,0.2)',
  background: '#ffffff',
  color: '#0c1a4e',
  fontSize: '0.88rem',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
}

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div
      onClick={onChange}
      style={{
        width: '16px', height: '16px', borderRadius: '4px', flexShrink: 0,
        border: `2px solid ${checked ? 'var(--blue)' : 'rgba(26,86,219,0.3)'}`,
        background: checked ? 'var(--blue)' : '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.15s',
      }}
    >
      {checked && (
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  )
}

export default function WorkCTA() {
  const [checked,   setChecked]   = useState<string[]>([])
  const [agreed,    setAgreed]    = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const toggleService = (s: string) =>
    setChecked(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  return (
    <>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 64px;
          align-items: start;
        }
        .contact-name-row,
        .contact-email-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .contact-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 24px;
        }
        .contact-avatar {
          width: 220px;
          height: 220px;
          font-size: 7rem;
        }

        /* Tablet ≤ 768px */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-avatar {
            width: 160px;
            height: 160px;
            font-size: 5rem;
          }
        }

        /* Mobile ≤ 480px */
        @media (max-width: 480px) {
          .contact-name-row,
          .contact-email-row {
            grid-template-columns: 1fr;
          }
          .contact-services-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .contact-avatar {
            width: 120px;
            height: 120px;
            font-size: 3.5rem;
          }
          .contact-submit-btn {
            width: 100% !important;
            text-align: center;
            padding: 16px 24px !important;
          }
        }
      `}</style>

      <section
        id="contact"
        style={{
          background: '#d6eaf8',
          padding: 'clamp(56px,8vw,90px) 0 clamp(64px,9vw,100px)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(ellipse 70% 90% at 0% 50%, rgba(26,86,219,0.06) 0%, transparent 60%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-grid">

            {/* ── LEFT ── */}
            <div>
              <h2 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(1.5rem,4vw,2.4rem)', lineHeight: 1.08,
                marginBottom: '4px', color: 'var(--blue)',
              }}>
                HAVE QUESTIONS?
              </h2>
              <h2 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(1.5rem,4vw,2.4rem)', lineHeight: 1.08,
                color: 'var(--yellow)',
                textDecoration: 'underline', textDecorationColor: 'var(--yellow)',
                textDecorationThickness: '4px', textUnderlineOffset: '6px',
                marginBottom: '20px',
              }}>
                CONTACT US DIRECTLY
              </h2>

              <p style={{
                fontSize: 'clamp(0.84rem,2vw,0.92rem)', fontWeight: 700,
                color: 'var(--blue)', lineHeight: 1.65, marginBottom: '20px', maxWidth: 340,
              }}>
                We&apos;d love to hear about your organization&apos;s goals on social media. Get in touch with us today!
              </p>

              <a
                href="mailto:info@maximedia.com"
                className="font-display font-black uppercase"
                style={{
                  fontSize: 'clamp(0.75rem,2.5vw,1.4rem)',
                  color: 'rgba(26,86,219,0.35)',
                  letterSpacing: '0.02em', lineHeight: 1,
                  display: 'block', marginBottom: '36px',
                  wordBreak: 'break-all',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(26,86,219,0.35)')}
              >
                INFO@MAXIMEDIA.COM
              </a>

              {/* Avatar */}
              <div className="contact-avatar" style={{
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1a56db, #1341b5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 24px 60px rgba(26,86,219,0.3)',
              }}>
                👤
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div>
              {submitted ? (
                <div style={{
                  background: '#fff', borderRadius: '16px',
                  padding: 'clamp(32px,5vw,56px) clamp(20px,4vw,40px)',
                  textAlign: 'center', border: '2px solid rgba(26,86,219,0.2)',
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</div>
                  <h3 className="font-display font-black" style={{ fontSize: 'clamp(1.2rem,3vw,1.6rem)', color: 'var(--blue)', marginBottom: '12px' }}>
                    Thanks! We&apos;ll be in touch soon.
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem' }}>
                    We&apos;ve received your request and will respond within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                  {/* Name row */}
                  <div className="contact-name-row">
                    <input required type="text" placeholder="First name*" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e  => (e.target.style.borderColor = 'rgba(26,86,219,0.2)')} />
                    <input required type="text" placeholder="Last name*" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e  => (e.target.style.borderColor = 'rgba(26,86,219,0.2)')} />
                  </div>

                  {/* Email / Company row */}
                  <div className="contact-email-row">
                    <input required type="email" placeholder="Email*" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e  => (e.target.style.borderColor = 'rgba(26,86,219,0.2)')} />
                    <input required type="text" placeholder="Company name*" style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e  => (e.target.style.borderColor = 'rgba(26,86,219,0.2)')} />
                  </div>

                  {/* Phone */}
                  <input type="tel" placeholder="Phone: +1 (123) 123-4567 *" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                    onBlur={e  => (e.target.style.borderColor = 'rgba(26,86,219,0.2)')} />

                  {/* Budget */}
                  <div style={{ position: 'relative' }}>
                    <select
                      defaultValue=""
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', paddingRight: '44px' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={e  => (e.target.style.borderColor = 'rgba(26,86,219,0.2)')}
                    >
                      <option value="" disabled>Budget</option>
                      {BUDGET_OPTIONS.map(b => <option key={b}>{b}</option>)}
                    </select>
                    <div style={{
                      position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                      width: '24px', height: '24px', borderRadius: '6px',
                      background: 'var(--blue)', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', color: '#fff', fontSize: '0.7rem', pointerEvents: 'none',
                    }}>▾</div>
                  </div>

                  {/* Services */}
                  <div>
                    <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--blue)', marginBottom: '10px' }}>
                      Services requested
                    </p>
                    <div className="contact-services-grid">
                      {SERVICES_LIST.map(s => (
                        <label key={s} style={{
                          display: 'flex', alignItems: 'center', gap: '8px',
                          cursor: 'pointer', fontSize: '0.84rem',
                          color: 'var(--text-secondary)', userSelect: 'none',
                        }}>
                          <Checkbox checked={checked.includes(s)} onChange={() => toggleService(s)} />
                          <span onClick={() => toggleService(s)}>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Comments */}
                  <textarea
                    required
                    placeholder="Project related comments (Required) *"
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
                    onBlur={e  => (e.target.style.borderColor = 'rgba(26,86,219,0.2)')}
                  />

                  {/* Consent */}
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <Checkbox checked={agreed} onChange={() => setAgreed(!agreed)} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                      I agree to receive communications from MAXIMEDIA, including emails and SMS messages related to my
                      inquiry. Message and data rates may apply. You can unsubscribe at any time. Consent is not a
                      condition of purchase.
                    </span>
                  </label>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      className="font-display font-black uppercase contact-submit-btn"
                      style={{
                        padding: '18px 48px',
                        background: 'var(--yellow)', color: '#0c1a4e',
                        border: 'none', borderRadius: '10px',
                        fontSize: 'clamp(0.85rem,2vw,1rem)',
                        letterSpacing: '0.08em', cursor: 'pointer',
                        boxShadow: '0 8px 24px rgba(245,197,24,0.4)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--yellow-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--yellow)';      e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      SUBMIT
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}