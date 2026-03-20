import Image from 'next/image'

const REASONS = [
  { icon:'🤝', title:'People Trust People', desc:'Potential customers are far more likely to buy when a product is recommended by an influencer they already follow than from a generic ad.' },
  { icon:'💬', title:'Builds Credibility', desc:"Influencer marketing doesn't just outperform traditional social ads — it builds credibility and sparks authentic conversation around your brand." },
  { icon:'📈', title:'Stronger ROI', desc:'Direct line into what your customers actually care about, what moves them to action, and how your brand can show up in ways that matter.' },
  { icon:'🎯', title:'Hyper-Targeted Reach', desc:'Reach exactly the right audience through creators whose followers already match your ideal customer profile, not just demographics.' },
]

export default function InfluencerWhy() {
  return (
    <>
      <style>{`
        .iw-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .iw-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#fff0e8; border:2px solid #fec4a0; box-shadow:6px 6px 0 #fec4a0,0 16px 48px rgba(249,115,22,0.12); }
        .iw-reason-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:24px; }
        .iw-reason { background:#fff; border:2px solid #fec4a0; border-radius:14px; padding:16px 14px; box-shadow:4px 4px 0 #fec4a0; position:relative; overflow:hidden; transition:transform 0.2s; }
        .iw-reason:hover { transform:translateY(-3px); }
        .iw-reason::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:5px; height:40px; background:var(--inf-orange); border-radius:4px 0 0 4px; }
        @media (max-width:768px) { .iw-grid { grid-template-columns:1fr; gap:36px; } .iw-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } .iw-reason-grid { grid-template-columns:1fr; } }
      `}</style>

      <section style={{background:'#fff',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          <div className="iw-grid">
            <div>
              <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#1c0a00',lineHeight:1.08,letterSpacing:'-0.01em',marginBottom:'16px'}}>
                WHY SHOULD I INVEST IN{' '}
                <span style={{color:'var(--inf-orange)',textDecoration:'underline',textDecorationColor:'var(--inf-orange)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>INFLUENCER MARKETING?</span>
              </h2>
              <p style={{fontSize:'clamp(0.9rem,1.5vw,1.02rem)',color:'rgba(28,10,0,0.7)',lineHeight:1.82,marginBottom:'14px'}}>
                Simple: <strong>people trust people.</strong> Potential customers are far more likely to buy when a product is recommended by an influencer they already follow than from a generic ad in their feed.
              </p>
              <p style={{fontSize:'clamp(0.88rem,1.4vw,0.96rem)',color:'rgba(28,10,0,0.65)',lineHeight:1.82,marginBottom:'8px'}}>
                Influencer marketing belongs in a successful social media strategy, and we&apos;re here to prove it.
              </p>
              <div className="iw-reason-grid">
                {REASONS.map(r=>(
                  <div key={r.title} className="iw-reason">
                    <div style={{fontSize:'1.8rem',marginBottom:'8px'}}>{r.icon}</div>
                    <h4 className="font-display font-black uppercase" style={{fontSize:'0.72rem',color:'var(--inf-orange)',marginBottom:'6px',letterSpacing:'0.04em'}}>{r.title}</h4>
                    <p style={{fontSize:'0.78rem',color:'rgba(28,10,0,0.65)',lineHeight:1.6}}>{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: photo */}
            <div>
              <div className="iw-photo-card">
                <Image src="/images/influencer-why.png" alt="Why invest in influencer marketing" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}