'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CASES = [
  { client:'Angi',           slug:'angi',           logo:'Angi',           desc:'Reached homeowners by producing helpful TikTok content starring vetted pros.',                                       image:'/images/case-studies/angi.jpg' },
  { client:'Angostura',      slug:'angostura',      logo:'ANGOSTURA',      desc:'Recipe for success? Global strategy, thumb-stopping content, unparalleled results. Shaken, not stirred.',            image:'/images/case-studies/angostura.jpg' },
  { client:'Bear Paw',       slug:'bear-paw',       logo:'BEARPAW 🐾',     desc:'Expert promotion, advertising and targeting: the secret to minimum ad spend and maximum results.',                   image:'/images/case-studies/bear-paw.jpg' },
  { client:'Gift Card Shop',  slug:'gift-card-shop', logo:'Gift Card Shop', desc:'1,500%+ increase in organic leads. The perfect gift? A significant increase in social media followers.',            image:'/images/case-studies/gift-card-shop.jpg' },
  { client:'Mellow',         slug:'mellow',         logo:'Mellow',         desc:'Developed a paid ad strategy featuring eye-catching visuals and precise audience targeting.',                         image:'/images/case-studies/mellow.jpg' },
]

const CARD_W = 300, GAP = 16

export default function PaidCaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(2)
  const [canPrev, setCanPrev] = useState(true)
  const [canNext, setCanNext] = useState(true)

  const scrollToIdx = useCallback((idx: number) => {
    const track = trackRef.current; if (!track) return
    const clamped = Math.max(0, Math.min(idx, CASES.length - 1))
    track.scrollTo({ left: Math.max(0, clamped * (CARD_W + GAP) - (track.clientWidth / 2 - CARD_W / 2)), behavior:'smooth' })
    setActive(clamped); setCanPrev(clamped > 0); setCanNext(clamped < CASES.length - 1)
  }, [])

  useEffect(() => { scrollToIdx(2) }, [scrollToIdx])

  const onScroll = useCallback(() => {
    const track = trackRef.current; if (!track) return
    const idx = Math.round((track.scrollLeft + track.clientWidth / 2 - CARD_W / 2) / (CARD_W + GAP))
    const clamped = Math.max(0, Math.min(idx, CASES.length - 1))
    setActive(clamped); setCanPrev(clamped > 0); setCanNext(clamped < CASES.length - 1)
  }, [])

  useEffect(() => {
    const track = trackRef.current; if (!track) return
    track.addEventListener('scroll', onScroll, { passive:true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <>
      <style>{`
        .pcs-track { display:flex; gap:${GAP}px; overflow-x:auto; scroll-snap-type:x mandatory; scrollbar-width:none; -webkit-overflow-scrolling:touch; padding-left:max(28px,calc((100vw - 1240px)/2 + 28px)); padding-right:max(28px,calc((100vw - 1240px)/2 + 28px)); padding-top:12px; padding-bottom:12px; align-items:flex-end; }
        .pcs-track::-webkit-scrollbar { display:none; }
        .pcs-card { flex:0 0 ${CARD_W}px; width:${CARD_W}px; scroll-snap-align:center; border-radius:18px; overflow:hidden; position:relative; transition:all 0.35s ease; background:#fff; cursor:pointer; }
        .pcs-card-inactive { transform:scale(0.93) translateY(8px); opacity:0.78; border:2px solid transparent; box-shadow:0 4px 16px rgba(0,0,0,0.1); }
        .pcs-card-active { transform:scale(1) translateY(0); opacity:1; border:2px solid var(--yellow); box-shadow:0 20px 56px rgba(0,0,0,0.14); cursor:default; }
        .pcs-photo { position:relative; width:100%; height:320px; overflow:hidden; background:#e8e0d8; }
        .pcs-logo-bar { position:absolute; top:0; left:0; right:0; background:rgba(255,255,255,0.96); padding:10px 16px; display:flex; align-items:center; justify-content:center; z-index:2; border-bottom:1px solid rgba(245,197,24,0.2); }
        .pcs-info { padding:16px 18px 20px; background:#fff; }
        .pcs-arrows { display:flex; justify-content:center; gap:12px; margin-top:clamp(16px,3vw,28px); }
        .pcs-arrow { width:clamp(44px,5vw,54px); height:clamp(44px,5vw,54px); border-radius:10px; background:var(--yellow); border:2px solid #0c1a4e; box-shadow:0 4px 0 #0c1a4e; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:900; color:#0c1a4e; cursor:pointer; transition:all 0.15s ease; }
        .pcs-arrow:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 6px 0 #0c1a4e; }
        .pcs-arrow:disabled { opacity:0.3; cursor:default; box-shadow:0 2px 0 #0c1a4e; }
      `}</style>

      <section style={{background:'#ffffff',padding:'clamp(64px,9vw,100px) 0',overflow:'hidden'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',marginBottom:'clamp(24px,4vw,40px)',padding:'0 max(28px,calc((100vw - 1240px)/2 + 28px))'}}>
          <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,3rem)',lineHeight:1.0,color:'var(--yellow)',fontStyle:'italic',letterSpacing:'-0.01em'}}>CASE STUDIES</h2>
          <Link href="/work" className="font-display font-black uppercase" style={{display:'inline-flex',alignItems:'center',padding:'12px 24px',background:'#0c1a4e',color:'var(--yellow)',borderRadius:'8px',fontSize:'0.78rem',letterSpacing:'0.1em',textDecoration:'none'}}>SEE MORE</Link>
        </div>

        <div ref={trackRef} className="pcs-track">
          {CASES.map((c, i) => {
            const isActive = i === active
            return (
              <div key={c.slug} onClick={()=>!isActive&&scrollToIdx(i)} className={`pcs-card ${isActive?'pcs-card-active':'pcs-card-inactive'}`}>
                <div className="pcs-photo">
                  {isActive && <div className="pcs-logo-bar"><span style={{fontSize:'0.85rem',fontWeight:900,color:'#0c1a4e',letterSpacing:'0.04em',textTransform:'uppercase'}}>{c.logo}</span></div>}
                  <Image src={c.image} alt={c.client} fill style={{objectFit:'cover',objectPosition:'center',transition:'transform 0.4s ease',transform:isActive?'scale(1)':'scale(1.06)'}} sizes="300px"/>
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,0.3) 0%,transparent 50%)',pointerEvents:'none'}}/>
                </div>
                {isActive && (
                  <div className="pcs-info">
                    <h3 className="font-display font-black uppercase" style={{fontSize:'1rem',color:'var(--blue)',marginBottom:'8px',fontStyle:'italic'}}>{c.client}</h3>
                    <p style={{fontSize:'0.82rem',color:'rgba(12,26,78,0.62)',lineHeight:1.6}}>{c.desc}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="pcs-arrows">
          <button className="pcs-arrow" onClick={()=>scrollToIdx(active-1)} disabled={!canPrev} aria-label="Previous">←</button>
          <button className="pcs-arrow" onClick={()=>scrollToIdx(active+1)} disabled={!canNext} aria-label="Next">→</button>
        </div>
      </section>
    </>
  )
}