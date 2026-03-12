import Link from 'next/link'

export default function StudiosCTA() {
  return (
    <>
      <style>{`
        .studios-cta-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          margin-top: clamp(24px,4vw,36px);
        }
        @media (max-width: 480px) {
          .studios-cta-btns a { flex: 1; justify-content: center; text-align: center; min-width: 160px; }
        }
      `}</style>

      <section style={{
        background: 'var(--blue)',
        padding: 'clamp(64px,9vw,104px) 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(245,197,24,0.08) 0%, transparent 60%)',
        }} />
        {/* Floating emojis */}
        <div aria-hidden style={{ position: 'absolute', top: '15%', left: '6%', fontSize: 'clamp(1.5rem,2.5vw,2rem)', opacity: 0.4, pointerEvents: 'none' }}>🎬</div>
        <div aria-hidden style={{ position: 'absolute', bottom: '18%', right: '6%', fontSize: 'clamp(1.5rem,2.5vw,2rem)', opacity: 0.4, pointerEvents: 'none' }}>📸</div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>
          <p className="font-display font-black uppercase" style={{
            fontSize: '0.75rem', letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.55)', marginBottom: '12px',
          }}>
            READY TO CREATE?
          </p>
          <h2 className="font-display font-black uppercase" style={{
            fontSize: 'clamp(1.8rem,5vw,3.4rem)',
            lineHeight: 1.0, letterSpacing: '-0.02em', color: '#fff',
            marginBottom: 'clamp(12px,2vw,18px)',
          }}>
            READY TO CREATE CONTENT THAT{' '}
            <span style={{
              color: 'var(--yellow)',
              textDecoration: 'underline', textDecorationColor: 'var(--yellow)',
              textDecorationThickness: '4px', textUnderlineOffset: '6px',
            }}>
              CONVERTS?
            </span>
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem,2vw,1rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
            Let&apos;s build a content production plan tailored to your brand, audience, and goals. No fluff — just results.
          </p>
          <div className="studios-cta-btns">
            <Link href="/contact" className="font-display font-black uppercase" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'clamp(13px,2vw,17px) clamp(24px,4vw,40px)',
              background: 'var(--yellow)', color: '#0c1a4e',
              borderRadius: '10px', fontSize: 'clamp(0.74rem,1.4vw,0.84rem)',
              letterSpacing: '0.1em', textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(245,197,24,0.4)',
              border: '2px solid #0c1a4e',
            }}>
              GET A CONTENT PROPOSAL →
            </Link>
            <Link href="/work" className="font-display font-black uppercase" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'clamp(13px,2vw,17px) clamp(24px,4vw,40px)',
              background: 'transparent', color: '#fff',
              border: '2px solid rgba(255,255,255,0.4)', borderRadius: '10px',
              fontSize: 'clamp(0.74rem,1.4vw,0.84rem)', letterSpacing: '0.1em',
              textDecoration: 'none',
            }}>
              SEE OUR WORK
            </Link>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
            <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
    </>
  )
}