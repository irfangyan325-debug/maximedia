import Image from 'next/image'
import Link from 'next/link'

export default function PaidAdWaste() {
  return (
    <>
      <style>{`
        .paw-section { background:#fef9e7; padding:clamp(64px,9vw,100px) 0; overflow:hidden; position:relative; }
        .paw-wave { position:absolute; top:-2px; left:0; right:0; line-height:0; pointer-events:none; }
        .paw-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,72px); align-items:center; }
        .paw-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#e8e0d8; border:2px solid #e0d8cc; box-shadow:6px 6px 0 rgba(245,197,24,0.3); }
        .paw-heading { font-size:clamp(1.8rem,4vw,2.8rem); line-height:1.08; color:#0c1a4e; letter-spacing:-0.02em; margin-bottom:clamp(16px,2.5vw,24px); }
        .paw-subheading { font-size:clamp(1.1rem,2vw,1.5rem); line-height:1.3; color:#0c1a4e; font-style:italic; font-weight:700; margin-bottom:clamp(14px,2vw,20px); }
        .paw-body { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(12,26,78,0.7); line-height:1.82; margin-bottom:14px; }
        .paw-highlight { background:var(--yellow); border-radius:12px; padding:16px 20px; margin:20px 0; box-shadow:4px 4px 0 rgba(12,26,78,0.15); }
        .paw-btn { display:inline-flex; align-items:center; padding:14px 32px; background:#0c1a4e; color:var(--yellow); border-radius:10px; font-size:0.82rem; letter-spacing:0.1em; text-decoration:none; border:2px solid #0c1a4e; transition:all 0.15s; margin-top:8px; }
        .paw-btn:hover { background:var(--blue); border-color:var(--blue); transform:translateY(-2px); }
        @media (max-width:768px) { .paw-grid { grid-template-columns:1fr; gap:32px; } .paw-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } }
      `}</style>

      <section className="paw-section">
        <div className="paw-wave">
          <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%'}} preserveAspectRatio="none">
            <path d="M0,0 C360,48 1080,0 1440,32 L1440,0 L0,0 Z" fill="#f2f5fc"/>
          </svg>
        </div>
        <div className="container">
          <div className="paw-grid">
            {/* Left: text */}
            <div>
              <h2 className="font-display font-black uppercase paw-heading">SAY GOODBYE TO AD WASTE</h2>
              <p className="paw-body">At MAXIMEDIA, we don't believe in throwing your budget at the wall to see what sticks. Our paid social strategies are built to deliver real, measurable outcomes — no fluff and no wasted spend.</p>
              <p className="paw-body">We leverage advanced targeting, smart creative, and relentless optimization to make sure every dollar you invest is working overtime for your brand.</p>
              <div className="paw-highlight">
                <p className="font-display font-black uppercase" style={{fontSize:'0.9rem',color:'#0c1a4e',lineHeight:1.4}}>Less waste. More wins. And ads that actually move the needle.</p>
              </div>
              <p className="paw-body">Every campaign is crafted with intention, launched with precision, and constantly refined to maximize impact. Let's put your budget to work where it counts.</p>
              <Link href="/contact" className="font-display font-black uppercase paw-btn">GET STARTED TODAY →</Link>
            </div>
            {/* Right: two stacked photos */}
            <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
              <div className="paw-photo-card" style={{height:'clamp(200px,28vw,320px)',aspectRatio:'unset'}}>
                <Image src="/images/paid-adwaste-1.png" alt="Say goodbye to ad waste" fill style={{objectFit:'cover',objectPosition:'center'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
              <div className="paw-photo-card" style={{height:'clamp(180px,24vw,280px)',aspectRatio:'unset'}}>
                <Image src="/images/paid-adwaste-2.png" alt="Smart paid advertising" fill style={{objectFit:'cover',objectPosition:'center'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}