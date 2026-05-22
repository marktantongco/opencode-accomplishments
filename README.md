# OpenCode Accomplishments — AI Skills Showcase + Agent System + MCP Ecosystem

> A self-contained, single-file interactive showcase of 50 AI agent skills across 10 categories — plus a complete production-ready Agent System with Universal Router + 4 context-loaded skills, 18 documentation files, 127 MCP servers in a searchable registry, 8 pre-built MCP stacks with synergy scoring, and an interactive MCP Stack Curator. Neo-brutalist ultramodern Gen Z design with dark mode. Zero build step — drop on GitHub Pages and ship.

![Version](https://img.shields.io/badge/version-7.0.0-FF2E63?style=for-the-badge&labelColor=000)
![Skills](https://img.shields.io/badge/skills-50-BFFF00?style=for-the-badge&labelColor=000)
![MCP Servers](https://img.shields.io/badge/mcp_servers-127-FF6B35?style=for-the-badge&labelColor=000)
![Agent Files](https://img.shields.io/badge/agent_files-18-08F7FE?style=for-the-badge&labelColor=000)
![Stacks](https://img.shields.io/badge/mcp_stacks-8-C77DFF?style=for-the-badge&labelColor=000)
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

This project has **three complementary layers**:

### Layer 1: Skills Showcase (Visual + API + MCP Curator)

A **living, self-updating AI Skills Registry** — an interactive, machine-readable catalog of 48 active AI agent skills across 10 categories. Built with vanilla HTML/CSS/JS, powered by GSAP animations, Web Components, JSON-LD structured data, MCP server pairings per skill, and an interactive MCP Stack Curator that solves the unsolved problem: *which 4 servers do you use together?*

### Layer 2: Agent System (Intelligence + Operations)

A **production-ready AI partner system** built on a Universal Router (3,100 tokens) + 4 context-loaded skills. Includes 18 comprehensive documentation files covering deployment, operational playbooks, monitoring, optimization, integration, and a 5-phase evolution roadmap.

### Layer 3: MCP Ecosystem (Servers + Stacks + Curator)

A **curated MCP server directory and stack recommendation engine** — 127 free MCP servers across 14 categories in `mcp-registry.json`, 8 pre-built MCP stacks in `stacks.json` with synergy scores and conflict detection, and an interactive MCP Stack Curator in the showcase with a "Build Your Own" feature.

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
├── stacks.json                 # 8 pre-built MCP stacks with synergy scoring
├── mcp-registry.json           # 127 free MCP servers across 14 categories
├── scripts/
│   ├── local-sync-skills.sh    # Local nightly sync script
│   └── sync-skills.sh          # GitHub Actions sync script
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── AGENTS.md                   # Structural connection map (Skills ↔ Agents ↔ MCP)
├── SKILL.md                    # Skill documentation for reproducibility
├── README.md                   # This file
└── vercel.json                 # Vercel deployment config
```

---

## Skills by Category (48 skills / 10 categories)

### Design & UI (5 skills) — accent: `#BFFF00`
| Skill | Description | MCP Servers |
|---|---|---|
| `ui-ux-pro-max-v7` | AI design intelligence — 60 styles, 48 palettes, 36 fonts, 24 industry rules | filesystem, fetch, google-drive |
| `anthropic-frontend-design` | Bold aesthetics for AI-native interfaces, conversational UI | filesystem, fetch, google-drive |
| `gsap-animations` | Production-grade GSAP animation patterns — 24 patterns | filesystem, fetch, google-drive |
| `frontend-design` | shadcn/ui + Tailwind + React component generation | filesystem, fetch, google-drive |
| `vercel-web-design-guidelines` | Accessibility-first UX rules and performance budgets | filesystem, fetch, google-drive |

### Reasoning (4 skills) — accent: `#08F7FE`
| Skill | Description | MCP Servers |
|---|---|---|
| `chain-of-thought` | Step-by-step reasoning framework for complex problems | memory, sequential-thinking, sqlite |
| `socratic-method` | Strategic questioning to uncover assumptions | memory, sequential-thinking, sqlite |
| `devils-advocate` | Argue against premises to strengthen arguments | memory, sequential-thinking, sqlite |
| `simulation-sandbox` | Test scenarios in safe simulated environments | memory, sequential-thinking, sqlite |

### Development (8 skills) — accent: `#00FF9D`
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

### MCP Servers (4 skills) — accent: `#FF6B35` **NEW in v6.0.0**
| Skill | Description | MCP Servers |
|---|---|---|
| `pictoflux-ai` | AI-powered image generation and visual editing via MCP protocol | filesystem, github |
| `mcp-stack-curator` | Recommends which 4 MCP servers to use together with synergy scoring | filesystem, github |
| `mcp-registry` | Searchable directory of 105+ free MCP servers across 14 categories | filesystem, github |
| `mcp-security-scanner` | Audit MCP server configurations for security vulnerabilities | filesystem, github |

### Agent Modes (7 skills) — accent: `#C77DFF` **NEW in v6.0.0**
| Skill | Icon | Description | MCP Servers |
|---|---|---|---|
| `agent-rabbit` | 🐇 | Multiply ideas — rapid ideation, brainstorming, divergent thinking | memory, sequential-thinking, filesystem |
| `agent-owl` | 🦉 | Deep analysis — systematic decomposition, evidence evaluation | memory, sequential-thinking, filesystem |
| `agent-ant` | 🐜 | Break into steps — task decomposition, sequential planning | memory, sequential-thinking, filesystem |
| `agent-eagle` | 🦅 | Big picture — strategic vision, cross-domain patterns | memory, sequential-thinking, filesystem |
| `agent-dolphin` | 🐬 | Creative solutions — lateral thinking, innovative paths | memory, sequential-thinking, filesystem |
| `agent-beaver` | 🦫 | Build systems — architecture, infrastructure, construction | memory, sequential-thinking, filesystem |
| `agent-elephant` | 🐘 | Cross-field connections — knowledge synthesis, interdisciplinary | memory, sequential-thinking, filesystem |

---

## MCP Stack Registry (8 Stacks)

The **unsolved problem**: which 4 MCP servers do you use together? Our 8 pre-built stacks answer this.

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

See `stacks.json` for complete data including synergy reasoning, mismatch warnings, and paired skills.

---

## MCP Server Registry (127 Servers / 14 Categories)

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

See `mcp-registry.json` for the complete registry with protocol types, compatibility, and conflict data.

---

## The 4 Agent Skills

| Agent Skill | Domain | Effort | Tokens | Key Behaviors |
|-------------|--------|--------|--------|---------------|
| **SKILL_01** Conversational | Mobile, chat, exploration | `high` | 4,400 | Silent Protocol, advocacy mode, blind spot detection |
| **SKILL_02** Design + Build | Desktop, visual, UI/UX | `high` | 5,600 | 3 directions before building, anti-defaults, depth-seeking |
| **SKILL_03** Code + API | Desktop, production code | `xhigh` | 6,100 | Algorithm-first, 40-item quality gates, caveman protocols |
| **SKILL_04** Agentic | Autonomous, orchestration | `xhigh` | 6,000 | Task decomposition, parallel subagents, failure recovery |

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

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 7.0.0 | 2026-05-23 | Added tdd-workflow + to-prd skills (48→50 skills), dark mode with system preference detection, stats dashboard with animated counters, Agent Modes spotlight section, keyboard shortcuts (/, Esc), embed mode updates, Full Stack Designer 7-layer audit |
| 6.0.0 | 2026-05-19 | Added MCP Servers + Agent Modes categories (38→48 skills, 8→10 categories), MCP server pairings per skill, MCP Stack Curator with Build Your Own, stacks.json (8 stacks), mcp-registry.json (127 servers), audit fixes (robots meta, favicon, substr→substring, nvidia-build removed), AGENTS.md synergy matrix |
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

Powered by **Universal Router v1.0** + **SKILL_01-04** agent system + **127 MCP servers** + **8 pre-built stacks**
