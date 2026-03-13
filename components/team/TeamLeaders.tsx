import Link from 'next/link'
import Image from 'next/image'
import { TEAM_MEMBERS } from '@/lib/data'

const LEADERS = [
  {
    name:    TEAM_MEMBERS[0].name,
    role:    TEAM_MEMBERS[0].role,
    bio:     TEAM_MEMBERS[0].bio,
    bio2:    "Keith never stops working hard to help businesses of every size unlock their full potential of social — but that doesn't mean he isn't taking his work on the go to explore the latest eats around the globe.",
    tagline: 'CEO of MAXIMEDIA and Trying New Foods | Passionate Networker | Currently Making the World His Office',
    photo:   '/images/team-keith.png',
    flip:    false,
  },
  {
    name:    TEAM_MEMBERS[1].name,
    role:    TEAM_MEMBERS[1].role,
    bio:     TEAM_MEMBERS[1].bio,
    bio2:    'She brings a people-first approach to everything she does — building a culture where every team member thrives and every client feels like a true partner in their success.',
    tagline: 'Driving Your Brand Revenue to the Top | Currently Cultivating Safe Spaces for Employees',
    photo:   '/images/team-leader2.png',
    flip:    true,
  },
]

export default function TeamLeaders() {
  return (
    <>
      <style>{`
        .tl-section {
          background: #ffffff;
          padding: clamp(64px,9vw,104px) 0;
        }
        .tl-leaders-list {
          display: flex;
          flex-direction: column;
          gap: clamp(56px,8vw,96px);
        }
        .tl-row {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(32px,5vw,72px);
          align-items: center;
        }
        .tl-row-flipped { direction: rtl; }
        .tl-row-flipped > * { direction: ltr; }

        /* Photo card — matching screenshot: light blue border, rounded, real photo */
        .tl-photo-card {
          position: relative;
          width: 100%;
          max-width: clamp(280px,40vw,440px);
          aspect-ratio: 3/4;
          border-radius: clamp(18px,3vw,26px);
          overflow: hidden;
          border: 2px solid #b8dff0;
          box-shadow: 4px 4px 0 #c9e8f5, 0 12px 40px rgba(26,86,219,0.1);
          background: #e8f4fb;
        }
        .tl-photo-wrap { display: flex; justify-content: center; }

        /* Name — giant bold blue */
        .tl-name {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(2rem,5vw,3.6rem);
          color: var(--blue);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1.0;
          margin-bottom: clamp(8px,1.2vw,14px);
        }
        /* Role — yellow italic bold */
        .tl-role {
          font-family: var(--font-display);
          font-weight: 900;
          font-style: italic;
          font-size: clamp(0.9rem,1.6vw,1.15rem);
          color: var(--yellow);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: clamp(18px,2.5vw,28px);
        }
        .tl-bio {
          font-size: clamp(0.88rem,1.4vw,1rem);
          color: rgba(12,26,78,0.72);
          line-height: 1.82;
          margin-bottom: clamp(14px,2vw,20px);
        }
        .tl-tagline {
          font-size: clamp(0.8rem,1.2vw,0.92rem);
          color: rgba(12,26,78,0.48);
          font-style: italic;
          line-height: 1.65;
          margin-bottom: clamp(24px,3.5vw,36px);
        }
        /* Yellow button — matching screenshot */
        .tl-btn {
          display: inline-flex;
          align-items: center;
          padding: clamp(13px,2vw,17px) clamp(24px,3.5vw,40px);
          background: var(--yellow);
          color: #0c1a4e;
          border-radius: 8px;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.72rem,1.2vw,0.84rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid #0c1a4e;
          box-shadow: 0 4px 0 #0c1a4e;
          transition: all 0.15s;
        }
        .tl-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 0 #0c1a4e; }

        @media (max-width: 860px) {
          .tl-row, .tl-row-flipped { grid-template-columns: 1fr; direction: ltr; gap: 28px; }
          .tl-photo-wrap { justify-content: center; }
          .tl-photo-card { max-width: clamp(240px,70vw,380px); }
        }
      `}</style>

      <section className="tl-section">
        <div className="container">

          <div style={{ textAlign:'center', marginBottom:'clamp(48px,7vw,72px)' }}>
            <p className="font-display font-black uppercase" style={{ fontSize:'0.75rem', letterSpacing:'0.14em', color:'var(--yellow)', marginBottom:'8px' }}>LEADERSHIP</p>
            <h2 className="font-display font-black uppercase" style={{ fontSize:'clamp(1.8rem,4vw,3rem)', color:'var(--blue)', lineHeight:1.05, letterSpacing:'-0.01em' }}>
              MEET OUR LEADERSHIP TEAM
            </h2>
          </div>

          <div className="tl-leaders-list">
            {LEADERS.map(leader => (
              <div key={leader.name} className={`tl-row ${leader.flip ? 'tl-row-flipped' : ''}`}>

                {/* Photo card */}
                <div className="tl-photo-wrap">
                  <div className="tl-photo-card">
                    <Image
                      src={leader.photo}
                      alt={leader.name}
                      fill
                      style={{ objectFit:'cover', objectPosition:'center top' }}
                      sizes="(max-width:860px) 70vw, 40vw"
                    />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h2 className="tl-name">{leader.name}</h2>
                  <p className="tl-role">{leader.role}</p>
                  <p className="tl-bio">{leader.bio}</p>
                  {leader.bio2 && <p className="tl-bio">{leader.bio2}</p>}
                  <p className="tl-tagline">{leader.tagline}</p>
                  <Link href="/contact" className="tl-btn">
                    CONTACT {leader.name.split(' ')[0].toUpperCase()}
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}