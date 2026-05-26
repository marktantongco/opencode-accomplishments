# Motion Scroll Patterns

## Light Scroll Patterns (Motion)

Use Motion's `useScroll` for simple, lightweight scroll-linked animations. For complex scroll with pinning, scrubbing, or multi-section orchestration, use GSAP ScrollTrigger instead.

### Pattern 1: Parallax

```tsx
import { useScroll, useTransform, motion } from "motion/react"

function ParallaxSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <motion.div style={{ y }}>
      <h2>Parallax Content</h2>
    </motion.div>
  )
}
```

### Pattern 2: Scroll Progress

```tsx
import { useScroll, useTransform, motion } from "motion/react"

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-primary origin-left"
      style={{ scaleX }}
    />
  )
}
```

### Pattern 3: Scroll-Triggered Reveal

```tsx
import { useInView, motion } from "motion/react"

function ScrollReveal({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

### Pattern 4: Directional Reveal

```tsx
import { useInView, motion } from "motion/react"

function DirectionalReveal({ children, direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const offsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offsets[direction] }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

## When to Use GSAP Instead

| Scenario | Use Motion | Use GSAP |
|----------|-----------|----------|
| Simple parallax on 1-2 elements | ✅ | ❌ |
| Scroll progress bar | ✅ | ❌ |
| Reveal on scroll (once) | ✅ | ❌ |
| Pinned sections | ❌ | ✅ ScrollTrigger |
| Scrub through timeline | ❌ | ✅ ScrollTrigger |
| Multi-section orchestration | ❌ | ✅ ScrollTrigger |
| Horizontal scroll sections | ❌ | ✅ ScrollTrigger |
| Complex scroll sequences | ❌ | ✅ ScrollTrigger |

## Performance Tips

- **`once: true`** — Use for reveal animations that only play once
- **`margin` option** — Trigger animations before element enters viewport
- **Avoid `useScroll` on many elements** — Use GSAP ScrollTrigger for batch triggers
- **`will-change: transform`** — Add during animation, remove after
- **`contain: layout style paint`** — Use CSS containment on animated containers
