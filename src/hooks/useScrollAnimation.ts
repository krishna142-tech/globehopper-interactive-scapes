
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Wait for DOM to be ready
    const initAnimation = () => {
      const scrollTriggers = document.querySelectorAll('.scroll-trigger');
      scrollTriggers.forEach((trigger) => {
        observer.observe(trigger);
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
