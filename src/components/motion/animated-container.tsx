'use client';

import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '@/lib/motion';

interface AnimatedContainerProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function AnimatedContainer({
  children,
  variants,
  className,
  delay = 0,
}: AnimatedContainerProps) {
  const shouldReduce = useReducedMotion();

  const defaultVariants: Variants = {
    hidden: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
