import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { TESTIMONIALS } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="text-center mb-14">
          <SectionHeader eyebrow="Social Proof" title="What Our Clients Say" center />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-[18px]">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 2 + 1) as 1 | 2}
              className={t.featured ? 'md:col-span-2' : ''}
            >
              <div className="card p-8 h-full flex flex-col" style={{ cursor: 'default' }}>
                <div className="tracking-[2px] mb-4" style={{ color: '#fbbf24', fontSize: '0.88rem' }}>
                  {'★'.repeat(t.stars)}
                </div>
                <div
                  className="text-[1.65rem] leading-none mb-4"
                  style={{ color: 'var(--green)', opacity: 0.45, fontFamily: 'Georgia, serif' }}
                >
                  "
                </div>
                <p className="flex-1 leading-[1.8] mb-6" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold flex-shrink-0"
                    style={{ ...t.avatarStyle, fontSize: '0.95rem' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold" style={{ fontSize: '0.9rem' }}>{t.name}</div>
                    <div className="text-[0.78rem] mt-0.5" style={{ color: 'var(--text-muted)' }}>{t.company}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
