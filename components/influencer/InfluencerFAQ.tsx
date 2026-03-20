'use client'
import { useState } from 'react'

const FAQS = [
  { q:'How do you find/source influencers?', a:"We collaborate with influencer marketing platforms that enable us to communicate, manage, and report on campaigns for our clients and the influencers we match them with. We're also able to filter out people with fake followers, making sure you get the best possible outcome from your influencer marketing campaigns." },
  { q:'How do you measure ROI for your customers?', a:"We offer tracking links and hashtags to monitor performance — all data is centralized in one easy-to-use dashboard. We take into account all costs, including agency service fees, creator costs, and product costs. We provide detailed performance reports and regular updates. For E-commerce, we track via an affiliate software or system that the client already has in place." },
  { q:'How much do influencers cost?', a:"This varies per influencer but we will work with you and the creator to negotiate a fair price. Contracts can range from one post to a multi-month deal. We will take into account factors such as reach, engagement rate, and other metrics to negotiate the best possible deal for you. In some cases, we can offer discounts or trade-outs for products or services with micro influencers." },
  { q:'What platforms can you help with?', a:"We can help execute influencer campaigns for YouTube, Instagram, TikTok, LinkedIn, in-person events, and blogs. No matter what audience you need to reach, we can find the perfect influencers for your campaign. If video is the best way to showcase your products, we have an in-house media production team that can assist your influencer with creation or post-production work." },
  { q:'Are the influencers signed to you?', a:"No, we use multiple search strategies through influencer marketing tools. We can search across all social media platforms and handle all the legwork for running a successful influencer campaign." },
  { q:'Do you handle product logistics?', a:"Unfortunately, we do not have the capability to store a product or products. You would be responsible for sending the product to clients, although there are certain cases where we can discuss exceptions." },
]

export default function InfluencerFAQ() {
  const [open, setOpen] = useState<number|null>(0)
  return (
    <>
      <style>{`
        .ifaq-item { border:2px solid #fec4a0; border-radius:14px; overflow:hidden; background:#fff7ed; position:relative; box-shadow:5px 5px 0 #fec4a0; transition:box-shadow 0.2s; margin-bottom:12px; }
        .ifaq-item-open { border-color:var(--inf-orange); box-shadow:5px 5px 0 rgba(249,115,22,0.3); }
        .ifaq-item::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:6px; height:clamp(36px,5vw,56px); background:var(--inf-orange); border-radius:4px 0 0 4px; }
        .ifaq-toggle { width:36px; height:36px; border-radius:8px; flex-shrink:0; background:var(--inf-orange); border:none; display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.3rem; font-weight:700; cursor:pointer; transition:background 0.2s; }
        .ifaq-toggle:hover { background:var(--inf-orange-dark,#ea580c); }
      `}</style>

      <section style={{background:'#fff7ed',padding:'clamp(72px,9vw,100px) 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--inf-orange)',marginBottom:'8px'}}>GOT QUESTIONS?</p>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.7rem,4vw,2.8rem)',color:'#1c0a00',lineHeight:1.08,letterSpacing:'-0.01em',maxWidth:'700px',margin:'0 auto'}}>
              FREQUENTLY ASKED{' '}
              <span style={{color:'var(--inf-orange)',textDecoration:'underline',textDecorationColor:'var(--inf-orange)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>QUESTIONS</span>
            </h2>
          </div>
          <div style={{maxWidth:'860px',margin:'0 auto'}}>
            {FAQS.map((faq,i)=>{
              const isOpen = open===i
              return (
                <div key={i} className={`ifaq-item${isOpen?' ifaq-item-open':''}`}>
                  <button onClick={()=>setOpen(isOpen?null:i)} style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'clamp(14px,2vw,18px) clamp(16px,2.5vw,22px)',background:'transparent',border:'none',cursor:'pointer',gap:'16px'}}>
                    <span className="font-display font-black" style={{fontSize:'clamp(0.78rem,1.4vw,0.88rem)',letterSpacing:'0.04em',color:'#1c0a00',textAlign:'left',textTransform:'uppercase'}}>{faq.q}</span>
                    <div className="ifaq-toggle">{isOpen?'−':'+'}</div>
                  </button>
                  {isOpen&&(
                    <div style={{padding:'0 clamp(16px,2.5vw,22px) clamp(16px,2.5vw,22px)',borderTop:'1.5px solid rgba(249,115,22,0.2)'}}>
                      <p style={{fontSize:'0.88rem',color:'rgba(28,10,0,0.72)',lineHeight:1.8,marginTop:'14px'}}>{faq.a}</p>
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