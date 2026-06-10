const features = [
  {
    label: ['NO', 'DONATIONS'],
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="32" cy="34" rx="20" ry="16"/>
        <path d="M32 18v-4M24 20c0-4 4-8 8-8s8 4 8 8"/>
        <path d="M26 28h8M26 34h12M26 40h8"/>
        <line x1="14" y1="16" x2="50" y2="52" strokeWidth="2.5"/>
        <line x1="12" y1="18" x2="48" y2="54" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    label: ['FREE', 'CONSULTATION'],
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 12h44v28H36l-8 10-8-10H10z"/>
        <circle cx="32" cy="24" r="2" fill="currentColor"/>
        <path d="M32 18v2M32 28v2"/>
      </svg>
    ),
  },
  {
    label: ['MCI APPROVED', 'UNIVERSITIES'],
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="22"/>
        <circle cx="32" cy="32" r="16"/>
        <path d="M24 32l6 6 10-12"/>
        <path d="M32 10v4M32 50v4M10 32h4M50 32h4"/>
      </svg>
    ),
  },
  {
    label: ['AFFORDABLE', 'FEES'],
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 44c0-14 8-24 20-24s20 10 20 24"/>
        <path d="M12 44h40"/>
        <path d="M28 20v-4h8v4"/>
        <circle cx="32" cy="35" r="6"/>
        <path d="M32 31v8M29 33h6"/>
      </svg>
    ),
  },
  {
    label: ['GUARANTEED', 'ADMISSION'],
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="10" width="36" height="44" rx="3"/>
        <path d="M22 22h20M22 30h20M22 38h12"/>
        <circle cx="46" cy="46" r="10" fill="white" stroke="currentColor" strokeWidth="2"/>
        <path d="M41 46l3 3 6-6"/>
      </svg>
    ),
  },
];

export default function FeatureBar() {
  return (
    <section className="feature-bar-section">
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 4vw' }}>
        <div className="feature-bar-card">
          {features.map((f, i) => (
            <div key={i} className="feature-bar-item">
              <div className="feature-bar-icon">{f.svg}</div>
              <div className="feature-bar-label">
                {f.label.map((line, j) => <span key={j}>{line}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .feature-bar-section {
          padding: 0 0 40px;
          position: relative;
          z-index: 10;
        }
        .feature-bar-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 32px rgba(4,78,119,0.08);
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 36px 40px;
          gap: 8px;
        }
        .feature-bar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          flex: 1;
          position: relative;
          padding: 0 16px;
        }
        .feature-bar-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: rgba(4,78,119,0.1);
        }
        .feature-bar-icon {
          width: 56px;
          height: 56px;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-bar-icon svg {
          width: 100%;
          height: 100%;
        }
        .feature-bar-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.8px;
          color: #374151;
          text-align: center;
          line-height: 1.4;
        }
        .feature-bar-label span {
          display: block;
        }
        @media (max-width: 768px) {
          .feature-bar-card {
            flex-wrap: wrap;
            gap: 28px;
            padding: 28px 20px;
          }
          .feature-bar-item { flex: 0 0 calc(50% - 16px); }
          .feature-bar-item:not(:last-child)::after { display: none; }
        }
      `}</style>
    </section>
  );
}
