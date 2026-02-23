import './Ticker.css'

const items = [
  '🇹🇿 Tanzania\'s #1 Digital Growth Partner',
  '✦ 50+ Businesses Transformed',
  '✦ 7-Day Delivery Guarantee',
  '✦ Websites · Branding · Landing Pages · SEO',
  '✦ Dar es Salaam · Arusha · Mwanza · Nationwide',
  '✦ Book a Free Strategy Call Today',
  '✦ From Invisible to Irresistible — That\'s Theoviq',
  '✦ 3× Average Lead Increase for Our Clients',
]

// Duplicate for seamless loop
const allItems = [...items, ...items]

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__track">
        {allItems.map((item, i) => (
          <span key={i} className="ticker__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}