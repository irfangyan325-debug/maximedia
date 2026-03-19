import Link from 'next/link'
import Image from 'next/image'

export default function ContentHero() {
  return (
    <>
      <style>{`
        .cph-section { background:var(--blue); padding-top:calc(var(--nav-h) + clamp(56px,8vw,90px)); padding-bottom:clamp(72px,10vw,110px); position:relative; overflow:hidden; text-align:center; }
        .cph-dots { position:absolute; bottom:24px; right:32px; display:grid; grid-template-columns:repeat(10,8px); gap:6px; pointer-events:none; opacity:0.25; }
        .cph-dots2 { position:absolute; top:20px; left:24px; display:grid; grid-template-columns:repeat(8,8px); gap:6px; pointer-events:none; opacity:0.18; }
        .cph-dot { width:5px; height:5px; border-radius:50%; background:#0c1a4e; }
        .cph-title-black { font-size:clamp(2.2rem,6.5vw,4.8rem); line-height:1.0; color:#0c1a4e; letter-spacing:-0.02em; display:block; margin-bottom:4px; }
        .cph-title-white { font-size:clamp(2.2rem,6.5vw,4.8rem); line-height:1.0; color:#ffffff; letter-spacing:-0.02em; display:block; text-decoration:underline; text-decoration-color:#ffffff; text-decoration-thickness:5px; text-underline-offset:8px; margin-bottom:clamp(18px,3vw,28px); }
        .cph-desc { font-size:clamp(0.92rem,1.6vw,1.05rem); color:#0c1a4e; line-height:1.82; max-width:660px; margin:0 auto clamp(28px,4vw,40px); }
        .cph-btn { display:inline-flex; align-items:center; padding:clamp(15px,2.5vw,20px) clamp(30px,5vw,52px); background:#0c1a4e; color:var(--yellow); border-radius:12px; font-size:clamp(0.78rem,1.4vw,0.9rem); letter-spacing:0.12em; text-decoration:none; transition:all 0.15s; border:2px solid #0c1a4e; }
        .cph-btn:hover { background:var(--blue); border-color:var(--blue); transform:translateY(-2px); }
        .cph-floats { position:absolute; pointer-events:none; }
      `}</style>

      <section className="cph-section">
        <div className="cph-dots">{Array.from({length:30}).map((_,i)=><div key={i} className="cph-dot"/>)}</div>
        <div className="cph-dots2">{Array.from({length:24}).map((_,i)=><div key={i} className="cph-dot"/>)}</div>

        {/* Floating dartboard emojis */}
        <div style={{position:'absolute',top:'18%',left:'5%',fontSize:'clamp(2.5rem,5vw,4rem)',opacity:0.7,pointerEvents:'none',filter:'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'}}>🎯</div>
        <div style={{position:'absolute',top:'12%',right:'6%',fontSize:'clamp(2rem,4vw,3.2rem)',opacity:0.6,pointerEvents:'none',filter:'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'}}>🎯</div>
        <div style={{position:'absolute',bottom:'18%',right:'8%',fontSize:'clamp(1.8rem,3.5vw,2.8rem)',opacity:0.5,pointerEvents:'none'}}>✨</div>

        <div className="container">
        
          <h1 className="font-display font-black uppercase">
            <span className="cph-title-black">STAND OUT WITH SOCIAL MEDIA</span>
            <span className="cph-title-white">CONTENT THAT CONVERTS</span>
          </h1>

          <p className="cph-desc">
            <strong>At MAXIMEDIA, we believe in an insight-driven approach.</strong> We understand that creating social content just because it&apos;s trendy isn&apos;t enough. Instead, we strive to remove waste and spend time and money on what works.
          </p>

          <Link href="/contact" className="font-display font-black uppercase cph-btn">
            GET YOUR FREE CUSTOM PROPOSAL
          </Link>

        </div>
      </section>
    </>
  )
}