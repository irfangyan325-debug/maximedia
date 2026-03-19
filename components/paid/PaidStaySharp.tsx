import Image from 'next/image'
import Link from 'next/link'

const PILLARS = [
  { icon:'💡', title:'Relentless Curiosity',    desc:'We never stop learning. Every campaign, trend, and platform update sharpens our team.' },
  { icon:'🎯', title:'Bold Strategy',            desc:'No playing it safe. We think bigger, move faster, and always chase what\'s next.' },
  { icon:'🚫', title:'Zero Complacency',         desc:'Good enough isn\'t good enough. We raise the bar with every campaign we run.' },
  { icon:'🏆', title:'We Treat Your Wins as Ours', desc:'We hustle hard, have fun doing it, and stay relentless until your goals are met.' },
]

export default function PaidStaySharp() {
  return (
    <>
      <style>{`
        .pss-section { background:var(--blue); padding:clamp(72px,9vw,100px) 0; overflow:hidden; }
        .pss-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,72px); align-items:center; margin-bottom:clamp(56px,8vw,80px); }
        .pss-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#1a3f8a; border:2px solid rgba(255,255,255,0.2); box-shadow:6px 6px 0 rgba(255,255,255,0.1); }
        .pss-heading { font-size:clamp(1.8rem,4vw,2.8rem); line-height:1.08; color:#fff; letter-spacing:-0.02em; margin-bottom:clamp(16px,2.5vw,24px); }
        .pss-body { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(255,255,255,0.75); line-height:1.82; margin-bottom:14px; }
        .pss-pillars { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        .pss-pillar { background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.2); border-radius:14px; padding:18px 16px; transition:background 0.2s; }
        .pss-pillar:hover { background:rgba(255,255,255,0.15); }
        .pss-ready-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(32px,5vw,64px); align-items:center; }
        .pss-ready-photo { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#1a3f8a; border:2px solid rgba(255,255,255,0.15); }
        .pss-ready-photo2 { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:1/1; background:#1a4a6e; border:2px solid rgba(255,255,255,0.15); margin-top:16px; }
        .pss-btn { display:inline-flex; align-items:center; padding:16px 36px; background:var(--yellow); color:#0c1a4e; border-radius:10px; font-size:0.84rem; letter-spacing:0.1em; text-decoration:none; border:2px solid #0c1a4e; box-shadow:0 5px 0 #0c1a4e; transition:all 0.15s; }
        .pss-btn:hover { transform:translateY(-2px); box-shadow:0 7px 0 #0c1a4e; }
        @media (max-width:768px) { .pss-grid,.pss-ready-grid { grid-template-columns:1fr; gap:32px; } .pss-photo-card,.pss-ready-photo { aspect-ratio:4/3; max-width:480px; margin:0 auto; } .pss-pillars { grid-template-columns:1fr; } }
      `}</style>

      <section className="pss-section">
        <div className="container">
          <div className="pss-grid">
            <div>
              <h2 className="font-display font-black uppercase pss-heading">
                OUR SECRET?{' '}
                <span style={{color:'var(--yellow)',textDecoration:'underline',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>STAY HUNGRY. STAY SHARP.</span>
              </h2>
              <p className="pss-body">We've built a team of paid social pros at the top of their game, but around here, good enough isn't good enough.</p>
              <p className="pss-body">At MAXIMEDIA, we're obsessed with getting better. Every campaign, every trend, every platform update is an opportunity to sharpen our skills and push boundaries. Because in social media advertising, standing still means falling behind.</p>
              <p className="pss-body">Our mission is to leave a mark on the industry by doing what others won't: thinking bigger, moving faster, and always chasing what's next.</p>
              <div className="pss-pillars">
                {PILLARS.map(p=>(
                  <div key={p.title} className="pss-pillar">
                    <div style={{fontSize:'1.8rem',marginBottom:'8px'}}>{p.icon}</div>
                    <h4 className="font-display font-black uppercase" style={{fontSize:'0.75rem',color:'var(--yellow)',marginBottom:'6px',letterSpacing:'0.04em'}}>{p.title}</h4>
                    <p style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.65)',lineHeight:1.6}}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pss-photo-card">
              <Image src="/images/paid-stay-sharp.png" alt="Stay hungry stay sharp" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
            </div>
          </div>

          {/* Ready to Go Paid */}
          <div style={{textAlign:'center',marginBottom:'clamp(40px,5vw,56px)',borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'clamp(48px,7vw,72px)'}}>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',lineHeight:1.08,maxWidth:'720px',margin:'0 auto 16px',letterSpacing:'-0.01em'}}>
              READY TO GET MORE FROM SOCIAL?{' '}
              <span style={{color:'var(--yellow)'}}>IT&apos;S TIME TO GO PAID.</span>
            </h2>
            <p style={{fontSize:'clamp(0.9rem,1.5vw,1.02rem)',color:'rgba(255,255,255,0.72)',maxWidth:'640px',margin:'0 auto 32px',lineHeight:1.8}}>
              If organic reach isn't cutting it, paid social is your fast track to new customers and measurable results.
            </p>
            <Link href="/contact" className="font-display font-black uppercase pss-btn">LET&apos;S BUILD YOUR CAMPAIGN →</Link>
          </div>

          {/* Ready grid: 2 photos */}
          <div className="pss-ready-grid">
            <div>
              <div className="pss-ready-photo">
                <Image src="/images/paid-ready-1.png" alt="Paid social results" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
            <div>
              <div className="pss-ready-photo2">
                <Image src="/images/paid-ready-2.png" alt="Social advertising team" fill style={{objectFit:'cover',objectPosition:'center'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}