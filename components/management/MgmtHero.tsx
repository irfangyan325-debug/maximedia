import Link from 'next/link'

export default function MgmtHero() {
  return (
    <>
      <style>{`
        .mh-section {
          background: var(--yellow);
          padding-top: calc(var(--nav-h) + clamp(56px,8vw,90px));
          padding-bottom: clamp(72px,10vw,110px);
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        /* Dot grid bottom-right — matches screenshot */
        .mh-dots {
          position: absolute;
          bottom: 24px;
          right: 32px;
          display: grid;
          grid-template-columns: repeat(10, 8px);
          gap: 6px;
          pointer-events: none;
          opacity: 0.35;
        }
        .mh-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #0c1a4e;
        }

        .mh-title-black {
          font-size: clamp(2.4rem, 7vw, 5.2rem);
          line-height: 1.0;
          color: #0c1a4e;
          letter-spacing: -0.02em;
          display: block;
          margin-bottom: 4px;
        }
        .mh-title-white {
          font-size: clamp(2.4rem, 7vw, 5.2rem);
          line-height: 1.0;
          color: #ffffff;
          letter-spacing: -0.02em;
          display: block;
          text-decoration: underline;
          text-decoration-color: #ffffff;
          text-decoration-thickness: 5px;
          text-underline-offset: 8px;
          margin-bottom: clamp(20px,3vw,32px);
        }
        .mh-desc {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          color: #0c1a4e;
          line-height: 1.75;
          max-width: 640px;
          margin: 0 auto clamp(28px,4vw,40px);
        }
        .mh-btn {
          display: inline-flex;
          align-items: center;
          padding: clamp(16px,2.5vw,20px) clamp(32px,5vw,56px);
          background: #0c1a4e;
          color: var(--yellow);
          border-radius: 12px;
          font-size: clamp(0.78rem,1.4vw,0.9rem);
          letter-spacing: 0.12em;
          text-decoration: none;
          transition: all 0.15s ease;
          border: 2px solid #0c1a4e;
        }
        .mh-btn:hover {
          background: var(--blue);
          border-color: var(--blue);
          transform: translateY(-2px);
        }
      `}</style>

      <section className="mh-section">
        {/* Dot grid decoration */}
        <div className="mh-dots">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="mh-dot" />
          ))}
        </div>

        <div className="container">
          <h1 className="font-display font-black uppercase">
            <span className="mh-title-black">TAKE YOUR SOCIAL MEDIA MANAGEMENT</span>
            <span className="mh-title-white">TO THE NEXT LEVEL</span>
          </h1>

          <p className="mh-desc">
            Get fired up about your social media profiles with next-generation social media management
            from <strong style={{ color:'var(--blue)' }}>THE social media marketing agency</strong>.
          </p>

          <Link href="/contact" className="font-display font-black uppercase mh-btn">
            GET YOUR FREE CUSTOM PROPOSAL
          </Link>
        </div>
      </section>
    </>
  )
}