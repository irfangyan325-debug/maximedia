'use client'
import { useState } from 'react'

const STEPS = [
  {
    step:1, icon:'💬', title:'Inbound Engagement Management',
    points:[
      { bold:'Timely Responses:', rest:'Quickly and thoughtfully reply to comments, DMs, tags, and mentions to show your audience they\'re heard and valued.' },
      { bold:'Brand Voice Consistency:', rest:'Every reply is crafted to sound authentically you, whether that\'s playful, professional, or somewhere in between.' },
      { bold:'Community Building:', rest:'Turn casual interactions into loyal fans by fostering two-way conversations and celebrating your followers.' },
      { bold:'Reputation Monitoring:', rest:'Keep tabs on what\'s being said about your brand and address concerns or feedback before they snowball.' },
    ],
  },
  {
    step:2, icon:'🚀', title:'Outbound Engagement',
    points:[
      { bold:'Proactive Interaction:', rest:'Actively engage with potential customers, influencers, and relevant conversations to increase visibility and community growth.' },
      { bold:'Hashtag Monitoring:', rest:'Track and participate in trending hashtags and discussions relevant to your brand.' },
      { bold:'Competitor and Industry Engagement:', rest:'Join discussions on competitor channels or within the broader industry to establish your brand as a thought leader.' },
    ],
  },
  {
    step:3, icon:'👂', title:'Social Listening and Insights',
    points:[
      { bold:'Monitoring Brand Mentions:', rest:'Track what people are saying about your brand to identify opportunities and address concerns.' },
      { bold:'Trend Identification:', rest:'Discover emerging trends and hot topics that align with your brand\'s audience and goals.' },
      { bold:'Actionable Insights:', rest:'Provide regular reports with insights and recommendations based on audience behavior and sentiment.' },
    ],
  },
  {
    step:4, icon:'📈', title:'Community Growth Initiatives',
    points:[
      { bold:'Engagement Campaigns:', rest:'Run campaigns like giveaways, challenges, or polls to encourage audience participation and loyalty.' },
      { bold:'Audience Interaction Strategies:', rest:'Implement strategies to encourage more user-generated content (UGC) and foster a sense of belonging.' },
      { bold:'Follower Growth Programs:', rest:'Use ethical growth strategies to expand your audience organically.' },
    ],
  },
  {
    step:5, icon:'🛡️', title:'Crisis Management',
    points:[
      { bold:'Reputation Protection:', rest:'Respond swiftly to potential PR issues or negative feedback to minimize reputational risks.' },
      { bold:'Crisis Communication Plans:', rest:'Develop strategies to manage online crises and mitigate their impact on your brand.' },
    ],
  },
  {
    step:6, icon:'🌟', title:'Community Advocacy and Activation',
    points:[
      { bold:'Ambassador Program Management:', rest:'Create and manage brand ambassador or advocacy programs to amplify your message.' },
      { bold:'Influencer Collaboration Support:', rest:'Partner with influencers and fans to co-create content and expand your reach.' },
      { bold:'Surprise and Delight Campaigns:', rest:'Engage directly with fans through unexpected gifts, shoutouts, or personalized messages.' },
    ],
  },
  {
    step:7, icon:'📊', title:'Reporting and Analytics',
    points:[
      { bold:'Engagement Metrics Tracking:', rest:'Measure key metrics like response time, engagement rates, and sentiment changes.' },
      { bold:'ROI Reporting:', rest:'Highlight the impact of community management efforts on broader marketing and business goals.' },
      { bold:'Feedback Loops:', rest:'Use community feedback to inform content, product development, and strategy.' },
    ],
  },
]

export default function CommunityWhatWeDo() {
  const [active, setActive] = useState(0)
  const s = STEPS[active]

  return (
    <>
      <style>{`
        .cwd-section { background:var(--yellow); padding:clamp(64px,9vw,100px) 0; position:relative; overflow:hidden; }
        .cwd-dots { position:absolute; top:20px; right:28px; display:grid; grid-template-columns:repeat(10,8px); gap:6px; opacity:0.2; pointer-events:none; }
        .cwd-dot { width:5px; height:5px; border-radius:50%; background:#0c1a4e; }
        .cwd-heading { font-size:clamp(2rem,5.5vw,4rem); line-height:1.05; color:#0c1a4e; letter-spacing:-0.02em; text-align:center; margin-bottom:clamp(32px,5vw,52px); }
        .cwd-tabs { display:flex; flex-wrap:wrap; justify-content:center; gap:8px; margin-bottom:clamp(28px,4vw,40px); }
        .cwd-tab { padding:8px 16px; border-radius:100px; border:2px solid #0c1a4e; background:transparent; font-size:0.72rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; color:#0c1a4e; transition:all 0.2s; }
        .cwd-tab-active { background:#0c1a4e; color:var(--yellow); }
        .cwd-tab:hover:not(.cwd-tab-active) { background:rgba(12,26,78,0.08); }
        .cwd-card { background:#fff; border-radius:clamp(16px,2.5vw,24px); padding:clamp(28px,4vw,48px); box-shadow:0 8px 40px rgba(0,0,0,0.12); max-width:820px; margin:0 auto; }
        .cwd-pill { display:inline-flex; align-items:center; background:var(--yellow); color:#0c1a4e; font-weight:900; font-size:0.68rem; letter-spacing:0.1em; text-transform:uppercase; padding:5px 14px; border-radius:100px; margin-bottom:16px; border:2px solid rgba(12,26,78,0.15); }
        .cwd-title { font-size:clamp(1.2rem,2.5vw,1.8rem); color:var(--yellow); font-style:italic; letter-spacing:-0.01em; margin-bottom:20px; }
        .cwd-point { display:flex; gap:10px; margin-bottom:12px; font-size:clamp(0.86rem,1.4vw,0.96rem); color:rgba(12,26,78,0.72); line-height:1.72; }
        .cwd-dot-bullet { width:7px; height:7px; border-radius:50%; background:var(--blue); flex-shrink:0; margin-top:7px; }
        .cwd-nav { display:flex; align-items:center; justify-content:center; gap:12px; margin-top:clamp(24px,3.5vw,36px); }
        .cwd-arrow { width:clamp(44px,5vw,54px); height:clamp(44px,5vw,54px); border-radius:10px; background:#0c1a4e; border:none; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:900; color:var(--yellow); cursor:pointer; transition:all 0.15s; flex-shrink:0; }
        .cwd-arrow:hover:not(:disabled) { background:var(--blue); transform:scale(1.05); }
        .cwd-arrow:disabled { opacity:0.3; cursor:default; }
        .cwd-nav-dot { height:8px; border-radius:4px; border:none; cursor:pointer; padding:0; transition:all 0.25s; background:rgba(12,26,78,0.25); width:8px; }
        .cwd-nav-dot-active { background:#0c1a4e; width:24px; }
      `}</style>

      <section className="cwd-section">
        <div className="cwd-dots">{Array.from({length:30}).map((_,i)=><div key={i} className="cwd-dot"/>)}</div>
        <div className="container">
          <h2 className="font-display font-black uppercase cwd-heading">WHAT WE DO</h2>

          {/* Step tabs */}
          <div className="cwd-tabs">
            {STEPS.map((s,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`cwd-tab${i===active?' cwd-tab-active':''}`}>
                {s.icon} Step {s.step}
              </button>
            ))}
          </div>

          {/* Active card */}
          <div className="cwd-card">
            <div className="cwd-pill">STEP {s.step}</div>
            <h3 className="font-display font-black uppercase cwd-title">{s.title}</h3>
            <div>
              {s.points.map((p,i)=>(
                <div key={i} className="cwd-point">
                  <span className="cwd-dot-bullet"/>
                  <p><strong style={{color:'#0c1a4e'}}>{p.bold}</strong> {p.rest}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="cwd-nav">
            <button className="cwd-arrow" onClick={()=>setActive(a=>Math.max(a-1,0))} disabled={active===0} aria-label="Previous">←</button>
            {STEPS.map((_,i)=>(
              <button key={i} onClick={()=>setActive(i)} className={`cwd-nav-dot${i===active?' cwd-nav-dot-active':''}`} aria-label={`Step ${i+1}`}/>
            ))}
            <button className="cwd-arrow" onClick={()=>setActive(a=>Math.min(a+1,STEPS.length-1))} disabled={active===STEPS.length-1} aria-label="Next">→</button>
          </div>
        </div>
      </section>
    </>
  )
}