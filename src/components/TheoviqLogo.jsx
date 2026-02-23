// TheoviqLogo.jsx — The v6 brand mark as a React component

const TheoviqMark = ({ size = 40, color = '#10367D', accentColor = '#B5CE00', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* 270° Arc — T crossbar / orbit */}
    <path
      d="M82 50 A32 32 0 1 0 50 82"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
      fill="none"
    />
    {/* Pill Stem — T downstroke */}
    <rect x="43" y="48" width="14" height="34" rx="7" fill={color} />
    {/* Delivery Node — bottom, larger */}
    <circle cx="50" cy="82" r="9" fill={accentColor} />
    {/* Origin Node — top, smaller */}
    <circle cx="50" cy="18" r="6" fill={accentColor} opacity="0.9" />
  </svg>
)

const TheoviqWordmark = ({ size = 48, color = '#10367D', accentColor = '#B5CE00' }) => (
  <span
    style={{
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 800,
      fontSize: size,
      color,
      letterSpacing: '-1px',
      lineHeight: 1,
    }}
  >
    theoviq<span style={{ color: accentColor }}>.</span>
  </span>
)

export const TheoviqLogo = ({
  markSize = 36,
  wordmarkSize = 28,
  markColor = '#10367D',
  accentColor = '#B5CE00',
  wordmarkColor = '#10367D',
  gap = 12,
  showWordmark = true,
}) => (
  <div style={{ display: 'flex', alignItems: 'center', gap, flexShrink: 0 }}>
    <TheoviqMark size={markSize} color={markColor} accentColor={accentColor} />
    {showWordmark && (
      <TheoviqWordmark size={wordmarkSize} color={wordmarkColor} accentColor={accentColor} />
    )}
  </div>
)

export { TheoviqMark, TheoviqWordmark }
export default TheoviqLogo