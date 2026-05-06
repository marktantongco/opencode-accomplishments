# OpenCode Accomplishments — AI Skills Showcase

> A self-contained, single-file interactive showcase of 38 AI agent skills across 8 categories. Neo-brutalist ultramodern Gen Z design. Zero build step — drop on GitHub Pages and ship.

![Version](https://img.shields.io/badge/version-3.0.0-FF2E63?style=for-the-badge&labelColor=000)
![Skills](https://img.shields.io/badge/skills-38-BFFF00?style=for-the-badge&labelColor=000)
![WCAG](https://img.shields.io/badge/WCAG-AA-08F7FE?style=for-the-badge&labelColor=000)
![Zero Build](https://img.shields.io/badge/zero_build-step-00FF9D?style=for-the-badge&labelColor=000)

---

## Live Demo

| Platform | URL |
|---|---|
| **GitHub Pages** | [marktantongco.github.io/opencode-accomplishments](https://marktantongco.github.io/opencode-accomplishments) |
| **Vercel** | Deployed via Vercel CLI — auto-deploys on push to `main` |

---

## What This Is

This project is a **living, self-updating AI Skills Registry** — an interactive, machine-readable catalog of 38 active AI agent skills. Built with vanilla HTML/CSS/JS, powered by GSAP animations, Web Components, and JSON-LD structured data. It doubles as a design system showcase and a functional API endpoint.

The showcase was designed and built using the very skills it catalogs:

- **ui-ux-pro-max-v7** — 60 styles, 48 palettes, 36 fonts, 24 industry rules
- **gsap-animations** — Production-grade GSAP animation patterns with ScrollTrigger + Flip
- **anthropic-frontend-design** — Bold aesthetics for AI-native interfaces
- **frontend-design** — shadcn/ui + Tailwind + React component generation

---

## Architecture

```
opencode-accomplishments/
├── docs/
│   └── index.html          # The entire showcase — single file, zero dependencies
├── scripts/
│   ├── local-sync-skills.sh # Local nightly sync script
│   └── sync-skills.sh       # GitHub Actions sync script (requires auth)
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions CI/CD — auto-deploy on push
├── SKILL.md                 # Skill documentation for reproducibility
├── README.md                # This file
└── vercel.json              # Vercel deployment config
```

### Single-File Philosophy

The entire showcase lives in `docs/index.html` — one file, zero build steps. All CSS, JavaScript, and structured data are inline. External dependencies (GSAP, Google Fonts) are loaded via CDN. This means:

- **GitHub Pages** — just serve the `docs/` folder
- **Vercel** — deploy the repo root, rewrite to `docs/index.html`
- **Any static host** — drop the file and go

---

## Skills by Category

### Design & UI (5 skills)
| Skill | Description | Accent |
|---|---|---|
| `ui-ux-pro-max-v7` | AI design intelligence — 60 styles, 48 palettes, 36 fonts, 24 industry rules | `#BFFF00` |
| `anthropic-frontend-design` | Bold aesthetics for AI-native interfaces, conversational UI, trust-forward design | `#BFFF00` |
| `gsap-animations` | Production-grade GSAP animation patterns — 24 patterns, ScrollTrigger, Flip | `#BFFF00` |
| `frontend-design` | shadcn/ui + Tailwind + React component generation | `#BFFF00` |
| `vercel-web-design-guidelines` | Accessibility-first UX rules and performance budgets | `#BFFF00` |

### Reasoning (4 skills)
| Skill | Description | Accent |
|---|---|---|
| `chain-of-thought` | Step-by-step reasoning framework for complex problems | `#08F7FE` |
| `socratic-method` | Strategic questioning to uncover assumptions and guide discovery | `#08F7FE` |
| `devils-advocate` | Argue against premises to strengthen arguments and prevent confirmation bias | `#08F7FE` |
| `simulation-sandbox` | Test scenarios in safe simulated environments | `#08F7FE` |

### Development (8 skills)
| Skill | Description | Accent |
|---|---|---|
| `mcp-builder` | Build MCP servers with TypeScript + Python | `#00FF9D` |
| `superpowers` | Spec-first development with TDD and sub-agent delegation | `#00FF9D` |
| `deployment-manager` | Deploy across GitHub Pages, Vercel, Netlify | `#00FF9D` |
| `browser-use` | Headful browser automation with natural language control | `#00FF9D` |
| `web-artifacts-builder` | Single-file HTML artifacts with React + Tailwind | `#00FF9D` |
| `vercel-react-best-practices` | Production-grade React architecture, SSR/SSG strategies | `#00FF9D` |
| `explained-code` | Beginner-friendly code explanation with analogies and diagrams | `#00FF9D` |
| `nvidia-build` | Build and run LLM inference via NVIDIA NIM API | `#00FF9D` |

### Content (4 skills)
| Skill | Description | Accent |
|---|---|---|
| `seo-content-writer` | SEO-optimized content with GEO optimization for AI answer engines | `#FF2E63` |
| `humanizer` | Strip AI writing patterns for human-like copy | `#FF2E63` |
| `social-media-manager` | Post generation for 30 days across LinkedIn, Twitter, Instagram, TikTok | `#FF2E63` |
| `social-content-pillars` | Monthly content calendar with 90-day editorial plan | `#FF2E63` |

### Strategy (4 skills)
| Skill | Description | Accent |
|---|---|---|
| `jtbd-research` | 8-step Jobs to be Done product research methodology | `#FFE600` |
| `gumroad-pipeline` | Lead magnet to funnel to product launch workflow | `#FFE600` |
| `feature-research` | Research existing architecture before implementing features | `#FFE600` |
| `skill-finder` | Skill discovery, evaluation, and installation meta-skill | `#FFE600` |

### System (6 skills)
| Skill | Description | Accent |
|---|---|---|
| `persistent-memory` | Structured memory system for agent context continuity | `#A8B2D8` |
| `system-prompt-sync` | Auto-sync AGENTS.md across all git repos | `#A8B2D8` |
| `feedback-loop` | Iterative improvement cycles from metrics to research | `#A8B2D8` |
| `context-compressor` | Compress long contexts preserving critical information | `#A8B2D8` |
| `agent-roles` | Unified multi-agent role system — Builder, Coder, Council, Orchestrator, etc. | `#A8B2D8` |
| `sample-hello-skill` | Hello-world demo skill for testing activation | `#A8B2D8` |

### Data & Web (5 skills)
| Skill | Description | Accent |
|---|---|---|
| `web-reader` | Web page extraction with crawling and spidering | `#64FFDA` |
| `audit-analyzer` | Detect and prioritize audit issues | `#64FFDA` |
| `web-design-guidelines` | Self-audit checklist for design consistency | `#64FFDA` |
| `code-research` | Research open-source repositories | `#64FFDA` |
| `explore` | Search a codebase efficiently without grep | `#64FFDA` |

### Creative (2 skills)
| Skill | Description | Accent |
|---|---|---|
| `photography-ai` | Professional visual engineering with batch processing and cinematic sequences | `#FF9FF3` |
| `output-formatter` | Strict formatting rules for all output types — JSON, tables, markdown | `#FF9FF3` |

---

## API Endpoints

The showcase doubles as a machine-readable API via URL parameters:

| Endpoint | Effect | Example |
|---|---|---|
| `?format=json` | Returns raw JSON with version, count, all skills | `?format=json` |
| `?format=manifest` | Returns JetBrains-style plugin.xml for AI IDE auto-discovery | `?format=manifest` |
| `?skill=<name>` | Auto-filters to matching skill name/tag | `?skill=gsap-animations` |
| `?category=<name>` | Auto-selects category chip | `?category=Development` |
| `?embed=true` | Strips hero, marquee, footer — just filter bar + grid for iframe embedding | `?embed=true` |
| `?palette=<hex>` | Overrides `--brand-primary` with any hex triplet; derives complementary + triadic | `?palette=FF2E63` |

### JSON Endpoint Example

```bash
curl "https://marktantongco.github.io/opencode-accomplishments?format=json"
```

Returns:
```json
{
  "version": "3.0.0",
  "lastUpdated": "2026-05-06",
  "count": 38,
  "skills": [...]
}
```

### Manifest Endpoint Example

```bash
curl "https://marktantongco.github.io/opencode-accomplishments?format=manifest"
```

Returns a JetBrains-style `plugin.xml` with all 38 skills listed as extensions — suitable for AI IDE auto-discovery.

### Embed Example

```html
<iframe
  src="https://marktantongco.github.io/opencode-accomplishments?embed=true"
  width="100%"
  height="600"
  frameborder="0">
</iframe>
```

---

## Design System

### Neo-Brutalist Gen Z v3.0

The showcase uses a custom neo-brutalist design system with the following principles:

- **Thick borders** (3px solid black) — no subtlety, no gradients on borders
- **Hard offset shadows** (0 blur, 4-6px offset) — brutalist, no softness
- **High-saturation accent colors** — electric lime, hot pink, cyber blue
- **Sticker badges** — rotated, bordered, shadowed labels
- **Glitch effects** — CSS clip-path animations on the hero title
- **Grain overlay** — SVG noise texture at 1.5% opacity
- **Grid background** — 60px grid lines at 4% opacity
- **Asymmetric layouts** — hero blocks, rotated elements, staggered reveals

### Color Palette

| Variable | Hex | Usage |
|---|---|---|
| `--brand-primary` | `#BFFF00` | Electric lime — accent, badges, progress bar |
| `--brand-secondary` | `#FF2E63` | Hot pink — CTA, hero text shadow, footer highlights |
| `--brand-tertiary` | `#08F7FE` | Cyber blue — API notice border, glitch pseudo-element |
| `--bg-base` | `#FFFFFF` | Page background |
| `--bg-surface` | `#F2F2ED` | Subtitle background, API notice |
| `--bg-elevated` | `#F5F5F0` | Card backgrounds, orbit badges |
| `--text-primary` | `#000000` | Headings, strong text — 21:1 on white (AAA) |
| `--text-secondary` | `#1F1F1F` | Body text — 15.4:1 on white (AAA) |
| `--text-muted` | `#555555` | Captions, footer — 7.5:1 on white (AA) |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display | Archivo Black | 900 |
| Body | Space Grotesk | 300-700 |
| Mono | Space Mono | 400, 700 |

### WCAG AA Compliance

All text meets WCAG AA contrast requirements (4.5:1 minimum):

- `--text-primary: #000000` — 21:1 on white (AAA)
- `--text-secondary: #1F1F1F` — 15.4:1 on white (AAA)
- `--text-muted: #555555` — 7.5:1 on white (AA)
- Marquee: lime text `#BFFF00` on black `#000000` — ~18.6:1 (AAA)
- No text uses `#BFFF00` on white backgrounds
- Footer lime highlights use black background pill for contrast

---

## Technical Stack

| Technology | Purpose |
|---|---|
| **Vanilla HTML/CSS/JS** | Zero framework — single file, zero build step |
| **GSAP 3.12.5** | Hero animations, ScrollTrigger, Flip plugin |
| **Web Components** | Custom `<skill-card>` element via `customElements.define` |
| **JSON-LD** | Schema.org `ItemList` + `SoftwareApplication` in `<head>` |
| **CSS Custom Properties** | Design tokens, palette endpoint, category accents |
| **Google Fonts** | Archivo Black, Space Grotesk, Space Mono via CDN |

---

## Deployment

### GitHub Pages

The `docs/` folder contains `index.html`. GitHub Pages is configured to serve from `/docs` on the `main` branch.

```bash
# Manual push
git add docs/
git commit -m "chore: update showcase v3.0.0"
git push origin main
```

### Vercel

The repo includes `vercel.json` which rewrites all routes to `docs/index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/docs/index.html" }]
}
```

Deploy with Vercel CLI:
```bash
vercel --prod --yes
```

### GitHub Actions CI/CD

The `.github/workflows/deploy.yml` workflow automatically:
1. Deploys to GitHub Pages on push to `main`
2. Triggers Vercel deployment via webhook

---

## Nightly Auto-Update

The showcase is designed as a **living standard** — a cron job can automatically pull the latest skills directory, regenerate the `SKILLS_DATA` array, bump the version, and deploy.

### Local Cron (crontab)

```bash
# 2 AM daily, Asia/Manila timezone
0 2 * * * bash /path/to/scripts/local-sync-skills.sh
```

### GitHub Actions Cron

The workflow also supports scheduled runs:

```yaml
on:
  schedule:
    - cron: '0 18 * * *'  # 2 AM Manila = 18:00 UTC
```

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 3.0.0 | 2026-05-06 | Neo-brutalist redesign, ?embed=true, ?palette= endpoint, WCAG AA compliance, marquee contrast fix |
| 2.0.0 | 2026-05-05 | Light-only theme, URL param filtering (?skill=, ?category=, ?format=json, ?format=manifest), Flip crash fix, const hoisting fix, duplicate function removal |
| 1.0.0 | 2026-05-04 | Initial showcase — 38 skills, glassmorphism design, dark/light toggle |

---

## Reusability

To rebrand this showcase for a different skill collection:

1. Replace the `SKILLS_DATA` array in `getSkillsDataRaw()`
2. Change CSS custom properties: `--brand-primary`, `--brand-secondary`, `--brand-tertiary`
3. Or use `?palette=FF2E63` to dynamically override all brand colors at runtime
4. Update `SKILLS_VERSION` and `SKILLS_LAST_UPDATED`
5. JSON-LD auto-generates from `SKILLS_DATA` — no manual editing

---

## Constraints

- **NEVER** use a build step — the file must open directly in any browser
- **NEVER** use placeholder text — all content must be real skill data
- **NEVER** duplicate skills across categories — one skill, one category (MECE principle)
- **NEVER** remove JSON-LD structured data from `<head>` — machine readability is a hard requirement
- **ALWAYS** include ARIA labels on interactive elements
- **ALWAYS** use thick borders (3px) and hard offset shadows (zero blur) — this is the neo-brutalist design system
- **ALWAYS** version the `SKILLS_DATA` array — the showcase is a living standard
- **ALWAYS** ensure WCAG AA contrast (4.5:1 minimum) on all text elements
- **NEVER** use electric lime (`#BFFF00`) on white backgrounds for text

---

## License

MIT

---

Built with **ui-ux-pro-max-v7** + **gsap-animations** + **anthropic-frontend-design** + **frontend-design**
