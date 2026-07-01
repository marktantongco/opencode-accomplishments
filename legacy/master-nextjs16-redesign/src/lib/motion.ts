/**
 * Motion Vocabulary — Three-Tier Animation System
 *
 * MACRO (600-1200ms): Page transitions, zone entrances, route changes
 * MESO (300-600ms): Card entrances, list reordering, section reveals
 * MICRO (100-300ms): Hover states, button feedback, tooltips
 */

import { type Variants, type Transition } from 'framer-motion';

// ─── Shared Transitions ───────────────────────────────────────────

export const transitions = {
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  },
  springGentle: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 25,
  },
  smooth: {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1],
  },
  expoOut: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  },
  expoIn: {
    duration: 0.4,
    ease: [0.7, 0, 1, 0.3],
  },
  stagger: {
    staggerChildren: 0.08,
    delayChildren: 0.1,
  },
} satisfies Record<string, Transition>;

// ─── MACRO — Page & Zone Level ─────────────────────────────────────

export const macroVariants: Record<string, Variants> = {
  pageEnter: {
    hidden: { opacity: 0, scale: 0.98, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: transitions.expoOut,
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      filter: 'blur(4px)',
      transition: transitions.expoIn,
    },
  },

  zoneReveal: {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        ...transitions.expoOut,
      },
    }),
  },

  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: transitions.stagger,
    },
  },

  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.smooth,
    },
  },
};

// ─── MESO — Section & Card Level ───────────────────────────────────

export const mesoVariants: Record<string, Variants> = {
  cardEnter: {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: transitions.springGentle,
    },
    hover: {
      y: -4,
      scale: 1.02,
      transition: transitions.spring,
    },
  },

  listItem: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.smooth,
    },
  },

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.smooth,
    },
  },

  expandCollapse: {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: 'auto', opacity: 1, transition: transitions.smooth },
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: transitions.spring,
    },
  },
};

// ─── MICRO — Element Level ─────────────────────────────────────────

export const microVariants: Record<string, Variants> = {
  buttonHover: {
    rest: { scale: 1 },
    hover: { scale: 1.04, transition: transitions.spring },
    tap: { scale: 0.97 },
  },

  glassHover: {
    rest: {
      backdropFilter: 'blur(8px)',
      borderColor: 'rgba(255, 255, 255, 0.06)',
      boxShadow: '0 0 0 rgba(0,0,0,0)',
    },
    hover: {
      backdropFilter: 'blur(16px)',
      borderColor: 'rgba(255, 255, 255, 0.12)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      transition: transitions.smooth,
    },
  },

  tooltip: {
    hidden: { opacity: 0, y: 4, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.15, ease: 'easeOut' },
    },
  },

  modalOverlay: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  },

  modalContent: {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { ...transitions.spring, delay: 0.05 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.15 },
    },
  },

  shimmer: {
    animate: {
      backgroundPosition: ['-200% 0', '200% 0'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

// ─── Glass Panel Hover Animations (for Framer Motion) ──────────────

export const glassPanel = {
  whileHover: {
    backdropFilter: 'blur(16px)',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

// ─── Reduced Motion Hook ───────────────────────────────────────────

/**
 * useReducedMotion — respects prefers-reduced-motion
 * Import and use: const shouldReduce = useReducedMotion();
 * Then conditionally disable animations based on the flag.
 */
export { useReducedMotion } from 'framer-motion';
