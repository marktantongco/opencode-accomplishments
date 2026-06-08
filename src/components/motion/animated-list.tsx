'use client';

import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '@/lib/motion';

interface AnimatedListProps {
  children: React.ReactNode[];
  className?: string;
  itemVariants?: Variants;
  containerVariants?: Variants;
}

export function AnimatedList({
  children,
  className,
  itemVariants,
  containerVariants,
}: AnimatedListProps) {
  const shouldReduce = useReducedMotion();

  const defaultContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.08,
        delayChildren: shouldReduce ? 0 : 0.1,
      },
    },
  };

  const defaultItemVariants: Variants = {
    hidden: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants || defaultContainerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={itemVariants || defaultItemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
