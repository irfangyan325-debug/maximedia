import Image from 'next/image'
import Link from 'next/link'

export default function CommunityHowItWorks() {
  return (
    <>
      <style>{`
        .chw-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .chw-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#f5f0e8; border:2px solid #b8dff0; box-shadow:6px 6px 0 #c9e8f5; }
        .chw-heading { font-size:clamp(1.8rem,4vw,2.8rem); line-height:1.08; color:#0c1a4e; letter-spacing:-0.02em; margin-bottom:clamp(20px,3vw,28px); }
        .chw-body { font-size:clamp(0.88rem,1.5vw,1rem); color:rgba(12,26,78,0.7); line-height:1.82; margin-bottom:16px; }
        .chw-link { color:var(--blue); font-weight:700; text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:3px; }
        .chw-link:hover { opacity:0.75; }
        @media (max-width:768px) { .chw-grid { grid-template-columns:1fr; gap:36px; } .chw-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } }
      `}</style>

      <section style={{background:'#f2f5fc',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          <div className="chw-grid">
            <div>
              <h2 className="font-display font-black uppercase chw-heading">HOW IT WORKS</h2>
              <p className="chw-body">
                We kick things off by developing a social media strategy that includes specific guidelines for engagement for our community managers to follow.
              </p>
              <p className="chw-body">
                After we have a clear idea of your needs, we assemble a team that's in charge of directing inquiries to the right person, interacting with your audience, and fostering conversations.
              </p>
              <p className="chw-body">
                Community managers act as representatives of your brand. Their primary responsibility is to keep your social media pages updated with{' '}
                <Link href="/services/social-content-production" className="chw-link">fresh content</Link>{' '}
                and actively engage with your followers in conversations.
              </p>
              <p className="chw-body">
                Each month, we take a look back at our performance, including engagement and follower growth. By looking at this data, we can evaluate each step and identify which tactics have been effective.
              </p>

              <div style={{display:'inline-flex',alignItems:'center',gap:'10px',padding:'12px 20px',background:'#fff',border:'2px solid #b8dff0',borderRadius:'14px',boxShadow:'4px 4px 0 #b8dff0',marginTop:'8px'}}>
                <span style={{fontSize:'1.6rem'}}>🤝</span>
                <span className="font-display font-black uppercase" style={{fontSize:'0.78rem',color:'var(--blue)',letterSpacing:'0.06em'}}>Build Brand Loyalty</span>
              </div>
            </div>

            <div style={{position:'relative'}}>
              <div className="chw-photo-card">
                <Image src="/images/community-how-it-works.png" alt="How community management works" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}