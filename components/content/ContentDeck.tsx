'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SLIDES = [
  {
    image: '/images/content-deck-1.png',
    alt:   'Content deck example — brand overview',
    caption: 'Brand strategy visualized across every platform',
  },
  {
    image: '/images/content-deck-2.png',
    alt:   'Content deck — post-by-post plan',
    caption: 'Post-by-post content calendar with clear creative direction',
  },
]

export default function ContentDeck() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive(a => (a + 1) % SLIDES.length), [])
  const prev = () => setActive(a => (a - 1 + SLIDES.length) % SLIDES.length)

  // Auto-advance every 3.5s
  useEffect(() => {
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [next])

  return (
    <>
      <style>{`
        .cd-section { background: #ffffff; padding: clamp(72px,9vw,100px) 0; }

        .cd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px,6vw,80px);
          align-items: center;
        }

        /* ── Slider ── */
        .cd-slider-wrap {
          position: relative;
        }
        .cd-slide-card {
          position: relative;
          border-radius: clamp(18px,3vw,26px);
          overflow: hidden;
          aspect-ratio: 4/3;
          background: #e8f4fb;
          border: 2px solid #b8dff0;
          box-shadow: 6px 6px 0 #c9e8f5, 0 12px 40px rgba(26,86,219,0.1);
        }
        .cd-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: rgba(12,26,78,0.75);
          backdrop-filter: blur(8px);
          padding: 12px 18px;
          font-size: clamp(0.72rem,1.2vw,0.82rem);
          color: rgba(255,255,255,0.88);
          font-weight: 600;
          letter-spacing: 0.02em;
          text-align: center;
        }

        /* Arrow buttons — sit on left/right of card */
        .cd-arrows {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          gap: 12px;
        }
        .cd-arrow {
          flex: 1;
          height: clamp(44px,5vw,52px);
          border-radius: 10px;
          background: #0c1a4e;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--yellow);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .cd-arrow:hover { background: var(--blue); transform: translateY(-2px); }

        /* Dot indicators */
        .cd-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 14px;
        }
        .cd-dot {
          height: 8px;
          width: 8px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          padding: 0;
          background: rgba(12,26,78,0.18);
          transition: all 0.25s ease;
        }
        .cd-dot-active {
          background: #0c1a4e;
          width: 24px;
        }

        /* ── Right: text ── */
        .cd-heading { font-size: clamp(1.8rem,4vw,2.8rem); line-height:1.08; color:var(--blue); letter-spacing:-0.01em; margin-bottom:8px; }
        .cd-subheading { font-size:clamp(1.1rem,2vw,1.5rem); color:#0c1a4e; font-style:italic; letter-spacing:-0.01em; margin-bottom:clamp(16px,2.5vw,24px); }
        .cd-body { font-size:clamp(0.9rem,1.5vw,1.02rem); color:rgba(12,26,78,0.7); line-height:1.82; margin-bottom:14px; }
        .cd-quote { font-size:clamp(0.95rem,1.6vw,1.05rem); color:rgba(12,26,78,0.5); font-style:italic; line-height:1.75; border-left:4px solid var(--yellow); padding-left:20px; margin:20px 0; background: #fffdf0; border-radius: 0 10px 10px 0; padding: 14px 18px 14px 20px; }
        .cd-btn { display:inline-flex; align-items:center; padding:14px 32px; background:var(--yellow); color:#0c1a4e; border-radius:10px; font-size:0.82rem; letter-spacing:0.1em; text-decoration:none; border:2px solid #0c1a4e; box-shadow:0 4px 0 #0c1a4e; transition:all 0.15s; margin-top:8px; }
        .cd-btn:hover { transform:translateY(-2px); box-shadow:0 6px 0 #0c1a4e; }

        /* Slide count badge */
        .cd-count {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(12,26,78,0.7);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 100px;
          letter-spacing: 0.06em;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .cd-grid { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>

      <section className="cd-section">
        <div className="container">
          <div className="cd-grid">

            {/* Left: slider */}
            <div className="cd-slider-wrap">
              <div className="cd-slide-card">
                {/* Slide counter */}
                <div className="cd-count">{active + 1} / {SLIDES.length}</div>

                {/* Slide image */}
                <Image
                  key={active}
                  src={SLIDES[active].image}
                  alt={SLIDES[active].alt}
                  fill
                  style={{ objectFit:'cover', objectPosition:'center top', transition:'opacity 0.3s ease' }}
                  sizes="(max-width:768px) 90vw, 45vw"
                />

                {/* Caption overlay */}
                <div className="cd-caption">{SLIDES[active].caption}</div>
              </div>

              {/* Arrows */}
              <div className="cd-arrows">
                <button className="cd-arrow" onClick={prev} aria-label="Previous slide">← PREV</button>
                <button className="cd-arrow" onClick={next} aria-label="Next slide">NEXT →</button>
              </div>

              {/* Dots */}
              <div className="cd-dots">
                {SLIDES.map((_,i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`cd-dot${i === active ? ' cd-dot-active' : ''}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: text */}
            <div>
              <h2 className="font-display font-black uppercase cd-heading">CONTENT DECK</h2>
              <p className="cd-subheading">Your Brand, Visualized.</p>

              <p className="cd-body">
                Our content decks bring your strategy to life — visually, clearly, and creatively. From high-level concepts to post-by-post plans, we map out how your content will look, feel, and perform across every platform.
              </p>
              <p className="cd-body">
                Whether you&apos;re pitching to stakeholders or getting internal teams aligned, this deck makes it easy to say:
              </p>

              <div className="cd-quote">
                &ldquo;Yep, that&apos;s the vibe.&rdquo;
              </div>

              <p className="cd-body">
                Every deck is custom-built to your brand guidelines, content pillars, and campaign objectives — giving your team a clear, actionable creative roadmap.
              </p>

              <Link href="/contact" className="font-display font-black uppercase cd-btn">
                GET YOUR CONTENT DECK →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}