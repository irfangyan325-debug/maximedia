'use client'
import { useState } from 'react'

const FAQS = [
  { q:'What is Social Media Management?', a:'Social media management covers every step of maintaining a strong online presence — from planning and creating content to scheduling, publishing, engaging with your audience, and tracking performance. Professional social media management ensures your content is tailored for your target audience and optimized for each platform, maximizing reach, relevance, and results.' },
  { q:'What does management consist of?', a:'Our social media management provides a full service option that allows our team to do it all and the option to specialize and focus on a specific component. It includes daily account management, managing your social community, content production, paid social management, social listening, influencer marketing management, ongoing strategy development, and data analysis/reporting.' },
  { q:'What platforms do you manage?', a:"We provide social media services for every major platform: Facebook, Instagram, TikTok, LinkedIn, Threads, X, Pinterest, YouTube, Google, Reddit, Quora, and more. Our social media managers are platform specialists, trained to focus on the channels that best align with your audience, brand voice, and business goals." },
  { q:'Do you respond to comments from customers?', a:"Yes! We believe maintaining a positive online presence and building relationships with your customers happens through effective online engagement. Our team of community managers are trained to not only respond to all inbound messages but also provide outbound engagement opportunities. We're here to help you with general monitoring and listening." },
  { q:'Do you create the content for businesses?', a:'With the help of our in-house production studio, we specialize in creating high-quality, engaging, and on-brand social media content to help you achieve your goals. Having our own in-house production studio allows us to create custom content tailored to our clients\' specific needs and goals, while also allowing us to be efficient and collaborative.' },
  { q:'How do I know what is working?', a:'Our team is working alongside you to develop concrete quarterly goals. During our partnership, we will be measuring our progress on a monthly basis to ensure we are on pace to reach our goals. Social media is also changing very quickly and we believe our plan needs to evolve with it.' },
  { q:'Will I be able to approve content?', a:'Yes, creating a content approval process is all about reducing the time, effort and energy involved in getting your social media content approved. We have a streamlined approval process that can allow us to publish content to your social media accounts with multiple stakeholders involved.' },
  { q:'Do you work with influencers?', a:'Yes! We offer influencer marketing as an additional service. We have an entire team that specializes in managing influencers and can create a tailored strategy to help you reach your goals. Our team will work closely with you to identify the best influencers for your brand, curate campaigns, negotiate terms and manage the entire process from start to finish.' },
]

export default function MgmtFAQ() {
  const [open, setOpen] = useState<number|null>(0)
  return (
    <>
      <style>{`
        .mfaq-item { border:2px solid #b8dff0; border-radius:14px; overflow:hidden; background:#d6eaf8; position:relative; box-shadow:5px 5px 0 #b8dff0; transition:box-shadow 0.2s; }
        .mfaq-item-open { border-color:#7ec8e3; box-shadow:5px 5px 0 #a0cce8; }
        .mfaq-item::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:6px; height:clamp(36px,5vw,56px); background:var(--blue); border-radius:4px 0 0 4px; }
        .mfaq-toggle { width:36px; height:36px; border-radius:8px; flex-shrink:0; background:var(--blue); border:none; display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.3rem; font-weight:700; cursor:pointer; transition:background 0.2s; }
        .mfaq-toggle:hover { background:#1341b5; }
      `}</style>
      <section style={{ background:'#f2f5fc', padding:'clamp(72px,9vw,100px) 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'clamp(40px,6vw,56px)' }}>
            <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--yellow)', marginBottom:'8px' }}>GOT QUESTIONS?</p>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,4vw,2.8rem)', color:'var(--blue)', lineHeight:1.08, letterSpacing:'-0.01em', maxWidth:'700px', margin:'0 auto 16px' }}>
              FREQUENTLY ASKED{' '}
              <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>QUESTIONS</span>
            </h2>
            <p style={{ fontSize:'0.95rem', color:'rgba(12,26,78,0.55)', maxWidth:'600px', margin:'0 auto', lineHeight:1.75 }}>
              We have a proven track record of delivering outstanding results for both small and large brands. Here are answers to our most common questions.
            </p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'12px', maxWidth:'860px', margin:'0 auto' }}>
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={i} className={`mfaq-item${isOpen ? ' mfaq-item-open' : ''}`}>
                  <button onClick={() => setOpen(isOpen ? null : i)} style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'clamp(14px,2vw,18px) clamp(16px,2.5vw,22px)', background:'transparent', border:'none', cursor:'pointer', gap:'16px' }}>
                    <span className="font-display font-black" style={{ fontSize:'clamp(0.78rem,1.4vw,0.88rem)', letterSpacing:'0.04em', color:'var(--blue)', textAlign:'left', textTransform:'uppercase' }}>{faq.q}</span>
                    <div className="mfaq-toggle">{isOpen ? '−' : '+'}</div>
                  </button>
                  {isOpen && (
                    <div style={{ padding:'0 clamp(16px,2.5vw,22px) clamp(16px,2.5vw,22px)', borderTop:'1.5px solid rgba(26,86,219,0.15)' }}>
                      <p style={{ fontSize:'0.88rem', color:'rgba(12,26,78,0.72)', lineHeight:1.8, marginTop:'14px' }}>{faq.a}</p>
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