export default function WhyChooseSection() {
  return (
    <section style={{ background: '#ffffff', overflow: 'hidden', position: 'relative' }}>
      {/* ── BOTTOM: Heading + two cards ───────────────────── */}
      <div className="container" style={{ paddingTop: '56px', paddingBottom: '90px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
              lineHeight: 1.1,
              color: 'var(--blue)',
              maxWidth: '720px',
              margin: '0 auto 14px',
              letterSpacing: '-0.01em',
            }}
          >
            WHY CHOOSE MAXIMEDIA AS YOUR<br />
            SOCIAL MARKETING AGENCY{' '}
            <span style={{
              color: 'var(--yellow)',
              textDecoration: 'underline',
              textDecorationColor: 'var(--yellow)',
              textDecorationThickness: '4px',
              textUnderlineOffset: '6px',
            }}>
              PARTNER?
            </span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(12,26,78,0.55)', fontStyle: 'italic' }}>
            Decades of data. Millions in spend. Insights you can&apos;t Google.
          </p>
        </div>

        {/* Two cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            {
              title: 'OUR UNIQUE APPROACH: STRATEGY FIRST, RESULTS OBSESSED',
              items: [
                'Deep Dive Discovery & Goal Alignment',
                'Customized Strategies, Not Cookie-Cutter Plans',
                'Continuous Optimization Based on Data',
              ],
            },
            {
              title: 'YOUR DEDICATED TEAM OF SOCIAL MEDIA EXPERTS',
              items: [
                'Experienced Strategists, Creatives, and Ad Specialists',
                'Proactive Communication and Collaboration',
                'Dedicated Account Manager for Every Client',
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: '#ffffff',
                border: '2px solid rgba(26,86,219,0.18)',
                borderRadius: '16px',
                padding: '28px 28px 24px',
                boxShadow: '0 4px 20px rgba(26,86,219,0.07)',
              }}
            >
              <h3
                className="font-display font-black uppercase"
                style={{
                  fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
                  lineHeight: 1.25,
                  color: 'var(--blue)',
                  marginBottom: '18px',
                  letterSpacing: '-0.01em',
                }}
              >
                {card.title}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {card.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.88rem',
                      color: 'rgba(12,26,78,0.65)',
                      lineHeight: 1.55,
                    }}
                  >
                    <span style={{
                      width: '6px', height: '6px',
                      borderRadius: '50%',
                      background: 'var(--blue)',
                      flexShrink: 0,
                      marginTop: '7px',
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}