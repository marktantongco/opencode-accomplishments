# AGENTS.md — Structural Connection Map

**Bridges the 48 Skills Showcase ↔ 18 Agent System Files ↔ 127 MCP Servers ↔ MCP Stack Curator**

---

## Architecture Overview

This project operates on **three complementary layers**:

1. **Skills Showcase** (`docs/index.html`) — A visual, interactive catalog of 48 platform skills across 10 categories, rendered as a neo-brutalist single-page app with GSAP animations, Web Components, JSON-LD structured data, MCP server pairings per skill, and an interactive MCP Stack Curator. Serves as both a human-facing portfolio and a machine-readable API (`?format=json`, `?format=manifest`).

2. **Agent System** (`agents/`) — A production-ready AI partner system built on a Universal Router + 4 context-loaded skills (SKILL_01 through SKILL_04), with 18 comprehensive documentation files covering deployment, operations, monitoring, optimization, and evolution.

3. **MCP Ecosystem** (`stacks.json` + `mcp-registry.json`) — A curated directory of 127 free MCP servers across 14 categories, plus 8 pre-built MCP stack configurations that solve the unsolved problem: *which 4 servers do you use together?* The MCP Stack Curator provides synergy scoring, conflict detection, and a build-your-own feature.

The three layers are connected through a **skill-agent-MCP synergy matrix** that maps each platform skill to its corresponding agent skill mode AND recommended MCP servers, enabling intelligent context switching during AI-assisted work.

---

## The 4 Agent Skills

| Agent Skill | Domain | Effort | Tokens | Key Behaviors |
|-------------|--------|--------|--------|---------------|
| **SKILL_01** Conversational | Mobile, chat, exploration | `high` | 4,400 | Silent Protocol, advocacy mode, blind spot detection, lightweight code assist |
| **SKILL_02** Design + Build | Desktop, visual, UI/UX | `high` | 5,600 | 3 directions before building, anti-defaults (rejects Opus cream/serif), depth-seeking for design |
| **SKILL_03** Code + API | Desktop, production code | `xhigh` | 6,100 | Algorithm-first, 40-item quality gates, caveman protocols (repeatable patterns), no pseudocode |
| **SKILL_04** Agentic | Autonomous, orchestration | `xhigh` | 6,000 | Task decomposition, parallel subagent spawning, state tracking, failure recovery |

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

### Design & UI Category → SKILL_02 (Design + Build)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| ui-ux-pro-max-v7 | SKILL_02 | filesystem, fetch, google-drive | Design files + asset sourcing + brand kits |
| anthropic-frontend-design | SKILL_02 | filesystem, fetch, google-drive | AI interface design + reference retrieval |
| gsap-animations | SKILL_02 | filesystem, fetch, google-drive | Animation code + CDN references |
| frontend-design | SKILL_02 | filesystem, fetch, google-drive | Component generation + design system access |
| vercel-web-design-guidelines | SKILL_02 | filesystem, fetch, google-drive | Audit rules + accessibility standards |

### Reasoning Category → SKILL_01 (Conversational)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| chain-of-thought | SKILL_01 | memory, sequential-thinking, sqlite | Step storage + reasoning chains + structured data |
| socratic-method | SKILL_01 | memory, sequential-thinking, sqlite | Question persistence + logical flow |
| devils-advocate | SKILL_01 | memory, sequential-thinking, sqlite | Argument tracking + counter-logic |
| simulation-sandbox | SKILL_01 → SKILL_04 | memory, sequential-thinking, sqlite | Scenario storage + state simulation |

### Development Category → SKILL_03 (Code + API)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| mcp-builder | SKILL_03 | filesystem, github, docker | Build MCP servers + version control + containerize |
| superpowers | SKILL_03 | filesystem, github, docker | Spec-first code + CI/CD + packaging |
| deployment-manager | SKILL_03 | filesystem, github, docker | Deploy pipeline + repo management + container deploys |
| browser-use | SKILL_03 | filesystem, github, docker | Browser automation scripts + version + package |
| web-artifacts-builder | SKILL_03 | filesystem, github, docker | Artifact builds + repo sync + container testing |
| vercel-react-best-practices | SKILL_03 | filesystem, github, docker | React code + PR workflows + containerized builds |
| explained-code | SKILL_03 | filesystem, github, docker | Code reading + repo access + analysis |

### Content Category → SKILL_01 + SKILL_02

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| seo-content-writer | SKILL_01 | filesystem, brave-search, google-drive, slack | Research + write + briefs + review |
| humanizer | SKILL_01 | filesystem, brave-search, google-drive, slack | Text processing + reference + editing + feedback |
| social-media-manager | SKILL_01 | filesystem, brave-search, google-drive, slack | Content gen + trend research + assets + approval |
| social-content-pillars | SKILL_01 | filesystem, brave-search, google-drive, slack | Calendar creation + research + planning + team sync |

### Strategy Category → SKILL_01 + SKILL_04

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| jtbd-research | SKILL_01 | brave-search, memory, fetch | Customer research + persist findings + source data |
| gumroad-pipeline | SKILL_01 | brave-search, memory, fetch | Market research + funnel memory + competitor data |
| feature-research | SKILL_01 | brave-search, memory, fetch | Architecture research + decision persistence + docs |
| skill-finder | SKILL_04 | brave-search, memory, fetch | Skill discovery + rating memory + installation |

### System Category → SKILL_04 (Agentic)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| persistent-memory | SKILL_04 | filesystem, github, docker | Memory system + config sync + backup |
| system-prompt-sync | SKILL_04 | filesystem, github, docker | Auto-sync + version control + deployment |
| feedback-loop | SKILL_04 | filesystem, github, docker | Metrics storage + issue tracking + monitoring |
| context-compressor | Cross-cutting | filesystem, github, docker | Any mode + token optimization |
| agent-roles | SKILL_04 | filesystem, github, docker | Role management + config versioning |
| sample-hello-skill | SKILL_01 | filesystem, github, docker | Testing + validation |

### Data & Web Category → SKILL_04 + SKILL_01

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| web-reader | SKILL_01 → SKILL_04 | fetch, brave-search, sqlite, postgres | Page extraction + discovery + local + production data |
| audit-analyzer | SKILL_04 | fetch, brave-search, sqlite, postgres | Audit scraping + research + findings + reports |
| web-design-guidelines | SKILL_01 | fetch, brave-search, sqlite, postgres | Design rules + reference + checklists + data |
| code-research | SKILL_01 | fetch, brave-search, sqlite, postgres | Repo reading + search + local analysis + production |
| explore | SKILL_01 | fetch, brave-search, sqlite, postgres | Codebase search + web search + indexing |

### Creative Category → SKILL_02 + SKILL_04

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| photography-ai | SKILL_02 | filesystem, fetch, everart | Image assets + reference + AI generation |
| output-formatter | SKILL_02 | filesystem, fetch, everart | Format files + templates + media |

### MCP Servers Category → SKILL_03 + SKILL_04

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| pictoflux-ai | SKILL_03 | filesystem, github | MCP image tools + server management |
| mcp-stack-curator | SKILL_04 | filesystem, github | Stack analysis + server configuration |
| mcp-registry | SKILL_04 | filesystem, github | Registry management + catalog updates |
| mcp-security-scanner | SKILL_04 | filesystem, github | Security auditing + config review |

### Agent Modes Category → SKILL_04 (Agentic)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| agent-rabbit | SKILL_04 | memory, sequential-thinking, filesystem | Ideation storage + thought chains + idea files |
| agent-owl | SKILL_04 | memory, sequential-thinking, filesystem | Analysis persistence + logical chains + evidence |
| agent-ant | SKILL_04 | memory, sequential-thinking, filesystem | Task breakdown + step tracking + plan files |
| agent-eagle | SKILL_04 | memory, sequential-thinking, filesystem | Strategy memory + vision chains + roadmap files |
| agent-dolphin | SKILL_04 | memory, sequential-thinking, filesystem | Creative memory + reasoning + concept files |
| agent-beaver | SKILL_04 | memory, sequential-thinking, filesystem | Architecture memory + build plans + system files |
| agent-elephant | SKILL_04 | memory, sequential-thinking, filesystem | Knowledge graph + cross-domain links + synthesis |

---

## MCP Stack Registry

8 pre-built stacks are defined in `stacks.json`. Each recommends exactly 4 servers with documented synergy scores and mismatch warnings.

| Stack | Emoji | Synergy | Servers | Paired Skills |
|-------|-------|---------|---------|---------------|
| Full-Stack Web Studio | 🌐 | 94 | filesystem, github, vercel, postgres | fullstack-dev, frontend-design, deployment-manager, mcp-builder |
| AI Research Lab | 🧪 | 91 | brave-search, fetch, memory, sqlite | deep-research, chain-of-thought, web-reader, context-compressor |
| Content Engine | ✍️ | 87 | filesystem, brave-search, google-drive, slack | seo-geo, humanizer, social-media-manager, docx |
| DevOps Command Center | 🏗️ | 92 | github, docker, kubernetes, slack | deployment-manager, audit-analyzer, feedback-loop, skill-vetter |
| Data Pipeline Studio | 📊 | 89 | postgres, sqlite, fetch, filesystem | xlsx, finance, context-compressor, explore |
| Security Audit Toolkit | 🔒 | 86 | filesystem, github, brave-search, docker | skill-vetter, audit-analyzer, skill-scanner, devils-advocate |
| Creative Studio | 🎨 | 85 | filesystem, fetch, google-drive, slack | image-generation, photography-ai, gsap-animations, ui-ux-pro-max-v7 |
| Mobile App Workshop | 📱 | 88 | filesystem, github, fetch, memory | react-native-skills, shadcn, deployment-manager, feedback-loop |

---

## Agent File Index

### Core System Files
| File | Purpose | Read When |
|------|---------|-----------|
| `MARK_SYSTEM_PROMPT_FINAL.md` | Universal Router v1.0 + SKILL_01 + deployment + testing + contingency | Before deployment |
| `SKILLS_MANIFEST.md` | Routing guide, token budgets, deployment phases, skill-switching patterns | Understanding system |
| `SKILL_02_DESIGN_BUILD.md` | Design skill spec (2,500 tokens), anti-defaults, depth-seeking | Building UI/design |
| `SKILL_03_CODE_API.md` | Code skill spec (3,000 tokens), quality gates, caveman protocols | Writing production code |
| `SKILL_04_AGENTIC.md` | Agentic skill spec (2,800 tokens), task decomposition, state management | Autonomous workflows |
| `SKILL_SHORTCUTS_FUNCTION_CALLS.md` | Keyboard shortcuts, function calls, auto-detection | Daily reference |

### Operational Documentation
| File | Purpose | Read When |
|------|---------|-----------|
| `00_START_HERE.md` | Navigation hub, file inventory, deployment timeline | Right now |
| `01_OPERATIONAL_PLAYBOOKS.md` | 6 real-world workflows | During Week 1 |
| `02_ADVANCED_CONFIGURATIONS.md` | 6 platform configs | Platform setup |
| `03_MONITORING_METRICS.md` | Metrics tracking, dashboards, alerts | Every Friday |
| `04_POWER_USER_PLAYBOOK.md` | 10 advanced patterns | Week 2+ mastery |
| `05_EXTENDED_FAQ.md` | 30+ troubleshooting scenarios | When stuck |
| `06_ONE_PAGE_CHEAT_SHEET.md` | One-page reference card | Daily |
| `07_INTEGRATION_GUIDE.md` | 8 integrations | Adding tools |
| `08_EVOLUTION_GUIDE.md` | 5-phase roadmap | Month 2+ planning |
| `09_AUTOMATION_SCRIPTS.md` | 6 production-ready scripts | Building automation |
| `10_VISUAL_REFERENCE.md` | Architecture diagrams, decision trees | Understanding system |
| `11_COMPLETE_SYSTEM_INDEX.md` | Complete index of all files | Finding information |

### MCP Data Files
| File | Purpose | Read When |
|------|---------|-----------|
| `stacks.json` | 8 pre-built MCP stacks with synergy scoring | Choosing server combinations |
| `mcp-registry.json` | 127 free MCP servers across 14 categories | Discovering MCP servers |

---

## CONTINUITY Protocol

When switching between agent skills during a session, the CONTINUITY protocol ensures context carries forward:

1. System reviews the last 10 messages for stated preferences, prior decisions, unresolved threads
2. Context carries forward into the new skill's execution
3. Switch is announced visibly: "Switching to [Design/Code/Agentic] mode — I've noted [context]"
4. Quick-Feedback Prompt validates: "Was that transition smooth? (Y/N)"

This is critical when chaining skills: Research (SKILL_01) → Design (SKILL_02) → Code (SKILL_03) → Deploy (SKILL_04).

---

## Integration with Skills Showcase

The `docs/index.html` showcase exposes skills data via URL parameters that the agent system can consume:

- `?format=json` — Full skills data as JSON (for programmatic access)
- `?format=manifest` — Web app manifest format (for PWA/installation)
- `?skill=<name>` — Deep link to a specific skill card
- `?category=<name>` — Filter to a specific category
- `?embed=true` — Embeddable mode (no header/footer)
- `?palette=<hex>` — Override the design accent color

Each skill card now displays MCP server pairings when expanded, and the MCP Stack Curator provides interactive stack exploration with synergy scoring.

---

## Quick Start

1. Read `agents/00_START_HERE.md` for the navigation guide
2. Read `agents/MARK_SYSTEM_PROMPT_FINAL.md` for deployment procedures
3. Deploy Universal Router + SKILL_01 to your AI platform
4. Test with 6 conversations (see Week 1 protocol)
5. Add SKILL_02/03/04 based on testing results
6. Explore `stacks.json` for your MCP server combinations
7. Use the MCP Stack Curator in the showcase to find your ideal stack
8. Monitor with `agents/03_MONITORING_METRICS.md` framework
9. Evolve with `agents/08_EVOLUTION_GUIDE.md` roadmap
