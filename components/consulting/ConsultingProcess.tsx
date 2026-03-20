'use client'
import { useState } from 'react'

const STEPS = [
  { step:1, icon:'🔍', title:'Discover & Audit', desc:"We dive deep into your brand, social presence, competitors, and audience behavior. From content to community management, we identify what's working, what's not, and where untapped opportunities live." },
  { step:2, icon:'🗺️', title:'Strategize & Build', desc:"Armed with data and insights, we craft a custom social media game plan tailored to your brand's goals. From content strategy to platform prioritization and growth tactics — we set the foundation for you to win." },
  { step:3, icon:'🚀', title:'Support & Optimize', desc:"Once your strategy's in play, we don't just leave you hanging. Our team offers ongoing support, performance check-ins, and optimization recommendations to keep your brand ahead of trends and smashing those KPIs." },
]

const DELIVERABLES = ['Analytics Review','Discovery','Audit','Co-Development','Platform Strategy','Content Planning','KPI Tracking','Reporting']

export default function ConsultingProcess() {
  const [active, setActive] = useState(0)
  const s = STEPS[active]

  return (
    <>
      <style>{`
        .cpr-section { background:#9c9c9c; padding:clamp(64px,9vw,100px) 0; position:relative; overflow:hidden; }
        .cpr-grid-lines { position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px); background-size:60px 60px; }
        .cpr-heading { font-size:clamp(1.8rem,4.5vw,3.2rem); line-height:1.05; color:#fff; letter-spacing:-0.02em; text-align:center; margin-bottom:clamp(32px,5vw,52px); }
        .cpr-tabs { display:flex; justify-content:center; gap:10px; margin-bottom:clamp(24px,4vw,36px); flex-wrap:wrap; }
        .cpr-tab { padding:9px 20px; border-radius:100px; border:1.5px solid rgba(255,255,255,0.15); background:transparent; font-size:0.75rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; color:rgba(255,255,255,0.6); transition:all 0.2s; display:flex; align-items:center; gap:6px; }
        .cpr-tab-active { background:var(--con-yellow,#f5c518); border-color:var(--con-yellow,#f5c518); color:#0a0a0a; }
        .cpr-tab:hover:not(.cpr-tab-active) { border-color:rgba(245,197,24,0.4); color:var(--con-yellow,#f5c518); }
        .cpr-slider { display:flex; align-items:center; gap:clamp(12px,2vw,24px); }
        .cpr-arrow { width:clamp(44px,6vw,56px); height:clamp(44px,6vw,56px); border-radius:10px; background:var(--con-yellow,#f5c518); border:none; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:900; color:#0a0a0a; cursor:pointer; flex-shrink:0; transition:all 0.15s; }
        .cpr-arrow:hover:not(:disabled) { background:#d9a800; transform:scale(1.05); }
        .cpr-arrow:disabled { opacity:0.25; cursor:default; background:rgba(255,255,255,0.1); color:rgba(255,255,255,0.3); }
        .cpr-card { flex:1; background:var(--con-card,#1a1a1a); border:1.5px solid rgba(245,197,24,0.2); border-radius:clamp(16px,2.5vw,24px); padding:clamp(28px,4vw,48px); min-height:clamp(200px,24vw,260px); display:flex; flex-direction:column; justify-content:center; }
        .cpr-pill { display:inline-flex; align-items:center; background:var(--con-yellow,#f5c518); color:#0a0a0a; font-weight:900; font-size:0.68rem; letter-spacing:0.1em; text-transform:uppercase; padding:5px 14px; border-radius:100px; margin-bottom:14px; }
        .cpr-title { font-size:clamp(1.2rem,2.5vw,1.8rem); color:var(--con-yellow,#f5c518); font-style:italic; letter-spacing:-0.01em; margin-bottom:16px; }
        .cpr-desc { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(255,255,255,0.65); line-height:1.8; }
        .cpr-nav-dots { display:flex; justify-content:center; gap:8px; margin-top:24px; }
        .cpr-nav-dot { height:8px; border-radius:4px; border:none; cursor:pointer; padding:0; transition:all 0.25s; background:rgba(255,255,255,0.15); width:8px; }
        .cpr-nav-dot-active { background:var(--con-yellow,#f5c518); width:24px; }
        /* Deliverables scroll */
        @keyframes marquee-left { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .cpr-marquee { display:flex; width:max-content; animation:marquee-left 20s linear infinite; margin-top:clamp(40px,6vw,64px); }
        .cpr-pill-item { display:inline-flex; align-items:center; gap:8px; padding:10px 20px; background:var(--con-card,#1a1a1a); border:1.5px solid rgba(255,255,255,0.1); border-radius:100px; font-size:0.8rem; font-weight:700; color:rgba(255,255,255,0.7); white-space:nowrap; margin:0 8px; letter-spacing:0.04em; flex-shrink:0; }
        .cpr-pill-dot { width:7px; height:7px; border-radius:50%; background:var(--con-yellow,#f5c518); flex-shrink:0; }
      `}</style>

      <section className="cpr-section">
        <div className="cpr-grid-lines"/>
        <div className="container">
          <h2 className="font-display font-black uppercase cpr-heading">
            YOUR ROADMAP TO SOCIAL SUCCESS STARTS RIGHT HERE
          </h2>

          <div className="cpr-tabs">
            {STEPS.map((st,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`cpr-tab${i===active?' cpr-tab-active':''}`}>
                <span>{st.icon}</span> Step {st.step}
              </button>
            ))}
          </div>

          <div className="cpr-slider">
            <button className="cpr-arrow" onClick={()=>setActive(a=>Math.max(a-1,0))} disabled={active===0}>←</button>
            <div className="cpr-card">
              <div className="cpr-pill">STEP {s.step}</div>
              <h3 className="font-display font-black uppercase cpr-title">{s.title}</h3>
              <p className="cpr-desc">{s.desc}</p>
            </div>
            <button className="cpr-arrow" onClick={()=>setActive(a=>Math.min(a+1,STEPS.length-1))} disabled={active===STEPS.length-1}>→</button>
          </div>

          <div className="cpr-nav-dots">
            {STEPS.map((_,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`cpr-nav-dot${i===active?' cpr-nav-dot-active':''}`}/>
            ))}
          </div>
        </div>

        {/* Marquee deliverables */}
        <div style={{overflow:'hidden',marginTop:'clamp(40px,6vw,64px)'}}>
          <div className="cpr-marquee">
            {[...DELIVERABLES,...DELIVERABLES].map((d,i)=>(
              <div key={i} className="cpr-pill-item">
                <span className="cpr-pill-dot"/>
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}