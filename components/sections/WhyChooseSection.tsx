import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const CARDS = [
  {
    icon: '🔭',
    title: 'Our Unique Approach: Strategy First, Results Obsessed',
    items: [
      'Deep Dive Discovery & Goal Alignment',
      'Customized Strategies, Not Cookie-Cutter Plans',
      'Continuous Optimization Based on Data',
    ],
  },
  {
    icon: '👥',
    title: 'Your Dedicated Team of Social Media Experts',
    items: [
      'Experienced Strategists, Creatives & Ad Specialists',
      'Proactive Communication and Collaboration',
      'Dedicated Account Manager for Every Client',
    ],
  },
]

export default function WhyChooseSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal className="text-center mb-12">
          <SectionHeader
            eyebrow="Our Edge"
            title="Why Choose MAXIMEDIA as Your Social Marketing Agency Partner?"
            subtitle="Decades of data. Millions in spend. Insights you can't Google."
            center
          />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={(i + 1) as 1 | 2}>
              <div className="card p-8 h-full">
                <div className="icon-box mb-5">{card.icon}</div>
                <h3 className="mb-4">{card.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="text-[0.875rem] pl-4 relative" style={{ color: 'var(--text-secondary)' }}>
                      <span className="absolute left-0" style={{ color: 'var(--green)' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
