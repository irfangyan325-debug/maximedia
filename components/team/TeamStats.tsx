const STATS = [
  { number: '500+',  label: 'Brands Served',      icon: '🏆' },
  { number: '$50M+', label: 'Ad Spend Managed',    icon: '💰' },
  { number: '98%',   label: 'Client Retention',    icon: '🤝' },
  { number: '10+',   label: 'Years of Experience', icon: '📅' },
]

export default function TeamStats() {
  return (
    <>
      <style>{`
        .ts-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
        }
        @media (max-width: 640px) { .ts-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>

      <section style={{ background:'#ffffff', padding:'72px 0 60px' }}>
        <div className="container">
          <div className="ts-grid">
            {STATS.map(s => (
              <div key={s.label} style={{ background:'#fff', border:'2px solid rgba(26,86,219,0.12)', borderRadius:'16px', padding:'28px 20px', textAlign:'center', boxShadow:'0 4px 16px rgba(26,86,219,0.06)' }}>
                <div style={{ fontSize:'2.4rem', marginBottom:'10px' }}>{s.icon}</div>
                <div className="font-display font-black" style={{ fontSize:'2rem', color:'var(--blue)', lineHeight:1, marginBottom:'6px' }}>{s.number}</div>
                <div style={{ fontSize:'0.82rem', color:'rgba(12,26,78,0.55)', fontWeight:600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}