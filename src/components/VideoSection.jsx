import { useState } from 'react';
import { useWow } from '../hooks/useWow';

const BASE = 'https://medicosmindz.com';
const YT_URL = 'https://www.youtube.com/embed/lZRkCDVxLNc?si=82CGRmeNKIqd1wJb';

export default function VideoSection() {
  useWow();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="tc-video">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div className={`video-card wow zoomIn`} data-delay="0.2">
          <img
            src={`${BASE}/frontend/assets/img/now-video.jpg`}
            alt="Watch Video"
            className="bg-img"
          />
          <div className="float-cont">
            <button
              className="play-btn"
              onClick={() => setShowVideo(true)}
              aria-label="Play video"
            >
              ▶
            </button>
            <h2 className="video-title">Watch This Video</h2>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
            zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onClick={() => setShowVideo(false)}
        >
          <div
            style={{ width: '90%', maxWidth: 900, position: 'relative' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: 'absolute', top: -40, right: 0,
                background: 'none', border: 'none', color: '#fff',
                fontSize: 28, cursor: 'pointer',
              }}
            >✕</button>
            <div style={{ paddingBottom: '56.25%', position: 'relative' }}>
              <iframe
                src={YT_URL + '&autoplay=1'}
                title="MedicosMindz Video"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', borderRadius: 12 }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
