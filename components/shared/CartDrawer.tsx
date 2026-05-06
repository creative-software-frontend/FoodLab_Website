'use client';

import { useCartStore, CartItem } from '@/lib/store/useCartStore';
import { Button } from '@/components/ui/button';
import { ShoppingBasket, Plus, Minus, Trash2, X, ChevronRight, ShoppingBag, Store } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo } from 'react';

export function CartDrawer() {
  const { 
    items, 
    updateQuantity, 
    removeItem, 
    clearRestaurantCart,
    isDrawerOpen, 
    closeDrawer 
  } = useCartStore();

  // Group items by restaurant
  const groupedItems = useMemo(() => {
    const groups: { [key: number]: { name: string, items: CartItem[] } } = {};
    items.forEach(item => {
      if (!groups[item.restaurantId]) {
        groups[item.restaurantId] = { name: item.restaurantName, items: [] };
      }
      groups[item.restaurantId].items.push(item);
    });
    return groups;
  }, [items]);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between bg-white sticky top-0 z-10 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <button
                  onClick={closeDrawer}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
                <h2 className="text-2xl font-bold text-brand-secondary tracking-tight">All carts</h2>
              </div>
              <Link href="/signin" onClick={closeDrawer}>
                <Button variant="outline" className="border-brand-primary text-brand-primary font-bold rounded-xl px-6">
                  Log in
                </Button>
              </Link>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar bg-gray-50/30">
              {Object.keys(groupedItems).length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                   <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <ShoppingBag className="w-12 h-12 text-gray-100" />
                   </div>
                   <h3 className="text-xl font-bold text-brand-secondary">Your cart is empty</h3>
                   <Button 
                    onClick={closeDrawer}
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 rounded-xl font-bold"
                   >
                     Find food
                   </Button>
                </div>
              ) : (
                Object.entries(groupedItems).map(([resId, group]) => (
                  <motion.div
                    key={resId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-6"
                  >
                    {/* Restaurant Info */}
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                           <Store className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-secondary">{group.name}</h4>
                          <p className="text-xs text-gray-400 font-medium">10-25 mins</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => clearRestaurantCart(Number(resId))}
                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Items */}
                    <div className="space-y-4">
                      {group.items.map((item) => (
                        <div key={item.id} className="space-y-3">
                          <div className="flex gap-4">
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0 border border-gray-100">
                              <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="flex items-center">
                               <button className="w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                                 <Plus className="w-4 h-4" />
                               </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                             <div className="bg-pink-50 text-brand-primary px-3 py-1 rounded-full text-[10px] font-extrabold flex items-center gap-1">
                               <div className="w-3 h-3 bg-brand-primary rounded-full flex items-center justify-center text-[8px] text-white">%</div>
                               Saving Tk99
                             </div>
                             <div className="flex items-baseline gap-2">
                               <span className="text-sm text-gray-300 line-through">Tk{item.price + 99}</span>
                               <span className="text-lg font-extrabold text-brand-primary">Tk{item.price}</span>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Restaurant Checkout */}
                    <Button className="w-full py-6 bg-white border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white rounded-xl font-bold transition-all duration-300">
                      Go to checkout
                    </Button>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
