import Link from 'next/link'

const FEATURES = [
  { icon:'⏱️', label:'Starting from 2 hours' },
  { icon:'🎯', label:'Tailored to your questions' },
  { icon:'⚡', label:'Actionable advice instantly' },
  { icon:'💡', label:'No long-term commitment' },
]

export default function ConsultingCustomHours() {
  return (
    <>
      <style>{`
        .cch-section { background:var(--con-black,#0a0a0a); padding:clamp(72px,9vw,100px) 0; position:relative; overflow:hidden; }
        .cch-card { background:var(--con-card,#1a1a1a); border:1.5px solid rgba(245,197,24,0.25); border-radius:24px; padding:clamp(36px,5vw,60px); display:grid; grid-template-columns:1fr 1fr; gap:clamp(36px,5vw,64px); align-items:center; position:relative; overflow:hidden; }
        .cch-card::before { content:''; position:absolute; top:-80px; right:-80px; width:300px; height:300px; border-radius:50%; background:radial-gradient(circle, rgba(245,197,24,0.08), transparent 70%); pointer-events:none; }
        .cch-features { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:24px 0; }
        .cch-feat { display:flex; align-items:center; gap:10px; }
        .cch-btn { display:inline-flex; align-items:center; padding:16px 36px; background:var(--con-yellow,#f5c518); color:#0a0a0a; border-radius:10px; font-size:0.84rem; letter-spacing:0.1em; text-decoration:none; border:2px solid var(--con-yellow,#f5c518); font-weight:900; text-transform:uppercase; box-shadow:0 4px 0 rgba(0,0,0,0.5); transition:all 0.15s; }
        .cch-btn:hover { background:#d9a800; transform:translateY(-2px); box-shadow:0 6px 0 rgba(0,0,0,0.5); }
        .cch-phone-wrap { display:flex; align-items:center; justify-content:center; }
        .cch-phone { width:clamp(180px,24vw,260px); height:clamp(320px,42vw,440px); border-radius:clamp(24px,3.5vw,36px); border:3px solid rgba(255,255,255,0.15); background:var(--con-dark,#111); display:flex; align-items:center; justify-content:center; font-size:clamp(4rem,8vw,6rem); position:relative; box-shadow:0 20px 60px rgba(0,0,0,0.5); }
        .cch-phone::before { content:''; position:absolute; top:10px; left:50%; transform:translateX(-50%); width:70px; height:18px; border-radius:20px; background:rgba(255,255,255,0.08); }
        @media (max-width:768px) { .cch-card { grid-template-columns:1fr; gap:28px; } .cch-phone-wrap { display:none; } .cch-features { grid-template-columns:1fr; } }
      `}</style>

      <section className="cch-section">
        <div className="container">
          <div className="cch-card">
            {/* Left: text */}
            <div>
              <div style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 16px',background:'rgba(245,197,24,0.1)',border:'1px solid rgba(245,197,24,0.25)',borderRadius:'100px',marginBottom:'20px'}}>
                <span style={{fontSize:'1rem'}}>⏱️</span>
                <span className="font-display font-black uppercase" style={{fontSize:'0.72rem',letterSpacing:'0.12em',color:'var(--con-yellow,#f5c518)'}}>FLEXIBLE OPTION</span>
              </div>
              <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',lineHeight:1.08,letterSpacing:'-0.01em',marginBottom:'16px'}}>
                CUSTOM{' '}
                <span style={{color:'var(--con-yellow,#f5c518)',textDecoration:'underline',textDecorationColor:'var(--con-yellow,#f5c518)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>CONSULTING HOURS</span>
              </h2>
              <p style={{fontSize:'clamp(0.9rem,1.5vw,1rem)',color:'rgba(255,255,255,0.65)',lineHeight:1.82,marginBottom:'8px'}}>
                With Custom Consulting Hours, you have the flexibility to choose exactly the amount of consulting time that suits your needs, <strong style={{color:'#fff'}}>starting from as little as 2 hours.</strong>
              </p>
              <p style={{fontSize:'clamp(0.88rem,1.4vw,0.96rem)',color:'rgba(255,255,255,0.5)',lineHeight:1.82,marginBottom:'4px'}}>
                We&apos;ll tailor the session to address your specific questions and challenges, providing actionable advice and insights that you can start using immediately.
              </p>
              <div className="cch-features">
                {FEATURES.map(f=>(
                  <div key={f.label} className="cch-feat">
                    <span style={{fontSize:'1.2rem'}}>{f.icon}</span>
                    <span style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.7)',fontWeight:600}}>{f.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="font-display font-black uppercase cch-btn">
                BUY NOW →
              </Link>
            </div>

            {/* Right: phone decoration */}
            <div className="cch-phone-wrap">
              <div className="cch-phone">
                📱
                {/* Glow */}
                <div style={{position:'absolute',inset:0,borderRadius:'inherit',background:'radial-gradient(circle at 50% 50%, rgba(245,197,24,0.06), transparent 70%)',pointerEvents:'none'}}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}