'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { zones, type Zone } from '@/lib/spatial';
import { useUIStore } from '@/lib/store/ui-store';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Search, Menu, X, Sparkles, Wrench, Compass, BookOpen, Zap, ShoppingBag } from 'lucide-react';
import { useBasketStore } from '@/lib/store/basket-store';

const navZones: Zone[] = ['home', 'build', 'discover', 'playbook', 'activate'];

const zoneIcons: Record<Zone, React.ReactNode> = {
  home: <Sparkles className="h-3 w-3" aria-hidden="true" />,
  build: <Wrench className="h-3 w-3" aria-hidden="true" />,
  discover: <Compass className="h-3 w-3" aria-hidden="true" />,
  playbook: <BookOpen className="h-3 w-3" aria-hidden="true" />,
  activate: <Zap className="h-3 w-3" aria-hidden="true" />,
};

export function Navbar() {
  const pathname = usePathname();
  const theme = useUIStore((s) => s.theme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);
  const setPaletteOpen = useUIStore((s) => s.setPaletteOpen);
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);
  const setSidebarOpen = useUIStore((s) => s.setSidebarOpen);
  const navRef = useRef<HTMLDivElement>(null);
  const basketCount = useBasketStore((s) => s.items.length);

  const currentZone = navZones.find((z) => zones[z].route === pathname) || 'home';

  // Body scroll lock when drawer is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[var(--z-sticky)] glass-heavy border-b border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <span className="text-base sm:text-lg font-bold tracking-tight text-foreground whitespace-nowrap">
                <span className="text-[var(--zone-home)]">&lt;</span>
                OPencode
                <span className="text-[var(--zone-home)]">/&gt;</span>
              </span>
            </Link>

            {/* Zone Navigation — always visible, compact on small screens */}
            <div
              ref={navRef}
              className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto scrollbar-none flex-1 justify-center"
            >
              {navZones.map((zone) => {
                const config = zones[zone];
                const isActive = currentZone === zone;
                return (
                  <Link
                    key={zone}
                    href={config.route}
                    className={cn(
                      'relative flex items-center gap-1 sm:gap-1.5 font-medium rounded-lg transition-colors shrink-0',
                      'px-1.5 py-1 text-[11px]',
                      'sm:px-2 sm:py-1.5 sm:text-xs',
                      'lg:px-3 lg:py-2 lg:text-sm',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-[var(--hover-light)]'
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-[var(--nav-indicator)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                      <span className="hidden sm:inline" style={{ color: config.accentColor }}>
                        {zoneIcons[zone]}
                      </span>
                      <span
                        className="inline sm:hidden w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: config.accentColor }}
                      />
                      <span className="truncate">{isActive ? config.label : zone === 'home' ? 'Home' : config.label}</span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Hamburger — keep for drawer access */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation menu"
                className="text-muted-foreground hover:text-foreground"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setPaletteOpen(true)}
                aria-label="Open command palette"
                className="text-muted-foreground hover:text-foreground"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
              </Button>
              {/* Basket — item count badge */}
              <Button
                variant="ghost"
                size="icon"
                aria-label={`Basket with ${basketCount} items`}
                className="text-muted-foreground hover:text-foreground relative"
              >
                <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                {basketCount > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 h-4 min-w-[16px] px-1 flex items-center justify-center rounded-full text-[10px] font-bold"
                    style={{ backgroundColor: 'var(--zone-home)', color: '#000' }}
                  >
                    {basketCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                className="text-muted-foreground hover:text-foreground"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <MobileNavDrawer
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

function MobileNavDrawer({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const currentZone = navZones.find((z) => zones[z].route === pathname) || 'home';

  // Escape key closes the drawer
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleNav = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--overlay)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel — swipeable to dismiss */}
          <motion.aside
            className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-heavy border-l border-[var(--glass-border)] flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0.6, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80) {
                onClose();
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-[var(--glass-border)]">
              <span className="text-sm font-semibold text-foreground">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            {/* Links */}
            <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
              {navZones.map((zone) => {
                const config = zones[zone];
                const isActive = currentZone === zone;
                return (
                  <Link
                    key={zone}
                    href={config.route}
                    onClick={handleNav}
                    className={cn(
                      'flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'text-foreground bg-[var(--nav-indicator)]'
                        : 'text-muted-foreground hover:text-foreground hover:bg-[var(--hover-light)]'
                    )}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: config.accentColor }}
                    />
                    <span>{config.label}</span>
                    {isActive && (
                      <span
                        className="ml-auto text-xs"
                        style={{ color: config.accentColor }}
                      >
                        Active
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-[var(--glass-border)]">
              <p className="text-xs text-muted-foreground">
                Press <kbd className="px-1 py-0.5 rounded border border-[var(--kbd-border)] text-[10px]">Esc</kbd> or swipe right to close
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function NavbarSpacer() {
  return <div className="h-16" />;
}
