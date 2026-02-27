import Reveal from '@/components/ui/Reveal'

export default function DeliversSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="eyebrow">Why MAXIMEDIA</div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>
              MAXIMEDIA Delivers Strategic Social Marketing That Converts
            </h2>
            <div className="flex flex-col gap-3.5 mt-8">
              {[
                { bold: 'Data-Driven Strategies', rest: 'Tailored to Your Goals' },
                { bold: 'Expert Execution', rest: 'Across All Major Platforms' },
                { bold: 'Transparent Reporting', rest: 'Focused on Key Business Metrics' },
              ].map((item) => (
                <div
                  key={item.bold}
                  className="flex items-start gap-3.5 p-[18px_20px] rounded-[14px]"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-[22px] h-[22px] min-w-[22px] rounded-[6px] flex items-center justify-center text-[0.7rem] font-extrabold mt-0.5"
                    style={{ background: 'var(--green-subtle)', border: '1px solid var(--green-border)', color: 'var(--green)' }}
                  >
                    ✓
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <strong className="text-white font-semibold">{item.bold}</strong> {item.rest}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="grid grid-cols-2 gap-3">
              <div
                className="col-span-2 h-[200px] rounded-[18px] flex flex-col items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, rgba(4,211,97,.1), rgba(12,17,32,1))', border: '1px solid var(--border)' }}
              >
                <span className="text-5xl">🚀</span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Growth-Focused Strategy</span>
              </div>
              <div
                className="h-[140px] rounded-[18px] flex items-center justify-center text-4xl"
                style={{ background: 'linear-gradient(135deg, #0f1c2e, #0a1520)', border: '1px solid var(--border)' }}
              >
                📱
              </div>
              <div
                className="h-[140px] rounded-[18px] flex items-center justify-center text-4xl"
                style={{ background: 'linear-gradient(135deg, #141c0e, #0a1410)', border: '1px solid var(--border)' }}
              >
                📊
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
