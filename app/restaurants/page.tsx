'use client';

import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Star, Clock, Truck, Store, Filter } from 'lucide-react';
import Link from 'next/link';

const restaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    cuisine: 'Italian, Pizza',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 50,
    image: '/pizza.png',
  },
  {
    id: 2,
    name: 'Burger House',
    cuisine: 'American, Burgers',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: 40,
    image: '/burger.png',
  },
  {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Japanese, Sushi',
    rating: 4.9,
    deliveryTime: '30-40 min',
    deliveryFee: 60,
    image: '/sushi.png',
  },
  // Add more as needed...
];

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-100 py-12">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-extrabold text-brand-secondary tracking-tight">Discover Restaurants</h1>
            <div className="flex gap-2 text-sm text-gray-500 justify-center">
              <MapPin className="w-4 h-4 text-brand-primary" />
              <span>Showing results for <span className="font-bold text-brand-secondary">Dhaka, Bangladesh</span></span>
            </div>
            
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
              <input
                type="text"
                placeholder="Search for restaurants, cuisines..."
                className="w-full pl-14 pr-6 py-5 bg-gray-50 border-2 border-gray-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary transition-all text-lg font-medium"
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col md:flex-row gap-10 py-12">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-brand-secondary flex items-center gap-2">
                <Filter className="w-5 h-5" /> Filters
              </h2>
              <button className="text-xs font-bold text-brand-primary hover:underline">Clear All</button>
            </div>

            <div className="space-y-6">
               <div className="space-y-3">
                 <h3 className="text-sm font-bold text-brand-secondary uppercase tracking-wider">Cuisines</h3>
                 {['Italian', 'Japanese', 'American', 'Fast Food', 'Bengali'].map(c => (
                   <label key={c} className="flex items-center gap-3 group cursor-pointer">
                     <div className="w-5 h-5 rounded border-2 border-gray-200 group-hover:border-brand-primary transition-all" />
                     <span className="text-sm text-gray-500 font-medium group-hover:text-brand-secondary transition-colors">{c}</span>
                   </label>
                 ))}
               </div>
            </div>
          </aside>

          {/* Restaurants Grid */}
          <div className="flex-1 space-y-8">
             <div className="flex items-center justify-between">
                <p className="text-gray-500 font-medium">{restaurants.length} restaurants found</p>
                <div className="flex items-center gap-2 text-sm">
                   <span className="text-gray-400">Sort by:</span>
                   <select className="bg-transparent font-bold text-brand-secondary focus:outline-none">
                     <option>Recommended</option>
                     <option>Fastest Delivery</option>
                     <option>Top Rated</option>
                   </select>
                </div>
             </div>

             <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {restaurants.map((restaurant) => (
                  <Link
                    key={restaurant.id}
                    href={`/restaurants/${restaurant.id}`}
                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-100/50 border border-gray-100 hover:border-brand-primary/20 hover:-translate-y-2 transition-all duration-500 group"
                  >
                    <div className="relative h-56 overflow-hidden">
                       <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-secondary shadow-sm flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" /> {restaurant.rating}
                       </div>
                    </div>
                    <div className="p-8 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-brand-secondary group-hover:text-brand-primary transition-colors leading-tight">{restaurant.name}</h3>
                        <p className="text-gray-400 text-sm font-medium mt-1">{restaurant.cuisine}</p>
                      </div>
                      <div className="flex items-center gap-6 pt-2 border-t border-gray-50">
                        <div className="flex items-center gap-2">
                           <Clock className="w-4 h-4 text-gray-300" />
                           <span className="text-xs font-bold text-gray-500">{restaurant.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Truck className="w-4 h-4 text-gray-300" />
                           <span className="text-xs font-bold text-gray-500">৳{restaurant.deliveryFee}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
             </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
