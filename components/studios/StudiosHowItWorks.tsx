'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const STEPS = [
  {
    step: 'STEP 1',
    title: 'SELECT A PACKAGE',
    desc: "We've got flexible options to choose from, with a full selection of add-ons available to meet your needs.",
  },
  {
    step: 'STEP 2',
    title: 'ADD A SHOOT',
    desc: 'Ship us your product and let us create some magic for your feed!',
  },
  {
    step: 'STEP 3',
    title: 'PICK YOUR JAW UP OFF THE FLOOR',
    desc: 'Post that new content. Warning: Results sure to wow. So be prepared!',
  },
]

// Repeat steps for infinite illusion: [...STEPS, ...STEPS, ...STEPS]
const LOOPED = [...STEPS, ...STEPS, ...STEPS]
const ORIGIN = STEPS.length // start index in the middle copy

export default function StudiosHowItWorks() {
  const [current, setCurrent] = useState(ORIGIN)
  const [transitioning, setTransitioning] = useState(true)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (idx: number, animate = true) => {
    setTransitioning(animate)
    setCurrent(idx)
  }

  // Jump silently when hitting the cloned edges
  useEffect(() => {
    if (current <= 0) {
      setTimeout(() => goTo(STEPS.length, false), 400)
    } else if (current >= LOOPED.length - 1) {
      setTimeout(() => goTo(STEPS.length - 1, false), 400)
    }
  }, [current])

  // Auto advance every 2.8s
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent(c => c + 1)
      setTransitioning(true)
    }, 2800)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [])

  const restart = () => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      setCurrent(c => c + 1)
      setTransitioning(true)
    }, 2800)
  }

  const prev = () => { goTo(current - 1); restart() }
  const next = () => { goTo(current + 1); restart() }

  // active dot = current mod STEPS.length
  const activeDot = ((current % STEPS.length) + STEPS.length) % STEPS.length

  return (
    <>
      <style>{`
        .hiw-section {
          background: #c9e8f5;
          padding: clamp(64px,9vw,104px) 0 clamp(56px,8vw,88px);
          overflow: hidden;
          position: relative;
        }

        /* ── Carousel track ── */
        .hiw-track-wrap {
          overflow: hidden;
          margin: clamp(32px,5vw,52px) 0 0;
          /* allow cards to peek from edges */
          padding: 0 clamp(16px,5vw,80px);
        }
        .hiw-track {
          display: flex;
          gap: clamp(2px,2vw,2px);
          will-change: transform;
        }

        /* ── Individual card ── */
        .hiw-card {
          flex: 0 0 clamp(260px,36vw,420px);
          border-radius: 18px;
          padding: clamp(24px,3.5vw,40px) clamp(22px,3vw,36px);
          min-height: clamp(240px,30vw,320px);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 14px;
          transition: background 0.35s, box-shadow 0.35s, transform 0.35s;
          user-select: none;
        }
        .hiw-card-inactive {
          background: #ffffff;
          box-shadow: 4px 4px 0 #b8dff0, 0 4px 20px rgba(26,86,219,0.07);
          transform: scale(0.96);
        }
        .hiw-card-active {
          background: var(--blue);
          box-shadow: 0 16px 48px rgba(26,86,219,0.35);
          transform: scale(1);
        }

        /* Step pill badge */
        .hiw-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 16px;
          border-radius: 100px;
          background: var(--yellow);
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.68rem,1.1vw,0.78rem);
          letter-spacing: 0.08em;
          color: #0c1a4e;
          width: fit-content;
        }

        /* Card title */
        .hiw-card-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          font-size: clamp(1.1rem,2.5vw,1.5rem);
          line-height: 1.1;
          letter-spacing: -0.01em;
        }
        .hiw-card-active  .hiw-card-title { color: #ffffff; }
        .hiw-card-inactive .hiw-card-title { color: var(--blue); }

        /* Card desc */
        .hiw-card-desc {
          font-size: clamp(0.84rem,1.4vw,0.97rem);
          line-height: 1.75;
        }
        .hiw-card-active  .hiw-card-desc { color: rgba(255,255,255,0.82); font-weight: 600; }
        .hiw-card-inactive .hiw-card-desc { color: rgba(12,26,78,0.65); }

        /* ── Dots + arrows row ── */
        .hiw-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: clamp(24px,4vw,36px);
        }
        .hiw-dot {
          width: clamp(10px,1.5vw,14px);
          height: clamp(10px,1.5vw,14px);
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          background: rgba(26,86,219,0.22);
        }
        .hiw-dot-active {
          background: var(--blue);
          transform: scale(1.25);
        }
        .hiw-arrow {
          width: clamp(34px,4vw,44px);
          height: clamp(34px,4vw,44px);
          border-radius: 50%;
          border: 2px solid rgba(26,86,219,0.3);
          background: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 900;
          color: var(--blue);
          transition: all 0.18s;
        }
        .hiw-arrow:hover { background: var(--blue); color: #fff; border-color: var(--blue); }

        /* CTA */
        .hiw-cta { text-align: center; margin-top: clamp(36px,5vw,52px); }
        @media (max-width: 480px) {
          .hiw-cta a { width: 100%; justify-content: center; }
          .hiw-track-wrap { padding: 0 clamp(12px,4vw,24px); }
        }
      `}</style>

      <section className="hiw-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Heading */}
          <div style={{ textAlign: 'center' }}>
            <h2
              className="font-display font-black uppercase"
              style={{
                fontSize: 'clamp(2.2rem,6vw,4rem)',
                lineHeight: 1.0,
                color: 'var(--blue)',
                letterSpacing: '-0.02em',
                marginBottom: 'clamp(14px,2vw,22px)',
              }}
            >
              HOW IT WORKS
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.9rem,1.6vw,1.02rem)',
                color: 'rgba(12,26,78,0.62)',
                lineHeight: 1.75,
                maxWidth: '620px',
                margin: '0 auto',
              }}
            >
              Your brand deserves the best in-studio and on-site product and lifestyle photography
              available in the industry and we deliver with thumb-stopping quality.
            </p>
          </div>

        </div>

        <div className="hiw-track-wrap">
          <div
            className="hiw-track"
            style={{
              transform: `translateX(calc(-${current} * (clamp(260px,36vw,420px) + clamp(14px,2vw,24px)) + 50% - clamp(130px,18vw,210px)))`,
              transition: transitioning ? 'transform 0.45s cubic-bezier(0.4,0,0.2,1)' : 'none',
            }}
          >
            {LOOPED.map((step, i) => {
              const isActive = i === current
              return (
                <div
                  key={i}
                  className={`hiw-card ${isActive ? 'hiw-card-active' : 'hiw-card-inactive'}`}
                  onClick={() => { goTo(i); restart() }}
                >
                  <div className="hiw-pill">{step.step}</div>
                  <p className="hiw-card-title">{step.title}</p>
                  <p className="hiw-card-desc">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Dots + arrows ── */}
        <div className="container">
          <div className="hiw-nav">
            {STEPS.map((_, i) => (
              <button
                key={i}
                className={`hiw-dot ${activeDot === i ? 'hiw-dot-active' : ''}`}
                onClick={() => { goTo(ORIGIN + i - activeDot); restart() }}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="hiw-cta">
            <Link
              href="/contact"
              className="font-display font-black uppercase"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: 'clamp(14px,2vw,18px) clamp(28px,4vw,48px)',
                background: 'var(--blue)', color: '#fff', borderRadius: '10px',
                fontSize: 'clamp(0.75rem,1.4vw,0.85rem)', letterSpacing: '0.1em',
                textDecoration: 'none', boxShadow: '0 8px 28px rgba(26,86,219,0.28)',
              }}
            >
              BOOK MY SHOOT →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}