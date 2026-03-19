'use client'
import { useState } from 'react'

const FAQS = [
  { q:'What is social media content creation?', a:"Social media content creation is the art of preparing incredible content resources (images, graphics, videos, social paid ads, and more) to be used for promotion or otherwise on social media." },
  { q:'Why should I hire a social media content creation company?', a:"Smaller businesses often can't afford the tools or don't have time to learn more about the creative and production process. Larger businesses do, but they often don't have the time to invest in the process in a way that turns out truly valuable results. A social media content creation company can help brands of all sizes — from short-form to long-form video to animated graphics, instantly creating a strategy and turning out incredible content that perfectly fits your brand guidelines." },
  { q:'What is a social media content creator?', a:"We're the brains behind the creative. The team that will stay up all hours to make sure you get the results your business needs to succeed. From making it 'snow' in the sunny south for a perfect winter wonderland client shoot, to pouring syrup over a pile of waffles — we're the imaginative and innovative solution to social media content creation." },
  { q:'How do I come up with social media content ideas?', a:"Social media content creation and promotion can be tricky. Oftentimes, the best way to create social media content is to step back, look at the big picture, grab some coffee, embrace your inner creativity, and run with it. A key ingredient to social content creation is also making sure you're following a particular social media marketing strategy — without goals to track, it's difficult to measure your headway." },
  { q:'How Can I Boost Engagement?', a:"Engaging with your audience is essential to successful social media content creation. One way to do this is by responding quickly to comments and questions asked on your posts. You can also create content that's shared across multiple platforms, and engage through different channels like live video, sponsored ads, digital influencers, and more." },
  { q:'Why Choose MAXIMEDIA?', a:"MAXIMEDIA is a full-service social media company, helping global brands reach their target audiences with content that resonates and drives engagement. We are passionate about enabling our clients to expand their brand reach and share their stories with the world on social media. Our mission is to provide innovative solutions for better storytelling through tailored strategies designed to capture meaningful connections and amplify success." },
]

export default function ContentFAQ() {
  const [open, setOpen] = useState<number|null>(0)
  return (
    <>
      <style>{`
        .cfq-item { border:2px solid #b8dff0; border-radius:14px; overflow:hidden; background:#d6eaf8; position:relative; box-shadow:5px 5px 0 #b8dff0; transition:box-shadow 0.2s; margin-bottom:12px; }
        .cfq-item-open { border-color:#7ec8e3; box-shadow:5px 5px 0 #a0cce8; }
        .cfq-item::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:6px; height:clamp(36px,5vw,56px); background:var(--blue); border-radius:4px 0 0 4px; }
        .cfq-toggle { width:36px; height:36px; border-radius:8px; flex-shrink:0; background:var(--blue); border:none; display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.3rem; font-weight:700; cursor:pointer; transition:background 0.2s; }
        .cfq-toggle:hover { background:#1341b5; }
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
                <div key={i} className={`cfq-item${isOpen?' cfq-item-open':''}`}>
                  <button onClick={()=>setOpen(isOpen?null:i)} style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'clamp(14px,2vw,18px) clamp(16px,2.5vw,22px)',background:'transparent',border:'none',cursor:'pointer',gap:'16px'}}>
                    <span className="font-display font-black" style={{fontSize:'clamp(0.78rem,1.4vw,0.88rem)',letterSpacing:'0.04em',color:'var(--blue)',textAlign:'left',textTransform:'uppercase'}}>{faq.q}</span>
                    <div className="cfq-toggle">{isOpen?'−':'+'}</div>
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