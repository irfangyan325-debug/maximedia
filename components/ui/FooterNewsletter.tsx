'use client'

export default function FooterNewsletter() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email..."
        className="form-input flex-1 text-sm"
      />
      <button
        type="submit"
        className="px-4 rounded-[9px] font-bold text-sm text-black transition-colors hover:opacity-90 flex-shrink-0"
        style={{ background: 'var(--green)' }}
      >
        →
      </button>
    </form>
  )
}
