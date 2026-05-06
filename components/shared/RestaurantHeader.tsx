import { Container } from './Container';
import { Star, Clock, Truck, Info, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';

interface RestaurantHeaderProps {
  restaurant: {
    name: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    deliveryFee: number;
    image?: string;
  };
}

export function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-100 pb-8">
      <Container>
        <div className="pt-8 flex flex-col md:flex-row gap-8 items-start">
          {/* Restaurant Logo/Image */}
          <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
            <Image
              src={restaurant.image || '/burger.png'}
              alt={restaurant.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Restaurant Info */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <nav className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                  <span className="hover:text-brand-primary cursor-pointer transition-colors">Homepage</span>
                  <span>/</span>
                  <span className="hover:text-brand-primary cursor-pointer transition-colors">Dhaka</span>
                  <span>/</span>
                  <span className="text-gray-600 font-medium">{restaurant.name}</span>
                </nav>
                <p className="text-sm text-brand-primary font-bold mb-1 uppercase tracking-wider">{restaurant.cuisine}</p>
                <h1 className="text-3xl md:text-4xl font-extrabold text-brand-secondary tracking-tight">{restaurant.name}</h1>
              </div>
              <div className="flex gap-2">
                <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-brand-primary/10 hover:text-brand-primary transition-all shadow-sm">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all shadow-sm">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 py-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-yellow-50 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-secondary">{restaurant.rating}</p>
                  <p className="text-xs text-gray-400 font-medium hover:underline cursor-pointer">100+ reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-secondary">{restaurant.deliveryTime}</p>
                  <p className="text-xs text-gray-400 font-medium">Delivery Time</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-green-50 rounded-lg">
                  <Truck className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-secondary">৳{restaurant.deliveryFee}</p>
                  <p className="text-xs text-gray-400 font-medium">Delivery Fee</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 max-w-fit">
              <Info className="w-5 h-5 text-brand-primary" />
              <p className="text-sm text-brand-secondary font-medium">
                Free delivery for first order <span className="text-brand-primary font-bold">Tk 99</span> • Min. order Tk 50
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
