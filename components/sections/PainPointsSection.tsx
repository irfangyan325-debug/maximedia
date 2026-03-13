import Image from 'next/image'
import { PAIN_POINTS } from '@/lib/data'


const PAIN_ICONS: Record<string, string> = {
  '📉': '/images/icons/pain-magnet.png',  
  '🌀': '/images/icons/pain-trends.png',
  '📊': '/images/icons/pain-roi.png',
  '🎨': '/images/icons/pain-creative.png',
}

export default function PainPointsSection() {
  return (
    <>
      <style>{`
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) { .pain-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
        @media (max-width: 480px) {
          .pain-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .pain-heading br { display: none; }
        }

        /* Card matching screenshot */
        .pain-card {
          background: #ffffff;
          border: 2px solid #b8dff0;
          border-radius: 18px;
          padding: clamp(20px,3vw,32px) clamp(16px,2vw,24px) clamp(18px,2.5vw,28px);
          text-align: center;
          position: relative;
          overflow: hidden;
          /* Offset shadow bottom-right — matches screenshot */
          box-shadow: 6px 6px 0px #b8dff0, 0 4px 20px rgba(26,86,219,0.07);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .pain-card:hover {
          transform: translateY(-4px);
          box-shadow: 6px 10px 0px #a0cce8, 0 8px 28px rgba(26,86,219,0.12);
        }

        /* Blue tab notch on right edge — matches screenshot */
        .pain-card::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -2px;
          transform: translateY(-50%);
          width: 6px;
          height: clamp(40px,6vw,64px);
          background: var(--blue);
          border-radius: 4px 0 0 4px;
        }

        .pain-icon-wrap {
          width: clamp(72px,10vw,100px);
          height: clamp(72px,10vw,100px);
          margin: 0 auto clamp(14px,2.5vw,22px);
          position: relative;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.12));
        }
      `}</style>

      <section style={{ background: '#ffffff', padding: 'clamp(48px,7vw,80px) 0 0' }}>
        <div className="container">

          <h2
            className="font-display font-black uppercase pain-heading"
            style={{
              fontSize: 'clamp(1.4rem,4vw,2.8rem)',
              lineHeight: 1.1,
              color: 'var(--blue)',
              textAlign: 'center',
              margin: '0 auto clamp(32px,5vw,52px)',
              letterSpacing: '-0.01em',
            }}
          >
            TIRED OF SOCIAL MEDIA EFFORTS THAT<br />DON&apos;T DELIVER?
          </h2>

          {/* Cards */}
          <div className="pain-grid">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="pain-card">

                {/* 3D image icon */}
                <div className="pain-icon-wrap">
                  <Image
                    src={PAIN_ICONS[p.icon] ?? '/images/icons/pain-default.png'}
                    alt={p.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width:480px) 20vw, 10vw"
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-display font-black uppercase"
                  style={{
                    fontSize: 'clamp(0.68rem,1.2vw,0.82rem)',
                    lineHeight: 1.35,
                    color: 'var(--blue)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {p.title}
                </h3>

              </div>
            ))}
          </div>
        </div>

        {/* Blue wave */}
        <div style={{ lineHeight: 0, marginTop: 'clamp(36px,5vw,56px)' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
            <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="var(--blue)" />
          </svg>
        </div>
      </section>
    </>
  )
}