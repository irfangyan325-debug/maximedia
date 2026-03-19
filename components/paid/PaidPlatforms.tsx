const PLATFORMS = [
  { name:'Facebook',  emoji:'📘', color:'#1877f2', desc:'Reach billions with precise targeting across News Feed, Stories, Reels, and Marketplace.' },
  { name:'Instagram', emoji:'📸', color:'#e1306c', desc:'Drive discovery with stunning visuals, Reels, Stories, and shoppable posts.' },
  { name:'TikTok',    emoji:'🎵', color:'#010101', desc:'Dominate short-form video with authentic, trend-driven ads that reach Gen Z and beyond.' },
  { name:'LinkedIn',  emoji:'💼', color:'#0a66c2', desc:'Target professionals and decision-makers with B2B campaigns built to convert.' },
  { name:'YouTube',   emoji:'▶️', color:'#ff0000', desc:'Capture attention with pre-roll, bumper, and skippable video ads on the world\'s #2 search engine.' },
  { name:'Pinterest', emoji:'📌', color:'#e60023', desc:'Inspire purchase decisions with visually-rich promoted pins that drive shopping intent.' },
  { name:'X',         emoji:'𝕏',  color:'#000000', desc:'Join real-time conversations and reach engaged audiences with promoted tweets and trends.' },
  { name:'Snapchat',  emoji:'👻', color:'#fffc00', desc:'Connect with younger audiences through immersive, full-screen vertical video ads.' },
]

export default function PaidPlatforms() {
  return (
    <>
      <style>{`
        .ppl-section { background:#ffffff; padding:clamp(72px,9vw,100px) 0; }
        .ppl-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .ppl-card { background:#fff; border:2px solid #b8dff0; border-radius:16px; padding:22px 16px 24px; text-align:center; position:relative; overflow:hidden; box-shadow:5px 5px 0 #b8dff0; transition:transform 0.2s ease,box-shadow 0.2s ease; }
        .ppl-card:hover { transform:translateY(-4px); box-shadow:5px 9px 0 #a0cce8; }
        .ppl-card::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:5px; height:44px; background:var(--blue); border-radius:4px 0 0 4px; }
        .ppl-icon-wrap { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:1.6rem; margin:0 auto 12px; }
        @media (max-width:900px) { .ppl-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:480px) { .ppl-grid { grid-template-columns:repeat(2,1fr); } }
      `}</style>

      <section className="ppl-section">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--yellow)',marginBottom:'8px'}}>EVERY PLATFORM</p>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.7rem,4vw,2.8rem)',color:'var(--blue)',lineHeight:1.08,letterSpacing:'-0.01em',maxWidth:'700px',margin:'0 auto 14px'}}>
              WHEREVER YOUR AUDIENCE IS,{' '}
              <span style={{color:'var(--yellow)',textDecoration:'underline',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>THAT&apos;S WHERE WE ARE</span>
            </h2>
            <p style={{fontSize:'0.95rem',color:'rgba(12,26,78,0.55)',maxWidth:'560px',margin:'0 auto',lineHeight:1.75}}>
              We have the ability to strategize and manage successful campaigns on every major social media platform.
            </p>
          </div>
          <div className="ppl-grid">
            {PLATFORMS.map(p=>(
              <div key={p.name} className="ppl-card">
                <div className="ppl-icon-wrap" style={{background:`${p.color}18`}}>
                  <span>{p.emoji}</span>
                </div>
                <h3 className="font-display font-black uppercase" style={{fontSize:'0.82rem',color:'var(--blue)',marginBottom:'8px',letterSpacing:'0.02em'}}>{p.name}</h3>
                <p style={{fontSize:'0.76rem',color:'rgba(12,26,78,0.6)',lineHeight:1.65}}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}