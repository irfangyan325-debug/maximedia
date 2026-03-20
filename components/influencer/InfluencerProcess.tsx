'use client'
import { useState } from 'react'

const STEPS = [
  { step:1, icon:'🎯', title:'Strategy + Matchmaking', desc:"We'll build a custom influencer strategy based on your goals, audience, and platforms. Then we'll handpick creators who align with your brand, vibe with your audience, and actually move the needle." },
  { step:2, icon:'🤝', title:'Collaboration + Content Creation', desc:"Once the right influencers are locked in, we'll handle rate negotiations, contracts, and creative direction. Together, we'll help them produce authentic, on-brand content designed to grab attention and drive action." },
  { step:3, icon:'🚀', title:'Launch, Monitor, Optimize', desc:"When the content drops, we track performance in real-time, keep engagement high, and optimize as we go. We'll report on metrics, manage the relationships, and even negotiate post-campaign rights so you can keep using top-performing content." },
]

export default function InfluencerProcess() {
  const [active, setActive] = useState(0)
  const s = STEPS[active]

  return (
    <>
      <style>{`
        .ip-section { background:var(--inf-orange); padding:clamp(64px,9vw,100px) 0; position:relative; overflow:hidden; }
        .ip-dots { position:absolute; top:20px; right:28px; display:grid; grid-template-columns:repeat(10,8px); gap:6px; opacity:0.2; pointer-events:none; }
        .ip-dot { width:5px; height:5px; border-radius:50%; background:#fff; }
        .ip-heading { font-size:clamp(2rem,5.5vw,4rem); line-height:1.05; color:#fff; letter-spacing:-0.02em; text-align:center; margin-bottom:clamp(32px,5vw,52px); }
        .ip-tabs { display:flex; justify-content:center; gap:10px; margin-bottom:clamp(24px,4vw,36px); flex-wrap:wrap; }
        .ip-tab { padding:9px 20px; border-radius:100px; border:2px solid rgba(255,255,255,0.5); background:transparent; font-size:0.75rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; color:#fff; transition:all 0.2s; display:flex; align-items:center; gap:6px; }
        .ip-tab-active { background:#1c0a00; border-color:#1c0a00; color:var(--inf-orange); }
        .ip-tab:hover:not(.ip-tab-active) { background:rgba(255,255,255,0.15); }
        .ip-slider { display:flex; align-items:center; gap:clamp(12px,2vw,24px); }
        .ip-arrow { width:clamp(44px,6vw,56px); height:clamp(44px,6vw,56px); border-radius:10px; background:#1c0a00; border:none; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:900; color:var(--inf-orange); cursor:pointer; flex-shrink:0; transition:all 0.15s; }
        .ip-arrow:hover:not(:disabled) { background:#000; transform:scale(1.05); }
        .ip-arrow:disabled { opacity:0.3; cursor:default; }
        .ip-card { flex:1; background:#fff; border-radius:clamp(16px,2.5vw,24px); padding:clamp(28px,4vw,48px); box-shadow:0 8px 40px rgba(0,0,0,0.15); min-height:clamp(200px,24vw,260px); display:flex; flex-direction:column; justify-content:center; }
        .ip-pill { display:inline-flex; align-items:center; background:var(--inf-orange); color:#fff; font-weight:900; font-size:0.68rem; letter-spacing:0.1em; text-transform:uppercase; padding:5px 14px; border-radius:100px; margin-bottom:14px; }
        .ip-title { font-size:clamp(1.2rem,2.5vw,1.8rem); color:var(--inf-orange); font-style:italic; letter-spacing:-0.01em; margin-bottom:16px; }
        .ip-desc { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(28,10,0,0.7); line-height:1.8; }
        .ip-nav-dots { display:flex; justify-content:center; gap:8px; margin-top:24px; }
        .ip-nav-dot { height:8px; border-radius:4px; border:none; cursor:pointer; padding:0; transition:all 0.25s; background:rgba(255,255,255,0.35); width:8px; }
        .ip-nav-dot-active { background:#1c0a00; width:24px; }
      `}</style>

      <section className="ip-section">
        <div className="ip-dots">{Array.from({length:30}).map((_,i)=><div key={i} className="ip-dot"/>)}</div>
        <div className="container">
          <h2 className="font-display font-black uppercase ip-heading">
            YOUR INFLUENCER MARKETING, START TO FINISH.
          </h2>
          <div className="ip-tabs">
            {STEPS.map((st,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`ip-tab${i===active?' ip-tab-active':''}`}>
                <span>{st.icon}</span> Step {st.step}
              </button>
            ))}
          </div>
          <div className="ip-slider">
            <button className="ip-arrow" onClick={()=>setActive(a=>Math.max(a-1,0))} disabled={active===0} aria-label="Previous">←</button>
            <div className="ip-card">
              <div className="ip-pill">STEP {s.step}</div>
              <h3 className="font-display font-black uppercase ip-title">{s.title}</h3>
              <p className="ip-desc">{s.desc}</p>
            </div>
            <button className="ip-arrow" onClick={()=>setActive(a=>Math.min(a+1,STEPS.length-1))} disabled={active===STEPS.length-1} aria-label="Next">→</button>
          </div>
          <div className="ip-nav-dots">
            {STEPS.map((_,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`ip-nav-dot${i===active?' ip-nav-dot-active':''}`} aria-label={`Step ${i+1}`}/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}