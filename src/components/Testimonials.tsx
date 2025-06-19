
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'WanderLust made our honeymoon absolutely perfect! The attention to detail and personalized service exceeded all our expectations.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, USA',
    rating: 5,
    text: 'Best travel agency I have ever worked with. They handled everything seamlessly and the trip was absolutely incredible!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'Amazing experience from start to finish. The team went above and beyond to make our family vacation unforgettable.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="py-20 bg-gradient-to-br from-primary/5 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real stories from real travelers who have experienced the magic of our journeys
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 shadow-2xl border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-6 ring-4 ring-primary/20"
                />
                
                <div className="flex mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{currentTestimonial.text}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-bold text-lg text-gray-900 dark:text-white">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {currentTestimonial.location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
