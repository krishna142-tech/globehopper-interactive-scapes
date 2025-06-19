
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: 'Explorer Package',
    price: '$1,299',
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=800&auto=format&fit=crop',
    features: [
      'Round-trip flights',
      '4-star hotel accommodation',
      'Daily breakfast',
      'Guided city tours',
      'Travel insurance'
    ]
  },
  {
    id: 2,
    name: 'Luxury Escape',
    price: '$2,899',
    duration: '10 Days',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=800&auto=format&fit=crop',
    features: [
      'Business class flights',
      '5-star resort accommodation',
      'All meals included',
      'Private transfers',
      'Spa treatments',
      'Premium travel insurance'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Adventure Trek',
    price: '$899',
    duration: '5 Days',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=800&auto=format&fit=crop',
    features: [
      'Round-trip flights',
      'Mountain lodge stays',
      'Hiking equipment',
      'Professional guide',
      'Emergency support'
    ]
  }
];

const Packages = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Travel Packages
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our carefully crafted travel packages designed for every type of adventurer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
              pkg.popular ? 'ring-2 ring-primary scale-105' : ''
            } bg-white dark:bg-gray-700 border-0`}>
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}
              
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm">{pkg.duration}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  {pkg.name}
                </CardTitle>
                <div className="text-3xl font-bold text-primary">
                  {pkg.price}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
