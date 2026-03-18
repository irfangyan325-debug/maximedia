import Link from 'next/link'
import Image from 'next/image'

export default function MgmtIntro() {
  return (
    <>
      <style>{`
        .mint-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px,6vw,80px);
          align-items: center;
        }
        .mint-photo-wrap {
          position: relative;
        }
        .mint-photo-card {
          position: relative;
          border-radius: clamp(18px,3vw,26px);
          overflow: hidden;
          border: 2px solid #b8dff0;
          box-shadow: 6px 6px 0 #c9e8f5, 0 16px 48px rgba(26,86,219,0.1);
          aspect-ratio: 3/4;
          background: #e8f4fb;
        }
        .mint-stopwatch {
          position: absolute;
          bottom: -18px;
          right: clamp(20px,5vw,48px);
          font-size: clamp(3.5rem,6vw,5rem);
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.18));
          pointer-events: none;
          z-index: 2;
        }
        .mint-heading {
          font-size: clamp(2rem,4.5vw,3.4rem);
          line-height: 1.05;
          color: var(--yellow);
          font-style: italic;
          letter-spacing: -0.01em;
          margin-bottom: clamp(18px,2.5vw,28px);
        }
        .mint-desc {
          font-size: clamp(1.62rem,1.6vw,1.8rem);
          color: #0c1a4e;
          line-height: 1.4;
        }
        .mint-link {
          color: var(--blue);
          font-weight: 700;
          text-decoration: underline;
          text-decoration-color: var(--blue);
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }
        .mint-link:hover { opacity: 0.75; }
        @media (max-width: 768px) {
          .mint-grid { grid-template-columns: 1fr; gap: 32px; }
          .mint-photo-card { aspect-ratio: 4/3; max-width: 480px; margin: 0 auto; }
          .mint-stopwatch { bottom: -14px; right: 24px; }
        }
      `}</style>

      <section style={{ background:'#ffffff', padding:'clamp(72px,9vw,100px) 0' }}>
        <div className="container">
          <div className="mint-grid">
            <div className="mint-photo-wrap">
              <div className="mint-photo-card">
                <Image
                  src="/images/mgmt-team.png"
                  alt="Our social media management team"
                  fill
                  style={{ objectFit:'cover', objectPosition:'center top' }}
                  sizes="(max-width:768px) 90vw, 45vw"
                />
              </div>
              {/* Floating stopwatch */}
              <div className="mint-stopwatch">⏱️</div>
            </div>

            {/* Right — heading + description */}
            <div>
              <h2 className="font-display font-black uppercase mint-heading">
                LET&apos;S GET SOCIAL
              </h2>
              <p className="mint-desc">
                Our team will work with you to establish your brand on social media with{' '}
                <strong>research{' '}
                  <Link href="/services/social-media-strategy" className="mint-link">
                    based strategies
                  </Link>
                </strong>{' '}
                and thumb-stopping{' '}
                <Link href="/services/social-content-production" className="mint-link">
                  social media content
                </Link>{' '}
                that will keep your brand on trend.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}