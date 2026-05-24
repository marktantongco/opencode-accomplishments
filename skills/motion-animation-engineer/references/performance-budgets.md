# Motion Performance Budgets

## Bundle Tiers

| Tier | Import | Size (gzipped) | Use When |
|------|--------|----------------|----------|
| Mini | `useAnimate` from `motion/react` | 2.3KB | Simple animate on mount/hover/tap |
| Standard | `LazyMotion` + `domAnimation` + `m` | 9KB | Variants, stagger, basic transitions |
| Full | `LazyMotion` + `domMax` + `m` | 34KB | Gestures, layout, drag, `AnimatePresence` |

## LazyMotion Strategy

### Rule: Always use LazyMotion in production

```tsx
// ❌ BAD — Loads full 34KB bundle
import { motion } from "motion/react"

// ✅ GOOD — Load only what you need
import { LazyMotion, domAnimation, m } from "motion/react"

function Component() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ opacity: 1 }} />
    </LazyMotion>
  )
}
```

### Feature Tiers

| Import | Size | Features |
|--------|------|----------|
| `domAnimation` | 9KB total | `animate`, `variants`, `transition`, `initial`, `exit` |
| `domMax` | 34KB total | Everything + `drag`, `layout`, `layoutId`, `whileDrag`, gestures |

## 5KB Ultra-Runtime Strategy

For mobile-first or performance-critical pages, target 5KB total animation runtime:

1. **Use `useAnimate` mini only** (2.3KB) — No `LazyMotion`, no `m` component
2. **Animate via ref** — Imperative control, no declarative overhead
3. **CSS transitions for hover/focus** — Tailwind `transition-*` classes instead of Motion
4. **Reserve remaining 2.7KB** — For `@gsap/react` core (2.2KB) if scroll animations needed

```tsx
// 5KB ultra-runtime example
import { useAnimate } from "motion/react"

function UltraLightComponent() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.3 })
  }, [])

  return <div ref={scope} style={{ opacity: 0, transform: 'translateY(20px)' }}>Content</div>
}
```

## Code Splitting

### Dynamic Import Pattern

```tsx
// app/layout.tsx — NEVER import Motion synchronously
// Load animation components on demand

const AnimatedHero = dynamic(() => import('@/components/AnimatedHero'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
})
```

### Route-Based Splitting

```tsx
// Each route loads only the animation tier it needs
// / (landing) → Full 34KB (gestures, layout)
// /blog → Standard 9KB (variants, stagger)
// /api-docs → Mini 2.3KB (simple fades)
```

## Memory Budget

| Device Class | RAM | Animation Budget | Strategy |
|--------------|-----|-----------------|----------|
| Low-end mobile | < 2GB | 50MB max | useAnimate mini only, CSS transitions |
| Standard mobile | 2-4GB | 100MB max | LazyMotion domAnimation, light scroll |
| Desktop | 4GB+ | 200MB max | Full LazyMotion domMax |

## GPU Compositing Rules

Only animate these CSS properties to stay on the GPU compositor thread:

| ✅ GPU Composited | ❌ Main Thread |
|-------------------|----------------|
| `transform` | `width` |
| `opacity` | `height` |
| `filter` | `top` / `left` |
| `clip-path` | `margin` / `padding` |
| `backdrop-filter` | `border-width` |

**Exception**: `Flip` plugin handles layout changes by snapshotting → mutating → animating transform.

## Monitoring

```tsx
// Chrome-only — monitor JS heap during animations
if ('memory' in performance) {
  const { usedJSHeapSize, jsHeapSizeLimit } = (performance as any).memory
  const usedMB = usedJSHeapSize / 1048576
  const limitMB = jsHeapSizeLimit / 1048576

  if (usedMB > limitMB * 0.8) {
    console.warn(`Animation memory at ${usedMB}MB / ${limitMB}MB — approaching ceiling`)
  }
}
```
