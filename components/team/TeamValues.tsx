const VALUES = [
  { icon: '🎯', title: 'Results Above All',    desc: 'Every decision is anchored in your business outcomes — not vanity metrics.' },
  { icon: '💡', title: 'Strategy First',        desc: 'We never execute without a solid strategy. Planning is the foundation of every campaign.' },
  { icon: '🤝', title: 'True Partnership',      desc: 'We embed ourselves in your team, acting as an extension of your own marketing department.' },
  { icon: '📊', title: 'Data-Driven',           desc: 'Our recommendations are backed by real numbers — not gut feelings.' },
  { icon: '🚀', title: 'Relentless Innovation', desc: 'Social media moves fast. We stay ahead of every algorithm change and platform launch.' },
  { icon: '🌟', title: 'Creative Excellence',   desc: 'Thumb-stopping content requires true creative talent — and we have the best in the business.' },
]

export default function TeamValues() {
  return (
    <>
      <style>{`
        .tv-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }
        @media (max-width: 900px) { .tv-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 540px) { .tv-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section style={{ background:'#ffffff', padding:'90px 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--blue)', marginBottom:'8px' }}>WHAT WE STAND FOR</p>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,3.5vw,2.4rem)', color:'var(--blue)', lineHeight:1.1 }}>
              OUR CORE{' '}
              <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationColor:'var(--yellow)', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>VALUES</span>
            </h2>
          </div>

          <div className="tv-grid">
            {VALUES.map(v => (
              <div key={v.title} style={{ background:'#fff', border:'1.5px solid rgba(26,86,219,0.12)', borderRadius:'16px', padding:'28px', boxShadow:'0 4px 16px rgba(26,86,219,0.06)' }}>
                <div style={{ fontSize:'2.4rem', marginBottom:'14px', filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>{v.icon}</div>
                <h3 className="font-display font-black uppercase" style={{ fontSize:'0.92rem', color:'var(--blue)', marginBottom:'10px', letterSpacing:'0.02em', lineHeight:1.3 }}>{v.title}</h3>
                <p style={{ fontSize:'0.85rem', color:'rgba(12,26,78,0.62)', lineHeight:1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}