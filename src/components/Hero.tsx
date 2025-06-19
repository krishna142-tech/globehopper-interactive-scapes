
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2000&auto=format&fit=crop"
          alt="Beautiful landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Explore The World
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in delay-200">
          Discover breathtaking destinations and create unforgettable memories with our premium travel experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={scrollToDestinations}
          >
            Book Your Trip
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            onClick={scrollToDestinations}
          >
            Explore Destinations
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white opacity-70" />
      </div>
    </div>
  );
};

export default Hero;
