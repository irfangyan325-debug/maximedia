const STEPS = [
  {
    step: 1,
    title: 'Strategy Kickoff Call',
    desc: 'We start with a deep dive into your brand, goals, audience, and challenges. This collaborative session sets the tone and gives us everything we need to build a data-backed, results-driven social plan.',
  },
  {
    step: 2,
    title: 'Research & Insights',
    desc: "Next, we roll up our sleeves and get into the data: audience behaviors, competitive analysis, trend mapping, platform performance, and so much more. The goal? Uncover the real opportunities that align with YOUR needs.",
  },
  {
    step: 3,
    title: 'Custom Strategy Development',
    desc: 'We craft a tailored social strategy built to drive reach, engagement, and ROI — complete with content direction, platform recommendations, tone guidelines, and paid media suggestions.',
  },
  {
    step: 4,
    title: 'Strategy Presentation & Launch Plan',
    desc: "We walk you through the strategy, align on goals, and hand you a clear execution roadmap — whether we're managing it all for you or handing it off to your in-house team.",
  },
]

export default function StrategyProcess() {
  return (
    <>
      <style>{`
        .sp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .sp-card {
          background: #fff;
          border: 2px solid #b8dff0;
          border-radius: 18px;
          padding: 28px 28px 32px;
          position: relative;
          overflow: hidden;
          box-shadow: 6px 6px 0 #b8dff0, 0 4px 16px rgba(26,86,219,0.06);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .sp-card:hover { transform: translateY(-4px); box-shadow: 6px 10px 0 #a0cce8, 0 12px 28px rgba(26,86,219,0.1); }
        .sp-card::after {
          content: '';
          position: absolute;
          top: 50%; right: -2px;
          transform: translateY(-50%);
          width: 6px; height: clamp(44px,7vw,72px);
          background: var(--blue);
          border-radius: 4px 0 0 4px;
        }
        @media (max-width: 768px) { .sp-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section style={{ background:'#ffffff', padding:'clamp(72px,9vw,100px) 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'clamp(40px,6vw,60px)' }}>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,4vw,2.8rem)', color:'var(--blue)', lineHeight:1.08, letterSpacing:'-0.01em' }}>
              FROM KICKOFF TO CONVERSION
            </h2>
          </div>

          <div className="sp-grid">
            {STEPS.map(s => (
              <div key={s.step} className="sp-card">
                {/* Step pill */}
                <div style={{ display:'inline-flex', alignItems:'center', background:'var(--yellow)', color:'#0c1a4e', fontWeight:800, fontSize:'0.68rem', letterSpacing:'0.1em', textTransform:'uppercase', padding:'5px 14px', borderRadius:'100px', marginBottom:'18px', border:'2px solid #0c1a4e', boxShadow:'0 2px 0 #0c1a4e' }}>
                  STEP {s.step}
                </div>
                <h3 className="font-display font-black uppercase" style={{ fontSize:'clamp(0.95rem,1.6vw,1.1rem)', color:'var(--blue)', marginBottom:'12px', lineHeight:1.2 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize:'0.88rem', color:'rgba(12,26,78,0.65)', lineHeight:1.75 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}