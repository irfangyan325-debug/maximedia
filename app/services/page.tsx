import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { SERVICES, PROCESS_STEPS } from '@/lib/data'

export const metadata: Metadata = { title: 'Services — Full-Service Social Media Marketing' }

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[74px]" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 55% at 65% 40%, rgba(4,211,97,.08) 0%, transparent 55%)' }} />
        <div className="container relative z-10 py-24">
          <div className="max-w-[720px]">
            <Reveal><div className="eyebrow">Our Services</div></Reveal>
            <Reveal delay={1}><h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>Full-Service Social Media Marketing <span className="green-text">That Converts</span></h1></Reveal>
            <Reveal delay={2}><p className="mt-6 text-[1.05rem] leading-[1.8] max-w-[580px]" style={{ color: 'var(--text-secondary)' }}>From strategy to execution to optimization — we handle every aspect of your social media marketing so you can focus on running your business.</p></Reveal>
            <Reveal delay={3} className="flex flex-wrap gap-3.5 mt-10">
              <Link href="/contact" className="btn btn--primary">Get a Free Proposal →</Link>
              <Link href="/work" className="btn btn--outline">See Results</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="text-center mb-14"><SectionHeader eyebrow="What We Offer" title="Everything You Need to Win on Social" center /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3 + 1) as 1|2|3}>
                <Link href={s.href} className="block card p-7 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, rgba(4,211,97,.07), transparent)' }} />
                  <div className="icon-box mb-5 text-2xl relative">{s.icon}</div>
                  <h3 className="mb-3.5 relative">{s.title}</h3>
                  <ul className="flex flex-col gap-2 relative">
                    {s.points.map((p) => (
                      <li key={p} className="text-[0.83rem] pl-3.5 relative leading-[1.5]" style={{ color: 'var(--text-secondary)' }}>
                        <span className="absolute left-0 font-bold text-[0.9rem]" style={{ color: 'var(--green)' }}>›</span>{p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 relative text-[0.82rem] font-semibold" style={{ color: 'var(--green)' }}>Learn More →</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="text-center mb-16"><SectionHeader eyebrow="How We Work" title="Our Proven Process for Social Media Success" center /></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            <div className="hidden lg:block absolute top-[26px] h-[2px] pointer-events-none" style={{ left: 'calc(12.5% + 27px)', right: 'calc(12.5% + 27px)', background: 'linear-gradient(90deg, var(--green) 0%, rgba(4,211,97,.1) 100%)' }} />
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={(i + 1) as 1|2|3|4} className="text-center px-3">
                <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center font-display font-extrabold text-[1.05rem] text-black mx-auto mb-6 relative z-10" style={{ background: 'linear-gradient(135deg, var(--green), #03b352)', boxShadow: '0 8px 24px rgba(4,211,97,.35)' }}>{step.step}</div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-[0.83rem] leading-[1.65]" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(4,211,97,.07) 0%, transparent 60%)' }} />
        <div className="container relative z-10 max-w-[600px] mx-auto">
          <Reveal><div className="eyebrow eyebrow--center mb-4">Get Started</div></Reveal>
          <Reveal><h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>Ready to Transform Your Social Media?</h2></Reveal>
          <Reveal><p className="my-5 text-[0.93rem] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>Request a free proposal and we'll show you exactly how we'd grow your brand on social.</p></Reveal>
          <Reveal className="flex flex-wrap gap-3.5 justify-center">
            <Link href="/contact" className="btn btn--primary">Request a Free Proposal →</Link>
            <Link href="/work" className="btn btn--outline">View Case Studies</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
