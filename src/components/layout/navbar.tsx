'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { zones, type Zone } from '@/lib/spatial';
import { useUIStore } from '@/lib/store/ui-store';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Search } from 'lucide-react';

const navZones: Zone[] = ['home', 'build', 'discover', 'playbook', 'activate'];

export function Navbar() {
  const pathname = usePathname();
  const theme = useUIStore((s) => s.theme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);
  const setPaletteOpen = useUIStore((s) => s.setPaletteOpen);

  const currentZone = navZones.find((z) => zones[z].route === pathname) || 'home';

  return (
    <nav className="fixed top-0 left-0 right-0 z-[var(--z-sticky)] glass-heavy border-b border-[var(--glass-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg font-bold tracking-tight text-foreground">
              <span className="text-[var(--zone-home)]">&lt;</span>
              OPencode
              <span className="text-[var(--zone-home)]">/&gt;</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navZones.map((zone) => {
              const config = zones[zone];
              const isActive = currentZone === zone;
              return (
                <Link
                  key={zone}
                  href={config.route}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-white/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{config.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command palette"
              className="text-muted-foreground hover:text-foreground"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="text-muted-foreground hover:text-foreground"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavbarSpacer() {
  return <div className="h-16" />;
}
