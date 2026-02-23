import { useInView } from 'react-intersection-observer'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './Process.css'

const steps = [
  {
    number: '01',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Free Strategy Call',
    duration: '30 minutes',
    desc: 'We start by understanding your business, your customers, and your goals. No templates, no guessing — just a real conversation about what you need.',
    deliverable: 'Custom Growth Plan',
    color: 'blue',
  },
  {
    number: '02',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Design & Strategy',
    duration: 'Days 1–3',
    desc: 'We craft your visual strategy — wireframes, brand direction, messaging hierarchy. You see exactly what we\'re building before a single line of code is written.',
    deliverable: 'Approved Design Mockup',
    color: 'lime',
  },
  {
    number: '03',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Build & Optimize',
    duration: 'Days 3–7',
    desc: 'Development happens fast. Mobile-first, SEO-ready, speed-optimized. We build your digital asset to perform — not just to look good in a screenshot.',
    deliverable: 'Live, Tested Website',
    color: 'dark',
  },
  {
    number: '04',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Launch & Support',
    duration: 'Day 7+',
    desc: 'We launch with a checklist — domain, hosting, analytics, Google Business. Then we stay with you. Monthly support keeps your digital presence growing month after month.',
    deliverable: 'Ongoing Growth Partnership',
    color: 'blue',
  },
]

const colorMap = {
  blue: { num: 'var(--blue)', bg: 'var(--blue-faint)', icon: 'var(--blue)', border: 'rgba(16,54,125,0.15)' },
  lime: { num: '#7a8c00', bg: 'rgba(181,206,0,0.1)', icon: '#7a8c00', border: 'rgba(181,206,0,0.25)' },
  dark: { num: 'var(--black)', bg: 'rgba(0,0,0,0.04)', icon: 'var(--black)', border: 'rgba(0,0,0,0.12)' },
}

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section className="process" id="process" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="dot-lime" />
            How We Work
          </div>
          <h2 className="process__title">
            From strategy call<br />
            <span style={{ color: 'var(--blue)' }}>to live in 7 days.</span>
          </h2>
          <p className="process__sub">
            No months of back-and-forth. No confusing jargon. A clear, proven process
            that gets you from invisible to impactful — fast.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="process__steps">
          {steps.map((step, i) => {
            const c = colorMap[step.color]
            return (
              <motion.div
                key={step.number}
                className="process-step"
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Number */}
                <div className="process-step__num" style={{ color: c.num }}>
                  {step.number}
                </div>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="process-step__connector" />
                )}

                {/* Content */}
                <div className="process-step__card">
                  <div
                    className="process-step__icon"
                    style={{ color: c.icon, background: c.bg, borderColor: c.border }}
                  >
                    {step.icon}
                  </div>

                  <div className="process-step__header">
                    <div className="process-step__title">{step.title}</div>
                    <div className="process-step__duration">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gray-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {step.duration}
                    </div>
                  </div>

                  <p className="process-step__desc">{step.desc}</p>

                  <div className="process-step__deliverable">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>You get: <strong>{step.deliverable}</strong></span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Social proof strip */}
        <motion.div
          className="process__proof"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="process__proof-inner">
            <div className="process__proof-stat">
              <span className="process__proof-val">7 days</span>
              <span className="process__proof-lbl">Average delivery</span>
            </div>
            <div className="process__proof-div" />
            <div className="process__proof-stat">
              <span className="process__proof-val">3×</span>
              <span className="process__proof-lbl">Average lead increase</span>
            </div>
            <div className="process__proof-div" />
            <div className="process__proof-stat">
              <span className="process__proof-val">98%</span>
              <span className="process__proof-lbl">Client satisfaction</span>
            </div>
            <div className="process__proof-div" />
            <div className="process__proof-stat">
              <span className="process__proof-val">50+</span>
              <span className="process__proof-lbl">Businesses transformed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}