# OpenCode Accomplishments — AI Skills Showcase + Agent System + MCP Ecosystem

> A self-contained, single-file **Progressive Web App** and interactive showcase of **76 AI agent skills** across **11 categories** — plus a complete production-ready Agent System with Universal Router + 4 context-loaded skills, 18 documentation files, **145 MCP servers** in a searchable registry across 15 categories, **9 pre-built MCP stacks** with synergy scoring (incl. Unified AI Gateway at 96% synergy), an interactive MCP Stack Curator, a Theme Marketplace with 6 named themes, a Your Stack Recommender engine, an Animation Pipeline with orchestrator gate + auditor, a Three.js Orchestrator with r3f-react routing, a 7-agent MASTER pipeline, a Skill Architect, ModelScope MCP Hub (2300+ free Chinese servers), and Context7 always-current docs. Premium modern design (Playfair Display + Inter, indigo/parchment palette, soft shadows) with dark mode + `prefers-reduced-motion` support. **Installable, offline-capable, standalone mode**. Zero build step — drop on GitHub Pages and ship.

![Version](https://img.shields.io/badge/version-13.0.0-6366f1?style=for-the-badge&labelColor=000)
![PWA](https://img.shields.io/badge/PWA-installable-4338ca?style=for-the-badge&labelColor=000)
![Skills](https://img.shields.io/badge/skills-76-4338ca?style=for-the-badge&labelColor=000)
![MCP Servers](https://img.shields.io/badge/mcp_servers-145-ea580c?style=for-the-badge&labelColor=000)
![Agent Files](https://img.shields.io/badge/agent_files-18-059669?style=for-the-badge&labelColor=000)
![Stacks](https://img.shields.io/badge/mcp_stacks-9-6366f1?style=for-the-badge&labelColor=000)
![Dark Mode](https://img.shields.io/badge/dark_mode-auto-8b5cf6?style=for-the-badge&labelColor=000)
![WCAG](https://img.shields.io/badge/WCAG-AA-059669?style=for-the-badge&labelColor=000)
![Performance](https://img.shields.io/badge/perf-100%2F100-ca8a04?style=for-the-badge&labelColor=000)
![Zero Build](https://img.shields.io/badge/zero_build-step-ca8a04?style=for-the-badge&labelColor=000)

---

## Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | **76 AI Skills / 11 Categories** | Complete interactive catalog with search, filter, and MCP server pairings |
| 2 | **Progressive Web App** | Installable, offline support, standalone display mode, service worker caching |
| 3 | **Premium Modern Design** | Playfair Display + Inter typography, indigo/parchment palette, soft shadows |
| 4 | **Dark Mode** | System preference detection with manual toggle, persists across sessions |
| 5 | **Theme Marketplace** | 6 named themes (midnight, sunset, forest, ocean, cyberpunk, neon) via `?theme=` |
| 6 | **MCP Stack Curator** | Interactive builder with synergy scoring and conflict detection |
| 7 | **Your Stack Recommender** | Select 3–5 skills → get optimal MCP stack + agent mode pairing |
| 8 | **Skill Preview Modal** | Double-click any skill card for detailed preview with MCP pairings |
| 9 | **Animation Pipeline** | Orchestrator Gate routes Motion vs GSAP vs CSS with pre-commit audits |
| 10 | **Three.js Orchestrator** | Gates all 3D work — routes r3f-react vs vanilla vs Babylon.js |
| 11 | **7-Agent MASTER Pipeline** | DECISION → SIMULATOR → IMPLEMENTATION → AUDITOR → PROFILER → OPTIMIZER → MAINTENANCE |
| 12 | **ModelScope MCP Hub** | 2300+ free Chinese MCP servers with hosted deployment |
| 13 | **Context7 Always-Current Docs** | Version-specific API documentation for any library, fetched on demand |
| 14 | **JSON-LD Structured Data** | Machine-readable schema for every skill — SEO + AI discoverable |
| 15 | **URL API** | `?format=json`, `?theme=cyberpunk`, `?embed=true`, `?skill=gsap`, `?category=Development` |
| 16 | **Keyboard Shortcuts** | `/` focus search, `Esc` close modals, arrow keys navigate categories |
| 17 | **WCAG AA Compliant** | Full accessibility: focus rings, ARIA labels, reduced motion, contrast ratios |
| 18 | **Zero Build Step** | Single HTML file, no bundler, no Node.js — drop and ship |
| 19 | **GitHub Pages + Vercel** | Dual deployment with clean URLs and auto-redirects |

---

## Progressive Web App

The showcase is now a **Progressive Web App** — install it like a native app and use it offline.

| Capability | Status | Details |
|------------|--------|---------|
| **Installable** | ✅ | Add to Home Screen / Install App prompt on supported browsers |
| **Offline Support** | ✅ | Service worker caches the full showcase for offline access |
| **Standalone Mode** | ✅ | Runs in its own window without browser chrome when installed |
| **Auto-Update** | ✅ | Service worker updates in the background when new versions deploy |
| **App Manifest** | ✅ | `manifest.json` with icons, theme color, display mode, start URL |

### How to Install

1. **Desktop (Chrome/Edge):** Click the install icon (⊕) in the address bar, or click **Menu → Install App**
2. **Android (Chrome):** Tap the "Add to Home Screen" banner, or **Menu → Install App**
3. **iOS (Safari):** Tap **Share → Add to Home Screen**
4. **After install:** The app opens in standalone mode (no browser chrome) and works offline

Once installed, the app syncs updates automatically in the background — you'll always have the latest skills and MCP data.

---

## Live Demo

| Platform | URL |
|---|---|
| **GitHub Pages** | [marktantongco.github.io/opencode-accomplishments](https://marktantongco.github.io/opencode-accomplishments) |
| **Vercel** | [opencode-accomplishments.vercel.app](https://opencode-accomplishments.vercel.app) |

---

## What This Is

This project has **three complementary layers** connected through a skill-agent-MCP synergy matrix:

### Layer 1: Skills Showcase (Visual + API + MCP Curator)

A **living, self-updating AI Skills Registry** — an interactive, machine-readable catalog of 76 active AI agent skills across 11 categories. Premium modern design (Playfair Display + Inter typography, indigo/parchment palette, soft shadows, scroll reveal animations) with GSAP animations, Web Components, JSON-LD structured data, MCP server pairings per skill, an interactive MCP Stack Curator, a Theme Marketplace with 6 named themes via `?theme=` URL params, and a Your Stack Recommender engine. Respects `prefers-reduced-motion`. Includes the Animation Pipeline (orchestrator + motion-animator + gsap-animator + auditor + hybrid-architect), Three.js Orchestrator (gates all 3D work), Skill Architect (create/optimize SKILL.md files), ModelScope MCP Hub (2300+ free Chinese MCP servers), and Context7 Docs (always-current API documentation). **Now a Progressive Web App** — installable, offline-capable, standalone mode.

### Layer 2: Agent System (Intelligence + Operations)

A **production-ready AI partner system** built on a Universal Router (3,100 tokens) + 4 context-loaded skills (SKILL_01 through SKILL_04). Includes 18 comprehensive documentation files covering deployment, operational playbooks, monitoring, optimization, integration, and a 5-phase evolution roadmap. Extended with a 7-agent MASTER pipeline (DECISION, SIMULATOR, IMPLEMENTATION, AUDITOR, PROFILER, OPTIMIZER, MAINTENANCE) that orchestrates complex multi-step tasks with quality gates at every stage.

### Layer 3: MCP Ecosystem (Servers + Stacks + Curator)

A **curated MCP server directory and stack recommendation engine** — 145 free MCP servers across 15 categories in `mcp-registry.json` (now including ModelScope curated servers with free hosted deployment, Context7 documentation fetching, Xiyan NL2SQL, Gaode Maps, and MinerU document parsing), 9 pre-built MCP stacks in `stacks.json` with synergy scores and conflict detection (including the new Unified AI Gateway stack at 96% synergy), and an interactive MCP Stack Curator in the showcase with a "Build Your Own" feature.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vanilla HTML/CSS/JS** | — | Zero build step, single-file architecture |
| **GSAP** | 3.12.5 | ScrollTrigger, timeline animations, SVG morphing |
| **Web Components** | Native | Custom elements for skill cards, modals, theme switcher |
| **Service Worker** | Native | Offline caching, background sync, PWA lifecycle |
| **CSS Custom Properties** | Native | Theme system, dark mode, runtime palette switching |
| **IntersectionObserver** | Native | Scroll-reveal animations, lazy loading |
| **JSON-LD** | Schema.org | Structured data for every skill — SEO + AI discoverable |

No frameworks. No bundlers. No Node.js. One HTML file, zero dependencies.

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
│   ├── 07_INTEGRATION_GUIDE.md       # 8 integrations
│   ├── 08_EVOLUTION_GUIDE.md         # 5-phase evolution roadmap
│   ├── 09_AUTOMATION_SCRIPTS.md      # 6 production-ready scripts
│   ├── 10_VISUAL_REFERENCE.md        # Architecture diagrams
│   ├── 11_COMPLETE_SYSTEM_INDEX.md   # Complete index of all files
│   ├── MARK_SYSTEM_PROMPT_FINAL.md   # Universal Router + SKILL_01
│   ├── SKILLS_MANIFEST.md            # Routing guide, token budgets
│   ├── SKILL_02_DESIGN_BUILD.md      # Design skill spec
│   ├── SKILL_03_CODE_API.md          # Code skill spec
│   ├── SKILL_04_AGENTIC.md           # Agentic skill spec
│   └── SKILL_SHORTCUTS_FUNCTION_CALLS.md  # Shortcuts, API calls
├── skills/                     # Specialized skill directories
│   ├── animation-orchestrator/ # Routes ALL animation requests (Motion vs GSAP vs CSS)
│   ├── animation-auditor/      # Pre-commit quality gates for animation code
│   ├── motion-animator/        # React UI animations with Motion (2.3KB-34KB)
│   ├── gsap-animator/          # Complex timeline/scroll/SVG animations with GSAP
│   ├── agent-master/           # Orchestrates 7-agent pipeline
│   ├── agent-decision/         # Decides IF and WHAT to animate/animate
│   ├── agent-simulator/        # Traces all interactions + edge cases
│   ├── agent-implementation/   # Writes the code
│   ├── agent-auditor/          # Validates against standards
│   ├── agent-profiler/         # Finds ACTUAL bottlenecks
│   ├── agent-optimizer/        # Applies targeted fixes
│   ├── agent-maintenance/      # Monitors production
│   └── skill-architect/        # Create/optimize SKILL.md files
├── stacks.json                 # 9 pre-built MCP stacks with synergy scoring
├── mcp-registry.json           # 145 free MCP servers across 15 categories
├── scripts/
│   ├── local-sync-skills.sh    # Local nightly sync script
│   └── sync-skills.sh          # GitHub Actions sync script
├── AGENTS.md                   # Structural connection map (Skills ↔ Agents ↔ MCP)
├── SKILL.md                    # Skill documentation for reproducibility
├── README.md                   # This file
└── vercel.json                 # Vercel deployment config
```

---

## Skills by Category (76 skills / 11 categories)

### Design & UI (9 skills) — accent: `#4338ca`
| Skill | Description | MCP Servers |
|---|---|---|
| `ui-ux-pro-max-v7` | AI design intelligence — 60 styles, 48 palettes, 36 fonts, 24 industry rules | filesystem, fetch, google-drive |
| `anthropic-frontend-design` | Bold aesthetics for AI-native interfaces, conversational UI | filesystem, fetch, google-drive |
| `gsap-animations` | Production-grade GSAP animation patterns — 24 patterns | filesystem, fetch, google-drive |
| `animation-orchestrator` | Routes ALL animation work — Motion vs GSAP vs CSS decision gate | filesystem, fetch, google-drive |
| `animation-auditor` | Pre-commit quality gates for animation code | filesystem, github, docker |
| `motion-animator` | React UI animations with Motion (2.3KB-34KB) | filesystem, fetch, google-drive |
| `gsap-animator` | Complex timeline/scroll/SVG animations with GSAP | filesystem, fetch, google-drive |
| `frontend-design` | shadcn/ui + Tailwind + React component generation | filesystem, fetch, google-drive |
| `vercel-web-design-guidelines` | Accessibility-first UX rules and performance budgets | filesystem, fetch, google-drive |

### Reasoning (5 skills) — accent: `#059669`
| Skill | Description | MCP Servers |
|---|---|---|
| `chain-of-thought` | Step-by-step reasoning framework for complex problems | memory, sequential-thinking, sqlite |
| `socratic-method` | Strategic questioning to uncover assumptions | memory, sequential-thinking, sqlite |
| `devils-advocate` | Argue against premises to strengthen arguments | memory, sequential-thinking, sqlite |
| `simulation-sandbox` | Test scenarios in safe simulated environments | memory, sequential-thinking, sqlite |
| `brainstorming` | Structured brainstorming with divergent/convergent phases | memory, sequential-thinking, sqlite |

### Development (12 skills) — accent: `#059669`
| Skill | Description | MCP Servers |
|---|---|---|
| `mcp-builder` | Build MCP servers with TypeScript + Python | filesystem, github, docker |
| `superpowers` | Spec-first development with TDD and sub-agent delegation | filesystem, github, docker |
| `tdd-workflow` | Test-driven development workflow — red-green-refactor cycles | filesystem, github, docker |
| `deployment-manager` | Deploy across GitHub Pages, Vercel, Netlify | filesystem, github, docker |
| `browser-use` | Headful browser automation with natural language control | filesystem, github, docker |
| `web-artifacts-builder` | Single-file HTML artifacts with React + Tailwind | filesystem, github, docker |
| `vercel-react-best-practices` | Production-grade React architecture, SSR/SSG | filesystem, github, docker |
| `explained-code` | Beginner-friendly code explanation with analogies | filesystem, github, docker |
| `composition-patterns` | Software composition patterns — DI, strategy, middleware, plugins | filesystem, github, docker |
| `threejs-orchestrator` | Gates ALL 3D work — routes r3f-react vs vanilla vs Babylon.js | filesystem, github, docker |
| `skill-architect` | Create/optimize SKILL.md files following Agent Skills standard | filesystem, github, docker |
| `context7-docs` | Always-current API documentation for any library | context7, fetch, memory |

### Content (4 skills) — accent: `#c2410c`
| Skill | Description | MCP Servers |
|---|---|---|
| `seo-content-writer` | SEO-optimized content with GEO optimization | filesystem, brave-search, google-drive, slack |
| `humanizer` | Strip AI writing patterns for human-like copy | filesystem, brave-search, google-drive, slack |
| `social-media-manager` | Post generation for 30 days across platforms | filesystem, brave-search, google-drive, slack |
| `social-content-pillars` | Monthly content calendar with 90-day editorial plan | filesystem, brave-search, google-drive, slack |

### Strategy (5 skills) — accent: `#ca8a04`
| Skill | Description | MCP Servers |
|---|---|---|
| `jtbd-research` | 8-step Jobs to be Done product research methodology | brave-search, memory, fetch |
| `to-prd` | Transform context into structured Product Requirements Document | brave-search, memory, fetch |
| `gumroad-pipeline` | Lead magnet to funnel to product launch workflow | brave-search, memory, fetch |
| `feature-research` | Research existing architecture before implementing | brave-search, memory, fetch |
| `skill-finder` | Skill discovery, evaluation, and installation meta-skill | brave-search, memory, fetch |

### System (6 skills) — accent: `#6366f1`
| Skill | Description | MCP Servers |
|---|---|---|
| `persistent-memory` | Structured memory system for agent context continuity | filesystem, github, docker |
| `system-prompt-sync` | Auto-sync AGENTS.md across all git repos | filesystem, github, docker |
| `feedback-loop` | Iterative improvement cycles from metrics to research | filesystem, github, docker |
| `context-compressor` | Compress long contexts preserving critical information | filesystem, github, docker |
| `agent-roles` | Unified multi-agent role system | filesystem, github, docker |
| `sample-hello-skill` | Hello-world demo skill for testing activation | filesystem, github, docker |

### Data & Web (5 skills) — accent: `#0d9488`
| Skill | Description | MCP Servers |
|---|---|---|
| `web-reader` | Web page extraction with crawling and spidering | fetch, brave-search, sqlite, postgres |
| `audit-analyzer` | Detect and prioritize audit issues | fetch, brave-search, sqlite, postgres |
| `web-design-guidelines` | Self-audit checklist for design consistency | fetch, brave-search, sqlite, postgres |
| `code-research` | Research open-source repositories | fetch, brave-search, sqlite, postgres |
| `explore` | Search a codebase efficiently without grep | fetch, brave-search, sqlite, postgres |

### Creative (2 skills) — accent: `#a855f7`
| Skill | Description | MCP Servers |
|---|---|---|
| `photography-ai` | Professional visual engineering with batch processing | filesystem, fetch, everart |
| `output-formatter` | Strict formatting rules for all output types | filesystem, fetch, everart |

### MCP Servers (5 skills) — accent: `#ea580c`
| Skill | Description | MCP Servers |
|---|---|---|
| `pictoflux-ai` | AI-powered image generation and visual editing via MCP protocol | filesystem, github |
| `mcp-stack-curator` | Recommends which 4 MCP servers to use together with synergy scoring | filesystem, github |
| `mcp-registry` | Searchable directory of 145+ free MCP servers across 15 categories | filesystem, github |
| `mcp-security-scanner` | Audit MCP server configurations for security vulnerabilities | filesystem, github |
| `modelscope-mcp-hub` | 2300+ free Chinese MCP servers with hosted deployment (ModelScope 魔搭) | modelscope-image-gen, modelscope-model-discovery, context7 |

### Agents (7 skills) — accent: `#6366f1`
| Skill | Icon | Description | MCP Servers |
|---|---|---|---|
| `agent-rabbit` | 🐇 | Multiply ideas — rapid ideation, brainstorming, divergent thinking | memory, sequential-thinking, filesystem |
| `agent-owl` | 🦉 | Deep analysis — systematic decomposition, evidence evaluation | memory, sequential-thinking, filesystem |
| `agent-ant` | 🐜 | Break into steps — task decomposition, sequential planning | memory, sequential-thinking, filesystem |
| `agent-eagle` | 🦅 | Big picture — strategic vision, cross-domain patterns | memory, sequential-thinking, filesystem |
| `agent-dolphin` | 🐬 | Creative solutions — lateral thinking, innovative paths | memory, sequential-thinking, filesystem |
| `agent-beaver` | 🦫 | Build systems — architecture, infrastructure, construction | memory, sequential-thinking, filesystem |
| `agent-elephant` | 🐘 | Cross-field connections — knowledge synthesis, interdisciplinary | memory, sequential-thinking, filesystem |

### Animation Engineering + 7-Agent Pipeline + Infrastructure (16 skills) — **NEW in v11.0.0+**
| Skill | Description | MCP Servers |
|---|---|---|
| `agent-master` | Orchestrates the 7-agent pipeline — DECISION → SIMULATOR → IMPLEMENTATION → AUDITOR → PROFILER → OPTIMIZER → MAINTENANCE | memory, sequential-thinking, filesystem |
| `agent-decision` | Routes tasks to the right specialist agent based on complexity and domain | memory, sequential-thinking, filesystem |
| `agent-simulator` | Dry-runs implementations to catch issues before real execution | memory, sequential-thinking, filesystem |
| `agent-auditor` | Validates against standards (accessibility, performance, cleanup) | filesystem, github, docker |
| `agent-profiler` | Finds ACTUAL bottlenecks with real measurement, not guesswork | filesystem, github, docker |
| `agent-optimizer` | Reduces bundle size, eliminates dead code, improves runtime | filesystem, github, docker |
| `agent-maintenance` | Keeps skills, dependencies, and documentation current | filesystem, github, docker |
| `animation-hybrid-architect` | Meta-skill for combining Motion v12 + GSAP v3.13+ with strict boundaries | filesystem, fetch, google-drive |
| `gsap-animation-engineer` | GSAP v3.13+ cinematic scroll/text/SVG animation engineer | filesystem, fetch, google-drive |
| `motion-animation-engineer` | Motion v12 declarative UI animation engineer for React/Vue | filesystem, fetch, google-drive |
| `9router-gateway` | AI routing gateway with RTK compression, tier-based provider fallback | filesystem, github, docker |
| `owl-proxy-defense` | Protocol-first proxy defense stack with 5-tier escalation | filesystem, github, docker |
| `antigravity-proxy` | MITM proxy bridge for free AI model access | filesystem, github, docker |
| `4cli-unified` | Unified meta-CLI wrapper for OpenCode + Claude Code + Codex + Gemini CLI | filesystem, github, docker |
| `triune-proxy-stack` | Maximum redundancy proxy architecture with auto-failover | filesystem, github, docker |
| `secret-vault` | Unified credential vault with age encryption | filesystem, github, docker |

---

## Animation + 3D Pipeline Rules (v10.0.0)

### Animation Orchestrator Gate

**No animation code may be written without routing through animation-orchestrator first.**

```
IF user asks for animation
    THEN route to animation-orchestrator first

IF animation-orchestrator selects Motion
    THEN route to motion-animator

IF animation-orchestrator selects GSAP
    THEN route to gsap-animator

IF animation is simple (hover, fade)
    THEN motion-animator with useAnimate mini (2.3KB)

IF animation involves scroll + multiple sections
    THEN gsap-animator with ScrollTrigger

IF animation code is written
    THEN animation-auditor validates before commit
```

### Three.js Orchestrator Gate

**No 3D code may be written without routing through threejs-orchestrator first.**

```
IF user asks for 3D
    THEN route to threejs-orchestrator first

IF 3D is for React UI
    THEN route to r3f-react with lazy-load + ssr:false

IF 3D is for compute/physics
    THEN route to vanilla Three.js with WebGPU

IF 3D is for games
    THEN route to Babylon.js

IF Three.js is used in React without R3F
    THEN REJECT — anti-pattern, use R3F

IF Three.js import is synchronous in page/layout
    THEN REJECT — must use dynamic import with ssr:false
```

### Pre-Commit Hooks

The `.git/hooks/pre-commit` hook runs `audit-animation.py` and `audit-threejs.py` on every commit. It catches:

- Missing cleanup (`useGSAP`, `dispose`, `revert`)
- Bundle violations (synchronous 3D imports in page bundles)
- Missing `'use client'` in R3F/Motion files
- Missing reduced-motion checks
- GSAP plugin import without `registerPlugin`

### 7-Agent MASTER Pipeline

The MASTER agent orchestrates a 7-stage pipeline for complex tasks:

```
DECISION ──→ SIMULATOR ──→ IMPLEMENTATION ──→ AUDITOR
    │              │              │              │
    │              │              │              ├── PROFILER
    │              │              │              │      │
    │              │              │              │      └── OPTIMIZER
    │              │              │              │
    │              │              │              └── MAINTENANCE
    │              │              │
    └──────────────┴──────────────┴── Quality gates at every stage
```

**Quality gates**: Each stage has explicit pass/fail criteria. Failed stages route back to the appropriate earlier stage, not forward. The DECISION agent is the most critical — it prevents 60% of animation tech debt by rejecting unnecessary animation requests before any code is written.

---

## MCP Stack Registry (9 Stacks)

The **unsolved problem**: which 4 MCP servers do you use together? Our 9 pre-built stacks answer this.

| Stack | Emoji | Synergy | 4 Servers |
|-------|-------|---------|-----------|
| Full-Stack Web Studio | 🌐 | 94% | filesystem, github, vercel, postgres |
| AI Research Lab | 🧪 | 91% | brave-search, fetch, memory, sqlite |
| Content Engine | ✍️ | 87% | filesystem, brave-search, google-drive, slack |
| DevOps Command Center | 🏗️ | 92% | github, docker, kubernetes, slack |
| Data Pipeline Studio | 📊 | 89% | postgres, sqlite, fetch, filesystem |
| Security Audit Toolkit | 🔒 | 86% | filesystem, github, brave-search, docker |
| Creative Studio | 🎨 | 85% | filesystem, fetch, google-drive, slack |
| Mobile App Workshop | 📱 | 88% | filesystem, github, fetch, memory |
| **Unified AI Gateway** | 🦉 | **96%** | filesystem, github, docker, fetch |

The **Unified AI Gateway** stack (new in v10.0.0) combines 9Router + OWL Proxy Defense + 4-CLI unified gateway — route AI requests through free-tier providers first, with circuit breaker fallback and protocol-first proxy defense. Achieves the highest synergy score (96%) because Filesystem stores configs, GitHub versions them, Docker runs the stack, and Fetch monitors health — complete infrastructure lifecycle with zero overlap.

See `stacks.json` for complete data including synergy reasoning, mismatch warnings, and paired skills.

---

## MCP Server Registry (145 Servers / 15 Categories)

| Category | Count | Key Servers |
|----------|-------|-------------|
| File & Storage | 8 | filesystem, google-drive, dropbox, s3 |
| Database | 8 | postgres, sqlite, mongodb, redis |
| Web & Search | 9 | brave-search, fetch, puppeteer, tavily |
| Cloud & DevOps | 10 | github, docker, kubernetes, vercel |
| Communication | 9 | slack, discord, email, telegram |
| AI & ML | 12 | openai, anthropic, ollama, everart |
| Productivity | 8 | notion, todoist, linear, asana |
| Development | 13 | gitlab, bitbucket, npm, pypi |
| Analytics | 8 | google-analytics, mixpanel, amplitude |
| Security | 7 | vault, sops, cert-manager |
| Content & Media | 9 | everart, ffmpeg, imagemagick |
| Monitoring | 7 | prometheus, grafana, datadog |
| Integration | 9 | zapier, make, ifttt |
| Utility | 10 | memory, sequential-thinking, time, random |
| **ModelScope** | 8 | modelscope-image-gen, modelscope-model-discovery, context7, arxiv-paper, mineru-document-parser, alipay-mcp, xiyan-sql, gaode-maps |

### ModelScope MCP Hub (NEW in v10.0.0)

Curated free MCP servers from [modelscope.cn/mcp](https://www.modelscope.cn/mcp) — 2300+ free Chinese MCP servers with hosted deployment. Key servers in the registry:

| Server | Description |
|--------|-------------|
| `modelscope-image-gen` | 12800+ text-to-image models — Qwen, FLUX, SDXL, Chinese-specific models |
| `modelscope-model-discovery` | Search 200K+ ML models, datasets, and apps with benchmarks |
| `context7` | Always-current, version-specific API documentation for any library |
| `arxiv-paper` | Search and parse arXiv papers with full PDF content extraction |
| `mineru-document-parser` | Parse PDFs, DOCX, HTML into structured content with MinerU |
| `alipay-mcp` | Alipay payment integration — transactions, query, refund |
| `xiyan-sql` | Natural language to SQL (NL2SQL) — supports multiple databases |
| `gaode-maps` | Gaode (Amap) maps API — geocoding, routing, POI for China |

See `mcp-registry.json` for the complete registry with protocol types, compatibility, and conflict data.

---

## The 4 Agent Skills

| Agent Skill | Domain | Effort | Tokens | Key Behaviors |
|-------------|--------|--------|--------|---------------|
| **SKILL_01** Conversational | Mobile, chat, exploration | `high` | 4,400 | Silent Protocol, advocacy mode, blind spot detection |
| **SKILL_02** Design + Build | Desktop, visual, UI/UX | `high` | 5,600 | 3 directions before building, anti-defaults, depth-seeking |
| **SKILL_03** Code + API | Desktop, production code | `xhigh` | 6,100 | Algorithm-first, 40-item quality gates, caveman protocols |
| **SKILL_04** Agentic | Autonomous, orchestration | `xhigh` | 6,000 | Task decomposition, parallel subagents, failure recovery |

**Universal Router** (3,100 tokens, always loaded) handles routing between skills, CONTINUITY protocol (context carrying), closing patterns, and hard stops.

---

## The 7 Agent Mode Skills

| Agent Mode | Icon | Superpower | MCP Stack Pairing |
|------------|------|------------|-------------------|
| **Rabbit** | 🐇 | Multiply ideas — rapid ideation, brainstorming, divergent thinking | AI Research Lab |
| **Owl** | 🦉 | Deep analysis — systematic decomposition, evidence evaluation | Security Audit Toolkit |
| **Ant** | 🐛 | Break into steps — task decomposition, sequential planning | Full-Stack Web Studio |
| **Eagle** | 🦅 | Big picture — strategic vision, cross-domain patterns | DevOps Command Center |
| **Dolphin** | 🐬 | Creative solutions — lateral thinking, innovative paths | Creative Studio |
| **Beaver** | 🦫 | Build systems — architecture, infrastructure, construction | Data Pipeline Studio |
| **Elephant** | 🐘 | Cross-field connections — knowledge synthesis, interdisciplinary | Content Engine |

---

## Skill → Agent → MCP Synergy Matrix

The three layers connect through a **skill-agent-MCP synergy matrix** that maps each platform skill to its corresponding agent skill mode AND recommended MCP servers. Key mappings:

| Category | Agent Skill | Primary MCP Servers |
|----------|-------------|---------------------|
| Design & UI | SKILL_02 (Design + Build) | filesystem, fetch, google-drive |
| Reasoning | SKILL_01 (Conversational) | memory, sequential-thinking, sqlite |
| Development | SKILL_03 (Code + API) | filesystem, github, docker |
| Content | SKILL_01 + SKILL_02 | filesystem, brave-search, google-drive, slack |
| Strategy | SKILL_01 + SKILL_04 | brave-search, memory, fetch |
| System | SKILL_04 (Agentic) | filesystem, github, docker |
| Data & Web | SKILL_04 + SKILL_01 | fetch, brave-search, sqlite, postgres |
| Creative | SKILL_02 + SKILL_04 | filesystem, fetch, everart |
| MCP Servers | SKILL_03 + SKILL_04 | filesystem, github, modelscope-* |
| Agents | SKILL_04 (Agentic) | memory, sequential-thinking, filesystem |
| Animation Pipeline | SKILL_02 + SKILL_03 | filesystem, github, docker |

Full synergy matrix with per-skill MCP pairings is in `AGENTS.md`.

---

## URL API Reference

The showcase supports a powerful URL parameter API for deep linking, embedding, and data export.

| Parameter | Effect | Example |
|---|---|---|
| `?format=json` | Returns raw JSON with version, count, all skills | [`?format=json`](https://marktantongco.github.io/opencode-accomplishments?format=json) |
| `?format=manifest` | Returns JetBrains-style plugin.xml | [`?format=manifest`](https://marktantongco.github.io/opencode-accomplishments?format=manifest) |
| `?skill=<name>` | Auto-filters to matching skill name/tag | [`?skill=gsap-animations`](https://marktantongco.github.io/opencode-accomplishments?skill=gsap-animations) |
| `?category=<name>` | Auto-selects category chip | [`?category=MCP+Servers`](https://marktantongco.github.io/opencode-accomplishments?category=MCP+Servers) |
| `?embed=true` | Strips hero, editorial band, footer for iframe embed | [`?embed=true`](https://marktantongco.github.io/opencode-accomplishments?embed=true) |
| `?palette=<hex>` | Overrides `--brand-primary` with any hex color | [`?palette=FF6B35`](https://marktantongco.github.io/opencode-accomplishments?palette=FF6B35) |
| `?theme=<name>` | Applies named theme | [`?theme=cyberpunk`](https://marktantongco.github.io/opencode-accomplishments?theme=cyberpunk) |

### Available Themes

| Theme | Palette |
|-------|---------|
| `midnight` | Deep navy + silver + cool whites |
| `sunset` | Warm orange + amber + cream |
| `forest` | Rich green + sage + earthy browns |
| `ocean` | Teal + seafoam + sandy neutrals |
| `cyberpunk` | Hot pink + electric blue + dark purple |
| `neon` | Bright green + magenta + charcoal |

### Combining Parameters

Parameters can be combined for powerful deep links:

```
# Embed the cyberpunk theme showing only MCP Servers category
?embed=true&theme=cyberpunk&category=MCP+Servers

# JSON export filtered to a specific skill
?format=json&skill=animation-orchestrator

# Custom palette in embed mode for a specific category
?embed=true&palette=E11D48&category=Design+%26+UI
```

### Programmatic Access

```bash
# Fetch the full skills catalog as JSON
curl "https://marktantongco.github.io/opencode-accomplishments?format=json"

# Get the JetBrains manifest
curl "https://marktantongco.github.io/opencode-accomplishments?format=manifest"

# Embed in your site
<iframe src="https://marktantongco.github.io/opencode-accomplishments?embed=true&theme=ocean"
        width="100%" height="600" frameborder="0"></iframe>
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `/` | Focus the search bar |
| `Esc` | Close modal / clear search |
| `←` / `→` | Navigate between category chips |
| `Enter` | Select focused category chip |
| `1`–`9` | Jump to category by number (left-to-right order) |

All shortcuts respect focus states and are screen-reader announced.

---

## CONTINUITY Protocol

When switching between agent skills during a session, the CONTINUITY protocol ensures context carries forward:

1. System reviews the last 10 messages for stated preferences, prior decisions, unresolved threads
2. Context carries forward into the new skill's execution
3. Switch is announced visibly: "Switching to [Design/Code/Agentic] mode — I've noted [context]"
4. Quick-Feedback Prompt validates: "Was that transition smooth? (Y/N)"

This is critical when chaining skills: Research (SKILL_01) → Design (SKILL_02) → Code (SKILL_03) → Deploy (SKILL_04).

---

## Quick Start

### 1. Explore the Showcase
Open [the live demo](https://marktantongco.github.io/opencode-accomplishments) — search skills, browse categories, try themes with `?theme=cyberpunk`, install as a PWA.

### 2. Read the Navigation Guide
Open `agents/00_START_HERE.md` for the complete navigation map of all 18 agent files.

### 3. Deploy the Agent System
Read `agents/MARK_SYSTEM_PROMPT_FINAL.md` for deployment procedures, then deploy Universal Router + SKILL_01 to your AI platform.

### 4. Test with Real Conversations
Follow the Week 1 protocol — 6 test conversations to validate the Universal Router.

### 5. Add Skills Incrementally
Add SKILL_02 (Design), SKILL_03 (Code), SKILL_04 (Agentic) based on your testing results.

### 6. Configure Your MCP Stack
Explore `stacks.json` for pre-built combinations, or use the MCP Stack Curator in the showcase to build your own.

### 7. Route Animations and 3D Correctly
- **Animation**: always route through `animation-orchestrator` first
- **3D**: always route through `threejs-orchestrator` first

### 8. Monitor and Evolve
Monitor with `agents/03_MONITORING_METRICS.md` framework. Evolve with `agents/08_EVOLUTION_GUIDE.md` roadmap.

---

## Version History

| Version | Date | Changes |
|---|---|---|
| **13.0.0** | 2026-06-01 | **Progressive Web App**: installable, offline support, standalone display mode, service worker caching, app manifest. Added PWA badge, Dark Mode badge, Performance badge. New sections: Features grid, PWA Install Instructions, Tech Stack, Keyboard Shortcuts, URL API Reference with examples and programmatic access. Improved Quick Start with numbered steps. README upgrade to v13. |
| **12.0.0** | 2026-05-31 | Merged online + local versions: fixed broken orbit badges, replaced marquee with static editorial band, synced root + docs index.html, updated AGENTS.md/SKILL.md/README to 76 skills/11 categories, added Infrastructure + 7-Agent Pipeline + Animation Engineering to synergy matrix, updated accent colors to modern palette, added prefers-reduced-motion for orbit rotation, updated JSON-LD to 76 items |
| **11.2.0** | 2026-05-24 | Audit fix — removed orphaned brutalist refs, merged "Agent Modes" → "Agents" category (12→11), added `prefers-reduced-motion: reduce` CSS, updated accent colors from neon to modern muted palette |
| **11.1.0** | 2026-05-24 | Taste Skill redesign — premium modern design system (Playfair Display + Inter, indigo/parchment, soft shadows, scroll reveal) replacing neo-brutalist |
| **11.0.0** | 2026-05-24 | Added 61 SKILL.md files + 10 new skills to showcase (66→76), Infrastructure category, 7-Agent MASTER Pipeline, Animation Engineering skills |
| **10.0.0** | 2026-05-24 | Animation Pipeline, Three.js Orchestrator, 7-Agent MASTER Pipeline, Skill Architect, ModelScope MCP Hub, Context7 Docs, Unified AI Gateway stack (96% synergy), Pre-commit hooks, 14 new skills (52→66) |
| 8.0.0 | 2026-05-23 | Theme Marketplace (6 named themes via ?theme= URL param + switcher + share button), Your Stack Recommender (select 3-5 skills → optimal MCP stack + agent mode), Agent Mode hover tooltips (Rabbit → AI Research Lab), Featured Theme Banner, Copy Install Command button, Toast Notifications, Hero gradient animation, 2 new skills (brainstorming + composition-patterns), MCP stacks synced to stacks.json, all counts updated (50→52 skills) |
| 7.0.0 | 2026-05-23 | Added tdd-workflow + to-prd skills (48→50 skills), dark mode with system preference detection, stats dashboard with animated counters, Agent Modes spotlight section, keyboard shortcuts (/, Esc), embed mode updates, Full Stack Designer 7-layer audit |
| 6.0.0 | 2026-05-19 | Added MCP Servers + Agent Modes categories (38→48 skills, 8→10 categories), MCP server pairings per skill, MCP Stack Curator with Build Your Own, stacks.json (8 stacks), mcp-registry.json (127 servers), audit fixes, AGENTS.md synergy matrix |
| 5.0.0 | 2026-05-18 | Added 7 Agent Mode skills (Rabbit/Owl/Ant/Eagle/Dolphin/Beaver/Elephant), comprehensive audit fixes |
| 4.0.0 | 2026-05-17 | Added complete Agent System (18 files), AGENTS.md structural connection map |
| 3.0.0 | 2026-05-06 | Neo-brutalist redesign, ?embed=true, ?palette= endpoint, WCAG AA compliance |
| 2.0.0 | 2026-05-05 | Light-only theme, URL param filtering, Flip crash fix |
| 1.0.0 | 2026-05-04 | Initial showcase — 38 skills, glassmorphism design |

---

## License

MIT

---

Built with **ui-ux-pro-max-v7** + **gsap-animations** + **anthropic-frontend-design** + **frontend-design**

Powered by **Universal Router v1.0** + **SKILL_01-04** agent system + **145 MCP servers** + **9 pre-built stacks** + **7-agent MASTER pipeline** + **Progressive Web App** // v13.0.0
