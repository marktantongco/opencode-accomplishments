# Cleanup Protocols

## Memory Leak Prevention

Animation libraries that manipulate the DOM must clean up when components unmount. Failing to do so causes memory leaks, orphaned timers, and stale event listeners.

## Motion Cleanup

### useAnimate Hook

The `useAnimate` hook auto-cleans when the component unmounts:

```tsx
import { useAnimate } from "motion/react"

function Component() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const controls = animate(scope.current, { opacity: 1 }, { duration: 0.3 })

    // Optional: Manual stop if needed
    return () => controls.stop()
  }, [])

  return <div ref={scope}>Content</div>
  // Auto-cleanup on unmount via useAnimate
}
```

### useMotionValue

```tsx
import { useMotionValue } from "motion/react"

function Component() {
  const x = useMotionValue(0)

  useEffect(() => {
    const unsubscribe = x.on('change', (latest) => {
      console.log('x changed:', latest)
    })

    return () => unsubscribe()  // Clean up listener
  }, [x])

  return <motion.div style={{ x }} />
}
```

### useScroll

```tsx
import { useScroll } from "motion/react"

function Component() {
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      // Handle scroll position
    })

    return () => unsubscribe()  // Clean up scroll listener
  }, [scrollY])

  return <div />
}
```

### AnimatePresence

`AnimatePresence` handles exit animations automatically. Ensure:

1. Children have unique `key` props
2. Exit animations are defined on each child
3. `AnimatePresence` wraps the conditional rendering

```tsx
<AnimatePresence mode="wait">
  {items.map(item => (
    <motion.div
      key={item.id}  // Unique key required
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}  // Exit animation required
    >
      {item.content}
    </motion.div>
  ))}
</AnimatePresence>
```

## Common Leak Patterns

### ❌ Leak: Forgotten Animation Controls

```tsx
// BAD — Animation continues after unmount
useEffect(() => {
  animate('.element', { x: 1000 }, { duration: 10 })
  // No cleanup!
}, [])
```

### ✅ Fix: Return Cleanup

```tsx
// GOOD — Animation stops on unmount
useEffect(() => {
  const controls = animate('.element', { x: 1000 }, { duration: 10 })
  return () => controls.stop()
}, [])
```

### ❌ Leak: ResizeObserver / IntersectionObserver

```tsx
// BAD — Observer never disconnected
useEffect(() => {
  const observer = new ResizeObserver(() => { ... })
  observer.observe(ref.current)
  // No disconnect!
}, [])
```

### ✅ Fix: Disconnect on Unmount

```tsx
// GOOD — Observer disconnected
useEffect(() => {
  const observer = new ResizeObserver(() => { ... })
  observer.observe(ref.current!)
  return () => observer.disconnect()
}, [])
```

## Audit Script

Run the animation audit before every commit:

```bash
python3 skills/agent-auditor/scripts/audit-animation.py src/
```

### What It Checks

1. Missing `useGSAP` cleanup (`gsap.context().revert()`)
2. Missing `useAnimate` / `useMotionValue` cleanup
3. Missing observer disconnects (ResizeObserver, IntersectionObserver)
4. Missing `prefers-reduced-motion` checks
5. Bundle size violations
6. Synchronous animation imports in page/layout

### Pre-Commit Hook

```bash
# .git/hooks/pre-commit
#!/bin/sh
python3 skills/agent-auditor/scripts/audit-animation.py src/
if [ $? -ne 0 ]; then
  echo "Animation audit failed. Fix issues before committing."
  exit 1
fi
```
