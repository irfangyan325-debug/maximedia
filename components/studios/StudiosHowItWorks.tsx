import Link from 'next/link'

const STEPS = [
  {
    num: '01',
    title: 'Select a Package',
    desc: 'We\'ve got flexible options to choose from, with a full selection of add-ons available to meet your specific needs and budget.',
    icon: '📦',
  },
  {
    num: '02',
    title: 'Add a Shoot',
    desc: 'Ship us your product and let us create some magic for your feed! Our studio team handles everything from setup to final delivery.',
    icon: '🎬',
  },
  {
    num: '03',
    title: 'Pick Your Jaw Up',
    desc: 'Post that new content. Warning: Results sure to wow — so be prepared! Jaw-dropping quality that converts scrollers into buyers.',
    icon: '🚀',
  },
]

export default function StudiosHowItWorks() {
  return (
    <>
      <style>{`
        .hiw-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: clamp(32px,5vw,52px);
        }
        .hiw-connector {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: clamp(36px,5vw,52px);
        }
        @media (max-width: 768px) {
          .hiw-steps-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .hiw-connector { display: none; }
          .hiw-step-card { display: grid; grid-template-columns: auto 1fr; gap: 16px; text-align: left !important; }
          .hiw-step-num-wrap { display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>

      <section style={{ background: '#c9e8f5', padding: 'clamp(64px,9vw,104px) 0', overflow: 'hidden', position: 'relative' }}>
        {/* Decorative arc */}
        <div aria-hidden style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '320px', height: '320px', borderRadius: '50%',
          border: '2px dashed rgba(26,86,219,0.15)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Heading */}
          <div style={{ textAlign: 'center' }}>
            <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--blue)', marginBottom: '8px' }}>
              THE PROCESS
            </p>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.6rem,4vw,2.8rem)', color: 'var(--blue)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>
              HOW IT{' '}
              <span style={{ color: 'var(--yellow)', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textDecorationThickness: '4px', textUnderlineOffset: '5px' }}>
                WORKS
              </span>
            </h2>
            <p style={{ fontSize: 'clamp(0.88rem,1.5vw,1rem)', color: 'rgba(12,26,78,0.62)', marginTop: '12px', maxWidth: '560px', margin: '12px auto 0' }}>
              Your brand deserves the best in-studio and on-site product and lifestyle photography available in the industry — and we deliver.
            </p>
          </div>

          {/* Steps */}
          <div className="hiw-steps-grid">
            {STEPS.map((step, i) => (
              <div key={step.num} className="hiw-step-card" style={{
                background: '#fff',
                borderRadius: '20px',
                padding: 'clamp(24px,3.5vw,36px)',
                textAlign: 'center',
                border: '1.5px solid rgba(26,86,219,0.1)',
                boxShadow: '0 8px 32px rgba(26,86,219,0.08)',
                position: 'relative',
              }}>
                {/* Connector arrow between steps (desktop only) */}
                {i < STEPS.length - 1 && (
                  <div aria-hidden style={{
                    position: 'absolute', top: '50%', right: '-22px',
                    transform: 'translateY(-50%)',
                    width: '24px', height: '24px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', color: 'var(--blue)', zIndex: 2,
                    fontWeight: 900,
                  }} className="hiw-connector">→</div>
                )}

                {/* Step number */}
                <div className="hiw-step-num-wrap">
                  <div style={{
                    width: 'clamp(44px,6vw,56px)', height: 'clamp(44px,6vw,56px)',
                    borderRadius: '50%',
                    background: 'var(--blue)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    <span className="font-display font-black" style={{ fontSize: '1rem', color: '#fff', letterSpacing: '0.04em' }}>
                      {step.num}
                    </span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', marginBottom: '10px' }}>{step.icon}</div>
                  <h3 className="font-display font-black uppercase" style={{
                    fontSize: 'clamp(0.88rem,1.4vw,1rem)', color: 'var(--blue)',
                    letterSpacing: '0.02em', marginBottom: '10px',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(0.82rem,1.3vw,0.9rem)', color: 'rgba(12,26,78,0.62)', lineHeight: 1.78 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below steps */}
          <div style={{ textAlign: 'center', marginTop: 'clamp(36px,5vw,52px)' }}>
            <Link href="/contact" className="font-display font-black uppercase" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'clamp(14px,2vw,18px) clamp(28px,4vw,48px)',
              background: 'var(--blue)', color: '#fff', borderRadius: '10px',
              fontSize: 'clamp(0.75rem,1.4vw,0.85rem)', letterSpacing: '0.1em',
              textDecoration: 'none', boxShadow: '0 8px 28px rgba(26,86,219,0.28)',
            }}>
              BOOK MY SHOOT →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}