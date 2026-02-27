import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { TEAM_MEMBERS } from '@/lib/data'

export const metadata: Metadata = { title: 'About Us — Results-Driven Social Media Experts' }

const VALUES = [
  { icon: '🎯', title: 'Results Above All', desc: 'Every decision is anchored in your business outcomes — not vanity metrics.' },
  { icon: '💡', title: 'Strategy First', desc: 'We never execute without a solid strategy. Planning is the foundation of every campaign.' },
  { icon: '🤝', title: 'True Partnership', desc: "We embed ourselves in your team, acting as an extension of your own marketing department." },
  { icon: '📊', title: 'Data-Driven', desc: "Gut feelings don't drive budgets. Our recommendations are backed by real numbers." },
  { icon: '🚀', title: 'Relentless Innovation', desc: 'Social media moves fast. We stay ahead of every algorithm change and platform launch.' },
  { icon: '🌟', title: 'Creative Excellence', desc: 'Thumb-stopping content requires true creative talent — and we have the best in the business.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[74px]" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 60% 40%, rgba(4,211,97,.07) 0%, transparent 55%)' }} />
        <div className="container relative z-10 py-24 lg:py-32">
          <div className="max-w-[780px]">
            <Reveal><div className="eyebrow">About MAXIMEDIA</div></Reveal>
            <Reveal delay={1}><h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>We Turn Social Media Into Your Most Powerful <span className="green-text">Business Tool</span></h1></Reveal>
            <Reveal delay={2}><p className="mt-6 text-[1.05rem] leading-[1.8] max-w-[600px]" style={{ color: 'var(--text-secondary)' }}>Founded on the belief that every brand deserves a social media presence that actually drives revenue, MAXIMEDIA has grown into one of the industry's most trusted agencies — serving 500+ brands across every major platform.</p></Reveal>
            <Reveal delay={3} className="flex flex-wrap gap-3.5 mt-10">
              <Link href="/contact" className="btn btn--primary">Work With Us →</Link>
              <Link href="/work" className="btn btn--outline">See Our Work</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { number: '500+', label: 'Brands Served', icon: '🏆' },
              { number: '$50M+', label: 'Ad Spend Managed', icon: '💰' },
              { number: '98%', label: 'Client Retention', icon: '🤝' },
              { number: '10+', label: 'Years of Experience', icon: '📅' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={(i + 1) as 1|2|3|4}>
                <div className="card p-8 text-center">
                  <div className="text-3xl mb-4">{stat.icon}</div>
                  <div className="font-display font-extrabold mb-1.5 green-text" style={{ fontSize: '2rem' }}>{stat.number}</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="eyebrow">Our Story</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>Built by Marketers, for Marketers</h2>
              <p className="mt-5 text-[0.93rem] leading-[1.85]" style={{ color: 'var(--text-secondary)' }}>MAXIMEDIA was born from a simple frustration: too many agencies were selling social media as a "nice to have" instead of a revenue driver. Our founders — seasoned digital marketers — set out to build something different.</p>
              <p className="mt-4 text-[0.93rem] leading-[1.85]" style={{ color: 'var(--text-secondary)' }}>From day one, we've operated with a single philosophy: social media should generate measurable business results. Not just likes, not just followers — but real leads, real sales, and real growth.</p>
            </Reveal>
            <Reveal delay={2}>
              <div className="grid grid-cols-2 gap-3">
                {['🎯 Strategy', '📊 Analytics', '🎬 Creative', '📱 Management'].map((label) => (
                  <div key={label} className="h-[120px] rounded-[18px] flex items-center justify-center font-display font-bold text-sm" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>{label}</div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="text-center mb-14"><SectionHeader eyebrow="Our Values" title="What We Stand For" center /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3 + 1) as 1|2|3}>
                <div className="card p-7 h-full">
                  <div className="icon-box mb-5 text-2xl">{v.icon}</div>
                  <h3 className="mb-3">{v.title}</h3>
                  <p className="text-[0.875rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container">
          <Reveal className="text-center mb-14"><SectionHeader eyebrow="Our Team" title="Meet the Experts Behind Your Growth" center /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM_MEMBERS.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3 + 1) as 1|2|3}>
                <div className="card p-7 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center font-display font-extrabold text-2xl mx-auto mb-5 text-black" style={{ background: 'linear-gradient(135deg, var(--green), #00c853)' }}>{m.avatar}</div>
                  <h3 className="mb-1 text-[1rem]">{m.name}</h3>
                  <div className="text-[0.8rem] font-semibold mb-4" style={{ color: 'var(--green)' }}>{m.role}</div>
                  <p className="text-[0.84rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(4,211,97,.07) 0%, transparent 60%)' }} />
        <div className="container relative z-10 max-w-[600px] mx-auto">
          <Reveal><div className="eyebrow eyebrow--center mb-4">Join Our Team</div></Reveal>
          <Reveal><h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>Passionate About Social Media?</h2></Reveal>
          <Reveal><p className="my-5 text-[0.93rem] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>We're always looking for talented strategists, creatives, and data nerds to join our growing team.</p></Reveal>
          <Reveal className="flex flex-wrap gap-3.5 justify-center">
            <Link href="/careers" className="btn btn--primary">View Open Positions →</Link>
            <Link href="/contact" className="btn btn--outline">Get In Touch</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
