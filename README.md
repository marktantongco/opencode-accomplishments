# opencode OS — AI Agent Skill Store

> A search-first, **Raycast-style** PWA catalog of **90+ production-grade AI agent skills** across **6 zones**, **11 categories**, **7 agents**, and **8 MCP stacks**. Single-file, zero-build, deployable on GitHub Pages or Vercel in 60 seconds.

[![Version](https://img.shields.io/badge/version-24.0.0-8B5CF6?style=for-the-badge&labelColor=05060A)](https://marktantongco.github.io/opencode-accomplishments/)
[![Skills](https://img.shields.io/badge/skills-90+-06B6D4?style=for-the-badge&labelColor=05060A)](https://marktantongco.github.io/opencode-accomplishments/?zone=all)
[![PWA](https://img.shields.io/badge/PWA-installable-10B981?style=for-the-badge&labelColor=05060A)](https://marktantongco.github.io/opencode-accomplishments/manifest.json)
[![Zero Build](https://img.shields.io/badge/zero_build-step-F97316?style=for-the-badge&labelColor=05060A)](#deployment)
[![License](https://img.shields.io/badge/license-MIT-8B5CF6?style=for-the-badge&labelColor=05060A)](#license)

**Live deployments:**
- **GitHub Pages (canonical):** <https://marktantongco.github.io/opencode-accomplishments/>
- **Vercel (mirror):** see deployment section below

---

## Table of Contents

- [What is opencode OS?](#what-is-opencode-os)
- [Why this exists](#why-this-exists)
- [Features](#features)
- [The 6 Zones](#the-6-zones)
- [Skill Catalog](#skill-catalog)
- [Architecture](#architecture)
- [SEO / GEO Optimization](#seo--geo-optimization)
- [URL API](#url-api)
- [Progressive Web App](#progressive-web-app)
- [Local Development](#local-development)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)
  - [Vercel](#vercel)
- [Project Structure](#project-structure)
- [Agent System](#agent-system)
- [MCP Ecosystem](#mcp-ecosystem)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

---

## What is opencode OS?

**opencode OS** is a **search-first AI Agent Skill Store** — a dark-mode, command-palette-driven catalog of every skill, agent, and MCP stack the opencode ecosystem ships with. Think of it as **Raycast for AI agent skills**: press ⌘K, type a few characters, get the install command on your clipboard, paste into your terminal, ship.

It is **not** a SaaS. It is **not** a Node app. It is a **single HTML file** plus a small handful of static assets (manifest, service worker, icons, sitemap, robots). Drop it on any static host and you're done.

### Why this exists

Modern AI agent platforms (opencode, Claude Code, Cursor, etc.) ship **dozens to hundreds of skills** — but discovery is awful. You scroll through README files, memorize install commands, and forget what exists. opencode OS solves three problems:

1. **Discovery** — fuzzy search across every skill by name, tag, or category.
2. **Context** — each skill card shows what it does, what it costs (tokens, effort), and which MCP servers pair with it.
3. **Installation** — one click copies the exact install command to your clipboard.

Plus a **conversational recommendation engine** in the chat bubble: type "I want to build an animated dashboard with GSAP" and get back the right skill stack.

---

## Features

| # | Feature | What it does |
|---|---------|--------------|
| 1 | **⌘K Command Palette** | Fuzzy search across all 90+ skills. Arrow keys to navigate, Enter to select, Esc to close. |
| 2 | **Conversational Recommender** | Chat widget that maps natural-language intents ("I want to design a SaaS landing page") to skill stacks. |
| 3 | **6 Zone Tabs** | ACTIVATE / BUILD / VALIDATE / PLAYBOOK / MONETIZE / SYSTEM — each pre-rendered, instantly switchable. |
| 4 | **Sub-nav Filtering** | Per-zone category pills filter the grid in-place without page reload. |
| 5 | **Skill Cards** | One-click copy install command, expandable details, MCP pairings, token/effort badges. |
| 6 | **Agent Spotlight** | 7-agent MASTER pipeline (DECISION → SIMULATOR → IMPLEMENTATION → AUDITOR → PROFILER → OPTIMIZER → MAINTENANCE). |
| 7 | **MCP Stack Curator** | 8 pre-built stacks with synergy scoring (e.g. Unified AI Gateway at 96% synergy). |
| 8 | **GSAP Animations** | Staggered card entrances, ScrollTrigger reveals, zone transition fades. Honors `prefers-reduced-motion`. |
| 9 | **PWA** | Installable, offline-capable, standalone display mode. Service worker caches the app shell. |
| 10 | **URL API** | `?format=json`, `?skill=gsap`, `?category=Development`, `?palette=neon`, `?embed=true`, `?zone=build`. |
| 11 | **Theme Palettes** | Swap accent color via `?palette=neon` (purple → green) or `?palette=ocean` (purple → cyan). |
| 12 | **WCAG-conscious** | Focus traps in modal, ARIA labels on icon buttons, keyboard-navigable cards, reduced-motion fallback. |
| 13 | **SEO + GEO** | Canonical URL, hreflang, OpenGraph, Twitter Card, JSON-LD (WebSite + SearchAction + ItemList + FAQPage + BreadcrumbList + SoftwareApplication), geo meta tags, sitemap, robots.txt, RSS. |
| 14 | **Zero Build Step** | No Node, no Webpack, no Vite. Just HTML/CSS/JS. Edit, save, refresh. |
| 15 | **Dual Deploy** | GitHub Pages (canonical) + Vercel (mirror) with identical feature parity. |

---

## The 6 Zones

The store is organized into 6 **zones** — each is a curated cross-cut of skills relevant to a particular developer workflow.

| Zone | Icon | Purpose | Typical skills |
|------|------|---------|----------------|
| **ACTIVATE** | ⚡ | Landing zone — hero, stats, agent spotlight, MCP stacks | (all showcased here) |
| **BUILD** | 🏗 | Production code & UI — React, Next.js, animations, 3D | `gsap-animation-engineer`, `motion-animator`, `threejs-orchestrator`, `next-best-practices`, `react-best-practices`, `shadcn` |
| **VALIDATE** | ✅ | QA, audits, testing, security | `agent-auditor`, `audit-analyzer`, `tdd-workflow`, `mcp-security-scanner`, `animation-auditor` |
| **PLAYBOOK** | 📋 | Research, planning, design | `deep-research`, `feature-research`, `to-prd`, `frontend-design`, `composition-patterns`, `jobs-to-be-done` |
| **MONETIZE** | 💰 | SEO, content, shipping | `seo-content-writer`, `seo-geo`, `gumroad-pipeline`, `social-media-manager`, `social-content-pillars`, `deployment-manager` |
| **SYSTEM** | 🔄 | Infra, proxies, MCP, routing | `skill-router`, `skill-finder`, `find-skills`, `combined-proxy-billing`, `owl-proxy-defense`, `agent-master`, `agent-decision` |

Switch zones via the top nav, or via URL: `?zone=build`.

---

## Skill Catalog

**90+ skills** across **11 categories**: Animation, Architecture, Audit, Automation, Communication, Content, Data, Design, Infrastructure, Research, Validation.

Each skill card includes:

- **Name + category badge**
- **One-line description**
- **Install command** (e.g. `opencode skill add gsap-animation-engineer`) with one-click copy
- **Token cost + effort level** badges (high / xhigh)
- **MCP server pairings** — which MCP servers this skill expects to be available
- **Expandable details** — full description, tags, related skills

Browse all: <https://marktantongco.github.io/opencode-accomplishments/?zone=all>

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│  index.html (single file, ~127KB)                                   │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  <head>: SEO/GEO meta, OpenGraph, JSON-LD (5 schemas),      │  │
│  │          fonts (Inter + JetBrains Mono), GSAP CDN             │  │
│  ├───────────────────────────────────────────────────────────────┤  │
│  │  <style>: ~850 lines — design tokens, glassmorphic nav,      │  │
│  │           zone grid, skill cards, command palette, chat,      │  │
│  │           responsive (mobile-first), prefers-reduced-motion   │  │
│  ├───────────────────────────────────────────────────────────────┤  │
│  │  <body>:  Top nav (zone tabs + ⌘K trigger)                   │  │
│  │           Hero (badge, title, CTAs) — ACTIVATE only          │  │
│  │           Stats row (5 KPIs) — ACTIVATE only                 │  │
│  │           Content area (6 zone containers, lazily rendered)   │  │
│  │           Agents spotlight — ACTIVATE only                    │  │
│  │           MCP stacks grid — ACTIVATE only                     │  │
│  │           Chat bubble + chat panel                             │  │
│  │           Command palette overlay                              │  │
│  ├───────────────────────────────────────────────────────────────┤  │
│  │  <script>: ~900 lines                                         │  │
│  │           - SKILLS_DATA (90+ skills inlined)                  │  │
│  │           - ZONES map (6 zones × categories)                  │  │
│  │           - AGENTS_DATA (7 agents)                            │  │
│  │           - MCP_STACKS (8 stacks)                             │  │
│  │           - renderZoneContent / renderSubNav / renderAgents   │  │
│  │           - switchZone / filterSubNav / showAllSkillsFn       │  │
│  │           - openPalette / closePalette / fuzzy search         │  │
│  │           - toggleChat / sendChat (INTENT_MAP recommender)    │  │
│  │           - animateCards (GSAP stagger)                       │  │
│  │           - handleURLParams (?format=json, ?skill=, etc.)     │  │
│  │           - setupEvents (event delegation via data-action)    │  │
│  │           - init()                                            │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
        │                              │
        ▼                              ▼
  manifest.json                  sw.js (service worker)
  icon-192.svg                   - precache app shell
  icon-512.svg                   - cache-first for fonts/CDN
  og-image.png (1200×630)        - network-first for HTML
  sitemap.xml                    - skipWaiting on update
  robots.txt
  rss.xml
```

**Key design decisions:**

1. **Single file** — every byte of HTML, CSS, and JS lives in `index.html`. No build step means no broken deploys, no version drift, no `npm install` step. Trade-off: file is ~127KB but gzips to ~30KB.
2. **Event delegation** — one `document.addEventListener('click', ...)` handles every interactive element via `data-action` attributes. Zero per-element listeners, zero memory leaks.
3. **Pre-rendered zones** — on `init()`, all 6 zone containers are populated upfront so zone switches are instant (no async fetch, no re-render flash).
4. **URL as API** — `?zone=`, `?skill=`, `?format=json`, `?palette=`, `?embed=`, `?action=search`, `?section=` all work without server-side code (the JS reads `location.search` and reacts).
5. **No framework** — vanilla JS. The component model is `function render(){ el.innerHTML = ... }`. Trade-off: no reactivity, no virtual DOM. Benefit: zero KB of framework overhead.

---

## SEO / GEO Optimization

This site is fully **SEO and GEO optimized** for global discovery.

### Meta tags

| Tag | Value |
|-----|-------|
| `<title>` | `opencode OS — AI Agent Skill Store | 90+ Developer Skills` |
| `<meta name="description">` | 158 chars, keyword-rich |
| `<meta name="keywords">` | 15 long-tail keywords |
| `<meta name="author">` | Mark Tan Tongco |
| `<link rel="canonical">` | <https://marktantongco.github.io/opencode-accomplishments/> |
| `<meta name="robots">` | `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1` |

### OpenGraph (Facebook, LinkedIn, Slack, Discord)

| Property | Value |
|----------|-------|
| `og:type` | `website` |
| `og:url` | canonical URL |
| `og:site_name` | `opencode OS — AI Agent Skill Store` |
| `og:locale` | `en_US` |
| `og:image` | 1200×630 PNG (`og-image.png`) |
| `og:image:alt` | descriptive alt text |

### Twitter Card

| Property | Value |
|----------|-------|
| `twitter:card` | `summary_large_image` |
| `twitter:site` | `@marktantongco` |
| `twitter:creator` | `@marktantongco` |
| `twitter:image` | OG image |

### JSON-LD Structured Data (5 schemas)

1. **SoftwareApplication** — name, version, category, offer (free)
2. **WebSite + SearchAction** — enables Google sitelinks search box
3. **ItemList** — top 10 skills with deep links
4. **FAQPage** — 7 Q&A entries (rich snippets eligible)
5. **BreadcrumbList** — Home → Skills → All Zones

### GEO (geographic) optimization

| Tag | Value |
|-----|-------|
| `<meta name="geo.region">` | `PH-00` (Philippines) |
| `<meta name="geo.placename">` | `Manila, Philippines` |
| `<meta name="geo.position">` | `14.5995;120.9842` |
| `<meta name="ICBM">` | `14.5995, 120.9842` |
| `<link rel="alternate" hreflang="en">` | canonical URL |
| `<link rel="alternate" hreflang="x-default">` | canonical URL |

### Crawler files

- **`sitemap.xml`** — 12 URLs, lastmod 2026-06-17, weekly changefreq, with image sitemap extension
- **`robots.txt`** — allows all crawlers + explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot)
- **`rss.xml`** — RSS 2.0 feed with channel image and recent release items

### AI crawler friendliness

The site explicitly allows AI crawlers in `robots.txt` so that AI agents (ChatGPT, Claude, Perplexity, etc.) can index the skill catalog. This makes the store discoverable when developers ask AI assistants "what's the best skill for X?".

---

## URL API

The site doubles as a read-only HTTP API via query params — no server needed.

| Param | Example | Effect |
|-------|---------|--------|
| `?zone=` | `?zone=build` | Switches to the BUILD zone on load |
| `?zone=all` | `?zone=all` | Shows every skill across all zones |
| `?skill=` | `?skill=gsap-animation-engineer` | Highlights / filters to one skill |
| `?category=` | `?category=Animation` | Filters by category |
| `?format=json` | `?format=json` | Returns raw JSON of the full skill catalog (machine-readable) |
| `?format=manifest` | `?format=manifest` | Returns the PWA manifest |
| `?palette=` | `?palette=neon` | Switches accent color (purple → green) |
| `?theme=` | `?theme=cyberpunk` | Legacy theme switcher |
| `?embed=true` | `?embed=true` | Strips nav/hero for iframe embedding |
| `?action=search` | `?action=search` | Auto-opens the command palette on load |
| `?section=` | `?section=agent-spotlight` | Scrolls to the agents section |
| `?section=` | `?section=mcp-stacks` | Scrolls to the MCP stacks section |

### Example: fetch the catalog as JSON

```bash
curl 'https://marktantongco.github.io/opencode-accomplishments/?format=json' \
  | jq '.skills | length'
# → 90
```

### Example: deep-link to a skill

```
https://marktantongco.github.io/opencode-accomplishments/?skill=gsap-animation-engineer
```

---

## Progressive Web App

The site is a **fully installable PWA**.

| Capability | Status | Notes |
|------------|--------|-------|
| Installable | ✅ | Chrome / Edge desktop, Android Chrome, iOS Safari |
| Offline | ✅ | Service worker precaches `index.html` + `manifest.json` |
| Standalone | ✅ | Opens in its own window without browser chrome |
| Auto-update | ✅ | Service worker `skipWaiting()` on deploy |
| Maskable icon | ✅ | Adaptive icon for Android |
| Screenshots | ✅ | 1200×630 wide screenshot in manifest |
| Shortcuts | ✅ | "Search Skills", "MCP Stacks" quick actions |

### Install

- **Desktop (Chrome/Edge):** click the install icon ⊕ in the address bar, or Menu → Install App.
- **Android (Chrome):** tap the "Add to Home Screen" banner, or Menu → Install App.
- **iOS (Safari):** tap Share → Add to Home Screen.

---

## Local Development

You need **only Python 3** — no Node, no npm, no build step.

```bash
# Clone
git clone https://github.com/marktantongco/opencode-accomplishments.git
cd opencode-accomplishments

# Serve locally (any static server works)
python3 -m http.server 8080 --directory docs
# → open http://localhost:8080

# Or with live reload (if you have npx):
npx serve docs
```

### Editing

Open `docs/index.html` in your editor. Save. Refresh the browser. That's it.

If you also keep a root-level copy (for compatibility with hosts that serve from `/` instead of `/docs`), keep them in sync:

```bash
cp docs/index.html index.html
cp docs/manifest.json manifest.json
cp docs/sw.js sw.js
cp docs/icon-192.svg icon-192.svg
cp docs/icon-512.svg icon-512.svg
```

### Service worker caveat

The service worker caches aggressively. When testing changes locally, you may need to:

1. Open DevTools → Application → Service Workers → "Unregister"
2. Or check "Update on reload"
3. Or hard-refresh (Ctrl+Shift+R / Cmd+Shift+R)

---

## Deployment

### GitHub Pages

The repository ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that auto-deploys on every push to `main`.

**URL:** <https://marktantongco.github.io/opencode-accomplishments/>

#### First-time setup (already done in this repo)

1. **Settings → Pages → Source:** GitHub Actions
2. Workflow file: `.github/workflows/deploy.yml` — uploads `./docs` as the Pages artifact
3. `.nojekyll` file in `docs/` disables Jekyll processing (so `_`-prefixed files and JSON-LD work)

#### Deploy (every time)

```bash
git add docs/
git commit -m "deploy: <message>"
git push origin main
# → Actions tab → "Deploy Showcase" workflow runs in ~30s
# → Live at https://marktantongco.github.io/opencode-accomplishments/ in ~60s
```

#### Custom domain (optional)

To use a custom domain instead of `marktantongco.github.io`:

1. Add a `docs/CNAME` file with your domain (e.g. `skills.opencode.dev`)
2. In repo Settings → Pages → Custom domain, enter the same domain
3. Configure DNS: add a CNAME record pointing `skills.opencode.dev` → `marktantongco.github.io`
4. Wait for HTTPS cert provisioning (GitHub does this automatically)

### Vercel

Vercel deploys the same `docs/` directory as a static site.

#### Option A — CLI deploy (one-shot)

```bash
# Install Vercel CLI
npm i -g vercel

# Login (one time) — or use token via env var
vercel login

# Deploy from project root
cd opencode-accomplishments
vercel --prod --yes
# → Outputs a https://<project>.vercel.app URL
```

To deploy with a token (CI / headless):

```bash
VERCEL_TOKEN=vcp_xxx vercel --prod --yes --token "$VERCEL_TOKEN"
```

#### Option B — Git integration (auto-deploy on push)

1. Go to <https://vercel.com/new>
2. Import the GitHub repo `marktantongco/opencode-accomplishments`
3. Framework Preset: **Other**
4. Root Directory: `./docs`
5. Build Command: *(leave empty — zero build step)*
6. Output Directory: `.` (current directory, since root is `docs`)
7. Click Deploy

#### `vercel.json` (already in repo)

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    { "source": "/sw.js", "headers": [
      { "key": "Cache-Control", "value": "no-cache" },
      { "key": "Service-Worker-Allowed", "value": "/" },
      { "key": "Content-Type", "value": "application/javascript; charset=utf-8" }
    ]},
    { "source": "/manifest.json", "headers": [
      { "key": "Content-Type", "value": "application/manifest+json; charset=utf-8" }
    ]},
    { "source": "/(.*)", "headers": [
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "X-XSS-Protection", "value": "1; mode=block" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
    ]}
  ]
}
```

This config:
- Enables clean URLs (no `.html` extensions)
- Sets correct Content-Type for `sw.js` and `manifest.json`
- Allows service worker to claim root scope
- Adds security headers (X-Content-Type-Options, X-XSS-Protection, Referrer-Policy)

#### Vercel AI Gateway

If you want to wire the chat widget's recommendation engine to a real LLM via Vercel AI Gateway:

1. Set env var: `AI_GATEWAY_API_KEY=vck_xxx`
2. Add an edge function at `api/recommend.ts` that proxies to `https://ai-gateway.vercel.app/v1/chat/completions`
3. Update `sendChat()` in `index.html` to `fetch('/api/recommend', { method: 'POST', body: JSON.stringify({ message }) })`

The current implementation uses a static `INTENT_MAP` rule-based recommender that runs entirely client-side — no API key required. The AI Gateway integration is optional for production use.

---

## Project Structure

```
opencode-accomplishments/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages auto-deploy
├── .nojekyll                        # Disables Jekyll on GH Pages
├── docs/                            # ← GH Pages serves this directory
│   ├── index.html                   # The PWA (single file, ~127KB)
│   ├── manifest.json                # PWA manifest
│   ├── sw.js                        # Service worker (cache-first)
│   ├── icon-192.svg                 # PWA icon (192×192)
│   ├── icon-512.svg                 # PWA icon (512×512)
│   ├── og-image.png                 # 1200×630 social share image
│   ├── sitemap.xml                  # 12 URLs, image sitemap
│   ├── robots.txt                   # Allows all + AI crawlers
│   ├── rss.xml                      # RSS 2.0 feed
│   └── .nojekyll
├── index.html                       # Root copy (for non-/docs hosts)
├── manifest.json                    # Root copy
├── sw.js                            # Root copy
├── icon-192.svg                     # Root copy
├── icon-512.svg                     # Root copy
├── og-image.png                     # Root copy
├── vercel.json                      # Vercel config (clean URLs + headers)
├── README.md                        # This file
├── AGENTS.md                        # Agent system connection map
├── SKILL.md                         # Top-level skill manifest
├── mcp-registry.json                # 145 MCP servers across 15 categories
├── stacks.json                      # 8 pre-built MCP stacks
├── agents/                          # 18 agent system docs
│   ├── 00_START_HERE.md
│   ├── 01_OPERATIONAL_PLAYBOOKS.md
│   ├── 02_ADVANCED_CONFIGURATIONS.md
│   ├── 03_MONITORING_METRICS.md
│   ├── 04_POWER_USER_PLAYBOOK.md
│   ├── 05_EXTENDED_FAQ.md
│   ├── 06_ONE_PAGE_CHEAT_SHEET.md
│   ├── 07_INTEGRATION_GUIDE.md
│   ├── 08_EVOLUTION_GUIDE.md
│   ├── 09_AUTOMATION_SCRIPTS.md
│   ├── 10_VISUAL_REFERENCE.md
│   ├── 11_COMPLETE_SYSTEM_INDEX.md
│   ├── MARK_SYSTEM_PROMPT_FINAL.md
│   ├── SKILL_02_DESIGN_BUILD.md
│   ├── SKILL_03_CODE_API.md
│   ├── SKILL_04_AGENTIC.md
│   ├── SKILLS_MANIFEST.md
│   └── SKILL_SHORTCUTS_FUNCTION_CALLS.md
├── skills/                          # 90+ skill source files
│   ├── gsap-animation-engineer/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── motion-animator/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── threejs-orchestrator/SKILL.md
│   ├── agent-auditor/
│   │   ├── SKILL.md
│   │   └── scripts/audit-animation.py
│   ├── skill-architect/
│   │   ├── SKILL.md
│   │   ├── scripts/validate-skill.py
│   │   └── references/
│   └── ... (90+ more)
└── scripts/
    ├── sync-skills.sh               # Sync skills from opencode registry
    └── local-sync-skills.sh
```

---

## Agent System

The `agents/` directory contains a complete production-ready agent system:

- **Universal Router** (3,100 tokens, always loaded) — routes between skills, handles continuity, enforces hard stops
- **SKILL_01 Conversational** — mobile/chat, 4,400 tokens, silent protocol + advocacy mode
- **SKILL_02 Design + Build** — desktop/visual, 5,600 tokens, 3 directions before building
- **SKILL_03 Code + API** — production code, 6,100 tokens, 40-item quality gates, caveman protocols
- **SKILL_04 Agentic** — autonomous orchestration, 6,000 tokens, parallel subagent spawning

Plus the **7-agent MASTER pipeline** showcased in the UI:

```
DECISION → SIMULATOR → IMPLEMENTATION → AUDITOR → PROFILER → OPTIMIZER → MAINTENANCE
```

Each agent has a card in the Agents spotlight section with its install command.

---

## MCP Ecosystem

The store includes **8 pre-built MCP stacks** with synergy scoring:

| Stack | Synergy | Use case |
|-------|---------|----------|
| **Unified AI Gateway** | 96% | All AI providers behind one endpoint |
| **Frontend Dev Kit** | 92% | Vercel + React + Tailwind + shadcn |
| **Data Engineer** | 89% | Postgres + Supabase + XiYan NL2SQL |
| **Research Assistant** | 87% | Context7 + Web Reader + Deep Research |
| **Design Pipeline** | 85% | Vercel Design + Frontend + Composition |
| **Animation Studio** | 84% | GSAP + Motion + Three.js orchestrators |
| **Proxy Defense** | 82% | Owl + OpenRelay + Combined Billing |
| **SEO Content** | 81% | SEO Writer + GEO + Social Pillars |

Browse all stacks: <https://marktantongco.github.io/opencode-accomplishments/?section=mcp-stacks>

Plus a `mcp-registry.json` with **145 MCP servers** across 15 categories (including ModelScope's 2300+ free Chinese servers).

---

## Contributing

PRs welcome. The skill catalog lives in `docs/index.html` as the `SKILLS_DATA` array — add your skill object, save, and submit a PR.

### Skill object schema

```javascript
{
  name: 'Your Skill Name',
  slug: 'your-skill-slug',
  category: 'Animation',  // one of 11 categories
  zone: 'build',          // one of 6 zones
  description: 'One-line description',
  installCommand: 'opencode skill add your-skill-slug',
  tokens: 4200,
  effort: 'high',         // 'high' | 'xhigh'
  tags: ['react', 'animation', 'gsap'],
  mcpPairings: ['context7', 'supabase'],
  details: 'Longer description shown when card is expanded.'
}
```

### Before submitting

1. Run `python3 -m http.server 8080 --directory docs` and verify the new card renders correctly
2. Test the ⌘K search — your skill should appear when typing its name or tags
3. Verify the install command copies correctly
4. Check mobile responsive at 375px width

---

## Credits

- **Design & engineering:** Mark Tan Tongco
- **Typography:** Inter (Rasmus Andersson), JetBrains Mono (JetBrains)
- **Animation:** GSAP (GreenSock)
- **Icons:** Inline SVG, hand-crafted
- **Inspiration:** Raycast (command palette UX), Linear (dark mode), Vercel (typography)
- **Skill sources:** opencode ecosystem, ModelScope, Context7, MCP registry

---

## License

MIT — see [LICENSE](LICENSE).

The skill source files in `skills/` retain their original licenses (most are MIT or Apache 2.0 from their respective authors). See each skill's `SKILL.md` for specifics.

---

**Ship something.**
