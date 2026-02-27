'use client'

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-3 max-w-[420px] mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address..."
        className="form-input flex-1"
      />
      <button type="submit" className="btn btn--primary whitespace-nowrap">
        Subscribe →
      </button>
    </form>
  )
}
