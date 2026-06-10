import { useState } from 'react';
import { useWow } from '../hooks/useWow';

const BASE = 'https://medicosmindz.com';

const testimonials = [
  {
    text: "My journey to pursuing an MBBS degree at Kutaisi University has been a transformative experience. Coming from Mumbai, India, I was initially apprehensive about moving to a new country, but Kutaisi University has exceeded all my expectations and provided me with a nurturing and supportive environment.",
    name: 'Arjun Patel (Program MBBS)',
  },
  {
    text: "Starting my MBBS at Kutaisi University has been a fantastic experience. The curriculum is comprehensive, emphasizing practical skills. Our dedicated professors ensure we grasp complex medical concepts. The diverse campus offers a global perspective, enriching my education. Kutaisi is a charming city with friendly locals, making my stay enjoyable. I'm excited about the future and grateful for the opportunities at Kutaisi University.",
    name: 'Aisha Khan (Program MBBS)',
  },
  {
    text: "Choosing Kutaisi University for my MBBS was a pivotal decision. The state-of-the-art facilities and extensive clinical training have greatly enhanced my education. The knowledgeable and approachable faculty, along with a strong cultural exchange and support network, have significantly enriched my experience. The affordable living costs in Georgia are a bonus. I highly recommend Kutaisi University to future medical students.",
    name: 'Rajesh Kumar (Program MBBS)',
  },
];

export default function Testimonials() {
  useWow();
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="tc-testi" id="testimonials">
      <img src={`${BASE}/frontend/assets/img/testi_bg.png`} alt="" className="testi-bg" />
      <div style={{ maxWidth: 1320, margin: '0 auto' }} className="testi-inner">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}
          className="testi-grid">
          {/* Left image */}
          <div className="testi-img wow zoomIn" data-delay="0.2">
            <img src={`${BASE}/frontend/assets/img/testi_img.svg`} alt="Testimonials" />
          </div>

          {/* Right testimonial */}
          <div>
            <div className="rate">
              <img
                src={`${BASE}/frontend/assets/img/qoate_icon.svg`}
                alt="Quote"
                className="quote-icon"
              />
              <div>
                <p style={{ fontSize: 14, color: '#5b5b5b', marginBottom: 6 }}>Average 5.00 rating</p>
                <div className="stars">
                  {[1,2,3,4,5].map(s => <span key={s} className="star">★</span>)}
                </div>
              </div>
            </div>

            <div className="testi-text">
              <p style={{ padding: '0 28px 0 0', lineHeight: 1.5 }}>{t.text}</p>
            </div>

            <div className="testi-name">{t.name}</div>

            <div className="testi-nav">
              <button onClick={() => setIdx(i => (i === 0 ? testimonials.length - 1 : i - 1))} aria-label="Previous">←</button>
              <button onClick={() => setIdx(i => (i === testimonials.length - 1 ? 0 : i + 1))} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .testi-grid { grid-template-columns: 1fr !important; } .testi-img { display: none; } }
      `}</style>
    </section>
  );
}
