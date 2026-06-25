# AGENTS.md — Operating Doctrine + Structural Connection Map

> **Source of truth** for any agent operating on this repository. Two layers:
> 1. **Operating Doctrine** (System Master Prompt v4) — *how to think, route, execute.*
> 2. **Structural Map** — *what exists, where, and how it connects.*

---

## Part I — Operating Doctrine (System Master Prompt v4)

**DNA**: Zero fluff. Working code. Alignment > execution. Advocacy. Quality gated. Show reasoning. Depth before speed.

### 🔇 Silent Protocol (invisible, every response)

1. What do they actually need? (Parse beyond literal)
2. What would they miss? (The blind spot)
3. What's the simplest true answer? (Irreducible)

**Route**: Stated=Actual + simple? → SPEED. Misaligned? → SURFACE FRAME. Novel? → DEPTH. Urgent? → QUICK + DEEPER NOTE.

### Core Rules

1. Working code only. No pseudocode, no `[TODO]`, no placeholders. Version, deps, graceful fails.
2. State assumptions first. Flag risks: `⚠️ Breaks if X`.
3. Impact first; name tech debt.
4. Calibrate depth: Ask once (discovery vs build?), assume after.
5. Advocacy on. "Consider instead…"
6. No apologies. "Breaks on X. Workaround: Y. Better: Z."
7. Vague? Assume, state, ship, refine.
8. Show thinking: "X because [assumption + evidence]. Counter: [why it fails]. Still holds?"

### Hard Stops

No child safety. No malicious code. No IP (15+ words = violation; 1 quote/source). No lyrics/poems. No fabricated attribution. No displacive summaries.

### Depth-Seeking (all but simplest)

1. **Surface frame** — What problem? What must be true?
2. **Test frame** — What falsifies it? Alternatives?
3. **Build model** — First principles? Connections? Change points?
4. **Show reasoning** — Why this, not that? Algorithm before code.
5. **Name risk** — What fails? Blind spot? Data that flips it?

**Contrarian**: Ask "What must be true for me to be wrong?" If can't answer, dig deeper.

**Hierarchy**: Shortcut ("Do X") → Shallow ("Do X, Y") → Deep ("Do X, Y; but Z→W if [condition]") → Master (chain visible + alternatives possible).

Master for: architecture, strategy, long-term. Shallow for: tactical, urgent, known patterns.

### Quality Gates

| Check | Question |
|-------|----------|
| Assumptions | Stated + validated? |
| Reasoning | Complete + counter-cases? |
| Code | Runs, errors, edge cases, type-safe, production or `[CONCEPT]`? |
| Strategy | Frame justified, evidence, alternatives, impact, inverse? |
| Analysis | Data path, alternatives, limitations, confidence? |

All pass → submit. Any fail → iterate.

### Response Framework

1. Run Silent Protocol (diagnose silently)
2. Route (Speed or Depth, commit)
3. Surface + test frame (name assumptions, contrarian if complex)
4. Execute (code or action)
5. Quality gates (iterate if fail)
6. Structure:
   ```
   Problem (1 line)
   Solution
   Reasoning
   Assumptions
   ⚡⚡ Next Step
   ✨ 3 Suggestions (Tactical / Strategic / Reframe)
   ```

Simple one-liner? Still end with ✨ **3 Suggestions**.

### Show Your Work

- **Code**: Algorithm first. Trade-off. Happy path + break case. Why works, what breaks.
- **Strategy**: Decision tree. Evidence that changes it. Inverse case.
- **Analysis**: Data path (order). Alternatives. Data that flips. Confidence + why.

### Tone

Direct. Conversational (one person). Confident + provisional. Short sentences. Plain language. No filler.

---

## Part II — Structural Connection Map

**Bridges the 90+ Skills Showcase ↔ 18 Agent System Files ↔ 145 MCP Servers ↔ Animation Pipeline ↔ Three.js Orchestrator ↔ ModelScope MCP ↔ MCP Stack Curator ↔ Theme Marketplace ↔ Stack Recommender ↔ Design Optimization Tree ↔ Supanova Suite by uxjoseph ↔ Knowledge-Base PWA ↔ Vercel AI Gateway**

### Architecture Overview

This project operates on **four complementary layers**:

1. **Knowledge-Base PWA** (`docs/index.html`) — A search-first, mobile-first, Raycast-style interactive catalog of 90+ platform skills across 11 categories and 6 zones (ACTIVATE / BUILD / VALIDATE / PLAYBOOK / MONETIZE / SYSTEM). Includes command palette (⌘K) with fuzzy search, conversational recommendation engine (chat widget wired to Vercel AI Gateway edge function), GSAP staggered animations + ScrollTrigger, theme palettes, and a complete URL API (`?format=json`, `?skill=`, `?category=`, `?zone=`, `?palette=`, `?embed=`, `?action=search`). Dark `#05060A` aesthetic, glassmorphic nav, Inter + JetBrains Mono typography.

2. **Agent System** (`agents/`) — A production-ready AI partner system built on a Universal Router + 4 context-loaded skills (SKILL_01 through SKILL_04), with 18 comprehensive documentation files covering deployment, operations, monitoring, optimization, and evolution. Operating doctrine = System Master Prompt v4 (above).

3. **MCP Ecosystem** (`stacks.json` + `mcp-registry.json`) — A curated directory of 145 free MCP servers across 15 categories (including ModelScope with 2300+ free Chinese MCP servers), plus 8 pre-built MCP stack configurations with synergy scoring.

4. **Skills Library** (`skills/`) — 90+ local SKILL.md files spanning Animation, Architecture, Audit, Automation, Communication, Content, Data, Design, Infrastructure, Research, and Validation. Each follows the Agent Skills standard (portable across Claude Code, Cursor, Codex, Gemini CLI, OpenCode).

The four layers are connected through a **skill-agent-MCP synergy matrix** that maps each platform skill to its corresponding agent skill mode AND recommended MCP servers, enabling intelligent context switching during AI-assisted work.

---

## Part III — The 4 Agent Skills

| Agent Skill | Domain | Effort | Tokens | Key Behaviors |
|-------------|--------|--------|--------|---------------|
| **SKILL_01** Conversational | Mobile, chat, exploration | `high` | 4,400 | Silent Protocol, advocacy mode, blind spot detection, lightweight code assist |
| **SKILL_02** Design + Build | Desktop, visual, UI/UX | `high` | 5,600 | 3 directions before building, anti-defaults (rejects Opus cream/serif), depth-seeking for design |
| **SKILL_03** Code + API | Desktop, production code | `xhigh` | 6,100 | Algorithm-first, 40-item quality gates, caveman protocols (repeatable patterns), no pseudocode |
| **SKILL_04** Agentic | Autonomous, orchestration | `xhigh` | 6,000 | Task decomposition, parallel subagent spawning, state tracking, failure recovery |

**Universal Router** (3,100 tokens, always loaded) handles routing between skills, CONTINUITY protocol (context carrying), closing patterns, and hard stops.

---

## Part IV — The 7 Agent Mode Skills

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

## Part V — Skill → Agent → MCP Synergy Matrix

### Design & UI Category → SKILL_02 (Design + Build)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| design-nested | SKILL_02 | filesystem, fetch, google-drive | Meta-design orchestration — routes ALL design work through optimization tree |
| supanova-premium-aesthetic | SKILL_02 | filesystem, fetch, google-drive | Premium $150k+ Korean-agency landing pages with Variance Mandate |
| supanova-design-engine | SKILL_02 | filesystem, fetch, google-drive | Tunable aesthetic engine — DESIGN_VARIANCE:8, MOTION_INTENSITY:6 |
| supanova-redesign-engine | SKILL_02 | filesystem, fetch, google-drive | Scan → Diagnose → Fix redesign workflow |
| supanova-full-output | SKILL_02 | filesystem, fetch, google-drive | Zero-placeholder production output enforcement |
| landing-page-generator | SKILL_02 | filesystem, fetch, google-drive | High-conversion product/service landing pages |
| ui-ux-pro-max-v7 | SKILL_02 | filesystem, fetch, google-drive | Design files + asset sourcing + brand kits |
| anthropic-frontend-design | SKILL_02 | filesystem, fetch, google-drive | AI interface design + reference retrieval |
| gsap-animations | SKILL_02 | filesystem, fetch, google-drive | Animation code + CDN references |
| animation-orchestrator | SKILL_02 | filesystem, fetch, google-drive | Routes ALL animation work — Motion vs GSAP vs CSS decision gate |
| animation-auditor | SKILL_03 | filesystem, github, docker | Pre-commit quality gates for animation code |
| motion-animator | SKILL_02 | filesystem, fetch, google-drive | React UI animations with Motion (2.3KB-34KB) |
| gsap-animator | SKILL_02 | filesystem, fetch, google-drive | Complex timeline/scroll/SVG animations with GSAP |
| frontend-design | SKILL_02 | filesystem, fetch, google-drive | Component generation + design system access |
| vercel-web-design-guidelines | SKILL_02 | filesystem, fetch, google-drive | Audit rules + accessibility standards |

### Reasoning Category → SKILL_01 (Conversational)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| chain-of-thought | SKILL_01 | memory, sequential-thinking, sqlite | Step storage + reasoning chains + structured data |
| socratic-method | SKILL_01 | memory, sequential-thinking, sqlite | Question persistence + logical flow |
| devils-advocate | SKILL_01 | memory, sequential-thinking, sqlite | Argument tracking + counter-logic |
| simulation-sandbox | SKILL_01 → SKILL_04 | memory, sequential-thinking, sqlite | Scenario storage + state simulation |
| brainstorming | SKILL_01 | memory, sequential-thinking, sqlite | Idea generation + reasoning chains + structured storage |

### Development Category → SKILL_03 (Code + API)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| mcp-builder | SKILL_03 | filesystem, github, docker | Build MCP servers + version control + containerize |
| superpowers | SKILL_03 | filesystem, github, docker | Spec-first code + CI/CD + packaging |
| tdd-workflow | SKILL_03 | filesystem, github, docker | Test-first discipline + version control + containerized test runs |
| deployment-manager | SKILL_03 | filesystem, github, docker | Deploy pipeline + repo management + container deploys |
| browser-use | SKILL_03 | filesystem, github, docker | Browser automation scripts + version + package |
| web-artifacts-builder | SKILL_03 | filesystem, github, docker | Artifact builds + repo sync + container testing |
| vercel-react-best-practices | SKILL_03 | filesystem, github, docker | React code + PR workflows + containerized builds |
| explained-code | SKILL_03 | filesystem, github, docker | Code reading + repo access + analysis |
| composition-patterns | SKILL_03 | filesystem, github, docker | Architecture patterns + version control + containerized tests |
| threejs-orchestrator | SKILL_03 | filesystem, github, docker | Gates ALL 3D work — routes r3f-react vs vanilla vs Babylon.js |
| skill-architect | SKILL_03 | filesystem, github, docker | Create/optimize SKILL.md files following Agent Skills standard |
| context7-docs | SKILL_03 | context7, fetch, memory | Always-current API documentation for any library |

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
| to-prd | SKILL_01 + SKILL_04 | brave-search, memory, fetch | Context synthesis + requirement persistence + source verification |
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
| modelscope-mcp-hub | SKILL_04 | modelscope-image-gen, modelscope-model-discovery, context7 | 2300+ free Chinese MCP servers with hosted deployment |

### Agents Category → SKILL_04 (Agentic)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| agent-rabbit | SKILL_04 | memory, sequential-thinking, filesystem | Ideation storage + thought chains + idea files |
| agent-owl | SKILL_04 | memory, sequential-thinking, filesystem | Analysis persistence + logical chains + evidence |
| agent-ant | SKILL_04 | memory, sequential-thinking, filesystem | Task breakdown + step tracking + plan files |
| agent-eagle | SKILL_04 | memory, sequential-thinking, filesystem | Strategy memory + vision chains + roadmap files |
| agent-dolphin | SKILL_04 | memory, sequential-thinking, filesystem | Creative memory + reasoning + concept files |
| agent-beaver | SKILL_04 | memory, sequential-thinking, filesystem | Architecture memory + build plans + system files |
| agent-elephant | SKILL_04 | memory, sequential-thinking, filesystem | Knowledge graph + cross-domain links + synthesis |

### Infrastructure Category → SKILL_04 (Agentic)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| 9router-gateway | SKILL_04 | filesystem, github, docker | AI routing gateway + version control + containerized deploys |
| owl-proxy-defense | SKILL_04 | filesystem, github, docker | Protocol-first proxy defense + CI/CD enforcement |
| antigravity-proxy | SKILL_04 | filesystem, github, docker | MITM proxy bridge + multi-account rotation |
| 4cli-unified | SKILL_04 | filesystem, github, docker | Unified meta-CLI + 9Router tier routing |
| triune-proxy-stack | SKILL_04 | filesystem, github, docker | Maximum redundancy proxy + auto-failover |
| secret-vault | SKILL_04 | filesystem, github, docker | Unified credential vault + age encryption |
| opencode-owl-install-proxy | SKILL_04 | filesystem, github, docker | OpenCode-optimized Owl proxy installer + tier routing + anti-bot |
| openhuman-owl-install-proxy | SKILL_04 | filesystem, github, docker | OpenHuman-optimized Owl proxy + privacy-first + consent-gated |
| combined-proxy-billing | SKILL_04 | filesystem, github, docker | Unified billing for multi-proxy stacks + budget alerts |
| openrelay-go | SKILL_04 | filesystem, github, docker | Go-based high-performance relay + connection pooling |
| api-gateway-skill | SKILL_04 | filesystem, github, docker | API gateway orchestration + rate limiting + auth |

### 7-Agent MASTER Pipeline → SKILL_04 (Agentic)

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| agent-master | SKILL_04 | memory, sequential-thinking, filesystem | Orchestrates all 7 agents in sequence |
| agent-decision | SKILL_04 | memory, sequential-thinking, filesystem | Routes tasks to the right specialist |
| agent-simulator | SKILL_04 | memory, sequential-thinking, filesystem | Dry-runs implementations |
| agent-auditor | SKILL_04 | memory, sequential-thinking, filesystem | Validates against standards |
| agent-profiler | SKILL_04 | memory, sequential-thinking, filesystem | Finds ACTUAL bottlenecks |
| agent-optimizer | SKILL_04 | memory, sequential-thinking, filesystem | Applies targeted fixes |
| agent-maintenance | SKILL_04 | memory, sequential-thinking, filesystem | Monitors production |

### Animation Engineering → SKILL_02 + SKILL_03

| Showcase Skill | Agent Mode | MCP Servers | Why |
|---------------|------------|-------------|-----|
| animation-hybrid-architect | SKILL_02 | filesystem, fetch, google-drive | Meta-skill for Motion + GSAP boundaries |
| gsap-animation-engineer | SKILL_02 | filesystem, fetch, google-drive | GSAP v3.13+ cinematic scroll/text/SVG |
| motion-animation-engineer | SKILL_02 | filesystem, fetch, google-drive | Motion v12 declarative UI animation |

---

## Part VI — Curated External Skills (skills.sh Registry)

These are external skills documented in the knowledge-base PWA but installed from the skills.sh registry (732K+ indexed skills as of June 2026). Each card in the PWA exposes its install command for one-click copy.

| # | Skill | Source | Installs | Install Command |
|---|-------|--------|----------|-----------------|
| 1 | **ui-ux-pro-max** | nextlevelbuilder/ui-ux-pro-max-skill | 234.1K | `npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max` |
| 2 | **21st-registry** | 21st-dev/registry | 105 | `npx skills add 21st-dev/registry --skill 21st-dev-components` |
| 3 | **21st** (marketplace) | serafimcloud/21st | 5.3K stars | `npx skills add serafimcloud/21st --skill 21st` |
| 4 | **gsap-core** | greensock/gsap-skills | 27.7K | `npx skills add greensock/gsap-skills` |
| 5 | **framer-motion-animator** | patricio0312rev/skills | 6.9K | `npx skills add patricio0312rev/skills --skill framer-motion-animator` |
| 6 | **threejs-animation** | cloudai-x/threejs-skills | 7.9K | `npx skills add cloudai-x/threejs-skills --skill three.js-animation` |
| 7 | **stitch-loop** | google-labs-code/stitch-skills | 45.0K | `npx skills add google-labs-code/stitch-skills --skill stitch-loop` |

### Companion: skills.sh Top Leaderboard (curated additions)

These are referenced in the PWA's "Recommended Skills" sidebar:

| Skill | Source | Installs | Why include |
|-------|--------|----------|-------------|
| find-skills | vercel-labs/skills | 2.2M | The meta-skill — discovers other skills |
| frontend-design | anthropics/skills | 587.2K | Official Anthropic design patterns |
| vercel-react-best-practices | vercel-labs/agent-skills | 500.9K | Production React patterns |
| agent-browser | vercel-labs/agent-browser | 482.6K | Browser automation via CDP |
| skill-creator | anthropics/skills | 286.0K | Build your own skills |
| remotion-best-practices | remotion-dev/skills | 390.4K | Video generation patterns |
| supabase-postgres-best-practices | supabase/agent-skills | 250.3K | Database patterns |
| sleek-design-mobile-apps | sleekdotdesign/agent-skills | 274.6K | Mobile-first design |
| brainstorming | obra/superpowers | 241.7K | Divergent thinking framework |

### 21st.dev API Integration

The PWA's chat widget can optionally fetch real component data from 21st.dev:

- **API key**: `an_sk_7426c194af098c067b4ff71f75406eaca00156f85b050f145f6f16460947a24d`
- **Endpoint**: `https://21st.dev/api/components`
- **Usage**: The `/api/recommend` edge function can be extended to query 21st.dev when a user asks for "React components" or "shadcn alternatives"
- **Auth**: `Authorization: Bearer an_sk_...`

---

## Part VII — MCP Stack Registry

8 pre-built stacks are defined in `stacks.json`. Each recommends exactly 4 servers with documented synergy scores and mismatch warnings.

| Stack | Emoji | Synergy | Servers | Paired Skills |
|-------|-------|---------|---------|---------------|
| Full-Stack Web Studio | 🌐 | 94 | filesystem, github, vercel, postgres | frontend-design, deployment-manager, mcp-builder, api-gateway-skill |
| AI Research Lab | 🧪 | 91 | brave-search, fetch, memory, sqlite | deep-research, chain-of-thought, web-reader, context-compressor |
| Content Engine | ✍️ | 87 | filesystem, brave-search, google-drive, slack | seo-geo, humanizer, social-media-manager, docx |
| DevOps Command Center | 🏗️ | 92 | github, docker, kubernetes, slack | deployment-manager, audit-analyzer, feedback-loop, skill-vetter |
| Data Pipeline Studio | 📊 | 89 | postgres, sqlite, fetch, filesystem | xlsx, finance, context-compressor, explore |
| Security Audit Toolkit | 🔒 | 86 | filesystem, github, brave-search, docker | skill-vetter, audit-analyzer, skill-scanner, devils-advocate |
| Creative Studio | 🎨 | 85 | filesystem, fetch, google-drive, slack | image-generation, photography-ai, gsap-animations, ui-ux-pro-max-v7 |
| Mobile App Workshop | 📱 | 88 | filesystem, github, fetch, memory | react-native-skills, shadcn, deployment-manager, feedback-loop |

---

## Part VIII — Agent File Index

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
| `mcp-registry.json` | 145 free MCP servers across 15 categories (incl. ModelScope) | Discovering MCP servers |

---

## Part IX — CONTINUITY Protocol

When switching between agent skills during a session, the CONTINUITY protocol ensures context carries forward:

1. System reviews the last 10 messages for stated preferences, prior decisions, unresolved threads
2. Context carries forward into the new skill's execution
3. Switch is announced visibly: "Switching to [Design/Code/Agentic] mode — I've noted [context]"
4. Quick-Feedback Prompt validates: "Was that transition smooth? (Y/N)"

This is critical when chaining skills: Research (SKILL_01) → Design (SKILL_02) → Code (SKILL_03) → Deploy (SKILL_04).

---

## Part X — Integration with Knowledge-Base PWA

The `docs/index.html` PWA exposes skills data via URL parameters that the agent system can consume:

- `?format=json` — Full skills data as JSON (for programmatic access)
- `?format=manifest` — Web app manifest format (for PWA/installation)
- `?skill=<name>` — Deep link to a specific skill card
- `?category=<name>` — Filter to a specific category
- `?zone=<name>` — Switch to a specific zone (activate/build/validate/playbook/monetize/system/all)
- `?palette=<hex>` — Override the design accent color
- `?embed=true` — Embeddable mode (no header/footer)
- `?action=search` — Auto-open the command palette on load

Each skill card displays MCP server pairings when expanded, and the MCP Stack Curator provides interactive stack exploration with synergy scoring.

---

## Part XI — Animation + 3D Pipeline Rules

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

### Pre-Commit Hook

The `.git/hooks/pre-commit` hook runs `audit-animation.py` and `audit-threejs.py` on every commit. It catches:

- Missing cleanup (useGSAP, dispose, revert)
- Bundle violations (synchronous 3D imports in page bundles)
- Missing 'use client' in R3F/Motion files
- Missing reduced-motion checks
- GSAP plugin import without registerPlugin

---

## Part XII — Quick Start

1. Read `agents/00_START_HERE.md` for the navigation guide
2. Read `agents/MARK_SYSTEM_PROMPT_FINAL.md` for deployment procedures
3. Deploy Universal Router + SKILL_01 to your AI platform
4. Test with 6 conversations (see Week 1 protocol)
5. Add SKILL_02/03/04 based on testing results
6. Explore `stacks.json` for your MCP server combinations
7. Use the MCP Stack Curator in the PWA to find your ideal stack
8. Monitor with `agents/03_MONITORING_METRICS.md` framework
9. Evolve with `agents/08_EVOLUTION_GUIDE.md` roadmap

---

## Part XIII — Research Backlog

The following research reports are loaded into the agent's working context (under `/home/z/my-project/upload/`):

| Report | Key Findings |
|--------|-------------|
| `oh-my-opencode_research_report.md` | 11-agent mythological orchestration (Sisyphus, Prometheus, Oracle, …) vs 7-agent functional (Scout, Reviewer, Implementer, …). OMO = full-featured 38K stars. OMO-slim = MIT-licensed, token-efficient 5.1K stars. Council agent = unique multi-model consensus. |
| `opencode_enhancements_research.md` | Tiered "Above Mediocrity" stack: Tier 1 = OMO + Superpowers + Context7 MCP + GitHub MCP. Tier 2 = OpenSpec + Antigravity Awesome Skills (1,500+) + Firecrawl + OpenRouter + Gemini Auth. Tier 3 = ntfy/notify + Worktree + Daytona + Browser + LSP + Ollama. |
| `interactive_infographic_research.md` | Framer Motion (Motion) = primary, ~59KB gz, 6M weekly downloads. GSAP = timeline control + ScrollTrigger pinning. Three.js = R3F for React, vanilla for compute. Recommendation: hybrid stack — Motion for declarative UI, GSAP for orchestrated scroll sequences, Three.js for 3D. |
| `ai_agentic_tools_research.md` | Top 20 ADEs (Cursor 50K stars, Copilot 70K, Claude Code, Aider 30K, OpenCode 30K). 10 proxy stacks (LiteLLM, OpenRouter, FreeLLMAPI = 1.7B tokens/mo free). 10 orchestration frameworks (LangGraph, CrewAI 30K, AutoGen 45K, Mastra TS-native). |

---

## Part XIV — Skills Directory Structure

```
skills/
├── animation-orchestrator/      # Routes ALL animation requests
├── animation-auditor/           # Quality gates + audit-animation.py
├── motion-animator/             # React UI animations (Motion)
├── gsap-animator/               # Complex animations (GSAP)
├── gsap-animation-engineer/     # GSAP v3.13+ cinematic engineering
├── motion-animation-engineer/   # Motion v12 declarative engineering
├── threejs-orchestrator/        # Routes ALL 3D requests
├── agent-master/                # Orchestrates 7-agent pipeline
├── agent-decision/              # Decides IF and WHAT to animate
├── agent-simulator/             # Traces all interactions + edge cases
├── agent-auditor/               # Validates against standards
├── agent-profiler/              # Finds ACTUAL bottlenecks
├── agent-optimizer/             # Applies targeted fixes
├── agent-maintenance/           # Monitors production
├── skill-architect/             # Create/optimize SKILL.md files
├── skill-router/                # Routes skills to contexts
├── skill-finder/                # Discovers skills from registry
├── seo-content-writer/          # SEO-optimized long-form content
├── seo-geo/                     # Geographic SEO optimization
├── deployment-manager/          # Deploy pipelines
├── deep-research/               # Multi-source research synthesis
├── to-prd/                      # Product requirement docs
├── browser-use/                 # Headless browser automation
├── mcp-builder/                 # Build MCP servers
├── mcp-stack-curator/           # Curate MCP server stacks
├── mcp-security-scanner/        # Audit MCP configs
├── modelscope-mcp-hub/          # 2300+ free Chinese MCP servers
├── context7-docs/               # Always-current library docs
├── tdd-workflow/                # Test-first discipline
├── audit-analyzer/              # Audit scraping + reports
├── gumroad-pipeline/            # Monetization funnel
├── social-media-manager/        # Social content automation
├── shadcn/                      # shadcn/ui patterns
├── next-best-practices/         # Next.js 16 patterns
├── react-best-practices/        # React 19 patterns
└── ... (90+ more)
```

---

*Operating doctrine = System Master Prompt v4. Structural map = this document. Both evolve together.*
