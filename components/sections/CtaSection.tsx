'use client'

import Link from 'next/link'

export default function CtaSection() {
  return (
    <section
      style={{
        background: 'var(--blue)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '90px',
        paddingBottom: '0',
      }}
    >
      {/* ── Floating 3D emoji decorations ─────────────── */}
      {/* Top-center star */}
      <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', fontSize: '5rem', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.25))', pointerEvents: 'none', zIndex: 2 }}>
        ⭐
      </div>
      {/* Top-right heart */}
      <div style={{ position: 'absolute', top: '20px', right: '8%', fontSize: '4rem', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.2))', pointerEvents: 'none', zIndex: 2 }}>
        ❤️
      </div>
      {/* Left heart notification */}
      <div style={{ position: 'absolute', top: '38%', left: '5%', fontSize: '4.5rem', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.2))', pointerEvents: 'none', zIndex: 2 }}>
        💌
      </div>
      {/* Right person avatar */}
      <div style={{ position: 'absolute', top: '30%', right: '4%', fontSize: '5rem', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.2))', pointerEvents: 'none', zIndex: 2 }}>
        👤
      </div>

      {/* ── Main content ──────────────────────────────── */}
      <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>

        {/* Headline */}
        <h2
          className="font-display font-black uppercase"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            lineHeight: 1.08,
            color: '#ffffff',
            marginBottom: '48px',
            maxWidth: '820px',
            margin: '0 auto 48px',
            letterSpacing: '-0.01em',
          }}
        >
          READY TO{' '}
          <span style={{
            color: 'var(--yellow)',
            textDecoration: 'underline',
            textDecorationColor: 'var(--yellow)',
            textDecorationThickness: '5px',
            textUnderlineOffset: '6px',
          }}>
            ELEVATE
          </span>
          {' '}YOUR SOCIAL{' '}
          <br className="hidden sm:block" />
          MEDIA MARKETING?
        </h2>

        {/* Two feature cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 380px))',
            gap: '20px',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {[
            {
              title: "LET'S DISCUSS YOUR SOCIAL MEDIA GOALS",
              sub: 'Schedule a Free Consultation Call',
            },
            {
              title: 'GET A PERSONALIZED SOCIAL MARKETING PROPOSAL',
              sub: 'Tell Us About Your Business Needs',
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(255,255,255,0.6)',
                borderRadius: '16px',
                padding: '28px 28px 24px',
                textAlign: 'left',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
              <h3
                className="font-display font-black uppercase"
                style={{
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                  lineHeight: 1.2,
                  color: 'var(--blue)',
                  marginBottom: '14px',
                  letterSpacing: '-0.01em',
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'rgba(12,26,78,0.65)', lineHeight: 1.5 }}>
                {card.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Yellow CTA button */}
        <div style={{ paddingBottom: '56px' }}>
          <Link
            href="/contact"
            className="font-display font-black uppercase"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '20px 52px',
              background: 'var(--yellow)',
              color: '#0c1a4e',
              borderRadius: '10px',
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(245,197,24,0.5)',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--yellow-dark)'
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 14px 36px rgba(245,197,24,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--yellow)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(245,197,24,0.5)'
            }}
          >
            BOOK YOUR STRATEGY CALL
          </Link>
        </div>
      </div>

      {/* ── Wave bottom edge ──────────────────────────── */}
      <div style={{ lineHeight: 0, display: 'block', marginTop: '-2px' }}>
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  )
}
