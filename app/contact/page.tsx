import type { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'
import ProposalForm from '@/components/ui/Proposalform'
import { SITE } from '@/lib/data'

export const metadata: Metadata = { title: 'Contact Us — Get Your Free Social Media Proposal' }

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[74px]" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 55% at 60% 40%, rgba(4,211,97,.08) 0%, transparent 55%)' }} />
        <div className="container relative z-10 py-20 text-center">
          <Reveal><div className="eyebrow eyebrow--center">Get In Touch</div></Reveal>
          <Reveal delay={1}><h1 className="mt-2 max-w-[640px] mx-auto" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>Let&apos;s Talk About <span className="green-text">Your Growth</span></h1></Reveal>
          <Reveal delay={2}><p className="mt-5 text-[1.02rem] leading-[1.8] max-w-[500px] mx-auto" style={{ color: 'var(--text-secondary)' }}>Tell us about your goals and we&apos;ll build a custom proposal — free of charge.</p></Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 items-start">
            <Reveal>
              <h2 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>We&apos;d Love to Hear From You</h2>
              <p className="text-[0.93rem] leading-[1.8] mb-8" style={{ color: 'var(--text-secondary)' }}>Whether you&apos;re ready to start immediately or just exploring options, our team will craft a personalized proposal tailored to your brand and goals.</p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  { icon: '📧', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: '📞', label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
                  { icon: '📍', label: 'Address', value: `${SITE.address}, ${SITE.city}`, href: '#' },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-4 p-5 rounded-[14px]" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                    <div className="icon-box text-xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-[0.75rem] font-bold tracking-[0.08em] uppercase mb-1" style={{ color: 'var(--green)' }}>{item.label}</div>
                      <div className="text-[0.9rem]" style={{ color: 'var(--text-secondary)' }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="p-6 rounded-[18px]" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <h3 className="mb-4 text-[1rem]">What Happens Next?</h3>
                {[
                  { step: '01', text: 'We review your submission within 1 business day' },
                  { step: '02', text: 'A strategist schedules a discovery call with you' },
                  { step: '03', text: 'We build your custom proposal — no charge' },
                  { step: '04', text: "You decide if we're the right fit. Zero pressure." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3 mb-3.5 last:mb-0">
                    <span className="font-display font-extrabold text-[0.82rem] w-7 flex-shrink-0 mt-0.5" style={{ color: 'var(--green)' }}>{item.step}</span>
                    <p className="text-[0.875rem] leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={2}>
              <ProposalForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
