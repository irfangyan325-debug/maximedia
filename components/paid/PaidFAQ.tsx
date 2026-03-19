'use client'
import { useState } from 'react'

const FAQS = [
  { q:'How do you measure return from social media ads?', a:'We will establish measurable objectives to track progress month by month and then monitor campaigns daily using built-in tools and external applications to evaluate engagement with your advertisements. We will also provide performance reports regularly and hold internal strategy meetings to ensure continued success with your paid social media strategy.' },
  { q:'Where can you run advertisements?', a:'We have the ability to strategize and manage successful campaigns on every social media platform, including Facebook, Instagram, TikTok, LinkedIn, Pinterest, Snapchat, YouTube and more. With MAXIMEDIA guiding your brand, you can expect to see maximum growth and success.' },
  { q:'What is the length of your marketing contracts?', a:"We recognize that every business has unique needs, that's why we offer flexibility when deciding on the duration of your contract. The length of your contract will be tailored to the scope of your campaigns and the estimated time required to achieve a significant return on your investment." },
  { q:'Do you create ad visuals and copy?', a:'Yes, your account manager will collaborate with our in-house production studio team and they will ideate and design visual assets that support the campaign goals.' },
  { q:'Do you track conversions for your customers?', a:'Our team will help you monitor and report on the key performance indicators (KPIs) we have established, whether that be increasing brand recognition, generating leads, or promoting sales.' },
  { q:'What other services does MAXIMEDIA offer?', a:'We can also assist with organic social, content creation, analytics and ROI analysis, digital marketing and creative production. Additionally, our team of experienced professionals can help you develop an effective social media strategy that ties it all together. Our customers range from large and midsize businesses to non-profits and local businesses.' },
]

export default function PaidFAQ() {
  const [open, setOpen] = useState<number|null>(0)
  return (
    <>
      <style>{`
        .pfaq-item { border:2px solid #b8dff0; border-radius:14px; overflow:hidden; background:#d6eaf8; position:relative; box-shadow:5px 5px 0 #b8dff0; transition:box-shadow 0.2s; margin-bottom:12px; }
        .pfaq-item-open { border-color:#7ec8e3; box-shadow:5px 5px 0 #a0cce8; }
        .pfaq-item::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:6px; height:clamp(36px,5vw,56px); background:var(--blue); border-radius:4px 0 0 4px; }
        .pfaq-toggle { width:36px; height:36px; border-radius:8px; flex-shrink:0; background:var(--blue); border:none; display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.3rem; font-weight:700; cursor:pointer; transition:background 0.2s; }
        .pfaq-toggle:hover { background:#1341b5; }
      `}</style>

      <section style={{background:'#f2f5fc',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--yellow)',marginBottom:'8px'}}>GOT QUESTIONS?</p>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.7rem,4vw,2.8rem)',color:'var(--blue)',lineHeight:1.08,letterSpacing:'-0.01em',maxWidth:'700px',margin:'0 auto'}}>
              FREQUENTLY ASKED{' '}
              <span style={{color:'var(--yellow)',textDecoration:'underline',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>QUESTIONS</span>
            </h2>
          </div>
          <div style={{maxWidth:'860px',margin:'0 auto'}}>
            {FAQS.map((faq,i)=>{
              const isOpen = open===i
              return (
                <div key={i} className={`pfaq-item${isOpen?' pfaq-item-open':''}`}>
                  <button onClick={()=>setOpen(isOpen?null:i)} style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'clamp(14px,2vw,18px) clamp(16px,2.5vw,22px)',background:'transparent',border:'none',cursor:'pointer',gap:'16px'}}>
                    <span className="font-display font-black" style={{fontSize:'clamp(0.78rem,1.4vw,0.88rem)',letterSpacing:'0.04em',color:'var(--blue)',textAlign:'left',textTransform:'uppercase'}}>{faq.q}</span>
                    <div className="pfaq-toggle">{isOpen?'−':'+'}</div>
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