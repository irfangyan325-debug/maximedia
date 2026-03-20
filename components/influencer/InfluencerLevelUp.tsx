import Image from 'next/image'
import Link from 'next/link'

const FEATURES = [
  { icon:'📊', title:'Bold Campaigns Backed by Strategy', desc:'Data-driven influencer strategies that align with your brand goals and deliver measurable wins.' },
  { icon:'⚡', title:'Real-Time Insights', desc:'We monitor every campaign as it runs — tracking engagement, reach, and conversions as they happen.' },
  { icon:'🔄', title:'On-the-Fly Optimization', desc:"We're constantly fine-tuning your campaigns to crush your goals and keep your audience hooked." },
  { icon:'🌟', title:'Authentic Brand Voice', desc:"Your brand gets a powerful, authentic voice through creators your target audience already trusts." },
]

export default function InfluencerLevelUp() {
  return (
    <>
      <style>{`
        .ilu-section { background:#fff; padding:clamp(72px,9vw,100px) 0; }
        .ilu-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; margin-bottom:clamp(64px,9vw,100px); }
        .ilu-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#fff0e8; border:2px solid #fec4a0; box-shadow:6px 6px 0 rgba(249,115,22,0.2); }
        .ilu-feature-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:24px; }
        .ilu-feature { background:#fff7ed; border:2px solid #fec4a0; border-radius:14px; padding:16px 14px; position:relative; overflow:hidden; transition:transform 0.2s; }
        .ilu-feature:hover { transform:translateY(-3px); }
        .ilu-feature::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:5px; height:40px; background:var(--inf-orange); border-radius:4px 0 0 4px; }
        /* Quote banner */
        .ilu-quote-banner { background:var(--inf-orange); border-radius:clamp(16px,2.5vw,22px); padding:clamp(28px,4vw,44px); text-align:center; margin-bottom:clamp(48px,7vw,80px); box-shadow:0 12px 40px rgba(249,115,22,0.25); }
        /* Solution section */
        .ilu-solution-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,72px); align-items:center; }
        .ilu-solution-photo { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#fff0e8; border:2px solid #fec4a0; box-shadow:6px 6px 0 rgba(249,115,22,0.2); }
        @media (max-width:768px) { .ilu-grid,.ilu-solution-grid { grid-template-columns:1fr; gap:32px; } .ilu-photo-card,.ilu-solution-photo { aspect-ratio:4/3; max-width:480px; margin:0 auto; } .ilu-feature-grid { grid-template-columns:1fr; } }
      `}</style>

      <section className="ilu-section">
        <div className="container">

          <div className="ilu-grid">
            <div>
              <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#1c0a00',lineHeight:1.08,letterSpacing:'-0.01em',marginBottom:'16px'}}>
                LEVEL-UP WITH AN{' '}
                <span style={{color:'var(--inf-orange)',textDecoration:'underline',textDecorationColor:'var(--inf-orange)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>INFLUENCER MARKETING AGENCY</span>
              </h2>
              <p style={{fontSize:'clamp(0.9rem,1.5vw,1rem)',color:'rgba(28,10,0,0.7)',lineHeight:1.82,marginBottom:'8px'}}>
                It&apos;s time to turn those big brand goals into real, measurable wins. With MAXIMEDIA in your corner, you&apos;ll get bold influencer campaigns backed by a smart, data-driven strategy and a team that knows how to make noise where it counts.
              </p>
              <p style={{fontSize:'clamp(0.88rem,1.4vw,0.96rem)',color:'rgba(28,10,0,0.6)',lineHeight:1.82,marginBottom:'4px',fontStyle:'italic'}}>Ready to make some magic?</p>
              <div className="ilu-feature-grid">
                {FEATURES.map(f=>(
                  <div key={f.title} className="ilu-feature">
                    <div style={{fontSize:'1.8rem',marginBottom:'8px'}}>{f.icon}</div>
                    <h4 className="font-display font-black uppercase" style={{fontSize:'0.72rem',color:'var(--inf-orange)',marginBottom:'6px',letterSpacing:'0.04em'}}>{f.title}</h4>
                    <p style={{fontSize:'0.78rem',color:'rgba(28,10,0,0.65)',lineHeight:1.6}}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: photo */}
            <div>
              <div className="ilu-photo-card">
                <Image src="/images/influencer-levelup.png" alt="Level up with influencer marketing" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>

          {/* Orange quote banner */}
          <div className="ilu-quote-banner">
            <p className="font-display font-black uppercase" style={{fontSize:'clamp(1.2rem,3vw,2rem)',color:'#fff',lineHeight:1.25,letterSpacing:'-0.01em',maxWidth:'820px',margin:'0 auto'}}>
              OUR GOAL IS TO MAKE YOUR BUSINESS AN AUTHORITY IN YOUR INDUSTRY ONLINE, WITH MINIMAL EFFORT AND WITHOUT BREAKING THE BANK.
            </p>
          </div>

          {/* Your Solution section */}
          <div className="ilu-solution-grid">
            {/* Left: photo */}
            <div>
              <div className="ilu-solution-photo">
                <Image src="/images/influencer-solution.png" alt="Your influencer marketing solution" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
            {/* Right: text */}
            <div>
              <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#1c0a00',lineHeight:1.08,letterSpacing:'-0.01em',marginBottom:'16px'}}>
                YOUR INFLUENCER MARKETING{' '}
                <span style={{color:'var(--inf-orange)',textDecoration:'underline',textDecorationColor:'var(--inf-orange)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>SOLUTION</span>
              </h2>
              <p style={{fontSize:'clamp(0.9rem,1.5vw,1rem)',color:'rgba(28,10,0,0.7)',lineHeight:1.82,marginBottom:'14px'}}>
                We&apos;re the creative and innovative solution to influencer marketing that will work hard to put your brand on top by securing the best media deals and influencers in your industry.
              </p>
              <p style={{fontSize:'clamp(0.88rem,1.4vw,0.96rem)',color:'rgba(28,10,0,0.7)',lineHeight:1.82,marginBottom:'14px'}}>
                We never take a cookie-cutter approach to growing your reach. Our ultimate goal is to craft a custom influencer marketing strategy tailored to your business, while making data-driven adjustments as necessary.
              </p>
              <p style={{fontSize:'clamp(0.88rem,1.4vw,0.96rem)',color:'rgba(28,10,0,0.7)',lineHeight:1.82,marginBottom:'24px'}}>
                We believe in transparency and honesty, so you can always be sure of getting the results you paid for and deserve.
              </p>
              <Link href="/contact" className="font-display font-black uppercase" style={{display:'inline-flex',alignItems:'center',padding:'14px 32px',background:'var(--inf-orange)',color:'#fff',borderRadius:'10px',fontSize:'0.82rem',letterSpacing:'0.1em',textDecoration:'none',border:'2px solid #1c0a00',boxShadow:'0 4px 0 #1c0a00',transition:'all 0.15s'}}>
                GET STARTED TODAY →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}