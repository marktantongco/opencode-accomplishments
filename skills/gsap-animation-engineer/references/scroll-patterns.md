# ScrollTrigger Patterns

## Basic Patterns

### Pattern 1: Fade In on Scroll

```tsx
gsap.from('.element', {
  opacity: 0,
  y: 50,
  duration: 0.6,
  scrollTrigger: {
    trigger: '.element',
    start: 'top 85%',
    toggleActions: 'play none none reverse'
  }
})
```

### Pattern 2: Parallax

```tsx
gsap.to('.parallax-bg', {
  y: -200,
  ease: 'none',
  scrollTrigger: {
    trigger: '.parallax-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1  // 1 second smoothing
  }
})
```

### Pattern 3: Pinned Section

```tsx
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.pinned-section',
    start: 'top top',
    end: '+=3000',  // 3000px of scroll distance
    pin: true,
    scrub: 1,
    anticipatePin: 1
  }
})

tl.to('.step-1', { opacity: 0, y: -50 })
  .from('.step-2', { opacity: 0, y: 50 })
  .to('.step-2', { opacity: 0, y: -50 })
  .from('.step-3', { opacity: 0, y: 50 })
```

### Pattern 4: Horizontal Scroll

```tsx
const sections = gsap.utils.toArray('.horizontal-section')

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-container',
    pin: true,
    scrub: 1,
    end: () => `+=${document.querySelector('.horizontal-container').scrollWidth}`,
    snap: {
      snapTo: 1 / (sections.length - 1),
      duration: { min: 0.2, max: 0.6 },
      ease: 'power1.inOut'
    }
  }
})
```

### Pattern 5: Batch Trigger

```tsx
ScrollTrigger.batch('.card', {
  onEnter: (elements) => {
    gsap.from(elements, {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.4
    })
  },
  start: 'top 85%',
  once: true
})
```

## Advanced Patterns

### Pattern 6: Scrub Through Timeline

```tsx
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: '+=2000',
    scrub: 1,
    pin: true
  }
})

tl.to('.hero-title', { scale: 0.5, opacity: 0, y: -100, duration: 1 })
  .to('.hero-bg', { scale: 1.2, duration: 1 }, 0)
  .from('.hero-content', { opacity: 0, y: 100, duration: 1 }, 0.5)
```

### Pattern 7: Counter Animation

```tsx
gsap.to('.counter', {
  innerText: 1000,
  duration: 2,
  snap: { innerText: 1 },
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.counter-section',
    start: 'top 80%',
    once: true
  }
})
```

### Pattern 8: Progress Bar

```tsx
gsap.to('.progress-fill', {
  width: '100%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.content',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3
  }
})
```

## Performance Tips

- **`anticipatePin: 1`** — Reduces jank on pinned sections
- **`scrub: true`** vs **`scrub: 1`** — Number adds smoothing (recommended)
- **`invalidateOnRefresh: true`** — Recalculate on resize
- **`once: true`** — Only trigger once, then kill (saves memory)
- **Batch triggers** — Use `ScrollTrigger.batch()` for multiple elements
- **Avoid `pin` on mobile** — Causes jank on low-end devices
- **`toggleActions` vs `scrub`** — Use toggleActions for play-once, scrub for smooth progress-linked

## Mobile Considerations

```tsx
const isMobile = window.innerWidth < 768
const isLowEnd = (performance as any).memory?.usedJSHeapSize < 2_000_000_000

gsap.to('.element', {
  y: isMobile ? -100 : -200,  // Less parallax on mobile
  scrollTrigger: {
    trigger: '.section',
    scrub: isMobile ? 0.3 : 1,  // Smoother on desktop
    pin: !isMobile,  // No pinning on mobile
    anticipatePin: isMobile ? 0 : 1
  }
})
```
