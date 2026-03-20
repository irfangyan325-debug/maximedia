'use client'

import { TEAM_MEMBERS } from '@/lib/data'

const PHOTO_EMOJIS = ['👨‍💼','👩‍💼','🧑‍🎨','👩‍💻','👨‍🔬','👩‍🏫']
const PHOTO_BG = [
  'linear-gradient(145deg,#c8d8f5,#a0b8e8)',
  'linear-gradient(145deg,#f5e8c8,#e8d0a0)',
  'linear-gradient(145deg,#c8e8d8,#a0d0b8)',
  'linear-gradient(145deg,#e8c8d8,#d0a0b8)',
  'linear-gradient(145deg,#d8c8f5,#b8a0e8)',
  'linear-gradient(145deg,#f5d8c8,#e8b8a0)',
]

export default function AboutTeam() {
  return (
    <>
      <style>{`
        .about-team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .about-team-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid rgba(26,86,219,0.12);
          background: #fff;
          box-shadow: 0 4px 20px rgba(26,86,219,0.07);
          transition: all 0.25s ease;
        }
        .about-team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(26,86,219,0.14);
        }
        @media (max-width: 900px) {
          .about-team-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
        @media (max-width: 480px) {
          .about-team-grid { grid-template-columns: 1fr; gap: 12px; }
          .about-team-card:hover { transform: none; }
        }
      `}</style>

      <section id="team" style={{ background: '#ffffff', padding: 'clamp(56px,8vw,90px) 0' }}>
        <div className="container">

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px,5vw,52px)' }}>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', color: 'var(--blue)', lineHeight: 1.1, letterSpacing: '-0.01em',
            }}>
              MEET THE EXPERTS BEHIND{' '}
              <span style={{
                color: 'var(--yellow)',
                textDecoration: 'underline', textDecorationColor: 'var(--yellow)',
                textDecorationThickness: '4px', textUnderlineOffset: '6px',
              }}>YOUR GROWTH</span>
            </h2>
          </div>

          {/* Team grid */}
          <div className="about-team-grid">
            {TEAM_MEMBERS.map((m, i) => (
              <div key={m.name} className="about-team-card">
                {/* Photo area */}
                <div style={{
                  height: 'clamp(140px,20vw,200px)',
                  background: PHOTO_BG[i % PHOTO_BG.length],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'clamp(3rem,6vw,4.5rem)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <span style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))' }}>
                    {PHOTO_EMOJIS[i % PHOTO_EMOJIS.length]}
                  </span>
                  {/* Decorative dot grid */}
                  <div style={{
                    position: 'absolute', top: '10px', right: '12px',
                    display: 'grid', gridTemplateColumns: 'repeat(3,4px)', gap: '4px',
                  }}>
                    {Array.from({ length: 9 }).map((_, d) => (
                      <div key={d} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(26,86,219,0.2)' }} />
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: 'clamp(16px,2.5vw,22px)' }}>
                  <h3 className="font-display font-black uppercase" style={{
                    fontSize: 'clamp(0.88rem,1.5vw,1rem)', color: 'var(--blue)', marginBottom: '4px', letterSpacing: '0.01em',
                  }}>
                    {m.name}
                  </h3>
                  <p className="font-display font-black uppercase" style={{
                    fontSize: '0.7rem', color: 'var(--yellow)', letterSpacing: '0.08em', marginBottom: '12px',
                  }}>
                    {m.role}
                  </p>
                  <p style={{ fontSize: 'clamp(0.8rem,1.2vw,0.85rem)', color: 'rgba(12,26,78,0.62)', lineHeight: 1.7 }}>
                    {m.bio}
                  </p>

                  {/* Social icons */}
                  <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                    {['in', 'f', '𝕏'].map(icon => (
                      <div key={icon} style={{
                        width: '28px', height: '28px', borderRadius: '7px',
                        background: 'rgba(26,86,219,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.72rem', fontWeight: 900, color: 'var(--blue)', cursor: 'pointer',
                      }}>
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
    </>
  )
}