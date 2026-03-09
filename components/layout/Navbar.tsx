'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/data'

function MobileNavItem({
  link,
  onClose,
}: {
  link: (typeof NAV_LINKS)[number]
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)

  if (!link.children) {
    return (
      <Link
        href={link.href}
        onClick={onClose}
        style={{
          display: 'block',
          padding: '13px 16px',
          borderRadius: '10px',
          fontSize: '0.95rem',
          fontWeight: 700,
          color: 'var(--blue)',
          textDecoration: 'none',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(26,86,219,0.06)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <div>
      {/* Accordion toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '13px 16px',
          borderRadius: '10px',
          background: open ? 'rgba(26,86,219,0.07)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.95rem',
          fontWeight: 700,
          color: 'var(--blue)',
          fontFamily: 'inherit',
          transition: 'background 0.15s',
        }}
      >
        {link.label}
        <span style={{
          fontSize: '0.65rem',
          opacity: 0.55,
          display: 'inline-block',
          transition: 'transform 0.22s ease',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>▾</span>
      </button>

      {/* Children */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '600px' : '0',
        transition: 'max-height 0.28s ease',
      }}>
        <div style={{ padding: '4px 8px 8px 28px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {link.children.map(child => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              style={{
                display: 'block',
                padding: '9px 12px',
                borderRadius: '8px',
                fontSize: '0.86rem',
                fontWeight: 600,
                color: 'rgba(12,26,78,0.65)',
                textDecoration: 'none',
                borderLeft: '2px solid rgba(26,86,219,0.18)',
                paddingLeft: '14px',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--blue)'
                e.currentTarget.style.borderLeftColor = 'var(--blue)'
                e.currentTarget.style.background = 'rgba(26,86,219,0.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(12,26,78,0.65)'
                e.currentTarget.style.borderLeftColor = 'rgba(26,86,219,0.18)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Main Navbar ─────────────────────────────────── */
export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on desktop resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed inset-x-0 top-0 z-50 h-[74px] transition-all duration-300"
        style={{
          background: '#ffffff',
          borderBottom: scrolled
            ? '2px solid rgba(26,86,219,0.15)'
            : '1px solid rgba(26,86,219,0.08)',
          boxShadow: scrolled ? '0 4px 24px rgba(26,86,219,0.08)' : 'none',
        }}
      >
        <div className="container h-full flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="font-display font-black tracking-[-0.04em] whitespace-nowrap flex-shrink-0"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.55rem)', color: 'var(--blue)', textDecoration: 'none', lineHeight: 1 }}
          >
            MAXI<span style={{ color: 'var(--yellow)' }}>MEDIA</span>
          </Link>

          {/* ── Desktop Links ── */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {NAV_LINKS.map(link => (
              <li key={link.label} className="nav-item relative">
                {link.children ? (
                  <>
                    <button className="nav-link">
                      {link.label}
                      <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>▾</span>
                    </button>
                    <div className="nav-dropdown">
                      {link.children.map(child => (
                        <Link key={child.href} href={child.href} className="nav-dropdown-link">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={link.href} className="nav-link">{link.label}</Link>
                )}
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <Link href="/contact" className="nav-link nav-cta hidden lg:flex flex-shrink-0">
            Free Proposal
          </Link>

          {/* ── Hamburger (mobile / tablet) ── */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 flex-shrink-0"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '22px',
                height: '2.5px',
                borderRadius: '2px',
                background: 'var(--blue)',
                transition: 'all 0.25s ease',
                transformOrigin: 'center',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translate(3px, 7px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(3px, -7px)'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>

        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 998,
          background: 'rgba(12,26,78,0.35)',
          backdropFilter: 'blur(2px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* ── Slide-in Panel ── */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        width: 'min(300px, 85vw)',
        background: '#ffffff',
        boxShadow: '-8px 0 48px rgba(26,86,219,0.18)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overscrollBehavior: 'contain',
      }}>

        {/* Panel header */}
        <div style={{
          height: '74px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          borderBottom: '1px solid rgba(26,86,219,0.1)',
          flexShrink: 0,
        }}>
          <Link
            href="/"
            className="font-display font-black tracking-[-0.04em]"
            style={{ fontSize: '1.3rem', color: 'var(--blue)', textDecoration: 'none', lineHeight: 1 }}
            onClick={() => setMobileOpen(false)}
          >
            MAXI<span style={{ color: 'var(--yellow)' }}>MEDIA</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'rgba(26,86,219,0.07)',
              border: 'none',
              cursor: 'pointer',
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              color: 'var(--blue)',
              lineHeight: 1,
            }}
          >✕</button>
        </div>

        {/* Nav links */}
        <div style={{ padding: '10px 10px', flex: 1 }}>
          {NAV_LINKS.map(link => (
            <MobileNavItem key={link.label} link={link} onClose={() => setMobileOpen(false)} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ padding: '14px 16px 32px', borderTop: '1px solid rgba(26,86,219,0.08)' }}>
          <Link
            href="/contact"
            className="font-display font-black uppercase"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px',
              background: 'var(--yellow)',
              color: '#0c1a4e',
              borderRadius: '10px',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(245,197,24,0.35)',
            }}
          >
            FREE PROPOSAL
          </Link>
        </div>
      </div>
    </>
  )
}