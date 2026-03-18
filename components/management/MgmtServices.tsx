import Link from 'next/link'

const SERVICES = [
  { icon:'📋', title:'Daily Account Management',    desc:'Full ownership of your accounts — posting, scheduling, monitoring, and optimizing every day.' },
  { icon:'👥', title:'Community Management',         desc:'Proactive engagement with your audience — responding to comments, DMs, mentions, and reviews.' },
  { icon:'🎬', title:'Content Production',           desc:'In-house creative team producing platform-specific photos, videos, graphics, and copy.' },
  { icon:'💳', title:'Paid Social Management',       desc:'Strategic ad campaigns across Facebook, Instagram, TikTok, LinkedIn, and more.' },
  { icon:'👂', title:'Social Listening',             desc:'Monitor brand mentions, competitor activity, and industry conversations in real time.' },
  { icon:'🎯', title:'Influencer Marketing',         desc:'Identify, vet, and manage influencer partnerships tailored to your brand and goals.' },
  { icon:'📊', title:'Data Analysis & Reporting',   desc:'Monthly reporting with clear KPIs, performance metrics, and actionable insights.' },
  { icon:'🗺️', title:'Ongoing Strategy Development', desc:'Evolving strategies that adapt to platform changes, trends, and your business growth.' },
]

export default function MgmtServices() {
  return (
    <>
      <style>{`
        .msvc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .msvc-card { background:#fff; border:2px solid #b8dff0; border-radius:16px; padding:22px 18px 26px; text-align:left; position:relative; overflow:hidden; box-shadow:6px 6px 0 #b8dff0,0 4px 12px rgba(26,86,219,0.06); transition:transform 0.2s ease,box-shadow 0.2s ease; }
        .msvc-card:hover { transform:translateY(-4px); box-shadow:6px 10px 0 #a0cce8; }
        .msvc-card::after { content:''; position:absolute; top:50%; right:-2px; transform:translateY(-50%); width:6px; height:48px; background:var(--blue); border-radius:4px 0 0 4px; }
        @media (max-width:900px) { .msvc-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:480px) { .msvc-grid { grid-template-columns:1fr; } }
      `}</style>
      <section style={{ background:'#c9e8f5', padding:'clamp(72px,9vw,100px) 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'clamp(40px,6vw,56px)' }}>
            <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--blue)', marginBottom:'8px' }}>FULL-SERVICE OFFERING</p>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.7rem,4vw,2.8rem)', color:'var(--blue)', lineHeight:1.08, letterSpacing:'-0.01em', maxWidth:'720px', margin:'0 auto 16px' }}>
              EVERYTHING INCLUDED IN OUR{' '}
              <span style={{ color:'var(--yellow)', textDecoration:'underline', textDecorationThickness:'4px', textUnderlineOffset:'6px' }}>MANAGEMENT PACKAGE</span>
            </h2>
            <p style={{ fontSize:'0.95rem', color:'rgba(12,26,78,0.62)', maxWidth:'580px', margin:'0 auto', lineHeight:1.75 }}>
              No guessing games here! With regular reporting calls and ongoing check-ins, we keep you in the loop and ahead of the game.
            </p>
          </div>
          <div className="msvc-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="msvc-card">
                <div style={{ fontSize:'2rem', marginBottom:'12px', filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>{s.icon}</div>
                <h3 className="font-display font-black uppercase" style={{ fontSize:'0.8rem', color:'var(--blue)', marginBottom:'8px', lineHeight:1.25, letterSpacing:'0.02em' }}>{s.title}</h3>
                <p style={{ fontSize:'0.8rem', color:'rgba(12,26,78,0.62)', lineHeight:1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'40px' }}>
            <Link href="/contact" className="font-display font-black uppercase" style={{ display:'inline-flex', alignItems:'center', padding:'16px 40px', background:'var(--yellow)', color:'#0c1a4e', borderRadius:'10px', fontSize:'0.84rem', letterSpacing:'0.1em', textDecoration:'none', border:'2px solid #0c1a4e', boxShadow:'0 5px 0 #0c1a4e', transition:'all 0.15s ease' }}>
              GET YOUR FREE PROPOSAL →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}