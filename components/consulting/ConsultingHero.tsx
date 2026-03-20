import Link from 'next/link'

export default function ConsultingHero() {
  return (
    <>
      <style>{`
        :root {
          --con-black: #0a0a0a;
          --con-dark: #111111;
          --con-card: #1a1a1a;
          --con-border: rgba(255,255,255,0.1);
          --con-yellow: #f5c518;
          --con-text: rgba(255,255,255,0.82);
          --con-muted: rgba(255,255,255,0.45);
        }
        .conh-section {
          background: var(--con-black);
          padding-top: calc(var(--nav-h) + clamp(56px,8vw,90px));
          padding-bottom: clamp(72px,10vw,110px);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .conh-dots { position:absolute; bottom:24px; right:32px; display:grid; grid-template-columns:repeat(10,8px); gap:6px; pointer-events:none; opacity:0.15; }
        .conh-dots2 { position:absolute; top:20px; left:24px; display:grid; grid-template-columns:repeat(8,8px); gap:6px; pointer-events:none; opacity:0.1; }
        .conh-dot { width:5px; height:5px; border-radius:50%; background:#fff; }
        .conh-title-white { font-size:clamp(2.2rem,6.5vw,4.8rem); line-height:1.0; color:#ffffff; letter-spacing:-0.02em; display:block; margin-bottom:4px; }
        .conh-title-yellow { font-size:clamp(2.2rem,6.5vw,4.8rem); line-height:1.0; color:var(--con-yellow); letter-spacing:-0.02em; display:block; text-decoration:underline; text-decoration-color:var(--con-yellow); text-decoration-thickness:5px; text-underline-offset:8px; margin-bottom:clamp(20px,3vw,32px); }
        .conh-desc { font-size:clamp(0.92rem,1.6vw,1.05rem); color:var(--con-text); line-height:1.82; max-width:680px; margin:0 auto clamp(28px,4vw,40px); }
        .conh-btn { display:inline-flex; align-items:center; padding:clamp(15px,2.5vw,20px) clamp(30px,5vw,52px); background:var(--con-yellow); color:#0a0a0a; border-radius:12px; font-size:clamp(0.78rem,1.4vw,0.9rem); letter-spacing:0.12em; text-decoration:none; transition:all 0.15s; border:2px solid var(--con-yellow); font-weight:900; }
        .conh-btn:hover { background:#d9a800; border-color:#d9a800; transform:translateY(-2px); }
        /* Grid lines decoration */
        .conh-grid-lines { position:absolute; inset:0; pointer-events:none; background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size:60px 60px; }
      `}</style>

      <section className="conh-section">
        <div className="conh-grid-lines" />
        <div className="conh-dots">{Array.from({length:30}).map((_,i)=><div key={i} className="conh-dot"/>)}</div>
        <div className="conh-dots2">{Array.from({length:24}).map((_,i)=><div key={i} className="conh-dot"/>)}</div>

        {/* Floating bulb emojis */}
        <div style={{position:'absolute',top:'15%',left:'5%',fontSize:'clamp(2.5rem,5vw,4rem)',opacity:0.5,pointerEvents:'none',filter:'drop-shadow(0 0 20px rgba(245,197,24,0.4))'}}>💡</div>
        <div style={{position:'absolute',top:'10%',right:'6%',fontSize:'clamp(2rem,4vw,3.2rem)',opacity:0.4,pointerEvents:'none',filter:'drop-shadow(0 0 16px rgba(245,197,24,0.3))'}}>💡</div>
        <div style={{position:'absolute',bottom:'20%',right:'7%',fontSize:'clamp(1.8rem,3.5vw,2.8rem)',opacity:0.35,pointerEvents:'none'}}>📊</div>
        <div style={{position:'absolute',bottom:'22%',left:'6%',fontSize:'clamp(1.6rem,3vw,2.4rem)',opacity:0.3,pointerEvents:'none'}}>🚀</div>

        <div className="container">
          <h1 className="font-display font-black uppercase">
            <span className="conh-title-white">READY TO STOP GUESSING</span>
            <span className="conh-title-yellow">AND START GROWING?</span>
          </h1>

          <p className="conh-desc">
            Feeling lost in the scroll? Our team of seasoned social pros know the ins, outs, and algorithm shifts of every major platform — crafting dynamic consulting packages built to help you crush your social media goals.
          </p>

          <Link href="/contact" className="font-display font-black uppercase conh-btn">
            GET YOUR FREE CUSTOM PROPOSAL
          </Link>

        </div>

        {/* Bottom gradient fade */}
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'80px',background:'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03))',pointerEvents:'none'}}/>
      </section>
    </>
  )
}