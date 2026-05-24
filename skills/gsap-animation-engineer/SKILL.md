---
name: gsap-animation-engineer
version: 1.0.0
description: GSAP v3.13+ cinematic scroll/text/SVG animation engineer — ScrollTrigger pin, SplitText, SVG morph, Flip, physics-based motion with React useGSAP hook. All plugins free since April 2025.
category: animation
triggers:
  - gsap animation
  - scroll animation
  - scrolltrigger
  - split text animation
  - svg morph
  - timeline animation
  - gsap react
  - useGSAP
  - flip animation
  - scroll pinning
  - text reveal animation
activation_rules:
  - IF user requests scroll-heavy animation with multiple sections
  - IF animation-orchestrator routes to GSAP
  - IF user mentions ScrollTrigger, SplitText, SVG morph, Flip
  - IF animation involves timeline sequencing
  - IF animation requires pinning or scrubbing
  - IF text splitting/reveal animation needed
stack: [gsap, @gsap/react, ScrollTrigger, SplitText, Flip, MotionPath, Draggable]
performance:
  ultra_runtime: 5KB
  mobile_initial: 30KB
  web_initial: 100KB
  ram_ceiling: 3.7GB
---

# GSAP Animation Engineer

Cinematic animation specialist using GSAP v3.13+ for scroll-triggered, text-based, SVG, and timeline-heavy animations. Owns the **content layer** — scroll sequences, text reveals, SVG morphs, page transitions, and complex orchestration. All GSAP plugins are **free since April 2025** — no Club GreenSock membership required.

## Core Principles

1. **`useGSAP()` hook mandatory in React** — Import from `@gsap/react`; provides automatic cleanup via `gsap.context()`
2. **`registerPlugin()` always first** — Every GSAP plugin must be registered before use
3. **ScrollTrigger owns scroll** — Motion's `useScroll` is for light parallax only; ScrollTrigger handles pinning, scrubbing, multi-section orchestration
4. **Never overlap with Motion** — If Motion is animating a DOM node, GSAP must NOT touch it. Boundary in `animation-hybrid-architect`
5. **Cleanup is mandatory** — `useGSAP` auto-cleans; vanilla GSAP must use `gsap.context()` + `revert()`
6. **Reduced motion always** — Check `prefers-reduced-motion` before any animation, provide instant fallbacks
7. **All plugins free** — Since April 2025, SplitText, DrawSVG, MorphSVG, Flip, MotionPath, etc. are all free

## 7-Step Workflow

### Step 1: Register Plugins

Always register plugins at module level:

```tsx
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, MotionPathPlugin)
```

### Step 2: Timeline Construction

Build timelines for sequenced animations:

```tsx
function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.8 }
    })

    tl.from('.hero-title', { y: 80, opacity: 0 })
      .from('.hero-subtitle', { y: 40, opacity: 0 }, '-=0.4')
      .from('.hero-cta', { scale: 0.8, opacity: 0 }, '-=0.3')
      .from('.hero-badge', { rotation: -10, opacity: 0 }, '-=0.2')

  }, { scope: containerRef })

  return <div ref={containerRef}>...</div>
}
```

### Step 3: SplitText Effects

Text reveal animations using SplitText:

```tsx
useGSAP(() => {
  const split = SplitText.create('.animate-text', {
    type: 'chars,words',
    charsClass: 'char'
  })

  gsap.from(split.chars, {
    y: 100,
    opacity: 0,
    rotationX: -90,
    stagger: 0.02,
    ease: 'back.out(1.7)',
    duration: 0.6
  })

  // Cleanup handled by useGSAP context
}, { scope: containerRef })
```

### Step 4: ScrollTrigger Patterns

Scroll-triggered animations with pinning and scrubbing:

```tsx
useGSAP(() => {
  // Parallax with scrub
  gsap.to('.parallax-bg', {
    y: -200,
    ease: 'none',
    scrollTrigger: {
      trigger: '.parallax-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  })

  // Pinned section with timeline
  const pinnedTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.pinned-section',
      start: 'top top',
      end: '+=3000',
      pin: true,
      scrub: 1,
      anticipatePin: 1
    }
  })

  pinnedTl.to('.step-1', { opacity: 0, y: -50 })
    .from('.step-2', { opacity: 0, y: 50 })
    .to('.step-2', { opacity: 0, y: -50 })
    .from('.step-3', { opacity: 0, y: 50 })

}, { scope: containerRef })
```

### Step 5: Flip Animations

Layout state transitions using Flip:

```tsx
useGSAP(() => {
  const state = Flip.getState('.grid-item')

  // DOM mutation (filter, sort, layout change)
  rearrangeGrid()

  Flip.from(state, {
    duration: 0.5,
    ease: 'power2.inOut',
    absolute: true,
    stagger: 0.02
  })
}, { scope: containerRef })
```

### Step 6: React Integration

Proper React patterns with `useGSAP`:

```tsx
import { useGSAP } from '@gsap/react'

function AnimatedComponent({ items, activeId }) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Animations auto-clean on unmount
  useGSAP(() => {
    gsap.to('.card', {
      opacity: 0.5,
      scale: 0.95,
      duration: 0.3
    })

    gsap.to(`.card[data-id="${activeId}"]`, {
      opacity: 1,
      scale: 1,
      duration: 0.3
    })
  }, { scope: containerRef, dependencies: [activeId] })

  // Vanilla JS cleanup pattern (non-React)
  // const ctx = gsap.context(() => { ... })
  // return () => ctx.revert()

  return <div ref={containerRef}>...</div>
}
```

### Step 7: Mobile Optimization

- **Reduce ScrollTrigger pins on mobile** — Pinned sections cause jank on low-end devices
- **Shorter scrub values** — Use `scrub: 0.5` instead of `scrub: 1` on mobile
- **Fewer SplitText chars** — Use `type: 'words'` instead of `type: 'chars'` on mobile
- **Disable heavy timelines** — Feature-detect and skip complex scroll animations on low memory
- **3.7GB RAM ceiling** — Monitor `performance.memory`; abort if approaching ceiling
- **`prefers-reduced-motion`** — Always check and provide instant-state fallbacks:

```tsx
const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

useGSAP(() => {
  if (prefersReducedMotion) return

  // Full animation code here
}, { scope: containerRef })
```

## Output Template

When implementing a GSAP animation, output:

```
## GSAP Animation Implementation

### Plugins Used: [ScrollTrigger, SplitText, Flip, etc.]
### Timeline: [Y/N — describe sequence]
### Scroll-Linked: [Y/N — pin, scrub, parallax]

### Code
[Full component code]

### Performance Notes
- GSAP core + plugins: [X]KB gzipped
- Pinned sections: [count]
- Reduced motion handled: Y/N
- Cleanup (useGSAP context): Y/N
```

## Anti-Patterns

- ❌ GSAP plugin use without `registerPlugin()`
- ❌ `useEffect` for GSAP in React — Use `useGSAP` from `@gsap/react`
- ❌ Missing `gsap.context()` cleanup in vanilla JS
- ❌ Overlapping GSAP + Motion on same DOM node
- ❌ Synchronous GSAP imports in page/layout — use dynamic import
- ❌ Missing `prefers-reduced-motion` check
- ❌ Animating layout properties (`width`, `height`) — Use `Flip` for layout changes
- ❌ ScrollTrigger without `anticipatePin` on complex pages

## Integration Notes

- **With Motion**: GSAP owns content layer (scroll, text, SVG). Motion owns UI layer (modals, gestures, layout). See `animation-hybrid-architect` for boundary rules.
- **With React**: Always use `useGSAP` hook. It provides automatic cleanup via `gsap.context()`.
- **With Tailwind**: Use GSAP for JS animations; Tailwind's `transition-*` for CSS transitions. Never both on same property.

## References

- `references/plugin-catalog.md` — All free GSAP plugins matrix
- `references/scroll-patterns.md` — ScrollTrigger patterns and pinning strategies
- `references/react-integration.md` — useGSAP hook patterns
- `references/split-text-guide.md` — SplitText reveal effects
- `references/cleanup-protocols.md` — Memory leak prevention
