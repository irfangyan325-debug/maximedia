'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'What will I receive during the strategy presentation?',
    a: "We will complete a competitor audit, develop a content strategy and engagement plan, set goals, choose the right platforms — and so much more. This is a crucial stage because what you're hoping to accomplish will determine the social media marketing strategy. No two strategies are alike and that's a good thing!",
  },
  {
    q: 'How long does the social media marketing strategy take to build?',
    a: "Typically around one month for all the necessary steps. We provide a highly-robust plan that covers all portions of the strategy. For brands looking to move quickly, we have a condensed 2-week strategy — typically a good fit if you have an existing strategy in place.",
  },
  {
    q: 'What time commitment is required from the client?',
    a: "Typically one month, but it can be expedited — occasionally 2–3 weeks, but no less than two weeks. Three one-hour meetings with our team will be mandatory during this period. We've found it's required to keep us all on track as partners in your success.",
  },
  {
    q: 'What happens after the strategy presentation?',
    a: "During the strategy, we create a custom plan for your social media. We also have a general idea of how many posts and what type of content you should be putting out before the presentation. Once we agree on a scope, posting can start. We'll produce thumb-stopping content and help you grow followers on the platforms that matter most.",
  },
  {
    q: 'What type of social media strategies can you do?',
    a: "We focus on everything related to social media. We can help with all different types — from management to social paid ads strategy, content direction to overall social strategy, and more.",
  },
  {
    q: 'Does MAXIMEDIA work with businesses like mine?',
    a: "Short answer: Yes. Long answer: Absolutely, and we've got the receipts. With 100+ case studies across dozens of industries, there's a solid chance we've already helped businesses just like yours crush their social media goals. We don't do one-size-fits-all. We build strategies tailored to your brand, your voice, and your vision.",
  },
]

export default function StrategyFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <>
      <style>{`
        .faq-item {
          border: 2px solid #b8dff0;
          border-radius: 14px;
          overflow: hidden;
          background: #d6eaf8;
          position: relative;
          box-shadow: 5px 5px 0 #b8dff0;
          transition: box-shadow 0.2s;
        }
        .faq-item-open { border-color: #7ec8e3; box-shadow: 5px 5px 0 #a0cce8; }
        .faq-item::after {
          content: '';
          position: absolute;
          top: 50%; right: -2px;
          transform: translateY(-50%);
          width: 6px; height: clamp(36px,5vw,56px);
          background: var(--blue);
          border-radius: 4px 0 0 4px;
        }
        .faq-toggle {
          width: 36px; height: 36px;
          border-radius: 8px; flex-shrink: 0;
          background: var(--blue); border: none;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 1.3rem; font-weight: 700;
          cursor: pointer; transition: background 0.2s;
        }
        .faq-toggle:hover { background: #1341b5; }
      `}</style>

      <section style={{ background:'#ffffff', padding:'clamp(72px,9vw,100px) 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'clamp(40px,6vw,56px)' }}>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,4vw,2.8rem)', color:'var(--blue)', lineHeight:1.08, letterSpacing:'-0.01em' }}>
              Frequently Asked{' '}
              <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>QUESTIONS?</span>
            </h2>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'12px', maxWidth:'820px', margin:'0 auto' }}>
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={i} className={`faq-item${isOpen ? ' faq-item-open' : ''}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'clamp(14px,2vw,18px) clamp(16px,2.5vw,22px)', background:'transparent', border:'none', cursor:'pointer', gap:'16px' }}
                  >
                    <span className="font-display font-black" style={{ fontSize:'clamp(0.78rem,1.4vw,0.88rem)', letterSpacing:'0.04em', color:'var(--blue)', textAlign:'left', textTransform:'uppercase' }}>
                      {faq.q}
                    </span>
                    <div className="faq-toggle">{isOpen ? '−' : '+'}</div>
                  </button>

                  {isOpen && (
                    <div style={{ padding:'0 clamp(16px,2.5vw,22px) clamp(16px,2.5vw,22px)', borderTop:'1.5px solid rgba(26,86,219,0.15)' }}>
                      <p style={{ fontSize:'0.88rem', color:'rgba(12,26,78,0.72)', lineHeight:1.8, marginTop:'14px' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}