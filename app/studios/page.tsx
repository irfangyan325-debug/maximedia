import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = { title: 'Studios — Social Content Production' }

const SERVICES = [
  { icon: '🎬', title: 'Video Production', desc: 'Professional video for TikTok, Reels, YouTube, and beyond. From concept to final cut.' },
  { icon: '📸', title: 'Photography', desc: 'Brand photography and product shoots that stop the scroll and tell your story visually.' },
  { icon: '🎨', title: 'Graphic Design', desc: 'Custom graphics and visual assets built specifically for each social platform.' },
  { icon: '🎙️', title: 'Podcast Production', desc: 'End-to-end podcast production — recording, editing, and social-ready audiograms.' },
  { icon: '✍️', title: 'Copywriting', desc: 'Captions, scripts, and ad copy that sound like your brand and compel action.' },
  { icon: '🎭', title: 'Motion Graphics', desc: 'Animated explainers, story templates, and eye-catching motion content at scale.' },
]

export default function StudiosPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[74px]" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 55% at 65% 40%, rgba(4,211,97,.09) 0%, transparent 55%)' }} />
        <div className="container relative z-10 py-24">
          <div className="max-w-[720px]">
            <Reveal><div className="eyebrow">MAXIMEDIA Studios</div></Reveal>
            <Reveal delay={1}><h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>Where <span className="green-text">Scroll-Stopping</span> Content Gets Made</h1></Reveal>
            <Reveal delay={2}><p className="mt-6 text-[1.05rem] leading-[1.8] max-w-[580px]" style={{ color: 'var(--text-secondary)' }}>Our in-house production studio creates world-class social content — video, photo, design, and copy — purpose-built for every platform and audience.</p></Reveal>
            <Reveal delay={3} className="flex flex-wrap gap-3.5 mt-10">
              <Link href="/contact" className="btn btn--primary">Book Studio Time →</Link>
              <Link href="/work" className="btn btn--outline">See Our Content</Link>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <Reveal className="text-center mb-14"><div className="eyebrow eyebrow--center">Studio Services</div><h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>Everything Under One Roof</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3 + 1) as 1|2|3}>
                <div className="card p-7 h-full">
                  <div className="icon-box mb-5 text-2xl">{s.icon}</div>
                  <h3 className="mb-3">{s.title}</h3>
                  <p className="text-[0.875rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(4,211,97,.07) 0%, transparent 60%)' }} />
        <div className="container relative z-10 max-w-[580px] mx-auto">
          <Reveal><h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>Ready to Create Content That Converts?</h2></Reveal>
          <Reveal><p className="my-5 text-[0.93rem] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>Let&apos;s build a content production plan tailored to your brand, audience, and goals.</p></Reveal>
          <Reveal><Link href="/contact" className="btn btn--primary">Get a Content Proposal →</Link></Reveal>
        </div>
      </section>
    </>
  )
}
