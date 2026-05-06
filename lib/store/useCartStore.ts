import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  restaurantId: number;
  restaurantName: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  clearRestaurantCart: (restaurantId: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: currentItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            isDrawerOpen: true,
          });
        } else {
          set({ items: [...currentItems, { ...item, quantity: 1 }], isDrawerOpen: true });
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set({
          items: get().items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        });
      },
      clearCart: () => set({ items: [] }),
      clearRestaurantCart: (restaurantId) => {
        set({ items: get().items.filter((i) => i.restaurantId !== restaurantId) });
      },
      getTotalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
      getTotalPrice: () => get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      isDrawerOpen: false,
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
    }),
    {
      name: 'foodlab-cart',
    }
  )
);
