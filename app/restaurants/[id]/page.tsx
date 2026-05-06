'use client';

import { useParams } from 'next/navigation';
import { Container } from '@/components/shared/Container';
import { RestaurantHeader } from '@/components/shared/RestaurantHeader';
import { MenuSection } from '@/components/shared/MenuSection';
import { SideCart } from '@/components/shared/SideCart';
import { Search, ChevronRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/store/useCartStore';

// Demo Data with Unique Menus per Restaurant
const restaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    cuisine: 'Italian, Pizza',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 50,
    image: '/pizza.png',
    menu: [
      {
        id: 'p1',
        name: 'Pepperoni Overload',
        description: 'Double pepperoni, double cheese, and our signature tomato sauce on a hand-tossed crust.',
        price: 850,
        image: '/pizza.png',
        category: 'Popular',
        popular: true,
      },
      {
        id: 'p2',
        name: 'Margherita Dream',
        description: 'Fresh mozzarella, vine-ripened tomatoes, and fresh basil with a drizzle of extra virgin olive oil.',
        price: 650,
        image: '/pizza.png',
        category: 'Pizzas',
      },
      {
        id: 'p3',
        name: 'BBQ Chicken Pizza',
        description: 'Grilled chicken, smoky BBQ sauce, red onions, and cilantro.',
        price: 950,
        image: '/pizza.png',
        category: 'Pizzas',
      }
    ]
  },
  {
    id: 2,
    name: 'Burger House',
    cuisine: 'American, Burgers',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: 40,
    image: '/burger.png',
    menu: [
      {
        id: 'b1',
        name: 'Classic Cheeseburger',
        description: 'A juicy 100% beef patty topped with melted cheddar, lettuce, tomato, and our secret sauce.',
        price: 450,
        image: '/burger.png',
        category: 'Popular',
        popular: true,
      },
      {
        id: 'b2',
        name: 'Smoky BBQ Burger',
        description: 'Crispy bacon, onion rings, BBQ sauce, and smoked gouda.',
        price: 550,
        image: '/burger.png',
        category: 'Burgers',
      },
      {
        id: 'b3',
        name: 'Double Bacon King',
        description: 'Two flame-grilled beef patties, topped with thick-cut smoked bacon and melted American cheese.',
        price: 750,
        image: '/burger.png',
        category: 'Burgers',
      }
    ]
  },
  {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Japanese, Sushi',
    rating: 4.9,
    deliveryTime: '30-40 min',
    deliveryFee: 60,
    image: '/sushi.png',
    menu: [
      {
        id: 's1',
        name: 'Salmon Nigiri Set',
        description: 'Premium fresh Atlantic salmon served over vinegared rice. (6 pcs)',
        price: 1200,
        image: '/sushi.png',
        category: 'Popular',
        popular: true,
      },
      {
        id: 's2',
        name: 'Dragon Roll',
        description: 'Shrimp tempura and cucumber topped with avocado and unagi sauce.',
        price: 1500,
        image: '/sushi.png',
        category: 'Sushi Rolls',
      },
      {
        id: 's3',
        name: 'Miso Soup',
        description: 'Traditional Japanese soup with tofu, seaweed, and green onions.',
        price: 250,
        image: '/sushi.png',
        category: 'Sides',
      }
    ]
  }
];

export default function RestaurantDetailPage() {
  const { id } = useParams();
  const { openDrawer, getTotalItems, getTotalPrice } = useCartStore();

  // Find restaurant or fallback
  const restaurant = restaurants.find((r) => r.id === Number(id)) || restaurants[0];
  const menuItems = restaurant.menu;
  const categories = Array.from(new Set(menuItems.map(i => i.category)));

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-white">
      {/* Restaurant Info Header */}
      <RestaurantHeader restaurant={restaurant} />

      <Container>
        <div className="flex flex-col lg:flex-row gap-8 py-10">
          {/* Main Menu Content */}
          <div className="flex-1">
            {/* Category Navigation & Search */}
            <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md py-4 mb-8 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <nav className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    className="whitespace-nowrap px-6 py-2 rounded-full bg-gray-50 border border-transparent text-sm font-bold text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm active:scale-95"
                  >
                    {cat}
                  </a>
                ))}
              </nav>

              <div className="relative min-w-[240px] hidden sm:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search in menu..."
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border-2 border-transparent rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all"
                />
              </div>
            </div>

            <MenuSection
              restaurantId={restaurant.id}
              restaurantName={restaurant.name}
              items={menuItems}
            />
          </div>

          {/* Sticky Side Cart - Restored as "before" */}
          <div className="hidden lg:block w-[380px] shrink-0">
            <div className="sticky top-24">
              <SideCart />
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Cart Trigger (Fixed Bottom) */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-brand-primary py-5 rounded-2xl text-white font-bold flex items-center justify-between px-8 shadow-2xl shadow-brand-primary/40"
        >
          <span className="flex items-center gap-2">
            View your cart
            <ChevronRight className="w-4 h-4" />
          </span>
          <span>৳ 0.00</span>
        </motion.button>
      </div>
    </div>
  );
}
