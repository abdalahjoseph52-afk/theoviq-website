import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import './Portfolio.css'

const categories = ['All', 'Web Design', 'Branding', 'Landing Page']

const projects = [
  {
    id: 1,
    category: 'Web Design',
    client: 'Makame Dental Clinic',
    type: 'Clinic · Dar es Salaam',
    title: 'Full Website + Patient Booking System',
    result: '+180% online inquiries in 45 days',
    tags: ['5 Pages', 'Booking Form', 'SEO', 'Mobile-First'],
    color: '#10367D',
    accent: '#B5CE00',
    mockup: 'clinic',
  },
  {
    id: 2,
    category: 'Branding',
    client: 'Nyota Real Estate',
    type: 'Real Estate · Arusha',
    title: 'Complete Brand Identity System',
    result: 'Repositioned as premium agency — 2× rate increase',
    tags: ['Logo', 'Color System', 'Typography', 'Brand Guide'],
    color: '#0A2556',
    accent: '#B5CE00',
    mockup: 'real-estate',
  },
  {
    id: 3,
    category: 'Landing Page',
    client: 'Zuri Beauty Studio',
    type: 'Beauty Brand · Mwanza',
    title: 'Campaign Landing Page — Flash Sale',
    result: '340 leads captured in 72 hours',
    tags: ['Lead Capture', 'WhatsApp CTA', 'Countdown Timer'],
    color: '#1A4DA8',
    accent: '#D4E833',
    mockup: 'beauty',
  },
  {
    id: 4,
    category: 'Web Design',
    client: 'Kilimanjaro Consultants',
    type: 'Consulting · Nairobi',
    title: 'Authority Website + Content Strategy',
    result: 'First page Google in 60 days — 4 enterprise clients',
    tags: ['Authority Design', 'Blog System', 'SEO Foundation'],
    color: '#10367D',
    accent: '#B5CE00',
    mockup: 'consulting',
  },
  {
    id: 5,
    category: 'Branding',
    client: 'Spice Route Restaurant',
    type: 'Restaurant · Zanzibar',
    title: 'Restaurant Brand Identity + Menu Design',
    result: 'Booked solid 3 weeks in advance post-rebrand',
    tags: ['Logo', 'Menu Design', 'Social Kit', 'Signage'],
    color: '#0C0C0C',
    accent: '#B5CE00',
    mockup: 'restaurant',
  },
  {
    id: 6,
    category: 'Landing Page',
    client: 'EduPath Academy',
    type: 'Education · Dodoma',
    title: 'Enrollment Landing Page — New Term',
    result: '120 enrollment inquiries in first week',
    tags: ['Enrollment Form', 'Course Preview', 'Trust Signals'],
    color: '#10367D',
    accent: '#B5CE00',
    mockup: 'education',
  },
]

// SVG mockup renders for each project type
const Mockups = {
  clinic: ({ color, accent }) => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Browser chrome */}
      <rect width="420" height="280" rx="12" fill="#1a1a1a"/>
      <rect x="0" y="0" width="420" height="36" rx="12" fill="#2a2a2a"/>
      <rect x="0" y="24" width="420" height="12" fill="#2a2a2a"/>
      <circle cx="16" cy="18" r="5" fill="#FF5F57"/>
      <circle cx="30" cy="18" r="5" fill="#FEBC2E"/>
      <circle cx="44" cy="18" r="5" fill="#28C840"/>
      <rect x="80" y="11" width="200" height="14" rx="7" fill="#333"/>
      <text x="180" y="22" fontFamily="monospace" fontSize="9" fill="#666" textAnchor="middle">makamedental.co.tz</text>
      {/* Navbar */}
      <rect x="0" y="36" width="420" height="40" fill="white"/>
      <rect x="16" y="50" width="12" height="12" rx="3" fill={color}/>
      <rect x="32" y="54" width="50" height="6" rx="3" fill={color}/>
      <rect x="280" y="50" width="40" height="10" rx="5" fill="#eee"/>
      <rect x="326" y="50" width="40" height="10" rx="5" fill="#eee"/>
      <rect x="372" y="48" width="36" height="14" rx="7" fill={accent}/>
      {/* Hero */}
      <rect x="0" y="76" width="420" height="140" fill={color}/>
      <rect x="16" y="92" width="100" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
      <rect x="16" y="106" width="160" height="14" rx="4" fill="rgba(255,255,255,0.9)"/>
      <rect x="16" y="125" width="130" height="14" rx="4" fill="rgba(255,255,255,0.9)"/>
      <rect x="16" y="144" width="80" height="7" rx="3" fill="rgba(255,255,255,0.4)"/>
      <rect x="16" y="155" width="70" height="7" rx="3" fill="rgba(255,255,255,0.4)"/>
      <rect x="16" y="172" width="80" height="22" rx="11" fill={accent}/>
      {/* Right image placeholder */}
      <rect x="220" y="84" width="180" height="120" rx="10" fill="rgba(255,255,255,0.07)"/>
      <circle cx="310" cy="134" r="32" fill="rgba(255,255,255,0.06)"/>
      <path d="M295 134 A15 15 0 1 0 310 149" stroke="rgba(255,255,255,0.4)" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <rect x="303" y="148" width="6" height="14" rx="3" fill="rgba(255,255,255,0.4)"/>
      <circle cx="310" cy="149" r="4" fill={accent}/>
      {/* Cards row */}
      <rect x="0" y="220" width="420" height="60" fill="#f5f5f5"/>
      <rect x="12" y="230" width="120" height="40" rx="8" fill="white" style={{boxShadow:'0 2px 8px rgba(0,0,0,.1)'}}/>
      <rect x="144" y="230" width="120" height="40" rx="8" fill="white"/>
      <rect x="276" y="230" width="120" height="40" rx="8" fill="white"/>
      <rect x="24" y="240" width="8" height="8" rx="2" fill={color}/>
      <rect x="36" y="242" width="60" height="4" rx="2" fill="#ccc"/>
      <rect x="36" y="250" width="40" height="4" rx="2" fill="#eee"/>
    </svg>
  ),
  'real-estate': ({ color, accent }) => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="420" height="280" rx="12" fill="#0f0f0f"/>
      {/* Dark nav */}
      <rect x="0" y="0" width="420" height="50" fill={color}/>
      <rect x="16" y="18" width="10" height="14" rx="3" fill="white" opacity="0.8"/>
      <rect x="30" y="22" width="45" height="6" rx="3" fill="white" opacity="0.7"/>
      <rect x="350" y="18" width="56" height="16" rx="8" fill={accent}/>
      {/* Hero with property image */}
      <rect x="0" y="50" width="420" height="160" fill="#181818"/>
      {/* Property grid */}
      <rect x="16" y="66" width="185" height="130" rx="10" fill="#252525"/>
      <rect x="16" y="66" width="185" height="80" rx="10" fill="#303030"/>
      {/* House icon */}
      <path d="M88 100 L108 84 L128 100 L128 120 L88 120 Z" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
      <rect x="100" y="108" width="10" height="12" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="23" y="152" width="60" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
      <rect x="23" y="162" width="40" height="4" rx="2" fill={accent} opacity="0.8"/>
      <rect x="23" y="170" width="50" height="4" rx="2" fill="rgba(255,255,255,0.25)"/>
      {/* Second card */}
      <rect x="211" y="66" width="195" height="130" rx="10" fill="#252525"/>
      <rect x="211" y="66" width="195" height="80" rx="10" fill="#2a2a2a"/>
      <path d="M283 100 L303 84 L323 100 L323 120 L283 120 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)"/>
      <rect x="218" y="152" width="60" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
      <rect x="218" y="162" width="40" height="4" rx="2" fill={accent} opacity="0.8"/>
      {/* Bottom bar */}
      <rect x="0" y="214" width="420" height="66" fill="#111"/>
      <rect x="16" y="224" width="160" height="10" rx="5" fill="rgba(255,255,255,0.15)"/>
      <rect x="16" y="239" width="100" height="8" rx="4" fill="rgba(255,255,255,0.07)"/>
      <rect x="300" y="226" width="100" height="28" rx="14" fill={color}/>
      <rect x="314" y="236" width="70" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
    </svg>
  ),
  beauty: ({ color, accent }) => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="420" height="280" rx="12" fill="#fafafa"/>
      {/* Top gradient strip */}
      <rect x="0" y="0" width="420" height="160" fill={color} rx="12"/>
      <rect x="0" y="148" width="420" height="12" fill={color}/>
      {/* Centered content */}
      <rect x="140" y="20" width="140" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
      <rect x="80" y="36" width="260" height="18" rx="6" fill="rgba(255,255,255,0.9)"/>
      <rect x="110" y="62" width="200" height="12" rx="4" fill="rgba(255,255,255,0.5)"/>
      <rect x="130" y="80" width="160" height="12" rx="4" fill="rgba(255,255,255,0.4)"/>
      {/* CTA */}
      <rect x="150" y="102" width="120" height="34" rx="17" fill={accent}/>
      <rect x="170" y="113" width="80" height="10" rx="4" fill="rgba(0,0,0,0.5)"/>
      {/* Timer chips */}
      <rect x="60" y="142" width="60" height="28" rx="8" fill="rgba(255,255,255,0.12)" strokeWidth="1" stroke="rgba(255,255,255,0.2)"/>
      <rect x="130" y="142" width="60" height="28" rx="8" fill="rgba(255,255,255,0.12)" strokeWidth="1" stroke="rgba(255,255,255,0.2)"/>
      <rect x="200" y="142" width="60" height="28" rx="8" fill="rgba(255,255,255,0.12)" strokeWidth="1" stroke="rgba(255,255,255,0.2)"/>
      <rect x="270" y="142" width="90" height="28" rx="8" fill={accent}/>
      <rect x="70" y="154" width="40" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
      <rect x="140" y="154" width="40" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
      <rect x="210" y="154" width="40" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
      {/* Cards below */}
      <rect x="16" y="176" width="120" height="90" rx="10" fill="white" strokeWidth="1" stroke="#eee"/>
      <rect x="16" y="176" width="120" height="54" rx="10" fill="#efefef"/>
      <rect x="24" y="238" width="50" height="6" rx="3" fill="#ccc"/>
      <rect x="24" y="248" width="35" height="5" rx="2" fill={accent} opacity="0.7"/>
      <rect x="150" y="176" width="120" height="90" rx="10" fill="white" strokeWidth="1" stroke="#eee"/>
      <rect x="150" y="176" width="120" height="54" rx="10" fill="#e8e8e8"/>
      <rect x="284" y="176" width="120" height="90" rx="10" fill="white" strokeWidth="1" stroke="#eee"/>
      <rect x="284" y="176" width="120" height="54" rx="10" fill="#f0f0f0"/>
    </svg>
  ),
  consulting: ({ color, accent }) => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="420" height="280" rx="12" fill="#f8f8f6"/>
      {/* White nav */}
      <rect x="0" y="0" width="420" height="44" rx="12" fill="white" strokeWidth="1" stroke="#eee"/>
      <rect x="0" y="32" width="420" height="12" fill="white"/>
      <rect x="16" y="16" width="10" height="12" rx="3" fill={color}/>
      <rect x="30" y="19" width="44" height="6" rx="3" fill={color}/>
      <rect x="260" y="17" width="36" height="10" rx="5" fill="#f0f0f0"/>
      <rect x="302" y="17" width="36" height="10" rx="5" fill="#f0f0f0"/>
      <rect x="346" y="15" width="60" height="14" rx="7" fill={accent}/>
      {/* 2-col layout */}
      <rect x="16" y="58" width="180" height="200" rx="10" fill="white" strokeWidth="1" stroke="#eee"/>
      {/* Text content */}
      <rect x="28" y="72" width="60" height="6" rx="3" fill={accent} opacity="0.7"/>
      <rect x="28" y="84" width="150" height="12" rx="4" fill="#222"/>
      <rect x="28" y="100" width="130" height="12" rx="4" fill="#222"/>
      <rect x="28" y="118" width="156" height="5" rx="2" fill="#ddd"/>
      <rect x="28" y="127" width="140" height="5" rx="2" fill="#ddd"/>
      <rect x="28" y="136" width="110" height="5" rx="2" fill="#ddd"/>
      {/* Metrics */}
      <rect x="28" y="155" width="70" height="50" rx="8" fill="#f5f5f5" strokeWidth="1" stroke="#eee"/>
      <rect x="104" y="155" width="70" height="50" rx="8" fill={color}/>
      <rect x="36" y="163" width="30" height="10" rx="3" fill={color} opacity="0.7"/>
      <rect x="36" y="178" width="50" height="5" rx="2" fill="#ccc"/>
      <rect x="112" y="163" width="30" height="10" rx="3" fill={accent}/>
      <rect x="112" y="178" width="50" height="5" rx="2" fill="rgba(255,255,255,0.3)"/>
      {/* Right column */}
      <rect x="208" y="58" width="196" height="200" rx="10" fill={color}/>
      <rect x="220" y="72" width="60" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
      <rect x="220" y="84" width="170" height="10" rx="4" fill="rgba(255,255,255,0.8)"/>
      <rect x="220" y="98" width="140" height="10" rx="4" fill="rgba(255,255,255,0.8)"/>
      <rect x="220" y="118" width="172" height="90" rx="8" fill="rgba(255,255,255,0.07)"/>
      <rect x="230" y="128" width="80" height="6" rx="3" fill="rgba(255,255,255,0.4)"/>
      <rect x="230" y="138" width="130" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
      <rect x="230" y="148" width="100" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
      <rect x="230" y="158" width="120" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
      <rect x="230" y="168" width="90" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
      <rect x="220" y="220" width="90" height="22" rx="11" fill={accent}/>
      <rect x="228" y="228" width="74" height="6" rx="3" fill="rgba(0,0,0,0.5)"/>
    </svg>
  ),
  restaurant: ({ color, accent }) => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="420" height="280" rx="12" fill="#111"/>
      {/* Dark elegant nav */}
      <rect x="0" y="0" width="420" height="48" fill="#0a0a0a" rx="12"/>
      <rect x="0" y="36" width="420" height="12" fill="#0a0a0a"/>
      <rect x="185" y="16" width="50" height="16" rx="4" fill="rgba(255,255,255,0.08)" strokeWidth="1" stroke="rgba(255,255,255,0.1)"/>
      <rect x="190" y="21" width="40" height="6" rx="2" fill="rgba(255,255,255,0.5)"/>
      <rect x="16" y="22" width="30" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
      <rect x="52" y="22" width="30" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
      <rect x="88" y="22" width="30" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
      <rect x="360" y="17" width="44" height="14" rx="7" fill={accent}/>
      {/* Full-width hero image area */}
      <rect x="0" y="48" width="420" height="140" fill="#1a1a1a"/>
      <circle cx="210" cy="118" r="50" fill="#222"/>
      {/* Abstract food/spice icon */}
      <circle cx="210" cy="118" r="24" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.5"/>
      <circle cx="210" cy="118" r="12" stroke={accent} strokeWidth="1" fill="none" opacity="0.3"/>
      <path d="M210 94 L210 142 M186 118 L234 118" stroke={accent} strokeWidth="1" opacity="0.2"/>
      <circle cx="210" cy="118" r="4" fill={accent} opacity="0.8"/>
      {/* Centered headline over hero */}
      <rect x="110" y="68" width="200" height="12" rx="4" fill="rgba(255,255,255,0.8)"/>
      <rect x="130" y="84" width="160" height="8" rx="3" fill="rgba(255,255,255,0.3)"/>
      {/* Cards row */}
      <rect x="0" y="192" width="420" height="88" fill="#0c0c0c"/>
      <rect x="14" y="202" width="118" height="68" rx="10" fill="#181818" strokeWidth="1" stroke="rgba(255,255,255,0.05)"/>
      <rect x="144" y="202" width="118" height="68" rx="10" fill="#181818" strokeWidth="1" stroke="rgba(255,255,255,0.05)"/>
      <rect x="274" y="202" width="132" height="68" rx="10" fill={color}/>
      {/* Card contents */}
      <rect x="24" y="214" width="40" height="6" rx="3" fill={accent} opacity="0.7"/>
      <rect x="24" y="224" width="90" height="5" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="24" y="234" width="70" height="5" rx="2" fill="rgba(255,255,255,0.15)"/>
      <rect x="24" y="244" width="50" height="16" rx="8" fill="rgba(255,255,255,0.05)" strokeWidth="1" stroke="rgba(255,255,255,0.1)"/>
      <rect x="154" y="214" width="40" height="6" rx="3" fill={accent} opacity="0.7"/>
      <rect x="154" y="224" width="90" height="5" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="284" y="214" width="60" height="8" rx="3" fill="rgba(255,255,255,0.7)"/>
      <rect x="284" y="228" width="100" height="5" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="284" y="248" width="60" height="14" rx="7" fill={accent}/>
    </svg>
  ),
  education: ({ color, accent }) => (
    <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="420" height="280" rx="12" fill="#f0f0f0"/>
      {/* Blue header */}
      <rect x="0" y="0" width="420" height="180" fill={color} rx="12"/>
      <rect x="0" y="168" width="420" height="12" fill={color}/>
      {/* Nav */}
      <rect x="16" y="14" width="10" height="14" rx="3" fill="white" opacity="0.8"/>
      <rect x="30" y="19" width="50" height="6" rx="3" fill="white" opacity="0.6"/>
      <rect x="360" y="13" width="44" height="16" rx="8" fill={accent}/>
      {/* Hero content */}
      <rect x="80" y="40" width="260" height="10" rx="4" fill="rgba(255,255,255,0.25)"/>
      <rect x="40" y="58" width="340" height="18" rx="6" fill="rgba(255,255,255,0.9)"/>
      <rect x="60" y="82" width="300" height="10" rx="4" fill="rgba(255,255,255,0.5)"/>
      <rect x="90" y="100" width="240" height="10" rx="4" fill="rgba(255,255,255,0.4)"/>
      {/* Form panel */}
      <rect x="60" y="120" width="300" height="52" rx="12" fill="rgba(255,255,255,0.12)" strokeWidth="1" stroke="rgba(255,255,255,0.2)"/>
      <rect x="72" y="130" width="180" height="12" rx="6" fill="rgba(255,255,255,0.2)"/>
      <rect x="72" y="148" width="100" height="10" rx="5" fill="rgba(255,255,255,0.15)"/>
      <rect x="314" y="128" width="32" height="32" rx="8" fill={accent}/>
      {/* Bottom cards */}
      <rect x="16" y="188" width="118" height="80" rx="10" fill="white" strokeWidth="1" stroke="#ddd"/>
      <rect x="146" y="188" width="118" height="80" rx="10" fill="white" strokeWidth="1" stroke="#ddd"/>
      <rect x="276" y="188" width="128" height="80" rx="10" fill="white" strokeWidth="1" stroke="#ddd"/>
      <rect x="26" y="198" width="60" height="8" rx="4" fill={color} opacity="0.8"/>
      <rect x="26" y="212" width="96" height="5" rx="2" fill="#ddd"/>
      <rect x="26" y="222" width="80" height="5" rx="2" fill="#ddd"/>
      <rect x="26" y="245" width="50" height="14" rx="7" fill={accent} opacity="0.8"/>
      <rect x="156" y="198" width="60" height="8" rx="4" fill={color} opacity="0.8"/>
      <rect x="156" y="212" width="96" height="5" rx="2" fill="#ddd"/>
      <rect x="286" y="198" width="60" height="8" rx="4" fill={color} opacity="0.8"/>
    </svg>
  ),
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="dot-lime" />
            Our Work
          </div>
          <h2 className="portfolio__title">
            Real results for<br />
            <span style={{ color: 'var(--blue)' }}>real businesses.</span>
          </h2>
          <p className="portfolio__sub">
            Every project here started with a business that was invisible online.
            We gave them the digital foundation to be found, trusted, and chosen.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="portfolio__tabs"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`portfolio__tab ${active === cat ? 'portfolio__tab--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="portfolio__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const MockupComp = Mockups[project.mockup]
              return (
                <motion.div
                  key={project.id}
                  className="project-card"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  {/* Mockup preview */}
                  <div className="project-card__screen">
                    <MockupComp color={project.color} accent={project.accent} />
                    <div className="project-card__overlay">
                      <button
                        className="project-card__view-btn"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        <ExternalLink size={14} strokeWidth={2} />
                        Request Similar
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span className="project-card__type">{project.type}</span>
                      <span className="project-card__cat">{project.category}</span>
                    </div>
                    <div className="project-card__title">{project.title}</div>
                    <div className="project-card__result">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                        <polyline points="17 6 23 6 23 12"/>
                      </svg>
                      {project.result}
                    </div>
                    <div className="project-card__tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="project-card__tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="portfolio__cta-wrap"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <button
            className="btn-blue"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>
          <span className="portfolio__cta-note">Free strategy call · No commitment</span>
        </motion.div>
      </div>
    </section>
  )
}