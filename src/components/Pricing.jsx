import { useInView } from 'react-intersection-observer'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import './Pricing.css'

const plans = [
  {
    tag: 'Fast Cash',
    name: 'Landing Page',
    price: '350,000',
    priceHigh: '600,000',
    period: 'one-time',
    desc: 'The fastest path from zero to leads. A single, laser-focused page designed to convert visitors into paying customers.',
    features: [
      'Conversion-focused design',
      'Lead capture form',
      'Thank-you page',
      'Mobile responsive',
      'Basic SEO setup',
      '2 rounds of revision',
    ],
    cta: 'Start with Landing Page',
    color: 'white',
    highlight: false,
  },
  {
    tag: 'Most Popular',
    name: 'Starter Website',
    price: '500,000',
    priceHigh: '800,000',
    period: 'one-time',
    desc: 'A complete professional web presence that makes your business look credible, trustworthy, and customer-ready from day one.',
    features: [
      '5-page professional website',
      'Mobile-first responsive',
      'Contact form & WhatsApp link',
      'Google Business setup',
      'Basic SEO optimization',
      'Speed optimized',
      '30 days support',
      '3 rounds of revision',
    ],
    cta: 'Build My Website',
    color: 'blue',
    highlight: true,
  },
  {
    tag: 'Premium',
    name: 'Brand Identity',
    price: '600,000',
    priceHigh: '1,200,000',
    period: 'one-time',
    desc: 'Your complete visual identity. Logo, color system, typography, and usage guide — so every touchpoint looks like a premium brand.',
    features: [
      'Logo design (3 concepts)',
      'Color system',
      'Typography selection',
      'Brand usage guide',
      'Business card design',
      'Social media templates',
      'All file formats (SVG, PNG, PDF)',
      'Unlimited revisions',
    ],
    cta: 'Build My Brand',
    color: 'white',
    highlight: false,
  },
  {
    tag: 'Best Value',
    name: 'Growth Bundle',
    price: '1,500,000',
    priceHigh: '3,000,000',
    period: 'one-time',
    desc: 'Everything combined. Branding + Website + Landing Page + SEO setup. The full ecosystem your business needs to dominate online.',
    features: [
      'Complete brand identity',
      'Professional 5-page website',
      'High-converting landing page',
      'SEO foundation setup',
      'Google Business optimization',
      'Social media kit',
      '60 days priority support',
      'Competitor analysis',
    ],
    cta: 'Get Full Growth Bundle',
    color: 'lime',
    highlight: false,
    badge: 'Save up to 40%',
  },
  {
    tag: 'Stable Income',
    name: 'Monthly Support',
    price: '150,000',
    priceHigh: '300,000',
    period: '/month',
    desc: 'Keep your digital presence healthy, growing, and ahead of competitors — every single month without lifting a finger.',
    features: [
      'Monthly maintenance',
      'Content updates (4/month)',
      'SEO monitoring & tweaks',
      'Performance optimization',
      'Security & backups',
      'Monthly report',
    ],
    cta: 'Start Monthly Plan',
    color: 'dark',
    highlight: false,
  },
]

const colorStyles = {
  blue: {
    card: 'pricing-card--blue',
    badge: { background: 'rgba(181,206,0,0.2)', color: 'var(--lime)', border: 'rgba(181,206,0,0.3)' },
    price: '#fff',
    text: 'rgba(255,255,255,0.7)',
    feature: 'rgba(255,255,255,0.65)',
    cta: { background: 'var(--lime)', color: 'var(--black)' },
    check: 'var(--lime)',
  },
  lime: {
    card: 'pricing-card--lime',
    badge: { background: 'rgba(16,54,125,0.15)', color: 'var(--blue)', border: 'rgba(16,54,125,0.2)' },
    price: 'var(--blue)',
    text: '#444',
    feature: '#555',
    cta: { background: 'var(--blue)', color: 'white' },
    check: 'var(--blue)',
  },
  white: {
    card: '',
    badge: { background: 'rgba(181,206,0,0.1)', color: '#7a8c00', border: 'rgba(181,206,0,0.2)' },
    price: 'var(--blue)',
    text: '#555',
    feature: '#555',
    cta: { background: 'var(--blue-faint)', color: 'var(--blue)', border: '1px solid rgba(16,54,125,0.15)' },
    check: 'var(--lime)',
  },
  dark: {
    card: 'pricing-card--dark',
    badge: { background: 'rgba(181,206,0,0.12)', color: 'var(--lime)', border: 'rgba(181,206,0,0.2)' },
    price: 'white',
    text: 'rgba(255,255,255,0.55)',
    feature: 'rgba(255,255,255,0.6)',
    cta: { background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' },
    check: 'var(--lime)',
  },
}

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className="pricing" id="pricing" ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="pricing__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="dot-lime" />
            Pricing
          </div>
          <h2 className="pricing__title">
            Transparent Pricing.<br />
            <span style={{ color: 'var(--lime)' }}>No Surprises.</span>
          </h2>
          <p className="pricing__sub">
            Clear, honest pricing in Tanzanian Shillings. Start small,
            grow big — or go all-in with the Growth Bundle.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="pricing__grid">
          {plans.map((plan, i) => {
            const cs = colorStyles[plan.color]
            return (
              <motion.div
                key={plan.name}
                className={`pricing-card ${cs.card} ${plan.highlight ? 'pricing-card--featured' : ''}`}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Tag */}
                <div
                  className="pricing-card__tag"
                  style={{ background: cs.badge.background, color: cs.badge.color, borderColor: cs.badge.border }}
                >
                  {plan.tag}
                </div>

                {plan.badge && (
                  <div className="pricing-card__save">{plan.badge}</div>
                )}

                {/* Name */}
                <div className="pricing-card__name" style={{ color: cs.price === '#fff' || cs.price === 'white' ? 'rgba(255,255,255,0.85)' : 'var(--black)' }}>
                  {plan.name}
                </div>

                {/* Price */}
                <div className="pricing-card__price-block">
                  <span className="pricing-card__currency" style={{ color: cs.price }}>Tsh</span>
                  <span className="pricing-card__amount" style={{ color: cs.price }}>
                    {plan.price}
                  </span>
                  {plan.priceHigh && plan.priceHigh !== plan.price && (
                    <span className="pricing-card__range" style={{ color: cs.text }}>
                      – {plan.priceHigh}
                    </span>
                  )}
                  <span className="pricing-card__period" style={{ color: cs.text }}>
                    {plan.period}
                  </span>
                </div>

                {/* Desc */}
                <p className="pricing-card__desc" style={{ color: cs.text }}>{plan.desc}</p>

                {/* Divider */}
                <div className="pricing-card__divider" style={{ borderColor: plan.color === 'blue' || plan.color === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)' }} />

                {/* Features */}
                <ul className="pricing-card__features">
                  {plan.features.map((f) => (
                    <li key={f} style={{ color: cs.feature }}>
                      <Check size={14} color={cs.check} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="pricing-card__cta"
                  style={{
                    background: cs.cta.background,
                    color: cs.cta.color,
                    border: cs.cta.border || 'none',
                  }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.cta}
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          className="pricing__note"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="dot-lime" />
          All prices negotiable for long-term partnerships · Free strategy call included with every package · No hidden fees
        </motion.div>

      </div>
    </section>
  )
}