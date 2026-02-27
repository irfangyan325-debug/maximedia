import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import ContactForm from '@/components/ui/ContactForm'
import {
  STATS, CLIENT_LOGOS, PAIN_POINTS, SERVICES, CASE_STUDIES,
  TESTIMONIALS, PROCESS_STEPS, BLOG_POSTS, BRANDS,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'MAXIMEDIA: #1 Social Media Management Company & Marketing Agency',
}

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: 'var(--nav-h)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 65% at 72% 42%, rgba(4,211,97,.09) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 15% 75%, rgba(4,211,97,.05) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] grid-texture" />

        <div className="container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center py-20">

            {/* Left — copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-[0.78rem] font-bold tracking-[0.06em] uppercase"
                style={{
                  background: 'rgba(4,211,97,0.08)',
                  border: '1px solid rgba(4,211,97,0.3)',
                  color: 'var(--green)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full pulse-dot"
                  style={{ background: 'var(--green)' }}
                />
                #1 Social Media Marketing Agency
              </div>

              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>
                Your{' '}
                <span className="green-text">Results-Driven</span>{' '}
                Social Marketing Agency for Measurable Growth
              </h1>

              <p
                className="mt-5 mb-9 leading-[1.75]"
                style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: 500 }}
              >
                <strong className="text-white font-bold">Stop Guessing, Start Growing:</strong>{' '}
                Partner with a Social Marketing Agency Focused on Your Bottom Line
              </p>

              <div className="flex flex-wrap gap-3.5 mb-14">
                <Link href="#contact" className="btn btn--primary">
                  Let&apos;s Drive Growth Together <span>→</span>
                </Link>
                <Link href="/work" className="btn btn--outline">
                  See Our Work
                </Link>
              </div>

              {/* Stats */}
              <div
                className="flex flex-wrap gap-9 pt-9"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div
                      className="font-display font-extrabold tracking-tight mb-1 green-text"
                      style={{ fontSize: '1.7rem' }}
                    >
                      {s.number}
                    </div>
                    <div
                      className="text-[0.78rem] font-medium"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — phone visual */}
            <div className="hidden lg:flex justify-center items-center relative">
              {/* Float card top-left */}
              <div
                className="float-anim absolute top-[14%] -left-14 rounded-[14px] px-[18px] py-3.5 z-10"
                style={{
                  background: 'rgba(15,21,39,0.92)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,.45)',
                }}
              >
                <div
                  className="font-display font-extrabold leading-none mb-1 green-text"
                  style={{ fontSize: '1.35rem' }}
                >
                  +3,700%
                </div>
                <div className="text-[0.68rem]" style={{ color: 'var(--text-secondary)' }}>
                  Engagement Growth
                </div>
                <div
                  className="h-[3px] rounded-full mt-2 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.08)', width: '130px' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ background: 'var(--green)', width: '87%' }}
                  />
                </div>
              </div>

              {/* Phone frame */}
              <div
                className="relative w-[268px] h-[544px] rounded-[44px] overflow-hidden"
                style={{
                  background: 'var(--bg-card)',
                  border: '1.5px solid rgba(255,255,255,.1)',
                  boxShadow:
                    '0 40px 80px rgba(0,0,0,.55), 0 0 0 1px rgba(4,211,97,.08)',
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[90px] h-6 rounded-[20px] z-10"
                  style={{ background: '#080C18' }}
                />
                {/* Screen */}
                <div
                  className="absolute inset-0 flex flex-col gap-2.5 pt-14 px-3.5 pb-3.5"
                  style={{
                    background: 'linear-gradient(160deg, #111a2e, #0a0f1e)',
                  }}
                >
                  {[
                    {
                      name: 'MAXIMEDIA',
                      emoji: '📈',
                      likes: '4.2k',
                      comments: '318',
                      shares: '892',
                      avatarBg: 'linear-gradient(135deg, #04D361, #00c853)',
                    },
                    {
                      name: 'Client Brand',
                      emoji: '🎯',
                      likes: '11k',
                      comments: '721',
                      shares: '2.1k',
                      avatarBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    },
                    {
                      name: 'Brand Story',
                      emoji: '🚀',
                      likes: '8.9k',
                      comments: '445',
                      shares: '1.5k',
                      avatarBg: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                    },
                  ].map((post) => (
                    <div
                      key={post.name}
                      className="rounded-[14px] p-3"
                      style={{
                        background: 'rgba(255,255,255,.05)',
                        border: '1px solid rgba(255,255,255,.06)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2.5">
                        <div
                          className="w-[26px] h-[26px] rounded-full flex-shrink-0"
                          style={{ background: post.avatarBg }}
                        />
                        <span className="text-[0.68rem] font-bold">{post.name}</span>
                        <span
                          className="text-[0.6rem] ml-auto"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          2h
                        </span>
                      </div>
                      <div
                        className="w-full h-[72px] rounded-[10px] flex items-center justify-center text-2xl mb-2"
                        style={{ background: 'rgba(4,211,97,0.12)' }}
                      >
                        {post.emoji}
                      </div>
                      <div className="flex gap-3">
                        {[
                          ['❤️', post.likes],
                          ['💬', post.comments],
                          ['↗', post.shares],
                        ].map(([ico, val]) => (
                          <span
                            key={ico}
                            className="text-[0.6rem]"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            {ico}{' '}
                            <span style={{ color: 'var(--green)', fontWeight: 700 }}>
                              {val}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Float card bottom-right */}
              <div
                className="float-anim-delay absolute bottom-[20%] -right-12 rounded-[14px] px-[18px] py-3.5 z-10"
                style={{
                  background: 'rgba(15,21,39,0.92)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,.45)',
                }}
              >
                <div
                  className="font-display font-extrabold leading-none mb-1 green-text"
                  style={{ fontSize: '1.35rem' }}
                >
                  +1,400%
                </div>
                <div className="text-[0.68rem]" style={{ color: 'var(--text-secondary)' }}>
                  Audience Growth
                </div>
                <div
                  className="h-[3px] rounded-full mt-2 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.08)', width: '130px' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ background: 'var(--green)', width: '72%' }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CLIENT LOGOS MARQUEE
      ══════════════════════════════ */}
      <div
        className="overflow-hidden"
        style={{
          padding: '44px 0',
          background: 'rgba(255,255,255,0.018)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <p
          className="text-center text-[0.72rem] font-semibold tracking-[0.12em] uppercase mb-6"
          style={{ color: 'var(--text-muted)' }}
        >
          Trusted by 500+ leading brands worldwide
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <span
                key={i}
                className="px-8 h-[38px] flex items-center font-display text-[0.82rem] font-bold tracking-[0.05em] whitespace-nowrap cursor-default transition-colors duration-200 hover:text-white/75"
                style={{ color: 'rgba(255,255,255,0.32)' }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          PAIN POINTS
      ══════════════════════════════ */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="text-center mb-14">
            <SectionHeader
              eyebrow="The Problem"
              title="Tired of Social Media Efforts That Don't Deliver?"
              center
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PAIN_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <div className="card p-7 h-full">
                  <div className="icon-box mb-5 text-2xl">{p.icon}</div>
                  <h3 style={{ fontSize: '0.97rem', lineHeight: 1.4 }}>{p.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          DELIVERS
      ══════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="eyebrow">Why MAXIMEDIA</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>
                MAXIMEDIA Delivers Strategic Social Marketing That Converts
              </h2>
              <div className="flex flex-col gap-3.5 mt-8">
                {[
                  { bold: 'Data-Driven Strategies', rest: 'Tailored to Your Goals' },
                  { bold: 'Expert Execution', rest: 'Across All Major Platforms' },
                  { bold: 'Transparent Reporting', rest: 'Focused on Key Business Metrics' },
                ].map((item) => (
                  <div
                    key={item.bold}
                    className="flex items-start gap-3.5 p-[18px_20px] rounded-[14px] transition-colors duration-300"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  >
                    <div
                      className="w-[22px] h-[22px] min-w-[22px] rounded-[6px] flex items-center justify-center text-[0.7rem] font-extrabold mt-0.5"
                      style={{
                        background: 'var(--green-subtle)',
                        border: '1px solid var(--green-border)',
                        color: 'var(--green)',
                      }}
                    >
                      ✓
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <strong className="text-white font-semibold">{item.bold}</strong> {item.rest}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="col-span-2 h-[200px] rounded-[18px] flex flex-col items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(4,211,97,.1), rgba(12,17,32,1))',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span className="text-5xl">🚀</span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Growth-Focused Strategy
                  </span>
                </div>
                <div
                  className="h-[140px] rounded-[18px] flex items-center justify-center text-4xl"
                  style={{
                    background: 'linear-gradient(135deg, #0f1c2e, #0a1520)',
                    border: '1px solid var(--border)',
                  }}
                >
                  📱
                </div>
                <div
                  className="h-[140px] rounded-[18px] flex items-center justify-center text-4xl"
                  style={{
                    background: 'linear-gradient(135deg, #141c0e, #0a1410)',
                    border: '1px solid var(--border)',
                  }}
                >
                  📊
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICES
      ══════════════════════════════ */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="text-center mb-14">
            <SectionHeader
              eyebrow="What We Do"
              title="Our Comprehensive Social Media Marketing Services"
              center
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <Link
                  href={s.href}
                  className="block card p-7 h-full group relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(4,211,97,.07), transparent)',
                    }}
                  />
                  <div className="icon-box mb-5 text-2xl relative">{s.icon}</div>
                  <h3 className="mb-3.5 relative">{s.title}</h3>
                  <ul className="flex flex-col gap-1.5 relative">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="text-[0.83rem] pl-3.5 relative leading-[1.5]"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span
                          className="absolute left-0 font-bold text-[0.9rem]"
                          style={{ color: 'var(--green)' }}
                        >
                          ›
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn btn--outline">
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CASE STUDIES
      ══════════════════════════════ */}
      <section className="section" id="work">
        <div className="container">
          <div className="flex justify-between items-end flex-wrap gap-5 mb-12">
            <Reveal>
              <div className="eyebrow">Our Work</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>
                Real Results: See How We Drive Growth
              </h2>
            </Reveal>
            <Link href="/work" className="btn btn--ghost whitespace-nowrap">
              Explore All Case Studies →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CASE_STUDIES.map((cs, i) => (
              <Reveal key={cs.slug} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <Link
                  href={`/work/${cs.slug}`}
                  className="block rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="h-[164px] flex items-center justify-center text-5xl relative"
                    style={{
                      background: `linear-gradient(135deg, ${cs.bgFrom}, ${cs.bgTo})`,
                    }}
                  >
                    <span
                      className="absolute top-3 left-3 text-[0.62rem] font-bold px-2.5 py-1 rounded-[6px]"
                      style={{
                        background: 'rgba(8,12,24,.7)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,.1)',
                        color: 'rgba(255,255,255,.85)',
                      }}
                    >
                      {cs.client.toUpperCase()}
                    </span>
                    {cs.emoji}
                  </div>
                  <div className="p-[18px]">
                    <h3 className="mb-2" style={{ fontSize: '0.93rem' }}>
                      {cs.client}
                    </h3>
                    <p
                      className="text-[0.8rem] leading-[1.55]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {cs.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ARE YOU IN BANNER
      ══════════════════════════════ */}
      <div
        className="overflow-hidden py-[26px]"
        style={{
          background: 'linear-gradient(90deg, #03a94e, #04d361 50%, #03a94e)',
        }}
      >
        <div className="overflow-hidden">
          <div className="marquee-track marquee-track--fast">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex items-center gap-5 px-[30px] whitespace-nowrap">
                <span
                  className="font-display font-extrabold tracking-[0.04em] uppercase text-[1.2rem]"
                  style={{ color: 'rgba(0,0,0,0.85)' }}
                >
                  ARE YOU IN?
                </span>
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[0.75rem]"
                  style={{ background: 'rgba(0,0,0,0.15)' }}
                >
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          WHY CHOOSE
      ══════════════════════════════ */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="text-center mb-12">
            <SectionHeader
              eyebrow="Our Edge"
              title="Why Choose MAXIMEDIA as Your Social Marketing Agency Partner?"
              subtitle="Decades of data. Millions in spend. Insights you can't Google."
              center
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            {[
              {
                icon: '🔭',
                title: 'Our Unique Approach: Strategy First, Results Obsessed',
                items: [
                  'Deep Dive Discovery & Goal Alignment',
                  'Customized Strategies, Not Cookie-Cutter Plans',
                  'Continuous Optimization Based on Data',
                ],
              },
              {
                icon: '👥',
                title: 'Your Dedicated Team of Social Media Experts',
                items: [
                  'Experienced Strategists, Creatives & Ad Specialists',
                  'Proactive Communication and Collaboration',
                  'Dedicated Account Manager for Every Client',
                ],
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={(i + 1) as 1 | 2}>
                <div className="card p-8 h-full">
                  <div className="icon-box mb-5">{card.icon}</div>
                  <h3 className="mb-4">{card.title}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="text-[0.875rem] pl-4 relative"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span
                          className="absolute left-0"
                          style={{ color: 'var(--green)' }}
                        >
                          →
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIALS
      ══════════════════════════════ */}
      <section className="section">
        <div className="container">
          <Reveal className="text-center mb-14">
            <SectionHeader eyebrow="Social Proof" title="What Our Clients Say" center />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-[18px]">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={(i % 2 + 1) as 1 | 2}
                className={t.featured ? 'md:col-span-2' : ''}
              >
                <div
                  className="card p-8 h-full flex flex-col"
                  style={{ cursor: 'default' }}
                >
                  <div
                    className="tracking-[2px] mb-4"
                    style={{ color: '#fbbf24', fontSize: '0.88rem' }}
                  >
                    {'★'.repeat(t.stars)}
                  </div>
                  <div
                    className="text-[1.65rem] leading-none mb-4"
                    style={{
                      color: 'var(--green)',
                      opacity: 0.45,
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    "
                  </div>
                  <p
                    className="flex-1 leading-[1.8] mb-6"
                    style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}
                  >
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold flex-shrink-0"
                      style={{ ...t.avatarStyle, fontSize: '0.95rem' }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-display font-bold" style={{ fontSize: '0.9rem' }}>
                        {t.name}
                      </div>
                      <div
                        className="text-[0.78rem] mt-0.5"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PROCESS
      ══════════════════════════════ */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="text-center mb-16">
            <SectionHeader
              eyebrow="How We Work"
              title="Our Proven Process: How We Deliver Social Media Success"
              center
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            <div
              className="hidden lg:block absolute top-[26px] h-[2px] pointer-events-none"
              style={{
                left: 'calc(12.5% + 27px)',
                right: 'calc(12.5% + 27px)',
                background: 'linear-gradient(90deg, var(--green) 0%, rgba(4,211,97,.1) 100%)',
              }}
            />
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={(i + 1) as 1 | 2 | 3 | 4} className="text-center px-3.5">
                <div
                  className="w-[54px] h-[54px] rounded-full flex items-center justify-center font-display font-extrabold text-[1.05rem] text-black mx-auto mb-6 relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, var(--green), #03b352)',
                    boxShadow: '0 8px 24px rgba(4,211,97,.35)',
                  }}
                >
                  {step.step}
                </div>
                <h3 className="mb-3">{step.title}</h3>
                <p
                  className="text-[0.83rem] leading-[1.65]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PARTNERSHIP
      ══════════════════════════════ */}
      <section className="section">
        <div className="container">
          <Reveal className="text-center mb-14">
            <SectionHeader
              eyebrow="Pricing"
              title="Understanding Our Partnership Models &amp; Investment"
              center
            />
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <Reveal className="flex flex-col gap-[18px]">
              {[
                {
                  icon: '💡',
                  title: 'Flexible Solutions Tailored to Your Needs',
                  items: ['Custom Packages Based on Scope and Goals', 'Retainer, Project-Based, and Consulting Options'],
                },
                {
                  icon: '💎',
                  title: 'Transparent Pricing Focused on Value',
                  items: ['Clear Deliverables with No Hidden Fees', 'Scalable Plans That Grow With Your Business'],
                },
              ].map((feat) => (
                <div
                  key={feat.title}
                  className="card p-6"
                >
                  <h3 className="flex items-center gap-2.5 mb-3 text-[0.97rem]">
                    <span className="text-[1.1rem]">{feat.icon}</span> {feat.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {feat.items.map((item) => (
                      <li
                        key={item}
                        className="text-[0.85rem] pl-3.5 relative"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span
                          className="absolute left-0 font-bold"
                          style={{ color: 'var(--green)' }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
            <Reveal
              delay={2}
              className="text-center rounded-[24px] p-12"
              style={{
                background: 'linear-gradient(145deg, rgba(4,211,97,.1), rgba(4,211,97,.04))',
                border: '1px solid var(--green-border)',
              }}
            >
              <div className="text-5xl mb-5">🎯</div>
              <h3
                className="font-display font-extrabold mb-3.5"
                style={{ fontSize: '1.65rem' }}
              >
                Ready to Get Your Custom Proposal?
              </h3>
              <p
                className="mb-7 leading-[1.7] text-[0.93rem]"
                style={{ color: 'var(--text-secondary)' }}
              >
                Tell us about your goals and we&apos;ll create a tailored strategy — no generic
                packages, no fluff.
              </p>
              <Link href="#contact" className="btn btn--primary">
                Request Your Custom Proposal →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TRUSTED BRANDS
      ══════════════════════════════ */}
      <section className="section section--alt">
        <div className="container">
          <Reveal className="text-center mb-12">
            <SectionHeader eyebrow="Clients" title="Trusted by Leading Brands" center />
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {BRANDS.map((brand) => (
              <div
                key={brand}
                className="h-[68px] rounded-xl flex items-center justify-center font-display font-bold tracking-[0.04em] text-[0.76rem] cursor-default transition-all duration-200"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'rgba(255,255,255,0.28)',
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section className="section" id="contact">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-[72px] items-start">
            <Reveal>
              <div className="eyebrow">Get In Touch</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>
                Have Questions? Contact Us Directly
              </h2>
              <p
                className="my-4 text-[0.93rem] leading-[1.8]"
                style={{ color: 'var(--text-secondary)' }}
              >
                We&apos;d love to hear about your organization&apos;s goals on social media.
                Get in touch with us today!
              </p>
              <a
                href="mailto:info@maximedia.com"
                className="inline-flex items-center gap-2.5 font-bold text-[1rem]"
                style={{ color: 'var(--green)' }}
              >
                📧 info@maximedia.com
              </a>
              <div
                className="mt-7 p-[20px_22px] rounded-[14px] text-[0.84rem] leading-[1.85]"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <strong className="block mb-1.5" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  📍 MAXIMEDIA: THE Social Media Agency
                </strong>
                Your Address Here, Suite 100<br />
                City, State ZIP<br />
                (000) 000-0000
              </div>
            </Reveal>
            <Reveal delay={2}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BLOG
      ══════════════════════════════ */}
      <section className="section section--alt">
        <div className="container">
          <div className="flex justify-between items-end flex-wrap gap-5 mb-12">
            <Reveal>
              <div className="eyebrow">Insights</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>
                Explore Our Social Media Insights
              </h2>
            </Reveal>
            <Link href="/blog" className="btn btn--ghost whitespace-nowrap">
              See All Posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={(i + 1) as 1 | 2 | 3}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="h-[178px] flex items-center justify-center text-5xl"
                    style={{
                      background: `linear-gradient(135deg, rgba(4,211,97,${0.07 + i * 0.03}), #0c1120)`,
                    }}
                  >
                    {post.emoji}
                  </div>
                  <div className="p-[22px]">
                    <div
                      className="text-[0.68rem] font-bold tracking-[0.1em] uppercase mb-2"
                      style={{ color: 'var(--green)' }}
                    >
                      {post.tag}
                    </div>
                    <h3
                      className="mb-2.5 leading-[1.45]"
                      style={{ fontSize: '0.95rem' }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-[0.82rem] leading-[1.6]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FINAL CTA
      ══════════════════════════════ */}
      <section className="py-[120px] text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(4,211,97,.08) 0%, transparent 60%)',
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-[680px] mx-auto">
            <span
              className="block mb-3 tracking-[2px]"
              style={{ color: '#fbbf24', fontSize: '1rem' }}
            >
              ★★★★★
            </span>
            <Reveal>
              <div className="eyebrow eyebrow--center mb-4">Get Started</div>
            </Reveal>
            <Reveal>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>
                Ready to Elevate Your Social Media Marketing?
              </h2>
            </Reveal>
            <Reveal>
              <p
                className="mb-10 leading-[1.75] text-[1.02rem]"
                style={{ color: 'var(--text-secondary)' }}
              >
                Let&apos;s discuss your goals, get a personalized proposal, and start building
                your brand&apos;s future online — together.
              </p>
            </Reveal>
            <Reveal className="flex flex-wrap gap-3.5 justify-center">
              <Link href="/contact" className="btn btn--primary">
                Book Your Strategy Call →
              </Link>
              <Link href="/contact" className="btn btn--outline">
                Get a Free Proposal
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
