import Link from 'next/link'
import { SITE, PARTNERS, SERVICES } from '@/lib/data'
import FooterNewsletter from '@/components/ui/FooterNewsletter'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container pt-20">

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 pb-16">

          {/* Brand col */}
          <div>
            <Link
              href="/"
              className="font-display text-[1.45rem] font-extrabold tracking-[-0.04em] inline-block mb-4"
            >
              MAXI<span style={{ color: 'var(--green)' }}>MEDIA</span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)', maxWidth: 300 }}
            >
              MAXIMEDIA is a results-driven social media marketing agency dedicated to growing
              your brand through strategy, creativity, and data-backed decisions.
            </p>
            <div
              className="text-[0.82rem] leading-[1.9]"
              style={{ color: 'var(--text-muted)' }}
            >
              <span
                className="block font-semibold mb-1"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                📍 MAXIMEDIA: THE Social Media Agency
              </span>
              {SITE.address}<br />
              {SITE.city}<br />
              {SITE.phone}
            </div>
          </div>

          {/* Agency links */}
          <div>
            <h4
              className="font-display text-[0.78rem] font-bold tracking-[0.1em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Agency
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Studios', href: '/studios' },
                { label: 'Work', href: '/work' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-150 hover:text-[var(--green)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4
              className="font-display text-[0.78rem] font-bold tracking-[0.1em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.title}>
                  <Link
                    href={s.href}
                    className="text-[0.84rem] transition-colors duration-150 hover:text-[var(--green)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {s.title
                      .replace(' & Consulting', '')
                      .replace(' Programs', '')
                      .replace(' Campaigns', '')
                      .replace(' & Community', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-display text-[0.78rem] font-bold tracking-[0.1em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Stay Updated
            </h4>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Join 10,000+ Marketers Getting Ahead on Social. Subscribe now.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        <div
          className="py-5 flex flex-wrap gap-2.5"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {PARTNERS.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[8px] text-[0.7rem] font-semibold cursor-default transition-all duration-200 hover:opacity-70"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              {p.icon} {p.label}
            </span>
          ))}
        </div>

        <div
          className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3.5"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-[0.8rem]" style={{ color: 'var(--text-muted)' }}>
            Copyright © 2025 MAXIMEDIA LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            {[
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Sitemap', href: '/sitemap.xml' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.8rem] transition-colors duration-150 hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
