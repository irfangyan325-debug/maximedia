import Link from 'next/link'

export default function BlogSidebar() {
  return (
    <>
      <style>{`
        .bsb-sticky {
          position: sticky;
          top: 90px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        /* Blue CTA card */
        .bsb-cta-card {
          background: var(--blue);
          border-radius: 18px;
          padding: clamp(24px,3.5vw,36px) clamp(22px,3vw,32px);
          position: relative;
          overflow: hidden;
        }
        .bsb-cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 30% 20%, rgba(245,197,24,0.12) 0%, transparent 60%);
          pointer-events: none;
        }
        .bsb-cta-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(1.2rem,2vw,1.6rem);
          line-height: 1.1;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin-bottom: clamp(16px,2.5vw,24px);
          position: relative;
          z-index: 1;
        }
        .bsb-cta-btn {
          display: inline-flex;
          align-items: center;
          width: 100%;
          justify-content: center;
          padding: clamp(12px,1.8vw,15px) clamp(16px,2vw,24px);
          background: var(--yellow);
          color: #0c1a4e;
          border-radius: 8px;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.68rem,1.1vw,0.78rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid #0c1a4e;
          box-shadow: 0 4px 0 #0c1a4e;
          transition: all 0.15s;
          position: relative;
          z-index: 1;
        }
        .bsb-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 0 #0c1a4e; }
        /* Rocket emoji decoration */
        .bsb-rocket {
          position: absolute;
          bottom: -10px;
          right: 12px;
          font-size: clamp(3.5rem,6vw,5rem);
          opacity: 0.35;
          pointer-events: none;
          transform: rotate(-20deg);
        }

        /* Categories card */
        .bsb-cats-card {
          background: #fff;
          border: 1.5px solid #b8dff0;
          border-radius: 18px;
          padding: clamp(20px,3vw,28px);
          box-shadow: 4px 4px 0 #c9e8f5;
        }
        .bsb-cats-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.82rem,1.3vw,0.96rem);
          color: var(--blue);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 14px;
        }
        .bsb-cat-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 100px;
          background: #e8f0fe;
          border: 1.5px solid #b8d0f8;
          color: var(--blue);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.15s;
          margin: 0 6px 8px 0;
        }
        .bsb-cat-pill:hover { background: var(--blue); color: #fff; border-color: var(--blue); }
      `}</style>

      <aside className="bsb-sticky">
        {/* Blue CTA card */}
        <div className="bsb-cta-card">
          <p className="bsb-cta-title">TAILORED SOCIAL MEDIA PROPOSAL THAT DRIVES RESULTS.</p>
          <Link href="/contact" className="bsb-cta-btn">GET YOUR FREE CUSTOM PROPOSAL</Link>
          <span className="bsb-rocket" aria-hidden>🚀</span>
        </div>

        {/* Categories */}
        <div className="bsb-cats-card">
          <p className="bsb-cats-title">Browse Topics</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {['Strategy', 'Paid Ads', 'TikTok', 'Instagram', 'LinkedIn', 'Content', 'Analytics', 'Influencer', 'B2B', 'E-Commerce'].map(cat => (
              <a key={cat} href="#" className="bsb-cat-pill">{cat}</a>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}