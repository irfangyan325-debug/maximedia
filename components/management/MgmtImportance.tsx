import Image from 'next/image'

export default function MgmtImportance() {
  return (
    <>
      <style>{`
        .mi-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(40px,6vw,80px);
          align-items: center;
        }
        .mi-photo-wrap { position: relative; }
        .mi-photo-card {
          position: relative;
          border-radius: clamp(18px,3vw,26px);
          overflow: hidden;
          aspect-ratio: 3/4;
          width: 100%;
          background: #e8e0d8;
          border: 2px solid #e0d8cc;
          box-shadow: 6px 6px 0 #e0d8cc, 0 16px 48px rgba(0,0,0,0.1);
        }
        .mi-stopwatch {
          position: absolute;
          bottom: -18px;
          left: clamp(16px,4vw,36px);
          font-size: clamp(3.5rem,6vw,5rem);
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.2));
          pointer-events: none;
          z-index: 2;
        }
        .mi-heading {
          font-size: clamp(2rem,4.5vw,3.6rem);
          line-height: 1.05;
          color: var(--yellow);
          font-style: bold;
          letter-spacing: -0.01em;
          margin-bottom: clamp(20px,3vw,32px);
        }
        .mi-body {
          font-size: clamp(0.92rem,1.5vw,1.05rem);
          color: rgba(12,26,78,0.75);
          line-height: 1.82;
          margin-bottom: clamp(14px,2vw,20px);
        }
        .mi-source {
          font-size: clamp(0.75rem,1.2vw,0.85rem);
          color: rgba(12,26,78,0.42);
          font-style: italic;
          margin-top: clamp(8px,1.5vw,14px);
        }
        @media (max-width: 768px) {
          .mi-grid { grid-template-columns: 1fr; gap: 48px; }
          .mi-photo-card { aspect-ratio: 4/3; max-width: 480px; margin: 0 auto; }
        }
      `}</style>

      <section style={{ background:'#ffffff', padding:'clamp(72px,9vw,100px) 0' }}>
        <div className="container">
          <div className="mi-grid">

            {/* Left — photo + floating stopwatch */}
            <div className="mi-photo-wrap">
              <div className="mi-photo-card">
                {/* Replace with your actual image */}
                <Image
                  src="/images/mgmt-importance.png"
                  alt="The importance of social media management"
                  fill
                  style={{ objectFit:'cover', objectPosition:'center top' }}
                  sizes="(max-width:768px) 90vw, 42vw"
                />
              </div>
              {/* Floating stopwatch bottom-left */}
              <div className="mi-stopwatch">⏱️</div>
            </div>

            {/* Right — heading + body */}
            <div>
              <h2 className="font-display font-black uppercase mi-heading">
                THE IMPORTANCE OF SOCIAL MEDIA MANAGEMENT
              </h2>

              <p className="mi-body">
                More than half of consumers* turn to social media to discover new brands, making social
                media management an essential part of any modern marketing strategy.
              </p>

              <p className="mi-body">
                At MAXIMEDIA, we view social media management as the backbone of what we do, backed by
                data and built to drive results. From content creation to community engagement and
                performance tracking, every decision we make is informed by strategy and insights.
              </p>

              <p className="mi-body">
                And that&apos;s why we aim for excellence in every aspect of our clients&apos; campaigns,
                helping brands connect, grow, and thrive in an always-on digital world.
              </p>

              <p className="mi-source">*Source: Sprout Social, 2024</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}