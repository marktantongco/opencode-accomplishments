# opencode-accomplishments

## Dual-Page AI Agent Skills + MCP Directory + Agent Modes + Dev Journey

A two-page interactive static site showcasing an AI agent ecosystem: **48 skills** across 10 categories, **7 cognitive Agent Modes**, **8 pre-built MCP stacks**, a curated registry of **105+ free MCP servers**, and a full **interactive dev journey timeline**.

---

### Live Demo

| Platform | URL |
|----------|-----|
| **Skills Showcase** | [agentskills.io/showcase](https://agentskills.io/showcase) |
| **GitHub Pages** | [marktantongco.github.io/opencode-accomplishments](https://marktantongco.github.io/opencode-accomplishments/) |
| **Vercel** | [opencode-accomplishments.vercel.app](https://opencode-accomplishments.vercel.app/) |

---

### Version History

| Version | Date | Changes |
|---------|------|---------|
| **v6.0.0** | 2026-05-26 | Added **interactive accomplishments page** (`accomplishments.html`) with data-driven skills, debounced search, GSAP/ScrollTrigger animations, light/dark theme toggle, scroll progress bar, keyboard navigation, animated stat counters, skeleton loading states, empty state, and cross-page nav banner on both pages. Fixed CSS `var()` bug in inline JS hover handlers. |
| **v5.0.0** | 2026-05-19 | Added 7 Agent Modes (Rabbit, Owl, Ant, Eagle, Dolphin, Beaver, Elephant) with `#FF6B35` accent. Fixed `substr()` deprecation, added robots meta + favicon. 41→48 skills, 9→10 categories |
| **v4.0.0** | 2026-05-19 | Added MCP Servers category (4 skills). Removed nvidia-build. Added stacks.json + mcp-registry.json. 38→41 skills, 8→9 categories |
| **v3.0.0** | 2026-05-06 | Neo-brutalist redesign, GSAP 3, Web Components, JSON-LD, URL endpoints, embed mode, palette API |

---

## Page 1: Skills Showcase (`index.html`)

The main landing page — an interactive, neo-brutalist gallery of all 48 AI agent skills with Web Component `<skill-card>` elements, GSAP animations, and JSON-LD structured data for AI agent discovery.

### Features
- **48 interactive skill cards** across 10 categories with color-coded tags
- **Category filtering** — click to filter by Design, Development, Strategy, etc.
- **Live search** with debounced input
- **URL API endpoints** — `?category=`, `?skill=`, `?format=json`, `?format=manifest`, `?embed=true`, `?palette=`
- **Web Components** — Shadow-free `<skill-card>` custom elements
- **GSAP 3.12.5** — Hero orbit animations, ScrollTrigger reveals, Flip for category transitions
- **JSON-LD** — Machine-readable `ItemList` of all 48 skills for search engines and AI crawlers
- **Neo-brutalist design** — Thick borders, hard offset shadows, high-saturation colors, glitch effects, grain overlay, asymmetric layouts, Y2K chrome accents
- **100% static** — Zero build step, zero dependencies, deploy anywhere

### URL Endpoints (index.html)

| Endpoint | Description |
|----------|-------------|
| `?format=json` | Raw JSON of all 48 skills |
| `?format=manifest` | JetBrains-style plugin.xml for IDE auto-discovery |
| `?category=Agent Modes` | Filter by category on load |
| `?category=MCP Servers` | Filter by MCP category |
| `?skill=rabbit-multiply-ideas` | Auto-filter to a specific skill |
| `?embed=true` | iframe-ready mode (strips hero/footer/marquee) |
| `?palette=FF2E63` | Live theme generation from any hex color |

---

## Page 2: Accomplishments (`accomplishments.html`)

An interactive portfolio timeline documenting the fullstack dev journey — skills created, configuration, terminal sessions, and agent workflow. Built as a tabbed single-page application with data-driven interactivity.

### Features

| Feature | Detail |
|---------|--------|
| **Tab Navigation** | Overview / Timeline / Skills Built / Config / Terminal / Agent Flow |
| **Animated Stats** | Custom `requestAnimationFrame` counters with cubic ease-out — lines of system prompt, skills created, activation scripts, config files |
| **Data-Driven Skills** | 19 skills rendered from JS array with **debounced live search** across name, description, category, and tag |
| **GSAP + ScrollTrigger** | Staggered timeline reveals, agent flow step animations, stat card scale-ins, config/terminal fade-ups — all respecting `prefers-reduced-motion: reduce` |
| **Light/Dark Theme** | Toggle persisted via `localStorage`, smooth CSS custom property transitions |
| **Scroll Progress Bar** | Fixed top gradient bar showing reading progress |
| **Scroll-to-Top Button** | Appears after 400px scroll |
| **Keyboard Navigation** | `/` to focus search, `←`/`→` to switch tabs, `Escape` to blur, `Home`/`End` for first/last tab |
| **Skeleton Loading** | Shimmer placeholder cards replaced by JS-rendered skill grid |
| **Empty State** | Friendly "No Skills Match" message with clear search button when filter returns zero results |
| **Copy-to-Clipboard** | Code block copy button with visual feedback |
| **Responsive** | Full mobile layout at 768px and 480px breakpoints |

### Accessibility
- Semantic `<main>`, `<nav>`, `<section>` landmarks with `role` and `aria-` attributes
- `aria-current="page"` on active tab and current page indicator
- `aria-selected` and `tabindex` management for tabpanel pattern
- `focus-visible` outlines on all interactive elements
- Screen reader labels on icon-only buttons (theme toggle, scroll-to-top, copy)
- Hidden decorative elements with `aria-hidden="true"`

---

## Cross-Page Navigation

Both pages include a persistent navigation banner at the top linking to:
- **Skills Showcase** (`index.html`)
- **Accomplishments** (`accomplishments.html`)
- **MCP Stacks** (`stacks.json`)
- **MCP Registry** (`mcp-registry.json`)

The current page is highlighted with `aria-current="page"` and a distinct color treatment.

---

### 48 Skills Across 10 Categories

| Category | Color | Count | Skills |
|----------|-------|-------|--------|
| **Design & UI** | `#BFFF00` | 5 | ui-ux-pro-max-v7, anthropic-frontend-design, gsap-animations, frontend-design, vercel-web-design-guidelines |
| **Reasoning** | `#08F7FE` | 4 | chain-of-thought, socratic-method, devils-advocate, simulation-sandbox |
| **Development** | `#00FF9D` | 7 | mcp-builder, superpowers, deployment-manager, browser-use, web-artifacts-builder, vercel-react-best-practices, explained-code |
| **Content** | `#FF2E63` | 4 | seo-content-writer, humanizer, social-media-manager, social-content-pillars |
| **Strategy** | `#FFE600` | 4 | jtbd-research, gumroad-pipeline, feature-research, skill-finder |
| **System** | `#A8B2D8` | 6 | persistent-memory, system-prompt-sync, feedback-loop, context-compressor, agent-roles, sample-hello-skill |
| **Data & Web** | `#64FFDA` | 5 | web-reader, audit-analyzer, web-design-guidelines, code-research, explore |
| **Creative** | `#FF9FF3` | 2 | photography-ai, output-formatter |
| **MCP Servers** | `#C77DFF` | 4 | pictoflux-ai, mcp-stack-curator, mcp-registry, mcp-security-scanner |
| **Agent Modes** | `#FF6B35` | 7 | rabbit-multiply-ideas, owl-deep-analysis, ant-break-into-steps, eagle-big-picture, dolphin-creative-solutions, beaver-build-systems, elephant-cross-field |

---

### Agent Modes — Cognitive Thinking Framework

| Mode | Emoji | Thinking Style | Best For |
|------|-------|----------------|----------|
| **Rabbit** | 🐇 | Multiply Ideas | Brainstorming variations, generating 10 different angles/audiences/formats from one idea |
| **Owl** | 🦉 | Deep Analysis | Slow, observant, multi-perspective analysis to uncover hidden factors others miss |
| **Ant** | 🐜 | Break Into Steps | Decomposing complex goals into the smallest realistically completable actions |
| **Eagle** | 🦅 | Big Picture Strategy | Long-term strategic thinking, seeing how all the pieces connect from above |
| **Dolphin** | 🐬 | Creative Solutions | Playful, inventive approaches that break conventional thinking patterns |
| **Beaver** | 🦫 | Build Systems | Designing practical, step-by-step systems and processes that solve problems |
| **Elephant** | 🐘 | Cross-Field Connections | Applying insights from psychology, economics, science, and history to current challenges |

---

### 8 Pre-Built MCP Stacks

| Stack | Servers | Best For |
|-------|---------|----------|
| **Creative Studio** | PictoFlux AI + Figma + Filesystem + Memory | Design agencies, content creators |
| **Research Engine** | Brave Search + Fetch + Arxiv + Memory | Researchers, analysts |
| **Full-Stack Dev** | GitHub + Postgres + Filesystem + Sequential Thinking | Developers, startups |
| **Content Machine** | Brave Search + PictoFlux AI + Filesystem + Memory | Content marketers, bloggers |
| **Data Pipeline** | Postgres + Fetch + Filesystem + SQLite | Data engineers, analysts |
| **Security Audit** | GitHub + Filesystem + Sequential Thinking + Brave Search | Security engineers, DevOps |
| **Agent OS** | Memory + Sequential Thinking + Filesystem + Brave Search | AI researchers, agent builders |
| **Product Launch** | Brave Search + PictoFlux AI + GitHub + Memory | Indie hackers, founders |

**Stack Synergy Rules:**
- Always combine: Memory MCP + any server, Filesystem + artifact-producing servers
- Never combine: Postgres + Supabase (database conflict), two web search servers simultaneously
- Conditional: GitHub + GitLab (only if repos on both platforms)

---

### MCP Server Registry

105+ free MCP servers across 14 categories, sourced from 10+ directories including PulseMCP, MCP.so, Glama.ai, and Smithery.

**Categories:** Web Search, Database, File Operations, Knowledge & Memory, Image Generation, Code Repository, Communication, Productivity, Reasoning, Design Tools, Cloud, Academic Research, Social Media, Monitoring

Full registry: [`mcp-registry.json`](./mcp-registry.json)

---

### Technical Architecture

#### Skills Showcase (`index.html`)
- **Design System:** Neo-Brutalist Ultramodern Gen Z v5.0 — thick borders, hard offset shadows, WCAG AA contrast, monospace + display typography, glitch effects, grain overlay
- **GSAP 3.12.5** — Animations, ScrollTrigger, Flip plugin for layout transitions
- **Web Components** — Custom `<skill-card>` element with shadow-free DOM
- **JSON-LD** — Machine-readable `ItemList` in `<head>` for search engine and AI agent discovery
- **CSS Custom Properties** — Dynamic theming via `?palette=` endpoint

#### Accomplishments (`accomplishments.html`)
- **Design System:** Dark cyber aesthetic with neon accents (lime `#BFFF00`, cyan `#08F7FE`, magenta `#FF2E63`) with optional light theme
- **GSAP 3.12.5 + ScrollTrigger** — Staggered timeline reveals, agent flow steps, stat card animations
- **Data-Driven JS** — Skills rendered from `SKILLS_DATA` array with debounced live filtering
- **CSS Custom Properties** — Full light/dark theme via `[data-theme="light"]` attribute, persisted in `localStorage`
- **Custom Animation Engine** — `requestAnimationFrame` stat counters with cubic ease-out (no external dependency)
- **Tabpanel ARIA Pattern** — Full keyboard accessibility with `aria-selected`, `tabindex`, `role="tablist"`

#### Both Pages
- **Zero Build Step** — Single-file HTML (×2), no Node.js, no bundler, deploy anywhere
- **CDN Assets** — GSAP via cdnjs, Tailwind CSS via CDN (index.html), Google Fonts (Space Grotesk + Space Mono + Archivo Black)
- **Responsive** — Mobile-first layouts with 768px and 480px breakpoints

---

### Project Structure

```
opencode-accomplishments/
├── index.html               # Skills Showcase (v6.0.0, 48 skills, GSAP, Web Components)
├── accomplishments.html     # Dev Journey Timeline (v6.0.0, data-driven, GSAP, theme toggle)
├── stacks.json              # 8 pre-built MCP stacks with synergy analysis
├── mcp-registry.json        # 105+ free MCP servers, 14 categories
├── vercel.json              # Vercel deployment config (static, headers)
├── AGENTS.md                # Agent operating instructions (261-line system prompt)
├── SKILLS.md                # Skill documentation
├── PLUGINS.md               # Plugin manifest docs
├── agents/                  # Agent skill definitions
│   ├── SKILLS_MANIFEST.md   # Complete skills manifest
│   ├── SKILL_02_DESIGN_BUILD.md
│   ├── SKILL_03_CODE_API.md
│   ├── SKILL_04_AGENTIC.md
│   └── ...
├── skills/                  # Individual skill specifications
│   ├── context-compressor/
│   ├── ui-ux-pro-max-v7/
│   ├── gsap-animations/
│   ├── mcp-builder/
│   └── ...
├── profiles/                # Agent profiles
├── workflows/               # Workflow definitions
└── README.md                # This file
```

---

### Deployment

Both pages are deployed to **GitHub Pages** (via GitHub Actions) and **Vercel** (via Vercel CLI / Git integration).

| Platform | Trigger | Config |
|----------|---------|--------|
| **GitHub Pages** | Push to `main`/`master` | `.github/workflows/deploy.yml` |
| **Vercel** | Push to `main` | `vercel.json` (static, clean URLs, security headers) |

The `vercel.json` config rewrites all routes to `index.html` for SPA-like URL handling.

---

### Contributing

**Add an Agent Mode:**
1. Fork → add mode to `getSkillsDataRaw()` in `index.html` under `// Agent Modes` section
2. Include: name (format: `animal-verb-noun`), emoji icon, description, invoke trigger, tags, accent `#FF6B35`
3. Add corresponding JSON-LD entry with next position number
4. Update `numberOfItems` and all count references
5. Submit PR

**Add an MCP server:**
1. Fork → add server to `mcp-registry.json` under correct category
2. Include: name, package, description, url, free, downloads, rating, sources
3. Submit PR

**Add a pre-built stack:**
1. Fork → add stack to `stacks.json` (must have exactly 4 servers + synergy/mismatch analysis)
2. All servers must be free and publicly available
3. Submit PR

**Criteria:** Free, publicly available, working URL, no duplicates, passes security scan.

---

### License

MIT

---

Built with **ui-ux-pro-max-v7** + **gsap-animations** + **anthropic-frontend-design** + **frontend-design** — 48 skills — 10 categories — 7 Agent Modes — 2 pages — v6.0.0
