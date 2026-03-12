const ITEMS = [
  {
    title: 'CREATIVE DIRECTION',
    desc: "Don't know where to start? Let our on-site Creative Director guide the way.",
    icon: '🎨',
  },
  {
    title: 'PRO EDITING',
    desc: 'All inclusive editing and production with up to 3 rounds of revisions.',
    icon: '✏️',
  },
  {
    title: 'AUDIO & SFX',
    desc: 'We source and provide all background audio and sfx needed to make your video shine. All rights included.',
    icon: '🔊',
  },
  {
    title: 'TALENT',
    desc: 'We work with the best of the best. Our diverse network of talent includes that perfect match for your brand.',
    icon: '🎤',
  },
  {
    title: 'HAIR & MAKEUP',
    desc: "Hair & makeup can always be customized to follow your brand's vision.",
    icon: '💄',
  },
  {
    title: 'STYLED SET',
    desc: 'Each set is styled with hand-picked props and dressing to make sure your brand is seen loud and clear.',
    icon: '🪮',
  },
]

export default function StudiosHowItWorks() {
  return (
    <>
      <style>{`
        .swdo-section {
          background: #ffffff;
          padding: clamp(64px,9vw,104px) 0;
          position: relative;
          overflow: hidden;
        }
        .swdo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px,2vw,22px);
          margin-top: clamp(36px,5vw,56px);
        }
        /* Card — light blue border + shadow matching screenshot */
        .swdo-card {
          background: #ffffff;
          border: 1.5px solid #b8dff0;
          border-radius: 16px;
          padding: clamp(20px,3vw,32px) clamp(20px,2.5vw,28px) clamp(16px,2.5vw,24px);
          box-shadow: 4px 4px 0px #c9e8f5, 0 2px 12px rgba(26,86,219,0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: clamp(200px,26vw,280px);
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .swdo-card:hover {
          transform: translateY(-4px);
          box-shadow: 4px 8px 0px #b8dff0, 0 8px 28px rgba(26,86,219,0.1);
        }
        .swdo-card-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-style: italic;
          font-size: clamp(0.92rem,1.6vw,1.1rem);
          color: var(--blue);
          letter-spacing: 0.01em;
          line-height: 1.2;
          margin-bottom: clamp(8px,1.5vw,14px);
          text-transform: uppercase;
        }
        .swdo-card-desc {
          font-size: clamp(0.82rem,1.3vw,0.92rem);
          color: rgba(12,26,78,0.68);
          line-height: 1.75;
          flex: 1;
        }
        /* Big 3D icon bottom-right */
        .swdo-card-icon {
          font-size: clamp(2.8rem,5vw,4rem);
          line-height: 1;
          text-align: right;
          margin-top: clamp(12px,2vw,20px);
          filter: drop-shadow(2px 4px 8px rgba(0,0,0,0.15));
          display: block;
        }
        /* Bottom paragraph */
        .swdo-bottom-text {
          text-align: center;
          font-size: clamp(0.84rem,1.4vw,0.96rem);
          color: rgba(12,26,78,0.65);
          line-height: 1.82;
          max-width: 860px;
          margin: clamp(40px,6vw,64px) auto 0;
        }

        @media (max-width: 860px) {
          .swdo-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
        @media (max-width: 480px) {
          .swdo-grid { grid-template-columns: 1fr; gap: 12px; }
          .swdo-card:hover { transform: none; }
        }
      `}</style>

      <section className="swdo-section">
        <div className="container">

          {/* Heading */}
          <div style={{ textAlign: 'center' }}>
            <h2
              className="font-display font-black uppercase"
              style={{
                fontSize: 'clamp(2.2rem,6vw,4rem)',
                lineHeight: 1.0,
                color: 'var(--blue)',
                letterSpacing: '-0.02em',
                marginBottom: 'clamp(14px,2vw,22px)',
              }}
            >
              WHAT WE DO
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.9rem,1.6vw,1.02rem)',
                color: 'rgba(12,26,78,0.62)',
                lineHeight: 1.75,
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              MAXIMEDIA sets the bar high when it comes to quality. And therefore, all of
              our packages include the following:
            </p>
          </div>

          {/* 3×2 card grid */}
          <div className="swdo-grid">
            {ITEMS.map(item => (
              <div key={item.title} className="swdo-card">
                <div>
                  <p className="swdo-card-title">{item.title}</p>
                  <p className="swdo-card-desc">{item.desc}</p>
                </div>
                <span className="swdo-card-icon">{item.icon}</span>
              </div>
            ))}
          </div>

          {/* Bottom paragraph — matching screenshot */}
          <p className="swdo-bottom-text">
            Stock photography just doesn&apos;t do your product or your business justice. Having styled,
            professional photos of your actual, real-life products solidifies your brand identity!
            Photography drives a lot of decision-making. Convert site visitors to customers with one
            of the most convincing tools at your disposal: great pictures!
          </p>

        </div>
      </section>
    </>
  )
}