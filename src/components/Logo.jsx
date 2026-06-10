export default function Logo({ light = false, className = '' }) {
  const color = light ? '#ffffff' : '#3E6E76';

  return (
    <span className={`brand-logo ${className}`}>
      <svg viewBox="0 0 100 100" className="brand-logo-icon" xmlns="http://www.w3.org/2000/svg">
        {/* Cap top */}
        <path d="M50 8 L94 30 L50 52 L6 30 Z" fill={color} />
        {/* Cap band */}
        <path d="M24 38 L24 52 C24 60 35.6 67 50 67 C64.4 67 76 60 76 52 L76 38 L50 52 Z" fill={color} />
        {/* Top knob */}
        <circle cx="50" cy="8" r="4" fill={color} />
        {/* Tassel string */}
        <path d="M50 52 L32 76" stroke={color} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* Tassel tip */}
        <path d="M32 76 l-5 9 M32 76 l5 9 M32 76 l0 10" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Medal */}
        <circle cx="70" cy="74" r="15" fill={color} />
        <circle cx="70" cy="74" r="9" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.8" />
        {/* Ribbon tails */}
        <path d="M61 86 L57 99 L68 92 Z" fill={color} />
        <path d="M79 86 L83 99 L72 92 Z" fill={color} />
      </svg>
      <span className="brand-logo-text" style={{ color }}>MbbsTimes</span>
    </span>
  );
}
