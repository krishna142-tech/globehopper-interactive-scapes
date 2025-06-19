
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    // Wait for DOM to be ready
    const initAnimation = () => {
      const scrollTriggers = document.querySelectorAll('.scroll-trigger');
      scrollTriggers.forEach((trigger) => {
        // Ensure elements start visible on small screens
        if (window.innerWidth < 768) {
          trigger.classList.remove('opacity-0', 'translate-y-10');
          trigger.classList.add('opacity-100', 'translate-y-0');
        } else {
          observer.observe(trigger);
        }
      });
    };

    // Run after a short delay to ensure DOM is ready
    setTimeout(initAnimation, 100);

    return () => {
      const scrollTriggers = document.querySelectorAll('.scroll-trigger');
      scrollTriggers.forEach((trigger) => observer.unobserve(trigger));
    };
  }, []);
};
