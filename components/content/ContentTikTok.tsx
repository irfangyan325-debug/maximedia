import Image from 'next/image'
import Link from 'next/link'

const TIKTOK_FEATURES = [
  { icon:'🎣', title:'Snappy Hooks', desc:'Attention-grabbing openers that stop the scroll in the first 2 seconds.' },
  { icon:'🔥', title:'Trend Participation', desc:'We jump on trends at the right time to maximize reach and virality.' },
  { icon:'🎯', title:'Niche Targeting', desc:'Content tailored to your specific audience for higher engagement rates.' },
  { icon:'📈', title:'Growth Strategy', desc:'A data-backed approach to growing your following and brand awareness.' },
]

export default function ContentTikTok() {
  return (
    <>
      <style>{`
        .ctk-section { background:var(--blue); padding:clamp(72px,9vw,100px) 0; overflow:hidden; }
        .ctk-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .ctk-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:16/9; background:#1a3f8a; border:2px solid rgba(255,255,255,0.2); box-shadow:6px 6px 0 rgba(255,255,255,0.1); }
        .ctk-feature-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:24px; }
        .ctk-feature { background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.2); border-radius:14px; padding:16px 14px; transition:background 0.2s; }
        .ctk-feature:hover { background:rgba(255,255,255,0.15); }
        @media (max-width:768px) { .ctk-grid { grid-template-columns:1fr; gap:32px; } .ctk-feature-grid { grid-template-columns:1fr 1fr; } }
      `}</style>

      <section className="ctk-section">
        <div className="container">
          <div className="ctk-grid">
            {/* Left: text */}
            <div>
              <div style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 16px',background:'rgba(255,255,255,0.15)',borderRadius:'100px',marginBottom:'20px'}}>
                <span style={{fontSize:'1.1rem'}}>🎵</span>
                <span className="font-display font-black uppercase" style={{fontSize:'0.72rem',letterSpacing:'0.12em',color:'#fff'}}>TIKTOK CONTENT</span>
              </div>
              <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',lineHeight:1.08,letterSpacing:'-0.01em',marginBottom:'16px'}}>
                TIKTOK STRATEGY BUILT TO{' '}
                <span style={{color:'var(--yellow)',textDecoration:'underline',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>GO VIRAL (ON PURPOSE)</span>
              </h2>
              <p style={{fontSize:'clamp(0.9rem,1.5vw,1rem)',color:'rgba(255,255,255,0.78)',lineHeight:1.82,marginBottom:'8px'}}>
                From snappy hooks to scroll-stopping visuals, our TikTok strategy is built to boost visibility, grow your audience, and drive real engagement.
              </p>
              <p style={{fontSize:'clamp(0.88rem,1.4vw,0.96rem)',color:'rgba(255,255,255,0.65)',lineHeight:1.8,marginBottom:'8px'}}>
                Whether you&apos;re starting from zero or ready to level up, we&apos;ll help your brand show up, stand out, and go viral — on purpose.
              </p>
              <div className="ctk-feature-grid">
                {TIKTOK_FEATURES.map(f=>(
                  <div key={f.title} className="ctk-feature">
                    <div style={{fontSize:'1.6rem',marginBottom:'8px'}}>{f.icon}</div>
                    <h4 className="font-display font-black uppercase" style={{fontSize:'0.72rem',color:'var(--yellow)',marginBottom:'6px',letterSpacing:'0.04em'}}>{f.title}</h4>
                    <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.65)',lineHeight:1.6}}>{f.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="font-display font-black uppercase" style={{display:'inline-flex',alignItems:'center',padding:'14px 32px',background:'var(--yellow)',color:'#0c1a4e',borderRadius:'10px',fontSize:'0.82rem',letterSpacing:'0.1em',textDecoration:'none',border:'2px solid #0c1a4e',boxShadow:'0 4px 0 #0c1a4e',transition:'all 0.15s',marginTop:'24px'}}>
                START CREATING TIKTOK CONTENT →
              </Link>
            </div>

            {/* Right: photo */}
            <div>
              <div className="ctk-photo-card">
                <Image src="/images/content-tiktok.png" alt="TikTok content creation" fill style={{objectFit:'cover',objectPosition:'center'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
              <div className="ctk-photo-card" style={{marginTop:'16px',aspectRatio:'16/9'}}>
                <Image src="/images/content-tiktok-2.png" alt="TikTok strategy" fill style={{objectFit:'cover',objectPosition:'center'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}