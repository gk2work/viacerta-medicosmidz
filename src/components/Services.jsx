import { useWow } from '../hooks/useWow';

const BASE = 'https://medicosmindz.com';

const services = [
  { img: `${BASE}/frontend/assets/img/no1.jpg`, title: 'Study Abroad Counselling', text: 'Our trained and experienced team of counselors helps students identify a course and university that perfectly match their aptitude, interests, academic and financial background.', delay: '0.2' },
  { img: `${BASE}/frontend/assets/img/no2.jpg`, title: 'Course Advice', text: 'Our comprehensive scholarship assistance includes appraising eligibility criteria to guide applicants in the right manner.', delay: '0.4' },
  { img: `${BASE}/frontend/assets/img/no3.jpg`, title: 'University / College application processing', text: 'We offer Guidance throughout the entire admission process to ensure a complete, error-free application.', delay: '0.6' },
  { img: `${BASE}/frontend/assets/img/no4.jpg`, title: 'Visa Application Assistance', text: 'Our trained and experienced team of counsellors help students identify a course and university that perfectly match.', delay: '0.2' },
  { img: `${BASE}/frontend/assets/img/no5.jpg`, title: 'Scholarship Assistance', text: 'Our comprehensive scholarship assistance includes appraising eligibility criteria to guide applicants in the right manner.', delay: '0.4' },
  { img: `${BASE}/frontend/assets/img/no6.jpg`, title: 'Pre Departure Guidance / Support', text: "We organize pre departure briefing for students to let them know about the do's and don'ts while embarking their studies abroad.", delay: '0.6' },
];

const stats = [
  { num: '7000+', lines: ['Medical', 'Students'],        gradStart: '#68B687', gradEnd: '#044E77', dot: '#68B687' },
  { num: '2500+', lines: ['Non-Medical', 'Students'],    gradStart: '#044E77', gradEnd: '#68B687', dot: '#044E77' },
  { num: '50+',   lines: ['Approved', 'Universities'],   gradStart: '#5BA3C9', gradEnd: '#7B62AA', dot: '#5BA3C9' },
  { num: '40+',   lines: ['Branches All', 'Over India'], gradStart: '#7B62AA', gradEnd: '#342312', dot: '#7B62AA' },
];

function GaugeRing({ id, num, lines, gradStart, gradEnd, dot }) {
  const cx = 70, cy = 62, r = 48;
  const circ = 2 * Math.PI * r;
  const arc  = circ * (270 / 360);
  const gap  = circ - arc;
  const ang  = 135 * (Math.PI / 180);
  const dotX = cx + r * Math.cos(ang);
  const dotY = cy + r * Math.sin(ang);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      {/* Arrow indicator */}
      <span style={{ fontSize: 13, color: '#ccc', letterSpacing: 2 }}>→</span>
      <div style={{ position: 'relative', width: 120, height: 112 }}>
        <svg viewBox="0 0 140 130" width="120" height="112">
          <defs>
            <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradStart} />
              <stop offset="100%" stopColor={gradEnd} />
            </linearGradient>
          </defs>
          {/* Grey background track */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f0f0f0" strokeWidth="6" />
          {/* Coloured arc */}
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${arc.toFixed(2)} ${gap.toFixed(2)}`}
            transform={`rotate(135 ${cx} ${cy})`}
          />
          {/* Dot at start of arc */}
          <circle cx={dotX.toFixed(2)} cy={dotY.toFixed(2)} r="6" fill={dot} />
        </svg>
        {/* Number overlaid at centre */}
        <div style={{
          position: 'absolute', top: '48%', left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
          <span style={{
            fontSize: 22, fontWeight: 800, color: '#1a1a1a',
            fontFamily: "'Montserrat', sans-serif", letterSpacing: '-0.5px',
          }}>{num}</span>
        </div>
      </div>
      <div style={{ textAlign: 'center', fontSize: 13, color: '#5b5b5b', lineHeight: 1.5 }}>
        {lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}

export default function Services() {
  useWow();
  return (
    <section className="tc-choose" id="services">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="section-label">What we offer — Explore now</p>
          <h2>
            <span className="cr-red">Our </span>
            <span className="cr-gold"> Services</span>
          </h2>
        </div>

        {/* 6 service cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 60 }}
          className="svc-choose-grid">
          {services.map(s => (
            <a key={s.title} href="#" className={`choose-card wow fadeInUp`} data-delay={s.delay}>
              <div className="icon">
                <img src={s.img} alt={s.title} style={{ height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="info">
                <h5>{s.title}</h5>
                <div className="text">{s.text}</div>
                <span className="arrow">›</span>
              </div>
            </a>
          ))}
        </div>

        {/* Stats card */}
        <div className="numbers">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
            className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.num + i} className="num-card wow zoomIn" data-delay={`${0.2 * (i + 1)}`}>
                <GaugeRing id={`gauge-${i}`} {...s} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .svc-choose-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .svc-choose-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
