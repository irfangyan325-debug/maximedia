import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { SERVICES } from '@/lib/data'

export default function ServicesSection() {
  return (
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
              <Link href={s.href} className="block card p-7 h-full group relative overflow-hidden">
                <div
                  className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(4,211,97,.07), transparent)' }}
                />
                <div className="icon-box mb-5 text-2xl relative">{s.icon}</div>
                <h3 className="mb-3.5 relative">{s.title}</h3>
                <ul className="flex flex-col gap-1.5 relative">
                  {s.points.map((p) => (
                    <li key={p} className="text-[0.83rem] pl-3.5 relative leading-[1.5]" style={{ color: 'var(--text-secondary)' }}>
                      <span className="absolute left-0 font-bold text-[0.9rem]" style={{ color: 'var(--green)' }}>›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="btn btn--outline">See All Services →</Link>
        </div>
      </div>
    </section>
  )
}
