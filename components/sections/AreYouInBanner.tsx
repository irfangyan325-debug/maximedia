export default function AreYouInBanner() {
  return (
    <div
      style={{
        background: 'var(--white)',
        overflow: 'hidden',
        padding: '4px 0',
      
      }}
    >
      <div className="marquee-track marquee-track--fast">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              paddingLeft: '32px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 'clamp(2.4rem, 2.5vw, 2.9rem)', lineHeight: 1 }}>🤝</span>
            <span
              className="font-display font-black uppercase"
              style={{
                fontSize: 'clamp(2.2rem, 2.2vw, 3.55rem)',
                letterSpacing: '0.03em',
                color: '#ffbe0a',
                lineHeight: 1,
              }}
            >
              ARE YOU IN?
            </span>
            
          </div>
        ))}
      </div>
    </div>
  )
}