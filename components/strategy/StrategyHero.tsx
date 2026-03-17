import Link from 'next/link'

const PLATFORMS = [
  { name: 'Facebook',  icon: '📘', color: '#1877f2' },
  { name: 'Instagram', icon: '📸', color: '#e1306c' },
  { name: 'LinkedIn',  icon: '💼', color: '#0a66c2' },
]

export default function StrategyHero() {
  return (
    <>
      <style>{`
        .sh-section {
          background: var(--blue);
          padding-top: calc(var(--nav-h) + 72px);
          padding-bottom: 90px;
          position: relative;
          overflow: hidden;
        }
        .sh-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px,5vw,72px);
          align-items: center;
        }
        .sh-title {
          font-size: clamp(2rem,5vw,3.4rem);
          line-height: 1.2;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: clamp(20px,3vw,32px);
        }
        .sh-desc {
          font-size: clamp(0.92rem,1.5vw,1.05rem);
          color: rgba(255,255,255,0.78);
          line-height: 1.8;
          max-width: 520px;
          margin-bottom: 36px;
        }
        .sh-btn {
          display: inline-flex;
          align-items: center;
          padding: 16px 36px;
          background: var(--yellow);
          color: #0c1a4e;
          border-radius: 10px;
          font-size: 0.84rem;
          letter-spacing: 0.1em;
          text-decoration: none;
          border: 2px solid #0c1a4e;
          box-shadow: 0 5px 0 #0c1a4e;
          transition: all 0.15s ease;
        }
        .sh-btn:hover { transform: translateY(-2px); box-shadow: 0 7px 0 #0c1a4e; }

        /* Right side — floating platform badges */
        .sh-right {
          position: relative;
          height: clamp(280px,40vw,400px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sh-circle-bg {
          width: clamp(220px,35vw,340px);
          height: clamp(220px,35vw,340px);
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 2px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(4rem,8vw,7rem);
          position: relative;
        }
        .sh-platform-badge {
          position: absolute;
          background: #fff;
          border-radius: 14px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 4px 4px 0 #b8dff0;
          border: 2px solid #b8dff0;
          font-size: 0.72rem;
          font-weight: 800;
          color: #0c1a4e;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .sh-stat-badge {
          position: absolute;
          bottom: 0;
          right: -10px;
          background: var(--yellow);
          border: 2px solid #0c1a4e;
          border-radius: 14px;
          padding: 10px 18px;
          box-shadow: 4px 4px 0 #0c1a4e;
        }
        @media (max-width: 860px) {
          .sh-grid { grid-template-columns: 1fr; }
          .sh-right { display: none; }
        }
      `}</style>

      <section className="sh-section">
        {/* Dot grid decoration */}
        <div style={{ position:'absolute', top:0, right:0, width:'300px', height:'300px', backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize:'24px 24px', pointerEvents:'none' }} />

        <div className="container">
          <div className="sh-grid">
            {/* Left */}
            <div>
             

              <h1 className="font-display font-black uppercase sh-title">
                Turn Attention Into Action With a Custom Social Media Strategy Built to{' '}
                <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>
                Maximize Reach and ROI
                </span>{' '}
              </h1>

              <Link href="/contact" className="font-display font-black uppercase sh-btn">
                GET YOUR FREE CUSTOM PROPOSAL
              </Link>

  
            </div>

            {/* Right — decorative */}
            <div className="sh-right">
              <div className="sh-circle-bg">
                🎯
                {/* Platform badges */}
                <div className="sh-platform-badge" style={{ top:'-10px', left:'-30px' }}>
                  <span style={{ fontSize:'1.2rem' }}>📊</span> Strategy
                </div>
                <div className="sh-platform-badge" style={{ top:'40%', right:'-40px' }}>
                  <span style={{ fontSize:'1.2rem' }}>🚀</span> Growth
                </div>
                <div className="sh-platform-badge" style={{ bottom:'20px', left:'-20px' }}>
                  <span style={{ fontSize:'1.2rem' }}>💡</span> Insights
                </div>
              </div>
              <div className="sh-stat-badge">
                <p className="font-display font-black" style={{ fontSize:'1.4rem', color:'#0c1a4e', lineHeight:1 }}>3,700%</p>
                <p style={{ fontSize:'0.68rem', color:'rgba(12,26,78,0.65)', marginTop:'2px', fontWeight:600 }}>More Engagement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position:'absolute', bottom:-2, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }} preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
    </>
  )
}