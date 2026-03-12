const ITEMS = [
  { title: 'Social Media Strategy', desc: 'Determine what you should say, when you should say it, and to whom.' },
  { title: 'Social Media Management', desc: 'Schedule and publish content across the most successful social platforms for your organization.' },
  { title: 'Community Management & Listening', desc: 'Engage with the audience that is eager to be heard and wants to interact with your brand.' },
  { title: 'Influencer Marketing', desc: 'Leverage the popularity of individuals with influence to showcase your brand.' },
  { title: 'Social Selling', desc: 'Personably engage and chat with people looking for exactly what you offer, always conversationally, never pushy.' },
  { title: 'Data Analysis & ROI Modeling', desc: 'Look at the numbers and figure out what they mean and how they can help grow your brand.' },
  { title: 'Paid Social Advertising', desc: 'Ensure that ads are placed strategically and at the right times to effectively communicate with your audience.' },
  { title: 'Content Production', desc: 'Video, images, words, and more. Have an idea? We can turn it into reality.' },
]

export default function WorkWhatWeDo() {
  return (
    <>
      <style>{`
        .www-section {
          background: #f4f6fb;
          padding: clamp(64px,9vw,104px) 0;
        }
        .www-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: clamp(14px,2vw,22px);
          margin-top: clamp(36px,5vw,52px);
        }
        .www-card {
          background: #fff;
          border: 1.5px solid #b8dff0;
          border-radius: 16px;
          padding: clamp(20px,2.5vw,28px);
          box-shadow: 4px 4px 0 #c9e8f5;
          transition: transform 0.2s;
        }
        .www-card:hover { transform: translateY(-3px); }
        .www-icon { font-size: clamp(1.8rem,3vw,2.4rem); margin-bottom: 10px; }
        .www-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-style: bold;
          font-size: clamp(1.82rem,1.3vw,1.2rem);
          color: var(--blue);
          text-transform: uppercase;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .www-desc {
          font-size: clamp(0.82rem,1.1vw,0.96rem);
          color: rgba(12,26,78,0.62);
          line-height: 1.7;
        }
        @media (max-width: 1024px) { .www-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 480px) {
          .www-grid { grid-template-columns: 1fr; }
          .www-card:hover { transform: none; }
        }
      `}</style>

      <section className="www-section">
        <div className="container">
          <h2
            className="font-display font-black uppercase"
            style={{ fontSize: 'clamp(2rem,5.5vw,3.8rem)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--blue)', textAlign: 'center' }}
          >
            WHAT WE DO
          </h2>
          <div className="www-grid">
            {ITEMS.map(item => (
              <div key={item.title} className="www-card">
                <p className="www-title">{item.title}</p>
                <p className="www-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}