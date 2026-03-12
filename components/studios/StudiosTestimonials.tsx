import Image from 'next/image'

const TESTIMONIALS = [
  {
    logo: '/images/about-hero-main.png',
    logoAlt: 'Fras-le',
    quote: "MAXIMEDIA's project management is great. We have a platform where we share all of our ideas and anything that we come up with and they're prompt and responsive. Everything is highly organized. In general, everything runs smoothly.",
    name: 'JULIA GRUPA',
    company: 'Fras-le',
  },
  {
    logo: '/images/about-story.png',
    logoAlt: 'AEM',
    quote: "So far we've seen INSANE growth accross all of our sites and platforms. Up to +3000% impressions, +3700% engagements, and +1,400% audience growth at one of our sites! And we're just about halfway through our period of performance.",
    name: 'AMANDA HAMMOND',
    company: 'National Park Service',
  },
  {
    logo: '/images/about-story.png',
    logoAlt: 'National Park Service',
    quote: "So far we've seen INSANE growth accross all of our sites and platforms. Up to +3000% impressions, +3700% engagements, and +1,400% audience growth at one of our sites! And we're just about halfway through our period of performance.",
    name: 'Jordanne Waldschmidt',
    company: 'Association of Equipment Manufacturers',
  },

]

export default function StudiosTestimonials() {
  return (
    <>
      <style>{`
        .st-section {
          background: #ffffff;
          padding: clamp(64px,9vw,104px) 0;
        }
        .st-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(18px,2.5vw,28px);
          margin-top: clamp(40px,6vw,64px);
        }
        /* Card — exact match to screenshot */
        .st-card {
          border: 1.5px solid #b8dff0;
          border-radius: 18px;
          padding: clamp(28px,4vw,44px) clamp(28px,3.5vw,40px);
          box-shadow: 4px 4px 0 #c9e8f5, 0 4px 20px rgba(26,86,219,0.06);
          display: flex;
          flex-direction: column;
          gap: clamp(16px,2.5vw,24px);
          background: #fff;
          transition: transform 0.22s, box-shadow 0.22s;
        }
        .st-card:hover {
          transform: translateY(-4px);
          box-shadow: 4px 8px 0 #b8dff0, 0 12px 32px rgba(26,86,219,0.11);
        }

        /* Top row: logo circle left, yellow quote right */
        .st-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .st-logo-circle {
          width: clamp(64px,8vw,88px);
          height: clamp(64px,8vw,88px);
          border-radius: 50%;
          border: 2px solid #d6eaf8;
          overflow: hidden;
          flex-shrink: 0;
          background: #f4f6fb;
          position: relative;
        }
        /* Big yellow open-quote */
        .st-quote-icon {
          font-size: clamp(3rem,5vw,4.5rem);
          line-height: 0.6;
          color: var(--yellow);
          font-family: Georgia, serif;
          font-weight: 900;
          letter-spacing: -0.04em;
          user-select: none;
          padding-top: 10px;
        }

        /* Quote text */
        .st-quote-text {
          font-size: clamp(0.84rem,1.35vw,0.97rem);
          color: rgba(12,26,78,0.72);
          line-height: 1.82;
          flex: 1;
        }

        /* Divider */
        .st-divider {
          border: none;
          border-top: 1.5px solid #d6eaf8;
          margin: 0;
        }

        /* Author */
        .st-author-name {
          font-family: var(--font-display);
          font-weight: 900;
          font-style: italic;
          font-size: clamp(1rem,1.8vw,1.2rem);
          color: var(--blue);
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .st-author-company {
          font-size: clamp(0.82rem,1.2vw,0.92rem);
          color: rgba(12,26,78,0.55);
        }

        @media (max-width: 768px) {
          .st-grid { grid-template-columns: 1fr; }
          .st-card:hover { transform: none; }
        }
      `}</style>

      <section className="st-section">
        <div className="container">

          {/* Heading */}
          <h2
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(2.2rem,6vw,4.2rem)',
              lineHeight: 1.0,
              color: 'var(--blue)',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            CLIENTS TALK ABOUT US
          </h2>

          {/* 2-col card grid */}
          <div className="st-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="st-card">

                {/* Top: logo + quote mark */}
                <div className="st-card-top">
                  <div className="st-logo-circle">
                    <Image
                      src={t.logo}
                      alt={t.logoAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="88px"
                    />
                  </div>
                  <div className="st-quote-icon">&ldquo;</div>
                </div>

                {/* Quote body */}
                <p className="st-quote-text">{t.quote}</p>

                {/* Divider */}
                <hr className="st-divider" />

                {/* Author */}
                <div>
                  <p className="st-author-name">{t.name}</p>
                  <p className="st-author-company">{t.company}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}