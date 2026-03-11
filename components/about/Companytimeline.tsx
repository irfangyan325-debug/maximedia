'use client'

import { useState } from 'react'
import Image from 'next/image'

const MILESTONES = [
  {
    label: 'Year 1',
    title: 'YEAR 1',
    desc: 'MAXIMEDIA was founded with a bold vision: make social media actually drive revenue. We landed our first 10 clients and proved the model works — social media done right converts. Our small but mighty team of 5 set the tone for everything that followed.',
    img: '/images/year-01.png',
  },
  {
    label: 'Year 3',
    title: 'YEAR 3',
    desc: 'Growth kicked into high gear. We expanded our team to 20+ specialists, launched our Paid Social division, and hit $5M in managed ad spend for clients across 3 industries. Recognition started pouring in from the industry.',
    img: '/images/years-03.png',
  },
  {
    label: 'Year 5',
    title: 'YEAR 5',
    desc: 'Year five brought some serious wins. We landed our first Fortune 500 client, added 35 new teammates, launched our Social Selling Division, and snagged a Top Social Media Marketing Agency award. It was a big year with even BIGGER momentum.',
    img: '/images/years-05.png',
  },
  {
    label: 'Year 7',
    title: 'YEAR 7',
    desc: 'We opened our second office and went global, serving brands across North America, Europe, and Asia-Pacific. Our Influencer Marketing division became one of our fastest-growing services with 100+ brand partnerships.',
    img: '/images/years-07.png',
  },
  {
    label: 'Year 9',
    title: 'YEAR 9',
    desc: 'MAXIMEDIA surpassed $50M in managed ad spend and 300+ active clients. We launched our proprietary analytics dashboard and were named one of the Top 10 Social Agencies in the US by multiple industry publications.',
    img: '/images/years-09.png',
  },
  {
    label: 'Year 11',
    title: 'YEAR 11',
    desc: 'Today, we\'re 500+ brands strong with offices across the country. We continue to push the boundaries of what social media marketing can achieve — and we\'re just getting started. The best is yet to come.',
    img: '/images/years-11.png',
  },
]

export default function CompanyTimeline() {
  const [active, setActive] = useState(2) // Year 5 default — matches screenshot

  const prev = () => setActive(a => Math.max(0, a - 1))
  const next = () => setActive(a => Math.min(MILESTONES.length - 1, a + 1))
  const current = MILESTONES[active]

  return (
    <>
      <style>{`
        .tl-section {
          background: var(--blue);
          padding: clamp(56px,8vw,88px) 0 clamp(60px,8vw,96px);
          position: relative;
          overflow: hidden;
        }

        /* Card row: arrow – card – arrow */
        .tl-row {
          display: flex;
          align-items: center;
          gap: clamp(10px,2vw,20px);
          margin-bottom: clamp(28px,4vw,48px);
        }

        /* White slide card */
        .tl-card {
          flex: 1;
          background: #ffffff;
          border-radius: clamp(16px,2.5vw,22px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          box-shadow: 0 20px 64px rgba(0,0,0,0.22);
          min-height: clamp(260px,32vw,360px);
        }

        /* Left text pane */
        .tl-card-text {
          padding: clamp(28px,4vw,52px) clamp(24px,3.5vw,44px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Right photo pane */
        .tl-card-photo {
          position: relative;
          overflow: hidden;
          border-radius: 0 clamp(16px,2.5vw,22px) clamp(16px,2.5vw,22px) 0;
        }

        /* Yellow nav buttons */
        .tl-btn {
          width: clamp(44px,5.5vw,62px);
          height: clamp(44px,5.5vw,62px);
          min-width: clamp(44px,5.5vw,62px);
          border-radius: clamp(10px,1.5vw,14px);
          background: var(--yellow);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1.1rem,2vw,1.5rem);
          font-weight: 900;
          color: #0c1a4e;
          transition: all 0.18s ease;
          box-shadow: 0 6px 20px rgba(245,197,24,0.45);
          flex-shrink: 0;
        }
        .tl-btn:hover { transform: scale(1.08); box-shadow: 0 10px 28px rgba(245,197,24,0.55); }
        .tl-btn:disabled { opacity: 0.32; cursor: not-allowed; transform: none; }

        /* Pill dots */
        .tl-dots {
          display: flex;
          justify-content: center;
          gap: clamp(6px,1.2vw,12px);
          flex-wrap: wrap;
        }
        .tl-dot {
          padding: clamp(8px,1vw,11px) clamp(14px,2vw,26px);
          border-radius: 100px;
          border: none;
          cursor: pointer;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(0.7rem,1.1vw,0.85rem);
          transition: all 0.18s ease;
          white-space: nowrap;
        }
        .tl-dot-active {
          background: var(--yellow);
          color: #0c1a4e;
          box-shadow: 0 4px 14px rgba(245,197,24,0.45);
        }
        .tl-dot-inactive {
          background: rgba(255,255,255,0.16);
          color: rgba(255,255,255,0.7);
        }
        .tl-dot-inactive:hover {
          background: rgba(255,255,255,0.28);
          color: #fff;
        }

        /* Tablet */
        @media (max-width: 760px) {
          .tl-card {
            grid-template-columns: 1fr;
          }
          .tl-card-photo {
            border-radius: 0 0 clamp(16px,2.5vw,22px) clamp(16px,2.5vw,22px);
            aspect-ratio: 16/9;
            height: auto;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .tl-row { gap: 8px; }
          .tl-btn {
            width: 40px; height: 40px; min-width: 40px;
            font-size: 1rem; border-radius: 10px;
          }
        }
      `}</style>

      <section className="tl-section">
        <div className="container">

          {/* ── Heading ── */}
          <h2 className="font-display font-black uppercase" style={{
            fontSize: 'clamp(2rem,6.5vw,4.2rem)',
            lineHeight: 1.0,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            marginBottom: 'clamp(32px,5vw,52px)',
          }}>
            LOOK HOW FAR WE&apos;VE COME
          </h2>

          {/* ── Card row ── */}
          <div className="tl-row">

            {/* Left arrow */}
            <button className="tl-btn" onClick={prev} disabled={active === 0} aria-label="Previous year">
              ←
            </button>

            {/* Slide card */}
            <div className="tl-card">
              {/* Left: text */}
              <div className="tl-card-text">
                <h3 className="font-display font-black uppercase" style={{
                  fontSize: 'clamp(1.4rem,3vw,2.1rem)',
                  color: 'var(--blue)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.0,
                  marginBottom: 'clamp(14px,2vw,22px)',
                }}>
                  {current.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(0.84rem,1.4vw,0.97rem)',
                  color: 'rgba(12,26,78,0.65)',
                  lineHeight: 1.82,
                }}>
                  {current.desc}
                </p>
              </div>

              {/* Right: real photo */}
              <div className="tl-card-photo">
                <Image
                  src={current.img}
                  alt={current.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right arrow */}
            <button className="tl-btn" onClick={next} disabled={active === MILESTONES.length - 1} aria-label="Next year">
              →
            </button>
          </div>

          {/* ── Pill dots ── */}
          <div className="tl-dots">
            {MILESTONES.map((m, i) => (
              <button
                key={m.label}
                className={`tl-dot ${active === i ? 'tl-dot-active' : 'tl-dot-inactive'}`}
                onClick={() => setActive(i)}
              >
                {m.label}
              </button>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}