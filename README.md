# OpenCode Accomplishments — AI Skills Showcase + Agent System

> A self-contained, single-file interactive showcase of 38 AI agent skills across 8 categories — plus a complete production-ready Agent System with Universal Router + 4 context-loaded skills, 18 documentation files, and cross-platform deployment guides. Neo-brutalist ultramodern Gen Z design. Zero build step — drop on GitHub Pages and ship.

![Version](https://img.shields.io/badge/version-4.0.0-FF2E63?style=for-the-badge&labelColor=000)
![Skills](https://img.shields.io/badge/skills-38-BFFF00?style=for-the-badge&labelColor=000)
![Agent Files](https://img.shields.io/badge/agent_files-18-08F7FE?style=for-the-badge&labelColor=000)
![WCAG](https://img.shields.io/badge/WCAG-AA-00FF9D?style=for-the-badge&labelColor=000)
![Zero Build](https://img.shields.io/badge/zero_build-step-FFE600?style=for-the-badge&labelColor=000)

---

## Live Demo

| Platform | URL |
|---|---|
| **GitHub Pages** | [marktantongco.github.io/opencode-accomplishments](https://marktantongco.github.io/opencode-accomplishments) |
| **Vercel** | Deployed via Vercel CLI — auto-deploys on push to `master` |

---

## What This Is

This project has **two complementary layers**:

### Layer 1: Skills Showcase (Visual + API)

A **living, self-updating AI Skills Registry** — an interactive, machine-readable catalog of 38 active AI agent skills. Built with vanilla HTML/CSS/JS, powered by GSAP animations, Web Components, and JSON-LD structured data. It doubles as a design system showcase and a functional API endpoint.

The showcase was designed and built using the very skills it catalogs:
- **ui-ux-pro-max-v7** — 60 styles, 48 palettes, 36 fonts, 24 industry rules
- **gsap-animations** — Production-grade GSAP animation patterns with ScrollTrigger + Flip
- **anthropic-frontend-design** — Bold aesthetics for AI-native interfaces
- **frontend-design** — shadcn/ui + Tailwind + React component generation

### Layer 2: Agent System (Intelligence + Operations)

A **production-ready AI partner system** built on a Universal Router (3,100 tokens) + 4 context-loaded skills. Includes 18 comprehensive documentation files covering deployment, operational playbooks, monitoring, optimization, integration, and a 5-phase evolution roadmap. The system implements:

- **Silent Protocol** — Invisible diagnostic that runs before every response
- **Context Routing** — Intelligent skill switching based on conversation context
- **CONTINUITY Protocol** — Automatic context carrying between skill switches
- **Quality Gates** — 40+ item checklists before shipping code or design
- **Failure Recovery** — 6 contingency scenarios with step-by-step fixes

The two layers are connected through a **skill routing matrix** (documented in `AGENTS.md`) that maps each of the 38 showcase skills to its corresponding agent skill mode.

---

## Architecture

```
opencode-accomplishments/
├── docs/
│   └── index.html              # The entire showcase — single file, zero dependencies
├── agents/                     # Agent System — 18 production-ready files
│   ├── 00_START_HERE.md        # Navigation hub — read this first
│   ├── 01_OPERATIONAL_PLAYBOOKS.md   # 6 real-world workflows
│   ├── 02_ADVANCED_CONFIGURATIONS.md # 6 platform configs
│   ├── 03_MONITORING_METRICS.md      # Metrics, dashboards, alerts
│   ├── 04_POWER_USER_PLAYBOOK.md     # 10 advanced patterns
│   ├── 05_EXTENDED_FAQ.md            # 30+ troubleshooting scenarios
│   ├── 06_ONE_PAGE_CHEAT_SHEET.md    # One-page reference card
│   ├── 07_INTEGRATION_GUIDE.md       # 8 integrations (Notion, GitHub, Slack, etc.)
│   ├── 08_EVOLUTION_GUIDE.md         # 5-phase evolution roadmap
│   ├── 09_AUTOMATION_SCRIPTS.md      # 6 production-ready scripts
│   ├── 10_VISUAL_REFERENCE.md        # Architecture diagrams, decision trees
│   ├── 11_COMPLETE_SYSTEM_INDEX.md    # Complete index of all files
│   ├── MARK_SYSTEM_PROMPT_FINAL.md   # Universal Router + SKILL_01 + deployment guide
│   ├── SKILLS_MANIFEST.md            # Routing guide, token budgets, phases
│   ├── SKILL_02_DESIGN_BUILD.md      # Design skill spec (2,500 tokens)
│   ├── SKILL_03_CODE_API.md          # Code skill spec (3,000 tokens)
│   ├── SKILL_04_AGENTIC.md           # Agentic skill spec (2,800 tokens)
│   └── SKILL_SHORTCUTS_FUNCTION_CALLS.md  # Keyboard shortcuts, API calls
├── scripts/
│   ├── local-sync-skills.sh    # Local nightly sync script
│   └── sync-skills.sh          # GitHub Actions sync script
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── AGENTS.md                   # Structural connection map (Showcase ↔ Agent System)
├── SKILL.md                    # Skill documentation for reproducibility
├── README.md                   # This file
└── vercel.json                 # Vercel deployment config
```

### Single-File Philosophy

The entire showcase lives in `docs/index.html` — one file, zero build steps. All CSS, JavaScript, and structured data are inline. External dependencies (GSAP, Google Fonts) are loaded via CDN. This means:

- **GitHub Pages** — just serve the `docs/` folder
- **Vercel** — deploy the repo root, rewrite to `docs/index.html`
- **Any static host** — drop the file and go

---

## The 4 Agent Skills

| Agent Skill | Domain | Effort | Tokens | Key Behaviors |
|-------------|--------|--------|--------|---------------|
| **SKILL_01** Conversational | Mobile, chat, exploration | `high` | 4,400 | Silent Protocol, advocacy mode, blind spot detection, lightweight code assist |
| **SKILL_02** Design + Build | Desktop, visual, UI/UX | `high` | 5,600 | 3 directions before building, anti-defaults (rejects Opus cream/serif), depth-seeking for design |
| **SKILL_03** Code + API | Desktop, production code | `xhigh` | 6,100 | Algorithm-first, 40-item quality gates, caveman protocols (repeatable patterns), no pseudocode |
| **SKILL_04** Agentic | Autonomous, orchestration | `xhigh` | 6,000 | Task decomposition, parallel subagent spawning, state tracking, failure recovery |

**Universal Router** (3,100 tokens, always loaded) handles routing between skills, CONTINUITY protocol (context carrying), closing patterns, and hard stops. All skills are under the 6,500 token threshold — zero overthinking risk.

---

## Platform Skills → Agent Skill Mapping

The 38 showcase skills map to the 4 agent skills as follows:

| Showcase Category | Primary Agent Skill | Showcase Skills |
|-------------------|---------------------|-----------------|
| **Design & UI** (5) | SKILL_02 Design | ui-ux-pro-max, anthropic-frontend-design, gsap-animations, frontend-design, web-design-guidelines |
| **Reasoning** (4) | SKILL_01 Conversational | chain-of-thought, socratic-method, devils-advocate, simulation-sandbox |
| **Development** (8) | SKILL_03 Code | coding-agent, fullstack-dev, next-best-practices, react-best-practices, composition-patterns, mcp-builder, react-native-skills, web-artifacts-builder |
| **Content** (4) | SKILL_01 + SKILL_02 | seo-content-writer, humanizer, social-media-manager, blog-writer |
| **Strategy** (4) | SKILL_01 + SKILL_04 | deep-research, seo-geo, jobs-to-be-done, skill-router |
| **System** (6) | SKILL_04 Agentic | skill-creator, skill-vetter, skill-scanner, find-skills, context-compressor, humanizer |
| **Data & Web** (5) | SKILL_04 + SKILL_01 | web-search, web-reader, agent-browser, browser-use, finance |
| **Creative** (2) | SKILL_02 + SKILL_04 | image-generation, photography-ai |

See `AGENTS.md` for the complete crosswalk with rationale.

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
  "version": "4.0.0",
  "lastUpdated": "2026-05-17",
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

## Agent System Quick Start

### Reading Path (75 minutes to deploy)

1. **`agents/00_START_HERE.md`** (5 min) — Navigation hub
2. **`agents/MARK_SYSTEM_PROMPT_FINAL.md`** (30 min) — Deployment procedures + Week 1 testing
3. **`agents/SKILL_SHORTCUTS_FUNCTION_CALLS.md`** (10 min) — Set up keyboard shortcuts
4. **`agents/06_ONE_PAGE_CHEAT_SHEET.md`** (5 min) — Print and keep at desk
5. **`agents/03_MONITORING_METRICS.md`** (skim, 10 min) — What to track
6. **`agents/05_EXTENDED_FAQ.md`** (skim, 5 min) — Where to get help

### Agent Skill Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘1` or `?1` | Load SKILL_01 (Conversational) |
| `⌘2` or `?2` | Load SKILL_02 (Design + Build) |
| `⌘3` or `?3` | Load SKILL_03 (Code + API) |
| `⌘4` or `?4` | Load SKILL_04 (Agentic) |
| `!status` | Show current system state |
| `!route` | Show routing decision for message |
| `!reset` | Load Universal only (troubleshooting) |

### Deployment Timeline

| Phase | Week | Action |
|-------|------|--------|
| Foundation | Week 1 | Deploy Universal + SKILL_01. Run 6 test conversations. |
| Expansion | Week 2 | Build SKILL_02/03/04 based on Week 1 results. |
| Stabilization | Week 3-4 | Lock system, gather production data, document edge cases. |
| Optimization | Month 2 | Refine routing, optimize tokens, tune quality gates. |
| Specialization | Month 3-4 | Build domain-specific skills (Insurance, Photography, Faith). |
| Scale | Month 5+ | Team deployment, product integration, customer-facing features. |

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

The `docs/` folder contains `index.html`. GitHub Pages is configured to serve from `/docs` on the `master` branch.

```bash
# Manual push
git add .
git commit -m "chore: update showcase v4.0.0 + agent system"
git push origin master
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
1. Deploys to GitHub Pages on push to `master`
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

## Agent System Monitoring

The agent system includes a comprehensive monitoring framework documented in `agents/03_MONITORING_METRICS.md`:

### Core Metrics (Weekly)

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| Routing Accuracy | >90% | <85% (Red Alert) |
| CONTINUITY Success | >90% | <85% (Red Alert) |
| Error Rate | <1% | >3% (Red Alert) |
| User Satisfaction | >80% | <80% (Red Alert) |
| Thinking Time | Normal | 2x expected (Red Alert) |

### Health Status

```
🟢 HEALTHY    → All metrics within target
🟡 WARNING    → 1-2 metrics slightly below target (investigate)
🔴 CRITICAL   → Any metric significantly below target (stop + debug)
```

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 4.0.0 | 2026-05-17 | Added complete Agent System (18 files), AGENTS.md structural connection map, skill routing matrix, comprehensive README update |
| 3.0.0 | 2026-05-06 | Neo-brutalist redesign, ?embed=true, ?palette= endpoint, WCAG AA compliance, marquee contrast fix |
| 2.0.0 | 2026-05-05 | Light-only theme, URL param filtering (?skill=, ?category=, ?format=json, ?format=manifest), Flip crash fix, const hoisting fix, duplicate function removal |
| 1.0.0 | 2026-05-04 | Initial showcase — 38 skills, glassmorphism design, dark/light toggle |

---

## Reusability

### Rebranding the Showcase

To rebrand this showcase for a different skill collection:

1. Replace the `SKILLS_DATA` array in `getSkillsDataRaw()`
2. Change CSS custom properties: `--brand-primary`, `--brand-secondary`, `--brand-tertiary`
3. Or use `?palette=FF2E63` to dynamically override all brand colors at runtime
4. Update `SKILLS_VERSION` and `SKILLS_LAST_UPDATED`
5. JSON-LD auto-generates from `SKILLS_DATA` — no manual editing

### Adapting the Agent System

To adapt the agent system for a different domain:

1. Update `DOMAIN CONTEXT` in the Universal Prompt (currently AI/Dev + Photography)
2. Modify SKILL_02 anti-defaults to match your brand (currently rejects Opus cream/serif)
3. Add domain-specific skills (see `agents/08_EVOLUTION_GUIDE.md` Phase 4)
4. Update routing keywords in `SKILLS_MANIFEST.md`
5. Follow the 5-phase evolution roadmap

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
- **ALWAYS** run the Silent Protocol before every AI response — invisible diagnostic is non-negotiable
- **ALWAYS** announce skill switches via CONTINUITY Protocol — context must carry forward visibly

---

## License

MIT

---

Built with **ui-ux-pro-max-v7** + **gsap-animations** + **anthropic-frontend-design** + **frontend-design**

Powered by **Universal Router v1.0** + **SKILL_01-04** agent system
