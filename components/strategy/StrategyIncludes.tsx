const ALL_ITEMS = [
  'Metrics of Success (KPIs)',
  'Platform Research',
  'Content Planning',
  'Content Strategy',
  'Platform Optimization',
  'Engagement Strategy',
  'Performance Tracking',
  'Posting Frequency',
  'Competitive Analysis',
  'Conversation Monitoring',
  'Brand Audit',
  'Goal Setting',
  'Competitive Audit',
  'Influencer Strategy',
  'Buyer Personas',
  'Paid Advertising Plan',
]

export default function StrategyIncludes() {
  // Split into 2 rows of 8
  const row1 = ALL_ITEMS.slice(0, 8)
  const row2 = ALL_ITEMS.slice(8, 16)

  return (
    <>
      <style>{`
        @keyframes marquee-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .si-track-left  { display:flex; width:max-content; animation: marquee-left  32s linear infinite; }
        .si-track-right { display:flex; width:max-content; animation: marquee-right 28s linear infinite; }
        .si-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #fff;
          border: 2px solid #b8dff0;
          border-radius: 100px;
          box-shadow: 3px 3px 0 #b8dff0;
          font-size: 0.82rem;
          font-weight: 700;
          color: #0c1a4e;
          white-space: nowrap;
          margin: 0 8px;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }
        .si-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--blue); flex-shrink: 0;
        }
      `}</style>

      <section style={{ background:'#c9e8f5', padding:'clamp(72px,9vw,100px) 0', overflow:'hidden' }}>
        <div className="container" style={{ marginBottom:'clamp(40px,6vw,60px)' }}>
          <div style={{ textAlign:'center' }}>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,4vw,2.8rem)', color:'var(--blue)', lineHeight:1.08, letterSpacing:'-0.01em', maxWidth:'760px', margin:'0 auto 16px' }}>
              WE&apos;LL CREATE A SOCIAL MEDIA GAME PLAN THAT&apos;S AS{' '}
              <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>UNIQUE AS YOUR BRAND</span>
            </h2>
            <p style={{ fontSize:'0.95rem', color:'rgba(12,26,78,0.62)', maxWidth:'620px', margin:'0 auto', lineHeight:1.75 }}>
              We don&apos;t do anything halfway. Every social media strategy includes everything below and more, tailored to the goals of YOUR brand.
            </p>
          </div>
        </div>

        {/* Row 1 — scrolls left */}
        <div style={{ overflow:'hidden', marginBottom:'16px' }}>
          <div className="si-track-left">
            {[...row1, ...row1].map((item, i) => (
              <div key={i} className="si-pill">
                <span className="si-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div style={{ overflow:'hidden' }}>
          <div className="si-track-right">
            {[...row2, ...row2].map((item, i) => (
              <div key={i} className="si-pill">
                <span className="si-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}