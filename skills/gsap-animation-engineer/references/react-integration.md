# GSAP React Integration

## useGSAP Hook

The `@gsap/react` package provides `useGSAP()` — a drop-in replacement for `useEffect` and `useLayoutEffect` that handles GSAP cleanup automatically.

### Installation

```bash
npm install gsap @gsap/react
```

### Basic Usage

```tsx
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function AnimatedComponent() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // All GSAP animations here auto-clean on unmount
    gsap.from('.title', { y: 50, opacity: 0, duration: 0.6 })
  }, { scope: containerRef })

  return <div ref={containerRef}>
    <h1 className="title">Animated Title</h1>
  </div>
}
```

### With Dependencies

```tsx
useGSAP(() => {
  gsap.to('.counter', { innerText: count, duration: 0.5, snap: { innerText: 1 } })
}, { scope: containerRef, dependencies: [count] })
```

### With Return Cleanup

```tsx
useGSAP(() => {
  const observer = new IntersectionObserver(() => { ... })
  observer.observe(ref.current!)

  // Optional explicit cleanup (useGSAP handles gsap.context() automatically)
  return () => observer.disconnect()
}, { scope: containerRef })
```

## Scope Pattern

The `scope` option restricts GSAP selectors to a container element:

```tsx
useGSAP(() => {
  // '.card' only matches inside containerRef
  gsap.from('.card', { y: 30, opacity: 0, stagger: 0.1 })
}, { scope: containerRef })
```

## Next.js Integration

### Dynamic Import (Required)

GSAP components must use `'use client'` and dynamic imports:

```tsx
// app/page.tsx
import dynamic from 'next/dynamic'

const AnimatedHero = dynamic(() => import('@/components/AnimatedHero'), {
  ssr: false,
  loading: () => <HeroSkeleton />
})
```

### Client Component

```tsx
// components/AnimatedHero.tsx
'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.hero-title', {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="hero-section">
      <h1 className="hero-title">Welcome</h1>
    </div>
  )
}
```

### Layout Animation Provider

```tsx
// components/GSAPProvider.tsx
'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function GSAPProvider({ children }) {
  useEffect(() => {
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return <>{children}</>
}
```

## Common Patterns

### Page Transition

```tsx
'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function PageTransition({ children }) {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: 'power2.out'
    })
  }, { scope: containerRef })

  return <div ref={containerRef}>{children}</div>
}
```

### Staggered Card Grid

```tsx
useGSAP(() => {
  gsap.from('.card', {
    y: 30,
    opacity: 0,
    stagger: 0.08,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.card-grid',
      start: 'top 80%',
      once: true
    }
  })
}, { scope: containerRef })
```

## Anti-Patterns

- ❌ Using `useEffect` instead of `useGSAP` for GSAP in React
- ❌ Missing `gsap.registerPlugin()` before plugin use
- ❌ Missing `'use client'` directive
- ❌ Synchronous GSAP import in page/layout (use `next/dynamic`)
- ❌ Missing `scope` option (causes global selector matches)
- ❌ Not calling `ScrollTrigger.refresh()` after DOM changes
