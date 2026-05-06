'use client';

import { useCartStore } from '@/lib/store/useCartStore';
import { Button } from '@/components/ui/button';
import { ShoppingBasket, Plus, Minus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function SideCart() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 border border-gray-100 flex flex-col h-[calc(100vh-140px)]">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
            <ShoppingBasket className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-brand-secondary tracking-tight">Your Cart</h2>
        </div>
        {totalItems > 0 && (
          <span className="bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            {totalItems}
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full text-center p-6"
            >
              <h3 className="text-lg font-bold text-brand-secondary mb-2">Hungry?</h3>
              <p className="text-sm text-gray-400 max-w-[180px] leading-relaxed">
                Add some food to your cart to get started!
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="group relative p-4 bg-gray-50/50 rounded-2xl border border-transparent hover:border-brand-primary/10 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                      <h4 className="text-sm font-bold text-brand-secondary leading-tight truncate">{item.name}</h4>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1 shadow-sm scale-90 origin-left">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-brand-primary"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-brand-primary"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-right">
                           <div className="bg-pink-50 text-brand-primary px-1.5 py-0.5 rounded-full text-[8px] font-black mb-1">
                             Saving Tk99
                           </div>
                           <p className="text-sm font-extrabold text-brand-primary">৳{item.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {totalItems > 0 && (
        <div className="p-6 border-t border-gray-100 bg-gray-50/30">
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span className="font-semibold">৳{totalPrice}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-brand-secondary pt-2 border-t border-dashed border-gray-200">
              <span>Total</span>
              <span className="text-brand-primary">৳{totalPrice + 50}</span>
            </div>
          </div>
          <Button className="w-full py-6 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20">
            Go to Checkout
          </Button>
        </div>
      )}
    </div>
  );
}
