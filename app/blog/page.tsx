import type { Metadata } from 'next'
import BlogHero       from '../../components/blog/BlogHero'
import BlogGrid       from '../../components/blog/BlogGrid'
import BlogSidebar    from '../../components/blog/BlogSidebar'
import BlogNewsletter from '../../components/blog/BlogNewsletter'

export const metadata: Metadata = {
  title: 'Blog — Social Media Marketing Insights & Resources',
  description: 'Stay ahead of the curve with the latest social media strategies, trends, and insights from the MAXIMEDIA team.',
}

export default function BlogPage() {
  return (
    <>
      <style>{`
        .blog-layout {
          background: #ffffff;
          padding: clamp(48px,7vw,88px) 0 clamp(56px,8vw,88px);
        }
        .blog-heading {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(2rem,5.5vw,3.8rem);
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: var(--blue);
          text-transform: uppercase;
          margin-bottom: clamp(28px,4vw,44px);
        }
        /* 2-column layout: posts left, sidebar right */
        .blog-cols {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: clamp(24px,4vw,52px);
          align-items: start;
        }
        @media (max-width: 1024px) {
          .blog-cols { grid-template-columns: 1fr 260px; }
        }
        @media (max-width: 800px) {
          .blog-cols { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <BlogHero />

      {/* Main content area */}
      <div className="blog-layout">
        <div className="container">
          <h2 className="blog-heading">RECENT RESOURCES</h2>

          <div className="blog-cols">
            <BlogGrid />
            <BlogSidebar />
          </div>
        </div>
      </div>
      <BlogNewsletter />
    </>
  )
}