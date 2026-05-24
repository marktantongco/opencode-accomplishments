# Bundle Budgets

## Per-Tier Budget Allocation

### Ultra-Runtime (5KB)

For performance-critical pages and mobile-first experiences.

| Library | Allocation | What's Included |
|---------|-----------|-----------------|
| Motion | 2.3KB | `useAnimate` mini only |
| GSAP | 2.2KB | `@gsap/react` core only |
| Shared | 0.5KB | Reduced motion, will-change utils |

**No**: LazyMotion, ScrollTrigger, SplitText, gestures, layout animations

**Use when**: Mobile landing page, low-end device fallback, above-the-fold content

### Mobile Initial (30KB)

For standard mobile page loads.

| Library | Allocation | What's Included |
|---------|-----------|-----------------|
| Motion | 9KB | `LazyMotion` + `domAnimation` + `m` |
| GSAP | 18KB | Core + ScrollTrigger |
| Shared | 3KB | Utils, reduced motion, observers |

**No**: domMax (gestures), SplitText, Flip, MorphSVG

**Use when**: Standard mobile pages, scroll reveals, variant animations

### Web Initial (100KB)

For desktop page loads with full animation capability.

| Library | Allocation | What's Included |
|---------|-----------|-----------------|
| Motion | 34KB | `LazyMotion` + `domMax` (full) |
| GSAP | 42KB | Core + ScrollTrigger + SplitText + Flip |
| Shared | 5KB | All utils, observers, MCP tools |
| Buffer | 19KB | Reserve for future additions |

**Use when**: Desktop landing pages, full portfolios, interactive showcases

## Lazy Loading Strategy

### Tier-Based Loading

```tsx
// lib/animation/tiers.ts
export type AnimationTier = 'ultra' | 'mobile' | 'web'

export function detectTier(): AnimationTier {
  if (typeof window === 'undefined') return 'web'

  const ram = (performance as any).memory?.usedJSHeapSize ?? 0
  const isLowEnd = ram > 0 && ram < 2_000_000_000
  const isMobile = window.innerWidth < 768

  if (isLowEnd || isMobile) return 'ultra'
  if (isMobile) return 'mobile'
  return 'web'
}
```

### Dynamic Import Per Tier

```tsx
// components/AnimationLoader.tsx
'use client'

import { useEffect, useState } from 'react'
import { detectTier, type AnimationTier } from '@/lib/animation/tiers'

export function AnimationLoader({ children }) {
  const [tier, setTier] = useState<AnimationTier>('web')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const detected = detectTier()
    setTier(detected)

    // Load appropriate animation bundle
    if (detected === 'ultra') {
      import('@/lib/animation/ultra-bundle').then(() => setLoaded(true))
    } else if (detected === 'mobile') {
      import('@/lib/animation/mobile-bundle').then(() => setLoaded(true))
    } else {
      import('@/lib/animation/web-bundle').then(() => setLoaded(true))
    }
  }, [])

  if (!loaded) return <div className="animate-pulse" />

  return <>{children}</>
}
```

## Budget Tracking

### Build-Time Check

```js
// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          motion: {
            test: /[\\/]node_modules[\\/](motion|framer-motion)[\\/]/,
            name: 'motion',
            enforce: true
          },
          gsap: {
            test: /[\\/]node_modules[\\/](gsap)[\\/]/,
            name: 'gsap',
            enforce: true
          }
        }
      }
    }
    return config
  }
}
```

### Runtime Check

```tsx
// Monitor bundle sizes in development
if (process.env.NODE_ENV === 'development') {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name.includes('motion') || entry.name.includes('gsap')) {
        const sizeKB = entry.transferSize / 1024
        console.log(`[Animation Bundle] ${entry.name}: ${sizeKB.toFixed(1)}KB`)
        if (sizeKB > 100) {
          console.warn(`⚠️ Animation bundle ${entry.name} exceeds 100KB!`)
        }
      }
    }
  })
  observer.observe({ type: 'resource', buffered: true })
}
```

## Budget Violation Protocol

1. **Exceeds 5KB ultra**: Downgrade Motion to `useAnimate` mini, remove GSAP plugins
2. **Exceeds 30KB mobile**: Remove `domMax`, disable scroll pin, use CSS transitions
3. **Exceeds 100KB web**: Code-split animation components, lazy-load below fold
