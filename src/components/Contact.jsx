import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ArrowUpRight, Phone, Mail, MapPin, Send, Instagram } from 'lucide-react'
import { TheoviqMark } from './TheoviqLogo'
import './Contact.css'

const WHATSAPP_NUMBER = '255688735820'

const contactInfo = [
  {
    icon: <Phone size={18} strokeWidth={1.8} />,
    label: 'WhatsApp',
    value: '+255 688 735 820',
    sub: 'Mon – Sat · 8am – 8pm EAT',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: <Mail size={18} strokeWidth={1.8} />,
    label: 'Email',
    value: 'hello@theoviq.com',
    sub: 'Reply within 4 hours',
    href: 'mailto:hello@theoviq.com',
  },
  {
    icon: <Instagram size={18} strokeWidth={1.8} />,
    label: 'Instagram',
    value: '@theoviq_26',
    sub: 'Follow for tips & updates',
    href: 'https://www.instagram.com/theoviq_26?igsh=NzgxYmZzbmtic3Q5',
  },
  {
    icon: <MapPin size={18} strokeWidth={1.8} />,
    label: 'Location',
    value: 'Dar es Salaam, Tanzania',
    sub: 'Remote-first · Nationwide',
    href: null,
  },
]

const services = [
  'Web Development',
  'Landing Page',
  'Brand Identity',
  'Growth Bundle',
  'Monthly Support',
  'Other / Not Sure',
]

const servicePrices = {
  'Web Development':  'From Tsh 500,000',
  'Landing Page':     'From Tsh 150,000',
  'Brand Identity':   'From Tsh 600,000',
  'Growth Bundle':    'From Tsh 1,500,000',
  'Monthly Support':  'From Tsh 150,000/mo',
  'Other / Not Sure': 'Let\'s talk',
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Build WhatsApp message with all form details
    const price = form.service ? servicePrices[form.service] : ''
    const msg = [
      `👋 *New Inquiry — Theoviq Website*`,
      ``,
      `*Name:* ${form.name}`,
      `*Business:* ${form.business || 'Not provided'}`,
      `*Email:* ${form.email || 'Not provided'}`,
      `*Phone:* ${form.phone || 'Not provided'}`,
      `*Service Needed:* ${form.service || 'Not specified'}`,
      price ? `*Budget Range:* ${price}` : '',
      ``,
      `*Message:*`,
      form.message || '(no message)',
    ].filter(Boolean).join('\n')

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    window.open(waUrl, '_blank')
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <span className="dot-lime" />
            Get Started
          </div>
          <h2 className="contact__title">
            Ready to build<br />
            something <span style={{ color: 'var(--lime)' }}>real?</span>
          </h2>
          <p className="contact__sub">
            Book a free 30-minute strategy call. No commitment, no sales pressure —
            just an honest conversation about what your business needs to grow online.
          </p>
        </motion.div>

        <div className="contact__grid">

          {/* Left: Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Brand */}
            <div className="contact__brand">
              <TheoviqMark size={44} color="white" accentColor="#B5CE00" />
              <div>
                <div className="contact__brand-name">theoviq.</div>
                <div className="contact__brand-sub">Digital Growth Partner</div>
              </div>
            </div>

            {/* Contact items */}
            <div className="contact__items">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  className={`contact-item ${item.href ? 'contact-item--link' : ''}`}
                  target={item.href ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <div className="contact-item__icon">{item.icon}</div>
                  <div>
                    <div className="contact-item__label">{item.label}</div>
                    <div className="contact-item__value">{item.value}</div>
                    <div className="contact-item__sub">{item.sub}</div>
                  </div>
                  {item.href && <ArrowUpRight size={14} className="contact-item__arrow" />}
                </a>
              ))}
            </div>

            {/* Promise */}
            <div className="contact__promise">
              <div className="contact__promise-title">Our Promise</div>
              {[
                'Response within 4 hours',
                'Free strategy call — no commitment',
                'No hidden fees, ever',
                'Results or we fix it',
              ].map((p) => (
                <div key={p} className="contact__promise-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="contact__success-title">Opening WhatsApp…</div>
                <p className="contact__success-sub">
                  Your message is ready to send to Theoviq on WhatsApp. Just hit <strong>Send</strong> in the app and we'll reply within 4 hours.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
                >
                  Open WhatsApp Directly
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
                <div className="contact__success-sub" style={{ marginTop: 12, opacity: 0.5, fontSize: 12 }}>
                  Or email us at hello@theoviq.com
                </div>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="John Makame"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Business Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="business"
                      placeholder="Makame Clinic"
                      value={form.business}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">WhatsApp Number</label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      placeholder="+255 712 345 678"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">What do you need? *</label>
                  <div className="form-services">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`form-service-btn ${form.service === s ? 'form-service-btn--active' : ''}`}
                        onClick={() => setForm(f => ({ ...f, service: s }))}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Tell us about your business</label>
                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    placeholder="What does your business do? What's the main challenge you're facing online? Any specific goals?"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <button type="submit" className="form-submit">
                  <Send size={16} strokeWidth={2} />
                  Book My Free Strategy Call
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </button>

                <p className="form-note">
                  No commitment required · We respond within 4 hours · Your info is confidential
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}