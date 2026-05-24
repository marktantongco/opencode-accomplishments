# Motion Bundle Guide

## Tree-Shaking

Motion v12 is fully tree-shakeable. Only the APIs you import are included in your bundle.

### Import Impact

| Import | Adds | Total Size |
|--------|------|------------|
| `useAnimate` | 2.3KB | 2.3KB |
| `motion` component | 8KB | 8KB |
| `LazyMotion` + `domAnimation` | 9KB | 9KB |
| `LazyMotion` + `domMax` | 34KB | 34KB |
| `AnimatePresence` | 3KB | +3KB |
| `useScroll` + `useTransform` | 4KB | +4KB |
| `useMotionValue` | 2KB | +2KB |
| `layout` prop | 6KB | +6KB (requires domMax) |
| `layoutId` prop | 6KB | +6KB (requires domMax) |

## Code Splitting Strategies

### Route-Based Splitting

```tsx
// app/layout.tsx — No animation imports
// app/page.tsx — Dynamic import for landing page animations

import dynamic from 'next/dynamic'

const AnimatedHero = dynamic(() => import('@/components/AnimatedHero'), {
  ssr: false,
  loading: () => <HeroSkeleton />
})
```

### Component-Based Splitting

```tsx
// Only load Motion when component mounts
const MotionCard = dynamic(
  () => import('@/components/MotionCard').then(mod => mod.MotionCard),
  {
    ssr: false,
    loading: () => <div className="h-48 animate-pulse bg-muted" />
  }
)
```

### Conditional Loading

```tsx
'use client'

import { useState, useEffect } from 'react'

export function useMotionBundle() {
  const [bundle, setBundle] = useState<{
    motion: typeof import('motion/react')['motion'] | null
    LazyMotion: typeof import('motion/react')['LazyMotion'] | null
    domAnimation: typeof import('motion/react')['domAnimation'] | null
  }>({
    motion: null,
    LazyMotion: null,
    domAnimation: null
  })

  useEffect(() => {
    // Only load on capable devices
    const isLowEnd = navigator.hardwareConcurrency < 4
    if (isLowEnd) return

    import('motion/react').then(mod => {
      setBundle({
        motion: mod.motion,
        LazyMotion: mod.LazyMotion,
        domAnimation: mod.domAnimation
      })
    })
  }, [])

  return bundle
}
```

## Bundle Analysis

### Using Next.js Bundle Analyzer

```bash
npm install @next/bundle-analyzer
```

```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})
```

```bash
ANALYZE=true npm run build
```

### Checking Motion Bundle Size

```bash
# Check actual gzipped size
npx size-limit --why

# Expected sizes:
# useAnimate only: ~2.3KB
# LazyMotion + domAnimation: ~9KB
# LazyMotion + domMax: ~34KB
```

## Optimization Checklist

- [ ] Using `LazyMotion` wrapper instead of bare `motion` component
- [ ] Using `m` component inside `LazyMotion` instead of `motion`
- [ ] Dynamic importing animation components with `ssr: false`
- [ ] No synchronous Motion imports in page/layout files
- [ ] `domAnimation` tier for variant-only animations (not `domMax`)
- [ ] `useAnimate` mini for simple animations (not `LazyMotion`)
- [ ] Tree-shaking verified via bundle analyzer
- [ ] Total animation JS under 30KB (mobile) / 100KB (web)
