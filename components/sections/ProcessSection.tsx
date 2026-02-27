import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROCESS_STEPS } from '@/lib/data'

export default function ProcessSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal className="text-center mb-16">
          <SectionHeader
            eyebrow="How We Work"
            title="Our Proven Process: How We Deliver Social Media Success"
            center
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-[26px] h-[2px] pointer-events-none"
            style={{
              left: 'calc(12.5% + 27px)',
              right: 'calc(12.5% + 27px)',
              background: 'linear-gradient(90deg, var(--green) 0%, rgba(4,211,97,.1) 100%)',
            }}
          />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={(i + 1) as 1 | 2 | 3 | 4} className="text-center px-3.5">
              <div
                className="w-[54px] h-[54px] rounded-full flex items-center justify-center font-display font-extrabold text-[1.05rem] text-black mx-auto mb-6 relative z-10"
                style={{
                  background: 'linear-gradient(135deg, var(--green), #03b352)',
                  boxShadow: '0 8px 24px rgba(4,211,97,.35)',
                }}
              >
                {step.step}
              </div>
              <h3 className="mb-3">{step.title}</h3>
              <p className="text-[0.83rem] leading-[1.65]" style={{ color: 'var(--text-secondary)' }}>
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
