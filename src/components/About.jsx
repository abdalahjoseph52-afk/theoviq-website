import { useInView } from 'react-intersection-observer'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { TheoviqMark } from './TheoviqLogo' // Adjusted to assume named export based on Hero.jsx
import './About.css'

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'We Sell Results, Not Features',
    desc: 'Other developers say "I build websites." We say "This will help you get more inquiries and look more professional than your competitors." That shift in mindset changes everything.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Built as a System, Not a Freelance Gig',
    desc: 'Most freelancers lack business structure. Theoviq operates as a complete digital agency — with defined processes, clear deliverables, and accountability at every stage.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'We Understand the Tanzanian Market',
    desc: 'We know what your customers look for, what builds trust locally, and how to position your business to win in a competitive East African digital landscape.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: '7-Day Average Delivery',
    desc: 'We move fast without cutting corners. Our streamlined process means you go from briefing to live website in days — not months of back-and-forth.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'End-to-End Digital Coverage',
    desc: 'One partner for branding, websites, landing pages, and ongoing support. No more juggling three different freelancers who don\'t talk to each other.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Transparent Pricing in Tsh',
    desc: 'No confusing dollar quotes or hidden fees. Every package is clearly priced in Tanzanian Shillings, with nothing ambiguous. What you see is exactly what you pay.',
  },
]

const targetMarkets = [
  { name: 'Clinics & Health', icon: '⚕', desc: 'Build the trust that makes patients choose you' },
  { name: 'Real Estate', icon: '🏠', desc: 'Showcase listings and capture serious buyers' },
  { name: 'Restaurants & Food', icon: '🍽', desc: 'Show your menu, vibe, and drive reservations' },
  { name: 'Beauty Brands', icon: '✨', desc: 'Make your aesthetic speak before they visit' },
  { name: 'Consultants & Coaches', icon: '💼', desc: 'Establish authority and attract premium clients' },
  { name: 'Schools & Education', icon: '📚', desc: 'Professional presence parents and students trust' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section className="about" id="about" ref={ref}>
      {/* Why Theoviq */}
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="dot-lime" />
            Why Theoviq
          </div>
          <h2 className="about__title">
            The digital partner<br />
            <span style={{ color: 'var(--blue)' }}>serious businesses</span><br />
            choose.
          </h2>
        </motion.div>

        <div className="about__grid">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="reason-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="reason-card__icon">{r.icon}</div>
              <div className="reason-card__title">{r.title}</div>
              <div className="reason-card__desc">{r.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Founder strip */}
      <motion.div
        className="founder-strip"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container">
          <div className="founder-strip__inner">
            <div className="founder-strip__mark">
              <TheoviqMark size={56} color="white" accentColor="#B5CE00" />
            </div>
            <div className="founder-strip__content">
              <blockquote className="founder-strip__quote">
                "I built Theoviq because I believe digital strategy should feel like precision engineering, not guesswork. Every system we build has to mean something — for the business, and for the people they serve."
              </blockquote>
              <div className="founder-strip__sig">
                <div className="founder-strip__name">Abdalah Wambura</div>
                <div className="founder-strip__role">Founder & Creative Director · Theoviq</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Target markets */}
      <div className="container" style={{ marginTop: 80 }}>
        <motion.div
          className="targets__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="section-label">
            <span className="dot-lime" />
            Who We Serve
          </div>
          <h3 className="targets__title">We work best with businesses that depend on <span style={{ color: 'var(--blue)' }}>trust and reputation</span> to win customers.</h3>
        </motion.div>

        <div className="targets__grid">
          {targetMarkets.map((t, i) => (
            <motion.div
              key={t.name}
              className="target-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
            >
              <div className="target-card__name">{t.name}</div>
              <div className="target-card__desc">{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}