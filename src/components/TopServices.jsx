import { useWow } from '../hooks/useWow';

const BASE = 'https://medicosmindz.com';

const cards = [
  {
    icon: `${BASE}/frontend/assets/img/icons/sr1.svg`,
    subtitle: 'Discover Your Perfect Academic Home',
    title: 'Find Your Ideal University',
    delay: '0.2',
  },
  {
    icon: `${BASE}/frontend/assets/img/icons/sr2.svg`,
    subtitle: 'Streamline Your Path to Enrollment',
    title: 'Simplify Your Admission Process',
    delay: '0.4',
  },
  {
    icon: `${BASE}/frontend/assets/img/icons/sr3.svg`,
    subtitle: 'Your Personalized Roadmap to Success',
    title: 'Access Expert Guidance',
    delay: '0.6',
  },
];

export default function TopServices() {
  useWow();
  return (
    <section style={{ padding: '0 4vw', marginTop: 40, position: 'relative', zIndex: 20 }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div className="tc-service-top">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="svc-grid">
            {cards.map(c => (
              <div key={c.title} className={`service-card wow fadeInUp`} data-delay={c.delay}>
                <div className="icon">
                  <img src={c.icon} alt={c.title} />
                </div>
                <p>{c.subtitle}</p>
                <h6 className="title">{c.title}</h6>
                <a href="#services" className="svc-read-more">
                  <span>Read More</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
          <div className="btm-text">
            <span className="text">Explore Boundless Educational Horizons with MedicosMindz</span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
