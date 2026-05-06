'use client';

import { useCartStore } from '@/lib/store/useCartStore';
import { Button } from '@/components/ui/button';
import { Plus, Star, Clock } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

interface MenuSectionProps {
  restaurantId: number;
  restaurantName: string;
  items: MenuItem[];
}

export function MenuSection({ restaurantId, restaurantName, items }: MenuSectionProps) {
  const addItem = useCartStore((state) => state.addItem);
  
  const categories = Array.from(new Set(items.map((item) => item.category)));

  return (
    <div className="space-y-12 pb-20">
      {categories.map((category) => (
        <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-extrabold text-brand-secondary tracking-tight">{category}</h2>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {items
              .filter((item) => item.category === category)
              .map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white p-4 rounded-3xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-xl hover:shadow-gray-200/40 transition-all flex gap-5"
                >
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-lg font-bold text-brand-secondary group-hover:text-brand-primary transition-colors leading-tight">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="flex items-center gap-1 px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-bold rounded-full uppercase tracking-tighter">
                            <Star className="w-3 h-3 fill-current" /> Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed font-medium mb-3">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-extrabold text-brand-secondary">
                        <span className="text-sm font-bold text-brand-primary mr-0.5">৳</span>
                        {item.price}
                      </p>
                      <button
                        onClick={() => addItem({
                          ...item,
                          quantity: 1,
                          restaurantId,
                          restaurantName
                        })}
                        className="w-10 h-10 bg-gray-50 text-brand-secondary hover:bg-brand-primary hover:text-white rounded-2xl flex items-center justify-center transition-all shadow-sm active:scale-90"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0 shadow-inner bg-gray-50 border border-gray-50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
