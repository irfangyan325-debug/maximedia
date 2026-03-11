const STATS = [
  { number: '500+',  label: 'Brands Served',       icon: '🏆' },
  { number: '$50M+', label: 'Ad Spend Managed',     icon: '💰' },
  { number: '98%',   label: 'Client Retention',     icon: '🤝' },
  { number: '10+',   label: 'Years of Experience',  icon: '📅' },
]

export default function AboutStats() {
  return (
    <>
      <style>{`
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) {
          .about-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (max-width: 360px) {
          .about-stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
        }
      `}</style>

      <section style={{ background: '#f2f5fc', padding: 'clamp(48px,7vw,72px) 0' }}>
        <div className="container">
          <div className="about-stats-grid">
            {STATS.map(s => (
              <div key={s.label} style={{
                background: '#fff',
                border: '2px solid rgba(26,86,219,0.1)',
                borderRadius: '16px',
                padding: 'clamp(20px,3vw,32px) clamp(12px,2vw,20px)',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(26,86,219,0.06)',
              }}>
                <div style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', marginBottom: '10px' }}>{s.icon}</div>
                <div className="font-display font-black" style={{
                  fontSize: 'clamp(1.6rem,3.5vw,2.2rem)',
                  color: 'var(--blue)', lineHeight: 1, marginBottom: '6px',
                }}>
                  {s.number}
                </div>
                <div style={{ fontSize: 'clamp(0.72rem,1.2vw,0.84rem)', color: 'rgba(12,26,78,0.55)', fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}