const INCLUDED = [
  { icon: '🎭', title: 'Creative Direction',  desc: 'Don\'t know where to start? Let our on-site Creative Director guide the way.' },
  { icon: '✂️', title: 'Pro Editing',          desc: 'All-inclusive editing and production with up to 3 rounds of revisions.' },
  { icon: '🎵', title: 'Audio & SFX',          desc: 'We source and provide all background audio and SFX needed. All rights included.' },
  { icon: '🌟', title: 'Talent',               desc: 'Our diverse network of talent includes that perfect match for your brand.' },
  { icon: '💄', title: 'Hair & Makeup',        desc: 'Hair & makeup customized to follow your brand\'s vision.' },
  { icon: '🎪', title: 'Styled Set',            desc: 'Each set is styled with hand-picked props to make your brand seen loud and clear.' },
]

export default function StudiosVideography() {
  return (
    <>
      <style>{`
        .sv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px,5vw,72px);
          align-items: center;
          margin-bottom: clamp(56px,8vw,88px);
        }
        .sv-included-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 860px) {
          .sv-grid { grid-template-columns: 1fr; gap: 32px; }
          .sv-included-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (max-width: 480px) {
          .sv-included-grid { grid-template-columns: 1fr; gap: 10px; }
        }
      `}</style>

      <section style={{ background: '#ffffff', padding: 'clamp(64px,9vw,104px) 0' }}>
        <div className="container">

          {/* ── Top: Videography intro ── */}
          <div className="sv-grid">
            {/* Left: visual placeholder / phone mockup */}
            <div style={{
              background: 'linear-gradient(135deg,#c8d8f5 0%,#dceeff 100%)',
              borderRadius: 'clamp(18px,3vw,28px)',
              aspectRatio: '4/5',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 'clamp(4rem,8vw,7rem)',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 20px 56px rgba(26,86,219,0.14)',
              border: '2px solid rgba(26,86,219,0.1)',
            }}>
              <span style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.12))' }}>🎬</span>
              {/* Decorative inner cards */}
              <div style={{
                position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
                background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
                borderRadius: '12px', padding: '10px 18px', whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(26,86,219,0.15)',
              }}>
                <p className="font-display font-black uppercase" style={{ fontSize: '0.72rem', color: 'var(--blue)', letterSpacing: '0.06em' }}>MICRO SOCIAL CONTENT</p>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--yellow)', marginBottom: '10px' }}>
                WHAT WE OFFER
              </p>
              <h2 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--blue)',
                lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 'clamp(14px,2vw,22px)',
              }}>
                VIDEOGRAPHY
              </h2>
              <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.02rem)', color: 'rgba(12,26,78,0.65)', lineHeight: 1.82, marginBottom: '18px' }}>
                Micro social content for Instagram, YouTube, TikTok, and even your website. We do it all from start to finish, so you can focus on what matters most: growing your brand and revenue.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['TikTok', 'Reels', 'YouTube Shorts', 'Website Video'].map(tag => (
                  <span key={tag} className="font-display font-black uppercase" style={{
                    fontSize: '0.68rem', letterSpacing: '0.08em',
                    padding: '5px 12px', borderRadius: '100px',
                    background: 'rgba(26,86,219,0.08)', color: 'var(--blue)',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── What We Do: included features ── */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(28px,4vw,44px)' }}>
              <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--blue)', marginBottom: '8px' }}>
                EVERY PACKAGE INCLUDES
              </p>
              <h2 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', color: 'var(--blue)',
                lineHeight: 1.05, letterSpacing: '-0.01em',
              }}>
                WHAT WE{' '}
                <span style={{ color: 'var(--yellow)', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textDecorationThickness: '4px', textUnderlineOffset: '5px' }}>DO</span>
              </h2>
              <p style={{ fontSize: 'clamp(0.88rem,1.5vw,0.97rem)', color: 'rgba(12,26,78,0.55)', marginTop: '10px' }}>
                We set the bar high. All packages include the following:
              </p>
            </div>

            <div className="sv-included-grid">
              {INCLUDED.map(item => (
                <div key={item.title} style={{
                  background: '#f2f5fc',
                  border: '1.5px solid rgba(26,86,219,0.1)',
                  borderRadius: '16px',
                  padding: 'clamp(18px,2.5vw,26px)',
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '13px',
                    background: '#fff',
                    border: '1.5px solid rgba(26,86,219,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', marginBottom: '12px',
                    boxShadow: '0 4px 12px rgba(26,86,219,0.08)',
                  }}>
                    {item.icon}
                  </div>
                  <h3 className="font-display font-black uppercase" style={{ fontSize: 'clamp(0.78rem,1.2vw,0.88rem)', color: 'var(--blue)', marginBottom: '6px', letterSpacing: '0.02em' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(0.78rem,1.1vw,0.84rem)', color: 'rgba(12,26,78,0.6)', lineHeight: 1.72 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}