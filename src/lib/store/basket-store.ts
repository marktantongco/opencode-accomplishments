'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Skill } from '@/lib/data/skills';

interface BasketState {
  items: Skill[];
  addItem: (skill: Skill) => void;
  removeItem: (id: string) => void;
  clearBasket: () => void;
  isInBasket: (id: string) => boolean;
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (skill) =>
        set((state) => {
          if (state.items.find((s) => s.id === skill.id)) return state;
          return { items: [...state.items, skill] };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((s) => s.id !== id),
        })),

      clearBasket: () => set({ items: [] }),

      isInBasket: (id) => {
        return !!get().items.find((s) => s.id === id);
      },
    }),
    {
      name: 'skill-basket',
    }
  )
);
