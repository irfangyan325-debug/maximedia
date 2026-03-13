'use client'

interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function BlogPagination({ currentPage, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <>
      <style>{`
        .bpg-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: clamp(32px,5vw,52px);
          flex-wrap: wrap;
        }
        .bpg-btn {
          min-width: clamp(36px,4.5vw,44px);
          height: clamp(36px,4.5vw,44px);
          border-radius: 9px;
          border: 2px solid #b8dff0;
          background: #fff;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(0.75rem,1.2vw,0.86rem);
          letter-spacing: 0.04em;
          color: rgba(12,26,78,0.65);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
          padding: 0 10px;
        }
        .bpg-btn:hover:not(:disabled) { border-color: var(--blue); color: var(--blue); }
        .bpg-btn-active {
          background: var(--blue);
          border-color: var(--blue);
          color: #fff;
          box-shadow: 0 3px 0 #0c1a4e;
        }
        .bpg-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .bpg-arrow {
          background: var(--blue);
          border-color: var(--blue);
          color: #fff;
          font-size: 1rem;
        }
        .bpg-arrow:hover:not(:disabled) { background: #0c1a4e; border-color: #0c1a4e; color: #fff; }
      `}</style>

      <nav className="bpg-wrap" aria-label="Blog pagination">
        {/* Prev */}
        <button
          className="bpg-btn bpg-arrow"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          ←
        </button>

        {/* Page numbers */}
        {pages.map(p => (
          <button
            key={p}
            className={`bpg-btn ${currentPage === p ? 'bpg-btn-active' : ''}`}
            onClick={() => onPageChange(p)}
            aria-label={`Page ${p}`}
            aria-current={currentPage === p ? 'page' : undefined}
          >
            {p}
          </button>
        ))}

        {/* Next */}
        <button
          className="bpg-btn bpg-arrow"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          →
        </button>
      </nav>
    </>
  )
}