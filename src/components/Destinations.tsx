
import { Card, CardContent } from '@/components/ui/card';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=800&auto=format&fit=crop',
    price: 'From $899',
    description: 'Paradise beaches and ancient temples'
  },
  {
    id: 2,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?q=80&w=800&auto=format&fit=crop',
    price: 'From $1,299',
    description: 'City of love and endless culture'
  },
  {
    id: 3,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    price: 'From $2,199',
    description: 'Crystal clear waters and luxury resorts'
  },
  {
    id: 4,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop',
    price: 'From $1,099',
    description: 'Modern metropolis meets ancient tradition'
  },
  {
    id: 5,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
    price: 'From $1,599',
    description: 'Stunning sunsets and white-washed buildings'
  },
  {
    id: 6,
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    price: 'From $1,799',
    description: 'Luxury shopping and architectural marvels'
  }
];

const Destinations = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our most popular travel destinations, handpicked for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 border-0">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl font-bold">{destination.price}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {destination.description}
                </p>
                <button className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200">
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
