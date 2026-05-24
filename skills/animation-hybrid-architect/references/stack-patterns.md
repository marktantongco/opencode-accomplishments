# Stack Patterns: Motion + GSAP Combinations

## Pattern 1: Landing Page

**GSAP owns scroll hero; Motion owns UI interactions.**

```
┌─────────────────────────────────────────┐
│  GSAP Layer (Content)                   │
│  ├── Scroll hero sequence (pin + scrub) │
│  ├── Feature reveal on scroll           │
│  └── Testimonial text reveals           │
│                                         │
│  Motion Layer (UI)                      │
│  ├── Nav menu open/close                │
│  ├── CTA button hover/tap               │
│  ├── Modal animations                   │
│  └── Footer micro-interactions          │
└─────────────────────────────────────────┘
```

```tsx
'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function LandingPage() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // GSAP: Scroll hero sequence
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: 1
      }
    })

    tl.to('.hero-title', { y: -100, opacity: 0 })
      .from('.hero-features', { y: 100, opacity: 0 })
  }, { scope: scrollRef })

  return (
    <div ref={scrollRef}>
      {/* GSAP animated */}
      <section className="hero">
        <h1 className="hero-title">Landing Hero</h1>
        <div className="hero-features">Features</div>
      </section>

      {/* Motion animated */}
      <AnimatePresence>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </AnimatePresence>
    </div>
  )
}
```

**Bundle**: GSAP ~32KB + Motion 2.3KB (mini) = ~34KB

---

## Pattern 2: Dashboard

**Motion owns layout transitions; GSAP owns chart animations.**

```
┌─────────────────────────────────────────┐
│  GSAP Layer (Content)                   │
│  ├── Chart draw animations              │
│  ├── Number counter animations          │
│  └── Data table row reveals             │
│                                         │
│  Motion Layer (UI)                      │
│  ├── Sidebar expand/collapse (layout)   │
│  ├── Tab switch transitions             │
│  ├── Toast notifications                │
│  └── Dropdown menus                     │
└─────────────────────────────────────────┘
```

**Bundle**: GSAP ~24KB + Motion 9KB (domAnimation) = ~33KB

---

## Pattern 3: Portfolio

**GSAP owns scroll portfolio; Motion owns modal previews.**

```
┌─────────────────────────────────────────┐
│  GSAP Layer (Content)                   │
│  ├── Horizontal scroll gallery          │
│  ├── Image parallax sections            │
│  └── Project text reveals               │
│                                         │
│  Motion Layer (UI)                      │
│  ├── Project detail modal               │
│  ├── Lightbox open/close                │
│  └── Contact form transitions           │
└─────────────────────────────────────────┘
```

**Bundle**: GSAP ~32KB + Motion 34KB (domMax for modal) = ~66KB

---

## Pattern 4: E-Commerce

**Motion owns cart gestures; GSAP owns product reveals.**

```
┌─────────────────────────────────────────┐
│  GSAP Layer (Content)                   │
│  ├── Product grid stagger reveal        │
│  ├── Price counter animation            │
│  └── Sale banner scroll reveal          │
│                                         │
│  Motion Layer (UI)                      │
│  ├── Add-to-cart drag gesture           │
│  ├── Cart drawer slide (layout)         │
│  ├── Size selector micro-interaction    │
│  └── Wishlist heart animation           │
└─────────────────────────────────────────┘
```

**Bundle**: GSAP ~24KB + Motion 34KB (domMax for gestures) = ~58KB

---

## Pattern 5: Blog/Magazine

**GSAP owns text reveals; Motion owns micro-interactions.**

```
┌─────────────────────────────────────────┐
│  GSAP Layer (Content)                   │
│  ├── Article SplitText reveals          │
│  ├── Pull-quote scroll animation        │
│  └── Image parallax                     │
│                                         │
│  Motion Layer (UI)                      │
│  ├── Share button hover effect          │
│  ├── Like/bookmark micro-interaction    │
│  ├── Reading progress bar               │
│  └── Comment thread expand              │
└─────────────────────────────────────────┘
```

**Bundle**: GSAP ~36KB (with SplitText) + Motion 2.3KB (mini) = ~38KB

---

## Pattern 6: App Shell

**Motion owns navigation; GSAP owns page transitions.**

```
┌─────────────────────────────────────────┐
│  GSAP Layer (Content)                   │
│  ├── Page crossfade/morph transition    │
│  ├── Section content scroll reveal      │
│  └── Loading skeleton animation         │
│                                         │
│  Motion Layer (UI)                      │
│  ├── Bottom nav slide indicator         │
│  ├── Drawer swipe gesture               │
│  ├── FAB expand/collapse (layout)       │
│  └── Snack bar slide-up                 │
└─────────────────────────────────────────┘
```

**Bundle**: GSAP ~24KB + Motion 34KB (domMax) = ~58KB

---

## Selection Guide

| Project Type | Pattern | Motion Tier | GSAP Plugins | Total Bundle |
|-------------|---------|-------------|-------------|-------------|
| Landing Page | 1 | Mini (2.3KB) | ScrollTrigger | ~34KB |
| Dashboard | 2 | Standard (9KB) | Core | ~33KB |
| Portfolio | 3 | Full (34KB) | ScrollTrigger | ~66KB |
| E-Commerce | 4 | Full (34KB) | Core | ~58KB |
| Blog | 5 | Mini (2.3KB) | ScrollTrigger + SplitText | ~38KB |
| App Shell | 6 | Full (34KB) | Core | ~58KB |
