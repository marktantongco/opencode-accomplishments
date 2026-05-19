# opencode-accomplishments

## Multi-Skill AI Agent System + MCP Server Directory + Agent Modes

The first unified **skills-plus-MCP-plus-modes directory** — 48 AI agent skills across 10 categories, 7 cognitive Agent Modes, 8 pre-built MCP stacks, and a curated registry of 105+ free MCP servers.

---

### Live Demo

**GitHub Pages:** [marktantongco.github.io/opencode-accomplishments](https://marktantongco.github.io/opencode-accomplishments/)

**Vercel:** [opencode-accomplishments.vercel.app](https://opencode-accomplishments.vercel.app/)

**API Endpoints:**
| Endpoint | Description |
|----------|-------------|
| `?format=json` | Raw JSON of all 48 skills |
| `?format=manifest` | JetBrains-style plugin.xml for IDE auto-discovery |
| `?category=Agent Modes` | Filter by category |
| `?category=MCP Servers` | Filter by MCP category |
| `?skill=rabbit-multiply-ideas` | Auto-filter to specific skill |
| `?embed=true` | iframe-ready (no hero/footer/marquee) |
| `?palette=FF2E63` | Live theme generation from any hex color |

---

### Version History

| Version | Date | Changes |
|---------|------|---------|
| **v5.0.0** | 2026-05-19 | Added 7 Agent Modes (Rabbit, Owl, Ant, Eagle, Dolphin, Beaver, Elephant) with `#FF6B35` accent. Fixed `substr()` deprecation, added robots meta + favicon. 41→48 skills, 9→10 categories |
| **v4.0.0** | 2026-05-19 | Added MCP Servers category (4 skills: PictoFlux AI, MCP Stack Curator, MCP Registry, MCP Security Scanner). Removed nvidia-build. Added stacks.json + mcp-registry.json. 38→41 skills, 8→9 categories |
| **v3.0.0** | 2026-05-06 | Neo-brutalist redesign, GSAP 3, Web Components, JSON-LD, URL endpoints, embed mode, palette API. 38 skills, 8 categories |

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

Each Agent Mode embodies a distinct thinking style inspired by the natural world. Switch between modes to approach problems from different angles.

| Mode | Emoji | Thinking Style | Best For |
|------|-------|----------------|----------|
| **Rabbit** | 🐇 | Multiply Ideas | Brainstorming variations, generating 10 different angles/audiences/formats from one idea |
| **Owl** | 🦉 | Deep Analysis | Slow, observant, multi-perspective analysis to uncover hidden factors others miss |
| **Ant** | 🐜 | Break Into Steps | Decomposing complex goals into the smallest realistically completable actions |
| **Eagle** | 🦅 | Big Picture Strategy | Long-term strategic thinking, seeing how all the pieces connect from above |
| **Dolphin** | 🐬 | Creative Solutions | Playful, inventive approaches that break conventional thinking patterns |
| **Beaver** | 🦫 | Build Systems | Designing practical, step-by-step systems and processes that solve problems |
| **Elephant** | 🐘 | Cross-Field Connections | Applying insights from psychology, economics, science, and history to current challenges |

**How to use:** Each mode has a unique `invoke` trigger. Combine modes for compound thinking — start with Rabbit to generate options, then use Owl to analyze each deeply, then Ant to break the best option into steps.

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

**PictoFlux AI** is a contributed entry — free, unlimited AI image generation at `https://chat.mcp.so/server/pictoflux-ai`

**Security Vetting Process:**
1. Package signature verification
2. Permission scope analysis (filesystem, network, env vars)
3. Dependency vulnerability scan
4. Community trust signals (stars, contributors, maintainer history)
5. Red flag detection (excessive permissions, unverified maintainers)

---

### Technical Architecture

**Design System:** Neo-Brutalist Ultramodern Gen Z v5.0 — thick borders, hard offset shadows, high-saturation colors, WCAG AA contrast compliance, monospace + display typography, glitch effects, grain overlay, asymmetric layouts, Y2K chrome accents.

**Tech Stack:**
- **GSAP 3.12.5** — Animations, ScrollTrigger, Flip plugin for layout transitions
- **Web Components** — Custom `<skill-card>` element with shadow-free DOM
- **JSON-LD** — Machine-readable `ItemList` in `<head>` for search engine and AI agent discovery
- **CSS Custom Properties** — Dynamic theming via `?palette=` endpoint
- **Zero Build Step** — Single-file HTML, no Node.js, no bundler, deploy anywhere

**URL Endpoints:**
- `?format=json` — Raw JSON export of all 48 skills with metadata
- `?format=manifest` — JetBrains-style plugin.xml for IDE auto-discovery
- `?category=<name>` — Auto-filter to a specific category on load
- `?skill=<name>` — Auto-search for a specific skill on load
- `?embed=true` — Strip hero/marquee/footer for iframe embedding
- `?palette=FF2E63` — Generate a full brutalist color system from any hex triplet

---

### Project Structure

```
opencode-accomplishments/
├── index.html               # Skills showcase (v5.0.0, neo-brutalist, GSAP)
├── stacks.json              # 8 pre-built MCP stacks with synergy analysis
├── mcp-registry.json        # 105+ free MCP servers, 14 categories
├── vercel.json              # Vercel deployment config (static, headers)
├── AGENTS.md                # Agent operating instructions
├── SKILLS.md                # Skill documentation
├── PLUGINS.md               # Plugin manifest docs
├── agents/                  # Agent skill definitions
│   ├── SKILLS_MANIFEST.md   # Complete skills manifest
│   ├── SKILL_02_DESIGN_BUILD.md
│   ├── SKILL_03_CODE_API.md
│   ├── SKILL_04_AGENTIC.md
│   └── ...
├── skills/                  # Individual skill specifications
│   ├── context-compressor/  # Context compression skill
│   ├── ui-ux-pro-max-v7/    # Design intelligence skill
│   ├── gsap-animations/     # Animation patterns skill
│   ├── mcp-builder/         # MCP server building skill
│   └── ...
├── profiles/                # Agent profiles
├── workflows/               # Workflow definitions
└── README.md                # This file
```

---

### Optimization Audit — v5.0.0

| Issue Found | Fix Applied |
|-------------|-------------|
| `String.prototype.substr()` deprecated | Replaced with `substring()` in `applyPalette()` |
| Missing `<meta name="robots">` | Added `index, follow` robots meta tag |
| Missing favicon | Added SVG emoji favicon (lightning bolt) |
| nvidia-build skill still in `skills/` directory | Kept for historical reference (removed from showcase in v4.0.0) |
| Stale `skills-showcase.html` in download dir | Synced to match repo version |
| Count inconsistencies (41 vs 48) | All 15+ references updated to 48 skills, 10 categories |

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

Built with **ui-ux-pro-max-v7** + **gsap-animations** + **anthropic-frontend-design** + **frontend-design** — 48 skills — 10 categories — v5.0.0
