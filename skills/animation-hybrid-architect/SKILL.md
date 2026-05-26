---
name: animation-hybrid-architect
version: 1.0.0
description: Meta-skill for combining Motion v12 + GSAP v3.13+ with strict boundaries — Motion owns UI layer (modals, gestures, layout), GSAP owns content layer (scroll, text, SVG). Never animate same element with both.
category: animation
triggers:
  - hybrid animation
  - motion and gsap
  - animation architecture
  - animation boundary
  - animation orchestration
  - combine motion gsap
  - animation layer split
  - animation stack
activation_rules:
  - IF user requests BOTH Motion AND GSAP animations
  - IF animation-orchestrator routes to BOTH
  - IF project already uses Motion AND needs GSAP (or vice versa)
  - IF animation architecture decision needed
  - IF bundle budget requires splitting animation across libraries
stack: [motion/react, gsap, @gsap/react, ScrollTrigger, SplitText, Flip]
performance:
  ultra_runtime: 5KB
  mobile_initial: 30KB
  web_initial: 100KB
  ram_ceiling: 3.7GB
---

# Animation Hybrid Architect

Meta-skill for architecting animation systems that combine Motion v12 and GSAP v3.13+ with strict ownership boundaries. Motion owns the **UI layer** (modals, gestures, layout transitions, presence animations, micro-interactions). GSAP owns the **content layer** (scroll sequences, text reveals, SVG morphs, timeline orchestration, page transitions). **Never animate the same DOM element with both libraries.**

## Core Principles

1. **Strict layer ownership** — Motion = UI layer; GSAP = content layer. No exceptions.
2. **Never overlap on same DOM node** — If Motion animates a node, GSAP must not touch it. Period.
3. **Shared infrastructure** — `prefers-reduced-motion`, `will-change` management, and GPU compositing rules are shared concerns.
4. **Bundle budgets are sacred** — 5KB ultra-runtime, 30KB mobile initial, 100KB web initial.
5. **Animation Orchestrator is the gate** — All animation requests route through `animation-orchestrator` first, which delegates to this skill for hybrid decisions.
6. **3.7GB RAM ceiling** — Total memory for all animation code + runtime must stay under the Design OS limit.
7. **Cleanup is mandatory** — Motion cleanup via component unmount; GSAP cleanup via `gsap.context().revert()`.

## Architecture: Layer Ownership

### Motion Layer (UI)

| Domain | Examples | API |
|--------|----------|-----|
| Modal animations | Open/close, backdrop fade | `AnimatePresence` + variants |
| Gesture interactions | Drag, swipe, hover, tap | `whileDrag`, `whileHover`, `whileTap` |
| Layout transitions | Grid reorder, size change | `layout`, `layoutId` |
| Presence animations | Mount/unmount, route change | `AnimatePresence` + `exit` |
| Micro-interactions | Button feedback, tooltip reveal | `useAnimate` mini (2.3KB) |
| Simple scroll parallax | Header parallax, progress bar | `useScroll` + `useTransform` |

### GSAP Layer (Content)

| Domain | Examples | API |
|--------|----------|-----|
| Scroll sequences | Multi-section pin + scrub | `ScrollTrigger` |
| Text reveals | Character/word split animations | `SplitText` |
| SVG animations | Path draw, morph, filter | `DrawSVGPlugin`, `MorphSVGPlugin` |
| Timeline orchestration | Complex sequenced animations | `gsap.timeline()` |
| Layout state changes | Grid filter/sort transitions | `Flip` |
| Page transitions | Full-page crossfade/morph | `ScrollTrigger` + `timeline` |

### Boundary Rules

```
┌─────────────────────────────────────────────────────────┐
│                    DOM BOUNDARY                         │
│                                                         │
│  Motion-animated nodes ←→ GSAP-animated nodes           │
│  (NEVER overlap)                                        │
│                                                         │
│  Motion CAN read GSAP-animated node positions           │
│  GSAP CAN read Motion-animated node positions           │
│  Motion MUST NOT animate GSAP-animated nodes            │
│  GSAP MUST NOT animate Motion-animated nodes            │
│                                                         │
│  Shared: prefers-reduced-motion, will-change, GPU rules  │
└─────────────────────────────────────────────────────────┘
```

## 7-Step Workflow

### Step 1: Assess Animation Requirements

For each animation request, classify into layers:

```yaml
assessment:
  animations:
    - name: "Modal open/close"
      layer: ui  # → Motion
      complexity: simple
      api: useAnimate mini
      bundle: 2.3KB

    - name: "Scroll hero sequence"
      layer: content  # → GSAP
      complexity: complex
      api: ScrollTrigger + timeline
      bundle: ~20KB

    - name: "Card drag reorder"
      layer: ui  # → Motion
      complexity: medium
      api: LazyMotion + domMax
      bundle: 34KB

    - name: "Text reveal on scroll"
      layer: content  # → GSAP
      complexity: medium
      api: SplitText + ScrollTrigger
      bundle: ~15KB
```

### Step 2: Define Boundaries

Create explicit boundary documentation for the project:

```tsx
// boundaries.ts — Animation ownership map
export const ANIMATION_BOUNDARIES = {
  // Motion owns these selectors
  motion: {
    selectors: ['.modal', '.tooltip', '.drag-item', '.hero-badge', '.cta-button'],
    properties: ['transform', 'opacity'],  // GPU only
    apis: ['useAnimate', 'LazyMotion', 'AnimatePresence']
  },

  // GSAP owns these selectors
  gsap: {
    selectors: ['.scroll-section', '.animate-text', '.svg-path', '.pinned-hero'],
    properties: ['transform', 'opacity', 'clipPath'],  // GPU + clipPath
    apis: ['ScrollTrigger', 'SplitText', 'Flip', 'timeline']
  },

  // Shared concerns
  shared: {
    reducedMotion: 'prefers-reduced-motion',
    willChange: 'managed per-layer',
    gpuOnly: true,
    ramCeiling: '3.7GB'
  }
}
```

### Step 3: Shared Infrastructure

Build shared animation utilities:

```tsx
// lib/animation/shared.ts
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const getAnimationConfig = () => ({
  duration: prefersReducedMotion() ? 0 : 0.3,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  gpuOnly: true,
  willChange: false
})

export const manageWillChange = (el: HTMLElement, property: string, active: boolean) => {
  if (active) {
    el.style.willChange = property
  } else {
    el.style.removeProperty('will-change')
  }
}
```

### Step 4: Bundle Splitting

Implement lazy loading for animation libraries:

```tsx
// app/layout.tsx — NEVER import animation libraries synchronously
// Animation libraries load on demand via dynamic imports

// components/AnimationProvider.tsx
'use client'

import dynamic from 'next/dynamic'

const MotionProvider = dynamic(() => import('./MotionProvider'), { ssr: false })
const GSAPProvider = dynamic(() => import('./GSAPProvider'), { ssr: false })

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MotionProvider />
      <GSAPProvider />
      {children}
    </>
  )
}
```

### Step 5: Mobile Strategy

```tsx
// lib/animation/mobile.ts
export const getMobileAnimationTier = () => {
  const ram = (performance as any).memory?.usedJSHeapSize ?? 0
  const isLowEnd = ram > 0 && ram < 2_000_000_000  // < 2GB

  return {
    // Reduce Motion bundle on mobile
    motion: isLowEnd ? 'mini' : 'standard',  // 2.3KB vs 34KB
    // Disable ScrollTrigger pin on low-end
    scrollPin: !isLowEnd,
    // Use words instead of chars for SplitText
    splitType: isLowEnd ? 'words' : 'chars,words',
    // Shorter scrub values
    scrubValue: isLowEnd ? 0.3 : 1,
    // Skip complex timelines
    complexTimelines: !isLowEnd,
  }
}
```

### Step 6: Integration Pattern

Wire Motion and GSAP together without overlap:

```tsx
'use client'

import { useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function HybridPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // GSAP owns scroll content animations
  useGSAP(() => {
    gsap.from('.scroll-title', {
      y: 60,
      opacity: 0,
      scrollTrigger: {
        trigger: '.scroll-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }, { scope: scrollContainerRef })

  return (
    <div ref={scrollContainerRef}>
      {/* GSAP animates this content */}
      <section className="scroll-section">
        <h2 className="scroll-title">Scroll Content</h2>
      </section>

      {/* Motion animates this UI element — GSAP must not touch it */}
      <AnimatePresence>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Action
        </motion.button>
      </AnimatePresence>
    </div>
  )
}
```

### Step 7: Audit Protocol

Run the animation audit before every commit:

```bash
# Pre-commit hook runs:
python3 skills/agent-auditor/scripts/audit-animation.py

# Checks:
# 1. No Motion + GSAP overlap on same selectors
# 2. Missing useGSAP cleanup
# 3. Missing prefers-reduced-motion
# 4. Bundle size violations
# 5. Synchronous animation imports in page/layout
# 6. Missing 'use client' in animation components
```

## Stack Patterns

See `references/stack-patterns.md` for 6 proven combination patterns:

1. **Landing Page** — GSAP scroll hero + Motion UI interactions
2. **Dashboard** — Motion layout transitions + GSAP chart animations
3. **Portfolio** — GSAP scroll portfolio + Motion modal previews
4. **E-Commerce** — Motion cart gestures + GSAP product reveals
5. **Blog/Magazine** — GSAP text reveals + Motion share/like micro-interactions
6. **App Shell** — Motion navigation + GSAP page transitions

## Output Template

When architecting a hybrid animation system, output:

```
## Animation Hybrid Architecture

### Layer Map
| Element | Library | API | Bundle |
|---------|---------|-----|--------|
| ... | Motion/GSAP | ... | ...KB |

### Boundary Rules
- Motion selectors: [list]
- GSAP selectors: [list]
- Shared concerns: [list]

### Bundle Budget
- Motion: [X]KB
- GSAP: [Y]KB
- Total: [Z]KB (within 100KB web / 30KB mobile)

### Code
[Architecture + integration code]
```

## Anti-Patterns

- ❌ Both libraries animating same DOM node
- ❌ Motion `layout` + GSAP `Flip` on same elements
- ❌ Motion `useScroll` for scroll-pinned sections (use GSAP ScrollTrigger)
- ❌ GSAP for simple hover/tap micro-interactions (use Motion)
- ❌ Missing shared `prefers-reduced-motion` handling
- ❌ Synchronous animation library imports in page/layout
- ❌ Exceeding 30KB mobile / 100KB web bundle budget

## Integration Notes

- **Upstream**: `animation-orchestrator` routes to this skill for hybrid decisions
- **Downstream**: Delegates to `motion-animation-engineer` and `gsap-animation-engineer` for implementation
- **Audit**: `animation-auditor` validates all hybrid code before commit
- **MCP**: See `references/mcp-schema.md` for 5-tool animation MCP server

## References

- `references/stack-patterns.md` — 6 proven combination patterns
- `references/bundle-budgets.md` — Per-tier budget allocation
- `references/mobile-optimization.md` — Low-end device strategies
- `references/mcp-schema.md` — 5-tool MCP animation server schema
- `references/cleanup-protocols.md` — Memory leak prevention
