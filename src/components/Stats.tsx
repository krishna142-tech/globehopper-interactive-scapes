
import { useState, useEffect, useRef } from 'react';

const stats = [
  { number: 500, suffix: '+', label: 'Happy Travelers', icon: '😊' },
  { number: 24, suffix: '/7', label: 'Support Available', icon: '📞' },
  { number: 10, suffix: 'K+', label: 'Bookings Completed', icon: '✈️' },
  { number: 95, suffix: '%', label: 'Customer Satisfaction', icon: '⭐' }
];

const Stats = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.number / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={statsRef} className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
