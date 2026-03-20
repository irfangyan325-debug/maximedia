import Image from 'next/image'

const TEAM = [
  { name:'Keith Kakadia',   role:'CEO & Founder',       image:'/images/consulting-team-1.png' },
  { name:'Kaushal Kakadia', role:'Partner & COO',        image:'/images/consulting-team-2.png' },
  { name:'Nisha Kashyap',   role:'Director of Strategy', image:'/images/consulting-team-3.png' },
  { name:'Lorenzo Johnson', role:'Accounts Director',    image:'/images/consulting-team-4.png' },
  { name:'Lorena Vasquez',  role:'Lead Strategist',      image:'/images/consulting-team-5.png' },
  { name:'Brett Birdsall',  role:'Creative Director',    image:'/images/consulting-team-6.png' },
]

export default function ConsultingTeam() {
  return (
    <>
      <style>{`
        .ctm-section { background:var(--con-black,#0a0a0a); padding:clamp(72px,9vw,100px) 0; overflow:hidden; }
        .ctm-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .ctm-card { background:var(--con-card,#1a1a1a); border:1.5px solid var(--con-border,rgba(255,255,255,0.1)); border-radius:18px; overflow:hidden; transition:border-color 0.25s,transform 0.25s; }
        .ctm-card:hover { border-color:rgba(245,197,24,0.4); transform:translateY(-5px); }
        .ctm-photo { position:relative; width:100%; aspect-ratio:3/4; background:#222; }
        .ctm-info { padding:18px 20px 22px; }
        @media (max-width:900px) { .ctm-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:480px) { .ctm-grid { grid-template-columns:1fr; } }
      `}</style>

      <section className="ctm-section">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',lineHeight:1.08,letterSpacing:'-0.01em'}}>
              THE{' '}
              <span style={{color:'var(--con-yellow,#f5c518)',textDecoration:'underline',textDecorationColor:'var(--con-yellow,#f5c518)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>TEAM</span>
            </h2>
            <p style={{fontSize:'0.95rem',color:'rgba(255,255,255,0.5)',maxWidth:'560px',margin:'12px auto 0',lineHeight:1.75}}>
              Meet the seasoned social pros who will guide your brand to social media success.
            </p>
          </div>

          <div className="ctm-grid">
            {TEAM.map((m,i)=>(
              <div key={m.name} className="ctm-card">
                <div className="ctm-photo">
                  <Image src={m.image} alt={m.name} fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:480px) 90vw, (max-width:900px) 45vw, 30vw"/>
                  {/* Yellow gradient overlay bottom */}
                  <div style={{position:'absolute',bottom:0,left:0,right:0,height:'60px',background:'linear-gradient(to top, rgba(10,10,10,0.8), transparent)',pointerEvents:'none'}}/>
                </div>
                <div className="ctm-info">
                  <h3 className="font-display font-black uppercase" style={{fontSize:'0.92rem',color:'#fff',marginBottom:'4px',letterSpacing:'0.02em'}}>{m.name}</h3>
                  <p style={{fontSize:'0.72rem',color:'var(--con-yellow,#f5c518)',fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase'}}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}