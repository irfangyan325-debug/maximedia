const STATS = [
  { num: '+3,700%', label: 'Engagement Growth' },
  { num: '+1,400%', label: 'Audience Growth' },
  { num: '+3,000%', label: 'Impressions Growth' },
  { num: '$50M+',  label: 'Ad Spend Managed' },
]

export default function WorkStats() {
  return (
    <>
      <style>{`
        .ws-bar {
          background: #f4f6fb;
          padding: clamp(28px,4vw,44px) 0;
          border-bottom: 1.5px solid #d6eaf8;
        }
        .ws-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: clamp(16px,2vw,24px);
          text-align: center;
        }
        .ws-num {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(1.6rem,3.5vw,2.6rem);
          color: var(--blue);
          line-height: 1;
          margin-bottom: 6px;
        }
        .ws-label {
          font-size: clamp(0.78rem,1.2vw,0.88rem);
          color: rgba(12,26,78,0.6);
          font-weight: 600;
          letter-spacing: 0.04em;
        }
        @media (max-width: 640px) {
          .ws-grid { grid-template-columns: repeat(2,1fr); }
        }
      `}</style>

      <div className="ws-bar">
        <div className="container">
          <div className="ws-grid">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="ws-num">{s.num}</div>
                <div className="ws-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}