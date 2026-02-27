import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = { title: 'Careers — Join the MAXIMEDIA Team' }

const ROLES = [
  { title: 'Senior Social Media Strategist', dept: 'Strategy', type: 'Full-Time', location: 'Remote / Hybrid' },
  { title: 'Paid Social Advertising Manager', dept: 'Paid Media', type: 'Full-Time', location: 'Remote' },
  { title: 'Content Creator — Video & Short-Form', dept: 'Creative', type: 'Full-Time', location: 'On-Site' },
  { title: 'Community Manager', dept: 'Community', type: 'Full-Time', location: 'Remote' },
  { title: 'Data Analyst — Social & Paid', dept: 'Analytics', type: 'Full-Time', location: 'Remote / Hybrid' },
  { title: 'Influencer Marketing Coordinator', dept: 'Influencer', type: 'Contract', location: 'Remote' },
]

const PERKS = [
  { icon: '🌍', title: 'Remote Friendly', desc: 'Work from anywhere. We care about results, not location.' },
  { icon: '📚', title: 'Learning Budget', desc: '$1,500/year for courses, conferences, and certifications.' },
  { icon: '🏥', title: 'Full Benefits', desc: 'Health, dental, vision, and 401K matching from day one.' },
  { icon: '🏝️', title: 'Unlimited PTO', desc: 'Take the time you need. Trust is how we operate.' },
  { icon: '🚀', title: 'Career Growth', desc: 'Clear advancement paths with mentorship from leaders.' },
  { icon: '🎉', title: 'Great Culture', desc: 'Work hard, celebrate wins, and genuinely enjoy your team.' },
]

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[74px]" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 55% at 65% 40%, rgba(4,211,97,.08) 0%, transparent 55%)' }} />
        <div className="container relative z-10 py-24">
          <div className="max-w-[700px]">
            <Reveal><div className="eyebrow">Careers</div></Reveal>
            <Reveal delay={1}><h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>Help Us Build the <span className="green-text">Future of Social</span></h1></Reveal>
            <Reveal delay={2}><p className="mt-6 text-[1.05rem] leading-[1.8] max-w-[560px]" style={{ color: 'var(--text-secondary)' }}>We&apos;re a team of passionate marketers, creatives, and data nerds on a mission to prove social media is one of the most powerful revenue drivers available to any brand.</p></Reveal>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <Reveal className="text-center mb-14"><div className="eyebrow eyebrow--center">Why MAXIMEDIA</div><h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>Why You&apos;ll Love Working Here</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERKS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3 + 1) as 1|2|3}>
                <div className="card p-7">
                  <div className="icon-box mb-5 text-2xl">{p.icon}</div>
                  <h3 className="mb-3">{p.title}</h3>
                  <p className="text-[0.875rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal className="mb-12"><div className="eyebrow">Open Positions</div><h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>Find Your Role</h2></Reveal>
          <div className="flex flex-col gap-3">
            {ROLES.map((role, i) => (
              <Reveal key={role.title} delay={(i % 3 + 1) as 1|2|3}>
                <div className="card p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex-1">
                    <h3 className="text-[1rem] mb-1.5">{role.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {[role.dept, role.type, role.location].map((tag) => (
                        <span key={tag} className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase px-2.5 py-0.5 rounded-[5px]" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="btn btn--primary whitespace-nowrap flex-shrink-0">Apply Now →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
