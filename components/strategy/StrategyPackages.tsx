import Link from 'next/link'

const PACKAGES = [
  {
    icon: '🎯',
    title: 'Strategy That Actually Moves the Needle',
    desc: "We don't believe in cookie-cutter content. Our strategy services are built to deliver real results — whether you need a complete takeover or just a little expert firepower.",
    highlight: true,
  },
  {
    icon: '🏆',
    title: 'Pure Performance Strategy',
    desc: "Are you a BIG brand chasing BIG wins? Our performance-based partnership is all about outcomes. We align our success with yours — explosive results, or we're not done yet.",
    highlight: false,
  },
  {
    icon: '⚙️',
    title: 'Full Strategy Management',
    desc: "Ready to hand off your socials to the pros? From big-picture strategy to daily execution, we do it all: content creation, scheduling, audience interaction, and performance tracking.",
    highlight: false,
  },
  {
    icon: '🚀',
    title: 'Strategy Setup',
    desc: "New brand? New vibe? Clean slate? We'll build (or rebuild) your social presence from the ground up — optimized profiles, branded visuals, and a custom content plan.",
    highlight: false,
  },
  {
    icon: '🔎',
    title: 'One-Time Strategy Audit',
    desc: "Not sure what's working? We'll take a magnifying glass to your current setup and deliver clear, actionable insights. No fluff — just a roadmap to better results.",
    highlight: false,
  },
  {
    icon: '💡',
    title: 'Strategy Consulting',
    desc: "Need a second brain on your team? Tap into our expert guidance to solve challenges, plan campaigns, or stay ahead of trends. Smart, doable strategies that ACTUALLY work.",
    highlight: false,
  },
]

export default function StrategyPackages() {
  return (
    <>
      <style>{`
        .spk-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .spk-card {
          background: #fff;
          border: 2px solid #b8dff0;
          border-radius: 18px;
          padding: 28px 24px 32px;
          position: relative;
          overflow: hidden;
          box-shadow: 6px 6px 0 #b8dff0, 0 4px 16px rgba(26,86,219,0.06);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          display: flex;
          flex-direction: column;
        }
        .spk-card:hover { transform: translateY(-5px); box-shadow: 6px 10px 0 #a0cce8, 0 14px 32px rgba(26,86,219,0.1); }
        .spk-card::after {
          content: '';
          position: absolute;
          top: 50%; right: -2px;
          transform: translateY(-50%);
          width: 6px; height: clamp(44px,7vw,72px);
          background: var(--blue);
          border-radius: 4px 0 0 4px;
        }
        .spk-card-highlight {
          background: var(--blue);
          border-color: var(--blue);
          box-shadow: 6px 6px 0 #1341b5;
        }
        .spk-card-highlight::after { background: var(--yellow); }
        .spk-card-highlight:hover { box-shadow: 6px 10px 0 #1341b5; }
        @media (max-width: 860px) { .spk-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .spk-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section style={{ background:'#f2f5fc', padding:'clamp(72px,9vw,100px) 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'clamp(40px,6vw,56px)' }}>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,4vw,2.8rem)', color:'var(--blue)', lineHeight:1.08, letterSpacing:'-0.01em', maxWidth:'720px', margin:'0 auto 16px' }}>
              GAIN THE EDGE WITH OUR{' '}
              <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>DATA-DRIVEN STRATEGIES</span>
            </h2>
          </div>

          <div className="spk-grid">
            {PACKAGES.map(pkg => (
              <div key={pkg.title} className={`spk-card${pkg.highlight ? ' spk-card-highlight' : ''}`}>
               

                <div style={{ fontSize:'2.4rem', marginBottom:'14px', filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>{pkg.icon}</div>

                <h3 className="font-display font-black uppercase" style={{ fontSize:'0.92rem', color: pkg.highlight ? '#fff' : 'var(--blue)', marginBottom:'12px', lineHeight:1.3, letterSpacing:'0.01em' }}>
                  {pkg.title}
                </h3>
                <p style={{ fontSize:'0.85rem', color: pkg.highlight ? 'rgba(255,255,255,0.78)' : 'rgba(12,26,78,0.62)', lineHeight:1.75, flex:1 }}>
                  {pkg.desc}
                </p>

                <div style={{ marginTop:'20px' }}>
                  <Link href="/contact" className="font-display font-black uppercase" style={{
                    display:'inline-flex', alignItems:'center',
                    padding:'10px 20px',
                    background: pkg.highlight ? 'var(--yellow)' : 'var(--blue)',
                    color: pkg.highlight ? '#0c1a4e' : '#fff',
                    borderRadius:'8px', fontSize:'0.72rem', letterSpacing:'0.08em', textDecoration:'none',
                    border: pkg.highlight ? '2px solid #0c1a4e' : '2px solid transparent',
                    boxShadow: pkg.highlight ? '0 3px 0 #0c1a4e' : 'none',
                  }}>
                    GET STARTED →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}