import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Careers — Join the MAXIMEDIA Team' }

const ROLES = [
  { title: 'Senior Social Media Strategist',      dept: 'Strategy',   type: 'Full-Time', location: 'Remote / Hybrid' },
  { title: 'Paid Social Advertising Manager',     dept: 'Paid Media',  type: 'Full-Time', location: 'Remote'          },
  { title: 'Content Creator — Video & Short-Form', dept: 'Creative',   type: 'Full-Time', location: 'On-Site'         },
  { title: 'Community Manager',                   dept: 'Community',   type: 'Full-Time', location: 'Remote'          },
  { title: 'Data Analyst — Social & Paid',        dept: 'Analytics',   type: 'Full-Time', location: 'Remote / Hybrid' },
  { title: 'Influencer Marketing Coordinator',    dept: 'Influencer',  type: 'Contract',  location: 'Remote'          },
]

const PERKS = [
  { icon: '🌍', title: 'Remote Friendly',  desc: 'Work from anywhere. We care about results, not location.' },
  { icon: '📚', title: 'Learning Budget',  desc: '$1,500/year for courses, conferences, and certifications.' },
  { icon: '🏥', title: 'Full Benefits',    desc: 'Health, dental, vision, and 401K matching from day one.' },
  { icon: '🏝️', title: 'Unlimited PTO',   desc: 'Take the time you need. Trust is how we operate.' },
  { icon: '🚀', title: 'Career Growth',   desc: 'Clear advancement paths with mentorship from leaders.' },
  { icon: '🎉', title: 'Great Culture',   desc: 'Work hard, celebrate wins, and genuinely enjoy your team.' },
]

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  Strategy:   { bg: 'rgba(26,86,219,0.08)',  color: 'var(--blue)' },
  'Paid Media': { bg: 'rgba(245,197,24,0.15)', color: '#8a6a00'     },
  Creative:   { bg: 'rgba(236,72,153,0.1)',  color: '#9d174d'     },
  Community:  { bg: 'rgba(16,185,129,0.1)',  color: '#065f46'     },
  Analytics:  { bg: 'rgba(139,92,246,0.1)',  color: '#5b21b6'     },
  Influencer: { bg: 'rgba(239,68,68,0.1)',   color: '#991b1b'     },
  'Full-Time':{ bg: 'rgba(26,86,219,0.06)',  color: 'var(--blue)' },
  Contract:   { bg: 'rgba(245,197,24,0.12)', color: '#8a6a00'     },
  Remote:     { bg: 'rgba(16,185,129,0.08)', color: '#065f46'     },
  'Remote / Hybrid': { bg: 'rgba(139,92,246,0.08)', color: '#5b21b6' },
  'On-Site':  { bg: 'rgba(239,68,68,0.08)', color: '#991b1b'     },
}

export default function CareersPage() {
  return (
    <>
      <style>{`
        /* ── Hero ── */
        .careers-hero {
          background: var(--blue);
          padding-top: var(--nav-h);
          overflow: hidden;
          position: relative;
        }
        .careers-hero-inner {
          padding: clamp(56px,9vw,108px) 0 clamp(64px,10vw,120px);
          max-width: 720px;
        }

        /* ── Perks grid ── */
        .careers-perks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 860px) {
          .careers-perks-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
        @media (max-width: 480px) {
          .careers-perks-grid { grid-template-columns: 1fr; gap: 12px; }
        }

        /* ── Roles list ── */
        .careers-role-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: #fff;
          border: 1.5px solid rgba(26,86,219,0.12);
          border-radius: 14px;
          padding: clamp(18px,2.5vw,24px) clamp(20px,3vw,28px);
          box-shadow: 0 4px 16px rgba(26,86,219,0.05);
          transition: all 0.2s;
        }
        .careers-role-card:hover {
          border-color: rgba(26,86,219,0.3);
          box-shadow: 0 8px 28px rgba(26,86,219,0.1);
          transform: translateY(-2px);
        }
        .careers-role-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }
        @media (max-width: 640px) {
          .careers-role-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .careers-role-card:hover { transform: none; }
          .careers-apply-btn { width: 100%; text-align: center; justify-content: center; }
        }

        /* ── Bottom CTA ── */
        .careers-cta-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          margin-top: clamp(24px,4vw,36px);
        }
        @media (max-width: 480px) {
          .careers-cta-btns a { flex: 1; justify-content: center; text-align: center; min-width: 160px; }
        }
      `}</style>

      <section className="careers-hero">
        {/* Decorative radial glow */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(ellipse 55% 60% at 80% 50%, rgba(245,197,24,0.08) 0%, transparent 60%)',
        }} />

        {/* Floating emojis */}
        {[
          { e: '🚀', top: '18%', left: '78%', size: 'clamp(1.6rem,3vw,2.4rem)' },
          { e: '🎯', top: '60%', left: '85%', size: 'clamp(1.4rem,2.5vw,2rem)' },
          { e: '💡', top: '25%', left: '92%', size: 'clamp(1.2rem,2vw,1.6rem)' },
        ].map(({ e, top, left, size }) => (
          <div key={e} aria-hidden style={{
            position: 'absolute', top, left, fontSize: size,
            opacity: 0.45, pointerEvents: 'none', userSelect: 'none',
          }}>{e}</div>
        ))}

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="careers-hero-inner">
            <h1 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(2.2rem,6vw,4rem)',
              lineHeight: 1.0, letterSpacing: '-0.02em',
              color: '#fff', marginBottom: 'clamp(16px,2.5vw,24px)',
            }}>
              HELP US BUILD THE FUTURE OF{' '}
              <span style={{
                color: 'var(--yellow)',
                textDecoration: 'underline',
                textDecorationColor: 'var(--yellow)',
                textDecorationThickness: '5px',
                textUnderlineOffset: '6px',
              }}>
                SOCIAL
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.92rem,2vw,1.08rem)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8,
              maxWidth: '560px',
            }}>
              We&apos;re a team of passionate marketers, creatives, and data nerds on a mission to prove social media
              is one of the most powerful revenue drivers available to any brand.
            </p>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="#f2f5fc" />
          </svg>
        </div>
      </section>

      <section style={{ background: '#f2f5fc', padding: 'clamp(64px,8vw,96px) 0' }}>
        <div className="container">
          {/* Heading */}
          <div style={{ marginBottom: 'clamp(32px,5vw,52px)' }}>
            <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--yellow)', marginBottom: '8px' }}>
              WHY MAXIMEDIA
            </p>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.6rem,4vw,2.8rem)', color: 'var(--blue)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>
              WHY YOU&apos;LL LOVE{' '}
              <span style={{
                textDecoration: 'underline', textDecorationColor: 'var(--yellow)',
                textDecorationThickness: '4px', textUnderlineOffset: '5px',
              }}>
                WORKING HERE
              </span>
            </h2>
          </div>

          <div className="careers-perks-grid">
            {PERKS.map(p => (
              <div key={p.title} style={{
                background: '#fff',
                border: '1.5px solid rgba(26,86,219,0.1)',
                borderRadius: '16px',
                padding: 'clamp(20px,3vw,28px)',
                boxShadow: '0 4px 16px rgba(26,86,219,0.06)',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: 'rgba(26,86,219,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', marginBottom: '14px',
                }}>
                  {p.icon}
                </div>
                <h3 className="font-display font-black uppercase" style={{
                  fontSize: 'clamp(0.82rem,1.3vw,0.92rem)', color: 'var(--blue)',
                  letterSpacing: '0.02em', marginBottom: '8px',
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 'clamp(0.82rem,1.2vw,0.88rem)', color: 'rgba(12,26,78,0.62)', lineHeight: 1.75 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OPEN POSITIONS — white bg
      ══════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: 'clamp(64px,8vw,96px) 0' }}>
        <div className="container">
          {/* Heading */}
          <div style={{ marginBottom: 'clamp(28px,4vw,44px)' }}>
            <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--blue)', marginBottom: '8px' }}>
              OPEN POSITIONS
            </p>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.6rem,4vw,2.8rem)', color: 'var(--blue)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>
              FIND YOUR{' '}
              <span style={{
                color: 'var(--yellow)',
                textDecoration: 'underline', textDecorationColor: 'var(--yellow)',
                textDecorationThickness: '4px', textUnderlineOffset: '5px',
              }}>
                ROLE
              </span>
            </h2>
          </div>

          {/* Roles list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {ROLES.map(role => {
              const tags = [role.dept, role.type, role.location]
              return (
                <div key={role.title} className="careers-role-card">
                  {/* Left: title + tags */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 className="font-display font-black" style={{
                      fontSize: 'clamp(0.92rem,1.6vw,1.05rem)',
                      color: 'var(--blue)', letterSpacing: '0.01em', marginBottom: '0',
                    }}>
                      {role.title}
                    </h3>
                    <div className="careers-role-tags">
                      {tags.map(tag => {
                        const style = TAG_COLORS[tag] ?? { bg: 'rgba(26,86,219,0.07)', color: 'var(--blue)' }
                        return (
                          <span key={tag} className="font-display font-black uppercase" style={{
                            fontSize: '0.65rem', letterSpacing: '0.08em',
                            padding: '4px 10px', borderRadius: '100px',
                            background: style.bg, color: style.color,
                          }}>
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  {/* Right: Apply button */}
                  <Link
                    href="/contact"
                    className="font-display font-black uppercase careers-apply-btn"
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: 'clamp(11px,1.5vw,14px) clamp(18px,2.5vw,26px)',
                      background: 'var(--yellow)', color: '#0c1a4e',
                      borderRadius: '9px', fontSize: 'clamp(0.7rem,1.2vw,0.78rem)',
                      letterSpacing: '0.1em', textDecoration: 'none',
                      whiteSpace: 'nowrap', flexShrink: 0,
                      boxShadow: '0 4px 14px rgba(245,197,24,0.35)',
                    }}
                  >
                    APPLY NOW →
                  </Link>
                </div>
              )
            })}
          </div>

          {/* No role fits? card */}
          <div style={{
            marginTop: 'clamp(24px,4vw,36px)',
            background: '#f2f5fc',
            border: '1.5px dashed rgba(26,86,219,0.25)',
            borderRadius: '14px',
            padding: 'clamp(20px,3vw,28px) clamp(20px,3vw,32px)',
            display: 'flex', flexWrap: 'wrap', gap: '16px',
            alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <p className="font-display font-black uppercase" style={{ fontSize: 'clamp(0.82rem,1.3vw,0.9rem)', color: 'var(--blue)', marginBottom: '4px' }}>
                DON&apos;T SEE A FIT?
              </p>
              <p style={{ fontSize: 'clamp(0.8rem,1.2vw,0.88rem)', color: 'rgba(12,26,78,0.62)' }}>
                We&apos;re always looking for exceptional talent. Send us your resume anyway.
              </p>
            </div>
            <Link href="/contact" className="font-display font-black uppercase" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'clamp(11px,1.5vw,14px) clamp(18px,2.5vw,26px)',
              background: 'var(--blue)', color: '#fff',
              borderRadius: '9px', fontSize: 'clamp(0.7rem,1.2vw,0.78rem)',
              letterSpacing: '0.1em', textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA — blue bg
      ══════════════════════════════════════ */}
      <section style={{
        background: 'var(--blue)',
        padding: 'clamp(56px,8vw,88px) 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(245,197,24,0.07) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '620px' }}>
          <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.55)', marginBottom: '12px' }}>
            READY TO GROW?
          </p>
          <h2 className="font-display font-black uppercase" style={{
            fontSize: 'clamp(1.8rem,5vw,3.2rem)',
            lineHeight: 1.0, letterSpacing: '-0.02em', color: '#fff',
            marginBottom: 'clamp(12px,2vw,18px)',
          }}>
            JOIN A TEAM THAT ACTUALLY{' '}
            <span style={{
              color: 'var(--yellow)',
              textDecoration: 'underline', textDecorationColor: 'var(--yellow)',
              textDecorationThickness: '4px', textUnderlineOffset: '6px',
            }}>
              WINS
            </span>
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem,2vw,1rem)',
            color: 'rgba(255,255,255,0.7)', lineHeight: 1.75,
          }}>
            We invest in our people. Whether you&apos;re a seasoned expert or a rising star, you&apos;ll have the tools,
            mentorship, and freedom to do your best work.
          </p>
          <div className="careers-cta-btns">
            <Link href="#open-positions" className="font-display font-black uppercase" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'clamp(13px,2vw,16px) clamp(22px,3vw,36px)',
              background: 'var(--yellow)', color: '#0c1a4e', borderRadius: '10px',
              fontSize: 'clamp(0.75rem,1.5vw,0.85rem)', letterSpacing: '0.1em',
              textDecoration: 'none', boxShadow: '0 6px 20px rgba(245,197,24,0.4)',
            }}>
              SEE OPEN ROLES →
            </Link>
            <Link href="/contact" className="font-display font-black uppercase" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'clamp(13px,2vw,16px) clamp(22px,3vw,36px)',
              background: 'transparent', color: '#fff',
              border: '2px solid rgba(255,255,255,0.4)', borderRadius: '10px',
              fontSize: 'clamp(0.75rem,1.5vw,0.85rem)', letterSpacing: '0.1em',
              textDecoration: 'none',
            }}>
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}