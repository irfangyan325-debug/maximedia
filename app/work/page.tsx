import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { CASE_STUDIES } from '@/lib/data'

export const metadata: Metadata = { title: 'Our Work — Case Studies & Client Results' }

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[74px]" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 55% at 65% 40%, rgba(4,211,97,.08) 0%, transparent 55%)' }} />
        <div className="container relative z-10 py-24 text-center">
          <Reveal><div className="eyebrow eyebrow--center">Our Work</div></Reveal>
          <Reveal delay={1}><h1 className="max-w-[680px] mx-auto mt-2" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>Real Results for <span className="green-text">Real Brands</span></h1></Reveal>
          <Reveal delay={2}><p className="mt-6 text-[1.05rem] leading-[1.8] max-w-[540px] mx-auto" style={{ color: 'var(--text-secondary)' }}>We don&apos;t just promise results — we document them. Browse our case studies and see exactly what we&apos;ve achieved for brands like yours.</p></Reveal>
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ num: '+3,700%', label: 'Engagement Growth' }, { num: '+1,400%', label: 'Audience Growth' }, { num: '+3,000%', label: 'Impressions Growth' }, { num: '$50M+', label: 'Ad Spend Managed' }].map((s) => (
              <div key={s.label}>
                <div className="font-display font-extrabold mb-1 green-text" style={{ fontSize: '1.8rem' }}>{s.num}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CASE_STUDIES.map((cs, i) => (
              <Reveal key={cs.slug} delay={(i % 4 + 1) as 1|2|3|4}>
                <Link href={`/work/${cs.slug}`} className="block rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <div className="h-[180px] flex items-center justify-center text-5xl relative" style={{ background: `linear-gradient(135deg, ${cs.bgFrom}, ${cs.bgTo})` }}>
                    <span className="absolute top-3 left-3 text-[0.62rem] font-bold px-2.5 py-1 rounded-[6px]" style={{ background: 'rgba(8,12,24,.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.85)' }}>{cs.client.toUpperCase()}</span>
                    {cs.emoji}
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {cs.tags.map((tag) => (<span key={tag} className="text-[0.65rem] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-[5px]" style={{ background: 'var(--green-subtle)', border: '1px solid var(--green-border)', color: 'var(--green)' }}>{tag}</span>))}
                    </div>
                    <h3 className="mb-2" style={{ fontSize: '0.97rem' }}>{cs.client}</h3>
                    <p className="text-[0.8rem] leading-[1.55]" style={{ color: 'var(--text-secondary)' }}>{cs.description}</p>
                    <div className="mt-4 text-[0.82rem] font-semibold" style={{ color: 'var(--green)' }}>Read Case Study →</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center section--alt">
        <div className="container max-w-[580px] mx-auto">
          <Reveal><div className="eyebrow eyebrow--center mb-4">Your Brand Next</div></Reveal>
          <Reveal><h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>Ready to Be Our Next Success Story?</h2></Reveal>
          <Reveal><p className="my-5 text-[0.93rem] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>Let&apos;s build a strategy that puts your brand in the spotlight.</p></Reveal>
          <Reveal className="flex flex-wrap gap-3.5 justify-center">
            <Link href="/contact" className="btn btn--primary">Get a Free Proposal →</Link>
            <Link href="/services" className="btn btn--outline">Explore Services</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
