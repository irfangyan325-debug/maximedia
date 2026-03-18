import Link from 'next/link'

export default function CommunityHero() {
  return (
    <>
      <style>{`
        .ch-section {
          background: var(--blue);
          padding-top: calc(var(--nav-h) + clamp(56px,8vw,90px));
          padding-bottom: clamp(72px,10vw,110px);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .ch-dots { position:absolute; bottom:24px; right:32px; display:grid; grid-template-columns:repeat(10,8px); gap:6px; pointer-events:none; opacity:0.25; }
        .ch-dot { width:5px; height:5px; border-radius:50%; background:#0c1a4e; }
        .ch-dots2 { position:absolute; top:20px; left:24px; display:grid; grid-template-columns:repeat(8,8px); gap:6px; pointer-events:none; opacity:0.18; }
        .ch-title-black { font-size:clamp(2.2rem,6.5vw,4.8rem); line-height:1.0; color:#0c1a4e; letter-spacing:-0.02em; display:block; margin-bottom:4px; }
        .ch-title-white { font-size:clamp(2.2rem,6.5vw,4.8rem); line-height:1.0; color:#ffffff; letter-spacing:-0.02em; display:block; text-decoration:underline; text-decoration-color:#ffffff; text-decoration-thickness:5px; text-underline-offset:8px; margin-bottom:clamp(20px,3vw,32px); }
        .ch-desc { font-size:clamp(0.92rem,1.6vw,1.05rem); color:#0c1a4e; line-height:1.82; max-width:680px; margin:0 auto clamp(28px,4vw,40px); }
        .ch-btn { display:inline-flex; align-items:center; padding:clamp(15px,2.5vw,20px) clamp(30px,5vw,52px); background:#0c1a4e; color:var(--yellow); border-radius:12px; font-size:clamp(0.78rem,1.4vw,0.9rem); letter-spacing:0.12em; text-decoration:none; transition:all 0.15s ease; border:2px solid #0c1a4e; }
        .ch-btn:hover { background:var(--blue); border-color:var(--blue); transform:translateY(-2px); }
        .ch-platforms { display:flex; justify-content:center; gap:12px; margin-top:32px; flex-wrap:wrap; }
        .ch-platform { display:flex; align-items:center; gap:6px; padding:7px 14px; background:rgba(12,26,78,0.08); border-radius:100px; border:1.5px solid rgba(12,26,78,0.15); }
      `}</style>

      <section className="ch-section">
        <div className="ch-dots">{Array.from({length:30}).map((_,i)=><div key={i} className="ch-dot"/>)}</div>
        <div className="ch-dots2">{Array.from({length:24}).map((_,i)=><div key={i} className="ch-dot"/>)}</div>

        <div className="container">
          

          <h1 className="font-display font-black uppercase">
            <span className="ch-title-black">COMMUNITY MANAGEMENT:</span>
            <span className="ch-title-white">YOUR PARTNER IN ENGAGEMENT</span>
          </h1>

          <p className="ch-desc">
            We manage AND build communities. Our dedicated team helps brands foster real, lasting connections through smart strategy, authentic conversations, and meaningful engagement — turning followers into loyal advocates.
          </p>

          <Link href="/contact" className="font-display font-black uppercase ch-btn">
            GET YOUR FREE CUSTOM PROPOSAL
          </Link>

        </div>
      </section>
    </>
  )
}