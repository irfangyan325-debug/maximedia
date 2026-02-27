'use client'

import { SERVICES } from '@/lib/data'

export default function ProposalForm() {
  return (
    <div
      className="rounded-[24px] p-10"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <h2
        className="font-display font-extrabold mb-2"
        style={{ fontSize: '1.4rem' }}
      >
        Get Your Free Proposal
      </h2>
      <p
        className="text-[0.85rem] mb-8"
        style={{ color: 'var(--text-secondary)' }}
      >
        But only if you&apos;re ready to turn clicks into clients.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[
            ['First Name *', 'John'],
            ['Last Name *', 'Doe'],
          ].map(([label, ph]) => (
            <div key={label}>
              <label
                className="block text-[0.78rem] font-bold tracking-[0.04em] uppercase mb-1.5"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                {label}
              </label>
              <input type="text" placeholder={ph} className="form-input" />
            </div>
          ))}
        </div>
        {[
          { label: 'Email Address *', type: 'email', ph: 'john@company.com' },
          { label: 'Company Name *', type: 'text', ph: 'Your Company' },
          { label: 'Website URL', type: 'url', ph: 'https://yourwebsite.com' },
          { label: 'Monthly Marketing Budget', type: 'text', ph: 'e.g. $5,000 – $10,000' },
        ].map((f) => (
          <div key={f.label} className="mb-4">
            <label
              className="block text-[0.78rem] font-bold tracking-[0.04em] uppercase mb-1.5"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              {f.label}
            </label>
            <input type={f.type} placeholder={f.ph} className="form-input" />
          </div>
        ))}
        <div className="mb-4">
          <label
            className="block text-[0.78rem] font-bold tracking-[0.04em] uppercase mb-1.5"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Service Interested In *
          </label>
          <select className="form-input">
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.title}>{s.title}</option>
            ))}
            <option>Full-Service Package</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-[0.78rem] font-bold tracking-[0.04em] uppercase mb-1.5"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Tell Us About Your Goals *
          </label>
          <textarea
            placeholder="Describe your social media goals and challenges..."
            className="form-input resize-y min-h-[120px]"
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 rounded-[10px] font-extrabold text-[0.95rem] text-black transition-all duration-200 hover:opacity-90"
          style={{ background: 'var(--green)' }}
        >
          Send My Free Proposal Request →
        </button>
        <p
          className="text-center text-[0.75rem] mt-4"
          style={{ color: 'var(--text-muted)' }}
        >
          🔒 We&apos;ll never share your info. No spam, ever.
        </p>
      </form>
    </div>
  )
}
