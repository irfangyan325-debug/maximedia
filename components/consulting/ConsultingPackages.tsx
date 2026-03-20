import Link from 'next/link'

const PACKAGES = [
  {
    num: 1,
    price: '$1,500',
    hours: '10 Hours',
    duration: '3 Months',
    tag: 'STARTER',
    highlight: false,
    items: [
      'Initial consultation to discuss goals and objectives',
      'Social media audit and analysis',
      'Development of social media strategy and content calendar',
      'Guidance on best practices for creating and sharing content',
      'Assistance with setting up and optimizing social media profiles',
      'Analytics reporting to track progress',
      '10 hours for consulting calls and document review',
    ],
    note: 'Call 1 includes: Executive Leadership, Lead Strategist, Accounts Director, Paid Ads Director, and Creative Director.',
  },
  {
    num: 2,
    price: '$3,000',
    hours: '25 Hours',
    duration: '3 Months',
    tag: 'MOST POPULAR',
    highlight: true,
    items: [
      'All deliverables in Package 1',
      'Additional consultation time to review progress and adjust strategy',
      'Creation of custom graphics and/or videos',
      'Development of paid social media advertising strategy and campaigns',
      'Influencer outreach and collaboration to expand reach',
      '25 hours for consulting calls and document review',
    ],
    note: 'Call 1 includes: Executive Leadership, Lead Strategist, Accounts Director, Paid Ads Director, and Creative Director.',
  },
  {
    num: 3,
    price: '$5,000',
    hours: '50 Hours',
    duration: '3 Months',
    tag: 'ENTERPRISE',
    highlight: false,
    items: [
      'All deliverables in Package 2',
      'In-depth analysis of social media metrics',
      'Collaboration with internal marketing team',
      'Development of crisis management plan',
      'Assistance with implementing social media management tools',
      'Social media training and education for internal teams',
      '50 hours for consulting calls and document review',
    ],
    note: 'Call 1 includes: Executive Leadership, Lead Strategist, Accounts Director, Paid Ads Director, and Creative Director.',
  },
]

export default function ConsultingPackages() {
  return (
    <>
      <style>{`
        .cpk-section { background:var(--con-dark,#111); padding:clamp(72px,9vw,100px) 0; }
        .cpk-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .cpk-card { background:var(--con-card,#1a1a1a); border:1.5px solid var(--con-border,rgba(255,255,255,0.1)); border-radius:20px; padding:32px 28px 36px; display:flex; flex-direction:column; position:relative; overflow:hidden; transition:border-color 0.2s,transform 0.2s; }
        .cpk-card:hover { border-color:rgba(245,197,24,0.3); transform:translateY(-4px); }
        .cpk-card-highlight { border-color:var(--con-yellow,#f5c518) !important; box-shadow:0 0 40px rgba(245,197,24,0.12); }
        .cpk-card-highlight:hover { box-shadow:0 0 60px rgba(245,197,24,0.18); }
        .cpk-tag { display:inline-flex; padding:4px 12px; border-radius:100px; font-size:0.62rem; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:20px; }
        .cpk-price { font-size:clamp(2.4rem,4vw,3.4rem); color:#fff; line-height:1; margin-bottom:4px; }
        .cpk-meta { font-size:0.8rem; color:rgba(255,255,255,0.45); margin-bottom:24px; }
        .cpk-divider { height:1px; background:rgba(255,255,255,0.08); margin-bottom:20px; }
        .cpk-item { display:flex; gap:10px; margin-bottom:12px; font-size:0.82rem; color:rgba(255,255,255,0.65); line-height:1.6; }
        .cpk-check { width:18px; height:18px; border-radius:50%; background:var(--con-yellow,#f5c518); display:flex; align-items:center; justify-content:center; font-size:0.6rem; font-weight:900; color:#0a0a0a; flex-shrink:0; margin-top:2px; }
        .cpk-note { font-size:0.72rem; color:rgba(255,255,255,0.3); line-height:1.6; margin:16px 0 24px; font-style:italic; }
        .cpk-btn { display:block; text-align:center; padding:14px 24px; border-radius:10px; font-size:0.8rem; letter-spacing:0.1em; text-decoration:none; font-weight:900; text-transform:uppercase; transition:all 0.15s; margin-top:auto; }
        .cpk-btn-default { background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.7); border:1.5px solid rgba(255,255,255,0.12); }
        .cpk-btn-default:hover { background:rgba(255,255,255,0.12); color:#fff; }
        .cpk-btn-highlight { background:var(--con-yellow,#f5c518); color:#0a0a0a; border:2px solid var(--con-yellow,#f5c518); box-shadow:0 4px 0 rgba(0,0,0,0.4); }
        .cpk-btn-highlight:hover { transform:translateY(-2px); box-shadow:0 6px 0 rgba(0,0,0,0.4); }
        @media (max-width:900px) { .cpk-grid { grid-template-columns:1fr; max-width:500px; margin:0 auto; } }
      `}</style>

      <section className="cpk-section">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'clamp(40px,6vw,56px)'}}>
            <p className="font-display font-black uppercase" style={{fontSize:'0.75rem',letterSpacing:'0.14em',color:'var(--con-yellow,#f5c518)',marginBottom:'10px'}}>TRANSPARENT PRICING</p>
            <h2 className="font-display font-black uppercase" style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',lineHeight:1.08,letterSpacing:'-0.01em',maxWidth:'700px',margin:'0 auto 14px'}}>
              CHOOSE THE PACKAGE THAT BEST{' '}
              <span style={{color:'var(--con-yellow,#f5c518)',textDecoration:'underline',textDecorationColor:'var(--con-yellow,#f5c518)',textDecorationThickness:'4px',textUnderlineOffset:'6px'}}>SUITS YOUR NEEDS</span>
            </h2>
            <p style={{fontSize:'0.95rem',color:'rgba(255,255,255,0.45)',maxWidth:'560px',margin:'0 auto',lineHeight:1.75}}>All packages run for 3 months and include dedicated consulting hours for calls and document review.</p>
          </div>

          <div className="cpk-grid">
            {PACKAGES.map(pkg=>(
              <div key={pkg.num} className={`cpk-card${pkg.highlight?' cpk-card-highlight':''}`}>
                {/* Tag */}
                <div className="cpk-tag" style={{background: pkg.highlight ? 'var(--con-yellow,#f5c518)' : 'rgba(255,255,255,0.08)', color: pkg.highlight ? '#0a0a0a' : 'rgba(255,255,255,0.5)'}}>
                  {pkg.tag}
                </div>

                {/* Price */}
                <p className="font-display font-black cpk-price">{pkg.price}</p>
                <p className="cpk-meta">{pkg.hours} · {pkg.duration}</p>

                <div className="cpk-divider"/>

                {/* Items */}
                <div style={{flex:1}}>
                  {pkg.items.map((item,i)=>(
                    <div key={i} className="cpk-item">
                      <span className="cpk-check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                  <p className="cpk-note">{pkg.note}</p>
                </div>

                <Link href="/contact" className={`font-display font-black uppercase cpk-btn ${pkg.highlight ? 'cpk-btn-highlight' : 'cpk-btn-default'}`}>
                  CHOOSE PACKAGE →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}