const TESTIMONIALS = [
  {
    logo: '🏢',
    logoBg: '#f4f6fb',
    name: 'JULIA GRUPA',
    company: 'Fras-le',
    quote: "MAXIMEDIA's project management is great. We have a platform where we share all of our ideas and anything that we come up with and they're prompt and responsive. Everything is highly organized. In general, everything runs smoothly. Our teams get along well, and their communication skills are great. If I don't understand something, we make sure to bring it up in a call to discuss it further. On top of that, MAXIMEDIA has been organized; they schedule things ahead, which makes the projects a lot less stressful for me. I don't have to worry too much about what needs to be done or what needs to be posted on the day.",
  },
  {
    logo: '🏞️',
    logoBg: '#e8f5e9',
    name: 'AMANDA HAMMOND',
    company: 'National Park Service',
    quote: "So far we've seen INSANE growth accross all of our sites and platforms. Up to +3000% impressions, +3700% engagements, and +1,400% audience growth at one of our sites! And we're just about halfway through our period of performance. Our project manager was fantastic, she was very timely, professional, always available to meet our needs. Very efficient and respectful of our time. I love MAXIMEDIA's custom approach to work…they are dedicated to creating custom solutions to meet our needs and worked very hard to meet those needs and we came away very happy.",
  },
  {
    logo: '🏗️',
    logoBg: '#fff3e0',
    name: 'JORDANNE WALDSCHMIDT',
    company: 'Association of Equipment Manufacturers',
    quote: "We've seen significant growth on our social media channels. Our number of Instagram followers went from 4,000 to 11,000. MAXIMEDIA launched our LinkedIn page and it already has just under 6,000 followers. Our Facebook and Twitter accounts have seen similar growth. We've had overall fantastic engagement and performance. We ended up winning an award from the Construction Media Alliance — Best Social Media of the year.",
  },
]

export default function WorkTestimonials() {
  return (
    <>
      <style>{`
        .wt-section {
          background: #ffffff;
          padding: clamp(64px,9vw,104px) 0;
        }
        .wt-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: clamp(16px,2vw,24px);
          margin-top: clamp(40px,6vw,56px);
        }
        .wt-card {
          border: 1.5px solid #b8dff0;
          border-radius: 18px;
          padding: clamp(24px,3.5vw,36px) clamp(22px,3vw,32px);
          box-shadow: 4px 4px 0 #c9e8f5, 0 4px 16px rgba(26,86,219,0.06);
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #fff;
          transition: transform 0.2s;
        }
        .wt-card:hover { transform: translateY(-4px); }
        .wt-top { display: flex; align-items: flex-start; justify-content: space-between; }
        .wt-logo {
          width: clamp(52px,7vw,72px);
          height: clamp(52px,7vw,72px);
          border-radius: 50%;
          border: 2px solid #d6eaf8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1.4rem,2.5vw,2rem);
          flex-shrink: 0;
        }
        .wt-quote-icon {
          font-size: clamp(2.8rem,5vw,4rem);
          line-height: 0.6;
          color: var(--yellow);
          font-family: Georgia, serif;
          font-weight: 900;
          padding-top: 8px;
          user-select: none;
        }
        .wt-text {
          font-size: clamp(0.8rem,1.2vw,0.9rem);
          color: rgba(12,26,78,0.7);
          line-height: 1.82;
          flex: 1;
        }
        .wt-divider { border: none; border-top: 1.5px solid #d6eaf8; margin: 0; }
        .wt-name {
          font-family: var(--font-display);
          font-weight: 900;
          font-style: italic;
          font-size: clamp(0.9rem,1.5vw,1.05rem);
          color: var(--blue);
          text-transform: uppercase;
          margin-bottom: 3px;
        }
        .wt-company { font-size: clamp(0.78rem,1.1vw,0.88rem); color: rgba(12,26,78,0.5); }
        @media (max-width: 860px) {
          .wt-grid { grid-template-columns: 1fr; max-width: 500px; margin-left: auto; margin-right: auto; }
          .wt-card:hover { transform: none; }
        }
      `}</style>

      <section className="wt-section">
        <div className="container">
          <h2
            className="font-display font-black uppercase"
            style={{ fontSize: 'clamp(2rem,5.5vw,3.8rem)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--blue)', textAlign: 'center' }}
          >
            CLIENTS TALK ABOUT US
          </h2>

          <div className="wt-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="wt-card">
                <div className="wt-top">
                  <div className="wt-logo" style={{ background: t.logoBg }}>{t.logo}</div>
                  <div className="wt-quote-icon">&ldquo;</div>
                </div>
                <p className="wt-text">{t.quote}</p>
                <hr className="wt-divider" />
                <div>
                  <p className="wt-name">{t.name}</p>
                  <p className="wt-company">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}