'use client'

const REVIEW_PLATFORMS = [
  { name: 'Google',        icon: '⭐', stars: '5.0', color: '#4285f4' },
  { name: 'Trustpilot',    icon: '✓',  stars: '4.9', color: '#00b67a' },
  { name: 'G2',            icon: 'G2', stars: '4.8', color: '#ff492c' },
  { name: 'AgencySpotter', icon: '🔍', stars: '5.0', color: '#1a56db' },
  { name: 'Clutch',        icon: '◆',  stars: '4.9', color: '#e63329' },
]

export default function TeamReviews() {
  return (
    <>
      <style>{`
        .tr-cards {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .tr-card {
          background: #fff;
          border-radius: 14px;
          padding: 16px 24px;
          border: 1.5px solid rgba(26,86,219,0.12);
          box-shadow: 0 4px 16px rgba(26,86,219,0.07);
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 160px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tr-card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(26,86,219,0.12); }
      `}</style>

      <section style={{ background:'#f2f5fc', padding:'80px 0' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'16px', marginBottom:'36px', flexWrap:'wrap' }}>
            <div style={{ width:'64px', height:'64px', borderRadius:'16px', background:'linear-gradient(135deg, var(--blue), #1341b5)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem' }}>⭐</div>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.4rem,3vw,2rem)', color:'var(--blue)', lineHeight:1.1 }}>
              READ 5-STAR REVIEWS
            </h2>
          </div>

          <div className="tr-cards">
            {REVIEW_PLATFORMS.map(p => (
              <div key={p.name} className="tr-card">
                <div style={{ width:'32px', height:'32px', borderRadius:'8px', background:p.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'0.75rem', fontWeight:900, flexShrink:0 }}>{p.icon}</div>
                <div style={{ textAlign:'left' }}>
                  <p style={{ fontSize:'0.78rem', fontWeight:800, color:'#0c1a4e' }}>{p.name}</p>
                  <p style={{ fontSize:'0.7rem', color:'var(--yellow)', fontWeight:900 }}>{'★'.repeat(5)} {p.stars}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}