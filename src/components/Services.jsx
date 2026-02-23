import { useInView } from 'react-intersection-observer'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './Services.css'

// Lucide-style SVG icons — brand-appropriate, not emoji
const WebIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)

const LandingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)

const BrandIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const SupportIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
)

const services = [
  {
    icon: <WebIcon />,
    tag:  '01 · Web',
    title: 'Professional\nWebsites',
    desc: 'Mobile-first, fast, and conversion-optimized. We build websites that make your business look credible the moment someone lands on your page — capturing inquiries before they even contact you.',
    bullets: ['Built for Google visibility', 'Mobile-first responsive', 'Lead capture forms', 'Fast loading speed'],
    targets: ['Clinics', 'Restaurants', 'Real Estate', 'Consultants'],
    color: 'blue',
    price: 'From Tsh 500,000',
  },
  {
    icon: <LandingIcon />,
    tag:  '02 · Conversion',
    title: 'High-Converting\nLanding Pages',
    desc: 'Laser-focused pages designed for one goal: turning visitors into leads. Perfect for product launches, campaigns, and events where you need immediate measurable results.',
    bullets: ['Single-goal focused', 'Lead capture optimized', 'A/B test ready', 'Analytics connected'],
    targets: ['Product Launches', 'Events', 'Real Estate Listings', 'Campaigns'],
    color: 'lime',
    price: 'From Tsh 350,000',
  },
  {
    icon: <BrandIcon />,
    tag:  '03 · Identity',
    title: 'Brand Identity\nSystems',
    desc: 'Most businesses in Tanzania use random fonts and inconsistent colors — we fix that. A complete brand system that makes you look premium and charge what you\'re worth.',
    bullets: ['Logo design', 'Color & type system', 'Brand usage guide', 'All file formats'],
    targets: ['All Business Types', 'Startups', 'Established SMEs', 'Professionals'],
    color: 'dark',
    price: 'From Tsh 600,000',
  },
  {
    icon: <SupportIcon />,
    tag:  '04 · Growth',
    title: 'Monthly Support\n& Growth',
    desc: 'Your website isn\'t a one-time project. We maintain, optimize, and grow it every month — SEO improvements, performance tuning, security, and content updates keep you ahead.',
    bullets: ['Monthly maintenance', 'SEO improvements', 'Performance tuning', 'Security & backups'],
    targets: ['Existing website owners', 'All Theoviq clients'],
    color: 'blue',
    price: 'From Tsh 150,000/mo',
    badge: 'Recurring Revenue',
  },
]

const colorMap = {
  blue: { icon: 'var(--blue)', bg: 'var(--blue-faint)', border: 'rgba(16,54,125,0.12)', accent: 'var(--blue)' },
  lime: { icon: '#7a8c00',    bg: 'rgba(181,206,0,0.07)', border: 'rgba(181,206,0,0.2)', accent: 'var(--lime)' },
  dark: { icon: 'var(--black)', bg: 'rgba(12,12,12,0.04)', border: 'rgba(0,0,0,0.1)', accent: 'var(--black)' },
}

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="dot-lime" />
            Services
          </div>
          <h2 className="services__title">
            One Partner.<br />
            <span className="text-accent">Four Pillars.</span>
          </h2>
          <p className="services__sub">
            We don't sell random services — we build a complete digital ecosystem
            that addresses every gap between your business and the customers you deserve.
          </p>
        </motion.div>

        {/* Pain points banner */}
        <motion.div
          className="services__pain"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="services__pain-label">Most SMEs in Tanzania face:</div>
          {[
            'No professional website',
            'Weak, inconsistent branding',
            'Poor online visibility',
            'No customer conversion system',
          ].map((pain, i) => (
            <div key={i} className="services__pain-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{pain}</span>
            </div>
          ))}
          <div className="services__pain-end">Theoviq solves all four.</div>
        </motion.div>

        {/* Service cards */}
        <div className="services__grid">
          {services.map((svc, i) => {
            const c = colorMap[svc.color]
            return (
              <motion.div
                key={svc.tag}
                className="service-card"
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
              >
                {svc.badge && (
                  <div className="service-card__badge">{svc.badge}</div>
                )}

                {/* Icon */}
                <div
                  className="service-card__icon"
                  style={{ color: c.icon, background: c.bg, border: `1px solid ${c.border}` }}
                >
                  {svc.icon}
                </div>

                {/* Tag */}
                <div className="service-card__tag">{svc.tag}</div>

                {/* Title */}
                <h3 className="service-card__title">
                  {svc.title.split('\n').map((line, j) => (
                    <span key={j}>{line}{j === 0 ? <br /> : ''}</span>
                  ))}
                </h3>

                {/* Desc */}
                <p className="service-card__desc">{svc.desc}</p>

                {/* Bullets */}
                <ul className="service-card__bullets">
                  {svc.bullets.map((b) => (
                    <li key={b}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Targets */}
                <div className="service-card__targets">
                  {svc.targets.map((t) => (
                    <span key={t} className="service-card__target">{t}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="service-card__footer">
                  <span className="service-card__price">{svc.price}</span>
                  <button
                    className="service-card__cta"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ background: c.bg, color: c.icon, borderColor: c.border }}
                  >
                    Learn more
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}