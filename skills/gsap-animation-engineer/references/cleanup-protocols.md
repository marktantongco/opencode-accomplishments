# GSAP Cleanup Protocols

## React: useGSAP Auto-Cleanup

The `useGSAP` hook from `@gsap/react` provides automatic cleanup via `gsap.context()`. All animations created within the hook are tracked and reverted when the component unmounts.

```tsx
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Component() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // All these auto-clean on unmount:
    gsap.to('.element', { x: 100 })
    gsap.timeline().to('.element', { y: 200 })
    ScrollTrigger.create({ ... })
  }, { scope: containerRef })

  return <div ref={containerRef}>...</div>
}
```

## Vanilla JS: Manual Cleanup

Without `useGSAP`, use `gsap.context()` for cleanup:

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.element', { x: 100 })
    gsap.timeline().to('.element', { y: 200 })
    ScrollTrigger.create({ ... })
  }, containerRef)  // Scoped to container

  return () => ctx.revert()  // Clean up ALL animations in context
}, [])
```

## ScrollTrigger Cleanup

### Killing Individual Triggers

```tsx
const trigger = ScrollTrigger.create({
  trigger: '.section',
  start: 'top 80%',
  onEnter: () => { ... }
})

// Later:
trigger.kill()
```

### Killing All Triggers

```tsx
// On component unmount or route change:
ScrollTrigger.getAll().forEach(t => t.kill())
```

### Refreshing Triggers

```tsx
// After DOM changes (layout shift, content load):
ScrollTrigger.refresh()

// On window resize:
window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})
```

## SplitText Cleanup

```tsx
useGSAP(() => {
  const split = SplitText.create('.text', { type: 'chars' })

  gsap.from(split.chars, { y: 50, opacity: 0, stagger: 0.02 })

  // Auto-reverted by useGSAP context
  // Or manually: split.revert()
}, { scope: containerRef })
```

## Common Leak Patterns

### ❌ Leak: Global GSAP Animation

```tsx
// BAD — Animation persists after component unmount
useEffect(() => {
  gsap.to('body', { background: '#000' })
  // No cleanup!
}, [])
```

### ✅ Fix: Context Cleanup

```tsx
// GOOD — Animation reverts on unmount
useGSAP(() => {
  gsap.to('body', { background: '#000' })
}, { scope: containerRef })
```

### ❌ Leak: ScrollTrigger Without Kill

```tsx
// BAD — Trigger persists after component unmount
useEffect(() => {
  ScrollTrigger.create({ trigger: '.section', ... })
  // No kill!
}, [])
```

### ✅ Fix: Kill on Unmount

```tsx
// GOOD — Trigger killed on unmount
useGSAP(() => {
  ScrollTrigger.create({ trigger: '.section', ... })
}, { scope: containerRef })
```

## Pre-Commit Audit

```bash
python3 skills/agent-auditor/scripts/audit-animation.py src/
```

### Checks Performed

1. `useGSAP` used instead of `useEffect` for GSAP in React
2. `gsap.context()` used for vanilla JS GSAP
3. ScrollTrigger instances killed on unmount
4. SplitText instances reverted on unmount
5. `prefers-reduced-motion` checks present
6. No synchronous GSAP imports in page/layout
7. `'use client'` directive on GSAP components
