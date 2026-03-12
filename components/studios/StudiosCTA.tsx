import Link from 'next/link'

export default function StudiosCTA() {
  return (
    <>
      <style>{`
        .scta-section {
          background: #ffffff;
          padding: clamp(40px,6vw,72px) 0 clamp(64px,9vw,104px);
        }
        .scta-card {
          border: 1.5px solid #b8dff0;
          border-radius: 22px;
          box-shadow: 4px 4px 0 #c9e8f5, 0 4px 24px rgba(26,86,219,0.07);
          padding: clamp(48px,7vw,88px) clamp(32px,6vw,80px);
          text-align: center;
          background: #fff;
        }
        .scta-email {
          color: var(--blue);
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
          font-size: clamp(0.9rem,1.6vw,1.05rem);
          font-weight: 600;
          transition: opacity 0.15s;
        }
        .scta-email:hover { opacity: 0.72; }
      `}</style>

      <section className="scta-section">
        <div className="container">
          <div className="scta-card">

            <h2
              className="font-display font-black uppercase"
              style={{
                fontSize: 'clamp(2rem,5.5vw,4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: 'var(--blue)',
                marginBottom: 'clamp(20px,3vw,32px)',
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <p style={{
              fontSize: 'clamp(0.9rem,1.6vw,1.05rem)',
              color: 'rgba(12,26,78,0.62)',
              lineHeight: 1.78,
              maxWidth: '520px',
              margin: '0 auto clamp(14px,2vw,20px)',
            }}>
              Got questions? We&apos;ve got answers. If you have any other questions, feel
              free to send us an email to
            </p>

            <a href="mailto:studios@maximedia.com" className="scta-email">
              studios@maximedia.com
            </a>

          </div>
        </div>
      </section>
    </>
  )
}