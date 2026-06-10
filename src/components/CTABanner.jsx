export default function CTABanner() {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-inner">
        <h2 className="cta-banner-title">Top Universities For MBBS in Georgia</h2>
        <p className="cta-banner-sub">
          You can check out the list of top MCI approved universities for MBBS universities of Georgia here.
        </p>
        <a href="#universities" className="butn bg-ln-orange1 cta-banner-btn">
          <span>→ Learn More</span>
        </a>
      </div>

      <style>{`
        .cta-banner-section {
          padding: 0 4vw 48px;
          position: relative;
          z-index: 10;
        }
        .cta-banner-inner {
          max-width: 1320px;
          margin: 0 auto;
          background: #F5F5EF;
          border-radius: 20px;
          padding: 48px 56px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .cta-banner-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(20px, 2.4vw, 28px);
          font-weight: 700;
          color: #191919;
          margin: 0;
        }
        .cta-banner-sub {
          font-size: 15px;
          color: #6b7280;
          max-width: 560px;
          margin: 0;
          line-height: 1.6;
        }
        .cta-banner-btn {
          margin-top: 8px;
        }
        @media (max-width: 768px) {
          .cta-banner-inner { padding: 32px 24px; }
        }
      `}</style>
    </section>
  );
}
