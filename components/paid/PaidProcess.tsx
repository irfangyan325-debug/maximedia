'use client'
import { useState } from 'react'

const STEPS = [
  {
    step:1, icon:'📊', title:'Conversion Tracking and Optimization',
    desc:`Monitoring and evaluating the performance of your campaign's conversion rates and ad spend is of paramount importance. This enables you to understand the return on investment for each campaign and adjust your marketing strategies accordingly.

At MAXIMEDIA, we keep a close eye on the conversions, clicks, interactions, and performance of each ad, so we're always aware of what requires improvement and what's performing well.

Our people are constantly monitoring what you're paying for when you buy social media ads. We're always experimenting with new social media advertising strategies, and we know the pros and cons of each platform.`,
  },
  {
    step:2, icon:'🎯', title:'Proper Targeting Selection',
    desc:`Our goal is to always stay current with the most recent ad targeting options in paid social media. Navigating the options on platforms like Facebook, Instagram, TikTok, and other social media platforms can be challenging, so we've made it our mission to concentrate on selecting the appropriate targeting and staying ahead of the social media game.

We don't limit ourselves to specific techniques or channels, but instead, we constantly explore new opportunities to achieve the best results in line with the latest social media trends.`,
  },
  {
    step:3, icon:'🚀', title:'Commitment to Innovation',
    desc:`It's a well-known fact that social media platforms are always evolving. With such a dynamic space, we must ensure that as professionals we keep up with the shifting focus and stay current with the latest trends across all platforms.

As a team, we strive to be innovative, quick and sharp in our understanding and execution of new trends and advancements in social media advertising. Since the paid media field is always evolving, we are dedicated to staying on top of the latest products and services available.

Your agency search is over — let's get started!`,
  },
]

export default function PaidProcess() {
  const [active, setActive] = useState(0)
  const s = STEPS[active]

  return (
    <>
      <style>{`
        .pp-section { background:var(--yellow); padding:clamp(64px,9vw,100px) 0; position:relative; overflow:hidden; }
        .pp-dots { position:absolute; top:20px; right:28px; display:grid; grid-template-columns:repeat(10,8px); gap:6px; opacity:0.2; pointer-events:none; }
        .pp-dot { width:5px; height:5px; border-radius:50%; background:#0c1a4e; }
        .pp-heading { font-size:clamp(2rem,5.5vw,4rem); line-height:1.05; color:#0c1a4e; letter-spacing:-0.02em; text-align:center; margin-bottom:clamp(32px,5vw,52px); }
        .pp-tabs { display:flex; justify-content:center; gap:10px; margin-bottom:clamp(24px,4vw,36px); flex-wrap:wrap; }
        .pp-tab { padding:9px 20px; border-radius:100px; border:2px solid #0c1a4e; background:transparent; font-size:0.75rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; color:#0c1a4e; transition:all 0.2s; display:flex; align-items:center; gap:6px; }
        .pp-tab-active { background:#0c1a4e; color:var(--yellow); }
        .pp-tab:hover:not(.pp-tab-active) { background:rgba(12,26,78,0.08); }
        .pp-slider { display:flex; align-items:center; gap:clamp(12px,2vw,24px); }
        .pp-arrow { width:clamp(44px,6vw,56px); height:clamp(44px,6vw,56px); border-radius:10px; background:#0c1a4e; border:none; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:900; color:var(--yellow); cursor:pointer; flex-shrink:0; transition:all 0.15s; }
        .pp-arrow:hover:not(:disabled) { background:var(--blue); transform:scale(1.05); }
        .pp-arrow:disabled { opacity:0.3; cursor:default; }
        .pp-card { flex:1; background:#fff; border-radius:clamp(16px,2.5vw,24px); padding:clamp(28px,4vw,48px); box-shadow:0 8px 40px rgba(0,0,0,0.12); min-height:clamp(220px,28vw,300px); }
        .pp-pill { display:inline-flex; align-items:center; background:var(--yellow); color:#0c1a4e; font-weight:900; font-size:0.68rem; letter-spacing:0.1em; text-transform:uppercase; padding:5px 14px; border-radius:100px; margin-bottom:14px; border:2px solid rgba(12,26,78,0.15); }
        .pp-title { font-size:clamp(1.1rem,2.5vw,1.8rem); color:var(--yellow); font-style:italic; letter-spacing:-0.01em; margin-bottom:16px; }
        .pp-desc { font-size:clamp(0.85rem,1.4vw,0.96rem); color:rgba(12,26,78,0.7); line-height:1.8; white-space:pre-line; }
        .pp-nav-dots { display:flex; justify-content:center; gap:8px; margin-top:24px; }
        .pp-nav-dot { height:8px; border-radius:4px; border:none; cursor:pointer; padding:0; transition:all 0.25s; background:rgba(12,26,78,0.2); width:8px; }
        .pp-nav-dot-active { background:#0c1a4e; width:24px; }
      `}</style>

      <section className="pp-section">
        <div className="pp-dots">{Array.from({length:30}).map((_,i)=><div key={i} className="pp-dot"/>)}</div>
        <div className="container">
          <h2 className="font-display font-black uppercase pp-heading">WHAT TO EXPECT FROM PAID SOCIAL</h2>

          <div className="pp-tabs">
            {STEPS.map((st,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`pp-tab${i===active?' pp-tab-active':''}`}>
                <span>{st.icon}</span> Step {st.step}
              </button>
            ))}
          </div>

          <div className="pp-slider">
            <button className="pp-arrow" onClick={()=>setActive(a=>Math.max(a-1,0))} disabled={active===0} aria-label="Previous">←</button>
            <div className="pp-card">
              <div className="pp-pill">STEP {s.step}</div>
              <h3 className="font-display font-black uppercase pp-title">{s.title}</h3>
              <p className="pp-desc">{s.desc}</p>
            </div>
            <button className="pp-arrow" onClick={()=>setActive(a=>Math.min(a+1,STEPS.length-1))} disabled={active===STEPS.length-1} aria-label="Next">→</button>
          </div>

          <div className="pp-nav-dots">
            {STEPS.map((_,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`pp-nav-dot${i===active?' pp-nav-dot-active':''}`} aria-label={`Step ${i+1}`}/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}