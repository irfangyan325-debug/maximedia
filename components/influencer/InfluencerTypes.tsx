'use client'
import { useState, useEffect, useCallback } from 'react'

const INFLUENCER_TYPES = [
  { type:'Nano', range:'1K–10K', icon:'🌱', color:'#22c55e', desc:'Highly engaged, niche audiences with authentic connections. Perfect for local brands and hyper-targeted campaigns with strong trust.' },
  { type:'Micro', range:'10K–100K', icon:'🌟', color:'var(--inf-orange)', desc:'The sweet spot of influencer marketing — strong engagement rates, niche authority, and cost-effective reach for growing brands.' },
  { type:'Macro', range:'100K–1M', icon:'🚀', color:'#3b82f6', desc:'Broad reach with established credibility. Ideal for brand awareness campaigns and reaching diverse audience segments at scale.' },
  { type:'Mega', range:'1M+', icon:'👑', color:'#8b5cf6', desc:'Maximum exposure and cultural influence. Best for major product launches, brand repositioning, and viral campaign potential.' },
]

export default function InfluencerTypes() {
  const [active, setActive] = useState(1) // Default to Micro
  const next = useCallback(() => setActive(a=>(a+1)%INFLUENCER_TYPES.length), [])
  useEffect(() => { const id = setInterval(next, 3800); return ()=>clearInterval(id) }, [next])
  const v = INFLUENCER_TYPES[active]

  return (
    <>
      <style>{`
        .it-section { background:var(--inf-orange-light,#fff7ed); padding:clamp(64px,9vw,100px) 0; overflow:hidden; position:relative; }
        .it-wave { position:absolute; top:-2px; left:0; right:0; line-height:0; pointer-events:none; }
        .it-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .it-card { background:var(--inf-orange); border-radius:clamp(18px,3vw,26px); padding:clamp(28px,4vw,44px); position:relative; overflow:hidden; min-height:clamp(280px,36vw,400px); display:flex; flex-direction:column; justify-content:flex-end; box-shadow:0 16px 48px rgba(249,115,22,0.25); }
        .it-float-top { position:absolute; top:clamp(12px,2vw,20px); right:clamp(12px,2vw,24px); font-size:clamp(3rem,5.5vw,4.5rem); filter:drop-shadow(0 6px 16px rgba(0,0,0,0.15)); line-height:1; }
        .it-badge { position:absolute; top:clamp(12px,2vw,20px); left:clamp(14px,2.5vw,24px); background:#1c0a00; color:var(--inf-orange); border-radius:100px; padding:6px 16px; font-size:0.72rem; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; }
        .it-type-name { font-size:clamp(2rem,4.5vw,3.2rem); line-height:1.0; color:#fff; letter-spacing:-0.02em; margin-bottom:6px; position:relative; z-index:1; }
        .it-range { font-size:clamp(1rem,2vw,1.4rem); color:rgba(255,255,255,0.75); font-weight:700; margin-bottom:clamp(10px,1.5vw,16px); position:relative; z-index:1; }
        .it-type-desc { font-size:clamp(0.85rem,1.4vw,0.98rem); color:rgba(255,255,255,0.85); line-height:1.78; position:relative; z-index:1; }
        .it-arrows { display:flex; gap:12px; margin-top:16px; }
        .it-arrow { width:clamp(44px,5vw,52px); height:clamp(44px,5vw,52px); border-radius:10px; background:#1c0a00; border:none; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:900; color:var(--inf-orange); cursor:pointer; transition:all 0.15s; }
        .it-arrow:hover { background:#000; transform:scale(1.05); }
        .it-dots { display:flex; gap:8px; margin-top:14px; align-items:center; }
        .it-dot { height:8px; width:8px; border-radius:4px; border:none; cursor:pointer; padding:0; transition:all 0.25s; background:rgba(28,10,0,0.18); }
        .it-dot-active { background:#1c0a00; width:24px; }
        .it-tabs { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:20px; }
        .it-tab { padding:8px 16px; border-radius:100px; border:2px solid #1c0a00; background:transparent; font-size:0.72rem; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; cursor:pointer; color:#1c0a00; transition:all 0.2s; }
        .it-tab-active { background:#1c0a00; color:var(--inf-orange); }
        @media (max-width:768px) { .it-grid { grid-template-columns:1fr; gap:32px; } }
      `}</style>

      <section className="it-section">
        <div className="it-wave">
          <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%'}} preserveAspectRatio="none">
            <path d="M0,0 C360,48 1080,0 1440,32 L1440,0 L0,0 Z" fill="#fff"/>
          </svg>
        </div>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--inf-orange)',marginBottom:'8px'}}>FIND YOUR MATCH</p>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4.5vw,3rem)',color:'#1c0a00',lineHeight:1.05,letterSpacing:'-0.02em'}}>
              EVERY TYPE OF INFLUENCER,{' '}
              <span style={{color:'var(--inf-orange)',textDecoration:'underline',textDecorationColor:'var(--inf-orange)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>COVERED</span>
            </h2>
          </div>

          <div className="it-grid">
            {/* Left: auto-sliding orange card */}
            <div>
              <div className="it-card">
                <div className="it-float-top">{v.icon}</div>
                <div className="it-badge">INFLUENCER TYPE</div>
                <h3 className="font-display font-black uppercase it-type-name">{v.type}</h3>
                <p className="it-range">{v.range} followers</p>
                <p className="it-type-desc">{v.desc}</p>
              </div>
              <div className="it-arrows">
                <button className="it-arrow" onClick={()=>setActive(a=>(a-1+INFLUENCER_TYPES.length)%INFLUENCER_TYPES.length)} aria-label="Previous">←</button>
                <button className="it-arrow" onClick={next} aria-label="Next">→</button>
              </div>
              <div className="it-dots">
                {INFLUENCER_TYPES.map((_,i)=>(
                  <button key={i} onClick={()=>setActive(i)} className={`it-dot${i===active?' it-dot-active':''}`} aria-label={`Type ${i+1}`}/>
                ))}
              </div>
            </div>

            {/* Right: heading + tabs */}
            <div>
              <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.6rem,3.5vw,2.6rem)',color:'#1c0a00',lineHeight:1.1,letterSpacing:'-0.01em',marginBottom:'16px'}}>
                WE WORK WITH INFLUENCERS OF ALL SIZES
              </h2>
              <p style={{fontSize:'clamp(0.9rem,1.5vw,1.02rem)',color:'rgba(28,10,0,0.68)',lineHeight:1.82,marginBottom:'24px'}}>
                From nano creators with hyper-engaged niche followings to mega influencers with millions of fans — we know which tier is right for your campaign, budget, and goals.
              </p>
              <p style={{fontSize:'0.85rem',color:'rgba(28,10,0,0.5)',marginBottom:'14px',fontWeight:600,letterSpacing:'0.04em',textTransform:'uppercase'}}>Select a tier to learn more:</p>
              <div className="it-tabs">
                {INFLUENCER_TYPES.map((t,i)=>(
                  <button key={t.type} onClick={()=>setActive(i)} className={`it-tab${i===active?' it-tab-active':''}`}>
                    {t.icon} {t.type} ({t.range})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}