import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { STATS, CLIENT_LOGOS } from '@/lib/data'

export default function HeroSection() {
  return (
    <>
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
                <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--green)' }} />
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
              <div className="flex flex-wrap gap-9 pt-9" style={{ borderTop: '1px solid var(--border)' }}>
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-extrabold tracking-tight mb-1 green-text" style={{ fontSize: '1.7rem' }}>
                      {s.number}
                    </div>
                    <div className="text-[0.78rem] font-medium" style={{ color: 'var(--text-muted)' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center relative">
              <div
                className="float-anim absolute top-[14%] -left-14 rounded-[14px] px-[18px] py-3.5 z-10"
                style={{
                  background: 'rgba(15,21,39,0.92)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,.45)',
                }}
              >
                <div className="font-display font-extrabold leading-none mb-1 green-text" style={{ fontSize: '1.35rem' }}>
                  +3,700%
                </div>
                <div className="text-[0.68rem]" style={{ color: 'var(--text-secondary)' }}>Engagement Growth</div>
                <div className="h-[3px] rounded-full mt-2 overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)', width: '130px' }}>
                  <div className="h-full rounded-full" style={{ background: 'var(--green)', width: '87%' }} />
                </div>
              </div>

              <div
                className="relative w-[268px] h-[544px] rounded-[44px] overflow-hidden"
                style={{
                  background: 'var(--bg-card)',
                  border: '1.5px solid rgba(255,255,255,.1)',
                  boxShadow: '0 40px 80px rgba(0,0,0,.55), 0 0 0 1px rgba(4,211,97,.08)',
                }}
              >
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[90px] h-6 rounded-[20px] z-10" style={{ background: '#080C18' }} />
                <div className="absolute inset-0 flex flex-col gap-2.5 pt-14 px-3.5 pb-3.5" style={{ background: 'linear-gradient(160deg, #111a2e, #0a0f1e)' }}>
                  {[
                    { name: 'MAXIMEDIA', emoji: '📈', likes: '4.2k', comments: '318', shares: '892', avatarBg: 'linear-gradient(135deg, #04D361, #00c853)' },
                    { name: 'Client Brand', emoji: '🎯', likes: '11k', comments: '721', shares: '2.1k', avatarBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
                    { name: 'Brand Story', emoji: '🚀', likes: '8.9k', comments: '445', shares: '1.5k', avatarBg: 'linear-gradient(135deg, #a855f7, #7c3aed)' },
                  ].map((post) => (
                    <div key={post.name} className="rounded-[14px] p-3" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.06)' }}>
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="w-[26px] h-[26px] rounded-full flex-shrink-0" style={{ background: post.avatarBg }} />
                        <span className="text-[0.68rem] font-bold">{post.name}</span>
                        <span className="text-[0.6rem] ml-auto" style={{ color: 'var(--text-muted)' }}>2h</span>
                      </div>
                      <div className="w-full h-[72px] rounded-[10px] flex items-center justify-center text-2xl mb-2" style={{ background: 'rgba(4,211,97,0.12)' }}>
                        {post.emoji}
                      </div>
                      <div className="flex gap-3">
                        {[['❤️', post.likes], ['💬', post.comments], ['↗', post.shares]].map(([ico, val]) => (
                          <span key={ico} className="text-[0.6rem]" style={{ color: 'var(--text-muted)' }}>
                            {ico} <span style={{ color: 'var(--green)', fontWeight: 700 }}>{val}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="float-anim-delay absolute bottom-[20%] -right-12 rounded-[14px] px-[18px] py-3.5 z-10"
                style={{
                  background: 'rgba(15,21,39,0.92)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,.45)',
                }}
              >
                <div className="font-display font-extrabold leading-none mb-1 green-text" style={{ fontSize: '1.35rem' }}>+1,400%</div>
                <div className="text-[0.68rem]" style={{ color: 'var(--text-secondary)' }}>Audience Growth</div>
                <div className="h-[3px] rounded-full mt-2 overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)', width: '130px' }}>
                  <div className="h-full rounded-full" style={{ background: 'var(--green)', width: '72%' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div
        className="overflow-hidden"
        style={{
          padding: '44px 0',
          background: 'rgba(255,255,255,0.018)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <p className="text-center text-[0.72rem] font-semibold tracking-[0.12em] uppercase mb-6" style={{ color: 'var(--text-muted)' }}>
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
    </>
  )
}
