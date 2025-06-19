
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRipple } from '@/hooks/useRipple';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop',
    price: 'From $899',
    duration: '7 Days',
    description: 'Tropical paradise with stunning temples and beaches'
  },
  {
    id: 2,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?q=80&w=2073&auto=format&fit=crop',
    price: 'From $1,299',
    duration: '5 Days',
    description: 'City of love, art, and exquisite cuisine'
  },
  {
    id: 3,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    price: 'From $2,199',
    duration: '6 Days',
    description: 'Crystal clear waters and overwater bungalows'
  },
  {
    id: 4,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2088&auto=format&fit=crop',
    price: 'From $1,599',
    duration: '8 Days',
    description: 'Modern metropolis meets ancient traditions'
  }
];

const Destinations = () => {
  const createRipple = useRipple();

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our handpicked destinations that offer unforgettable experiences and breathtaking views
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="ripple relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white dark:bg-gray-700 border-0 shadow-lg"
              onClick={createRipple}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{destination.duration}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{destination.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{destination.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary dark:text-blue-400">{destination.price}</span>
                  <Button 
                    size="sm" 
                    className="ripple relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25"
                    onClick={(e) => {
                      e.stopPropagation();
                      createRipple(e);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
