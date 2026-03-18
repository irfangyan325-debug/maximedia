export default function MgmtFiveElements() {
  const ELEMENTS = [
    { text: 'CREATING A TAILORED, RESULTS-ORIENTED STRATEGY' },
    { text: 'REGULARLY DISTRIBUTING SCROLL-STOPPING CONTENT ACROSS SOCIAL PLATFORMS' },
    { text: 'MONITORING CONVERSATIONS AROUND THE BRAND ON SOCIAL MEDIA' },
    { text: "ENGAGING WITH THE BRAND'S COMMUNITY ON SOCIAL MEDIA" },
    { text: 'MONITORING PERFORMANCE BEFORE, DURING AND POST-CAMPAIGN' },
  ]

  return (
    <>
      <style>{`
        .mfe-section {
          background: #ffffff;
          padding: clamp(64px,9vw,100px) 0;
        }
        .mfe-heading {
          font-size: clamp(1.8rem,4.5vw,3.2rem);
          line-height: 1.08;
          color: #0c1a4e;
          letter-spacing: -0.02em;
          text-align: center;
          margin-bottom: clamp(40px,6vw,64px);
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }
        /* Top row: 3 equal columns */
        .mfe-row-top {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px,2vw,22px);
          margin-bottom: clamp(14px,2vw,22px);
        }
        /* Bottom row: 2 cards centered */
        .mfe-row-bottom {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(14px,2vw,22px);
          max-width: calc(66.66% + clamp(14px,2vw,22px));
          margin: 0 auto;
        }
        /* Card style — yellow border, white bg, yellow italic text */
        .mfe-card {
          background: #ffffff;
          border: 2.5px solid var(--yellow);
          border-radius: clamp(12px,2vw,18px);
          padding: clamp(22px,3vw,32px) clamp(18px,2.5vw,28px);
          box-shadow: 4px 4px 0 rgba(245,197,24,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: clamp(110px,14vw,160px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .mfe-card:hover {
          transform: translateY(-4px);
          box-shadow: 4px 8px 0 rgba(245,197,24,0.4);
        }
        .mfe-card-text {
          font-size: clamp(0.78rem,1.3vw,0.95rem);
          line-height: 1.4;
          color: var(--yellow);
          font-style: italic;
          letter-spacing: 0.02em;
        }
        @media (max-width: 768px) {
          .mfe-row-top { grid-template-columns: 1fr; }
          .mfe-row-bottom { grid-template-columns: 1fr; max-width: 100%; }
        }
      `}</style>

      <section className="mfe-section">
        <div className="container">
          <h2 className="font-display font-black uppercase mfe-heading">
            FIVE ELEMENTS OF SUCCESSFUL SOCIAL MEDIA MANAGEMENT
          </h2>

          {/* Top row — 3 cards */}
          <div className="mfe-row-top">
            {ELEMENTS.slice(0, 3).map((el, i) => (
              <div key={i} className="mfe-card">
                <p className="font-display font-black uppercase mfe-card-text">{el.text}</p>
              </div>
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="mfe-row-bottom">
            {ELEMENTS.slice(3).map((el, i) => (
              <div key={i} className="mfe-card">
                <p className="font-display font-black uppercase mfe-card-text">{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}