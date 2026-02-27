'use client'

import { SERVICES } from '@/lib/data'

export default function ContactForm() {
  return (
    <div
      className="rounded-[24px] p-9"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <h3
        className="font-display font-extrabold mb-7"
        style={{ fontSize: '1.3rem' }}
      >
        Get Your Free Proposal
      </h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-3.5 mb-3.5">
          {[['First Name', 'John'], ['Last Name', 'Doe']].map(([label, ph]) => (
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
          { label: 'Email Address', type: 'email', ph: 'john@company.com' },
          { label: 'Company Name', type: 'text', ph: 'Your Company' },
        ].map((f) => (
          <div key={f.label} className="mb-3.5">
            <label
              className="block text-[0.78rem] font-bold tracking-[0.04em] uppercase mb-1.5"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              {f.label}
            </label>
            <input type={f.type} placeholder={f.ph} className="form-input" />
          </div>
        ))}
        <div className="mb-3.5">
          <label
            className="block text-[0.78rem] font-bold tracking-[0.04em] uppercase mb-1.5"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Service Interested In
          </label>
          <select className="form-input">
            <option value="">Select a service...</option>
            {[
              'Social Media Strategy',
              'Social Media Management',
              'Content Production',
              'Paid Social Advertising',
              'Influencer Marketing',
              'Social Selling',
              'Full-Service Package',
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="mb-3.5">
          <label
            className="block text-[0.78rem] font-bold tracking-[0.04em] uppercase mb-1.5"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Tell Us About Your Goals
          </label>
          <textarea
            placeholder="What are your social media goals?"
            className="form-input resize-y min-h-[100px]"
          />
        </div>
        <button
          type="submit"
          className="w-full py-[15px] rounded-[10px] font-extrabold text-[0.95rem] text-black mt-1.5 transition-all duration-200 hover:opacity-90"
          style={{ background: 'var(--green)' }}
        >
          Send My Free Proposal Request →
        </button>
      </form>
    </div>
  )
}
