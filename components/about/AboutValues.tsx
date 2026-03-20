const VALUES = [
  { icon: '🎯', title: 'Results Above All',    desc: 'Every decision is anchored in your business outcomes — not vanity metrics.' },
  { icon: '💡', title: 'Strategy First',        desc: 'We never execute without a solid strategy. Planning is the foundation of every campaign.' },
  { icon: '🤝', title: 'True Partnership',      desc: 'We embed ourselves in your team, acting as an extension of your own marketing department.' },
  { icon: '📊', title: 'Data-Driven',           desc: 'Our recommendations are backed by real numbers — not gut feelings.' },
  { icon: '🚀', title: 'Relentless Innovation', desc: 'Social media moves fast. We stay ahead of every algorithm change and platform launch.' },
  { icon: '🌟', title: 'Creative Excellence',   desc: 'Thumb-stopping content requires true creative talent — and we have the best in the business.' },
]

export default function AboutValues() {
  return (
    <>
      <style>{`
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 900px) {
          .about-values-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
        @media (max-width: 480px) {
          .about-values-grid { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>

      <section style={{ background: '#f2f5fc', padding: 'clamp(56px,8vw,90px) 0' }}>
        <div className="container">

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px,5vw,52px)' }}>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', color: 'var(--blue)', lineHeight: 1.1, letterSpacing: '-0.01em',
            }}>
              OUR CORE{' '}
              <span style={{
                color: 'var(--yellow)',
                textDecoration: 'underline', textDecorationColor: 'var(--yellow)',
                textDecorationThickness: '4px', textUnderlineOffset: '6px',
              }}>VALUES</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="about-values-grid">
            {VALUES.map(v => (
              <div key={v.title} style={{
                background: '#fff',
                border: '1.5px solid rgba(26,86,219,0.1)',
                borderRadius: '16px',
                padding: 'clamp(20px,3vw,28px)',
                boxShadow: '0 4px 16px rgba(26,86,219,0.06)',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: 'rgba(26,86,219,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', marginBottom: '16px',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                }}>
                  {v.icon}
                </div>
                <h3 className="font-display font-black uppercase" style={{
                  fontSize: 'clamp(0.82rem,1.3vw,0.92rem)', color: 'var(--blue)',
                  letterSpacing: '0.02em', marginBottom: '10px', lineHeight: 1.3,
                }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 'clamp(0.82rem,1.2vw,0.88rem)', color: 'rgba(12,26,78,0.62)', lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}