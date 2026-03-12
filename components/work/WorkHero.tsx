import Link from 'next/link'

export default function WorkHero() {
  return (
    <>
      <style>{`
        .work-hero {
          background: var(--blue);
          padding: clamp(80px,12vw,140px) 0 clamp(56px,8vw,88px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .work-hero::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 50px;
          background: #ffffff;
          clip-path: ellipse(55% 100% at 50% 100%);
        }
        .work-hero-btn {
          display: inline-flex;
          align-items: center;
          padding: clamp(13px,2vw,17px) clamp(28px,4vw,48px);
          background: var(--yellow);
          color: #0c1a4e;
          border-radius: 10px;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.72rem,1.3vw,0.82rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid #0c1a4e;
          box-shadow: 0 5px 0 #0c1a4e;
          margin-top: clamp(20px,3vw,32px);
          transition: all 0.15s;
        }
        .work-hero-btn:hover { transform: translateY(-2px); box-shadow: 0 7px 0 #0c1a4e; }
      `}</style>

      <section className="work-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(2.2rem,6vw,4.4rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: '#fff',
              maxWidth: '820px',
              margin: '0 auto clamp(16px,2.5vw,24px)',
            }}
          >
            THE RESULTS{' '}
            <span style={{ color: 'var(--yellow)', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textDecorationThickness: '4px', textUnderlineOffset: '6px' }}>
              SPEAK
            </span>{' '}
            FOR THEMSELVES
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.78, maxWidth: '560px', margin: '0 auto' }}>
            See how our services generated measurable business growth for our clients all across the globe.
          </p>
          <Link href="/contact" className="work-hero-btn">
            GET YOUR FREE CUSTOM PROPOSAL →
          </Link>
        </div>
      </section>
    </>
  )
}