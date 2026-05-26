# Motion API Quick Reference

## Core Components

| Component | Props | Use |
|---|---|---|
| `motion.div` | `initial`, `animate`, `exit`, `transition`, `whileHover`, `whileTap`, `whileInView`, `drag`, `layout` | Any animated element |
| `AnimatePresence` | `mode` (`"wait"`, `"popLayout"`, `"sync"`) | Mount/unmount transitions |
| `LazyMotion` | `features` | On-demand feature loading |
| `m.div` | Same as `motion.div` | LazyMotion child (smaller bundle) |

## Hooks

| Hook | Returns | Use |
|---|---|---|
| `useAnimate` | `[scope, animate, controls]` | Imperative animation (mini/hybrid) |
| `useScroll` | `{ scrollX, scrollY, scrollXProgress, scrollYProgress }` | Scroll-linked animations |
| `useTransform` | `MotionValue` | Map one value to another |
| `useSpring` | `MotionValue` | Physics-based interpolation |
| `useMotionValue` | `MotionValue` | Raw reactive value |
| `useReducedMotion` | `boolean` | Accessibility check |

## Transition Types

| Type | Syntax | Feel |
|---|---|---|
| Tween | `{ duration: 0.3, ease: "easeOut" }` | Linear, predictable |
| Spring | `{ type: "spring", stiffness: 300, damping: 24 }` | Natural, organic |
| Inertia | `{ type: "inertia", velocity: 200 }` | Momentum, deceleration |

## Common Easing

| Name | Curve | Use |
|---|---|---|
| `"easeOut"` | Fast start, slow end | Enter animations |
| `"easeIn"` | Slow start, fast end | Exit animations |
| `"easeInOut"` | Slow start/end, fast middle | General transitions |
| `"circOut"` | Very fast start, very slow end | Dramatic entrances |
| `"backOut"` | Overshoots slightly | Playful bounces |
| Custom | `[0.25, 0.1, 0.25, 1]` | Brand-specific curves |
