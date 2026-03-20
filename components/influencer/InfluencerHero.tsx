import Link from 'next/link'

// Orange accent color for this page
// --inf-orange: #f97316  (Tailwind orange-500)
// --inf-orange-dark: #ea580c

export default function InfluencerHero() {
  return (
    <>
      <style>{`
        :root { --inf-orange: #f97316; --inf-orange-dark: #ea580c; --inf-orange-light: #fff7ed; }
        .ih-section { background: var(--inf-orange); padding-top:calc(var(--nav-h) + clamp(56px,8vw,90px)); padding-bottom:clamp(72px,10vw,110px); position:relative; overflow:hidden; text-align:center; }
        .ih-dots { position:absolute; bottom:24px; right:32px; display:grid; grid-template-columns:repeat(10,8px); gap:6px; pointer-events:none; opacity:0.25; }
        .ih-dots2 { position:absolute; top:20px; left:24px; display:grid; grid-template-columns:repeat(8,8px); gap:6px; pointer-events:none; opacity:0.18; }
        .ih-dot { width:5px; height:5px; border-radius:50%; background:#fff; }
        .ih-title-white { font-size:clamp(2.2rem,6.5vw,4.4rem); line-height:1.0; color:#ffffff; letter-spacing:-0.02em; display:block; margin-bottom:4px; }
        .ih-title-dark { font-size:clamp(2.2rem,6.5vw,4.2rem); line-height:1.4; color:#1c0a00; letter-spacing:-0.02em; display:block; text-decoration:underline; text-decoration-color:#fff; text-decoration-thickness:5px; text-underline-offset:8px; margin-bottom:clamp(20px,3vw,32px); }
        .ih-desc { font-size:clamp(0.92rem,1.6vw,1.05rem); color:rgba(255,255,255,0.92); line-height:1.82; max-width:680px; margin:0 auto clamp(28px,4vw,40px); }
        .ih-btn { display:inline-flex; align-items:center; padding:clamp(15px,2.5vw,20px) clamp(30px,5vw,52px); background:#1c0a00; color:var(--inf-orange); border-radius:12px; font-size:clamp(0.78rem,1.4vw,0.9rem); letter-spacing:0.12em; text-decoration:none; transition:all 0.15s; border:2px solid #1c0a00; }
        .ih-btn:hover { background:#000; transform:translateY(-2px); }
        .ih-platforms { display:flex; justify-content:center; gap:10px; margin-top:32px; flex-wrap:wrap; }
        .ih-platform { display:flex; align-items:center; gap:6px; padding:7px 14px; background:rgba(255,255,255,0.18); border-radius:100px; border:1.5px solid rgba(255,255,255,0.3); }
      `}</style>

      <section className="ih-section">
        <div className="ih-dots">{Array.from({length:30}).map((_,i)=><div key={i} className="ih-dot"/>)}</div>
        <div className="ih-dots2">{Array.from({length:24}).map((_,i)=><div key={i} className="ih-dot"/>)}</div>

        {/* Floating megaphone emojis */}
        <div style={{position:'absolute',top:'15%',left:'5%',fontSize:'clamp(2.5rem,5vw,4rem)',opacity:0.7,pointerEvents:'none',filter:'drop-shadow(0 8px 16px rgba(0,0,0,0.2))'}}>📣</div>
        <div style={{position:'absolute',top:'10%',right:'6%',fontSize:'clamp(2rem,4vw,3.2rem)',opacity:0.6,pointerEvents:'none',filter:'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'}}>📢</div>
        <div style={{position:'absolute',bottom:'20%',right:'7%',fontSize:'clamp(1.8rem,3.5vw,2.8rem)',opacity:0.5,pointerEvents:'none'}}>🌟</div>
        <div style={{position:'absolute',bottom:'25%',left:'6%',fontSize:'clamp(1.6rem,3vw,2.4rem)',opacity:0.45,pointerEvents:'none'}}>🎯</div>

        <div className="container">

          <h1 className="font-display font-black uppercase">
            <span className="ih-title-white">RUN HYPER-TARGETED INFLUENCER</span>
            <span className="ih-title-dark">CAMPAIGNS THAT ACTUALLY DELIVER</span>
          </h1>

          <p className="ih-desc">
            Looking to boost conversions and build serious brand buzz? Influencer marketing is your move, and MAXIMEDIA is your go-to partner to make it happen. We handle everything: sourcing talent, negotiating contracts, coordinating content, and publishing posts.
          </p>

          <Link href="/contact" className="font-display font-black uppercase ih-btn">
            GET YOUR FREE CUSTOM PROPOSAL
          </Link>

        </div>

        {/* Wave bottom */}
        <div style={{position:'absolute',bottom:-2,left:0,right:0,lineHeight:0}}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%'}} preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>
    </>
  )
}