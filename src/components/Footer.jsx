import { useState } from 'react';
import Logo from './Logo';

const BASE = 'https://medicosmindz.com';

const quickLinks = ['Home', 'About Us', 'Find Universities', 'Blogs', 'Contact Us'];
const courses = ['MBBS Abroad', 'BDS Abroad', 'Engineering', 'Commerce', 'MBA/Management', 'Architecture'];

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61559361827873',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M24 12.073C24 5.40401 18.629 0 12 0C5.37 0 0 5.40401 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mbbstimes',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@mbbstimes',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="tc-footer" id="contact">
      {/* Decorative shapes */}
      <svg className="footer-sparkle footer-sparkle-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z"/></svg>
      <svg className="footer-sparkle footer-sparkle-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.2 9.8L24 12l-9.8 2.2L12 24l-2.2-9.8L0 12l9.8-2.2z"/></svg>
      <span className="footer-cross footer-cross-1">+</span>
      <span className="footer-cross footer-cross-2">+</span>
      <div className="footer-blob-leaf" />
      <div className="footer-blob-leaf-dot" />
      <div className="footer-blob-bottom" />
      <div className="footer-blob-bottom-accent" />

      <div className="footer-inner">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.4fr', gap: 48, maxWidth: 1320, margin: '0 auto' }}
          className="footer-grid">

          {/* Brand */}
          <div>
            <div className="footer-logo">
              <Logo light />
            </div>
            <p className="footer-desc">
              By Doctor for the future Doctors. India's most trusted medical university consultancy
              with 10+ years of expert guidance.
            </p>
            <div className="footer-social">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map(l => (
                <a key={l} href="#">{l}</a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="footer-title">Our Courses</h4>
            <div className="footer-links">
              {courses.map(c => (
                <a key={c} href="#">{c}</a>
              ))}
            </div>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="footer-title">Contact Us</h4>
            <div style={{ fontSize: 14, lineHeight: 2, opacity: 0.8, marginBottom: 28 }}>
              <p>📍 Hansalya Building, Flat No.15, 1st Floor,<br />Barakhamba Road, New Delhi 110001</p>
              <p style={{ marginTop: 8 }}>
                📞 <a href="tel:+919773877349">+91 9773877349</a><br />
                📞 <a href="tel:+918828377456">+91 8828377456</a>
              </p>
              <p style={{ marginTop: 8 }}>
                ✉ <a href="mailto:info@mbbstimes.com">info@mbbstimes.com</a>
              </p>
            </div>

            <h4 className="footer-title" style={{ fontSize: 15 }}>Newsletter</h4>
            <form
              className="subscribe-form"
              onSubmit={e => { e.preventDefault(); setEmail(''); }}
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">→</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© 2026 MbbsTimes. All Rights Reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) {
          .footer-blob-leaf, .footer-blob-leaf-dot, .footer-blob-bottom,
          .footer-blob-bottom-accent, .footer-cross-1, .footer-cross-2 { display: none; }
        }
      `}</style>
    </footer>
  );
}
