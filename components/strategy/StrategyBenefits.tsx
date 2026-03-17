const BENEFITS = [
  {
    icon: '🚀',
    title: 'Skyrocketing Engagement',
    desc: "Who wants to just chase likes when you can spark conversations? With scroll-stopping content and clever strategy, we turn passive scrollers into loyal fans who like, comment, share, and stick around for more.",
  },
  {
    icon: '💰',
    title: 'Smarter Spending, Bigger Returns',
    desc: "Your budget should work as hard as we do. Every post, every ad, every pixel is built to perform — maximizing impact and turning social dollars into measurable growth.",
  },
  {
    icon: '📊',
    title: 'Fueled by Data, Driven by Results',
    desc: "Vibes are great, but results are better. Behind the creativity is a team obsessed with metrics. We use real-time data to fine-tune every move, so your brand gets smarter (and stronger) by the day.",
  },
]

export default function StrategyBenefits() {
  return (
    <>
      <style>{`
        .sb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .sb-card {
          background: #fff;
          border: 2px solid #b8dff0;
          border-radius: 18px;
          padding: clamp(24px,3.5vw,36px) clamp(20px,3vw,28px);
          position: relative;
          overflow: hidden;
          box-shadow: 6px 6px 0 #b8dff0, 0 4px 16px rgba(26,86,219,0.06);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          text-align: center;
        }
        .sb-card:hover { transform: translateY(-5px); box-shadow: 6px 10px 0 #a0cce8, 0 14px 32px rgba(26,86,219,0.1); }
        .sb-card::after {
          content: '';
          position: absolute;
          top: 50%; right: -2px;
          transform: translateY(-50%);
          width: 6px; height: clamp(44px,7vw,72px);
          background: var(--blue);
          border-radius: 4px 0 0 4px;
        }
        @media (max-width: 860px) { .sb-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .sb-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section style={{ background:'#f2f5fc', padding:'clamp(72px,9vw,100px) 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'clamp(40px,6vw,60px)' }}>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,4vw,2.8rem)', color:'var(--blue)', lineHeight:1.08, letterSpacing:'-0.01em', maxWidth:'900px', margin:'0 auto' }}>
              THE LAST SOCIAL MEDIA STRATEGY SERVICE YOU&apos;LL EVER NEED
            </h2>
          </div>

          <div className="sb-grid">
            {BENEFITS.map(b => (
              <div key={b.title} className="sb-card">
                <div style={{ fontSize:'clamp(2.4rem,4vw,3.2rem)', marginBottom:'18px', filter:'drop-shadow(0 4px 10px rgba(0,0,0,0.1))' }}>{b.icon}</div>
                <h3 className="font-display font-black uppercase" style={{ fontSize:'clamp(0.9rem,1.5vw,1rem)', color:'var(--blue)', marginBottom:'14px', lineHeight:1.25 }}>{b.title}</h3>
                <p style={{ fontSize:'0.88rem', color:'rgba(12,26,78,0.65)', lineHeight:1.75 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}