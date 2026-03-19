'use client'
import { useState } from 'react'

const STEPS = [
  { step:1, icon:'💡', title:'Concept & Strategy', desc:"We start with your goals and audience, then brainstorm bold ideas that actually make sense for your brand. Every concept is backed by data, driven by creativity, and aligned with your strategy." },
  { step:2, icon:'🎬', title:'Production & Design', desc:"Here's where the magic happens. Our creators, designers, and editors bring ideas to life — whether it's photo, video, graphics, or motion. Everything is crafted to stop thumbs and spark engagement." },
  { step:3, icon:'✅', title:'Review, Polish & Schedule', desc:"You review, we refine. Once the content is approved, we get everything scheduled, captioned, and ready to launch — optimized for every platform and timed to perfection." },
]

export default function ContentProcess() {
  const [active, setActive] = useState(0)
  const s = STEPS[active]

  return (
    <>
      <style>{`
        .cp-section { background:var(--yellow); padding:clamp(64px,9vw,100px) 0; position:relative; overflow:hidden; }
        .cp-dots { position:absolute; top:20px; right:28px; display:grid; grid-template-columns:repeat(10,8px); gap:6px; opacity:0.2; pointer-events:none; }
        .cp-dot { width:5px; height:5px; border-radius:50%; background:#0c1a4e; }
        .cp-heading { font-size:clamp(2rem,5.5vw,4rem); line-height:1.05; color:#0c1a4e; letter-spacing:-0.02em; text-align:center; margin-bottom:clamp(32px,5vw,52px); }
        .cp-tabs { display:flex; justify-content:center; gap:10px; margin-bottom:clamp(24px,4vw,36px); flex-wrap:wrap; }
        .cp-tab { padding:9px 20px; border-radius:100px; border:2px solid #0c1a4e; background:transparent; font-size:0.75rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; color:#0c1a4e; transition:all 0.2s; display:flex; align-items:center; gap:6px; }
        .cp-tab-active { background:#0c1a4e; color:var(--yellow); }
        .cp-tab:hover:not(.cp-tab-active) { background:rgba(12,26,78,0.08); }
        .cp-slider { display:flex; align-items:center; gap:clamp(12px,2vw,24px); }
        .cp-arrow { width:clamp(44px,6vw,56px); height:clamp(44px,6vw,56px); border-radius:10px; background:#0c1a4e; border:none; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:900; color:var(--yellow); cursor:pointer; flex-shrink:0; transition:all 0.15s; }
        .cp-arrow:hover:not(:disabled) { background:var(--blue); transform:scale(1.05); }
        .cp-arrow:disabled { opacity:0.3; cursor:default; }
        .cp-card { flex:1; background:#fff; border-radius:clamp(16px,2.5vw,24px); padding:clamp(28px,4vw,48px); box-shadow:0 8px 40px rgba(0,0,0,0.12); min-height:clamp(200px,24vw,260px); display:flex; flex-direction:column; justify-content:center; }
        .cp-pill { display:inline-flex; align-items:center; background:var(--yellow); color:#0c1a4e; font-weight:900; font-size:0.68rem; letter-spacing:0.1em; text-transform:uppercase; padding:5px 14px; border-radius:100px; margin-bottom:14px; border:2px solid rgba(12,26,78,0.15); }
        .cp-title { font-size:clamp(1.2rem,2.5vw,1.8rem); color:var(--yellow); font-style:italic; letter-spacing:-0.01em; margin-bottom:16px; }
        .cp-desc { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(12,26,78,0.7); line-height:1.8; }
        .cp-nav-dots { display:flex; justify-content:center; gap:8px; margin-top:24px; }
        .cp-nav-dot { height:8px; border-radius:4px; border:none; cursor:pointer; padding:0; transition:all 0.25s; background:rgba(12,26,78,0.2); width:8px; }
        .cp-nav-dot-active { background:#0c1a4e; width:24px; }
      `}</style>

      <section className="cp-section">
        <div className="cp-dots">{Array.from({length:30}).map((_,i)=><div key={i} className="cp-dot"/>)}</div>
        <div className="container">
          <h2 className="font-display font-black uppercase cp-heading">COLLAB. CREATE. INNOVATE.</h2>

          <div className="cp-tabs">
            {STEPS.map((st,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`cp-tab${i===active?' cp-tab-active':''}`}>
                <span>{st.icon}</span> Step {st.step}
              </button>
            ))}
          </div>

          <div className="cp-slider">
            <button className="cp-arrow" onClick={()=>setActive(a=>Math.max(a-1,0))} disabled={active===0} aria-label="Previous">←</button>
            <div className="cp-card">
              <div className="cp-pill">STEP {s.step}</div>
              <h3 className="font-display font-black uppercase cp-title">{s.title}</h3>
              <p className="cp-desc">{s.desc}</p>
            </div>
            <button className="cp-arrow" onClick={()=>setActive(a=>Math.min(a+1,STEPS.length-1))} disabled={active===STEPS.length-1} aria-label="Next">→</button>
          </div>

          <div className="cp-nav-dots">
            {STEPS.map((_,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`cp-nav-dot${i===active?' cp-nav-dot-active':''}`} aria-label={`Step ${i+1}`}/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}