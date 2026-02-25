import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { TheoviqMark } from './TheoviqLogo'
import './Hero.css'

const stats = [
  { value: '50+', label: 'Businesses Served' },
  { value: '3×',  label: 'Avg Lead Increase' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '7d',  label: 'Avg Delivery Time' },
]

const trustBadges = [
  'Web Development',
  'Brand Identity',
  'Landing Pages',
  'Monthly Support',
]

export default function Hero() {
  const canvasRef = useRef(null)

  // Animated particle / orbit canvas background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let w = canvas.width  = window.innerWidth
    let h = canvas.height = window.innerHeight

    const resize = () => {
      w = canvas.width  = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    // Orbiting dots
    const orbs = Array.from({ length: 28 }, (_, i) => ({
      angle:  (i / 28) * Math.PI * 2,
      radius: 120 + Math.random() * 320,
      speed:  0.0003 + Math.random() * 0.0004,
      size:   1 + Math.random() * 2.5,
      opacity: 0.08 + Math.random() * 0.18,
    }))

    // Floating arc lines
    const arcs = Array.from({ length: 5 }, (_, i) => ({
      x: w * 0.72 + (i - 2) * 40,
      y: h * 0.42 + (i - 2) * 30,
      r: 80 + i * 60,
      startAngle: Math.PI * 0.15,
      endAngle: Math.PI * 1.85,
      opacity: 0.04 + i * 0.012,
    }))

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      t += 1

      // Draw orbit arcs (brand mark echoes)
      arcs.forEach(arc => {
        ctx.beginPath()
        ctx.arc(arc.x, arc.y, arc.r + Math.sin(t * 0.005) * 8, arc.startAngle, arc.endAngle)
        ctx.strokeStyle = `rgba(181,206,0,${arc.opacity})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      })

      // Draw orbiting dots
      orbs.forEach(orb => {
        orb.angle += orb.speed
        const cx = w * 0.72 + Math.cos(orb.angle) * orb.radius
        const cy = h * 0.42 + Math.sin(orb.angle) * orb.radius
        ctx.beginPath()
        ctx.arc(cx, cy, orb.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${orb.opacity})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollDown = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Background gradient mesh */}
      <div className="hero__gradient" />

      {/* Large ghosted mark */}
      <div className="hero__bg-mark">
        <TheoviqMark size={600} color="rgba(255,255,255,0.025)" accentColor="rgba(181,206,0,0.06)" />
      </div>

      <div className="hero__inner container">

        {/* Left — Content */}
        <div className="hero__content">

          {/* Trust badge */}
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="dot-lime" style={{ animation: 'pulse-lime 2s infinite' }} />
            <span>Tanzania's Digital Growth Partner</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="hero__headline"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            Your Business
            <br />
            Deserves to
            <br />
            <span className="hero__headline-accent">Look Real.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Theoviq builds the digital foundations that turn businesses into credible,
            customer-attracting brands — professional websites, powerful brand systems,
            and the online visibility you've been missing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Strategy Call
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </button>
          </motion.div>

          {/* Service pills */}
          <motion.div
            className="hero__pills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {trustBadges.map((badge) => (
              <span key={badge} className="hero__pill">{badge}</span>
            ))}
          </motion.div>
        </div>

        {/* Right — Floating visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Main hero card */}
          <div className="hero__card">
            <div className="hero__card-header">
              <TheoviqMark size={48} color="white" accentColor="#B5CE00" />
              <div className="hero__card-status">
                <span className="dot-lime" style={{ animation: 'pulse-lime 2s infinite' }} />
                <span>Digital Growth System</span>
              </div>
            </div>

            <div className="hero__card-title">
              <span className="hero__card-name">Theoviq</span>
              <span className="hero__card-tagline">Building Tanzania's Digital Future</span>
            </div>

            {/* Metric row */}
            <div className="hero__metrics">
              {stats.map((s) => (
                <div key={s.label} className="hero__metric">
                  <span className="hero__metric-val">{s.value}</span>
                  <span className="hero__metric-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating notification cards */}
          <motion.div
            className="hero__notif hero__notif--1"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero__notif-icon" style={{ background: 'rgba(181,206,0,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B5CE00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div>
              <div className="hero__notif-title">New client onboarded</div>
              <div className="hero__notif-sub">Dar es Salaam Clinic — just now</div>
            </div>
          </motion.div>

          <motion.div
            className="hero__notif hero__notif--2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="hero__notif-icon" style={{ background: 'rgba(16,54,125,0.12)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10367D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div>
              <div className="hero__notif-title">Website launched</div>
              <div className="hero__notif-sub">Revenue up 3× in 60 days</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        className="hero__scroll"
        onClick={scrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <ChevronDown size={20} color="rgba(255,255,255,0.4)" />
      </motion.button>

      {/* Bottom wave divider */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80L60,68C120,56,240,32,360,26.7C480,21,600,32,720,37.3C840,43,960,43,1080,37.3C1200,32,1320,21,1380,16L1440,11V80H0Z" fill="#F8F8F6"/>
        </svg>
      </div>
    </section>
  )
}