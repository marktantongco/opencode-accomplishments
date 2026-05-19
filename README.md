# opencode-accomplishments

## Multi-Skill AI System + MCP Server Directory

The first unified **skills-plus-MCP directory** — 41 AI agent skills across 9 categories, 8 pre-built MCP stacks, and a curated registry of 50+ free MCP servers.

---

### Live Demo

**GitHub Pages:** [marktantongco.github.io/opencode-accomplishments](https://marktantongco.github.io/opencode-accomplishments/)

**API Endpoints:**
| Endpoint | Description |
|----------|-------------|
| `?format=json` | Raw JSON of all 41 skills |
| `?format=manifest` | JetBrains-style plugin.xml |
| `?category=MCP Servers` | Filter by category |
| `?skill=pictoflux-ai` | Auto-filter to specific skill |
| `?embed=true` | iframe-ready (no hero/footer) |
| `?palette=FF2E63` | Live theme generation |

---

### v4.0.0 — What Changed

| Change | Details |
|--------|---------|
| **MCP Servers category** | 4 new skills: PictoFlux AI, MCP Stack Curator, MCP Registry, MCP Security Scanner |
| **nvidia-build removed** | Removed from showcase per user request |
| **stacks.json** | 8 pre-built MCP server stacks with synergy/mismatch analysis |
| **mcp-registry.json** | 50+ free MCP servers across 14 categories, deduplicated |
| **Version** | v3.0.0 → v4.0.0 |
| **Categories** | 8 → 9 (added MCP Servers, color #C77DFF) |
| **Total skills** | 38 → 41 |

---

### 41 Skills Across 9 Categories

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

---

### 8 Pre-Built MCP Stacks

| Stack | Servers | Best For |
|-------|---------|----------|
| **Creative Studio** 🎨 | PictoFlux AI + Figma + Filesystem + Memory | Design agencies, content creators |
| **Research Engine** 🔍 | Brave Search + Fetch + Arxiv + Memory | Researchers, analysts |
| **Full-Stack Dev** ⚡ | GitHub + Postgres + Filesystem + Sequential Thinking | Developers, startups |
| **Content Machine** ✍️ | Brave Search + PictoFlux AI + Filesystem + Memory | Content marketers, bloggers |
| **Data Pipeline** 📊 | Postgres + Fetch + Filesystem + SQLite | Data engineers, analysts |
| **Security Audit** 🛡️ | GitHub + Filesystem + Sequential Thinking + Brave Search | Security engineers, DevOps |
| **Agent OS** 🤖 | Memory + Sequential Thinking + Filesystem + Brave Search | AI researchers, agent builders |
| **Product Launch** 🚀 | Brave Search + PictoFlux AI + GitHub + Memory | Indie hackers, founders |

**Stack Synergy Rules:**
- ✅ Always combine: Memory MCP + any server, Filesystem + artifact-producing servers
- ❌ Never combine: Postgres + Supabase (database conflict), two web search servers simultaneously
- ⚠️ Conditional: GitHub + GitLab (only if repos on both platforms)

---

### MCP Server Registry

50+ free MCP servers across 14 categories, sourced from 10+ directories including PulseMCP, MCP.so, Glama.ai, and Smithery.

**Categories:** Web Search, Database, File Operations, Knowledge & Memory, Image Generation, Code Repository, Communication, Productivity, Reasoning, Design Tools, Cloud, Academic Research, Social Media, Monitoring

**PictoFlux AI** is a contributed entry — free, unlimited AI image generation at `https://chat.mcp.so/server/pictoflux-ai`

**Security Vetting Process:**
1. Package signature verification
2. Permission scope analysis (filesystem, network, env vars)
3. Dependency vulnerability scan
4. Community trust signals (stars, contributors, maintainer history)
5. Red flag detection (excessive permissions, unverified maintainers)

---

### Project Structure

```
opencode-accomplishments/
├── index.html               # Skills showcase (v4.0.0, neo-brutalist, GSAP)
├── stacks.json              # 8 pre-built MCP stacks
├── mcp-registry.json        # 50+ free MCP servers, 14 categories
├── AGENTS.md                # Agent operating instructions
├── SKILLS.md                # Skill documentation
├── PLUGINS.md               # Plugin manifest docs
├── vercel.json              # Vercel deployment config
├── agents/                  # Agent skill definitions
├── skills/                  # Skill specifications
├── profiles/                # Agent profiles
├── workflows/               # Workflow definitions
└── README.md                # This file
```

---

### Contributing

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

Built with **ui-ux-pro-max-v7** + **gsap-animations** + **anthropic-frontend-design** + **frontend-design** — 41 skills — 9 categories — v4.0.0
