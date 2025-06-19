
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">WanderLust</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted travel partner for unforgettable adventures around the world. 
              Discover breathtaking destinations and create memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#packages" className="text-gray-300 hover:text-white transition-colors">Packages</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Flight Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hotel Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tour Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">24/7 Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} WanderLust. All rights reserved. Made with ❤️ for travelers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
