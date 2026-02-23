import { TheoviqMark } from './TheoviqLogo'
import './Footer.css'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Landing Pages',   href: '#services' },
    { label: 'Brand Identity',  href: '#services' },
    { label: 'Monthly Support', href: '#services' },
    { label: 'Growth Bundle',   href: '#pricing' },
  ],
  Company: [
    { label: 'About Theoviq', href: '#about' },
    { label: 'Our Work',      href: '#portfolio' },
    { label: 'Pricing',       href: '#pricing' },
    { label: 'Contact',       href: '#contact' },
  ],
  Connect: [
    { label: 'Instagram', href: '#' },
    { label: 'WhatsApp',  href: 'https://wa.me/255xxxxxxxxx' },
    { label: 'LinkedIn',  href: '#' },
    { label: 'Email',     href: 'mailto:hello@theoviq.com' },
  ],
}

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <TheoviqMark size={36} color="white" accentColor="#B5CE00" />
              <span className="footer__wordmark">theoviq.</span>
            </div>
            <p className="footer__tagline">
              Professional digital systems that help businesses grow online with clarity, credibility, and confidence.
            </p>
            <div className="footer__location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Dar es Salaam, Tanzania
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer__col">
              <div className="footer__col-title">{group}</div>
              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <button
                        className="footer__link"
                        onClick={() => scrollTo(link.href)}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        className="footer__link"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <span className="dot-lime" />
            <span>© 2025 Theoviq · Founded by Abdalah Wambura</span>
          </div>
          <div className="footer__bottom-right">
            <span>Dar es Salaam, Tanzania</span>
            <span className="footer__sep">·</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}