'use client'
import { useState, useEffect, useCallback } from 'react'

const VIDEO_TYPES = [
  { id:'about', label:'About Us',    icon:'🏢', color:'#1a56db', desc:'Tell your brand story with an authentic, compelling About Us video that connects with your audience and builds trust from the first frame.' },
  { id:'promo', label:'Social Promo', icon:'📢', color:'#e60023', desc:'Drive action with punchy, attention-grabbing promo videos built for social feeds. Perfect for product launches, sales, events, and more.' },
  { id:'howto', label:'How To',       icon:'🎓', color:'#00b67a', desc:'Educate your audience with clear, engaging how-to content that demonstrates value, builds authority, and keeps viewers coming back.' },
  { id:'fun',   label:'Funderstruck', icon:'🎉', color:'#f5c518', desc:'Entertain and surprise your followers with fun, shareable content that captures personality and makes your brand impossible to ignore.' },
]

export default function ContentVideoTypes() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive(a => (a + 1) % VIDEO_TYPES.length), [])
  useEffect(() => { const id = setInterval(next, 3500); return () => clearInterval(id) }, [next])

  const v = VIDEO_TYPES[active]

  return (
    <>
      <style>{`
        .cvt-section { background:#fef9e7; padding:clamp(64px,9vw,100px) 0; overflow:hidden; position:relative; }
        .cvt-wave { position:absolute; top:-2px; left:0; right:0; line-height:0; pointer-events:none; }
        .cvt-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .cvt-card { background:var(--yellow); border-radius:clamp(18px,3vw,26px); padding:clamp(28px,4vw,44px); position:relative; overflow:hidden; min-height:clamp(280px,36vw,400px); display:flex; flex-direction:column; justify-content:flex-end; box-shadow:0 16px 48px rgba(0,0,0,0.1); transition:all 0.3s ease; }
        .cvt-float-top { position:absolute; top:clamp(12px,2vw,20px); right:clamp(12px,2vw,24px); font-size:clamp(3rem,5.5vw,4.5rem); filter:drop-shadow(0 6px 16px rgba(0,0,0,0.2)); line-height:1; transition:all 0.3s ease; }
        .cvt-float-bottom { position:absolute; bottom:clamp(80px,10vw,120px); left:clamp(12px,2vw,24px); font-size:clamp(2rem,3.5vw,3rem); filter:drop-shadow(0 6px 16px rgba(0,0,0,0.15)); line-height:1; opacity:0.7; }
        .cvt-platform-name { font-size:clamp(1.8rem,4vw,3rem); line-height:1.0; color:#0c1a4e; letter-spacing:-0.02em; margin-bottom:clamp(10px,1.5vw,16px); position:relative; z-index:1; }
        .cvt-platform-desc { font-size:clamp(0.85rem,1.4vw,0.98rem); color:rgba(12,26,78,0.75); line-height:1.78; position:relative; z-index:1; }
        .cvt-tabs { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px; }
        .cvt-tab { padding:8px 16px; border-radius:100px; border:2px solid #0c1a4e; background:transparent; font-size:0.72rem; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; cursor:pointer; color:#0c1a4e; transition:all 0.2s; }
        .cvt-tab-active { background:#0c1a4e; color:var(--yellow); }
        .cvt-arrows { display:flex; gap:12px; margin-top:20px; }
        .cvt-arrow { width:clamp(44px,5vw,54px); height:clamp(44px,5vw,54px); border-radius:10px; background:#0c1a4e; border:none; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:900; color:var(--yellow); cursor:pointer; transition:all 0.15s; }
        .cvt-arrow:hover { background:var(--blue); transform:scale(1.05); }
        .cvt-nav-dots { display:flex; gap:8px; margin-top:14px; align-items:center; }
        .cvt-dot { height:8px; width:8px; border-radius:4px; border:none; cursor:pointer; padding:0; transition:all 0.25s; background:rgba(12,26,78,0.2); }
        .cvt-dot-active { background:#0c1a4e; width:24px; }
        @media (max-width:768px) { .cvt-grid { grid-template-columns:1fr; gap:32px; } }
      `}</style>

      <section className="cvt-section">
        <div className="cvt-wave">
          <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%'}} preserveAspectRatio="none">
            <path d="M0,0 C360,48 1080,0 1440,32 L1440,0 L0,0 Z" fill="#f2f5fc"/>
          </svg>
        </div>

        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--blue)',marginBottom:'8px'}}>VIDEO CONTENT</p>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4.5vw,3.2rem)',color:'#0c1a4e',lineHeight:1.05,letterSpacing:'-0.02em'}}>
              LET&apos;S TALK{' '}
              <span style={{color:'var(--yellow)',textDecoration:'underline',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>VIDEO</span>
            </h2>
          </div>

          <div className="cvt-grid">
            {/* Left: yellow card */}
            <div>
              <div className="cvt-card">
                <div className="cvt-float-top">{v.icon}</div>
                <div className="cvt-float-bottom">🎬</div>
                <h3 className="font-display font-black uppercase cvt-platform-name">{v.label}</h3>
                <p className="cvt-platform-desc">{v.desc}</p>
              </div>
              <div className="cvt-arrows">
                <button className="cvt-arrow" onClick={()=>setActive(a=>(a-1+VIDEO_TYPES.length)%VIDEO_TYPES.length)} aria-label="Previous">←</button>
                <button className="cvt-arrow" onClick={next} aria-label="Next">→</button>
              </div>
              <div className="cvt-nav-dots">
                {VIDEO_TYPES.map((_,i)=>(
                  <button key={i} onClick={()=>setActive(i)} className={`cvt-dot${i===active?' cvt-dot-active':''}`} aria-label={`Video type ${i+1}`}/>
                ))}
              </div>
            </div>

            {/* Right: heading + tabs */}
            <div>
              <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.6rem,3.5vw,2.6rem)',color:'#0c1a4e',lineHeight:1.1,letterSpacing:'-0.01em',marginBottom:'16px'}}>
                FROM SNAPPY HOOKS TO SCROLL-STOPPING VISUALS
              </h2>
              <p style={{fontSize:'clamp(0.9rem,1.5vw,1.02rem)',color:'rgba(12,26,78,0.68)',lineHeight:1.82,marginBottom:'24px'}}>
                Our TikTok strategy is built to boost visibility, grow your audience, and drive real engagement. Whether you&apos;re starting from zero or ready to level up, we&apos;ll help your brand show up, stand out, and go viral (on purpose).
              </p>
              <p style={{fontSize:'0.85rem',color:'rgba(12,26,78,0.5)',marginBottom:'16px',fontWeight:600,letterSpacing:'0.04em',textTransform:'uppercase'}}>Select a video type:</p>
              <div className="cvt-tabs">
                {VIDEO_TYPES.map((vt,i)=>(
                  <button key={vt.id} onClick={()=>setActive(i)} className={`cvt-tab${i===active?' cvt-tab-active':''}`}>
                    {vt.icon} {vt.label}
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