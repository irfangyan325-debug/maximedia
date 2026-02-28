'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TESTIMONIALS, SITE } from '@/lib/data'

/* ─────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────── */
const SERVICES_LIST = [
  'Social Media Strategy', 'Social Selling',
  'Social Media Management', 'Data Analysis & ROI Modeling',
  'Community Management', 'Paid Social Advertising',
  'Influencer Marketing', 'Content Production',
]
const BUDGET_OPTIONS = ['Under $1,000/mo','$1,000–$3,000/mo','$3,000–$5,000/mo','$5,000–$10,000/mo','$10,000+/mo']

const PROCESS_STEPS = [
  { num: '01', title: 'Initial Discovery Call',   desc: "We'll discuss your goals and analyze your current social media presence." },
  { num: '02', title: 'Optional Follow Up',        desc: 'Want to know more? Schedule another call to discuss in more detail.' },
  { num: '03', title: 'Custom Proposal',           desc: 'We provide recommendations for a customized strategy to achieve your goals.' },
  { num: '04', title: 'Partnership',               desc: "This is where the magic happens. We kick off your strategy and boost your presence." },
]

const FAQS = [
  { q: 'When will I receive my proposal?', a: 'We can turn around a personalized proposal within one business day based on your needs and customization.' },
  { q: 'What does it cost?', a: 'The cost of our services is tailored to your specific objectives. On average, engagements range from $5,000 to $50,000 depending on scope.' },
  { q: 'Can you do an audit before a proposal?', a: 'Yes! We are happy to audit your social profiles before we begin and give you actionable insights we would apply.' },
  { q: 'Where can I send an RFP?', a: `Please submit your RFP to ${SITE.email}` },
]

const inputStyle = (focused: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '13px 16px',
  borderRadius: '8px',
  border: `1.5px solid ${focused ? 'var(--blue)' : 'rgba(26,86,219,0.2)'}`,
  background: '#ffffff',
  color: '#0c1a4e',
  fontSize: '0.88rem',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
})

/* ─────────────────────────────────────────────────────
   SECTION 1 — Hero Banner
───────────────────────────────────────────────────── */
function ContactHero() {
  return (
    <section style={{ background: 'var(--blue)', paddingTop: 'calc(var(--nav-h) + 60px)', paddingBottom: '80px', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
      {/* Floating decorations */}
      <div style={{ position:'absolute', top:'16px', left:'8%', fontSize:'3rem', opacity:0.7, pointerEvents:'none' }}>⭐</div>
      <div style={{ position:'absolute', top:'30px', right:'8%', fontSize:'2.5rem', opacity:0.7, pointerEvents:'none' }}>❤️</div>
      <div style={{ position:'absolute', bottom:'20px', left:'5%', fontSize:'2.5rem', opacity:0.6, pointerEvents:'none' }}>💬</div>
      <div style={{ position:'absolute', bottom:'20px', right:'5%', fontSize:'2.5rem', opacity:0.6, pointerEvents:'none' }}>👤</div>

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <h1 className="font-display font-black uppercase" style={{
          fontSize: 'clamp(2.2rem,5vw,3.6rem)', lineHeight:1.1,
          color: '#ffffff', marginBottom:'20px', letterSpacing:'-0.01em',
        }}>
          CONNECT <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationColor:'var(--yellow)', textDecorationThickness:'5px', textUnderlineOffset:'6px' }}>WITH US!</span>
        </h1>
        <p style={{ fontSize:'1.05rem', color:'rgba(255,255,255,0.82)', maxWidth:'560px', margin:'0 auto', lineHeight:1.75 }}>
          Interested in receiving a free custom proposal or learning more about our robust social media services?
          Fill out this form to connect with a member of our expert team!
        </p>
      </div>

      {/* Wave bottom */}
      <div style={{ position:'absolute', bottom:-2, left:0, right:0, lineHeight:0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }} preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   SECTION 2 — Form + Partner Info
───────────────────────────────────────────────────── */
function ContactFormSection() {
  const [checked, setChecked] = useState<string[]>([])
  const [agreed, setAgreed] = useState(false)
  const [focusedField, setFocusedField] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const toggle = (s: string) => setChecked(p => p.includes(s) ? p.filter(x=>x!==s) : [...p,s])

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  const Checkbox = ({ id, checked: c, onChange }: { id:string; checked:boolean; onChange:()=>void }) => (
    <div onClick={onChange} style={{
      width:'16px', height:'16px', borderRadius:'4px', flexShrink:0, cursor:'pointer', transition:'all 0.15s',
      border:`2px solid ${c ? 'var(--blue)' : 'rgba(26,86,219,0.3)'}`,
      background: c ? 'var(--blue)' : '#fff',
      display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      {c && <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
    </div>
  )

  return (
    <section style={{ background:'#ffffff', padding:'80px 0 90px' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:'64px', alignItems:'start' }}>

          {/* LEFT — partner info + process steps */}
          <div>
            {/* Icon + heading */}
            <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'20px' }}>
              <div style={{ width:'52px', height:'52px', borderRadius:'14px', background:'linear-gradient(135deg, var(--blue), #1341b5)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.6rem', flexShrink:0 }}>🤝</div>
              <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.1rem,2vw,1.35rem)', lineHeight:1.2, color:'var(--blue)', letterSpacing:'-0.01em' }}>
                YOUR PARTNER IN SOCIAL MEDIA SUCCESS
              </h2>
            </div>
            <p style={{ fontSize:'0.9rem', color:'rgba(12,26,78,0.62)', lineHeight:1.75, marginBottom:'36px' }}>
              Get to know our team and unlock the full potential of your social media presence with our personalized strategies and expert guidance.
            </p>

            {/* PROCESS label */}
            <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 14px', background:'var(--blue)', borderRadius:'100px', marginBottom:'24px' }}>
              <span className="font-display font-black uppercase" style={{ fontSize:'0.72rem', letterSpacing:'0.12em', color:'#fff' }}>PROCESS</span>
            </div>
            <p style={{ fontSize:'0.82rem', color:'rgba(12,26,78,0.55)', marginBottom:'24px', lineHeight:1.6 }}>
              Your brand deserves the best social media services available in the industry, and we deliver with world-class, white-glove quality.
            </p>

            {/* Steps */}
            <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.num} style={{ display:'flex', gap:'16px', position:'relative', paddingBottom: i < PROCESS_STEPS.length-1 ? '24px' : '0' }}>
                  {/* Vertical connector line */}
                  {i < PROCESS_STEPS.length-1 && (
                    <div style={{ position:'absolute', left:'19px', top:'40px', bottom:'0', width:'2px', background:'rgba(26,86,219,0.12)' }} />
                  )}
                  {/* Number circle */}
                  <div style={{
                    width:'40px', height:'40px', borderRadius:'50%', flexShrink:0,
                    background: i===0 ? 'var(--blue)' : 'rgba(26,86,219,0.1)',
                    border:`2px solid ${i===0 ? 'var(--blue)' : 'rgba(26,86,219,0.2)'}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontWeight:900, fontSize:'0.78rem',
                    color: i===0 ? '#fff' : 'var(--blue)',
                    zIndex:1,
                  }}>
                    {step.num}
                  </div>
                  <div style={{ paddingTop:'8px' }}>
                    <h4 className="font-display font-black uppercase" style={{ fontSize:'0.82rem', color:'var(--blue)', letterSpacing:'0.02em', marginBottom:'4px' }}>{step.title}</h4>
                    <p style={{ fontSize:'0.8rem', color:'rgba(12,26,78,0.55)', lineHeight:1.6 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rocket emoji card */}
            <div style={{ marginTop:'32px', padding:'20px', background:'linear-gradient(135deg, var(--blue), #1341b5)', borderRadius:'16px', display:'flex', alignItems:'center', gap:'16px' }}>
              <span style={{ fontSize:'3rem', filter:'drop-shadow(0 4px 10px rgba(0,0,0,0.2))' }}>🚀</span>
              <div>
                <p className="font-display font-black uppercase" style={{ fontSize:'0.82rem', color:'#fff', letterSpacing:'0.04em', marginBottom:'4px' }}>READY TO LAUNCH?</p>
                <p style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.75)', lineHeight:1.5 }}>Fill out the form and we'll get back to you within 1 business day.</p>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            {submitted ? (
              <div style={{ background:'#fff', border:'2px solid rgba(26,86,219,0.2)', borderRadius:'20px', padding:'60px 40px', textAlign:'center' }}>
                <div style={{ fontSize:'4rem', marginBottom:'16px' }}>🎉</div>
                <h3 className="font-display font-black uppercase" style={{ fontSize:'1.5rem', color:'var(--blue)', marginBottom:'12px' }}>WE'LL BE IN TOUCH!</h3>
                <p style={{ color:'rgba(12,26,78,0.6)', fontSize:'0.93rem', lineHeight:1.7 }}>
                  Thanks for reaching out. A strategist will contact you within 1 business day with your custom proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                {/* Row 1 */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
                  <input required type="text" placeholder="First name*" style={inputStyle(focusedField==='fn')} onFocus={()=>setFocusedField('fn')} onBlur={()=>setFocusedField('')} />
                  <input required type="text" placeholder="Last name*" style={inputStyle(focusedField==='ln')} onFocus={()=>setFocusedField('ln')} onBlur={()=>setFocusedField('')} />
                </div>
                {/* Row 2 */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
                  <input required type="email" placeholder="Email*" style={inputStyle(focusedField==='em')} onFocus={()=>setFocusedField('em')} onBlur={()=>setFocusedField('')} />
                  <input type="text" placeholder="Company name*" style={inputStyle(focusedField==='co')} onFocus={()=>setFocusedField('co')} onBlur={()=>setFocusedField('')} />
                </div>
                {/* Phone */}
                <input type="tel" placeholder="Phone: +1 (123) 123-4567 *" style={inputStyle(focusedField==='ph')} onFocus={()=>setFocusedField('ph')} onBlur={()=>setFocusedField('')} />
                {/* Budget */}
                <div style={{ position:'relative' }}>
                  <select defaultValue="" style={{ ...inputStyle(focusedField==='bu'), appearance:'none', cursor:'pointer', paddingRight:'44px' }} onFocus={()=>setFocusedField('bu')} onBlur={()=>setFocusedField('')}>
                    <option value="" disabled>Budget</option>
                    {BUDGET_OPTIONS.map(b=><option key={b}>{b}</option>)}
                  </select>
                  <div style={{ position:'absolute', right:'12px', top:'50%', transform:'translateY(-50%)', width:'22px', height:'22px', borderRadius:'6px', background:'var(--blue)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'0.7rem', pointerEvents:'none' }}>▾</div>
                </div>
                {/* Services */}
                <div>
                  <p style={{ fontSize:'0.9rem', fontWeight:700, color:'var(--blue)', marginBottom:'10px' }}>Services requested</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px 20px' }}>
                    {SERVICES_LIST.map(s=>(
                      <label key={s} style={{ display:'flex', alignItems:'center', gap:'8px', cursor:'pointer', fontSize:'0.84rem', color:'rgba(12,26,78,0.65)', userSelect:'none' }}>
                        <Checkbox id={s} checked={checked.includes(s)} onChange={()=>toggle(s)} />
                        <span onClick={()=>toggle(s)}>{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Comments */}
                <textarea required placeholder="Project related comments (Required) *" rows={4} style={{ ...inputStyle(focusedField==='cm'), resize:'vertical', minHeight:'100px' }} onFocus={()=>setFocusedField('cm')} onBlur={()=>setFocusedField('')} />
                {/* Consent */}
                <label style={{ display:'flex', alignItems:'flex-start', gap:'10px', cursor:'pointer' }}>
                  <Checkbox id="consent" checked={agreed} onChange={()=>setAgreed(!agreed)} />
                  <span style={{ fontSize:'0.73rem', color:'rgba(12,26,78,0.55)', lineHeight:1.65 }}>
                    I agree to receive communications from MAXIMEDIA, including emails and SMS messages related to my inquiry. Message and data rates may apply. You can unsubscribe at any time. Consent is not a condition of purchase.
                  </span>
                </label>
                {/* Submit */}
                <button type="submit" className="font-display font-black uppercase" style={{
                  padding:'18px 48px', background:'var(--yellow)', color:'#0c1a4e', border:'none',
                  borderRadius:'10px', fontSize:'1rem', letterSpacing:'0.08em', cursor:'pointer',
                  boxShadow:'0 8px 24px rgba(245,197,24,0.4)', transition:'all 0.2s',
                  alignSelf:'flex-start',
                }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 32px rgba(245,197,24,0.45)'}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(245,197,24,0.4)'}}
                >
                  SUBMIT
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   SECTION 3 — Testimonials
───────────────────────────────────────────────────── */
function ContactTestimonials() {
  const LOGO_STYLES: Record<string,{bg:string;text:string}> = {
    'National Park Service':                 { bg:'#1a3f2e', text:'NPS'    },
    'Fras-le':                               { bg:'#c0392b', text:'FRASLE' },
    'Association of Equipment Manufacturers':{ bg:'#1a56db', text:'AEM'    },
  }

  return (
    <section style={{ background:'#f2f5fc', padding:'90px 0' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:'48px' }}>
          <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--blue)', marginBottom:'10px' }}>SOCIAL PROOF</p>
          <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,3.5vw,2.4rem)', color:'var(--blue)', lineHeight:1.1 }}>
            CLIENTS TALK ABOUT US
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px' }}>
          {TESTIMONIALS.slice(0,3).map(t => {
            const logo = LOGO_STYLES[t.company] ?? { bg:'var(--blue)', text:t.company.slice(0,3).toUpperCase() }
            return (
              <div key={t.name} style={{ background:'#fff', border:'1.5px solid rgba(26,86,219,0.1)', borderRadius:'16px', padding:'28px', boxShadow:'0 4px 16px rgba(26,86,219,0.06)', display:'flex', flexDirection:'column' }}>
                {/* Logo + quote icon row */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'20px' }}>
                  <div style={{ width:'48px', height:'48px', borderRadius:'10px', background:logo.bg, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:'0.6rem', letterSpacing:'0.04em', flexShrink:0 }}>
                    {logo.text}
                  </div>
                  <span style={{ fontFamily:'Georgia,serif', fontSize:'3rem', lineHeight:1, color:'var(--yellow)', fontWeight:900, marginTop:'-6px' }}>"</span>
                </div>
                <p style={{ fontSize:'0.85rem', color:'rgba(12,26,78,0.65)', lineHeight:1.75, flex:1, marginBottom:'20px' }}>{t.quote}</p>
                <div style={{ borderTop:'1.5px solid rgba(26,86,219,0.08)', paddingTop:'16px' }}>
                  <p className="font-display font-black uppercase" style={{ fontSize:'0.9rem', color:'var(--blue)', marginBottom:'2px' }}>{t.name}</p>
                  <p style={{ fontSize:'0.78rem', color:'rgba(12,26,78,0.45)' }}>{t.company}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   SECTION 4 — FAQ
───────────────────────────────────────────────────── */
function ContactFAQ() {
  const [open, setOpen] = useState<number|null>(0)

  return (
    <section style={{ background:'#ffffff', padding:'90px 0' }}>
      <div className="container" style={{ maxWidth:'820px' }}>
        <div style={{ textAlign:'center', marginBottom:'48px' }}>
          <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--yellow)', marginBottom:'10px' }}>GOT QUESTIONS?</p>
          <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,3.5vw,2.4rem)', color:'var(--blue)', lineHeight:1.1 }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
          {FAQS.map((faq,i) => (
            <div key={i} style={{
              border:`2px solid ${open===i ? 'rgba(26,86,219,0.35)' : 'rgba(26,86,219,0.12)'}`,
              borderRadius:'14px', overflow:'hidden',
              transition:'border-color 0.2s',
              boxShadow: open===i ? '0 6px 24px rgba(26,86,219,0.08)' : 'none',
            }}>
              {/* Question row */}
              <button
                onClick={()=>setOpen(open===i ? null : i)}
                style={{
                  width:'100%', padding:'20px 24px', display:'flex', justifyContent:'space-between', alignItems:'center',
                  background:'none', border:'none', cursor:'pointer', textAlign:'left', gap:'16px',
                }}
              >
                <span className="font-display font-black" style={{ fontSize:'0.95rem', color:'var(--blue)', letterSpacing:'0.01em' }}>{faq.q}</span>
                <div style={{
                  width:'32px', height:'32px', borderRadius:'8px', flexShrink:0,
                  background: open===i ? 'var(--blue)' : 'rgba(26,86,219,0.08)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color: open===i ? '#fff' : 'var(--blue)',
                  fontSize:'1.2rem', fontWeight:900, transition:'all 0.2s',
                }}>
                  {open===i ? '−' : '+'}
                </div>
              </button>
              {/* Answer */}
              {open===i && (
                <div style={{ padding:'0 24px 20px' }}>
                  <p style={{ fontSize:'0.88rem', color:'rgba(12,26,78,0.65)', lineHeight:1.75, borderTop:'1px solid rgba(26,86,219,0.08)', paddingTop:'16px' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   SECTION 5 — Bottom CTA / Contact info
───────────────────────────────────────────────────── */
function ContactBottomCTA() {
  return (
    <section style={{ background:'#d6eaf8', padding:'90px 0 100px', overflow:'hidden', position:'relative' }}>
      <div aria-hidden style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(ellipse 70% 90% at 0% 50%, rgba(26,86,219,0.06) 0%, transparent 60%)' }} />
      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'center' }}>

          {/* Left */}
          <div>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.8rem,3.5vw,2.6rem)', lineHeight:1.1, color:'var(--blue)', marginBottom:'6px' }}>
              READY TO MAXIMIZE YOUR
            </h2>
            <h2 className="font-display font-black uppercase" style={{
              fontSize:'clamp(1.8rem,3.5vw,2.6rem)', lineHeight:1.1, marginBottom:'20px',
              color:'var(--yellow)',
              textDecoration:'underline', textDecorationColor:'var(--yellow)',
              textDecorationThickness:'4px', textUnderlineOffset:'6px',
            }}>
              SOCIAL MEDIA POTENTIAL?
            </h2>
            <p style={{ fontSize:'0.95rem', fontWeight:700, color:'var(--blue)', lineHeight:1.65, marginBottom:'28px', maxWidth:380 }}>
              We&apos;d love to hear about your organization&apos;s goals on social media. Get in touch with us today!
            </p>

            {/* Big faded email */}
            <a href={`mailto:${SITE.email}`} className="font-display font-black uppercase" style={{
              fontSize:'clamp(0.9rem,2vw,1.3rem)', color:'rgba(26,86,219,0.35)',
              letterSpacing:'0.02em', display:'block', marginBottom:'40px', textDecoration:'none', transition:'color 0.2s',
            }}
              onMouseEnter={e=>e.currentTarget.style.color='var(--blue)'}
              onMouseLeave={e=>e.currentTarget.style.color='rgba(26,86,219,0.35)'}
            >
              {SITE.email.toUpperCase()}
            </a>

            {/* Address card */}
            <div style={{ display:'flex', alignItems:'flex-start', gap:'16px' }}>
              <div style={{ width:'52px', height:'52px', borderRadius:'50%', background:'var(--yellow)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.4rem', flexShrink:0, boxShadow:'0 4px 16px rgba(245,197,24,0.3)' }}>📍</div>
              <div>
                <p style={{ fontWeight:800, fontSize:'0.88rem', color:'#0c1a4e', marginBottom:'4px' }}>MAXIMEDIA: THE Social Media Agency</p>
                <p style={{ fontSize:'0.84rem', color:'rgba(12,26,78,0.55)', lineHeight:1.8 }}>{SITE.address}<br/>{SITE.city}<br/>{SITE.phone}</p>
              </div>
            </div>
          </div>

          {/* Right — illustration */}
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'24px' }}>
            <div style={{ width:'200px', height:'200px', borderRadius:'50%', background:'linear-gradient(135deg, var(--blue), #1341b5)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'7rem', boxShadow:'0 24px 60px rgba(26,86,219,0.3)' }}>
              👤
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              {[['❤️','1.2M Engagements'], ['👍','500+ Clients'], ['📈','3,700% Growth']].map(([ic,label])=>(
                <div key={label} style={{ display:'flex', alignItems:'center', gap:'10px', background:'#fff', borderRadius:'12px', padding:'12px 16px', boxShadow:'0 4px 16px rgba(26,86,219,0.1)', border:'1.5px solid rgba(26,86,219,0.1)' }}>
                  <span style={{ fontSize:'1.3rem' }}>{ic}</span>
                  <span style={{ fontSize:'0.8rem', fontWeight:800, color:'var(--blue)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactTestimonials />
      <ContactFAQ />
      <ContactBottomCTA />
    </>
  )
}
