# SplitText Guide

## Overview

SplitText breaks text content into individual characters, words, and lines for granular animation control. **Free since April 2025.**

## Basic Usage

```tsx
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

// Split into characters
const split = SplitText.create('.my-text', { type: 'chars' })

// Animate characters
gsap.from(split.chars, {
  y: 50,
  opacity: 0,
  stagger: 0.02,
  duration: 0.4,
  ease: 'back.out(1.7)'
})
```

## Split Types

| Type | Description | Best For |
|------|-------------|----------|
| `chars` | Individual characters | Typewriter, wave, scramble effects |
| `words` | Individual words | Word-by-word reveal, emphasis |
| `lines` | Line breaks (computed) | Line-by-line slide, stagger |
| `chars,words` | Both chars and words | Mixed animation patterns |
| `chars,words,lines` | All three | Full control |

## Reveal Effects

### Character Reveal (Up)

```tsx
const split = SplitText.create('.reveal-text', { type: 'chars,words' })

gsap.from(split.chars, {
  y: 80,
  opacity: 0,
  rotationX: -90,
  stagger: 0.02,
  duration: 0.6,
  ease: 'back.out(1.7)'
})
```

### Word Reveal (Fade)

```tsx
const split = SplitText.create('.reveal-text', { type: 'words' })

gsap.from(split.words, {
  opacity: 0,
  y: 20,
  filter: 'blur(8px)',
  stagger: 0.05,
  duration: 0.5,
  ease: 'power2.out'
})
```

### Line Reveal (Slide)

```tsx
const split = SplitText.create('.reveal-text', { type: 'lines' })

gsap.from(split.lines, {
  y: 40,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power3.out'
})
```

### Mask Reveal (Clip)

```tsx
const split = SplitText.create('.reveal-text', { type: 'words', mask: 'words' })

gsap.from(split.words, {
  yPercent: 100,
  stagger: 0.05,
  duration: 0.5,
  ease: 'power3.out'
})
```

## Scroll-Triggered Reveal

```tsx
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

useGSAP(() => {
  const split = SplitText.create('.scroll-text', { type: 'chars' })

  gsap.from(split.chars, {
    y: 50,
    opacity: 0,
    rotationX: -90,
    stagger: 0.01,
    duration: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.text-section',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    }
  })
}, { scope: containerRef })
```

## Cleanup

SplitText creates wrapper elements. Always revert when done:

```tsx
useGSAP(() => {
  const split = SplitText.create('.text', { type: 'chars' })

  gsap.from(split.chars, { y: 50, opacity: 0, stagger: 0.02 })

  // Auto-reverted by useGSAP context cleanup
  // Or manually: split.revert()
}, { scope: containerRef })
```

## Mobile Optimization

```tsx
const isMobile = window.innerWidth < 768

const split = SplitText.create('.text', {
  type: isMobile ? 'words' : 'chars,words',  // Fewer splits on mobile
  charsClass: 'char',
  wordsClass: 'word'
})

gsap.from(isMobile ? split.words : split.chars, {
  y: 30,
  opacity: 0,
  stagger: isMobile ? 0.05 : 0.02,
  duration: 0.4
})
```

## Accessibility

- Original text remains in DOM for screen readers
- `aria-hidden` added to wrapper elements
- `prefers-reduced-motion` check recommended:

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (prefersReducedMotion) {
  // Skip animation, show text immediately
  return
}

const split = SplitText.create('.text', { type: 'chars' })
gsap.from(split.chars, { y: 50, opacity: 0, stagger: 0.02 })
```
