import Link from 'next/link'

export default function TeamCTA() {
  return (
    <section style={{ background:'var(--blue)', padding:'90px 0', textAlign:'center', position:'relative', overflow:'hidden' }}>
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
            border:'2px solid #0c1a4e', boxShadow:'0 5px 0 #0c1a4e',
          }}>
            VIEW OPEN POSITIONS →
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