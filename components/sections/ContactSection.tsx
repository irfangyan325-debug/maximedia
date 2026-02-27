import Reveal from '@/components/ui/Reveal'
import ContactForm from '@/components/ui/Contactform'

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[72px] items-start">
          <Reveal>
            <div className="eyebrow">Get In Touch</div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}>
              Have Questions? Contact Us Directly
            </h2>
            <p className="my-4 text-[0.93rem] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              We&apos;d love to hear about your organization&apos;s goals on social media.
              Get in touch with us today!
            </p>
            <a
              href="mailto:info@maximedia.com"
              className="inline-flex items-center gap-2.5 font-bold text-[1rem]"
              style={{ color: 'var(--green)' }}
            >
              📧 info@maximedia.com
            </a>
            <div
              className="mt-7 p-[20px_22px] rounded-[14px] text-[0.84rem] leading-[1.85]"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            >
              <strong className="block mb-1.5" style={{ color: 'rgba(255,255,255,0.8)' }}>
                📍 MAXIMEDIA: THE Social Media Agency
              </strong>
              Your Address Here, Suite 100<br />
              City, State ZIP<br />
              (000) 000-0000
            </div>
          </Reveal>
          <Reveal delay={2}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
