# OpenCode Accomplishments — AI Skills Showcase + Agent System + MCP Ecosystem

> A self-contained, single-file interactive showcase of **66 AI agent skills** across **11 categories** — plus a complete production-ready Agent System with Universal Router + 4 context-loaded skills, 18 documentation files, **145 MCP servers** in a searchable registry across 15 categories, **9 pre-built MCP stacks** with synergy scoring (incl. Unified AI Gateway at 96% synergy), an interactive MCP Stack Curator, a Theme Marketplace with 6 named themes, a Your Stack Recommender engine, an Animation Pipeline with orchestrator gate + auditor, a Three.js Orchestrator with r3f-react routing, a 7-agent MASTER pipeline, a Skill Architect, ModelScope MCP Hub (2300+ free Chinese servers), and Context7 always-current docs. Neo-brutalist ultramodern Gen Z design with dark mode. Zero build step — drop on GitHub Pages and ship.

![Version](https://img.shields.io/badge/version-10.0.0-FF2E63?style=for-the-badge&labelColor=000)
![Skills](https://img.shields.io/badge/skills-66-BFFF00?style=for-the-badge&labelColor=000)
![MCP Servers](https://img.shields.io/badge/mcp_servers-145-FF6B35?style=for-the-badge&labelColor=000)
![Agent Files](https://img.shields.io/badge/agent_files-18-08F7FE?style=for-the-badge&labelColor=000)
![Stacks](https://img.shields.io/badge/mcp_stacks-9-C77DFF?style=for-the-badge&labelColor=000)
![WCAG](https://img.shields.io/badge/WCAG-AA-00FF9D?style=for-the-badge&labelColor=000)
![Zero Build](https://img.shields.io/badge/zero_build-step-FFE600?style=for-the-badge&labelColor=000)

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

A **living, self-updating AI Skills Registry** — an interactive, machine-readable catalog of 66 active AI agent skills across 11 categories. Built with vanilla HTML/CSS/JS, powered by GSAP animations, Web Components, JSON-LD structured data, MCP server pairings per skill, an interactive MCP Stack Curator, a Theme Marketplace with 6 named themes via `?theme=` URL params, and a Your Stack Recommender engine that selects 3-5 skills and recommends the optimal MCP stack + agent mode. Now includes the Animation Pipeline (orchestrator + motion-animator + gsap-animator + auditor), Three.js Orchestrator (gates all 3D work), Skill Architect (create/optimize SKILL.md files), ModelScope MCP Hub (2300+ free Chinese MCP servers), and Context7 Docs (always-current API documentation).

### Layer 2: Agent System (Intelligence + Operations)

A **production-ready AI partner system** built on a Universal Router (3,100 tokens) + 4 context-loaded skills (SKILL_01 through SKILL_04). Includes 18 comprehensive documentation files covering deployment, operational playbooks, monitoring, optimization, integration, and a 5-phase evolution roadmap. Extended with a 7-agent MASTER pipeline (DECISION, SIMULATOR, IMPLEMENTATION, AUDITOR, PROFILER, OPTIMIZER, MAINTENANCE) that orchestrates complex multi-step tasks with quality gates at every stage.

### Layer 3: MCP Ecosystem (Servers + Stacks + Curator)

A **curated MCP server directory and stack recommendation engine** — 145 free MCP servers across 15 categories in `mcp-registry.json` (now including ModelScope curated servers with free hosted deployment, Context7 documentation fetching, Xiyan NL2SQL, Gaode Maps, and MinerU document parsing), 9 pre-built MCP stacks in `stacks.json` with synergy scores and conflict detection (including the new Unified AI Gateway stack at 96% synergy), and an interactive MCP Stack Curator in the showcase with a "Build Your Own" feature.

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

## Skills by Category (66 skills / 11 categories)

### Design & UI (9 skills) — accent: `#BFFF00`
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

### Reasoning (5 skills) — accent: `#08F7FE`
| Skill | Description | MCP Servers |
|---|---|---|
| `chain-of-thought` | Step-by-step reasoning framework for complex problems | memory, sequential-thinking, sqlite |
| `socratic-method` | Strategic questioning to uncover assumptions | memory, sequential-thinking, sqlite |
| `devils-advocate` | Argue against premises to strengthen arguments | memory, sequential-thinking, sqlite |
| `simulation-sandbox` | Test scenarios in safe simulated environments | memory, sequential-thinking, sqlite |
| `brainstorming` | Structured brainstorming with divergent/convergent phases | memory, sequential-thinking, sqlite |

### Development (12 skills) — accent: `#00FF9D`
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

### Content (4 skills) — accent: `#FF2E63`
| Skill | Description | MCP Servers |
|---|---|---|
| `seo-content-writer` | SEO-optimized content with GEO optimization | filesystem, brave-search, google-drive, slack |
| `humanizer` | Strip AI writing patterns for human-like copy | filesystem, brave-search, google-drive, slack |
| `social-media-manager` | Post generation for 30 days across platforms | filesystem, brave-search, google-drive, slack |
| `social-content-pillars` | Monthly content calendar with 90-day editorial plan | filesystem, brave-search, google-drive, slack |

### Strategy (5 skills) — accent: `#FFE600`
| Skill | Description | MCP Servers |
|---|---|---|
| `jtbd-research` | 8-step Jobs to be Done product research methodology | brave-search, memory, fetch |
| `to-prd` | Transform context into structured Product Requirements Document | brave-search, memory, fetch |
| `gumroad-pipeline` | Lead magnet to funnel to product launch workflow | brave-search, memory, fetch |
| `feature-research` | Research existing architecture before implementing | brave-search, memory, fetch |
| `skill-finder` | Skill discovery, evaluation, and installation meta-skill | brave-search, memory, fetch |

### System (6 skills) — accent: `#A8B2D8`
| Skill | Description | MCP Servers |
|---|---|---|
| `persistent-memory` | Structured memory system for agent context continuity | filesystem, github, docker |
| `system-prompt-sync` | Auto-sync AGENTS.md across all git repos | filesystem, github, docker |
| `feedback-loop` | Iterative improvement cycles from metrics to research | filesystem, github, docker |
| `context-compressor` | Compress long contexts preserving critical information | filesystem, github, docker |
| `agent-roles` | Unified multi-agent role system | filesystem, github, docker |
| `sample-hello-skill` | Hello-world demo skill for testing activation | filesystem, github, docker |

### Data & Web (5 skills) — accent: `#64FFDA`
| Skill | Description | MCP Servers |
|---|---|---|
| `web-reader` | Web page extraction with crawling and spidering | fetch, brave-search, sqlite, postgres |
| `audit-analyzer` | Detect and prioritize audit issues | fetch, brave-search, sqlite, postgres |
| `web-design-guidelines` | Self-audit checklist for design consistency | fetch, brave-search, sqlite, postgres |
| `code-research` | Research open-source repositories | fetch, brave-search, sqlite, postgres |
| `explore` | Search a codebase efficiently without grep | fetch, brave-search, sqlite, postgres |

### Creative (2 skills) — accent: `#FF9FF3`
| Skill | Description | MCP Servers |
|---|---|---|
| `photography-ai` | Professional visual engineering with batch processing | filesystem, fetch, everart |
| `output-formatter` | Strict formatting rules for all output types | filesystem, fetch, everart |

### MCP Servers (5 skills) — accent: `#FF6B35`
| Skill | Description | MCP Servers |
|---|---|---|
| `pictoflux-ai` | AI-powered image generation and visual editing via MCP protocol | filesystem, github |
| `mcp-stack-curator` | Recommends which 4 MCP servers to use together with synergy scoring | filesystem, github |
| `mcp-registry` | Searchable directory of 145+ free MCP servers across 15 categories | filesystem, github |
| `mcp-security-scanner` | Audit MCP server configurations for security vulnerabilities | filesystem, github |
| `modelscope-mcp-hub` | 2300+ free Chinese MCP servers with hosted deployment (ModelScope 魔搭) | modelscope-image-gen, modelscope-model-discovery, context7 |

### Agent Modes (7 skills) — accent: `#C77DFF`
| Skill | Icon | Description | MCP Servers |
|---|---|---|---|
| `agent-rabbit` | 🐇 | Multiply ideas — rapid ideation, brainstorming, divergent thinking | memory, sequential-thinking, filesystem |
| `agent-owl` | 🦉 | Deep analysis — systematic decomposition, evidence evaluation | memory, sequential-thinking, filesystem |
| `agent-ant` | 🐜 | Break into steps — task decomposition, sequential planning | memory, sequential-thinking, filesystem |
| `agent-eagle` | 🦅 | Big picture — strategic vision, cross-domain patterns | memory, sequential-thinking, filesystem |
| `agent-dolphin` | 🐬 | Creative solutions — lateral thinking, innovative paths | memory, sequential-thinking, filesystem |
| `agent-beaver` | 🦫 | Build systems — architecture, infrastructure, construction | memory, sequential-thinking, filesystem |
| `agent-elephant` | 🐘 | Cross-field connections — knowledge synthesis, interdisciplinary | memory, sequential-thinking, filesystem |

### Animation Pipeline (6 skills) — accent: `#FF9F43` **NEW in v10.0.0**
| Skill | Description | MCP Servers |
|---|---|---|
| `agent-master` | Orchestrates the 7-agent pipeline — DECISION → SIMULATOR → IMPLEMENTATION → AUDITOR → PROFILER → OPTIMIZER → MAINTENANCE | filesystem, github, docker |
| `agent-decision` | Decides IF and WHAT to animate/animate — prevents 60% of animation tech debt at the decision stage | memory, sequential-thinking, filesystem |
| `agent-simulator` | Traces all interactions + edge cases before code is written | memory, sequential-thinking, filesystem |
| `agent-implementation` | Writes the animation/interaction code following orchestrator decisions | filesystem, github, docker |
| `agent-auditor` | Validates animation code against standards (accessibility, performance, cleanup) | filesystem, github, docker |
| `agent-profiler` | Finds ACTUAL bottlenecks with real measurement, not guesswork | filesystem, github, docker |

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
| **Ant** | 🐜 | Break into steps — task decomposition, sequential planning | Full-Stack Web Studio |
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
| Agent Modes | SKILL_04 (Agentic) | memory, sequential-thinking, filesystem |
| Animation Pipeline | SKILL_02 + SKILL_03 | filesystem, github, docker |

Full synergy matrix with per-skill MCP pairings is in `AGENTS.md`.

---

## API Endpoints

| Endpoint | Effect | Example |
|---|---|---|
| `?format=json` | Returns raw JSON with version, count, all skills | `?format=json` |
| `?format=manifest` | Returns JetBrains-style plugin.xml | `?format=manifest` |
| `?skill=<name>` | Auto-filters to matching skill name/tag | `?skill=gsap-animations` |
| `?category=<name>` | Auto-selects category chip | `?category=MCP+Servers` |
| `?embed=true` | Strips hero, marquee, footer for iframe | `?embed=true` |
| `?palette=<hex>` | Overrides `--brand-primary` with any hex | `?palette=FF6B35` |
| `?theme=<name>` | Applies named theme (midnight, sunset, forest, ocean, cyberpunk, neon) | `?theme=cyberpunk` |

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

1. Read `agents/00_START_HERE.md` for the navigation guide
2. Read `agents/MARK_SYSTEM_PROMPT_FINAL.md` for deployment procedures
3. Deploy Universal Router + SKILL_01 to your AI platform
4. Test with 6 conversations (see Week 1 protocol)
5. Add SKILL_02/03/04 based on testing results
6. Explore `stacks.json` for your MCP server combinations
7. Use the MCP Stack Curator in the showcase to find your ideal stack
8. For animation: always route through `animation-orchestrator` first
9. For 3D: always route through `threejs-orchestrator` first
10. Monitor with `agents/03_MONITORING_METRICS.md` framework
11. Evolve with `agents/08_EVOLUTION_GUIDE.md` roadmap

---

## Version History

| Version | Date | Changes |
|---|---|---|
| **10.0.0** | 2026-05-24 | Animation Pipeline (orchestrator + motion-animator + gsap-animator + auditor), Three.js Orchestrator (gates all 3D work), 7-Agent MASTER Pipeline (DECISION → SIMULATOR → IMPLEMENTATION → AUDITOR → PROFILER → OPTIMIZER → MAINTENANCE), Skill Architect (create/optimize SKILL.md files), ModelScope MCP Hub (2300+ free Chinese servers, 8 curated in registry), Context7 Docs (always-current API docs), Unified AI Gateway stack (96% synergy), Pre-commit hooks (audit-animation.py + audit-threejs.py), 14 new skills (52→66), 1 new category (10→11), 18 new MCP servers (127→145), 1 new MCP category (14→15), 1 new stack (8→9) |
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

Powered by **Universal Router v1.0** + **SKILL_01-04** agent system + **145 MCP servers** + **9 pre-built stacks** + **7-agent MASTER pipeline**
