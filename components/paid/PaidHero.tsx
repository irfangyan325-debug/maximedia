import Link from 'next/link'

export default function PaidHero() {
  return (
    <>
      <style>{`
        .ph-section { background:var(--yellow); padding-top:calc(var(--nav-h) + clamp(56px,8vw,90px)); padding-bottom:clamp(72px,10vw,110px); position:relative; overflow:hidden; text-align:center; }
        .ph-dots { position:absolute; bottom:24px; right:32px; display:grid; grid-template-columns:repeat(10,8px); gap:6px; pointer-events:none; opacity:0.25; }
        .ph-dots2 { position:absolute; top:20px; left:24px; display:grid; grid-template-columns:repeat(8,8px); gap:6px; pointer-events:none; opacity:0.18; }
        .ph-dot { width:5px; height:5px; border-radius:50%; background:#0c1a4e; }
        .ph-title-black { font-size:clamp(2.0rem,6.5vw,3.8rem); line-height:1.0; color:#0c1a4e; letter-spacing:-0.02em; display:block; margin-bottom:4px; }
        .ph-title-white { font-size:clamp(2.0rem,6.5vw,3.8rem); line-height:1.0; color:#ffffff; letter-spacing:-0.02em; display:block; text-decoration:underline; text-decoration-color:#ffffff; text-decoration-thickness:5px; text-underline-offset:8px; margin-bottom:clamp(20px,3vw,32px); }
        .ph-desc { font-size:clamp(0.92rem,1.6vw,1.05rem); color:#0c1a4e; line-height:1.82; max-width:640px; margin:0 auto clamp(28px,4vw,40px); }
        .ph-btn { display:inline-flex; align-items:center; padding:clamp(15px,2.5vw,20px) clamp(30px,5vw,52px); background:#0c1a4e; color:var(--yellow); border-radius:12px; font-size:clamp(0.78rem,1.4vw,0.9rem); letter-spacing:0.12em; text-decoration:none; transition:all 0.15s ease; border:2px solid #0c1a4e; }
        .ph-btn:hover { background:var(--blue); border-color:var(--blue); transform:translateY(-2px); }
        .ph-platforms { display:flex; justify-content:center; gap:10px; margin-top:32px; flex-wrap:wrap; }
        .ph-platform { display:flex; align-items:center; gap:6px; padding:7px 14px; background:rgba(12,26,78,0.08); border-radius:100px; border:1.5px solid rgba(12,26,78,0.15); }
      `}</style>

      <section className="ph-section">
        <div className="ph-dots">{Array.from({length:30}).map((_,i)=><div key={i} className="ph-dot"/>)}</div>
        <div className="ph-dots2">{Array.from({length:24}).map((_,i)=><div key={i} className="ph-dot"/>)}</div>

        <div className="container">

          <h1 className="font-display font-black uppercase">
            <span className="ph-title-black">UNLOCK THE POWER OF ADS WITH</span>
            <span className="ph-title-white">PAID SOCIAL ADVERTISING</span>
          </h1>

          <p className="ph-desc">
            Maximize the impact of your social media campaigns by exploring the benefits of social media advertising for your business.
          </p>

          <Link href="/contact" className="font-display font-black uppercase ph-btn">
            GET YOUR FREE CUSTOM PROPOSAL
          </Link>
        </div>
      </section>
    </>
  )
}