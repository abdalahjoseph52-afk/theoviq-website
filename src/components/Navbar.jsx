// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { TheoviqLogo } from './TheoviqLogo' // Assuming this is a named or default export, adjust if needed
import './Navbar.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#portfolio' },
  { label: 'About',    href: '#about' },
  { label: 'Pricing',  href: '#pricing' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    setActiveLink(href)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#hero" onClick={() => handleNav('#hero')} className="navbar__logo">
            <TheoviqLogo
              markSize={32}
              wordmarkSize={22}
              markColor={scrolled ? '#10367D' : '#FFFFFF'}
              accentColor="#B5CE00"
              wordmarkColor={scrolled ? '#10367D' : '#FFFFFF'}
              gap={10}
            />
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className={`navbar__link ${activeLink === link.href ? 'navbar__link--active' : ''} ${scrolled ? 'navbar__link--dark' : 'navbar__link--light'}`}
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            className="navbar__cta"
            onClick={() => handleNav('#contact')}
          >
            Book Free Strategy Call
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </button>

          {/* Mobile Hamburger */}
          <button
            className={`navbar__hamburger ${scrolled ? 'navbar__hamburger--dark' : 'navbar__hamburger--light'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mobile-menu__header">
              <TheoviqLogo markSize={32} wordmarkSize={22} markColor="white" accentColor="#B5CE00" wordmarkColor="white" />
              <button onClick={() => setMenuOpen(false)} className="mobile-menu__close">
                <X size={22} color="white" />
              </button>
            </div>

            <nav className="mobile-menu__nav">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  className="mobile-menu__link"
                  onClick={() => handleNav(link.href)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <span className="mobile-menu__link-num">0{i + 1}</span>
                  {link.label}
                  <ArrowUpRight size={16} className="mobile-menu__arrow" />
                </motion.button>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <button className="mobile-menu__cta" onClick={() => handleNav('#contact')}>
                Book Free Strategy Call
                <ArrowUpRight size={16} />
              </button>
              <p className="mobile-menu__sub">No commitment. 30-minute call.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}