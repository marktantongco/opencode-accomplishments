'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { glassPanel, microVariants } from '@/lib/motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'lime' | 'magenta' | 'violet' | 'orange' | 'none';
  variant?: 'light' | 'medium' | 'heavy';
  hoverable?: boolean;
  onClick?: () => void;
  accentBorder?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = 'none',
  variant = 'medium',
  hoverable = true,
  onClick,
  accentBorder = false,
}: GlassCardProps) {
  const glassClasses = {
    light: 'glass',
    medium: 'glass-strong',
    heavy: 'glass-heavy',
  };

  const glowClasses = {
    cyan: 'glow-cyan',
    lime: 'glow-lime',
    magenta: 'glow-magenta',
    violet: 'glow-violet',
    orange: 'glow-orange',
    none: '',
  };

  return (
    <motion.div
      className={cn(
        'rounded-xl shadow-glass',
        glassClasses[variant],
        glowClasses[glow],
        accentBorder && 'border-l-2',
        hoverable && 'cursor-pointer',
        className
      )}
      variants={microVariants.glassHover}
      initial="rest"
      whileHover={hoverable ? 'hover' : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
