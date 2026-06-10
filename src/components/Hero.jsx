const BASE = 'https://medicosmindz.com';

export default function Hero({ onApply }) {
  return (
    <header className="tc-header" id="home">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}
          className="hero-grid">

          {/* ── Left ── */}
          <div className="hero-info">
            <h6 className="hero-h6">
              <span className="cr-orange1">→ </span>
              Your Global Gateway to University Admissions
            </h6>
            <h1 className="hero-h1">
              <span className="cr-gold">Define </span><br />
              Yourself <br />
              Proudly Say, <br />
              'I Am an MBBS!'
            </h1>
            <p className="hero-text">
              Discover and connect with top universities worldwide. MbbsTimes is
              your trusted partner in navigating the path to higher education.
            </p>
            <a href="#about" className="butn bg-ln-orange1" style={{ marginTop: 32 }}>
              <span>→ Discover More</span>
            </a>
          </div>

          {/* ── Right: image + contact card below ── */}
          <div className="hero-right">
            <div className="hero-img-wrap">
              <img
                src={`${BASE}/universities/banner.webp`}
                alt="MbbsTimes Banner"
                className="hero-img"
              />
              {/* Decorative rotating circle */}
              <img src={`${BASE}/frontend/assets/img/top_circle.png`} alt="" className="float-circle" />
            </div>

            {/* Contact card — sits below the image, right-aligned */}
            <div className="contact-card">
              <div className="contact-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <small>Contact Mail</small>
                <a href="mailto:info@mbbstimes.com" className="contact-email">info@mbbstimes.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative wavy background lines */}
      <img
        src={`${BASE}/frontend/assets/img/hero_back_line.png`}
        alt=""
        className="hero-back-line"
      />

      <style>{`
        .hero-info { display: flex; flex-direction: column; align-items: flex-start; }
        .hero-right { display: flex; flex-direction: column; gap: 20px; }
        .hero-img-wrap { position: relative; }
        .hero-img { width: 100%; border-radius: 20px; position: relative; z-index: 1; display: block; }
        .hero-back-line {
          position: absolute;
          bottom: -60px;
          left: 0;
          width: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.7;
          filter: hue-rotate(160deg) saturate(0.8);
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none; }
          .hero-back-line { display: none; }
        }
      `}</style>
    </header>
  );
}
