import Image from 'next/image'

export default function CommunityIntro() {
  return (
    <>
      <style>{`
        .ci-grid { display:grid; grid-template-columns:1fr 1.1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .ci-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; width:100%; background:#e8e0d8; border:2px solid #b8dff0; box-shadow:6px 6px 0 #c9e8f5,0 16px 48px rgba(26,86,219,0.1); }
        .ci-cloud { position:absolute; font-size:clamp(2.5rem,5vw,4rem); pointer-events:none; filter:drop-shadow(0 6px 14px rgba(0,0,0,0.12)); }
        .ci-heading { font-size:clamp(1.8rem,4vw,3rem); line-height:1.05; color:var(--yellow); font-style:italic; letter-spacing:-0.01em; margin-bottom:clamp(16px,2.5vw,24px); }
        .ci-body { font-size:clamp(0.9rem,1.5vw,1.02rem); color:rgba(12,26,78,0.72); line-height:1.82; margin-bottom:14px; }
        @media (max-width:768px) { .ci-grid { grid-template-columns:1fr; gap:40px; } .ci-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } }
      `}</style>

      <section style={{background:'#ffffff',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          <div className="ci-grid">
            {/* Left: photo */}
            <div style={{position:'relative'}}>
              <div className="ci-photo-card">
                <Image src="/images/community-intro.png" alt="Building community" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
              <div className="ci-cloud" style={{top:'-16px',right:'-10px'}}>☁️</div>
              <div className="ci-cloud" style={{bottom:'40px',right:'-20px',fontSize:'clamp(2rem,4vw,3rem)'}}>☁️</div>
            </div>

            {/* Right: text */}
            <div>
              <h2 className="font-display font-black uppercase ci-heading">
                BUILDING BUZZ ONE CONVERSATION AT A TIME.
              </h2>
              <p className="ci-body">
                Building brand loyalty isn't just about great content — it's about how you show up in the comments, DMs, and conversations that matter.
              </p>
              <p className="ci-body">
                At MAXIMEDIA, we turn everyday interactions into brand moments. Fast, friendly, and always on-brand, our community management team makes sure your audience feels heard, supported, and excited to engage.
              </p>
              <p className="ci-body">
                We will monitor mentions, but we'll also spark conversations, protect your reputation, and help build communities that stick around. From handling customer questions to jumping into viral moments, we've got the experience from managing social for some of the world's biggest brands.
              </p>
              <p className="ci-body" style={{fontStyle:'italic',color:'rgba(12,26,78,0.5)',fontSize:'0.9rem'}}>
                And the best part? Every interaction feeds back into your strategy, helping you stay sharp, relevant, and ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}