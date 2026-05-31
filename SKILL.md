# SKILL: Skills Showcase Generator

## Context

Generates a self-contained, single-file HTML showcase for any collection of AI agent skills. Premium modern design system (Playfair Display + Inter typography, indigo/parchment palette, soft shadows, scroll reveal animations) with GSAP animations, Web Components, JSON-LD structured data, and multiple machine-readable endpoints. Zero build step — drop on GitHub Pages and ship. WCAG AA compliant contrast ratios throughout. Respects `prefers-reduced-motion`. Dynamic palette endpoint for live theming.

Use this skill when:
- You need to build or regenerate a skills showcase / registry page
- You need a visual, interactive catalog of AI agent capabilities
- You want to expose a skill collection as a machine-readable API (JSON, plugin.xml)
- You need an embeddable widget for docs, wikis, or Notion pages
- You want a palette-agnostic design system that accepts any hex triplet

## Instructions

### 1. Prepare SKILLS_DATA

Collect all skills into a JavaScript array. Each skill object has:

```
{ name, category, description, icon, invoke, tags[], accent }
```

- `name` — slug identifier (e.g. "gsap-animations")
- `category` — one of 8 predefined categories (see below)
- `description` — one-line explanation
- `icon` — emoji or SVG string
- `invoke` — usage hint ("Use when...")
- `tags` — array of lowercase tags for search/filter
- `accent` — hex color for the category

### 2. Categories & Color Map

| Category | Accent |
|---|---|
| Design & UI | `#4338ca` (indigo) |
| Reasoning | `#059669` (emerald) |
| Development | `#059669` (emerald) |
| Content | `#c2410c` (orange-red) |
| Strategy | `#ca8a04` (amber) |
| System | `#6366f1` (violet) |
| Data & Web | `#0d9488` (teal) |
| Creative | `#a855f7` (purple) |
| MCP Servers | `#ea580c` (orange) |
| Agents | `#6366f1` (violet) |
| Infrastructure | `#b45309` (brown) |

### 3. Reusability Contract

To rebrand for a different collection:
1. Replace the `SKILLS_DATA` array (via `getSkillsDataRaw()`)
2. Change CSS custom properties: `--brand-primary`, `--brand-secondary`, `--brand-tertiary`, `--site-title`
3. Or use `?palette=FF2E63` to dynamically override all brand colors at runtime
4. Update `SKILLS_VERSION` and `SKILLS_LAST_UPDATED`
5. JSON-LD auto-generates from `SKILLS_DATA` — no manual editing

### 4. Endpoints (URL Parameters)

| Param | Effect |
|---|---|
| `?skill=gsap-animations` | Auto-filters to matching skill name/tag |
| `?category=Development` | Auto-selects category chip |
| `?format=json` | Returns raw JSON with version, count, all skills |
| `?format=manifest` | Returns JetBrains-style plugin.xml for AI IDE integration |
| `?embed=true` | Strips hero, editorial band, footer — just filter bar + grid (for iframe embedding) |
| `?palette=FF2E63` | Overrides `--brand-primary` with any hex triplet; derives secondary (+180 hue) and tertiary (+120 hue) |

### 5. Accessibility (WCAG AA)

All text meets WCAG AA contrast requirements:
- `--text-primary: #000000` — 21:1 on white (AAA)
- `--text-secondary: #1F1F1F` — 15.4:1 on white (AAA)
- `--text-muted: #555555` — 7.5:1 on white (AA)
- Editorial band: light text on dark bg — high contrast
- `prefers-reduced-motion: reduce` disables all animations
- Sort select dropdown arrow uses black fill (visible on white)
- Minimum font size for body text: 0.82rem

### 6. File Output

- Save to: `docs/index.html`
- Single HTML file, zero dependencies beyond CDN (GSAP, Google Fonts)
- GitHub Pages compatible — just push to `/docs` folder
- Vercel compatible — `vercel.json` rewrites to `docs/index.html`

### 7. Version the Collection

- `SKILLS_VERSION` — semver string (bump minor for new skills, major for breaking changes)
- `SKILLS_LAST_UPDATED` — ISO date string
- The showcase IS the changelog — every new skill auto-appears, every removal auto-hides
- Nightly cron job auto-bumps patch version and updates date

## Constraints

- NEVER use a build step. The file must open directly in any browser.
- NEVER use placeholder text. All content must be real skill data.
- NEVER duplicate skills across categories. MECE principle — one skill, one category.
- NEVER remove JSON-LD structured data from `<head>`. Machine readability is a hard requirement.
- ALWAYS include ARIA labels on interactive elements.
- ALWAYS use soft shadows and subtle borders — this is the premium modern design system (Playfair Display + Inter, indigo/parchment palette).
- ALWAYS version the SKILLS_DATA array. The showcase is a living standard.
- ALWAYS ensure WCAG AA contrast (4.5:1 minimum) on all text elements.
- NEVER use neon/high-saturation colors (e.g., #BFFF00, #08F7FE, #00FF9D) on white backgrounds for text — use muted, desaturated accents.
