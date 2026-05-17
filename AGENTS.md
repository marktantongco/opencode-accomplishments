# AGENTS.md — Structural Connection Map

**Bridges the 38 Skills Showcase ↔ 18 Agent System Files ↔ Platform Skill Ecosystem**

---

## Architecture Overview

This project operates on two complementary layers:

1. **Skills Showcase** (`docs/index.html`) — A visual, interactive catalog of 38 platform skills across 8 categories, rendered as a neo-brutalist single-page app with GSAP animations, Web Components, and JSON-LD structured data. Serves as both a human-facing portfolio and a machine-readable API (`?format=json`, `?format=manifest`).

2. **Agent System** (`agents/`) — A production-ready AI partner system built on a Universal Router + 4 context-loaded skills (SKILL_01 through SKILL_04), with 18 comprehensive documentation files covering deployment, operations, monitoring, optimization, and evolution.

The two layers are connected through a **skill routing matrix** that maps each platform skill to its corresponding agent skill mode, enabling intelligent context switching during AI-assisted work.

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

## Platform Skills → Agent Skill Mapping

### Design & UI Category → SKILL_02 (Design + Build)

| Showcase Skill | Agent Mode | Why |
|---------------|------------|-----|
| ui-ux-pro-max | SKILL_02 | Visual design reasoning, component library patterns |
| brainstorming | SKILL_02 | Gates into design before implementation |
| gsap-animations | SKILL_02 | Animation design, scroll effects, motion system |
| shadcn | SKILL_02 → SKILL_03 | Component design then production code |
| web-design-guidelines | SKILL_02 | Design principles, responsive layout |

### Reasoning Category → SKILL_01 (Conversational)

| Showcase Skill | Agent Mode | Why |
|---------------|------------|-----|
| chain-of-thought | SKILL_01 | Structured reasoning for decisions |
| socratic-method | SKILL_01 | Questioning-based exploration |
| devils-advocate | SKILL_01 | Challenging assumptions, comparative reasoning |
| simulation-sandbox | SKILL_01 → SKILL_04 | What-if exploration, scenario testing |

### Development Category → SKILL_03 (Code + API)

| Showcase Skill | Agent Mode | Why |
|---------------|------------|-----|
| coding-agent | SKILL_03 | Structured coding workflow, quality gates |
| fullstack-dev | SKILL_03 | Fullstack production code |
| next-best-practices | SKILL_03 | Framework correctness |
| react-best-practices | SKILL_03 | Performance optimization |
| composition-patterns | SKILL_03 | Scalable component architecture |
| mcp-builder | SKILL_03 | API/protocol implementation |
| react-native-skills | SKILL_03 | Mobile production code |
| web-artifacts-builder | SKILL_03 | Build pipeline, single-file bundling |

### Content Category → SKILL_01 + SKILL_02

| Showcase Skill | Agent Mode | Why |
|---------------|------------|-----|
| docx | SKILL_01 | Document creation workflows |
| pdf | SKILL_01 | Report generation |
| xlsx | SKILL_01 | Spreadsheet/data analysis |
| blog-writer | SKILL_02 | Content with visual framing |

### Strategy Category → SKILL_01 + SKILL_04

| Showcase Skill | Agent Mode | Why |
|---------------|------------|-----|
| deep-research | SKILL_04 | Parallel search agents, cross-referencing |
| seo-geo | SKILL_01 | Content strategy, optimization |
| jobs-to-be-done | SKILL_01 | Customer research, value proposition |
| skill-router | SKILL_04 | Intent classification, skill stack mapping |

### System Category → SKILL_04 (Agentic)

| Showcase Skill | Agent Mode | Why |
|---------------|------------|-----|
| skill-creator | SKILL_04 | Subagent-based eval, blind A/B comparison |
| skill-vetter | SKILL_04 | Multi-phase security analysis |
| skill-scanner | SKILL_04 | 8-phase scan pipeline |
| find-skills | SKILL_01 | Discovery queries |
| context-compressor | Cross-cutting | Token optimization (any mode) |
| humanizer | SKILL_01 | Tone adjustment |

### Data & Web Category → SKILL_04 + SKILL_01

| Showcase Skill | Agent Mode | Why |
|---------------|------------|-----|
| web-search | SKILL_01 | Quick lookups, topic comparison |
| web-reader | SKILL_01 → SKILL_04 | Page extraction, batch pipelines |
| agent-browser | SKILL_04 | Autonomous browsing, form filling |
| browser-use | SKILL_04 | Natural language → browser actions |
| finance | SKILL_01 → SKILL_04 | Quick quotes → complex analysis |

### Creative Category → SKILL_02 + SKILL_04

| Showcase Skill | Agent Mode | Why |
|---------------|------------|-----|
| image-generation | SKILL_02 | Visual artifact creation |
| photography-ai | SKILL_02 | Composition, lighting, gear advice |

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
| `01_OPERATIONAL_PLAYBOOKS.md` | 6 real-world workflows (build product, project mgmt, debug, client work, AI product, learning) | During Week 1 |
| `02_ADVANCED_CONFIGURATIONS.md` | 6 platform configs (Claude.ai, API, Code, Batch, Team, Integrations) | Platform setup |
| `03_MONITORING_METRICS.md` | Metrics tracking, dashboards, alerts, weekly health check | Every Friday |
| `04_POWER_USER_PLAYBOOK.md` | 10 advanced patterns (parallel, incremental, feedback loops, token optimization, chaining) | Week 2+ mastery |
| `05_EXTENDED_FAQ.md` | 30+ troubleshooting scenarios | When stuck |
| `06_ONE_PAGE_CHEAT_SHEET.md` | One-page reference card | Daily (print + laminate) |
| `07_INTEGRATION_GUIDE.md` | 8 integrations (Notion, Google Drive, GitHub, Slack, Email, Discord, Database, Zapier) | Adding tools |
| `08_EVOLUTION_GUIDE.md` | 5-phase roadmap (Foundation → Stabilization → Optimization → Specialization → Scale) | Month 2+ planning |
| `09_AUTOMATION_SCRIPTS.md` | 6 production-ready scripts (Python router, monitor, quality gate, JS switcher, report, deploy) | Building automation |
| `10_VISUAL_REFERENCE.md` | Architecture diagrams, decision trees, workflow flows | Understanding system |
| `11_COMPLETE_SYSTEM_INDEX.md` | Complete index of all 17 files, reading paths, maintenance schedule | Finding information |

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

The agent system's `SKILL_SHORTCUTS_FUNCTION_CALLS.md` provides programmatic loading functions (`loadSkill()`, `detect_skill()`, `call_claude_with_skill()`) that can integrate with the showcase's JSON endpoint to dynamically load skill specifications.

---

## Quick Start

1. Read `agents/00_START_HERE.md` for the navigation guide
2. Read `agents/MARK_SYSTEM_PROMPT_FINAL.md` for deployment procedures
3. Deploy Universal Router + SKILL_01 to your AI platform
4. Test with 6 conversations (see Week 1 protocol)
5. Add SKILL_02/03/04 based on testing results
6. Monitor with `agents/03_MONITORING_METRICS.md` framework
7. Evolve with `agents/08_EVOLUTION_GUIDE.md` roadmap
