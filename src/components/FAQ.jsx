import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQ.css'

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most landing pages are delivered in 3 days. Full websites take 5–7 days from the moment we agree on the design. We move fast without cutting corners — you'll always know exactly where things stand.",
  },
  {
    q: "Do I need to provide anything before we start?",
    a: "Just your business name, what you do, who your customers are, and any photos or content you already have. We handle the rest — copywriting suggestions, design, and technical setup. If you have nothing, we'll work with what we create together.",
  },
  {
    q: "What if I don't like the design?",
    a: "Every package includes revision rounds. We don't move forward until you're happy with the direction. We also show you a mockup before building anything, so there are no surprises.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We typically work with 50% upfront and 50% on delivery. For larger projects like the Growth Bundle, we can arrange a 3-part payment plan. Just discuss it with us on the strategy call.",
  },
  {
    q: "Do you work with businesses outside Dar es Salaam?",
    a: "Absolutely. We work remotely with clients across Tanzania — Arusha, Mwanza, Dodoma, Zanzibar, and everywhere in between. Everything is handled over WhatsApp, email, and video calls.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Every website we build includes basic on-page SEO — proper headings, meta tags, page speed optimization, and Google Business setup where applicable. Ranking takes time, but we make sure the foundation is solid from day one.",
  },
  {
    q: "What happens after my website is launched?",
    a: "You get a handover session where we walk you through how to manage your site. We also offer Monthly Support plans starting at Tsh 150,000/month if you want us to handle updates, monitoring, and growth ongoing.",
  },
  {
    q: "Why Theoviq over a freelancer or a bigger agency?",
    a: "Freelancers often lack structure and accountability. Big agencies are expensive and treat you like a ticket number. Theoviq gives you agency-quality work with the personal attention of a dedicated partner — at honest local prices.",
  },
]

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="faq" id="faq" ref={ref}>
      <div className="container">

        <motion.div
          className="faq__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="dot-lime" />
            FAQ
          </div>
          <h2 className="faq__title">
            Questions we get<br />
            <span style={{ color: 'var(--lime)' }}>all the time.</span>
          </h2>
          <p className="faq__sub">
            No fluff. Straight answers about working with Theoviq.
          </p>
        </motion.div>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className={`faq__item ${open === i ? 'faq__item--open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <button className="faq__question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    {open === i
                      ? <line x1="5" y1="12" x2="19" y2="12" />
                      : <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>
                    }
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    className="faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="faq__cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p>Still have questions?</p>
          <a
            href="https://wa.me/255688735820?text=Hi%20Theoviq!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            Ask us on WhatsApp
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}