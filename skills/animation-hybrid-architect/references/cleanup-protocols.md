# Cleanup Protocols: Hybrid Architecture

## Dual-Library Cleanup Strategy

When combining Motion and GSAP, each library has its own cleanup mechanism. This document provides unified cleanup patterns.

## Unified Cleanup Hook

```tsx
// lib/animation/useAnimationCleanup.ts
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Unified cleanup hook for hybrid animation components.
 * Handles both Motion (via component unmount) and GSAP (via context revert).
 */
export function useAnimationCleanup() {
  const ctxRef = useRef<gsap.Context | null>(null)
  const observersRef = useRef<(ResizeObserver | IntersectionObserver)[]>([])
  const intervalsRef = useRef<(number | NodeJS.Timeout)[]>([])

  // Register a GSAP context for auto-cleanup
  const registerGSAPContext = (ctx: gsap.Context) => {
    ctxRef.current = ctx
  }

  // Register an observer for auto-disconnect
  const registerObserver = (observer: ResizeObserver | IntersectionObserver) => {
    observersRef.current.push(observer)
  }

  // Register an interval for auto-clear
  const registerInterval = (id: number | NodeJS.Timeout) => {
    intervalsRef.current.push(id)
  }

  // Auto-cleanup on unmount
  useEffect(() => {
    return () => {
      // Revert GSAP context (kills all animations + ScrollTriggers)
      if (ctxRef.current) {
        ctxRef.current.revert()
      }

      // Disconnect all observers
      observersRef.current.forEach(obs => obs.disconnect())

      // Clear all intervals
      intervalsRef.current.forEach(id => {
        if (typeof id === 'number') clearInterval(id)
        else clearTimeout(id as NodeJS.Timeout)
      })

      // Kill all remaining ScrollTriggers
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [])

  return { registerGSAPContext, registerObserver, registerInterval }
}
```

## Component Pattern

```tsx
'use client'

import { useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAnimationCleanup } from '@/lib/animation/useAnimationCleanup'

gsap.registerPlugin(ScrollTrigger)

function HybridComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { registerObserver } = useAnimationCleanup()

  // GSAP animations — auto-cleaned by useGSAP
  useGSAP(() => {
    gsap.from('.scroll-content', {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: '.scroll-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }, { scope: containerRef })

  // ResizeObserver — auto-cleaned by useAnimationCleanup
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh()
    })
    observer.observe(containerRef.current!)
    registerObserver(observer)
  }, [registerObserver])

  return (
    <div ref={containerRef}>
      {/* GSAP animated content */}
      <section className="scroll-section">
        <div className="scroll-content">Scroll Content</div>
      </section>

      {/* Motion animated UI */}
      <AnimatePresence>
        <motion.div
          className="ui-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          UI Element
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
```

## Route Change Cleanup

On SPA route changes, kill all ScrollTriggers and reset animation state:

```tsx
// app/layout.tsx
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AnimationLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    // Kill all ScrollTriggers from previous route
    ScrollTrigger.getAll().forEach(t => t.kill())

    // Refresh after DOM update
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
  }, [pathname])

  return <>{children}</>
}
```

## Pre-Commit Audit Checklist

1. [ ] All GSAP animations use `useGSAP` (not `useEffect`)
2. [ ] All vanilla GSAP uses `gsap.context()` + `revert()`
3. [ ] All Motion animations auto-clean on unmount
4. [ ] No Motion + GSAP overlap on same selectors
5. [ ] All ResizeObserver / IntersectionObserver disconnected
6. [ ] All intervals/timeouts cleared
7. [ ] `prefers-reduced-motion` checked before animations
8. [ ] ScrollTrigger refreshed after DOM mutations
9. [ ] Route changes kill stale ScrollTriggers
10. [ ] Memory usage under 3.7GB ceiling
