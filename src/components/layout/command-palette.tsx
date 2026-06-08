'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/lib/store/ui-store';
import { zones } from '@/lib/spatial';
import { skills } from '@/lib/data/skills';
import { agentModes } from '@/lib/data/agents';
import { Search, Command } from 'lucide-react';

interface SearchItem {
  id: string;
  label: string;
  description: string;
  route: string;
  type: 'page' | 'skill' | 'agent';
}

const allItems: SearchItem[] = [
  ...Object.values(zones).map((z) => ({
    id: `zone-${z.id}`,
    label: z.label,
    description: z.description,
    route: z.route,
    type: 'page' as const,
  })),
  ...skills.map((s) => ({
    id: `skill-${s.id}`,
    label: s.name,
    description: s.description.substring(0, 80),
    route: `/skill-ecosystem#${s.slug}`,
    type: 'skill' as const,
  })),
  ...agentModes.map((a) => ({
    id: `agent-${a.id}`,
    label: `${a.emoji} ${a.name}`,
    description: a.thinkingStyle,
    route: `/agent-modes#${a.id}`,
    type: 'agent' as const,
  })),
];

export function CommandPalette() {
  const router = useRouter();
  const isOpen = useUIStore((s) => s.paletteOpen);
  const setOpen = useUIStore((s) => s.setPaletteOpen);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = query
    ? allItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  const handleSelect = useCallback(
    (item: SearchItem) => {
      setOpen(false);
      router.push(item.route);
    },
    [router, setOpen]
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(!isOpen);
        return;
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        handleSelect(filtered[selectedIndex]);
        return;
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, filtered, selectedIndex, handleSelect, setOpen]);

  // Scroll selected into view
  useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[selectedIndex] as HTMLElement;
      el?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[var(--overlay)] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Palette */}
          <motion.div
            className="relative w-full max-w-lg mx-4 glass-heavy rounded-xl shadow-2xl overflow-hidden border border-[var(--glass-border)]"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--glass-border)]">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search skills, pages, agent modes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs text-muted-foreground bg-[var(--hover-light)] rounded border border-[var(--kbd-border)]">
                <Command className="h-3 w-3" />
                K
              </kbd>
            </div>

            {/* Results */}
            <div ref={listRef} className="max-h-80 overflow-y-auto p-2 space-y-0.5">
              {filtered.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No results for &quot;{query}&quot;
                </p>
              )}
              {filtered.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors',
                    i === selectedIndex
                      ? 'bg-[var(--selected-light)] text-foreground'
                      : 'text-muted-foreground hover:bg-[var(--hover-light)] hover:text-foreground'
                  )}
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground shrink-0 w-12">
                    {item.type}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.label}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-[var(--glass-border)] flex items-center gap-4 text-xs text-muted-foreground">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
