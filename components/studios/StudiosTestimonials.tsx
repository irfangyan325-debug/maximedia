const TESTIMONIALS = [
  {
    quote: "Their project management is great. We have a platform where we share all our ideas and they're prompt and responsive. Everything is highly organized. In general, everything runs smoothly. Our teams get along well, and their communication skills are great.",
    name: 'Julia Grupa',
    company: 'Fras-le',
    avatar: '👩‍💼',
    avatarBg: 'linear-gradient(135deg,#f5e8c8,#e8d0a0)',
  },
  {
    quote: "We've seen INSANE growth across all of our sites and platforms — up to 3000% increase in impressions. The content they produce is world-class and the team actually cares about our results, not just delivering deliverables.",
    name: 'Amanda Hammond',
    company: 'NPS',
    avatar: '👩‍🎤',
    avatarBg: 'linear-gradient(135deg,#c8e8d8,#a0d0b8)',
  },
  {
    quote: "MAXIMEDIA completely transformed how we approach content. The production quality is outstanding and our engagement rates have skyrocketed since we started working together. They feel like an in-house team.",
    name: 'Jordanne W.',
    company: 'AEM',
    avatar: '👨‍💼',
    avatarBg: 'linear-gradient(135deg,#ddd4ff,#b8a0e8)',
  },
]

export default function StudiosTestimonials() {
  return (
    <>
      <style>{`
        .studios-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: clamp(32px,5vw,52px);
        }
        @media (max-width: 860px) {
          .studios-testimonials-grid { grid-template-columns: 1fr; gap: 14px; max-width: 520px; margin-left: auto; margin-right: auto; }
        }
        @media (min-width: 541px) and (max-width: 860px) {
          .studios-testimonials-grid { grid-template-columns: 1fr 1fr; max-width: 100%; }
        }
      `}</style>

      <section style={{ background: '#ffffff', padding: 'clamp(64px,9vw,104px) 0' }}>
        <div className="container">

          {/* Heading */}
          <div style={{ textAlign: 'center' }}>
            <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--blue)', marginBottom: '8px' }}>
              TESTIMONIALS
            </p>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.6rem,4vw,2.8rem)', color: 'var(--blue)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>
              CLIENTS TALK{' '}
              <span style={{ color: 'var(--yellow)', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textDecorationThickness: '4px', textUnderlineOffset: '5px' }}>
                ABOUT US
              </span>
            </h2>
          </div>

          <div className="studios-testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{
                background: '#f2f5fc',
                border: '1.5px solid rgba(26,86,219,0.1)',
                borderRadius: '18px',
                padding: 'clamp(22px,3vw,32px)',
                display: 'flex', flexDirection: 'column', gap: '16px',
                boxShadow: '0 4px 16px rgba(26,86,219,0.06)',
              }}>
                {/* Yellow quote mark */}
                <div style={{ fontSize: '2.4rem', color: 'var(--yellow)', lineHeight: 1, fontFamily: 'Georgia, serif', fontWeight: 900 }}>&ldquo;</div>

                <p style={{ fontSize: 'clamp(0.84rem,1.3vw,0.93rem)', color: 'rgba(12,26,78,0.7)', lineHeight: 1.8, flex: 1 }}>
                  {t.quote}
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1.5px solid rgba(26,86,219,0.1)', paddingTop: '14px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: t.avatarBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem', flexShrink: 0,
                    border: '2px solid rgba(26,86,219,0.1)',
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-display font-black uppercase" style={{ fontSize: '0.8rem', color: 'var(--blue)', letterSpacing: '0.02em', lineHeight: 1.2 }}>{t.name}</p>
                    <p style={{ fontSize: '0.72rem', color: 'rgba(12,26,78,0.5)', marginTop: '2px', fontWeight: 600 }}>{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}