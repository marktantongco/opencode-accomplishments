'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Zone } from '@/lib/spatial';

interface UIState {
  theme: 'dark' | 'light';
  sidebarOpen: boolean;
  paletteOpen: boolean;
  activeZone: Zone;
  reducedMotion: boolean;
  toggleTheme: () => void;
  setSidebarOpen: (open: boolean) => void;
  setPaletteOpen: (open: boolean) => void;
  setActiveZone: (zone: Zone) => void;
  setReducedMotion: (reduced: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: 'dark',
      sidebarOpen: false,
      paletteOpen: false,
      activeZone: 'home' as Zone,
      reducedMotion: false,

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        })),

      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setPaletteOpen: (open) => set({ paletteOpen: open }),
      setActiveZone: (zone) => set({ activeZone: zone }),
      setReducedMotion: (reduced) => set({ reducedMotion: reduced }),
    }),
    {
      name: 'ui-preferences',
      partialize: (state) => ({
        theme: state.theme,
        reducedMotion: state.reducedMotion,
      }),
    }
  )
);
