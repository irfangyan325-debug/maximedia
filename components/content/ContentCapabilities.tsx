import Image from 'next/image'
import Link from 'next/link'

const CAPABILITIES = [
  { icon:'📷', title:'Photography' },
  { icon:'✨', title:'Motion Graphics' },
  { icon:'🎬', title:'Video Production' },
  { icon:'🖼️', title:'Photo Manipulation' },
  { icon:'🎞️', title:'Stop Motion' },
  { icon:'🎭', title:'Filters' },
  { icon:'✏️', title:'Copywriting' },
  { icon:'🎨', title:'Graphics' },
  { icon:'🖌️', title:'Illustrations' },
  { icon:'📡', title:'Live Social Broadcasts' },
  { icon:'🌐', title:'360° Photo/Video' },
  { icon:'👥', title:'User Generated Content' },
  { icon:'🌟', title:'Influencer Collabs' },
  { icon:'🎙️', title:'Voiceovers' },
  { icon:'➕', title:'And more…' },
]

export default function ContentCapabilities() {
  return (
    <>
      <style>{`
        .cc-section { background:#f2f5fc; padding:clamp(72px,9vw,100px) 0; }
        .cc-grid-layout { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .cc-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#e8e0d8; border:2px solid #b8dff0; box-shadow:6px 6px 0 #c9e8f5; }
        .cc-cap-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
        .cc-cap-card { background:#fff; border:2px solid #b8dff0; border-radius:12px; padding:14px 10px; text-align:center; box-shadow:3px 3px 0 #b8dff0; transition:transform 0.2s; position:relative; overflow:hidden; }
        .cc-cap-card:hover { transform:translateY(-3px); }
        .cc-cap-card::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:4px; height:32px; background:var(--blue); border-radius:4px 0 0 4px; }
        @media (max-width:768px) { .cc-grid-layout { grid-template-columns:1fr; gap:36px; } .cc-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } .cc-cap-grid { grid-template-columns:repeat(3,1fr); } }
        @media (max-width:480px) { .cc-cap-grid { grid-template-columns:repeat(2,1fr); } }
      `}</style>

      <section className="cc-section">
        <div className="container">
          <div className="cc-grid-layout">
            <div>
              <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'var(--blue)',lineHeight:1.08,letterSpacing:'-0.01em',marginBottom:'16px'}}>
                OUR CONTENT{' '}
                <span style={{color:'var(--yellow)',textDecoration:'underline',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>CAPABILITIES</span>
              </h2>
              <p style={{fontSize:'clamp(0.9rem,1.5vw,1rem)',color:'rgba(12,26,78,0.7)',lineHeight:1.8,marginBottom:'8px'}}>
                <strong>We do it all.</strong> From video to photography, motion graphics to illustrations, Facebook to Instagram and everything in-between.
              </p>
              <p style={{fontSize:'clamp(0.88rem,1.4vw,0.96rem)',color:'rgba(12,26,78,0.65)',lineHeight:1.8,marginBottom:'24px',fontStyle:'italic'}}>
                What's the vision for your brand? We can bring it to life with the help of our <strong>in-house production studio</strong> and insanely talented creative team.
              </p>
              <div className="cc-cap-grid">
                {CAPABILITIES.map(c=>(
                  <div key={c.title} className="cc-cap-card">
                    <div style={{fontSize:'1.4rem',marginBottom:'6px'}}>{c.icon}</div>
                    <p style={{fontSize:'0.65rem',fontWeight:700,color:'var(--blue)',lineHeight:1.3,letterSpacing:'0.02em',textTransform:'uppercase'}}>{c.title}</p>
                  </div>
                ))}
              </div>
              <div style={{marginTop:'24px'}}>
                <Link href="/contact" className="font-display font-black uppercase" style={{display:'inline-flex',alignItems:'center',padding:'14px 32px',background:'var(--yellow)',color:'#0c1a4e',borderRadius:'10px',fontSize:'0.82rem',letterSpacing:'0.1em',textDecoration:'none',border:'2px solid #0c1a4e',boxShadow:'0 4px 0 #0c1a4e',transition:'all 0.15s'}}>
                  SEE WHAT WE CAN CREATE →
                </Link>
              </div>
            </div>

            {/* Right: photo */}
            <div>
              <div className="cc-photo-card">
                <Image src="/images/content-capabilities.png" alt="Content production capabilities" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}