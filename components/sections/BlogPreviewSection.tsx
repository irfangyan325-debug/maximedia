import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { BLOG_POSTS } from '@/lib/data'

export default function BlogPreviewSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="flex justify-between items-end flex-wrap gap-5 mb-12">
          <Reveal>
            <div className="eyebrow">Insights</div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>
              Explore Our Social Media Insights
            </h2>
          </Reveal>
          <Link href="/blog" className="btn btn--ghost whitespace-nowrap">
            See All Posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={(i + 1) as 1 | 2 | 3}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div
                  className="h-[178px] flex items-center justify-center text-5xl"
                  style={{ background: `linear-gradient(135deg, rgba(4,211,97,${0.07 + i * 0.03}), #0c1120)` }}
                >
                  {post.emoji}
                </div>
                <div className="p-[22px]">
                  <div className="text-[0.68rem] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: 'var(--green)' }}>
                    {post.tag}
                  </div>
                  <h3 className="mb-2.5 leading-[1.45]" style={{ fontSize: '0.95rem' }}>{post.title}</h3>
                  <p className="text-[0.82rem] leading-[1.6]" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
