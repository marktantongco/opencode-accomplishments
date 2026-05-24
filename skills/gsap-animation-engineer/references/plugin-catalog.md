# GSAP Plugin Catalog

**All GSAP plugins are FREE since April 2025.** No Club GreenSock membership required.

## Core

| Package | Size (gzipped) | Purpose |
|---------|----------------|---------|
| `gsap` | 24KB | Core engine — tweening, timeline, easing |
| `@gsap/react` | 2.2KB | `useGSAP()` hook for React integration |

## Plugins (All Free)

| Plugin | Size (gzipped) | Purpose | Register |
|--------|----------------|---------|----------|
| `ScrollTrigger` | 8KB | Scroll-linked animations, pinning, scrubbing | `gsap.registerPlugin(ScrollTrigger)` |
| `ScrollToPlugin` | 1KB | Smooth scroll to element/position | `gsap.registerPlugin(ScrollToPlugin)` |
| `SplitText` | 4KB | Split text into chars/words/lines for animation | `SplitText.create()` auto-registers |
| `Flip` | 6KB | Layout state transitions (filter, sort, resize) | `gsap.registerPlugin(Flip)` |
| `DrawSVGPlugin` | 2KB | SVG stroke drawing animation | `gsap.registerPlugin(DrawSVGPlugin)` |
| `MorphSVGPlugin` | 5KB | SVG path morphing between shapes | `gsap.registerPlugin(MorphSVGPlugin)` |
| `MotionPathPlugin` | 3KB | Animate along SVG path | `gsap.registerPlugin(MotionPathPlugin)` |
| `Draggable` | 5KB | Drag, rotate, resize elements | `gsap.registerPlugin(Draggable)` |
| `TextPlugin` | 1KB | Typewriter text animation | `gsap.registerPlugin(TextPlugin)` |
| `ScrambleTextPlugin` | 2KB | Text scramble/decode effect | `gsap.registerPlugin(ScrambleTextPlugin)` |
| `CustomEase` | 1KB | Custom cubic-bezier easing curves | `gsap.registerPlugin(CustomEase)` |
| `CustomBounce` | 1KB | Physics-based bounce easing | `gsap.registerPlugin(CustomBounce)` |
| `CustomWiggle` | 1KB | Organic wiggle easing | `gsap.registerPlugin(CustomWiggle)` |
| `InertiaPlugin` | 2KB | Momentum-based throw with flick | `gsap.registerPlugin(InertiaPlugin)` |
| `Observer` | 2KB | Unified input observer (mouse, touch, scroll, pointer) | `gsap.registerPlugin(Observer)` |
| `PixiPlugin` | 1KB | PixiJS property animation | `gsap.registerPlugin(PixiPlugin)` |
| `EaselPlugin` | 1KB | CreateJS/EaselJS property animation | `gsap.registerPlugin(EaselPlugin)` |

## Import Patterns

### ES Module (Recommended)

```tsx
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, SplitText, Flip)
```

### CDN (Static HTML)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js"></script>
```

## Plugin Selection Guide

| Need | Plugin | Why |
|------|--------|-----|
| Scroll-linked animation | `ScrollTrigger` | Pin, scrub, toggle, batch |
| Smooth scroll on click | `ScrollToPlugin` | `gsap.to(window, { scrollTo: '#section' })` |
| Text character animation | `SplitText` | Split into chars/words, animate individually |
| Layout transitions | `Flip` | Filter, sort, resize with animation |
| SVG stroke animation | `DrawSVGPlugin` | `drawSVG: "0% 100%"` |
| SVG shape morphing | `MorphSVGPlugin` | `morphSVG: "#targetShape"` |
| Follow a path | `MotionPathPlugin` | `motionPath: "#path"` |
| Drag elements | `Draggable` | `Draggable.create('.element')` |
| Typewriter effect | `TextPlugin` | `text: { value: "Hello", speed: 0.5 }` |
| Scramble/decode text | `ScrambleTextPlugin` | `scrambleText: "REVEAL"` |
| Custom easing | `CustomEase` | `ease: CustomEase.create("custom", "0.5,0,0,1")` |

## Bundle Considerations

- **Core + ScrollTrigger**: ~32KB (most common combo)
- **Core + ScrollTrigger + SplitText**: ~36KB
- **Core + ScrollTrigger + SplitText + Flip**: ~42KB
- **Full stack** (all plugins): ~60KB

### Tree-Shaking

GSAP v3.12+ supports tree-shaking for ESM imports. Only import plugins you use:

```tsx
// Only these will be in your bundle
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)
```
