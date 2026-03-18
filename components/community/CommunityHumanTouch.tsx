import Image from 'next/image'

export default function CommunityHumanTouch() {
  return (
    <>
      <style>{`
        .cht-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .cht-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#e8e0d8; border:2px solid #b8dff0; box-shadow:6px 6px 0 #c9e8f5; }
        .cht-heading { font-size:clamp(1.8rem,4vw,2.8rem); line-height:1.08; color:#0c1a4e; letter-spacing:-0.02em; margin-bottom:clamp(18px,2.5vw,26px); }
        .cht-body { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(12,26,78,0.7); line-height:1.82; margin-bottom:16px; }
        .cht-quote { font-size:clamp(0.95rem,1.6vw,1.08rem); color:rgba(12,26,78,0.55); font-style:italic; line-height:1.75; border-left:4px solid var(--yellow); padding-left:20px; margin-top:8px; }
        @media (max-width:768px) { .cht-grid { grid-template-columns:1fr; gap:36px; } .cht-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } }
      `}</style>

      <section style={{background:'#ffffff',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          <div className="cht-grid">
            {/* Left: photo */}
            <div>
              <div className="cht-photo-card">
                <Image src="/images/community-human-touch.png" alt="Human touch in social media" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <h2 className="font-display font-black uppercase cht-heading">
                ADD A HUMAN TOUCH TO YOUR BRAND&apos;S POSTS
              </h2>
              <p className="cht-body">
                It&apos;s a well-known fact that digital interactions with brands can sometimes feel remote and impersonal. Social community managers can help your brand overcome this by giving your brand a human touch.
              </p>
              <p className="cht-body">
                While there are standard practices for community management, our team likes to think outside the box and develop a strategy that goes beyond the usual methods.
              </p>
              <p className="cht-quote">
                We strive to create a deeper and more meaningful connection with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}