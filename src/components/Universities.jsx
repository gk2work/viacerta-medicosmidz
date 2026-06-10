import { useRef, useState, useEffect, useCallback } from 'react';

const BASE = 'https://medicosmindz.com';

const universities = [
  { img: `${BASE}/universities/kutaisi.png`,  name: 'Bukhara State University',           country: 'Uzbekistan',   delay: '0.2' },
  { img: `${BASE}/universities/europian.png`, name: 'Navoiy State University',             country: 'Uzbekistan',   delay: '0.4' },
  { img: `${BASE}/universities/caucasus.png`, name: 'Central University of Europe',        country: 'Hungary',      delay: '0.6' },
  { img: `${BASE}/universities/kutaisi.png`,  name: 'Kutaisi International University',    country: 'Georgia',      delay: '0.2' },
  { img: `${BASE}/universities/europian.png`, name: 'European University',                 country: 'Georgia',      delay: '0.4' },
  { img: `${BASE}/universities/caucasus.png`, name: 'Caucasus International University',   country: 'Georgia',      delay: '0.6' },
  { img: `${BASE}/universities/kutaisi.png`,  name: 'Kazan Federal University',            country: 'Russia',       delay: '0.2' },
  { img: `${BASE}/universities/europian.png`, name: 'Volgograd State Medical University',  country: 'Russia',       delay: '0.4' },
  { img: `${BASE}/universities/caucasus.png`, name: 'Osh State University',                country: 'Kyrgyzstan',   delay: '0.6' },
];

const VISIBLE = 3;
const GAP = 28;

export default function Universities() {
  const trackRef    = useRef(null);
  const outerRef    = useRef(null);
  const timerRef    = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total  = universities.length;
  const maxIdx = total - VISIBLE;

  const goTo = useCallback((idx) => {
    const clamped = Math.max(0, Math.min(idx, maxIdx));
    setCurrent(clamped);
    if (trackRef.current && outerRef.current) {
      const cardW = (outerRef.current.offsetWidth - GAP * (VISIBLE - 1)) / VISIBLE;
      trackRef.current.style.transform = `translateX(-${clamped * (cardW + GAP)}px)`;
    }
  }, [maxIdx]);

  /* Recalculate on resize */
  useEffect(() => {
    const onResize = () => goTo(current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [current, goTo]);

  /* Auto-advance */
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        const next = c >= maxIdx ? 0 : c + 1;
        goTo(next);
        return next;
      });
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [isPaused, maxIdx, goTo]);

  const prev = () => { clearInterval(timerRef.current); goTo(current === 0 ? maxIdx : current - 1); setCurrent(c => c === 0 ? maxIdx : c - 1); };
  const next = () => { clearInterval(timerRef.current); goTo(current >= maxIdx ? 0 : current + 1); setCurrent(c => c >= maxIdx ? 0 : c + 1); };

  return (
    <section className="tc-blog" id="universities">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="section-label">→</p>
          <h2 className="section-title">
            <span className="cr-red">Top Trending </span>
            <span className="cr-gold"> Medical Universities </span>
            <span className="cr-lightblue"> 2026</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="uni-carousel-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prev button */}
          <button className="uni-nav uni-prev" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Track */}
          <div className="uni-carousel-outer" ref={outerRef}>
            <div className="uni-carousel-track" ref={trackRef}>
              {universities.map((u, i) => (
                <div key={i} className="uni-carousel-item">
                  <div className="post-card">
                    <a href="#" className="img-wrap">
                      <img src={u.img} alt={u.name} />
                    </a>
                    <div className="info">
                      <h4><a href="#">{u.name}</a></h4>
                      <a href="#apply" className="butn bg-ln-orange1" style={{ padding: '10px 24px', fontSize: 14 }}>
                        <span>Apply Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button className="uni-nav uni-next" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="uni-dots">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              className={`uni-dot ${current === i ? 'active' : ''}`}
              onClick={() => { goTo(i); setCurrent(i); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

      <style>{`
        .uni-carousel-wrap {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .uni-carousel-outer {
          overflow: hidden;
          flex: 1;
          border-radius: 4px;
        }
        .uni-carousel-track {
          display: flex;
          gap: ${GAP}px;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .uni-carousel-item {
          flex: 0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE});
          min-width: 0;
        }
        .uni-carousel-item .post-card { height: 100%; }
        .uni-nav {
          flex-shrink: 0;
          width: 46px; height: 46px;
          border-radius: 50%;
          border: 1.5px solid rgba(4,78,119,0.2);
          background: #fff;
          color: #044E77;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 16px rgba(4,78,119,0.08);
          z-index: 2;
        }
        .uni-nav:hover {
          background: #044E77;
          color: #fff;
          border-color: #044E77;
          transform: scale(1.08);
        }
        .uni-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }
        .uni-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(4,78,119,0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          padding: 0;
        }
        .uni-dot.active {
          background: #044E77;
          width: 24px;
          border-radius: 4px;
        }
@media (max-width: 900px) {
          .uni-carousel-item { flex: 0 0 calc((100% - ${GAP}px) / 2) !important; }
        }
        @media (max-width: 560px) {
          .uni-carousel-item { flex: 0 0 100% !important; }
          .uni-nav { width: 38px; height: 38px; }
        }
      `}</style>
    </section>
  );
}
