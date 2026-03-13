'use client'

import { useState } from 'react'
import BlogPostCard from './BlogPostCard'
import BlogPagination from './BlogPagination'
import { BLOG_POSTS } from '@/lib/data'

const POSTS_PER_PAGE = 5 

export default function BlogGrid() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE)
  const startIdx = (page - 1) * POSTS_PER_PAGE
  const pagePosts = BLOG_POSTS.slice(startIdx, startIdx + POSTS_PER_PAGE)

  const [featured, ...gridPosts] = pagePosts

  const handlePageChange = (p: number) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        .bg-posts { display: flex; flex-direction: column; gap: clamp(14px,2vw,20px); }
        .bg-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(14px,2vw,20px);
        }
        @media (max-width: 560px) { .bg-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="bg-posts">
        {/* Featured (first) post — full width */}
        {featured && <BlogPostCard post={featured} featured />}

        {/* Remaining posts — 2-col grid */}
        {gridPosts.length > 0 && (
          <div className="bg-grid">
            {gridPosts.map(post => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>

      <BlogPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}