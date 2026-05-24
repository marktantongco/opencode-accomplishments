---
name: motion-animator
description: >
  Implement React UI animations using Motion (formerly Framer Motion) — gestures, scroll triggers, layout transitions, exit animations, spring physics, and SVG morphing.
  Use when the user mentions animation, motion, transitions, gestures, drag, hover effects, scroll reveals, page transitions, modal animations, or React component motion.
  Also trigger for "animate this", "add motion", "smooth transition", "spring animation", "parallax scroll", "stagger children", "AnimatePresence", or when the user wants to animate shadcn/ui, Next.js, or Tailwind components.
  Always use this skill for React animation tasks — do not write raw CSS transitions or manual requestAnimationFrame loops without checking Motion first.
allowed-tools: Read, Write, Bash, Edit, Grep, Glob
user-invocable: true
---

# Motion Animator

## context

This skill encodes production-grade Motion (Framer Motion) patterns for React UI animation. It covers the full capability matrix: gestures, scroll, layout, springs, SVG, exit animations, and orchestration. It enforces bundle-size discipline aligned to the Design OS performance budget (5KB runtime, 3.7GB RAM).

## instructions

### Step 1: Analyze the Animation Need

Determine which Motion primitive fits the task:

| Need | Primitive | Import Strategy | Bundle |
|---|---|---|---|
| Hover / tap feedback | `whileHover`, `whileTap` on `motion.div` | `motion` component | 34KB |
| Drag (sliders, sortable) | `drag`, `dragConstraints` | `motion` component | 34KB |
| Scroll-triggered reveal | `whileInView` | `motion` component | 34KB |
| Scroll-linked (progress bar) | `useScroll`, `useTransform` | `motion` component | 34KB |
| Layout transition (FLIP) | `layout` prop | `motion` component | 34KB |
| Exit animation (mount/unmount) | `AnimatePresence` + `exit` | `motion` component | 34KB |
| Simple imperative tween | `useAnimate` mini | `useAnimate` from "motion/react" | 2.3KB |
| Timeline sequence | `useAnimate` hybrid | `useAnimate` from "motion/react" | 17KB |
| 3D scene animation | `framer-motion-3d` | `motion` from "framer-motion-3d" | +R3F |

**Budget rule:** If the module's animation needs are minimal (one-off hover, simple fade), prefer `useAnimate` mini (2.3KB). If the component needs multiple primitives, use `LazyMotion` + `m` (4.6KB on-demand). Full `motion` component (34KB) is acceptable for complex animation-heavy pages only.

### Step 2: Choose the Import Pattern

```tsx
// Pattern A: Full motion (34KB) — complex pages with many primitives
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

// Pattern B: LazyMotion + m (4.6KB) — standard apps, on-demand loading
import { LazyMotion, m, AnimatePresence } from "motion/react";
const loadFeatures = () => import("./features").then(res => res.default);
// In JSX: <LazyMotion features={loadFeatures}><m.div>...</m.div></LazyMotion>

// Pattern C: useAnimate mini (2.3KB) — minimal animations
import { useAnimate } from "motion/react";
const [scope, animate] = useAnimate();
// animate(scope.current, { opacity: 1 }, { duration: 0.3 });

// Pattern D: useAnimate hybrid (17KB) — timeline sequencing
import { useAnimate } from "motion/react";
// animate([".a", ".b"], { opacity: [0, 1] }, { delay: stagger(0.1) });
```

### Step 3: Implement with Correct Framework Integration

**Next.js App Router:**
```tsx
// "use client" required for motion components
"use client";
import { motion } from "motion/react";

// For AnimatePresence with soft navigation, wrap in Client Component
// and handle router events manually if needed.
```

**Next.js Pages Router:**
```tsx
// Direct import, no wrapper needed
import { motion, AnimatePresence } from "motion/react";
```

**Tailwind CSS v4:**
```tsx
// Use Tailwind for static styling, Motion for animation
// NEVER combine Tailwind transition-* classes with motion props
<motion.div
  className="bg-blue-500 rounded-lg p-4"  // Tailwind handles this
  whileHover={{ scale: 1.05 }}             // Motion handles this
  transition={{ type: "spring", stiffness: 300 }}
>
```

**Cloudflare Workers:**
```tsx
// Fixed in v12.23.24 — direct import works
import { motion } from "motion/react";
```

### Step 4: Apply the Correct Primitive

**Gestures:**
```tsx
<motion.div
  drag
  dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
  dragElastic={0.2}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

**Scroll-triggered:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>
```

**Scroll-linked (progress bar):**
```tsx
const { scrollYProgress } = useScroll();
const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

<motion.div style={{ scaleX, transformOrigin: "left" }} className="h-2 bg-blue-500" />
```

**Layout animation (FLIP):**
```tsx
// Just add the layout prop — Motion handles the rest
<motion.div layout layoutId="card" className="..." />
```

**Exit animation:**
```tsx
<AnimatePresence mode="wait">
  {isOpen && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    />
  )}
</AnimatePresence>
```

**Orchestration (stagger):**
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => <motion.li key={i} variants={item} />)}
</motion.ul>
```

**SVG path animation:**
```tsx
<motion.path
  d="M0 0 L100 100"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 2, ease: "easeInOut" }}
/>
```

### Step 5: Enforce Accessibility

```tsx
import { useReducedMotion } from "motion/react";

const shouldReduceMotion = useReducedMotion();

<motion.div
  animate={shouldReduceMotion ? {} : { scale: 1.1 }}
  transition={shouldReduceMotion ? { duration: 0 } : { type: "spring" }}
/>
```

### Step 6: Output the Complete Code

Always provide:
1. The full component file with imports
2. A note on which import pattern was chosen and why
3. Bundle size impact
4. Any framework-specific wrappers needed

## constraints

- NEVER use raw CSS `transition` or `animation` on Motion-animated elements — it conflicts with Motion's transform handling.
- NEVER forget `AnimatePresence` for exit animations — without it, unmounting elements disappear instantly.
- NEVER use `motion` components in Server Components (Next.js App Router) without `"use client"`.
- NEVER hardcode `duration` when `type: "spring"` is more natural — springs feel organic, durations feel mechanical.
- NEVER ignore `prefers-reduced-motion` — always check via `useReducedMotion()`.
- NEVER use the full `motion` import (34KB) when `useAnimate` mini (2.3KB) or `LazyMotion` (4.6KB) suffices.
- NEVER mix Tailwind `transition-*` classes with Motion props — choose one animation system per element.

## examples

### Example 1: Animated Card List with Stagger

**Input:** "I need a list of cards that fade in with a stagger effect when the page loads. Each card should scale up slightly on hover."

**Output:**
```tsx
"use client";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function CardList({ items }: { items: { id: string; title: string }[] }) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 gap-4"
    >
      {items.map((item) => (
        <motion.li
          key={item.id}
          variants={item}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-semibold">{item.title}</h3>
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

**Bundle note:** Uses full `motion` import (34KB) because multiple primitives (stagger + hover) are needed. For a single hover effect, `useAnimate` mini would be preferred.

### Example 2: Scroll-Triggered Hero Section

**Input:** "Build a hero section where text fades in and slides up as the user scrolls into view."

**Output:**
```tsx
"use client";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-6xl font-bold tracking-tight">Motion Design</h1>
        <p className="mt-4 text-xl text-gray-600">Production-grade animation for React.</p>
      </motion.div>
    </section>
  );
}
```

**Bundle note:** Single `whileInView` primitive — could use `useAnimate` mini if this is the only animation on the page, but `motion.div` is simpler for declarative use.

## references

- `references/bundle-guide.md` — Import strategy decision tree and bundle size reference
- `references/framework-patterns.md` — Next.js, Vite, Tailwind, Cloudflare integration patterns
- `references/api-quickref.md` — Motion API cheat sheet (props, hooks, variants)
