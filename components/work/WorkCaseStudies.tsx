'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/data'

const BUSINESS_TYPES = ['All Types of Businesses', 'B2B', 'B2C', 'B2C & B2B']
const INDUSTRIES = ['All Industries', 'App / Mindfulness', 'Automotive', 'Communication', 'Construction', 'Cosmetics', 'Design', 'Electronics', 'Events', 'Finance', 'Food & Beverage', 'Health & Fitness', 'Home Services', 'IT / Enterprise', 'Lifestyle/Boating', 'Medical', 'Paid Ads Management', 'Platform', 'Retail', 'Sports / Outdoors']
const OBJECTIVES = ['All Objectives', 'Brand Awareness', 'E-Commerce / Product Sales', 'Leads']
const SERVICE_TYPES = ['All Types of Services', 'Community Management + Content', 'Content Only', 'Full Service SMM', 'Influencers', 'Paid Ads + Content', 'Paid Ads Management', 'SEO + Content', 'Social Selling']

const VISIBLE_COUNT = 6

export default function WorkCaseStudies() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? CASE_STUDIES : CASE_STUDIES.slice(0, VISIBLE_COUNT)

  return (
    <>
      <style>{`
        /* ── Filter ── */
        .wcs-filter {
          background: #ffffff;
          padding: clamp(32px,4vw,48px) 0 0;
        }
        .wcs-filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 12px;
        }
        .wcs-select {
          padding: 9px 30px 9px 16px;
          border-radius: 100px;
          border: 1.5px solid #b8dff0;
          background: #fff;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(0.68rem,1.1vw,0.78rem);
          letter-spacing: 0.06em;
          color: rgba(12,26,78,0.75);
          cursor: pointer;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%231a56db'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          min-width: clamp(160px,20vw,220px);
          transition: border-color 0.18s;
        }
        .wcs-select:focus { border-color: var(--blue); }

        /* ── Grid ── */
        .wcs-section {
          background: #ffffff;
          padding: clamp(24px,3vw,40px) 0 clamp(56px,8vw,88px);
        }
        .wcs-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: clamp(14px,2vw,22px);
        }
        .wcs-card {
          border: 1.5px solid #b8dff0;
          border-radius: 18px;
          overflow: hidden;
          background: #fff;
          box-shadow: 4px 4px 0 #c9e8f5, 0 4px 16px rgba(26,86,219,0.06);
          transition: transform 0.22s, box-shadow 0.22s;
          text-decoration: none;
          display: block;
        }
        .wcs-card:hover {
          transform: translateY(-5px);
          box-shadow: 4px 8px 0 #b8dff0, 0 14px 36px rgba(26,86,219,0.13);
        }
        .wcs-thumb {
          height: clamp(160px,20vw,200px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(2.8rem,5vw,4rem);
          position: relative;
        }
        .wcs-badge {
          position: absolute;
          top: 12px; left: 12px;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(8,12,24,0.72);
          color: rgba(255,255,255,0.88);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          text-transform: uppercase;
        }
        .wcs-body { padding: clamp(16px,2.5vw,24px); }
        .wcs-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
        .wcs-tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 5px;
          background: #e8f0fe;
          color: var(--blue);
          border: 1px solid #b8d0f8;
        }
        .wcs-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.88rem,1.4vw,1rem);
          color: #0c1a4e;
          margin-bottom: 6px;
        }
        .wcs-desc {
          font-size: clamp(0.78rem,1.1vw,0.86rem);
          color: rgba(12,26,78,0.6);
          line-height: 1.65;
          margin-bottom: 14px;
        }
        .wcs-cta {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.8rem;
          color: var(--blue);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }
        .wcs-load-wrap { text-align: center; margin-top: clamp(28px,4vw,44px); }
        .wcs-load-btn {
          display: inline-flex;
          align-items: center;
          padding: clamp(12px,1.8vw,16px) clamp(28px,4vw,48px);
          border: 2px solid var(--blue);
          border-radius: 10px;
          background: transparent;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.72rem,1.2vw,0.82rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--blue);
          cursor: pointer;
          transition: all 0.18s;
        }
        .wcs-load-btn:hover { background: var(--blue); color: #fff; }

        @media (max-width: 860px) { .wcs-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px) {
          .wcs-grid { grid-template-columns: 1fr; }
          .wcs-select { min-width: 100%; }
          .wcs-card:hover { transform: none; }
        }
      `}</style>

      {/* Filter bar */}
      <div className="wcs-filter">
        <div className="container">
          <div className="wcs-filter-row">
            {[BUSINESS_TYPES, INDUSTRIES, OBJECTIVES, SERVICE_TYPES].map((opts, i) => (
              <select key={i} className="wcs-select" defaultValue={opts[0]}>
                {opts.map(o => <option key={o}>{o}</option>)}
              </select>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="wcs-section">
        <div className="container">
          <div className="wcs-grid">
            {visible.map(cs => (
              <Link key={cs.slug} href={`/work/${cs.slug}`} className="wcs-card">
                <div className="wcs-thumb" style={{ background: `linear-gradient(135deg,${cs.bgFrom},${cs.bgTo})` }}>
                  <span className="wcs-badge">{cs.client.toUpperCase()}</span>
                  <span>{cs.emoji}</span>
                </div>
                <div className="wcs-body">
                  <div className="wcs-tags">
                    {cs.tags.map(tag => <span key={tag} className="wcs-tag">{tag}</span>)}
                  </div>
                  <p className="wcs-title">{cs.client}</p>
                  <p className="wcs-desc">{cs.description}</p>
                  <span className="wcs-cta">Read Case Study →</span>
                </div>
              </Link>
            ))}
          </div>

          {!showAll && CASE_STUDIES.length > VISIBLE_COUNT && (
            <div className="wcs-load-wrap">
              <button className="wcs-load-btn" onClick={() => setShowAll(true)}>LOAD MORE</button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}