import Link from 'next/link'

const REVIEW_PLATFORMS = [
  { name: 'Google',        icon: '⭐', stars: '5.0', color: '#4285f4' },
  { name: 'Trustpilot',    icon: '✓',  stars: '4.9', color: '#00b67a' },
  { name: 'G2',            icon: 'G2', stars: '4.8', color: '#ff492c' },
  { name: 'AgencySpotter', icon: '🔍', stars: '5.0', color: '#1a56db' },
  { name: 'Clutch',        icon: '◆',  stars: '4.9', color: '#e63329' },
]

export default function StrategyCTA() {
  return (
    <>
      <style>{`
        .scta-reviews {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .scta-review-card {
          background: #fff;
          border-radius: 12px;
          padding: 12px 20px;
          border: 1.5px solid rgba(26,86,219,0.12);
          display: flex; align-items: center; gap: 10px;
          min-width: 140px;
          box-shadow: 3px 3px 0 rgba(255,255,255,0.3);
          transition: transform 0.2s;
          cursor: pointer;
        }
        .scta-review-card:hover { transform: translateY(-3px); }
      `}</style>

      <section style={{ background:'var(--blue)', padding:'clamp(72px,9vw,100px) 0', textAlign:'center', position:'relative', overflow:'hidden' }}>
        {/* Decorations */}
        <div style={{ position:'absolute', top:'20px', left:'8%', fontSize:'2.5rem', opacity:0.5, pointerEvents:'none' }}>🚀</div>
        <div style={{ position:'absolute', bottom:'40px', right:'8%', fontSize:'2.5rem', opacity:0.5, pointerEvents:'none' }}>📈</div>
        <div style={{ position:'absolute', top:'40%', left:'3%', fontSize:'2rem', opacity:0.4, pointerEvents:'none' }}>⭐</div>
        <div style={{ position:'absolute', top:'30%', right:'4%', fontSize:'2rem', opacity:0.4, pointerEvents:'none' }}>🎯</div>

        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--yellow)', marginBottom:'16px' }}>READY TO GROW?</p>

          <h2 className="font-display font-black uppercase" style={{
            fontSize:'clamp(1.8rem,4.5vw,3.2rem)', lineHeight:1.08,
            color:'#fff', margin:'0 auto 16px', maxWidth:'720px', letterSpacing:'-0.01em',
          }}>
            READY TO LEVERAGE SOCIAL MEDIA TO{' '}
            <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>CONNECT WITH YOUR AUDIENCE?</span>
          </h2>

          <p style={{ fontSize:'1rem', color:'rgba(255,255,255,0.75)', maxWidth:'540px', margin:'0 auto 36px', lineHeight:1.75 }}>
            Get a custom social media strategy built specifically for your brand, goals, and audience.
          </p>

          <Link href="/contact" className="font-display font-black uppercase" style={{
            display:'inline-flex', alignItems:'center',
            padding:'18px 48px', background:'var(--yellow)', color:'#0c1a4e',
            borderRadius:'10px', fontSize:'0.9rem', letterSpacing:'0.1em', textDecoration:'none',
            border:'2px solid #0c1a4e', boxShadow:'0 5px 0 #0c1a4e',
            transition:'all 0.15s ease', marginBottom:'56px',
          }}>
            GET YOUR FREE SOCIAL MEDIA PLAN →
          </Link>

          {/* Review platforms */}
          <div>
            <p style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.55)', marginBottom:'20px', fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase' }}>Read Our 5-Star Reviews</p>
            <div className="scta-reviews">
              {REVIEW_PLATFORMS.map(p => (
                <div key={p.name} className="scta-review-card">
                  <div style={{ width:'28px', height:'28px', borderRadius:'6px', background:p.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'0.7rem', fontWeight:900, flexShrink:0 }}>{p.icon}</div>
                  <div style={{ textAlign:'left' }}>
                    <p style={{ fontSize:'0.72rem', fontWeight:800, color:'#0c1a4e' }}>{p.name}</p>
                    <p style={{ fontSize:'0.65rem', color:'#f59e0b', fontWeight:900 }}>{'★'.repeat(5)} {p.stars}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}