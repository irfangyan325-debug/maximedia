import Image from 'next/image'
import Link from 'next/link'

export default function CommunityMomentsMarketing() {
  return (
    <>
      <style>{`
        .cmm-section { background:#fef9e7; padding:clamp(64px,9vw,100px) 0; overflow:hidden; position:relative; }
        .cmm-wave-top { position:absolute; top:-2px; left:0; right:0; line-height:0; pointer-events:none; }
        .cmm-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; margin-bottom:clamp(56px,8vw,90px); }
        .cmm-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#f5f0e8; border:2px solid #e8d8b0; box-shadow:6px 6px 0 rgba(245,197,24,0.3); }
        .cmm-quote-block { background:var(--yellow); border-radius:clamp(16px,2.5vw,22px); padding:clamp(24px,4vw,40px); margin-bottom:clamp(20px,3vw,28px); box-shadow:6px 6px 0 rgba(12,26,78,0.15); }
        .cmm-quote-text { font-size:clamp(1.1rem,2.2vw,1.5rem); line-height:1.3; color:#0c1a4e; font-style:italic; letter-spacing:-0.01em; }
        .cmm-heading { font-size:clamp(1.4rem,3vw,2.2rem); line-height:1.1; color:#0c1a4e; letter-spacing:-0.01em; margin-bottom:clamp(16px,2.5vw,24px); }
        .cmm-body { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(12,26,78,0.7); line-height:1.82; margin-bottom:14px; }
        .cmm-link { color:var(--blue); font-weight:700; text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:3px; }
        .cmm-link:hover { opacity:0.75; }
        .cmm-bottom-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(32px,5vw,64px); align-items:center; }
        @media (max-width:768px) { .cmm-grid,.cmm-bottom-grid { grid-template-columns:1fr; gap:32px; } .cmm-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } }
      `}</style>

      <section className="cmm-section">
        <div className="cmm-wave-top">
          <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" style={{display:'block',width:'100%'}} preserveAspectRatio="none">
            <path d="M0,0 C360,48 1080,0 1440,32 L1440,0 L0,0 Z" fill="#ffffff"/>
          </svg>
        </div>

        <div className="container">
          {/* Crafted for Engagement */}
          <div className="cmm-grid">
            <div>
              <h2 className="font-display font-black uppercase cmm-heading">CRAFTED FOR ENGAGEMENT</h2>
              <p className="cmm-body">We seek out new potential customers in your target audience and engage with them and similar brands to draw more attention to your business.</p>
              <p className="cmm-body">Our strategy goes beyond liking and commenting on posts or answering questions. We will carefully <Link href="/services/data-analysis-roi-modeling" className="cmm-link">analyze data</Link> to keep our goals and concepts on the right track and keep your brand on the road to success.</p>
              <p className="cmm-body">Community managers and social media managers work together when it comes to creating content and choosing the right social platforms — making sure they're not only offering great content, but also relevant and informative content.</p>
            </div>
            <div style={{position:'relative'}}>
              <div className="cmm-photo-card">
                <Image src="/images/community-crafted.png" alt="Crafted for engagement" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>

          {/* Moments Marketing */}
          <div className="cmm-bottom-grid">
            <div>
              <div className="cmm-quote-block">
                <p className="font-display font-black uppercase cmm-quote-text">
                  &ldquo;Remember when the lights went out at the Super Bowl and Oreo made the pitch: &lsquo;You can still dunk in the dark&rsquo;?&rdquo;
                </p>
              </div>
              <h2 className="font-display font-black uppercase cmm-heading">MOMENTS MARKETING AND COMMUNITY MANAGEMENT</h2>
              <p className="cmm-body">Moments marketing is the idea of taking advantage of every opportunity — big or small — and turning it into something incredible for your business.</p>
              <p className="cmm-body">This is the magic of social community management. When you have a community manager monitoring events in and around your space, your brand can seize the moment — and when things go wrong, minimize the damage quickly.</p>
            </div>
            <div style={{position:'relative'}}>
              <div className="cmm-photo-card">
                <Image src="/images/community-moments.png" alt="Moments marketing" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}