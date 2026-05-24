# React & Vue Motion Patterns

## React Patterns

### Pattern 1: Mount Animation

```tsx
import { motion } from "motion/react"

function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

### Pattern 2: Staggered List

```tsx
import { motion } from "motion/react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function StaggeredList({ items }: { items: Item[] }) {
  return (
    <motion.ul variants={container} initial="hidden" animate="show">
      {items.map(i => (
        <motion.li key={i.id} variants={item}>{i.name}</motion.li>
      ))}
    </motion.ul>
  )
}
```

### Pattern 3: AnimatePresence + Modal

```tsx
import { AnimatePresence, motion } from "motion/react"

function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

### Pattern 4: Shared Layout Transition

```tsx
import { LazyMotion, domMax, m } from "motion/react"

// Must use LazyMotion with domMax
<LazyMotion features={domMax}>
  <m.div layoutId="hero-image" transition={{ type: "spring", stiffness: 350, damping: 30 }}>
    <Image src={src} alt={alt} />
  </m.div>
</LazyMotion>
```

### Pattern 5: Drag with Constraints

```tsx
import { motion } from "motion/react"

function DraggableCard() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      dragElastic={0.1}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 100) handleSwipe(info.offset.x > 0 ? 'right' : 'left')
      }}
    />
  )
}
```

### Pattern 6: useAnimate Imperative

```tsx
import { useAnimate } from "motion/react"

function ImperativeAnimation({ trigger }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (trigger) {
      animate(scope.current, { x: 100, opacity: 1 }, { type: "spring" })
    } else {
      animate(scope.current, { x: 0, opacity: 0.5 }, { duration: 0.2 })
    }
  }, [trigger])

  return <div ref={scope}>Animated</div>
}
```

## Vue Patterns

### Pattern 1: Transition Component

```vue
<template>
  <Transition name="fade">
    <div v-if="show">Content</div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
```

### Pattern 2: Motion with Vue

```vue
<script setup>
import { Motion, Presence } from 'motion/vue'
</script>

<template>
  <Presence>
    <Motion
      v-if="show"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :exit="{ opacity: 0, y: 20 }"
    >
      <slot />
    </Motion>
  </Presence>
</template>
```

## SSR Considerations

- **Next.js**: Use `'use client'` directive on all Motion components
- **Dynamic imports**: Always use `next/dynamic` with `ssr: false` for animation-heavy components
- **Hydration**: Motion handles hydration mismatches by suppressing warnings for `initial` prop
- **Server rendering**: Use CSS transitions for above-the-fold content; Motion for below-the-fold
