'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { BRANDS } from '@/lib/data'

export default function BrandsSection() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const total = BRANDS.length

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, 2800)
  }, [total])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const prev = () => {
    setCurrent((c) => (c - 1 + total) % total)
    resetTimer()
  }
  const next = () => {
    setCurrent((c) => (c + 1) % total)
    resetTimer()
  }

  // Returns the brand at offset from current (wrapping)
  const getBrand = (offset: number) => BRANDS[(current + offset + total) % total]

  return (
    <section style={{ background: '#ffffff', padding: '90px 0 100px', overflow: 'hidden' }}>

      {/* ── Heading ──────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2
          className="font-display font-black uppercase"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            display: 'inline',
          }}
        >
          <span style={{ color: 'var(--blue)' }}>TRUSTED BY </span>
          <span
            style={{
              color: 'var(--yellow)',
              textDecoration: 'underline',
              textDecorationColor: 'var(--yellow)',
              textDecorationThickness: '4px',
              textUnderlineOffset: '6px',
            }}
          >
            LEADING BRANDS
          </span>
        </h2>
      </div>

      {/* ── Slider ───────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
          position: 'relative',
          padding: '0 20px',
        }}
      >
        {/* ← Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous brand"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: 'var(--yellow)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            fontWeight: 900,
            color: '#0c1a4e',
            flexShrink: 0,
            boxShadow: '0 4px 16px rgba(245,197,24,0.35)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            zIndex: 10,
            marginRight: '24px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          ←
        </button>

        {/* Cards row — left, center (big), right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flex: 1,
            maxWidth: '900px',
            justifyContent: 'center',
          }}
        >
          {/* Left card (small) */}
          <BrandCard label={getBrand(-1)} size="small" />

          {/* Center card (large + highlighted) */}
          <BrandCard label={getBrand(0)} size="large" />

          {/* Right card (small) */}
          <BrandCard label={getBrand(1)} size="small" />
        </div>

        {/* → Next arrow */}
        <button
          onClick={next}
          aria-label="Next brand"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: 'var(--yellow)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            fontWeight: 900,
            color: '#0c1a4e',
            flexShrink: 0,
            boxShadow: '0 4px 16px rgba(245,197,24,0.35)',
            transition: 'transform 0.15s ease',
            zIndex: 10,
            marginLeft: '24px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          →
        </button>
      </div>

      {/* ── Dot indicators ───────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '36px' }}>
        {BRANDS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer() }}
            aria-label={`Go to brand ${i + 1}`}
            style={{
              width:      i === current ? '24px' : '8px',
              height:     '8px',
              borderRadius: '100px',
              background: i === current ? 'var(--blue)' : 'rgba(26,86,219,0.2)',
              border:     'none',
              cursor:     'pointer',
              padding:    0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

    </section>
  )
}

/* ── Sub-component ───────────────────────────────────── */
function BrandCard({ label, size }: { label: string; size: 'small' | 'large' }) {
  const isLarge = size === 'large'
  return (
    <div
      style={{
        flex:          isLarge ? '0 0 340px' : '0 0 220px',
        height:        isLarge ? '130px' : '90px',
        borderRadius:  '16px',
        background:    '#ffffff',
        border:        isLarge
          ? '2px solid rgba(26,86,219,0.35)'
          : '1.5px solid rgba(26,86,219,0.12)',
        display:       'flex',
        alignItems:    'center',
        justifyContent:'center',
        boxShadow:     isLarge
          ? '0 8px 40px rgba(26,86,219,0.12)'
          : '0 2px 12px rgba(26,86,219,0.06)',
        transform:     isLarge ? 'scale(1)' : 'scale(0.92)',
        transition:    'all 0.35s ease',
        opacity:       isLarge ? 1 : 0.7,
      }}
    >
      <span
        className="font-display font-black tracking-wider uppercase"
        style={{
          fontSize:    isLarge ? '1.3rem' : '0.82rem',
          color:       isLarge ? 'var(--blue)' : 'rgba(26,86,219,0.4)',
          letterSpacing: '0.06em',
          textAlign:   'center',
          padding:     '0 16px',
          lineHeight:  1.3,
        }}
      >
        {label}
      </span>
    </div>
  )
}