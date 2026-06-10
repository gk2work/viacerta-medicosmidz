import { useEffect } from 'react';

export function useWow() {
  useEffect(() => {
    const els = document.querySelectorAll('.wow');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || '0';
            el.style.transitionDelay = `${delay}s`;
            el.classList.add('animated');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
