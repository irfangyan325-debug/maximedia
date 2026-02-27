import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { CASE_STUDIES } from '@/lib/data'

export default function CaseStudiesSection() {
  return (
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
                  style={{ background: `linear-gradient(135deg, ${cs.bgFrom}, ${cs.bgTo})` }}
                >
                  <span
                    className="absolute top-3 left-3 text-[0.62rem] font-bold px-2.5 py-1 rounded-[6px]"
                    style={{ background: 'rgba(8,12,24,.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.85)' }}
                  >
                    {cs.client.toUpperCase()}
                  </span>
                  {cs.emoji}
                </div>
                <div className="p-[18px]">
                  <h3 className="mb-2" style={{ fontSize: '0.93rem' }}>{cs.client}</h3>
                  <p className="text-[0.8rem] leading-[1.55]" style={{ color: 'var(--text-secondary)' }}>{cs.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
