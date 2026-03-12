import Link from 'next/link'

const PHOTO_TYPES = [
  {
    icon: '🛍️',
    title: 'Ecommerce',
    desc: 'High-quality images that accurately represent the product and highlight its features with a neutral background.',
    bg: 'linear-gradient(145deg,#c8d8f5,#a0b8e8)',
    tags: ['White BG', 'Product Focus', 'Clean'],
  },
  {
    icon: '🎪',
    title: 'Studio',
    desc: 'Your product brought to life through lighting, props, background, and composition that tell your brand story.',
    bg: 'linear-gradient(145deg,#f5e8c8,#e8d0a0)',
    tags: ['Props & Set', 'Lighting', 'Styled'],
  },
  {
    icon: '🌅',
    title: 'Lifestyle',
    desc: 'Capture the product experience through candid moments and everyday settings. Models & Set included.',
    bg: 'linear-gradient(145deg,#c8e8d8,#a0d0b8)',
    tags: ['Models', 'Real Settings', 'Candid'],
  },
]

export default function StudiosPhotoTypes() {
  return (
    <>
      <style>{`
        .photo-types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: clamp(32px,5vw,52px);
        }
        .photo-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid rgba(26,86,219,0.1);
          background: #fff;
          box-shadow: 0 6px 24px rgba(26,86,219,0.08);
          transition: all 0.25s ease;
        }
        .photo-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 48px rgba(26,86,219,0.15);
        }
        @media (max-width: 768px) {
          .photo-types-grid { grid-template-columns: 1fr; gap: 14px; max-width: 480px; margin-left: auto; margin-right: auto; }
          .photo-card:hover { transform: none; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .photo-types-grid { grid-template-columns: repeat(3, 1fr); max-width: 100%; }
        }
      `}</style>

      <section style={{ background: '#fff', padding: 'clamp(64px,9vw,104px) 0' }}>
        <div className="container">

          {/* Photography intro block */}
          <div style={{
            background: '#f2f5fc',
            borderRadius: '20px',
            padding: 'clamp(28px,4vw,48px)',
            marginBottom: 'clamp(48px,7vw,80px)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(24px,4vw,56px)',
            alignItems: 'center',
          }}
          className="photo-intro-grid">
            <style>{`
              .photo-intro-grid { grid-template-columns: 1fr 1fr; }
              @media (max-width: 640px) { .photo-intro-grid { grid-template-columns: 1fr; } }
            `}</style>
            <div>
              <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--yellow)', marginBottom: '10px' }}>
                PHOTOGRAPHY
              </p>
              <h2 className="font-display font-black uppercase" style={{
                fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', color: 'var(--blue)',
                lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: 'clamp(12px,2vw,18px)',
              }}>
                STOCK PHOTOS WON&apos;T CUT IT
              </h2>
              <p style={{ fontSize: 'clamp(0.86rem,1.4vw,0.97rem)', color: 'rgba(12,26,78,0.65)', lineHeight: 1.82 }}>
                Stock photography just doesn&apos;t do your product or business justice. Having styled, professional photos of your actual products solidifies your brand identity. Photography drives a lot of decision-making — convert site visitors to customers with one of the most convincing tools at your disposal: great pictures.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg,#dceeff,#eef6ff)',
              borderRadius: '16px', aspectRatio: '4/3',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 'clamp(3.5rem,7vw,5rem)',
              border: '1.5px solid rgba(26,86,219,0.1)',
            }}>
              📸
            </div>
          </div>

          {/* Let's Talk Video type tabs label */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(28px,4vw,44px)' }}>
            <p className="font-display font-black uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--blue)', marginBottom: '8px' }}>
              PHOTOGRAPHY STYLES
            </p>
            <h2 className="font-display font-black uppercase" style={{
              fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', color: 'var(--blue)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>
              CHOOSE YOUR{' '}
              <span style={{ color: 'var(--yellow)', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textDecorationThickness: '4px', textUnderlineOffset: '5px' }}>STYLE</span>
            </h2>
          </div>

          <div className="photo-types-grid">
            {PHOTO_TYPES.map(p => (
              <div key={p.title} className="photo-card">
                {/* Image area */}
                <div style={{
                  background: p.bg,
                  aspectRatio: '1/1',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'clamp(3rem,6vw,4.5rem)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <span style={{ filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.1))' }}>{p.icon}</span>
                </div>

                {/* Content */}
                <div style={{ padding: 'clamp(18px,2.5vw,26px)' }}>
                  <h3 className="font-display font-black uppercase" style={{
                    fontSize: 'clamp(0.88rem,1.5vw,1rem)', color: 'var(--blue)',
                    marginBottom: '8px', letterSpacing: '0.02em',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(0.8rem,1.2vw,0.88rem)', color: 'rgba(12,26,78,0.62)', lineHeight: 1.75, marginBottom: '14px' }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                    {p.tags.map(t => (
                      <span key={t} className="font-display font-black uppercase" style={{
                        fontSize: '0.62rem', letterSpacing: '0.06em',
                        padding: '3px 9px', borderRadius: '100px',
                        background: 'rgba(26,86,219,0.07)', color: 'var(--blue)',
                      }}>{t}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="font-display font-black uppercase" style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '9px 18px',
                    background: 'var(--blue)', color: '#fff',
                    borderRadius: '8px', fontSize: '0.7rem',
                    letterSpacing: '0.1em', textDecoration: 'none',
                  }}>
                    GET STARTED →
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