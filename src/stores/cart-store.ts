"use client";

import { create } from "zustand";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  add: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  totalQuantity: number;
  totalPrice: number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  add: (item, qty = 1) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
          ),
        } as Partial<CartState> as CartState;
      }
      return { items: [...state.items, { ...item, quantity: qty }] } as Partial<CartState> as CartState;
    }),
  remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) } as Partial<CartState> as CartState)),
  clear: () => set({ items: [] } as Partial<CartState> as CartState),
  open: () => set({ isOpen: true } as Partial<CartState> as CartState),
  close: () => set({ isOpen: false } as Partial<CartState> as CartState),
  get totalQuantity() {
    return get().items.reduce((sum, i) => sum + i.quantity, 0);
  },
  get totalPrice() {
    return get().items.reduce((sum, i) => sum + i.quantity * i.price, 0);
  },
}));



