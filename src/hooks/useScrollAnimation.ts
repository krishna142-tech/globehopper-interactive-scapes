
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
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Observe all elements with the scroll-trigger class
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    scrollTriggers.forEach((trigger) => observer.observe(trigger));

    return () => {
      scrollTriggers.forEach((trigger) => observer.unobserve(trigger));
    };
  }, []);
};
