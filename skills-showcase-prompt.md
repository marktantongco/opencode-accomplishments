# 🏆 Skills Showcase — Master Scaffold Prompt

Use this prompt verbatim to generate or regenerate the skills showcase web app.

---

## PROMPT

You are building an **award-winning, mobile-first, interactive skills showcase web app** using vanilla HTML/CSS/JS + GSAP. The site displays AI agent skills as self-contained web components with JSON-LD structured data for machine readability.

### Stack
- Vanilla HTML5, CSS custom properties, vanilla JS (ES modules)
- GSAP 3 + ScrollTrigger via CDN (no build step)
- Web Components (customElements API) for skill cards
- Schema.org JSON-LD for each skill
- Zero framework dependencies — must be a single deployable file

### Hero Section (Showstopper Above the Fold)
The hero showcases `ui-ux-pro-max-v7` as the featured skill.

**Hero animation sequence (GSAP timeline):**
1. Background: floating orb particles drift upward (opacity 0→1, y: 40→0, stagger 0.15s)
2. Badge: "HERO SKILL" label fades + slides in from left (x: -30→0)
3. Title: character-by-character reveal using SplitText-style span injection (stagger 0.04s per char)
4. Subtitle: fade up with 0.4s delay
5. CTA button: scale(0.85)→scale(1) with elastic ease
6. Skill orbit: 3 rotating satellite badges orbit the hero card continuously
7. ScrollTrigger: hero title parallax out at -30% y as user scrolls

**Hero visual spec:**
- Full viewport height (100svh)
- Dark background: `#080c14`
- Animated mesh gradient: radial gradients at 3 anchor points that shift slowly via CSS animation
- Hero card: glassmorphism panel (backdrop-filter: blur(24px), bg: rgba(255,255,255,0.04), border: 1px solid rgba(255,255,255,0.1))
- Accent color: `#7c6dfa` (electric violet) with `#00d4ff` (cyan) secondary
- Typography: Inter (Google Fonts), display size clamp(3rem, 8vw, 7rem)

### Skill Card Web Component `<skill-card>`

Each card is a Custom Element with these attributes:
- `name` — skill slug
- `category` — category label
- `description` — one-line description
- `icon` — emoji or SVG string
- `invoke` — invocation hint (e.g. "Use when building animations")
- `tags` — comma-separated tags

**Card behavior:**
- Default: compact card (120px tall) showing icon + name + category badge
- Hover: 3D tilt (CSS perspective transform, max 8deg), glow border pulses, description fades in
- Click/tap: card expands to full height showing description, tags, invoke button, JSON-LD preview toggle
- Active state: accent border + subtle inner glow
- Mobile: no hover state, tap to expand

**Card design:**
- bg: `rgba(255,255,255,0.03)`
- border: `1px solid rgba(255,255,255,0.08)`
- hover border: `1px solid rgba(124,109,250,0.5)`
- border-radius: `16px`
- Inner top-left glow on hover: `radial-gradient(ellipse at 0% 0%, rgba(124,109,250,0.15), transparent)`

### JSON-LD Data Model

Each skill card must embed and expose this structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "skill-name",
  "applicationCategory": "AISkill",
  "description": "...",
  "keywords": ["tag1", "tag2"],
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "invoke", "value": "Use when..." },
    { "@type": "PropertyValue", "name": "category", "value": "Design" },
    { "@type": "PropertyValue", "name": "skillSpec", "value": "https://agentskills.io/specification" }
  ]
}
```

Include a `<script type="application/ld+json">` block in the page `<head>` containing an `ItemList` of ALL skills for search engine and AI agent discovery.

### Skill Categories & Color Coding

| Category | Accent Color | Skills |
|----------|-------------|--------|
| Design & UI | `#7c6dfa` violet | ui-ux-pro-max-v7, anthropic-frontend-design, gsap-animations, frontend-design |
| Reasoning | `#00d4ff` cyan | chain-of-thought, socratic-method, devils-advocate, simulation-sandbox |
| Development | `#00ff9d` green | mcp-builder, superpowers, deployment-manager, browser-use, web-artifacts-builder |
| Content | `#ff6b6b` coral | seo-content-writer, humanizer, social-media-manager, social-content-pillars |
| Strategy | `#ffd93d` amber | jtbd-research, gumroad-pipeline, feature-research, skill-finder |
| System | `#a8b2d8` slate | persistent-memory, system-prompt-sync, feedback-loop, context-compressor, agent-roles |
| Data & Web | `#64ffda` teal | web-reader, audit-analyzer, web-design-guidelines |
| Creative | `#ff9ff3` pink | photography-ai, output-formatter |

### Layout
- Mobile first: 1 column → 2 columns (640px) → 3 columns (1024px) → 4 columns (1280px)
- Filter bar: horizontal scrollable chip row to filter by category
- Search input: live filter skills by name/tag
- Sort: alphabetical, by category, by recently added
- Scroll-to-top FAB on mobile

### GSAP Animations Required
1. Hero entrance timeline (described above)
2. Skill cards: ScrollTrigger batch reveal — staggered grid entry from bottom, `from: 'start'`
3. Category filter switch: GSAP Flip plugin — cards rearrange with physics-like transition
4. Card expand: height tween with `ease: 'expo.out'`
5. Progress bar: scroll-driven reading indicator at top of page
6. Parallax: hero subtitle drifts at 0.3x scroll speed

### SEO + Meta
- `<title>AI Skills Showcase — 38 Active Skills</title>`
- Full OG tags, Twitter card
- Canonical URL
- JSON-LD ItemList in `<head>`
- All interactive elements have unique IDs
- ARIA labels on all buttons and inputs

### Reusability Contract
This template must work for ANY skills collection by:
1. Replacing the `SKILLS_DATA` JS array at the top of the file
2. Changing 3 CSS custom properties: `--brand-primary`, `--brand-secondary`, `--site-title`
3. The JSON-LD auto-generates from `SKILLS_DATA` — no manual editing

Output a single `index.html` file, self-contained, production-ready.
