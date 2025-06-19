
import { Button } from '@/components/ui/button';
import { useRipple } from '@/hooks/useRipple';

const Hero = () => {
  const createRipple = useRipple();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop')`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight tracking-tight">
            <span className="block text-white">Explore The</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              World
            </span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 sm:mb-8"></div>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed font-light px-4">
          Discover breathtaking destinations and create unforgettable memories with our curated travel experiences around the globe
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <Button 
            size="lg" 
            className="ripple relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
            onClick={createRipple}
          >
            Start Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="ripple relative overflow-hidden border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 rounded-full w-full sm:w-auto"
            onClick={createRipple}
          >
            Watch Our Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
