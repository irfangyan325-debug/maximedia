const REASONS = [
  { icon:'🏆', title:'Experience', desc:'Our team has years of experience working with a wide variety of brands across multiple industries. We have a proven track record of delivering results for our clients.' },
  { icon:'🔧', title:'Comprehensive Services', desc:'In addition to consulting, we offer a full range of social media marketing services, including content creation, community management, paid social media advertising, and more.' },
  { icon:'🎯', title:'Customized Approach', desc:"We take the time to get to know your brand and understand your unique goals and objectives. This allows us to develop a customized approach that's tailored to your specific needs." },
  { icon:'🤝', title:'Collaborative Partnership', desc:"We believe in working closely with our clients to ensure that we're meeting their needs and exceeding their expectations. We see ourselves as a partner in your success." },
]

export default function ConsultingWhy() {
  return (
    <>
      <style>{`
        .cwy-section { background:#909090; padding:clamp(72px,9vw,100px) 0; }
        .cwy-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; }
        .cwy-card { background:var(--con-card,#1a1a1a); border:1.5px solid var(--con-border,rgba(255,255,255,0.1)); border-radius:18px; padding:28px 24px 32px; position:relative; overflow:hidden; transition:border-color 0.2s,transform 0.2s; }
        .cwy-card:hover { border-color:rgba(41, 41, 41, 0.4); transform:translateY(-4px); }
        .cwy-card::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:4px; height:clamp(44px,7vw,64px); background:var(--con-yellow,#f5c518); border-radius:4px 0 0 4px; opacity:0; transition:opacity 0.2s; }
        .cwy-card:hover::after { opacity:1; }
        @media (max-width:768px) { .cwy-grid { grid-template-columns:1fr; } }
      `}</style>

      <section className="cwy-section">
        <div className="container">
          <div style={{marginBottom:'clamp(40px,6vw,56px)'}}>
            <h2 className="font-display text-center font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',lineHeight:1.08,letterSpacing:'-0.01em'}}>
              WHY{' '}
              <span style={{color:'var(--con-dark,#f5c518)',textDecoration:'underline',textDecorationColor:'var(--con-yellow,#f5c518)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>MAXIMEDIA</span>
            </h2>
          </div>

          <div className="cwy-grid">
            {REASONS.map(r=>(
              <div key={r.title} className="cwy-card">
                <div style={{fontSize:'2.4rem',marginBottom:'16px',filter:'drop-shadow(0 4px 12px rgba(245,197,24,0.3))'}}>{r.icon}</div>
                <h3 className="font-display font-black uppercase" style={{fontSize:'clamp(0.9rem,1.5vw,1rem)',color:'#fff',marginBottom:'10px',letterSpacing:'0.02em'}}>{r.title}</h3>
                <p style={{fontSize:'0.86rem',color:'rgba(255,255,255,0.6)',lineHeight:1.78}}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}