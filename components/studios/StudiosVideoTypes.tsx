'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const VIDEO_TABS = [
  {
    tab: 'TESTIMONIAL',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
    thumbEmoji: '🗣️',
    thumbBg: 'linear-gradient(135deg,#0c1a4e 0%,#1a56db 60%,#4a90d9 100%)',
  },
  {
    tab: 'PRODUCT DEMO',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
    thumbEmoji: '📦',
    thumbBg: 'linear-gradient(135deg,#1a4e2e 0%,#2d8a50 60%,#5abc7a 100%)',
  },
  {
    tab: 'HOW TO',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
    thumbEmoji: '📋',
    thumbBg: 'linear-gradient(135deg,#4e1a0c 0%,#c45c1a 60%,#f0954a 100%)',
  },
  {
    tab: 'CREATOR VIDEOS',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
    thumbEmoji: '🌟',
    thumbBg: 'linear-gradient(135deg,#2a0c4e 0%,#6a1adb 60%,#a06af0 100%)',
  },
]

const PHOTO_CARDS = [
  {
    title: 'ECOMMERCE',
    desc: 'High-quality images that accurately represent the product and highlight its features with a neutral background.',
    img: '/images/about-hero-main.png',
    imgPos: 'center top',
  },
  {
    title: 'STUDIO',
    desc: 'Your product brought to life through lighting, props, background, and composition.',
    img: '/images/about-story.png',
    imgPos: 'center',
  },
  {
    title: 'LIFESTYLE',
    desc: 'Capture the product experience through candid moments and everyday settings. Models & Set included.',
    img: '/images/studios-phone.png',
    imgPos: 'center top',
  },
]

export default function StudiosVideoTypes() {
  const [activeTab, setActiveTab] = useState(0)
  const [playing, setPlaying]   = useState(false)

  const current = VIDEO_TABS[activeTab]

  const handleTabChange = (i: number) => {
    setActiveTab(i)
    setPlaying(false)
  }

  return (
    <>
      <style>{`
        .svt-section {
          position: relative;
          overflow: hidden;
        }
        /* Blue top half */
        .svt-blue {
          background: #ffffff;
          padding: clamp(56px,8vw,88px) 0 0;
        }
        /* White bottom half — cards overlap the seam */
        .svt-white {
          background: #ffffff;
          padding: 0 0 clamp(64px,9vw,104px);
          margin-top: clamp(100px,9vw,60px);
        }

        /* ── Tab pills ── */
        .svt-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: clamp(28px,4vw,44px);
        }
        .svt-tab {
          padding: clamp(7px,1vw,10px) clamp(14px,2vw,22px);
          border-radius: 100px;
          border: 2px solid rgba(8, 27, 206, 0.5);
          background: transparent;
          cursor: pointer;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.65rem,1vw,0.75rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(7, 61, 210, 0.7);
          transition: all 0.18s;
          white-space: nowrap;
        }
        .svt-tab-active {
          background: rgba(7, 61, 210, 0.7);
          border-color: var(--blue)
          color: #ffffff;
        }
        .svt-tab:hover:not(.svt-tab-active) {
          background: rgba(16, 22, 222, 0.15);
          color: #ffffff;
        }

        /* ── Phone mockup (landscape) ── */
        .svt-phone-wrap {
          position: relative;
          margin: 0 auto;
          width: 100%;
          max-width: clamp(240px,50vw,480px);
        }
        .svt-btn-l1 { position:absolute; left:clamp(-10px,-1.8vw,-6px); top:22%; width:clamp(4px,0.6vw,5px); height:clamp(26px,3.5vw,38px); background:#1a1a2e; border-radius:2px 0 0 2px; z-index:2; }
        .svt-btn-l2 { position:absolute; left:clamp(-10px,-1.8vw,-6px); top:40%; width:clamp(4px,0.6vw,5px); height:clamp(26px,3.5vw,38px); background:#1a1a2e; border-radius:2px 0 0 2px; z-index:2; }
        .svt-btn-r  { position:absolute; right:clamp(-10px,-1.8vw,-6px); top:30%; width:clamp(4px,0.6vw,5px); height:clamp(40px,5.5vw,52px); background:#1a1a2e; border-radius:0 2px 2px 0; z-index:2; }
        .svt-phone-outer {
          border: clamp(8px,1.4vw,14px) solid #1a1a2e;
          border-radius: clamp(22px,3.5vw,38px);
          background: #1a1a2e;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 28px 72px rgba(0,0,0,0.38);
        }
        .svt-camera {
          position: absolute;
          top: clamp(6px,1vw,9px);
          left: 50%;
          transform: translateX(-50%);
          width: clamp(6px,0.9vw,9px);
          height: clamp(6px,0.9vw,9px);
          border-radius: 50%;
          background: #2a2a3e;
          z-index: 3;
        }
        .svt-screen {
          aspect-ratio: 16/9;
          position: relative;
          overflow: hidden;
          border-radius: clamp(14px,2.5vw,26px);
          background: #111;
          cursor: pointer;
        }
        .svt-thumb {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s;
        }
        .svt-thumb-label {
          position: absolute;
          bottom: clamp(10px,1.5vw,16px);
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.6rem,1vw,0.76rem);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(5, 62, 176, 0.55);
          white-space: nowrap;
        }
        .svt-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }
        .svt-play-btn {
          width: clamp(52px,8vw,80px);
          height: clamp(52px,8vw,80px);
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
          transition: transform 0.2s, background 0.2s;
        }
        .svt-play-btn:hover { transform: scale(1.1); background: #fff; }
        .svt-play-triangle {
          width: 0; height: 0;
          border-top: clamp(10px,1.6vw,16px) solid transparent;
          border-bottom: clamp(10px,1.6vw,16px) solid transparent;
          border-left: clamp(16px,2.5vw,24px) solid var(--blue);
          margin-left: clamp(3px,0.5vw,5px);
        }
        .svt-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ── 3 photo cards — overlap blue/white seam ── */
        .svt-cards-wrap {
          margin-top: clamp(-60px,-9vw,-40px);
          padding: 0 0 0;
          position: relative;
          z-index: 2;
        }
        .svt-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px,2vw,22px);
        }
        .svt-card {
          background: #ffffff;
          border: 1.5px solid #b8dff0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 4px 4px 0 #c9e8f5, 0 4px 16px rgba(26,86,219,0.07);
          transition: transform 0.22s, box-shadow 0.22s;
        }
        .svt-card:hover {
          transform: translateY(-5px);
          box-shadow: 4px 8px 0 #b8dff0, 0 12px 32px rgba(26,86,219,0.13);
        }
        .svt-card-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
        }
        .svt-card-img-placeholder {
          width: 100%;
          aspect-ratio: 4/3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(2.5rem,5vw,4rem);
        }
        .svt-card-body {
          padding: clamp(16px,2.5vw,24px);
        }
        .svt-card-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          font-size: clamp(1rem,2vw,1.25rem);
          color: var(--blue);
          margin-bottom: clamp(8px,1.2vw,12px);
          letter-spacing: 0.01em;
        }
        .svt-card-desc {
          font-size: clamp(0.8rem,1.2vw,0.9rem);
          color: rgba(12,26,78,0.65);
          line-height: 1.75;
          margin-bottom: clamp(14px,2vw,20px);
        }
        .svt-card-btn {
          display: inline-flex;
          align-items: center;
          padding: clamp(10px,1.4vw,13px) clamp(16px,2.2vw,24px);
          background: var(--yellow);
          color: #0c1a4e;
          border-radius: 7px;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.68rem,1.1vw,0.78rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid #0c1a4e;
          box-shadow: 0 3px 0 #0c1a4e;
          transition: all 0.15s;
          white-space: nowrap;
        }
        .svt-card-btn:hover { transform: translateY(-1px); box-shadow: 0 5px 0 #0c1a4e; }

        @media (max-width: 768px) {
          .svt-cards-grid { grid-template-columns: 1fr; gap: 14px; max-width: 400px; margin: 0 auto; }
          .svt-cards-wrap { margin-top: 32px; }
          .svt-card:hover { transform: none; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .svt-cards-grid { grid-template-columns: repeat(3,1fr); max-width: 100%; }
        }
        @media (max-width: 480px) {
          .svt-tabs { gap: 6px; }
          .svt-tab { padding: 6px 12px; font-size: 0.62rem; }
        }
      `}</style>

      {/* ── Blue top half ── */}
      <div className="svt-blue">
        <div className="container">

          {/* Heading */}
          <h2
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(2rem,5.5vw,3.8rem)',
              lineHeight: 1.0,
              color: '#0505b0',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: 'clamp(22px,3.5vw,36px)',
            }}
          >
            LET&apos;S TALK VIDEO
          </h2>

          {/* Tab pills */}
          <div className="svt-tabs">
            {VIDEO_TABS.map((v, i) => (
              <button
                key={v.tab}
                className={`svt-tab ${activeTab === i ? 'svt-tab-active' : ''}`}
                onClick={() => handleTabChange(i)}
              >
                {v.tab}
              </button>
            ))}
          </div>

          {/* Landscape phone mockup */}
          <div className="svt-phone-wrap">
            <div className="svt-btn-l1" />
            <div className="svt-btn-l2" />
            <div className="svt-btn-r" />
            <div className="svt-phone-outer">
              <div className="svt-camera" />
              <div className="svt-screen" onClick={() => !playing && setPlaying(true)}>
                {playing ? (
                  <iframe
                    className="svt-iframe"
                    src={current.videoUrl}
                    title={current.tab}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <div className="svt-thumb" style={{ background: current.thumbBg }}>
                      <span style={{ fontSize: 'clamp(3rem,6vw,5rem)', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>
                        {current.thumbEmoji}
                      </span>
                      <span className="svt-thumb-label">MAXIMEDIA STUDIOS — {current.tab}</span>
                    </div>
                    <div className="svt-play-overlay">
                      <button className="svt-play-btn" aria-label="Play video">
                        <div className="svt-play-triangle" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── White bottom half ── */}
      <div className="svt-white">
        <div className="container">
          <div className="svt-cards-wrap">
            <div className="svt-cards-grid">
              {PHOTO_CARDS.map(card => (
                <div key={card.title} className="svt-card">
                  {/* Image area */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      style={{ objectFit: 'cover', objectPosition: card.imgPos }}
                      sizes="(max-width: 768px) 90vw, 33vw"
                    />
                  </div>

                  {/* Body */}
                  <div className="svt-card-body">
                    <p className="svt-card-title">{card.title}</p>
                    <p className="svt-card-desc">{card.desc}</p>
                    <Link href="/contact" className="svt-card-btn">GET STARTED</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}