# Mobile Optimization

## Device Detection

```tsx
// lib/animation/device.ts
export function getDeviceProfile() {
  if (typeof window === 'undefined') return { tier: 'web' as const }

  const ram = (performance as any).memory?.usedJSHeapSize ?? 0
  const cores = navigator.hardwareConcurrency ?? 4
  const isMobile = window.innerWidth < 768
  const connection = (navigator as any).connection

  return {
    tier: ram < 2_000_000_000 ? 'ultra' : isMobile ? 'mobile' : 'web',
    isMobile,
    cores,
    ramMB: ram / 1048576,
    effectiveType: connection?.effectiveType ?? '4g',  // 'slow-2g', '2g', '3g', '4g'
    saveData: connection?.saveData ?? false
  }
}
```

## Tier-Based Animation Config

```tsx
// lib/animation/mobile-config.ts
import { getDeviceProfile } from './device'

export function getMobileConfig() {
  const { tier, isMobile, effectiveType, saveData } = getDeviceProfile()

  const isSlow = effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g'

  return {
    // Motion settings
    motion: {
      bundle: tier === 'ultra' ? 'mini' : tier === 'mobile' ? 'standard' : 'full',
      duration: isSlow ? 0.15 : 0.3,  // Shorter on slow connections
      stagger: isSlow ? 0.03 : 0.08,
      springStiffness: isMobile ? 400 : 300,
    },

    // GSAP settings
    gsap: {
      scrollPin: !isMobile,  // No pinning on mobile
      scrubValue: isMobile ? 0.3 : 1,
      splitType: isMobile ? 'words' : 'chars,words',  // Fewer splits on mobile
      complexTimelines: !isMobile,
      scrollBatch: isMobile ? false : true,
    },

    // Shared settings
    reducedMotion: true,  // Always respect
    gpuOnly: true,        // Always GPU-composited
    willChange: isMobile ? false : true,  // Disable will-change on mobile (battery)
    saveData: saveData,   // Skip animations if Save Data is on
  }
}
```

## CSS-First on Mobile

Prioritize CSS animations on mobile; reserve JS animations for desktop:

```tsx
function AnimatedCard({ title }) {
  const { isMobile } = getDeviceProfile()

  if (isMobile) {
    // CSS-only animation — no JS runtime needed
    return (
      <div className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
        <h3>{title}</h3>
      </div>
    )
  }

  // Motion animation for desktop
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <h3>{title}</h3>
    </motion.div>
  )
}
```

## Scroll Performance on Mobile

### Disable ScrollTrigger Pin

```tsx
const { isMobile } = getDeviceProfile()

useGSAP(() => {
  gsap.to('.element', {
    y: -100,
    scrollTrigger: {
      trigger: '.section',
      start: 'top 80%',
      scrub: isMobile ? 0.3 : 1,
      pin: !isMobile,  // ← No pinning on mobile
      anticipatePin: isMobile ? 0 : 1
    }
  })
}, { scope: containerRef })
```

### Reduce Parallax Distance

```tsx
const parallaxY = isMobile ? -50 : -200

gsap.to('.parallax-bg', {
  y: parallaxY,
  ease: 'none',
  scrollTrigger: {
    trigger: '.parallax-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: isMobile ? 0.3 : 1
  }
})
```

## Memory Management

### 3.7GB RAM Ceiling

```tsx
// Monitor memory usage
export function checkMemoryCeiling(): boolean {
  if (!('memory' in performance)) return true

  const { usedJSHeapSize, jsHeapSizeLimit } = (performance as any).memory
  const usedMB = usedJSHeapSize / 1048576
  const ceilingMB = 3700  // 3.7GB

  if (usedMB > ceilingMB * 0.8) {
    console.warn(`Memory at ${usedMB.toFixed(0)}MB — approaching 3.7GB ceiling`)
    return false
  }

  return true
}
```

### Kill Off-Screen Animations

```tsx
// Pause animations when elements leave viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const anim = gsap.getByTarget(entry.target)
    if (anim) {
      entry.isIntersecting ? anim.resume() : anim.pause()
    }
  })
}, { rootMargin: '100px' })

document.querySelectorAll('.animated').forEach(el => observer.observe(el))
```

## Save Data Mode

```tsx
const { saveData } = getDeviceProfile()

if (saveData) {
  // Skip all animations, show static content
  return <StaticContent />
}
```

## Checklist

- [ ] Motion tier selected based on device capability
- [ ] ScrollTrigger pinning disabled on mobile
- [ ] SplitText uses 'words' on mobile, 'chars' on desktop
- [ ] CSS transitions for mobile micro-interactions
- [ ] `prefers-reduced-motion` always respected
- [ ] `will-change` disabled on mobile (battery)
- [ ] Save Data mode skips animations
- [ ] Memory monitored against 3.7GB ceiling
- [ ] Off-screen animations paused
- [ ] Parallax distance reduced on mobile
