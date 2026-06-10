import { useState } from 'react';
import { useWow } from '../hooks/useWow';

const BASE = 'https://medicosmindz.com';

const faqs = [
  {
    q: 'What can Medicos Mindz do for you?',
    a: 'We provide complete end-to-end support—from selecting the right university to securing your admission, visa processing, and even post-arrival guidance. Our expert team ensures your journey to becoming a doctor is smooth, transparent, and stress-free.',
  },
  {
    q: 'How do you help in choosing the right university?',
    a: 'We offer personalized counseling based on your academic profile, budget, and career goals. Unlike generic consultancies, our guidance is backed by real doctors with international experience, helping you make informed decisions.',
    open: true,
  },
  {
    q: 'Is MBBS abroad a safe and reliable option?',
    a: 'Yes—when done through the right guidance. We connect you with globally recognized universities and ensure all processes—from admission to accommodation—are secure, transparent, and student-focused.',
  },
  {
    q: 'Do you assist with the complete admission process?',
    a: 'Absolutely. From application documentation to university communication, offer letters, and deadlines—we manage everything so you can focus on your future.',
  },
  {
    q: 'What support do students get after admission?',
    a: 'Our support doesn\'t stop at admission. We assist with accommodation & living arrangements, travel & pre-departure guidance, on-ground support and student assistance throughout your MBBS journey abroad.',
  },
];

export default function FAQ() {
  useWow();
  const [open, setOpen] = useState(1);

  return (
    <section className="tc-faq" id="faq">
      <img src={`${BASE}/frontend/assets/img/faq_bg.png`} alt="" className="faq-bg" />
      <div style={{ maxWidth: 1320, margin: '0 auto' }} className="faq-inner">
        {/* Section head */}
        <div style={{ marginBottom: 48 }}>
          <h6 className="section-label">
            <span className="cr-orange1">→ </span>Frequency and questions
          </h6>
          <h2 className="faq-title">fAQ — we provide far and skills.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start' }}
          className="faq-grid">
          {/* Left image */}
          <div className="faq-img wow zoomIn" data-delay="0.2">
            <img src={`${BASE}/frontend/assets/img/faq_img.svg`} alt="FAQ" />
          </div>

          {/* Right accordion */}
          <div>
            {faqs.map((item, i) => (
              <div key={i} className="acc-item">
                <button
                  className={`acc-btn ${open === i ? 'open' : ''}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  {item.q}
                  <span className="chevron">▼</span>
                </button>
                <div className={`acc-body ${open === i ? 'open' : ''}`}>
                  <div className="acc-body-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .faq-grid { grid-template-columns: 1fr !important; } .faq-img { display: none; } }
      `}</style>
    </section>
  );
}
