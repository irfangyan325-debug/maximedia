const BENEFITS = [
  { icon:'🧠', title:'Expertise',        desc:'Deep understanding of the latest trends and best practices. We develop and implement a strategy tailored to your specific goals and objectives.' },
  { icon:'⚡', title:'Efficiency',        desc:'A clear strategy streamlines your social media efforts, saving you time and resources while still achieving your desired outcomes.' },
  { icon:'📈', title:'Increased ROI',     desc:'By focusing on the tactics most effective for your brand, we maximize your return on investment for your social media marketing efforts.' },
  { icon:'📊', title:'Measurable Results', desc:'Data-driven insights to track progress and measure success, allowing you to see the impact of your efforts and make informed decisions.' },
  { icon:'🔄', title:'Flexibility',       desc:'Our consulting packages are designed to be flexible and adaptable. We work on a project basis or provide ongoing support to help you meet your goals.' },
]

export default function ConsultingBenefits() {
  return (
    <>
      <style>{`
        .cb-section { background:var(--con-black,#0a0a0a); padding:clamp(72px,9vw,100px) 0; }
        .cb-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:16px; }
        .cb-card { background:var(--con-card,#1a1a1a); border:1.5px solid var(--con-border,rgba(255,255,255,0.1)); border-radius:16px; padding:24px 18px 28px; text-align:center; position:relative; overflow:hidden; transition:border-color 0.2s,transform 0.2s; }
        .cb-card:hover { border-color:rgba(245,197,24,0.35); transform:translateY(-4px); }
        .cb-card::after { content:''; position:absolute; bottom:-2px; left:50%; transform:translateX(-50%); width:40px; height:4px; background:var(--con-yellow,#f5c518); border-radius:4px 4px 0 0; opacity:0; transition:opacity 0.2s; }
        .cb-card:hover::after { opacity:1; }
        @media (max-width:900px) { .cb-grid { grid-template-columns:repeat(3,1fr); } }
        @media (max-width:540px) { .cb-grid { grid-template-columns:1fr 1fr; } }
      `}</style>

      <section className="cb-section">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--con-yellow,#f5c518)',marginBottom:'10px'}}>WHAT YOU GET</p>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',lineHeight:1.08,letterSpacing:'-0.01em'}}>
              PRODUCTS &{' '}
              <span style={{color:'var(--con-yellow,#f5c518)',textDecoration:'underline',textDecorationColor:'var(--con-yellow,#f5c518)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>SERVICES</span>
            </h2>
          </div>

          <div className="cb-grid">
            {BENEFITS.map(b=>(
              <div key={b.title} className="cb-card">
                <div style={{fontSize:'2.4rem',marginBottom:'14px',filter:'drop-shadow(0 4px 12px rgba(245,197,24,0.25))'}}>{b.icon}</div>
                <h3 className="font-display font-black uppercase" style={{fontSize:'0.82rem',color:'#fff',marginBottom:'10px',letterSpacing:'0.04em'}}>{b.title}</h3>
                <p style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.5)',lineHeight:1.72}}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}