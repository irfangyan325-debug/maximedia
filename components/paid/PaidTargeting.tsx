import Image from 'next/image'

const TARGETING_OPTIONS = [
  { icon:'👤', label:'Age & Demographics' },
  { icon:'📍', label:'Location Targeting' },
  { icon:'💼', label:'Industry & Job Title' },
  { icon:'🎯', label:'Interests & Behavior' },
  { icon:'📧', label:'Email List Audiences' },
  { icon:'🔄', label:'Retargeting & Lookalikes' },
]

export default function PaidTargeting() {
  return (
    <>
      <style>{`
        .pt-section { background:#f2f5fc; padding:clamp(72px,9vw,100px) 0; }
        .pt-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .pt-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#f5f0e8; border:2px solid #b8dff0; box-shadow:6px 6px 0 #c9e8f5; }
        .pt-heading { font-size:clamp(1.8rem,4vw,2.8rem); line-height:1.08; color:#0c1a4e; letter-spacing:-0.02em; margin-bottom:clamp(16px,2.5vw,24px); }
        .pt-body { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(12,26,78,0.7); line-height:1.82; margin-bottom:14px; }
        .pt-quote { font-size:clamp(1rem,2vw,1.3rem); line-height:1.4; color:#0c1a4e; font-style:italic; font-weight:700; margin:20px 0; padding:16px 20px; border-left:5px solid var(--yellow); background:#fff; border-radius:0 12px 12px 0; box-shadow:4px 4px 0 rgba(245,197,24,0.2); }
        .pt-options { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-top:20px; }
        .pt-option { background:#fff; border:2px solid #b8dff0; border-radius:12px; padding:12px 10px; text-align:center; box-shadow:3px 3px 0 #b8dff0; }
        @media (max-width:768px) { .pt-grid { grid-template-columns:1fr; gap:36px; } .pt-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } .pt-options { grid-template-columns:repeat(2,1fr); } }
      `}</style>

      <section className="pt-section">
        <div className="container">
          <div className="pt-grid">
            {/* Left: text */}
            <div>
              <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--yellow)',marginBottom:'10px'}}>PRECISION TARGETING</p>
              <h2 className="font-display font-black uppercase pt-heading">ADVERTISE TO YOUR TARGET AUDIENCE</h2>
              <p className="pt-body">The days of wasting resources on advertising to individuals who are not part of your target audience are over. Stop paying for ad waste.</p>
              <p className="pt-body">With social media advertising, it's <strong>possible to precisely target specific demographics and reach out to them directly.</strong></p>
              <p className="pt-body">Our team will conduct a thorough <strong>analysis</strong> and then launch tailored, highly targeted ad campaigns to individuals based on their online behavior and engagement.</p>
              <div className="pt-quote">
                By carefully analyzing demographics, we're able to more effectively advertise to your target audience through Social PPC.
              </div>
              <div className="pt-options">
                {TARGETING_OPTIONS.map(o=>(
                  <div key={o.label} className="pt-option">
                    <div style={{fontSize:'1.4rem',marginBottom:'6px'}}>{o.icon}</div>
                    <p style={{fontSize:'0.68rem',fontWeight:700,color:'var(--blue)',lineHeight:1.3,letterSpacing:'0.02em',textTransform:'uppercase'}}>{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: photo */}
            <div>
              <div className="pt-photo-card">
                <Image src="/images/paid-targeting.png" alt="Target audience advertising" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}