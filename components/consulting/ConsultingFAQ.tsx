'use client'
import { useState } from 'react'

const FAQS = [
  { q:'What is social media consulting?', a:"Social media consulting is a service that helps businesses develop and implement an effective social media marketing strategy. A consultant works with a business to analyze their current social media presence, identify areas for improvement, and create a plan for achieving their goals on social media." },
  { q:'Why do I need social media consulting?', a:"Social media marketing can be complex and time-consuming. Working with a consultant can help you save time and resources while still achieving your desired outcomes. A consultant can also provide expertise and insights that you may not have in-house, allowing you to develop a more effective strategy." },
  { q:'How long does social media consulting last?', a:"Social media consulting services can vary in length. At MAXIMEDIA, our consulting packages last for three months and include a set amount of consulting hours that can be used for calls and document review." },
  { q:'What is the cost of social media consulting?', a:"At MAXIMEDIA, our consulting packages start at $1,500 for 10 hours of consulting over three months, and range up to $5,000 for 50 hours of consulting over three months. We also offer custom hourly consulting starting from 2 hours." },
  { q:'How can I measure the success of my social media marketing efforts?', a:"Measuring the success of your social media marketing efforts can be done by tracking key performance indicators (KPIs) such as engagement rate, reach, click-through rate, conversion rate, and more. A consultant can help you identify the most relevant KPIs for your business and track progress over time." },
  { q:'How does MAXIMEDIA approach social media consulting?', a:"At MAXIMEDIA, we take a collaborative approach to social media consulting. We work closely with our clients to understand their unique goals and objectives, and develop a customized approach tailored to their specific needs. We also use data-driven insights to guide our strategy and tactics, and we're always looking for ways to optimize and improve our approach." },
]

export default function ConsultingFAQ() {
  const [open, setOpen] = useState<number|null>(0)

  return (
    <>
      <style>{`
        .cfaq-section { background:var(--con-dark,#111); padding:clamp(72px,9vw,100px) 0; }
        .cfaq-item { border:1.5px solid var(--con-border,rgba(255,255,255,0.1)); border-radius:14px; overflow:hidden; background:var(--con-card,#1a1a1a); position:relative; box-shadow:none; transition:border-color 0.2s; margin-bottom:10px; }
        .cfaq-item-open { border-color:rgba(245,197,24,0.4); }
        .cfaq-item::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:4px; height:clamp(36px,5vw,52px); background:var(--con-yellow,#f5c518); border-radius:4px 0 0 4px; opacity:0; transition:opacity 0.2s; }
        .cfaq-item-open::after { opacity:1; }
        .cfaq-toggle { width:36px; height:36px; border-radius:8px; flex-shrink:0; background:rgba(245,197,24,0.15); border:1.5px solid rgba(245,197,24,0.3); display:flex; align-items:center; justify-content:center; color:var(--con-yellow,#f5c518); font-size:1.2rem; font-weight:700; cursor:pointer; transition:background 0.2s; }
        .cfaq-toggle-open { background:var(--con-yellow,#f5c518); color:#0a0a0a; border-color:var(--con-yellow,#f5c518); }
        .cfaq-toggle:hover { background:rgba(245,197,24,0.25); }
      `}</style>

      <section className="cfaq-section">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--con-yellow,#f5c518)',marginBottom:'8px'}}>GOT QUESTIONS?</p>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.7rem,4vw,2.8rem)',color:'#fff',lineHeight:1.08,letterSpacing:'-0.01em',maxWidth:'700px',margin:'0 auto'}}>
              FREQUENTLY ASKED{' '}
              <span style={{color:'var(--con-yellow,#f5c518)',textDecoration:'underline',textDecorationColor:'var(--con-yellow,#f5c518)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>QUESTIONS</span>
            </h2>
          </div>

          <div style={{maxWidth:'860px',margin:'0 auto'}}>
            {FAQS.map((faq,i)=>{
              const isOpen = open===i
              return (
                <div key={i} className={`cfaq-item${isOpen?' cfaq-item-open':''}`}>
                  <button onClick={()=>setOpen(isOpen?null:i)} style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'clamp(14px,2vw,18px) clamp(16px,2.5vw,22px)',background:'transparent',border:'none',cursor:'pointer',gap:'16px'}}>
                    <span className="font-display font-black" style={{fontSize:'clamp(0.78rem,1.4vw,0.88rem)',letterSpacing:'0.04em',color:'rgba(255,255,255,0.85)',textAlign:'left',textTransform:'uppercase'}}>{faq.q}</span>
                    <div className={`cfaq-toggle${isOpen?' cfaq-toggle-open':''}`}>{isOpen?'−':'+'}</div>
                  </button>
                  {isOpen&&(
                    <div style={{padding:'0 clamp(16px,2.5vw,22px) clamp(16px,2.5vw,22px)',borderTop:'1px solid rgba(255,255,255,0.06)'}}>
                      <p style={{fontSize:'0.88rem',color:'rgba(255,255,255,0.55)',lineHeight:1.8,marginTop:'14px'}}>{faq.a}</p>
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