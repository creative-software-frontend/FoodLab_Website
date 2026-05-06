'use client';

import { useCartStore, CartItem } from '@/lib/store/useCartStore';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Store, ShoppingBag, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function CartPage() {
  const { items, removeItem } = useCartStore();

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

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
             <Link href="/" className="p-2 hover:bg-white rounded-full transition-all border border-transparent hover:border-gray-100">
               <ArrowLeft className="w-6 h-6 text-gray-600" />
             </Link>
             <h1 className="text-3xl font-extrabold text-brand-secondary tracking-tight">Your Carts</h1>
          </div>

          {Object.keys(groupedItems).length === 0 ? (
            <div className="bg-white rounded-[2.5rem] p-16 text-center shadow-xl shadow-gray-100/50 border border-gray-100">
               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-12 h-12 text-gray-200" />
               </div>
               <h2 className="text-2xl font-bold text-brand-secondary mb-2">Everything is empty here</h2>
               <p className="text-gray-400 mb-8 max-w-xs mx-auto">Looks like you haven't added anything to your cart yet.</p>
               <Link href="/restaurants">
                 <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-6 rounded-2xl font-bold text-lg">
                   Explore Restaurants
                 </Button>
               </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedItems).map(([resId, group]) => (
                <motion.div
                  key={resId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl shadow-gray-100/50 space-y-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-5">
                      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                         <Store className="w-8 h-8 text-brand-primary/40" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-brand-secondary">{group.name}</h4>
                        <p className="text-sm text-gray-400 font-medium mt-1">Estimated delivery: 10-25 mins</p>
                      </div>
                    </div>
                    <button className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all">
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="grid gap-8">
                    {group.items.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex gap-5">
                          <div className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-md shrink-0 border border-gray-100">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex flex-col justify-center">
                             <h5 className="text-lg font-bold text-brand-secondary">{item.name}</h5>
                             <div className="mt-3">
                               <button className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                                 <Plus className="w-5 h-5" />
                               </button>
                             </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                           <div className="bg-brand-primary/5 text-brand-primary px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-2 border border-brand-primary/10">
                             <span className="w-4 h-4 bg-brand-primary rounded-full flex items-center justify-center text-[8px] text-white">%</span>
                             Saving Tk99
                           </div>
                           <div className="flex items-baseline gap-3">
                             <span className="text-base text-gray-300 line-through">Tk{item.price + 99}</span>
                             <span className="text-2xl font-black text-brand-primary">Tk{item.price}</span>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-gray-50">
                    <Button className="w-full py-8 bg-white border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white rounded-[2rem] font-bold text-xl transition-all duration-500 shadow-lg shadow-gray-100/50">
                      Go to checkout
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
