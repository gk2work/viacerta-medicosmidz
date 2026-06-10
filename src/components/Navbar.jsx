import { useState } from 'react';

const BASE = 'https://medicosmindz.com';

const courses = [
  { label: 'Medical', img: `${BASE}/course/1715970888_medical.webp`, href: '#' },
  { label: 'Engineering', img: `${BASE}/course/1715970880_engineering.webp`, href: '#' },
  { label: 'Commerce', img: `${BASE}/course/1715970948_commerce.webp`, href: '#' },
  { label: 'Business and Management', img: `${BASE}/course/1715970672_management.webp`, href: '#' },
  { label: 'Architecture', img: `${BASE}/course/1715970924_architecture.webp`, href: '#' },
];

const countries = [
  { label: 'Study In Georgia', img: `${BASE}/country/1715970200_Georgia.png` },
  { label: 'Study In Serbia', img: `${BASE}/country/1717256979_serbia.png` },
  { label: 'Study In Romania', img: `${BASE}/country/1717257023_romania.png` },
  { label: 'Study In Uzbekistan', img: `${BASE}/country/1717257063_uzbekistan.png` },
  { label: 'Study In Russia', img: `${BASE}/country/1717257107_russia.png` },
  { label: 'Study In Kazakhstan', img: `${BASE}/country/1717257152_kazakhastan.png` },
  { label: 'Study In Kyrgyzstan', img: `${BASE}/country/1717257213_krizigtan.png` },
  { label: 'Study In Bangladesh', img: `${BASE}/country/1717257255_bangladesh.png` },
  { label: 'Study In Canada', img: `${BASE}/country/1717257295_canada.png` },
  { label: 'Study In Poland', img: `${BASE}/country/1717257324_poland.png` },
  { label: 'Study In Italy', img: `${BASE}/country/1717259192_itely.png` },
  { label: 'Study In Spain', img: `${BASE}/country/1717259230_spain.png` },
  { label: 'Study In Germany', img: `${BASE}/country/1717259275_germany.png` },
  { label: 'Study In China', img: `${BASE}/country/1717259306_china.png` },
  { label: 'Study In Belarus', img: `${BASE}/country/1717259350_belarus.png` },
  { label: 'Study In Hungary', img: `${BASE}/country/1717259392_hungary.png` },
  { label: 'Study In Latvia', img: `${BASE}/country/1717259430_latvia.png` },
  { label: 'Study In Lithuania', img: `${BASE}/country/1717259464_lithuania.png` },
  { label: 'Study In Malaysia', img: `${BASE}/country/1717259514_malaysia.png` },
  { label: 'Study In Mauritius', img: `${BASE}/country/1717259553_mourituis.png` },
  { label: 'Study In Moldova', img: `${BASE}/country/1717259601_moldova.png` },
  { label: 'Study In Nepal', img: `${BASE}/country/1717259688_nepal.jpg` },
];

export default function Navbar({ onApply }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="tc-navbar">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          <img src={`${BASE}/frontend/assets/img/logo/medicos_logo.png`} alt="MedicosMindz Logo" />
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>

          {/* Courses dropdown */}
          <div className="nav-item">
            <span className="nav-link" style={{ cursor: 'pointer' }}>
              Courses ▾
            </span>
            <div className="dropdown-menu">
              {courses.map(c => (
                <a key={c.label} href="#courses">
                  <img src={c.img} alt={c.label} />
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Countries dropdown */}
          <div className="nav-item">
            <span className="nav-link" style={{ cursor: 'pointer' }}>
              Countries ▾
            </span>
            <div className="dropdown-menu countries-menu">
              {countries.map(c => (
                <a key={c.label} href="#countries">
                  <img src={c.img} alt={c.label} />
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          <a href="#contact" className="nav-link">Contact Us</a>
        </div>

        {/* Apply Now button */}
        <button className="apply-btn" onClick={onApply}>
          <span>Apply Now</span>
          <span className="arrow-circle">→</span>
        </button>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-nav">
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#courses" onClick={() => setMobileOpen(false)}>Courses</a>
          <a href="#countries" onClick={() => setMobileOpen(false)}>Countries</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact Us</a>
          <button className="butn bg-ln-orange1 mt-3 w-full" onClick={() => { setMobileOpen(false); onApply(); }}>
            <span>Apply Now →</span>
          </button>
        </div>
      )}
    </>
  );
}
