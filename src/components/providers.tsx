'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/lib/store/ui-store';
import { Toaster } from '@/components/ui/sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useUIStore((s) => s.theme);
  const setReducedMotion = useUIStore((s) => s.setReducedMotion);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme, setReducedMotion]);

  return (
    <>
      {children}
      <Toaster position="bottom-right" />
    </>
  );
}
