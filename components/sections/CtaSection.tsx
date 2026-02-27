import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export default function CtaSection() {
  return (
    <section className="py-[120px] text-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(4,211,97,.08) 0%, transparent 60%)' }}
      />
      <div className="container relative z-10">
        <div className="max-w-[680px] mx-auto">
          <span className="block mb-3 tracking-[2px]" style={{ color: '#fbbf24', fontSize: '1rem' }}>
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
            <p className="mb-10 leading-[1.75] text-[1.02rem]" style={{ color: 'var(--text-secondary)' }}>
              Let&apos;s discuss your goals, get a personalized proposal, and start building
              your brand&apos;s future online — together.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3.5 justify-center">
            <Link href="/contact" className="btn btn--primary">Book Your Strategy Call →</Link>
            <Link href="/contact" className="btn btn--outline">Get a Free Proposal</Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
