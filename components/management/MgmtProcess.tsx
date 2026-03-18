'use client'

import { useState } from 'react'

const STEPS = [
  { step:1, title:'Data-Driven Strategy',              desc:'We rely on data-driven social media strategies to inform every decision. We leave testing and experimentation to our research teams, ensuring that every move is calculated and sound.' },
  { step:2, title:'Strategy Development',              desc:"We start by getting to know your brand, audience, and goals inside and out. Then we build a tailored social strategy designed to grow your presence and drive results." },
  { step:3, title:'Content Creation',                  desc:'From photos and videos to captions and community moments, our in-house creative team produces platform-specific content made to connect, engage, and perform.' },
  { step:4, title:'Publishing & Community Management', desc:'We handle posting, scheduling, and daily engagement — responding to comments, managing DMs, and keeping your audience connected to your brand in real time.' },
  { step:5, title:'Reporting & Optimization',          desc:'Weekly or bi-weekly reporting calls keep you in the loop. We track performance, review insights, and adjust strategies to stay ahead of trends and maximize ROI.' },
]

export default function MgmtProcess() {
  const [active, setActive] = useState(0)
  const prev = () => setActive(a => Math.max(a - 1, 0))
  const next = () => setActive(a => Math.min(a + 1, STEPS.length - 1))
  const s = STEPS[active]

  return (
    <>
      <style>{`
        .mpr-section {
          background: var(--yellow);
          padding: clamp(64px,9vw,100px) 0;
          position: relative;
          overflow: hidden;
        }
        /* dot grid top-right */
        .mpr-dots {
          position: absolute;
          top: 24px; right: 32px;
          display: grid;
          grid-template-columns: repeat(10,8px);
          gap: 6px;
          pointer-events: none;
          opacity: 0.25;
        }
        .mpr-dot { width:5px; height:5px; border-radius:50%; background:#0c1a4e; }

        .mpr-heading {
          font-size: clamp(2.2rem,6vw,4.5rem);
          line-height: 1.05;
          color: #0c1a4e;
          letter-spacing: -0.02em;
          text-align: center;
          margin-bottom: clamp(36px,5vw,56px);
        }

        /* slider row */
        .mpr-slider-row {
          display: flex;
          align-items: center;
          gap: clamp(12px,2vw,24px);
        }

        /* arrow buttons — dark square */
        .mpr-arrow {
          width: clamp(48px,6vw,64px);
          height: clamp(48px,6vw,64px);
          border-radius: 12px;
          background: #0c1a4e;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1rem,1.8vw,1.3rem);
          font-weight: 900;
          color: var(--yellow);
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .mpr-arrow:hover:not(:disabled) { background: var(--blue); transform: scale(1.05); }
        .mpr-arrow:disabled { opacity: 0.35; cursor: default; }

        /* white content card */
        .mpr-card {
          flex: 1;
          background: #ffffff;
          border-radius: clamp(16px,2.5vw,24px);
          padding: clamp(28px,4vw,48px) clamp(28px,4vw,52px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.12);
          min-height: clamp(180px,22vw,240px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        /* yellow step pill */
        .mpr-pill {
          display: inline-flex;
          align-items: center;
          background: var(--yellow);
          color: #0c1a4e;
          font-weight: 900;
          font-size: clamp(0.72rem,1.2vw,0.82rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 100px;
          margin-bottom: clamp(14px,2vw,20px);
          width: fit-content;
          border: 2px solid rgba(12,26,78,0.15);
        }

        /* yellow italic step title */
        .mpr-title {
          font-size: clamp(1.2rem,2.8vw,2rem);
          line-height: 1.1;
          color: var(--yellow);
          font-style: italic;
          letter-spacing: -0.01em;
          margin-bottom: clamp(12px,2vw,18px);
        }

        .mpr-desc {
          font-size: clamp(0.88rem,1.5vw,1.02rem);
          color: rgba(12,26,78,0.72);
          line-height: 1.8;
        }

        /* dot indicators */
        .mpr-dots-nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: clamp(24px,3.5vw,36px);
        }
        .mpr-dot-nav {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: rgba(12,26,78,0.25);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.2s;
        }
        .mpr-dot-nav-active {
          background: #0c1a4e;
          width: 28px;
          border-radius: 5px;
        }

        @media (max-width: 540px) {
          .mpr-arrow { width: 40px; height: 40px; border-radius: 8px; font-size: 0.9rem; }
        }
      `}</style>

      <section className="mpr-section">
        {/* Dot grid */}
        <div className="mpr-dots">
          {Array.from({ length: 30 }).map((_, i) => <div key={i} className="mpr-dot" />)}
        </div>

        <div className="container">
          {/* Heading */}
          <h2 className="font-display font-black uppercase mpr-heading">
            OUR SOCIAL MEDIA<br />MANAGEMENT PROCESS
          </h2>

          {/* Slider row */}
          <div className="mpr-slider-row">
            {/* Prev */}
            <button className="mpr-arrow" onClick={prev} disabled={active === 0} aria-label="Previous step">
              ←
            </button>

            {/* Card */}
            <div className="mpr-card" key={active}>
              <div className="mpr-pill">STEP {s.step}</div>
              <h3 className="font-display font-black uppercase mpr-title">{s.title}</h3>
              <p className="mpr-desc">{s.desc}</p>
            </div>

            {/* Next */}
            <button className="mpr-arrow" onClick={next} disabled={active === STEPS.length - 1} aria-label="Next step">
              →
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mpr-dots-nav">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`mpr-dot-nav${i === active ? ' mpr-dot-nav-active' : ''}`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}