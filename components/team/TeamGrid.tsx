'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// ── Replace these with your real team photo paths ──
const TEAM_PHOTOS = [
  { src: '/images/team-photo-1.png', alt: 'Team at the office' },
  { src: '/images/team-photo-2.png', alt: 'Team outing' },
  { src: '/images/team-photo-3.png', alt: 'Team celebration' },
  { src: '/images/team-photo-4.png', alt: 'Holiday party' },
  { src: '/images/team-photo-5.png', alt: 'Team adventure' },
  { src: '/images/team-photo-6.png', alt: 'Team event' },
  { src: '/images/team-photo-7.png', alt: 'Team gathering' },
]

export default function TeamGrid() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const SCROLL_AMOUNT = 340

  function checkButtons() {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', checkButtons, { passive: true })
    checkButtons()
    return () => el.removeEventListener('scroll', checkButtons)
  }, [])

  function scroll(dir: 'prev' | 'next') {
    trackRef.current?.scrollBy({ left: dir === 'next' ? SCROLL_AMOUNT : -SCROLL_AMOUNT, behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        .tg-section {
          background: #ffffff;
          padding: clamp(72px,10vw,112px) 0;
          overflow: hidden;
        }

        /* heading */
        .tg-heading-wrap {
          text-align: center;
          padding: 0 clamp(20px,5vw,80px);
          margin-bottom: clamp(40px,6vw,64px);
        }
        .tg-emoji {
          font-size: clamp(2.2rem,5vw,3.2rem);
          display: block;
          margin-bottom: 12px;
        }
        .tg-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(2rem,6vw,4rem);
          color: var(--blue);
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.0;
          margin-bottom: clamp(16px,2.5vw,28px);
        }
        .tg-desc {
          font-size: clamp(0.9rem,1.5vw,1.05rem);
          color: rgba(12,26,78,0.62);
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* slider wrapper */
        .tg-slider-wrap {
          position: relative;
        }

        /* scrollable track — no scrollbar */
        .tg-track {
          display: flex;
          gap: clamp(14px,2vw,22px);
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 16px clamp(20px,6vw,80px) 32px;
          cursor: grab;
          scrollbar-width: none;
        }
        .tg-track::-webkit-scrollbar { display: none; }
        .tg-track:active { cursor: grabbing; }

        /* photo card */
        .tg-card {
          flex: 0 0 clamp(240px,28vw,340px);
          height: clamp(320px,42vw,500px);
          border-radius: clamp(18px,2.5vw,26px);
          overflow: hidden;
          scroll-snap-align: start;
          position: relative;
          background: #c9e8f5;
          border: 2px solid #b8dff0;
          box-shadow: 4px 4px 0 #c9e8f5;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .tg-card:hover { transform: translateY(-6px); box-shadow: 6px 10px 0 #b8dff0; }

        /* arrow buttons */
        .tg-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: clamp(40px,5vw,52px);
          height: clamp(40px,5vw,52px);
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #0c1a4e;
          box-shadow: 0 4px 0 #0c1a4e;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s;
          font-size: 1.1rem;
          font-weight: 900;
          color: #0c1a4e;
        }
        .tg-arrow:hover:not(:disabled) { transform: translateY(calc(-50% - 2px)); box-shadow: 0 6px 0 #0c1a4e; }
        .tg-arrow:disabled { opacity: 0.3; cursor: default; box-shadow: 0 2px 0 #0c1a4e; }
        .tg-arrow-prev { left: clamp(4px,1.5vw,20px); }
        .tg-arrow-next { right: clamp(4px,1.5vw,20px); }

        /* fade edges */
        .tg-fade-left, .tg-fade-right {
          position: absolute;
          top: 0; bottom: 0;
          width: clamp(32px,6vw,80px);
          pointer-events: none;
          z-index: 5;
        }
        .tg-fade-left  { left: 0;  background: linear-gradient(to right, #fff, transparent); }
        .tg-fade-right { right: 0; background: linear-gradient(to left,  #fff, transparent); }

        @media (max-width: 640px) {
          .tg-arrow { display: none; }
          .tg-fade-left, .tg-fade-right { width: 20px; }
        }
      `}</style>

      <section className="tg-section">
        {/* Heading */}
        <div className="tg-heading-wrap">
          <span className="tg-emoji">🙌</span>
          <h2 className="tg-title">A TEAM YOU CAN COUNT ON</h2>
          <p className="tg-desc">
            Every team member at MAXIMEDIA is not only experienced in the realm of social media marketing but
            encouraged to bring their creativity, ingenuity and excitement to give your campaigns the human touch they
            need to drive greater ROI in less time. Where other agencies bring promises, our team brings results you can count on.
          </p>
        </div>

        {/* Slider */}
        <div className="tg-slider-wrap">
          {/* Fade edges */}
          <div className="tg-fade-left" />
          <div className="tg-fade-right" />

          {/* Prev / Next arrows */}
          <button className="tg-arrow tg-arrow-prev" onClick={() => scroll('prev')} disabled={!canPrev} aria-label="Previous">
            ←
          </button>
          <button className="tg-arrow tg-arrow-next" onClick={() => scroll('next')} disabled={!canNext} aria-label="Next">
            →
          </button>

          {/* Scrollable photo strip */}
          <div className="tg-track" ref={trackRef}>
            {TEAM_PHOTOS.map((photo, i) => (
              <div key={i} className="tg-card">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width:640px) 70vw, 30vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}