const CULTURE_EMOJIS = ['🎨','🚀','💡','📱','🎯','🌎','🤝','📊','✨','🎉','🌟','💪','🎬','📈','🏆','🎵']

export default function TeamCulture() {
  return (
    <>
      <style>{`
        .tc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .tc-mosaic {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 10px;
        }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .tc-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        @media (max-width: 768px) {
          .tc-grid { grid-template-columns: 1fr; gap: 32px; }
          .tc-mosaic { grid-template-columns: repeat(4,1fr); }
        }
      `}</style>

      <section style={{ background:'#f2f5fc', padding:'90px 0', overflow:'hidden' }}>
        <div className="container" style={{ marginBottom:'48px' }}>
          <div className="tc-grid">
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

            {/* Emoji mosaic */}
            <div className="tc-mosaic">
              {CULTURE_EMOJIS.map((e, i) => (
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

        {/* Scrolling marquee */}
        <div style={{ overflow:'hidden' }}>
          <div className="tc-marquee-track">
            {Array.from({length:10}).map((_,i) => (
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
    </>
  )
}