import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Ticker        from './components/Ticker'
import Services      from './components/Services'
import Process       from './components/Process'
import Portfolio     from './components/Portfolio'
import About         from './components/About'
import Pricing       from './components/Pricing'
import FAQ           from './components/FAQ'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './components/Footer.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}