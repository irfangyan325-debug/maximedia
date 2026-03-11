import Link from 'next/link'

export default function AboutCTA() {
  return (
    <>
      <style>{`
        .about-cta-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          margin-top: 32px;
        }
        @media (max-width: 480px) {
          .about-cta-btns a { flex: 1; text-align: center; justify-content: center; min-width: 140px; }
        }
      `}</style>

      <section style={{
        background: 'var(--blue)',
        padding: 'clamp(56px,8vw,90px) 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Floating decorations */}
        <div aria-hidden style={{ position: 'absolute', top: '16px', left: '8%', fontSize: 'clamp(1.5rem,3vw,2.5rem)', opacity: 0.5, pointerEvents: 'none' }}>🎉</div>
        <div aria-hidden style={{ position: 'absolute', bottom: '16px', right: '8%', fontSize: 'clamp(1.5rem,3vw,2.5rem)', opacity: 0.5, pointerEvents: 'none' }}>🚀</div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>
          <p className="font-display font-black uppercase" style={{
            fontSize: '0.75rem', letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.6)', marginBottom: '12px',
          }}>
            JOIN OUR TEAM
          </p>

          <h2 className="font-display font-black uppercase" style={{
            fontSize: 'clamp(1.6rem,4vw,2.8rem)', lineHeight: 1.1,
            color: '#fff', letterSpacing: '-0.01em', marginBottom: '12px',
          }}>
            PASSIONATE ABOUT{' '}
            <span style={{
              color: 'var(--yellow)',
              textDecoration: 'underline', textDecorationColor: 'var(--yellow)',
              textDecorationThickness: '4px', textUnderlineOffset: '6px',
            }}>
              SOCIAL MEDIA?
            </span>
          </h2>

          <p style={{
            fontSize: 'clamp(0.9rem,2vw,1rem)',
            color: 'rgba(255,255,255,0.72)', lineHeight: 1.75,
          }}>
            We&apos;re always looking for talented strategists, creatives, and data nerds to join our growing team.
          </p>

          <div className="about-cta-btns">
            <Link href="/careers" className="font-display font-black uppercase" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'clamp(13px,2vw,16px) clamp(22px,3vw,36px)',
              background: 'var(--yellow)', color: '#0c1a4e',
              borderRadius: '10px', fontSize: 'clamp(0.75rem,1.5vw,0.85rem)',
              letterSpacing: '0.1em', textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(245,197,24,0.4)',
            }}>
              VIEW OPEN POSITIONS →
            </Link>
            <Link href="/contact" className="font-display font-black uppercase" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'clamp(13px,2vw,16px) clamp(22px,3vw,36px)',
              background: 'transparent', color: '#fff',
              border: '2px solid rgba(255,255,255,0.45)', borderRadius: '10px',
              fontSize: 'clamp(0.75rem,1.5vw,0.85rem)', letterSpacing: '0.1em',
              textDecoration: 'none',
            }}>
              GET IN TOUCH
            </Link>
          </div>
        </div>

        {/* Wave at bottom */}
        <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
            <path d="M0,25 C480,50 960,0 1440,25 L1440,50 L0,50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
    </>
  )
}