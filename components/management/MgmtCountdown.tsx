import Image from 'next/image'

export default function MgmtCountdown() {
  return (
    <>
      <style>{`
        .mcd-section {
          background: #fef9e7;
          padding: clamp(64px,9vw,100px) 0 0;
          overflow: hidden;
        }
        .mcd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(36px,5vw,72px);
          align-items: center;
          padding-bottom: clamp(48px,7vw,80px);
        }
        .mcd-heading {
          font-size: clamp(1.8rem,4vw,2.8rem);
          line-height: 1.08;
          color: #0c1a4e;
          letter-spacing: -0.01em;
          margin-bottom: clamp(16px,2.5vw,24px);
        }
        .mcd-desc {
          font-size: clamp(1.88rem,1.5vw,2rem);
          color: rgba(12,26,78,0.72);
          line-height: 1.2;
          margin-bottom: 14px;
        }
        /* Right: yellow card with image */
        .mcd-photo-card {
          background: var(--yellow);
          border-radius: clamp(16px,2.5vw,22px);
          overflow: hidden;
          position: relative;
          aspect-ratio: 1 / 1;
          width: 100%;
          max-width: 420px;
          margin-left: auto;
        }
        /* Full-width quote below */
        .mcd-quote {
          background: #fef9e7;
          padding: clamp(32px,5vw,56px) 0 clamp(48px,7vw,80px);
        }
        .mcd-quote-text {
          font-size: clamp(1.6rem,4vw,3rem);
          line-height: 1.15;
          color: var(--yellow);
          font-style: italic;
          letter-spacing: -0.01em;
        }
        @media (max-width: 768px) {
          .mcd-grid { grid-template-columns: 1fr; gap: 32px; }
          .mcd-photo-card { max-width: 340px; margin: 0 auto; }
        }
      `}</style>

      <section className="mcd-section">
        <div className="container">
          <div className="mcd-grid">

            <div>
              <h2 className="font-display font-black uppercase mcd-heading">
                COUNTDOWN TO SOCIAL MEDIA SUCCESS
              </h2>
              <p className="mcd-desc">
                Our <strong>team</strong> is fully committed to ensuring your success, starting with an
                initial kickoff call and continuing through the launch of your first social media posts.
              </p>
              <p className="mcd-desc" style={{ fontSize:'clamp(1.22rem,1.3vw,2rem)', color:'rgba(12,26,78,0.55)' }}>
                We take full ownership of our clients&apos; success and consistently deliver results you can count on.
              </p>
            </div>

            <div>
              <div className="mcd-photo-card">
                <Image
                  src="/images/mgmt-countdown.png"
                  alt="Countdown to social media success"
                  fill
                  style={{ objectFit:'cover', objectPosition:'center top' }}
                  sizes="(max-width:768px) 80vw, 42vw"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mcd-quote">
          <div className="container">
            <p className="font-display font-black uppercase mcd-quote-text">
              NO GUESSING GAMES HERE! WITH REGULAR REPORTING CALLS AND ONGOING CHECK-INS,
              WE KEEP YOU IN THE LOOP AND AHEAD OF THE GAME.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}