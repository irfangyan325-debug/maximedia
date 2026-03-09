'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { TEAM_MEMBERS, SITE } from '@/lib/data'

/* ── Data ─────────────────────────────────────────── */
const STATS = [
  { number: '500+',  label: 'Brands Served',      icon: '🏆' },
  { number: '$50M+', label: 'Ad Spend Managed',    icon: '💰' },
  { number: '98%',   label: 'Client Retention',    icon: '🤝' },
  { number: '10+',   label: 'Years of Experience', icon: '📅' },
]

const VALUES = [
  { icon: '🎯', title: 'Results Above All',      desc: 'Every decision is anchored in your business outcomes — not vanity metrics.' },
  { icon: '💡', title: 'Strategy First',          desc: 'We never execute without a solid strategy. Planning is the foundation of every campaign.' },
  { icon: '🤝', title: 'True Partnership',        desc: 'We embed ourselves in your team, acting as an extension of your own marketing department.' },
  { icon: '📊', title: 'Data-Driven',             desc: 'Our recommendations are backed by real numbers — not gut feelings.' },
  { icon: '🚀', title: 'Relentless Innovation',   desc: 'Social media moves fast. We stay ahead of every algorithm change and platform launch.' },
  { icon: '🌟', title: 'Creative Excellence',     desc: 'Thumb-stopping content requires true creative talent — and we have the best in the business.' },
]

const REVIEW_PLATFORMS = [
  { name: 'Google', icon: '⭐', stars: '5.0', color: '#4285f4' },
  { name: 'Trustpilot', icon: '✓', stars: '4.9', color: '#00b67a' },
  { name: 'G2', icon: 'G2', stars: '4.8', color: '#ff492c' },
  { name: 'AgencySpotter', icon: '🔍', stars: '5.0', color: '#1a56db' },
  { name: 'Clutch', icon: '◆', stars: '4.9', color: '#e63329' },
]

// Avatar colours per team member
const AVATAR_COLORS = [
  'linear-gradient(135deg, #1a56db, #1341b5)',
  'linear-gradient(135deg, #f5c518, #d9a800)',
  'linear-gradient(135deg, #9b59b6, #6c3483)',
  'linear-gradient(135deg, #e74c3c, #c0392b)',
  'linear-gradient(135deg, #2ecc71, #1a8a4a)',
  'linear-gradient(135deg, #e67e22, #ca6f1e)',
]

const PHOTO_EMOJIS = ['👨‍💼','👩‍💼','🧑‍🎨','👩‍💻','👨‍🔬','👩‍🏫']
const PHOTO_BG = [
  'linear-gradient(145deg,#c8d8f5,#a0b8e8)',
  'linear-gradient(145deg,#f5e8c8,#e8d0a0)',
  'linear-gradient(145deg,#c8e8d8,#a0d0b8)',
  'linear-gradient(145deg,#e8c8d8,#d0a0b8)',
  'linear-gradient(145deg,#d8c8f5,#b8a0e8)',
  'linear-gradient(145deg,#f5d8c8,#e8b8a0)',
]

const CULTURE_EMOJIS = ['🎨','🚀','💡','📱','🎯','🌎','🤝','📊','✨','🎉','🌟','💪','🎬','📈','🏆','🎵']

/* ═══════════════════════════════════════════════════
   SECTION 1 — Hero
═══════════════════════════════════════════════════ */
function TeamHero() {
  return (
    <section style={{
      background: 'var(--blue)',
      paddingTop: 'calc(var(--nav-h) + 64px)',
      paddingBottom: '100px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Floating decorations */}
      <div style={{ position:'absolute', top:'20px', left:'8%', fontSize:'2.5rem', opacity:0.7, pointerEvents:'none' }}>⭐</div>
      <div style={{ position:'absolute', top:'40px', right:'7%', fontSize:'2rem', opacity:0.6, pointerEvents:'none' }}>🤝</div>
      <div style={{ position:'absolute', bottom:'80px', left:'5%', fontSize:'3rem', opacity:0.5, pointerEvents:'none' }}>💡</div>
      <div style={{ position:'absolute', bottom:'60px', right:'6%', fontSize:'2.5rem', opacity:0.6, pointerEvents:'none' }}>🚀</div>

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:'48px', alignItems:'center' }}>
          {/* Left */}
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', background:'rgba(255,255,255,0.15)', borderRadius:'100px', marginBottom:'24px' }}>
              <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'var(--yellow)', display:'inline-block', animation:'pulse 2s infinite' }} />
              <span className="font-display font-black uppercase" style={{ fontSize:'0.72rem', letterSpacing:'0.12em', color:'#fff' }}>MEET THE TEAM</span>
            </div>

            <h1 className="font-display font-black uppercase" style={{
              fontSize:'clamp(2.2rem,5vw,3.5rem)', lineHeight:1.08,
              color:'#ffffff', marginBottom:'20px', letterSpacing:'-0.01em',
            }}>
              MEET OUR{' '}
              <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationColor:'var(--yellow)', textDecorationThickness:'5px', textUnderlineOffset:'6px' }}>TEAM</span>
            </h1>

            <p style={{ fontSize:'1.05rem', color:'rgba(255,255,255,0.82)', maxWidth:'540px', lineHeight:1.75, marginBottom:'32px' }}>
              We&apos;re a fun, energetic team of diverse individuals who are passionate about what we do AND what our clients can do with the help of our experienced team.
            </p>
            <p style={{ fontSize:'0.95rem', color:'rgba(255,255,255,0.65)', maxWidth:'520px', lineHeight:1.7, marginBottom:'36px' }}>
              Meet our talented leaders who drive the success of the business and help your brand make waves in the digital world.
            </p>

            <Link href="/contact" className="font-display font-black uppercase" style={{
              display:'inline-flex', alignItems:'center', padding:'16px 36px',
              background:'var(--yellow)', color:'#0c1a4e', borderRadius:'10px',
              fontSize:'0.85rem', letterSpacing:'0.1em', textDecoration:'none',
              boxShadow:'0 6px 24px rgba(245,197,24,0.4)',
            }}>
              GET YOUR FREE CUSTOM PROPOSAL
            </Link>
          </div>

          {/* Right — team photo collage */}
          <div style={{ position:'relative', height:'340px' }}>
            {/* Main big circle */}
            <div style={{ position:'absolute', top:'10px', right:'20px', width:'200px', height:'200px', borderRadius:'50%', background:'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))', border:'2px solid rgba(255,255,255,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'5rem' }}>
              👥
            </div>
            {/* Small circles */}
            {['🎯','📊','🎨','🚀'].map((e,i) => (
              <div key={i} style={{
                position:'absolute',
                top: i===0?'0px' : i===1?'160px' : i===2?'220px' : '60px',
                left: i===0?'20px' : i===1?'10px' : i===2?'160px' : '0px',
                width:'64px', height:'64px', borderRadius:'50%',
                background:'rgba(255,255,255,0.15)',
                border:'2px solid rgba(255,255,255,0.2)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1.8rem',
              }}>
                {e}
              </div>
            ))}
            {/* Stat badge */}
            <div style={{ position:'absolute', bottom:'10px', right:'10px', background:'#fff', borderRadius:'14px', padding:'12px 18px', boxShadow:'0 8px 24px rgba(0,0,0,0.15)' }}>
              <p className="font-display font-black" style={{ fontSize:'1.4rem', color:'var(--blue)', lineHeight:1 }}>500+</p>
              <p style={{ fontSize:'0.7rem', color:'rgba(12,26,78,0.55)', marginTop:'2px' }}>Brands Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div style={{ position:'absolute', bottom:-2, left:0, right:0, lineHeight:0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }} preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 2 — Stats
═══════════════════════════════════════════════════ */
function TeamStats() {
  return (
    <section style={{ background:'#ffffff', padding:'72px 0 60px' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'16px' }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background:'#fff', border:'2px solid rgba(26,86,219,0.12)', borderRadius:'16px', padding:'28px 20px', textAlign:'center', boxShadow:'0 4px 16px rgba(26,86,219,0.06)' }}>
              <div style={{ fontSize:'2.4rem', marginBottom:'10px' }}>{s.icon}</div>
              <div className="font-display font-black" style={{ fontSize:'2rem', color:'var(--blue)', lineHeight:1, marginBottom:'6px' }}>{s.number}</div>
              <div style={{ fontSize:'0.82rem', color:'rgba(12,26,78,0.55)', fontWeight:600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 3 — Featured Leader (CEO) + Partner
═══════════════════════════════════════════════════ */
function TeamLeaders() {
  const leaders = [
    {
      name: TEAM_MEMBERS[0].name,
      role: TEAM_MEMBERS[0].role,
      bio: TEAM_MEMBERS[0].bio,
      tagline: 'CEO of MAXIMEDIA — Passionate Networker | Currently Making the World His Office',
      avatar: PHOTO_EMOJIS[0],
      bg: PHOTO_BG[0],
      flip: false,
    },
    {
      name: TEAM_MEMBERS[1].name,
      role: TEAM_MEMBERS[1].role,
      bio: TEAM_MEMBERS[1].bio,
      tagline: 'Driving Your Brand Revenue to the Top | Currently Cultivating Safe Spaces for Employees',
      avatar: PHOTO_EMOJIS[1],
      bg: PHOTO_BG[1],
      flip: true,
    },
  ]

  return (
    <section style={{ background:'#f2f5fc', padding:'90px 0' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:'56px' }}>
          <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--yellow)', marginBottom:'8px' }}>LEADERSHIP</p>
          <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,3.5vw,2.4rem)', color:'var(--blue)', lineHeight:1.1 }}>
            MEET OUR LEADERSHIP TEAM
          </h2>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'48px' }}>
          {leaders.map((leader) => (
            <div key={leader.name} style={{
              display:'grid',
              gridTemplateColumns: leader.flip ? '1fr 1fr' : '1fr 1fr',
              gap:'56px',
              alignItems:'center',
            }}>
              {/* Photo side */}
              {!leader.flip && (
                <div style={{ display:'flex', justifyContent:'center' }}>
                  <div style={{ width:'320px', height:'380px', borderRadius:'24px', background:leader.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'8rem', boxShadow:'0 20px 60px rgba(26,86,219,0.15)', border:'2px solid rgba(26,86,219,0.1)', position:'relative', overflow:'hidden' }}>
                    <span>{leader.avatar}</span>
                    {/* Role badge */}
                    <div style={{ position:'absolute', bottom:'16px', left:'16px', right:'16px', background:'rgba(255,255,255,0.92)', backdropFilter:'blur(8px)', borderRadius:'10px', padding:'10px 14px' }}>
                      <p className="font-display font-black uppercase" style={{ fontSize:'0.78rem', color:'var(--blue)', letterSpacing:'0.04em' }}>{leader.role}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Text side */}
              <div>
                <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.4rem,2.5vw,2rem)', color:'var(--blue)', marginBottom:'8px', lineHeight:1.1 }}>{leader.name}</h2>
                <p className="font-display font-black uppercase" style={{ fontSize:'0.78rem', color:'var(--yellow)', letterSpacing:'0.06em', marginBottom:'20px' }}>{leader.role}</p>
                <p style={{ fontSize:'0.92rem', color:'rgba(12,26,78,0.68)', lineHeight:1.8, marginBottom:'20px' }}>{leader.bio}</p>
                <p style={{ fontSize:'0.82rem', color:'rgba(12,26,78,0.45)', fontStyle:'italic', lineHeight:1.6, marginBottom:'28px' }}>{leader.tagline}</p>
                <Link href="/contact" className="font-display font-black uppercase" style={{
                  display:'inline-flex', alignItems:'center', gap:'8px',
                  padding:'12px 24px', background:'var(--blue)', color:'#fff',
                  borderRadius:'8px', fontSize:'0.75rem', letterSpacing:'0.1em', textDecoration:'none',
                  transition:'all 0.2s',
                }}>
                  CONTACT {leader.name.split(' ')[0].toUpperCase()} →
                </Link>
              </div>

              {/* Photo side (flipped) */}
              {leader.flip && (
                <div style={{ display:'flex', justifyContent:'center' }}>
                  <div style={{ width:'320px', height:'380px', borderRadius:'24px', background:leader.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'8rem', boxShadow:'0 20px 60px rgba(26,86,219,0.15)', border:'2px solid rgba(26,86,219,0.1)', position:'relative', overflow:'hidden' }}>
                    <span>{leader.avatar}</span>
                    <div style={{ position:'absolute', bottom:'16px', left:'16px', right:'16px', background:'rgba(255,255,255,0.92)', backdropFilter:'blur(8px)', borderRadius:'10px', padding:'10px 14px' }}>
                      <p className="font-display font-black uppercase" style={{ fontSize:'0.78rem', color:'var(--blue)', letterSpacing:'0.04em' }}>{leader.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FullTeamGrid() {
  return (
    <section style={{ background:'#ffffff', padding:'90px 0' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:'52px' }}>
          <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--blue)', marginBottom:'8px' }}>OUR PEOPLE</p>
          <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,3.5vw,2.4rem)', color:'var(--blue)', lineHeight:1.1 }}>
            A TEAM YOU CAN COUNT ON
          </h2>
          <p style={{ fontSize:'0.95rem', color:'rgba(12,26,78,0.55)', maxWidth:'620px', margin:'16px auto 0', lineHeight:1.75 }}>
            Every team member at MAXIMEDIA is not only experienced in the realm of social media marketing but encouraged to bring their creativity, ingenuity and excitement to give your campaigns the human touch they need to drive greater ROI.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px' }}>
          {TEAM_MEMBERS.map((m, i) => (
            <div key={m.name} style={{
              background:'#fff',
              border:'1.5px solid rgba(26,86,219,0.12)',
              borderRadius:'20px',
              overflow:'hidden',
              boxShadow:'0 4px 20px rgba(26,86,219,0.07)',
              transition:'all 0.25s ease',
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(26,86,219,0.14)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(26,86,219,0.07)'}}
            >
              {/* Photo area */}
              <div style={{ height:'200px', background:PHOTO_BG[i%PHOTO_BG.length], display:'flex', alignItems:'center', justifyContent:'center', fontSize:'5.5rem', position:'relative', overflow:'hidden' }}>
                <span style={{ filter:'drop-shadow(0 8px 20px rgba(0,0,0,0.12))' }}>{PHOTO_EMOJIS[i%PHOTO_EMOJIS.length]}</span>
                {/* Decorative dots */}
                <div style={{ position:'absolute', top:'12px', right:'14px', display:'grid', gridTemplateColumns:'repeat(3,5px)', gap:'4px' }}>
                  {Array.from({length:9}).map((_,d)=>(
                    <div key={d} style={{ width:'4px', height:'4px', borderRadius:'50%', background:'rgba(26,86,219,0.2)' }} />
                  ))}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding:'20px 22px 24px' }}>
                <h3 className="font-display font-black uppercase" style={{ fontSize:'1rem', color:'var(--blue)', marginBottom:'4px', letterSpacing:'0.01em' }}>{m.name}</h3>
                <p className="font-display font-black uppercase" style={{ fontSize:'0.7rem', color:'var(--yellow)', letterSpacing:'0.08em', marginBottom:'12px' }}>{m.role}</p>
                <p style={{ fontSize:'0.83rem', color:'rgba(12,26,78,0.62)', lineHeight:1.7 }}>{m.bio}</p>

                {/* Social icons */}
                <div style={{ display:'flex', gap:'8px', marginTop:'16px' }}>
                  {['in','f','𝕏'].map(icon=>(
                    <div key={icon} style={{ width:'30px', height:'30px', borderRadius:'8px', background:'rgba(26,86,219,0.08)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.75rem', fontWeight:900, color:'var(--blue)', cursor:'pointer' }}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCulture() {
  return (
    <section style={{ background:'#f2f5fc', padding:'90px 0', overflow:'hidden' }}>
      <div className="container" style={{ marginBottom:'48px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'56px', alignItems:'center' }}>
          <div>
            <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--yellow)', marginBottom:'10px' }}>OUR CULTURE</p>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.6rem,3vw,2.2rem)', color:'var(--blue)', lineHeight:1.1, marginBottom:'20px' }}>
              OUR COMMITMENT TO{' '}
              <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationColor:'var(--yellow)', textDecorationThickness:'3px', textUnderlineOffset:'5px' }}>DIVERSITY</span>
            </h2>
            <p style={{ fontSize:'0.92rem', color:'rgba(12,26,78,0.68)', lineHeight:1.8, marginBottom:'16px' }}>
              At MAXIMEDIA, we prioritize diversity and inclusion in every aspect of our operations. Being a minority-owned company from day one, we take pride in our diversity-focused hiring process.
            </p>
            <p style={{ fontSize:'0.92rem', color:'rgba(12,26,78,0.68)', lineHeight:1.8, marginBottom:'16px' }}>
              Our team members come from a variety of backgrounds and corners of the world, bringing unique perspectives and talents to the table — an invaluable tool in the marketing world.
            </p>
            <p style={{ fontSize:'0.92rem', color:'rgba(12,26,78,0.68)', lineHeight:1.8 }}>
              Together, we collaborate to create innovative marketing campaigns through next-generation analysis, strategic content production, and more.
            </p>
          </div>

          {/* Culture emoji mosaic */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'10px' }}>
            {CULTURE_EMOJIS.map((e,i)=>(
              <div key={i} style={{
                aspectRatio:'1', borderRadius:'14px',
                background: i%3===0 ? 'linear-gradient(135deg,var(--blue),#1341b5)' : i%3===1 ? 'linear-gradient(135deg,#f2f5fc,#e0e8f8)' : 'linear-gradient(135deg,var(--yellow),#d9a800)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1.8rem',
                boxShadow:'0 4px 12px rgba(26,86,219,0.1)',
              }}>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling culture phrases */}
      <div style={{ overflow:'hidden' }}>
        <div className="marquee-track">
          {Array.from({length:10}).map((_,i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', gap:'16px', paddingRight:'32px', flexShrink:0 }}>
              <span className="font-display font-black uppercase" style={{ fontSize:'clamp(1rem,2vw,1.3rem)', color:'var(--blue)', letterSpacing:'0.04em', whiteSpace:'nowrap' }}>CREATIVE</span>
              <span style={{ color:'var(--yellow)', fontSize:'1.4rem' }}>★</span>
              <span className="font-display font-black uppercase" style={{ fontSize:'clamp(1rem,2vw,1.3rem)', color:'var(--blue)', letterSpacing:'0.04em', whiteSpace:'nowrap' }}>DIVERSE</span>
              <span style={{ color:'var(--yellow)', fontSize:'1.4rem' }}>★</span>
              <span className="font-display font-black uppercase" style={{ fontSize:'clamp(1rem,2vw,1.3rem)', color:'var(--blue)', letterSpacing:'0.04em', whiteSpace:'nowrap' }}>RESULTS-DRIVEN</span>
              <span style={{ color:'var(--yellow)', fontSize:'1.4rem' }}>★</span>
              <span className="font-display font-black uppercase" style={{ fontSize:'clamp(1rem,2vw,1.3rem)', color:'var(--blue)', letterSpacing:'0.04em', whiteSpace:'nowrap' }}>INNOVATIVE</span>
              <span style={{ color:'var(--yellow)', fontSize:'1.4rem' }}>★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamValues() {
  return (
    <section style={{ background:'#ffffff', padding:'90px 0' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:'52px' }}>
          <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--blue)', marginBottom:'8px' }}>WHAT WE STAND FOR</p>
          <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,3.5vw,2.4rem)', color:'var(--blue)', lineHeight:1.1 }}>
            OUR CORE{' '}
            <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationColor:'var(--yellow)', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>VALUES</span>
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px' }}>
          {VALUES.map((v,i)=>(
            <div key={v.title} style={{ background:'#fff', border:'1.5px solid rgba(26,86,219,0.12)', borderRadius:'16px', padding:'28px', boxShadow:'0 4px 16px rgba(26,86,219,0.06)' }}>
              <div style={{ fontSize:'2.4rem', marginBottom:'14px', filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>{v.icon}</div>
              <h3 className="font-display font-black uppercase" style={{ fontSize:'0.92rem', color:'var(--blue)', marginBottom:'10px', letterSpacing:'0.02em', lineHeight:1.3 }}>{v.title}</h3>
              <p style={{ fontSize:'0.85rem', color:'rgba(12,26,78,0.62)', lineHeight:1.75 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function TeamReviews() {
  return (
    <section style={{ background:'#f2f5fc', padding:'80px 0' }}>
      <div className="container" style={{ textAlign:'center' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'16px', marginBottom:'36px', flexWrap:'wrap' }}>
          <div style={{ width:'64px', height:'64px', borderRadius:'16px', background:'linear-gradient(135deg, var(--blue), #1341b5)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem' }}>⭐</div>
          <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.4rem,3vw,2rem)', color:'var(--blue)', lineHeight:1.1 }}>
            READ 5-STAR REVIEWS
          </h2>
        </div>

        <div style={{ display:'flex', justifyContent:'center', gap:'16px', flexWrap:'wrap' }}>
          {REVIEW_PLATFORMS.map(p=>(
            <div key={p.name} style={{
              background:'#fff', borderRadius:'14px',
              padding:'16px 24px',
              border:'1.5px solid rgba(26,86,219,0.12)',
              boxShadow:'0 4px 16px rgba(26,86,219,0.07)',
              display:'flex', alignItems:'center', gap:'10px',
              minWidth:'160px', cursor:'pointer',
              transition:'all 0.2s',
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(26,86,219,0.12)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(26,86,219,0.07)'}}
            >
              <div style={{ width:'32px', height:'32px', borderRadius:'8px', background:p.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'0.75rem', fontWeight:900, flexShrink:0 }}>{p.icon}</div>
              <div style={{ textAlign:'left' }}>
                <p style={{ fontSize:'0.78rem', fontWeight:800, color:'#0c1a4e' }}>{p.name}</p>
                <p style={{ fontSize:'0.7rem', color:'var(--yellow)', fontWeight:900 }}>{'★'.repeat(5)} {p.stars}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCTA() {
  return (
    <section style={{ background:'var(--blue)', padding:'90px 0', textAlign:'center', position:'relative', overflow:'hidden' }}>
      {/* Decorations */}
      <div style={{ position:'absolute', top:'20px', left:'8%', fontSize:'2.5rem', opacity:0.5, pointerEvents:'none' }}>🎉</div>
      <div style={{ position:'absolute', bottom:'20px', right:'8%', fontSize:'2.5rem', opacity:0.5, pointerEvents:'none' }}>🚀</div>

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <h2 className="font-display font-black uppercase" style={{
          fontSize:'clamp(1.8rem,4vw,2.8rem)', lineHeight:1.1,
          color:'#fff', marginBottom:'12px', letterSpacing:'-0.01em',
        }}>
          PASSIONATE ABOUT{' '}
          <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationColor:'var(--yellow)', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>SOCIAL MEDIA?</span>
        </h2>
        <p style={{ fontSize:'1rem', color:'rgba(255,255,255,0.75)', maxWidth:'500px', margin:'0 auto 36px', lineHeight:1.75 }}>
          We&apos;re always looking for talented strategists, creatives, and data nerds to join our growing team.
        </p>

        <div style={{ display:'flex', justifyContent:'center', gap:'16px', flexWrap:'wrap' }}>
          <Link href="/careers" className="font-display font-black uppercase" style={{
            padding:'16px 36px', background:'var(--yellow)', color:'#0c1a4e',
            borderRadius:'10px', fontSize:'0.85rem', letterSpacing:'0.1em', textDecoration:'none',
            boxShadow:'0 8px 24px rgba(245,197,24,0.4)',
          }}>
            VIEW OPEN POSITIONS
          </Link>
          <Link href="/contact" className="font-display font-black uppercase" style={{
            padding:'16px 36px', background:'transparent', color:'#fff',
            borderRadius:'10px', fontSize:'0.85rem', letterSpacing:'0.1em', textDecoration:'none',
            border:'2px solid rgba(255,255,255,0.5)',
          }}>
            GET IN TOUCH
          </Link>
        </div>
      </div>

      {/* Wave */}
      <div style={{ position:'absolute', bottom:-2, left:0, right:0, lineHeight:0 }}>
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }} preserveAspectRatio="none">
          <path d="M0,25 C480,50 960,0 1440,25 L1440,50 L0,50 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <TeamHero />
      <TeamStats />
      <TeamLeaders />
      <FullTeamGrid />
      <TeamCulture />
      <TeamValues />
      <TeamReviews />
      <TeamCTA />
    </>
  )
}