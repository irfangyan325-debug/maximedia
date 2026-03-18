import Link from 'next/link'
import Image from 'next/image'

export default function CommunityOutbound() {
  return (
    <>
      <style>{`
        .cob-grid { display:grid; grid-template-columns:1.1fr 0.9fr; gap:clamp(40px,6vw,72px); align-items:center; }
        .cob-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#e8f4fb; border:2px solid #b8dff0; box-shadow:6px 6px 0 #c9e8f5; }
        .cob-photo-card2 { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:1/1; background:#f5f0e8; border:2px solid #b8dff0; box-shadow:6px 6px 0 #c9e8f5; margin-top:20px; }
        .cob-heading { font-size:clamp(1.8rem,4vw,2.8rem); line-height:1.08; color:var(--blue); letter-spacing:-0.02em; margin-bottom:clamp(16px,2.5vw,24px); }
        .cob-body { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(12,26,78,0.7); line-height:1.82; margin-bottom:16px; }
        .cob-btn { display:inline-flex; align-items:center; padding:14px 32px; background:var(--yellow); color:#0c1a4e; border-radius:10px; font-size:0.82rem; letter-spacing:0.1em; text-decoration:none; border:2px solid #0c1a4e; box-shadow:0 4px 0 #0c1a4e; transition:all 0.15s; margin-top:8px; }
        .cob-btn:hover { transform:translateY(-2px); box-shadow:0 6px 0 #0c1a4e; }
        @media (max-width:768px) { .cob-grid { grid-template-columns:1fr; gap:32px; } }
      `}</style>

      <section style={{background:'var(--blue)',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          {/* Trusted Solution heading */}
          <div style={{textAlign:'center',marginBottom:'clamp(48px,7vw,72px)'}}>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',lineHeight:1.08,letterSpacing:'-0.01em',maxWidth:'720px',margin:'0 auto 16px'}}>
              YOUR TRUSTED SOLUTION TO{' '}
              <span style={{color:'var(--yellow)',textDecoration:'underline',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>COMMUNITY MANAGEMENT</span>
            </h2>
            <p style={{fontSize:'0.95rem',color:'rgba(255,255,255,0.72)',maxWidth:'640px',margin:'0 auto',lineHeight:1.8}}>
              We have the experience, tools, skills and creative outlook to create a one-of-a-kind social media community management strategy that will help you grow your business globally and locally with minimal hassle.
            </p>
          </div>

          {/* Outbound engagement feature */}
          <div className="cob-grid">
            <div>
              <h3 className="font-display font-black uppercase cob-heading" style={{color:'#fff'}}>OUTBOUND ENGAGEMENT</h3>
              <p className="cob-body" style={{color:'rgba(255,255,255,0.78)'}}>
                Take your social media presence to the next level with our Outbound Engagement service.
              </p>
              <p className="cob-body" style={{color:'rgba(255,255,255,0.78)'}}>
                This proactive approach goes beyond simply responding to comments and messages — it&apos;s about actively seeking out conversations, engaging with your target audience, and building meaningful relationships that drive awareness and loyalty.
              </p>
              <p className="cob-body" style={{color:'rgba(255,255,255,0.78)'}}>
                By leveraging advanced tools and manual monitoring, we identify trending hashtags, key discussions, and potential followers to position your brand as a leader in your industry.
              </p>
              <Link href="/services/outbound-engagement" className="font-display font-black uppercase cob-btn">
                LEARN MORE →
              </Link>
            </div>

            {/* Right: two photo cards */}
            <div>
              <div className="cob-photo-card">
                <Image src="/images/community-outbound-1.png" alt="Outbound engagement" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 40vw"/>
              </div>
              <div className="cob-photo-card2">
                <Image src="/images/community-outbound-2.png" alt="Community building" fill style={{objectFit:'cover',objectPosition:'center'}} sizes="(max-width:768px) 90vw, 40vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}