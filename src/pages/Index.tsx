
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollToTop from '@/components/ScrollToTop';
import Preloader from '@/components/Preloader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useScrollAnimation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 ${isDark ? 'dark' : ''}`}>
      <Navbar />
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="destinations" className="scroll-trigger opacity-0 translate-y-10 bg-gray-50 dark:bg-gray-800">
          <Destinations />
        </section>
        
        <section id="packages" className="scroll-trigger opacity-0 translate-y-10 bg-white dark:bg-gray-900">
          <Packages />
        </section>
        
        <section id="testimonials" className="scroll-trigger opacity-0 translate-y-10 bg-gray-50 dark:bg-gray-800">
          <Testimonials />
        </section>
        
        <section className="scroll-trigger opacity-0 translate-y-10 bg-primary dark:bg-gray-900">
          <Stats />
        </section>
        
        <section id="contact" className="scroll-trigger opacity-0 translate-y-10 bg-white dark:bg-gray-800">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
