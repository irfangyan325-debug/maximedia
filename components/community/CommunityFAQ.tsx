'use client'
import { useState } from 'react'

const FAQS = [
  { q:'What advantages does outsourcing community management have over managing it internally?', a:"Outsourcing community management provides expertise from a dedicated team of professionals with experience across industries. It's also more cost-effective — you avoid hiring and training a dedicated in-house team for every platform. Social media jobs are increasingly specialized and depend on an entire suite of software, making a compelling case for outsourcing to a larger team like MAXIMEDIA." },
  { q:'Can you provide community management support during special holidays or after-hours?', a:'Yes, our team is capable of assisting during special holidays and offering weekend/after-hours support depending on your business needs and chosen scope of work.' },
  { q:'How quickly do you respond to comments, messages, and mentions?', a:'During regular business hours, we aim to respond within 8 hours after a comment, message, or mention has been published. If a comment, message, or mention is sent over the weekend, we respond within 24 hours on average.' },
  { q:'What does reporting look like?', a:"You will receive a report posted either weekly, bi-weekly, or monthly from your social media community manager. It all depends on your needs and outlined scope of work. Our reporting covers everything you need to understand your community and the metrics. We read comments and try to implement ongoing improvements across content and strategy." },
  { q:'How does social listening work?', a:"Utilizing an internal tool, we collect online data, categorize it, and analyze it. We're able to listen to conversations your customers are having online and get a better understanding of how they feel about your brand. We then provide reporting on sentiment, demographic data, engagement opportunities, and more." },
  { q:'What factors impact the price?', a:'Volume of responses to manage and the number of platforms being managed, as well as how many hours of support are needed. Our pricing is also based on your company\'s goals and objectives, so if you need more comprehensive reporting or analytics tools, the price could be higher.' },
  { q:'What are some of the benefits of social listening?', a:'Social listening allows you to gain insights into customer sentiment, uncover opportunities for engagement and growth, and receive feedback from customers in real-time. It also helps you stay ahead of the competition, allows for better targeting and segmentation of your target audience, and can help inform decisions about new product launches or campaigns.' },
  { q:'Do you support multilingual community management?', a:'We can provide support for up to 50+ languages based on your business requirements outlined in your social media strategy and the scope of work you have selected.' },
]

export default function CommunityFAQ() {
  const [open, setOpen] = useState<number|null>(0)
  return (
    <>
      <style>{`
        .cfaq-item { border:2px solid #b8dff0; border-radius:14px; overflow:hidden; background:#d6eaf8; position:relative; box-shadow:5px 5px 0 #b8dff0; transition:box-shadow 0.2s; margin-bottom:12px; }
        .cfaq-item-open { border-color:#7ec8e3; box-shadow:5px 5px 0 #a0cce8; }
        .cfaq-item::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:6px; height:clamp(36px,5vw,56px); background:var(--blue); border-radius:4px 0 0 4px; }
        .cfaq-toggle { width:36px; height:36px; border-radius:8px; flex-shrink:0; background:var(--blue); border:none; display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.3rem; font-weight:700; cursor:pointer; transition:background 0.2s; }
        .cfaq-toggle:hover { background:#1341b5; }
      `}</style>

      <section style={{background:'#f2f5fc',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.7rem,4vw,2.8rem)',color:'var(--blue)',lineHeight:1.08,letterSpacing:'-0.01em',maxWidth:'700px',margin:'0 auto'}}>
              FREQUENTLY ASKED{' '}
              <span style={{color:'var(--yellow)',textDecoration:'underline',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>QUESTIONS</span>
            </h2>
          </div>

          <div style={{maxWidth:'860px',margin:'0 auto'}}>
            {FAQS.map((faq,i)=>{
              const isOpen = open===i
              return (
                <div key={i} className={`cfaq-item${isOpen?' cfaq-item-open':''}`}>
                  <button onClick={()=>setOpen(isOpen?null:i)} style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'clamp(14px,2vw,18px) clamp(16px,2.5vw,22px)',background:'transparent',border:'none',cursor:'pointer',gap:'16px'}}>
                    <span className="font-display font-black" style={{fontSize:'clamp(0.78rem,1.4vw,0.88rem)',letterSpacing:'0.04em',color:'var(--blue)',textAlign:'left',textTransform:'uppercase'}}>{faq.q}</span>
                    <div className="cfaq-toggle">{isOpen?'−':'+'}</div>
                  </button>
                  {isOpen&&(
                    <div style={{padding:'0 clamp(16px,2.5vw,22px) clamp(16px,2.5vw,22px)',borderTop:'1.5px solid rgba(26,86,219,0.15)'}}>
                      <p style={{fontSize:'0.88rem',color:'rgba(12,26,78,0.72)',lineHeight:1.8,marginTop:'14px'}}>{faq.a}</p>
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