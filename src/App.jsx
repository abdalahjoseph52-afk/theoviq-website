import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Ticker    from './components/Ticker'
import Services  from './components/Services'
import Process   from './components/Process'
import Portfolio from './components/Portfolio'
import About     from './components/About'
import Pricing   from './components/Pricing'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import './components/Footer.css'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1 — HERO: First impression, headline, CTA */}
        <Hero />

        {/* 2 — TICKER: Scrolling social proof strip */}
        <Ticker />

        {/* 3 — SERVICES: Four pillars, pain points solved */}
        <Services />

        {/* 4 — PROCESS: How we work, 7-day delivery */}
        <Process />

        {/* 5 — PORTFOLIO: Real work, real results */}
        <Portfolio />

        {/* 6 — ABOUT: Why Theoviq, founder, target markets */}
        <About />

        {/* 7 — PRICING: Transparent Tsh pricing, all packages */}
        <Pricing />

        {/* 8 — CONTACT: Form + free strategy call booking */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}