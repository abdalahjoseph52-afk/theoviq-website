import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import './Pricing.css'

/* ── Icon per plan ─────────────────────────────── */
const LandingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    <path d="M7 8h.01M10 8h4"/>
    <path d="M7 11h10"/>
  </svg>
)
const WebsiteIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)
const BrandIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)
const BundleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const SupportIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
  </svg>
)

const plans = [
  {
    tag: 'Start Here',
    icon: <LandingIcon />,
    name: 'Landing Page',
    price: '150,000',
    priceHigh: '350,000',
    period: 'one-time',
    desc: 'The fastest way to get online and start capturing leads. One focused page built to convert visitors into customers.',
    features: [
      'Conversion-focused design',
      'Lead capture form',
      'WhatsApp CTA button',
      'Mobile responsive',
      'Basic SEO setup',
      '2 rounds of revision',
      'Delivered in 3 days',
    ],
    cta: 'Get a Landing Page',
    color: 'white',
    highlight: false,
  },
  {
    tag: 'Most Popular',
    icon: <WebsiteIcon />,
    name: 'Starter Website',
    price: '500,000',
    priceHigh: '800,000',
    period: 'one-time',
    desc: 'A complete professional web presence that makes your business look credible, trustworthy, and customer-ready.',
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
    icon: <BrandIcon />,
    name: 'Brand Identity',
    price: '600,000',
    priceHigh: '1,200,000',
    period: 'one-time',
    desc: 'Your complete visual identity — logo, colors, typography, and brand guide so every touchpoint looks premium.',
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
    icon: <BundleIcon />,
    name: 'Growth Bundle',
    price: '1,500,000',
    priceHigh: '3,000,000',
    period: 'one-time',
    desc: 'Everything in one. Branding + Website + Landing Page + SEO. The complete digital ecosystem to dominate online.',
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
    tag: 'Ongoing Growth',
    icon: <SupportIcon />,
    name: 'Monthly Support',
    price: '150,000',
    priceHigh: '300,000',
    period: '/month',
    desc: 'Keep your digital presence healthy and growing every month without lifting a finger.',
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
    badge: { background: 'rgba(181,206,0,0.2)', color: '#d4e833', border: 'rgba(181,206,0,0.3)' },
    iconBg: 'rgba(255,255,255,0.12)',
    iconColor: '#fff',
    name: 'rgba(255,255,255,0.9)',
    price: '#fff',
    text: 'rgba(255,255,255,0.65)',
    feature: 'rgba(255,255,255,0.75)',
    cta: { background: 'var(--lime)', color: 'var(--black)' },
    check: '#B5CE00',
    divider: 'rgba(255,255,255,0.1)',
  },
  lime: {
    card: 'pricing-card--lime',
    badge: { background: 'rgba(16,54,125,0.12)', color: '#10367D', border: 'rgba(16,54,125,0.2)' },
    iconBg: 'rgba(16,54,125,0.12)',
    iconColor: '#10367D',
    name: '#0A2556',
    price: '#0A2556',
    text: '#3a4a5c',
    feature: '#445566',
    cta: { background: 'var(--blue)', color: 'white' },
    check: '#10367D',
    divider: 'rgba(16,54,125,0.1)',
  },
  white: {
    card: '',
    badge: { background: 'rgba(181,206,0,0.1)', color: '#6b7a00', border: 'rgba(181,206,0,0.25)' },
    iconBg: 'rgba(16,54,125,0.07)',
    iconColor: '#10367D',
    name: 'var(--black)',
    price: 'var(--blue)',
    text: '#666',
    feature: '#555',
    cta: { background: 'rgba(16,54,125,0.06)', color: 'var(--blue)', border: '1px solid rgba(16,54,125,0.15)' },
    check: '#B5CE00',
    divider: 'rgba(0,0,0,0.07)',
  },
  dark: {
    card: 'pricing-card--dark',
    badge: { background: 'rgba(181,206,0,0.12)', color: '#B5CE00', border: 'rgba(181,206,0,0.2)' },
    iconBg: 'rgba(255,255,255,0.08)',
    iconColor: '#B5CE00',
    name: 'rgba(255,255,255,0.9)',
    price: 'white',
    text: 'rgba(255,255,255,0.5)',
    feature: 'rgba(255,255,255,0.65)',
    cta: { background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' },
    check: '#B5CE00',
    divider: 'rgba(255,255,255,0.08)',
  },
}

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

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
            grow big — or go all-in with the Growth Bundle and save up to 40%.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="pricing__grid">
          {plans.map((plan, i) => {
            const cs = colorStyles[plan.color]
            return (
              <motion.div
                key={plan.name}
                className={`pricing-card ${cs.card} ${plan.highlight ? 'pricing-card--featured' : ''}`}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09 }}
              >
                {/* Save badge top-right */}
                {plan.badge && (
                  <div className="pricing-card__save">{plan.badge}</div>
                )}

                {/* Top row: icon + tag */}
                <div className="pricing-card__top">
                  <div className="pricing-card__icon" style={{ background: cs.iconBg, color: cs.iconColor }}>
                    {plan.icon}
                  </div>
                  <div
                    className="pricing-card__tag"
                    style={{ background: cs.badge.background, color: cs.badge.color, borderColor: cs.badge.border }}
                  >
                    {plan.tag}
                  </div>
                </div>

                {/* Name */}
                <div className="pricing-card__name" style={{ color: cs.name }}>
                  {plan.name}
                </div>

                {/* Price block */}
                <div className="pricing-card__price-block">
                  <span className="pricing-card__currency" style={{ color: cs.price }}>Tsh</span>
                  <span className="pricing-card__amount" style={{ color: cs.price }}>{plan.price}</span>
                  {plan.priceHigh && (
                    <span className="pricing-card__range" style={{ color: cs.text }}>
                      – {plan.priceHigh}
                    </span>
                  )}
                  <span className="pricing-card__period" style={{ color: cs.text }}>
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="pricing-card__desc" style={{ color: cs.text }}>{plan.desc}</p>

                {/* Divider */}
                <div className="pricing-card__divider" style={{ borderColor: cs.divider }} />

                {/* Features */}
                <ul className="pricing-card__features">
                  {plan.features.map((feat) => (
                    <li key={feat} style={{ color: cs.feature }}>
                      <span className="pricing-card__check" style={{ background: cs.check + '20', color: cs.check }}>
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="pricing-card__cta"
                  style={{ background: cs.cta.background, color: cs.cta.color, border: cs.cta.border || 'none' }}
                  onClick={scrollToContact}
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
          transition={{ delay: 0.7 }}
        >
          <span className="dot-lime" />
          All prices negotiable for long-term partnerships · Free strategy call with every package · No hidden fees
        </motion.div>

      </div>
    </section>
  )
}