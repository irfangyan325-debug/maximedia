import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { PAIN_POINTS } from '@/lib/data'

export default function PainPointsSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal className="text-center mb-14">
          <SectionHeader
            eyebrow="The Problem"
            title="Tired of Social Media Efforts That Don't Deliver?"
            center
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PAIN_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
              <div className="card p-7 h-full">
                <div className="icon-box mb-5 text-2xl">{p.icon}</div>
                <h3 style={{ fontSize: '0.97rem', lineHeight: 1.4 }}>{p.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}