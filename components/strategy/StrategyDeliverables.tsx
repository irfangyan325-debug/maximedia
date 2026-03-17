import Link from 'next/link'

const DELIVERABLES = [
  { icon: '🔍', title: 'Brand Audit' },
  { icon: '⚔️', title: 'Competitive Audit' },
  { icon: '👥', title: 'Buyer Personas' },
  { icon: '📱', title: 'Platform Strategy' },
  { icon: '✍️', title: 'Content Strategy' },
  { icon: '💬', title: 'Community Engagement Strategy' },
  { icon: '💳', title: 'Paid Advertising Strategy' },
  { icon: '📈', title: 'Performance Tracking Plan' },
]

export default function StrategyDeliverables() {
  return (
    <>
      <style>{`
        .sd-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .sd-card {
          background: #fff;
          border: 2px solid #b8dff0;
          border-radius: 16px;
          padding: 24px 18px 28px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 6px 6px 0 #b8dff0, 0 4px 12px rgba(26,86,219,0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .sd-card:hover { transform: translateY(-4px); box-shadow: 6px 10px 0 #a0cce8; }
        .sd-card::after {
          content: '';
          position: absolute;
          top: 50%; right: -2px;
          transform: translateY(-50%);
          width: 6px; height: 48px;
          background: var(--blue);
          border-radius: 4px 0 0 4px;
        }
        @media (max-width: 900px) { .sd-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .sd-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      <section style={{ background:'#ffffff', padding:'clamp(72px,9vw,100px) 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'clamp(40px,6vw,56px)' }}>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,4vw,2.8rem)', color:'var(--blue)', lineHeight:1.08, letterSpacing:'-0.01em', maxWidth:'720px', margin:'0 auto 16px' }}>
              WE DON&apos;T JUST BUILD STRATEGY.{' '}
              <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>WE BUILD MOMENTUM.</span>
            </h2>
            <p style={{ fontSize:'0.95rem', color:'rgba(12,26,78,0.55)', maxWidth:'600px', margin:'0 auto', lineHeight:1.75 }}>
              Performance-driven plans that move your brand forward. Every recommendation is rooted in insights, driven by trends, and crafted to convert.
            </p>
          </div>

          <div className="sd-grid">
            {DELIVERABLES.map(d => (
              <div key={d.title} className="sd-card">
                <div style={{ fontSize:'clamp(2rem,3.5vw,2.8rem)', marginBottom:'14px', filter:'drop-shadow(0 4px 10px rgba(0,0,0,0.1))' }}>{d.icon}</div>
                <h3 className="font-display font-black uppercase" style={{ fontSize:'clamp(0.72rem,1.2vw,0.82rem)', color:'var(--blue)', lineHeight:1.3, letterSpacing:'0.02em' }}>{d.title}</h3>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center', marginTop:'40px' }}>
            <Link href="/contact" className="font-display font-black uppercase" style={{
              display:'inline-flex', alignItems:'center',
              padding:'16px 40px', background:'var(--yellow)', color:'#0c1a4e',
              borderRadius:'10px', fontSize:'0.84rem', letterSpacing:'0.1em', textDecoration:'none',
              border:'2px solid #0c1a4e', boxShadow:'0 5px 0 #0c1a4e',
              transition:'all 0.15s ease',
            }}>
              FREE CUSTOM PROPOSAL →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}