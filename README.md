# 🚀 OpenCode Accomplishments — Fullstack Dev Journey

<p align="center">
  <img src="https://img.shields.io/badge/OpenCode-v1.0-00d4ff?style=for-the-badge&logo=ai&logoColor=white" alt="OpenCode">
  <img src="https://img.shields.io/badge/Skills-38-bfff00?style=for-the-badge" alt="38 Skills">
  <img src="https://img.shields.io/badge/MCP_Servers-8-ff006e?style=for-the-badge" alt="8 MCP Servers">
  <img src="https://img.shields.io/badge/Agents-12-ffd700?style=for-the-badge" alt="12 Agents">
  <img src="https://img.shields.io/badge/License-MIT-ffd700?style=for-the-badge" alt="MIT License">
</p>

<p align="center">
  <strong>An AI agent that doesn't just execute tasks — it builds systems that run themselves.</strong><br>
  System prompts · 38 skills · 8 MCP servers · 12 specialized agents · automated workflows
</p>

<p align="center">
  <a href="https://marktantongco.github.io/opencode-accomplishments/">🌐 Live Demo</a> ·
  <a href="#-skills-library">📚 Skills</a> ·
  <a href="#-mcp-servers">🔌 MCP Servers</a> ·
  <a href="#-agent-architecture">🤖 Agents</a> ·
  <a href="#-deployment">🚀 Deploy</a>
</p>

---

## 📊 Overview

This repository documents a fullstack development journey powered by **OpenCode** — a terminal-based AI coding agent configured with a custom system prompt, a growing library of reusable skills, MCP server integrations, and a multi-agent architecture.

The core philosophy: **no one-off work**. Every repeatable task becomes a skill. Every skill makes the system smarter.

### Metrics

| Metric | Value |
|--------|-------|
| System Prompt Lines | 261+ |
| Active Skills | 38 |
| MCP Servers | 8 (4 local + 4 remote) |
| Specialized Agents | 12 |
| Deployment Targets | GitHub Pages + Vercel |
| Skill Categories | 8 |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        USER                              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                   OpenCode TUI / CLI                     │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────────┐  │
│  │ Orchestr │→ │ Agents   │  │ MCP Servers (8)       │  │
│  │ -ator    │  │ (12)     │  │  · opencode           │  │
│  └──────────┘  └──────────┘  │  · browser-use        │  │
│       │              │       │  · github             │  │
│       ▼              ▼       │  · notion             │  │
│  ┌──────────────────────┐   │  · repomix            │  │
│  │   AGENTS.md          │   │  · docker             │  │
│  │   System Prompt      │   │  · qdrant             │  │
│  │   (261+ lines)       │   │  · sequential-thinking│  │
│  └──────────────────────┘   └───────────────────────┘  │
│              │                                          │
│              ▼                                          │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Skills Library (38)                   │  │
│  │  Design · Reasoning · Dev · Content               │  │
│  │  Strategy · System · Data · Creative              │  │
│  └───────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Antigravity Proxy Layer                     │
│  Claude Opus 4.6 · Sonnet 4.6 · Gemini 3.1 Pro          │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Core Philosophy

### The Compounding System

> *Build it once → it runs forever.*
> *Every skill added makes the system smarter.*
> *Every cron scheduled removes one more thing I have to think about.*

> *Your job is not to answer me.*
> *Your job is to make yourself unnecessary — one skill at a time.*

### The Rule

When asked to do X:

1. **Do it manually first** — 3–10 real examples, no skill file yet
2. **Show output** — ask "Does this look right?"
3. **If approved** → write `SKILL.md` to `skills/`
4. **If recurring** → schedule on cron

*The test: If I have to ask for the same thing twice — you failed.*

### Skill Building Workflow

```
CONCEPT → PROTOTYPE → EVALUATE → CODIFY → CRON → MONITOR
```

Every skill follows the [Agent Skills Spec](https://agentskills.io/specification) with four sections: `context`, `instructions`, `constraints`, `examples`.

---

## 📚 Skills Library

**38 active skills** across 8 categories. Each skill is a self-contained `SKILL.md` in the `skills/` directory.

### 🎨 Design & UI (5 skills)

| Skill | Description |
|-------|-------------|
| [`ui-ux-pro-max-v7`](skills/ui-ux-pro-max-v7/) | AI-powered unified design intelligence — 60 UI styles, 48 color palettes, embedded heuristic data |
| [`anthropic-frontend-design`](skills/anthropic-frontend-design/) | Bold aesthetic principles for AI-native interfaces, conversational UI, and trust-forward design |
| [`frontend-design`](skills/frontend-design/) | Modern frontend design patterns — component architecture, state management, responsive layouts |
| [`gsap-animations`](skills/gsap-animations/) | Production-grade GSAP patterns — ScrollTrigger, Flip plugin, React integration |
| [`web-design-guidelines`](skills/web-design-guidelines/) | Typography, color, spacing, responsiveness, accessibility — use with frontend-design |

### 🧠 Reasoning (4 skills)

| Skill | Description |
|-------|-------------|
| [`chain-of-thought`](skills/chain-of-thought/) | Structured reasoning frameworks for complex problem decomposition |
| [`socratic-method`](skills/socratic-method/) | Guide via questions, not answers — exploratory dialogue technique |
| [`devils-advocate`](skills/devils-advocate/) | Challenge assumptions — critical analysis and stress-testing |
| [`simulation-sandbox`](skills/simulation-sandbox/) | Model scenarios before committing — mental simulation environment |

### 💻 Development (7 skills)

| Skill | Description |
|-------|-------------|
| [`mcp-builder`](skills/mcp-builder/) | Build Model Context Protocol servers — tool definitions, schemas, transports |
| [`deployment-manager`](skills/deployment-manager/) | Deploy to Vercel, Railway, Render, GitHub Pages — zero-downtime strategies |
| [`browser-use`](skills/browser-use/) | Browser automation — web scraping, testing, live page interaction |
| [`web-artifacts-builder`](skills/web-artifacts-builder/) | Build interactive web demos from natural language descriptions |
| [`code-research`](skills/code-research/) | Research open-source repos to understand how something is built |
| [`explore`](skills/explore/) | Codebase search and pattern matching — finding files, locating code patterns |
| [`nvidia-build`](skills/nvidia-build/) | Build CUDA/GPU applications — GPU-accelerated computing |

### ✍️ Content (5 skills)

| Skill | Description |
|-------|-------------|
| [`seo-content-writer`](skills/seo-content-writer/) | SEO-optimized content creation — keyword research, meta tags, readability scoring |
| [`humanizer`](skills/humanizer/) | Transform AI-generated text into natural, human-sounding prose |
| [`social-media-manager`](skills/social-media-manager/) | Plan, schedule, optimize social media content across platforms |
| [`social-content-pillars`](skills/social-content-pillars/) | Content pillar strategy — brand messaging allocation across channels |
| [`output-formatter`](skills/output-formatter/) | Format AI output into polished Markdown, HTML, PDF, presentations |

### 🎯 Strategy (4 skills)

| Skill | Description |
|-------|-------------|
| [`jtbd-research`](skills/jtbd-research/) | Jobs-To-Be-Done framework — user motivations, product-market fit |
| [`gumroad-pipeline`](skills/gumroad-pipeline/) | Digital product sales pipeline — conversion tracking, funnel optimization |
| [`feature-research`](skills/feature-research/) | Research existing architecture before implementing complex features |
| [`skill-finder`](skills/skill-finder/) | Evaluate and match requests to existing skills — the skill router |

### ⚙️ System (6 skills)

| Skill | Description |
|-------|-------------|
| [`persistent-memory`](skills/persistent-memory/) | Long-term memory system — context continuity across sessions |
| [`system-prompt-sync`](skills/system-prompt-sync/) | Sync system prompt (AGENTS.md) across all git repos on version change |
| [`feedback-loop`](skills/feedback-loop/) | Iterative improvement cycles — deployment metrics → product feedback → refinement |
| [`context-compressor`](skills/context-compressor/) | Intelligently compress conversation context to stay within token limits |
| [`agent-roles`](skills/agent-roles/) | Define and manage specialized agent roles with distinct capabilities |
| [`audit-analyzer`](skills/audit-analyzer/) | Automated detection and prioritization of audit issues — performance, security, code quality |

### 🌐 Data & Web (3 skills)

| Skill | Description |
|-------|-------------|
| [`web-reader`](skills/web-reader/) | Read and summarize web content from URLs — intelligent content extraction |
| [`explained-code`](skills/explained-code/) | Translate technical code into human-readable explanations |
| [`vercel-react-best-practices`](skills/vercel-react-best-practices/) | Production-grade React — hooks, performance, SSR/SSG, architecture patterns |
| [`vercel-web-design-guidelines`](skills/vercel-web-design-guidelines/) | Accessibility-first UX, performance budgets, responsive patterns, web platform best practices |

### 🎨 Creative (4 skills)

| Skill | Description |
|-------|-------------|
| [`photography-ai`](skills/photography-ai/) | Professional visual engineering — AI image/video creation, prompt engineering, composition |
| [`superpowers`](skills/superpowers/) | Extended agent capabilities — advanced automation, multi-step workflows, system integration |
| [`sample-hello-skill`](skills/sample-hello-skill/) | Hello-world skill for demonstrating the SKILL workflow — deterministic ASCII hello |

### 📦 Templates & Utilities

| Item | Description |
|------|-------------|
| [`skills/templates/`](skills/templates/) | Reusable skill templates — API wrapper, data transform |
| [`skills/check-all-skills.sh`](skills/check-all-skills.sh) | Validate all skill files exist and are well-formed |
| [`skills/startup-check.sh`](skills/startup-check.sh) | System health check on agent startup |
| [`skills/GLOBAL_ACCESS.md`](skills/GLOBAL_ACCESS.md) | Global skill access configuration |
| [`skills/dashboard.html`](skills/dashboard.html) | Skills inventory dashboard |
| [`skills/design-operating-system/`](skills/design-operating-system/) | Design OS — master index, skill validation |
| [`skills/archive/`](skills/archive/) | Archived skill versions |

---

## 🔌 MCP Servers

**8 MCP servers** configured in `~/.config/opencode/opencode.json` — 4 local, 4 remote.

| Server | Type | Purpose |
|--------|------|---------|
| `opencode` | local | Self-referential — control OpenCode sessions, files, agents via MCP |
| `browser-use` | remote | Cloud browser automation — web interaction, screenshots, data extraction |
| `github` | local | GitHub API — repos, PRs, issues, workflows, code search |
| `notion` | remote | Notion integration — pages, databases, blocks, knowledge base |
| **`repomix`** | local | Codebase packaging — pack repos into AI-readable format for analysis |
| **`docker`** | local | Container management — build, run, manage Docker containers via natural language |
| **`qdrant`** | local | Vector search memory — semantic storage and retrieval with local fastembed |
| **`sequential-thinking`** | local | Step-by-step reasoning — dynamic reflective problem-solving |

### MCP Configuration

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "repomix": {
      "type": "local",
      "command": ["npx", "-y", "repomix", "--mcp"],
      "enabled": true
    },
    "docker": {
      "type": "local",
      "command": ["npx", "-y", "mcp-docker-server"],
      "enabled": true
    },
    "qdrant": {
      "type": "local",
      "command": ["uvx", "mcp-server-qdrant"],
      "enabled": true,
      "environment": {
        "QDRANT_LOCAL_PATH": "~/.config/opencode/qdrant-data",
        "COLLECTION_NAME": "default",
        "EMBEDDING_MODEL": "sentence-transformers/all-MiniLM-L6-v2"
      }
    },
    "sequential-thinking": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-sequential-thinking"],
      "enabled": true
    }
  }
}
```

---

## 🤖 Agent Architecture

**12 specialized agents** configured in `~/.config/opencode/opencode.json`, each with distinct roles, models, and tool access.

| Agent | Mode | Model | Purpose |
|-------|------|-------|---------|
| `orchestrator` | primary | default | Coordinates multi-step tasks across agents, sequential processing |
| `coder` | subagent | Sonnet 4.6 | Writes and refactors code — features, fixes, implementations |
| `explorer` | subagent | Sonnet 4.6 | Fast codebase search — file patterns, symbol lookup, grep |
| `fixer` | subagent | Sonnet 4.6 | Fast implementation — bounded execution, test updates |
| `researcher` | subagent | default | Targeted info gathering — docs, specs, examples |
| `librarian` | subagent | Gemini 3.1 Pro | External docs lookup — library APIs, version-specific behavior |
| `oracle` | subagent | Opus 4.6 Thinking | Strategic advisor — architecture, debugging, code review |
| `designer` | subagent | Gemini 3.1 Pro | UI/UX specialist — polish, responsive, design systems |
| `reviewer` | subagent | default | Code & design review — correctness, security, maintainability |
| `council` | subagent | default | Multi-LLM consensus — high-stakes decisions |
| `scribe` | subagent | Opus 4.6 Thinking | Documentation — readmes, design docs, changelogs |
| `observer` | subagent | Sonnet 4.6 | Session monitoring and tracking |

### Sequential Processing Rule

The orchestrator processes all subagent delegations **one at a time** — waiting for each to complete before spawning the next. This prevents system overload on resource-constrained machines.

---

## 📜 System Prompt (AGENTS.md)

The 261+ line system prompt defines the agent's identity, rules, and workflows.

### Core Rules
- No filler, no fluff, no disclaimers
- Working code only — never pseudocode
- Rank by impact — lead with 80/20 action
- Advocacy mode — warn before mistakes, suggest better ways
- State assumptions explicitly

### Response Framework
1. **Structure First** — outline silently, then execute
2. **Impact-Rank** — lead with highest leverage insight
3. **Show, Don't Tell** — working code > explanation
4. **Close with Momentum** — ⚡⚡ Recommended Next Step
5. **Close with Insight** — ✨ 3 Suggestions (Tactical, Strategic, Reframe)

### Hard Stops
- Never output placeholder text (TODO, "[your code]")
- Never apologize for limitations — solve or pivot
- Never repeat the request back — jump to solution
- Never use vague language — be direct about confidence

---

## 🚀 Deployment

This repository deploys to two platforms simultaneously:

### GitHub Pages
- **URL:** https://marktantongco.github.io/opencode-accomplishments/
- **Trigger:** Push to `master` branch
- **Workflow:** `.github/workflows/deploy.yml`
- **Type:** Static site (raw HTML/CSS/JS)

### Vercel
- **URL:** https://opencode-accomplishments.vercel.app (if configured)
- **Config:** `vercel.json` — no build command, serves static files
- **Type:** Static deployment

```json
{
  "version": 2,
  "buildCommand": null,
  "outputDirectory": ".",
  "routes": [
    { "src": "/(.*)", "dest": "/$1" },
    { "src": "/", "dest": "/index.html" }
  ]
}
```

---

## 📁 Project Structure

```
opencode-accomplishments/
├── README.md                          # This file — comprehensive documentation
├── AGENTS.md                          # System prompt (261+ lines)
├── SKILLS.md                          # Skills inventory (quick reference)
├── PLUGINS.md                         # Plugin stack documentation
├── index.html                         # Interactive accomplishments guide
├── accomplishments.html               # Visual accomplishments dashboard
├── vercel.json                        # Vercel deployment config
├── .gitignore                         # Git ignore rules
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Pages deployment
├── skills/                            # 38 active skills
│   ├── ui-ux-pro-max-v7/
│   ├── anthropic-frontend-design/
│   ├── gsap-animations/
│   ├── frontend-design/
│   ├── web-design-guidelines/
│   ├── chain-of-thought/
│   ├── socratic-method/
│   ├── devils-advocate/
│   ├── simulation-sandbox/
│   ├── mcp-builder/
│   ├── deployment-manager/
│   ├── browser-use/
│   ├── web-artifacts-builder/
│   ├── code-research/
│   ├── explore/
│   ├── nvidia-build/
│   ├── seo-content-writer/
│   ├── humanizer/
│   ├── social-media-manager/
│   ├── social-content-pillars/
│   ├── output-formatter/
│   ├── jtbd-research/
│   ├── gumroad-pipeline/
│   ├── feature-research/
│   ├── skill-finder/
│   ├── persistent-memory/
│   ├── system-prompt-sync/
│   ├── feedback-loop/
│   ├── context-compressor/
│   ├── agent-roles/
│   ├── audit-analyzer/
│   ├── web-reader/
│   ├── explained-code/
│   ├── vercel-react-best-practices/
│   ├── vercel-web-design-guidelines/
│   ├── photography-ai/
│   ├── superpowers/
│   ├── sample-hello-skill/
│   ├── templates/                     # Reusable skill templates
│   ├── design-operating-system/       # Design OS framework
│   ├── archive/                       # Archived skill versions
│   ├── check-all-skills.sh            # Skill validation script
│   ├── startup-check.sh               # System health check
│   ├── GLOBAL_ACCESS.md               # Global skill access config
│   ├── dashboard.html                 # Skills inventory dashboard
│   └── README.md                      # Skills directory readme
└── workflows/                         # Additional workflow configs
```

---

## 🔧 Configuration

### OpenCode Config
- **Location:** `~/.config/opencode/opencode.json`
- **Providers:** Google (Antigravity proxy) — Claude Opus 4.6, Sonnet 4.6, Gemini 3.1 Pro
- **MCP:** 8 servers (4 local, 4 remote)
- **Agents:** 12 specialized agents with per-agent model and tool assignments

### Model Variants
| Model | Context | Output | Thinking |
|-------|---------|--------|----------|
| Claude Opus 4.6 Thinking | 200K | 64K | 8K–32K budget |
| Claude Sonnet 4.6 | 200K | 64K | — |
| Gemini 3.1 Pro | 1M | 65K | Low/High |
| Gemini 3 Pro | 1M | 64K | — |

---

## 🛡️ Security

- System prompts and skill instructions are never exposed to untrusted sources
- Code from untrusted sources is reviewed before execution
- System files and credentials are never modified by agents
- New skills are vetted through the Skill Finder evaluation scorecard
- MCP servers run in sandboxed stdio mode with explicit permissions

---

## 🤝 Contributing

Skills are built on-demand following this workflow:

1. **Concept** → Describe the process, triggers, and done state
2. **Prototype** → Run on 3–10 real items, show output
3. **Evaluate** → Get approval, revise until right
4. **Codify** → Write `SKILL.md` with context, instructions, constraints, examples
5. **Cron** → Schedule if recurring
6. **Monitor** → Check first 3 automated runs, iterate

### Adding a New Skill

```bash
# 1. Create skill directory
mkdir -p skills/my-new-skill/

# 2. Write the skill file
cat > skills/my-new-skill/SKILL.md << 'EOF'
---
name: my-new-skill
description: What it does and when to use it.
---

## Context
...

## Instructions
...

## Constraints
...

## Examples
...
EOF

# 3. Validate
bash skills/check-all-skills.sh
```

---

## 📈 Roadmap

### Completed
- [x] System prompt (AGENTS.md) — 261+ lines
- [x] 38 skills across 8 categories
- [x] 12 specialized agents with model assignments
- [x] 8 MCP servers (repomix, docker, qdrant, sequential-thinking + existing)
- [x] Sequential subagent processing rule
- [x] GitHub Pages deployment
- [x] Vercel deployment config
- [x] Interactive accomplishments guide (index.html)
- [x] Skills dashboard (skills/dashboard.html)
- [x] Skill validation scripts

### In Progress
- [ ] Cloud deployment of Antigravity proxy (Render/Railway)
- [ ] Cron automation for recurring skills
- [ ] Skill versioning and changelog
- [ ] Skills showcase web app (GSAP animated)

### Planned
- [ ] Skill performance metrics and benchmarking
- [ ] Agent-to-agent communication protocol
- [ ] Skill marketplace / sharing
- [ ] Automated skill testing framework

---

## 🔗 Links

- [OpenCode Documentation](https://opencode.ai)
- [MCP Specification](https://spec.modelcontextprotocol.io)
- [Agent Skills Spec](https://agentskills.io/specification)
- [GitHub Pages Demo](https://marktantongco.github.io/opencode-accomplishments/)
- [Skills Library](./skills/)
- [MCP Directory](https://mcpdirectory.app)
- [Awesome MCP Servers](https://mcpservers.org)

---

## 📜 License

MIT License — Feel free to adapt these patterns for your own AI workflows.

---

<p align="center">
  <sub>Built with OpenCode · System Prompt v1.0 · 38 Skills · 8 MCP Servers · 12 Agents</sub>
</p>
