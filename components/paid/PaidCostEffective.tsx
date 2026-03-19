import Image from 'next/image'

export default function PaidCostEffective() {
  return (
    <>
      <style>{`
        .pce-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .pce-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; width:100%; background:#e8f4fb; border:2px solid #b8dff0; box-shadow:6px 6px 0 #c9e8f5,0 16px 48px rgba(26,86,219,0.1); }
        .pce-heading { font-size:clamp(1.8rem,4vw,2.8rem); line-height:1.08; color:var(--yellow); font-style:italic; letter-spacing:-0.01em; margin-bottom:clamp(16px,2.5vw,24px); }
        .pce-body { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(12,26,78,0.7); line-height:1.82; margin-bottom:14px; }
        .pce-stat-row { display:flex; gap:16px; margin-top:24px; flex-wrap:wrap; }
        .pce-stat { background:#fff; border:2px solid #b8dff0; border-radius:14px; padding:16px 20px; box-shadow:4px 4px 0 #b8dff0; text-align:center; flex:1; min-width:100px; }
        @media (max-width:768px) { .pce-grid { grid-template-columns:1fr; gap:36px; } .pce-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } }
      `}</style>

      <section style={{background:'#ffffff',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          <div className="pce-grid">
            {/* Left: photo */}
            <div>
              <div className="pce-photo-card">
                <Image src="/images/paid-cost-effective.png" alt="Cost-effective advertising" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
            {/* Right: text */}
            <div>
              <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--blue)',marginBottom:'10px'}}>WHY PAID SOCIAL</p>
              <h2 className="font-display font-black uppercase pce-heading">COST-EFFECTIVE BUSINESS ADVERTISING</h2>
              <p className="pce-body">Advertising through <strong>social media</strong> is a highly efficient means of promoting your brand.</p>
              <p className="pce-body">Rather than investing a significant amount of money on conventional advertising methods, <strong>we can help you create impactful, low-cost ads that can reach a vast audience, resulting in exceptional ROI.</strong></p>
              <p className="pce-body">Our expert creative <strong>team</strong> specializes in creating ads that effectively engage your target audience. Each advertisement is customized to align with your company's objectives and <strong>is designed to communicate the essence of your brand.</strong></p>
              <p className="pce-body" style={{fontStyle:'italic',color:'rgba(12,26,78,0.5)'}}>Our team can produce a limited number of high-quality ads instead of spending a large amount on vast numbers of low-quality ads — saving your hard-earned cash in the process!</p>
              <div className="pce-stat-row">
                {[['$50M+','Ad Spend Managed'],['500+','Brands Served'],['98%','Client Retention']].map(([num,label])=>(
                  <div key={label} className="pce-stat">
                    <p className="font-display font-black" style={{fontSize:'1.4rem',color:'var(--blue)',lineHeight:1}}>{num}</p>
                    <p style={{fontSize:'0.68rem',color:'rgba(12,26,78,0.55)',marginTop:'4px',fontWeight:600}}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}