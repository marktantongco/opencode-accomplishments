# Motion Bundle Guide

## Import Strategy Decision Tree

```
Is this the only animation on the page?
├── Yes → Is it a simple tween (opacity, transform)?
│   ├── Yes → useAnimate MINI (2.3KB)
│   └── No (timeline, sequencing) → useAnimate HYBRID (17KB)
└── No → Are there multiple primitives (gesture + scroll + layout)?
    ├── Yes → LazyMotion + m (4.6KB on-demand)
    └── No → Full motion component (34KB)
```

## Bundle Size Reference

| Strategy | Size | Best For | When to Use |
|---|---|---|---|
| `motion` component | 34KB | Complex apps | Multiple primitives, gestures, scroll, layout |
| `LazyMotion` + `m` | 4.6KB | Standard apps | On-demand loading, deferred features |
| `useAnimate` mini | 2.3KB | Minimal | Single tween, no sequencing |
| `useAnimate` hybrid | 17KB | Sequencing | Timeline, stagger, independent transforms |

## Performance Budget Compliance

Design OS constraint: **5KB runtime bundle per module**.

| Scenario | Recommended Import | Actual Size | Compliant? |
|---|---|---|---|
| Button hover | `useAnimate` mini | 2.3KB | ✅ Yes |
| Card list stagger | `LazyMotion` + `m` | 4.6KB | ✅ Yes |
| Full page transitions | `motion` component | 34KB | ❌ No — split into lazy-loaded chunk |
| Scroll progress bar | `useScroll` (full) | 34KB | ❌ No — use native ScrollTimeline API instead |

## Code Splitting Pattern

```tsx
// For pages with heavy animation, lazy-load the animation component
const AnimatedHero = dynamic(() => import("./AnimatedHero"), {
  loading: () => <div className="h-screen bg-gray-50" />
});
```
