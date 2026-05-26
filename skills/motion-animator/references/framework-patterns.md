# Framework Integration Patterns

## Next.js App Router

```tsx
// Client Component wrapper REQUIRED
"use client";
import { motion } from "motion/react";

// AnimatePresence with soft navigation workaround:
// Use router.events or handle key changes manually
// See: https://motion.dev/docs/react-upgrade-guide
```

## Next.js Pages Router

```tsx
// Direct import, no wrapper needed
import { motion, AnimatePresence } from "motion/react";
```

## Vite + React + TypeScript

```tsx
// Zero config
import { motion } from "motion/react";
```

## Tailwind CSS v4

```tsx
// Remove Tailwind transition classes to avoid conflicts
// BAD: className="transition-all duration-300 hover:scale-105"
// GOOD: className="bg-blue-500" whileHover={{ scale: 1.05 }}
```

## Cloudflare Workers

```tsx
// Fixed in v12.23.24
import { motion } from "motion/react";
// Both `motion` and `framer-motion` work with Wrangler
```

## React Three Fiber (3D)

```tsx
import { motion } from "framer-motion-3d";
// Animate 3D meshes, groups, cameras
// Combine with useScroll for 3D scroll experiences
```
