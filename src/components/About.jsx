import { useWow } from '../hooks/useWow';

const BASE = 'https://medicosmindz.com';

const clients = [
  `${BASE}/frontend/assets/img/clients/1.jpg`,
  `${BASE}/frontend/assets/img/clients/2.jpg`,
  `${BASE}/frontend/assets/img/clients/3.jpg`,
  `${BASE}/frontend/assets/img/clients/4.jpg`,
  `${BASE}/frontend/assets/img/clients/5.jpg`,
];

const marqueeItems = [
  'Guaranteed Admission.',
  'Affordable Fees.',
  'Free Consultation.',
  'No donations.',
  'MCI Approved Universities.',
];

export default function About() {
  useWow();
  return (
    <section className="tc-about" id="about">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}
          className="about-grid">
          {/* Left — image */}
          <div className="about-img">
            <img
              src={`${BASE}/frontend/assets/img/lady_doctor.png`}
              alt="Lady Doctor"
              className="main-img"
              style={{ width: '100%' }}
            />
            <img
              src={`${BASE}/frontend/assets/img/about3.png`}
              alt="Rotating"
              className="sub-img rotate-center"
            />
          </div>

          {/* Right — text */}
          <div className="about-info">
            <h6>ABOUT US</h6>
            <h5>MEDICOSMINDZ</h5>
            <h6 className="tagline">
              <span className="cr-orange1">— </span>
              "By Doctor for the future Doctors"
            </h6>
            <h2>WE ARE THE WORLD'S LARGEST MEDICAL UNIVERSITY CATALOG.</h2>
            <p className="wow fadeInUp" data-delay="0.2">
              MEDICOS MINDZ is a unique venture started by doctors determined to light a path for the next
              generation of doctors. For over a decade, a team of exceptional doctors have dedicated their
              time to change the dreams of medical aspirants into a reality. We provide consultation and serve
              as a gateway for admission for students seeking to pursue their MBBS abroad.
            </p>
            <p className="wow fadeInUp" data-delay="0.2">
              Our doctors have completed their MBBS in various international universities, thus, have gained
              5 to 6 years of information and experience. They have lived in various universities and their
              respective countries which will provide additional guidance for the students. We believe that
              doctors are the best guides for future doctors in spirit and in experience.
            </p>
            <a href="#about" className="butn bg-ln-green1 wow fadeInUp" data-delay="0.2" style={{ marginTop: 32 }}>
              <span>→ About More</span>
            </a>
          </div>
        </div>

        {/* Client logos */}
        <div className="clients-row">
          {clients.map((src, i) => (
            <a key={i} href="#" className={`wow fadeInUp`} data-delay={`${0.2 * (i + 1)}`}>
              <img src={src} alt={`Partner ${i + 1}`} />
            </a>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-outer">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <h2 key={i} className={i % 2 === 0 ? '' : 'filled'}>{item}</h2>
          ))}
        </div>
      </div>

      {/* Background */}
      <img src={`${BASE}/frontend/assets/img/about_bg.png`} alt=""
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, pointerEvents: 'none' }} />

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
