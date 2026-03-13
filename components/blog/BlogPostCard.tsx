import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  tag: string
  readTime: string
  excerpt: string
  emoji: string
}

interface Props {
  post: BlogPost
  featured?: boolean
}

export default function BlogPostCard({ post, featured = false }: Props) {
  return (
    <>
      <style>{`
        .bpc-card {
          background: #ffffff;
          border: 1.5px solid #b8dff0;
          border-radius: 16px;
          padding: clamp(18px,2.5vw,28px) clamp(18px,2.5vw,28px) clamp(16px,2vw,22px);
          box-shadow: 4px 4px 0 #c9e8f5, 0 2px 12px rgba(26,86,219,0.05);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          display: block;
        }
        .bpc-card:hover {
          transform: translateY(-3px);
          box-shadow: 4px 6px 0 #b8dff0, 0 8px 24px rgba(26,86,219,0.1);
        }
        .bpc-meta {
          font-size: clamp(0.72rem,1.1vw,0.8rem);
          color: rgba(12,26,78,0.5);
          margin-bottom: clamp(8px,1.2vw,12px);
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
        }
        .bpc-meta-author {
          color: var(--blue);
          font-weight: 600;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;
        }
        .bpc-title {
          font-family: var(--font-display);
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          color: var(--blue);
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
          line-height: 1.15;
          letter-spacing: -0.01em;
          margin-bottom: clamp(14px,2vw,20px);
          display: block;
          transition: opacity 0.15s;
        }
        .bpc-title:hover { opacity: 0.78; }
        .bpc-title-featured { font-size: clamp(1.05rem,2.2vw,1.4rem); }
        .bpc-title-regular  { font-size: clamp(0.9rem,1.6vw,1.1rem); }
        .bpc-excerpt {
          font-size: clamp(0.8rem,1.2vw,0.9rem);
          color: rgba(12,26,78,0.62);
          line-height: 1.72;
          margin-bottom: clamp(14px,2vw,20px);
        }
        .bpc-read-btn {
          display: inline-flex;
          align-items: center;
          padding: clamp(9px,1.4vw,12px) clamp(16px,2.2vw,22px);
          background: var(--yellow);
          color: #0c1a4e;
          border-radius: 7px;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.65rem,1vw,0.74rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid #0c1a4e;
          box-shadow: 0 3px 0 #0c1a4e;
          transition: all 0.15s;
          white-space: nowrap;
        }
        .bpc-read-btn:hover { transform: translateY(-1px); box-shadow: 0 5px 0 #0c1a4e; }
        .bpc-tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 5px;
          background: #e8f0fe;
          color: var(--blue);
          border: 1px solid #b8d0f8;
        }
      `}</style>

      <div className="bpc-card">
        {/* Meta */}
        <div className="bpc-meta">
          <span>By </span>
          <span className="bpc-meta-author">{post.author}</span>
          <span> | {post.date}</span>
          {post.tag && <span className="bpc-tag" style={{ marginLeft: '6px' }}>{post.tag}</span>}
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className={`bpc-title ${featured ? 'bpc-title-featured' : 'bpc-title-regular'}`}>
          {post.title}
        </Link>

        {/* Excerpt — only on featured */}
        {featured && post.excerpt && (
          <p className="bpc-excerpt">{post.excerpt}</p>
        )}

        {/* CTA */}
        <Link href={`/blog/${post.slug}`} className="bpc-read-btn">
          READ MORE
        </Link>
      </div>
    </>
  )
}