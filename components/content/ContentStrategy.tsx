import Image from 'next/image'

export default function ContentStrategy() {
  return (
    <>
      <style>{`
        .cs-grid { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,80px); align-items:center; }
        .cs-photo-card { position:relative; border-radius:clamp(18px,3vw,26px); overflow:hidden; aspect-ratio:3/4; background:#e8f4fb; border:2px solid #b8dff0; box-shadow:6px 6px 0 #c9e8f5,0 16px 48px rgba(26,86,219,0.1); }
        .cs-heading { font-size:clamp(1.8rem,4vw,2.8rem); line-height:1.08; color:var(--yellow); font-style:italic; letter-spacing:-0.01em; margin-bottom:clamp(16px,2.5vw,24px); }
        .cs-body { font-size:clamp(0.9rem,1.5vw,1.02rem); color:rgba(12,26,78,0.72); line-height:1.82; margin-bottom:14px; }
        .cs-badges { display:flex; gap:12px; flex-wrap:wrap; margin-top:24px; }
        .cs-badge { display:flex; align-items:center; gap:8px; padding:10px 16px; background:#fff; border:2px solid #b8dff0; border-radius:100px; box-shadow:3px 3px 0 #b8dff0; }
        @media (max-width:768px) { .cs-grid { grid-template-columns:1fr; gap:36px; } .cs-photo-card { aspect-ratio:4/3; max-width:480px; margin:0 auto; } }
      `}</style>

      <section style={{background:'#ffffff',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          <div className="cs-grid">
            {/* Left: photo */}
            <div>
              <div className="cs-photo-card">
                <Image src="/images/content-strategy.png" alt="Content strategy" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:768px) 90vw, 45vw"/>
              </div>
            </div>
            {/* Right: text */}
            <div>
              <h2 className="font-display font-black uppercase cs-heading">SOCIAL MEDIA CONTENT STRATEGY AND BRAND VOICE</h2>
              <p className="cs-body">Anyone can make content, but we make content that <strong>HITS</strong>. Our team brings the strategy, creativity, and tools to turn even the roughest ideas into scroll-stopping, share-worthy social moments.</p>
              <p className="cs-body">With 10+ years of experience and a global roster of happy clients, we've helped brands show up online in ways that actually matter.</p>
              <p className="cs-body">Every content plan we build is backed by a proven framework. But it's also never cookie-cutter. It's designed to get attention, spark engagement, and drive <strong>REAL results</strong> for your business.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}