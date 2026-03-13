'use client'

import { useState } from 'react'

export default function BlogNewsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <>
      <style>{`
        .bn-section {
          background: #f4f6fb;
          padding: clamp(56px,8vw,96px) 0;
          position: relative;
          overflow: hidden;
        }
        .bn-card {
          background: var(--blue);
          border-radius: 22px;
          padding: clamp(36px,5vw,64px) clamp(28px,5vw,72px);
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(26,86,219,0.28);
        }
        .bn-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 0%, rgba(245,197,24,0.1) 0%, transparent 55%);
          pointer-events: none;
        }
        .bn-form {
          display: flex;
          gap: 10px;
          max-width: 520px;
          margin: clamp(20px,3vw,32px) auto 0;
          position: relative;
          z-index: 1;
        }
        .bn-input {
          flex: 1;
          padding: clamp(12px,1.8vw,15px) clamp(16px,2vw,20px);
          border-radius: 9px;
          border: 2px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: clamp(0.85rem,1.4vw,0.95rem);
          outline: none;
          backdrop-filter: blur(8px);
          transition: border-color 0.18s;
        }
        .bn-input::placeholder { color: rgba(255,255,255,0.5); }
        .bn-input:focus { border-color: var(--yellow); }
        .bn-submit {
          padding: clamp(12px,1.8vw,15px) clamp(20px,3vw,32px);
          background: var(--yellow);
          color: #0c1a4e;
          border-radius: 9px;
          border: 2px solid #0c1a4e;
          box-shadow: 0 4px 0 #0c1a4e;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.68rem,1.1vw,0.78rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s;
        }
        .bn-submit:hover { transform: translateY(-2px); box-shadow: 0 6px 0 #0c1a4e; }
        .bn-success {
          background: rgba(255,255,255,0.15);
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 10px;
          padding: 14px 24px;
          color: #fff;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.9rem;
          max-width: 400px;
          margin: 20px auto 0;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 480px) {
          .bn-form { flex-direction: column; }
          .bn-submit { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="bn-section">
        <div className="container">
          <div className="bn-card">
            <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.5)', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
              NEWSLETTER
            </p>
            <h2
              className="font-display font-black uppercase"
              style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', lineHeight: 1.0, letterSpacing: '-0.02em', color: '#fff', maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}
            >
              JOIN 10,000+ MARKETERS GETTING AHEAD ON{' '}
              <span style={{ color: 'var(--yellow)', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textDecorationThickness: '4px', textUnderlineOffset: '6px' }}>
                SOCIAL
              </span>
            </h2>
            <p style={{ fontSize: 'clamp(0.88rem,1.5vw,1rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: '440px', margin: 'clamp(12px,2vw,18px) auto 0', position: 'relative', zIndex: 1 }}>
              Weekly insights, strategy breakdowns, and industry news — delivered to your inbox.
            </p>

            {submitted ? (
              <div className="bn-success">🎉 You&apos;re in! Check your inbox for a welcome email.</div>
            ) : (
              <form className="bn-form" onSubmit={handleSubmit}>
                <input
                  className="bn-input"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="bn-submit">SUBSCRIBE →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}