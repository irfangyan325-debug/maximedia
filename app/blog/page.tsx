import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import NewsletterForm from '@/components/ui/NewsletterForm'
import { BLOG_POSTS } from '@/lib/data'

export const metadata: Metadata = { title: 'Blog — Social Media Marketing Insights & Resources' }

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS
  return (
    <>
      <section className="relative overflow-hidden pt-[74px]" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 60% 40%, rgba(4,211,97,.07) 0%, transparent 55%)' }} />
        <div className="container relative z-10 py-20 text-center">
          <Reveal><div className="eyebrow eyebrow--center">Blog & Resources</div></Reveal>
          <Reveal delay={1}><h1 className="mt-2 max-w-[620px] mx-auto" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>Social Media <span className="green-text">Insights</span> & Resources</h1></Reveal>
          <Reveal delay={2}><p className="mt-5 text-[1.02rem] leading-[1.8] max-w-[520px] mx-auto" style={{ color: 'var(--text-secondary)' }}>Stay ahead of the curve with the latest strategies, trends, and insights from the MAXIMEDIA team.</p></Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          {/* Featured post */}
          <Reveal className="mb-10">
            <Link href={`/blog/${featured.slug}`} className="grid lg:grid-cols-2 gap-0 rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-2xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <div className="h-64 lg:h-auto flex items-center justify-center text-8xl" style={{ background: 'linear-gradient(135deg, rgba(4,211,97,.12), #0c1120)' }}>{featured.emoji}</div>
              <div className="p-9 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[0.68rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-[6px]" style={{ background: 'var(--green-subtle)', border: '1px solid var(--green-border)', color: 'var(--green)' }}>{featured.tag}</span>
                  <span className="text-[0.75rem]" style={{ color: 'var(--text-muted)' }}>{featured.readTime} · {featured.date}</span>
                </div>
                <h2 className="mb-4 leading-[1.3]" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)' }}>{featured.title}</h2>
                <p className="mb-6 text-[0.9rem] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>{featured.excerpt}</p>
                <span className="font-semibold text-[0.9rem]" style={{ color: 'var(--green)' }}>Read Article →</span>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3 + 1) as 1|2|3}>
                <Link href={`/blog/${post.slug}`} className="block rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <div className="h-[178px] flex items-center justify-center text-5xl" style={{ background: `linear-gradient(135deg, rgba(4,211,97,${0.06 + i * 0.025}), #0c1120)` }}>{post.emoji}</div>
                  <div className="p-[22px]">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="text-[0.68rem] font-bold tracking-[0.1em] uppercase" style={{ color: 'var(--green)' }}>{post.tag}</span>
                      <span className="text-[0.68rem]" style={{ color: 'var(--text-muted)' }}>{post.readTime}</span>
                    </div>
                    <h3 className="mb-2.5 leading-[1.45]" style={{ fontSize: '0.97rem' }}>{post.title}</h3>
                    <p className="text-[0.82rem] leading-[1.6] mb-4" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                    <div className="text-[0.78rem]" style={{ color: 'var(--text-muted)' }}>{post.date}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container max-w-[620px] mx-auto text-center">
          <Reveal><div className="eyebrow eyebrow--center mb-4">Newsletter</div></Reveal>
          <Reveal><h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.4rem)' }}>Join 10,000+ Marketers Getting Ahead on Social</h2></Reveal>
          <Reveal><p className="my-5 text-[0.93rem] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>Weekly insights, strategy breakdowns, and industry news — delivered to your inbox.</p></Reveal>
          <Reveal>
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
