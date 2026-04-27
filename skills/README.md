# Skills Database

> Central registry of all AI agent skills available in this workspace.

---

## Overview

| Metric | Value |
|--------|-------|
| **Total Skills** | 25 (19 existing + 6 new) |
| **Categories** | 5 (Development, Design, Content, Marketing, Infrastructure) + Reasoning + Utilities |
| **Workflow Pipeline** | Plan → Build → Test → Ship → Market |

### Category Map

| Category | Skills Count | Primary Use |
|----------|-------------|-------------|
| Development | 4 | Code generation, API integration, explanation |
| Design | 4 | Visual design, UI guidelines, artifact building |
| Content | 4 | Writing, optimization, social media |
| Marketing | 2 | Product launch, research |
| Infrastructure | 2 | Deployment, auditing |
| Reasoning | 4 | Analysis, critical thinking |
| Utilities | 5 | Formatting, discovery, simulation, browsing |

---

## Skill Index

| Skill | Purpose | Folder Path | Status |
|-------|--------|-------------|--------|
| `superpowers` | [TBD - to be created] | `/workspace/skills/superpowers/` | New |
| `mcp-builder` | Build Model Context Protocol servers | `/workspace/skills/mcp-builder/` | Existing |
| `nvidia-build` | Call NVIDIA NIM LLM API | `/workspace/skills/nvidia-build/` | Existing |
| `explained-code` | Beginner-friendly code explanations | `/workspace/skills/explained-code/` | Existing |
| `frontend-design` | [TBD - to be created] | `/workspace/skills/frontend-design/` | New |
| `web-design-guidelines` | [TBD - to be created] | `/workspace/skills/web-design-guidelines/` | New |
| `web-artifacts-builder` | Build self-contained HTML apps | `/workspace/skills/web-artifacts-builder/` | Existing |
| `photography-ai` | Photography AI assistance | `/workspace/skills/photography-ai/` | Existing |
| `seo-content-writer` | SEO-optimized content creation | `/workspace/skills/seo-content-writer/` | Existing |
| `humanizer` | [TBD - to be created] | `/workspace/skills/humanizer/` | New |
| `social-content-pillars` | Social media content strategy | `/workspace/skills/social-content-pillars/` | Existing |
| `social-media-manager` | [TBD - to be created] | `/workspace/skills/social-media-manager/` | New |
| `gumroad-pipeline` | Launch digital products on Gumroad | `/workspace/skills/gumroad-pipeline/` | Existing |
| `jtbd-research` | Jobs to be Done product research | `/workspace/skills/jtbd-research/` | Existing |
| `deployment-manager` | Deploy projects to Vercel/Netlify/GitHub Pages | `/workspace/skills/deployment-manager/` | Existing |
| `audit-analyzer` | Detect and prioritize audit issues | `/workspace/skills/audit-analyzer/` | Existing |
| `chain-of-thought` | Step-by-step reasoning for complex problems | `/workspace/skills/chain-of-thought/` | Existing |
| `socratic-method` | Ask probing questions | `/workspace/skills/socratic-method/` | Existing |
| `devils-advocate` | Challenge plans before finalization | `/workspace/skills/devils-advocate/` | Existing |
| `context-compressor` | Summarize long conversations | `/workspace/skills/context-compressor/` | Existing |
| `output-formatter` | Structured output formatting | `/workspace/skills/output-formatter/` | Existing |
| `skill-finder` | Discover and evaluate skills | `/workspace/skills/skill-finder/` | Existing |
| `simulation-sandbox` | Test scenarios in sandbox | `/workspace/skills/simulation-sandbox/` | Existing |
| `web-reader` | Fetch and analyze web content | `/workspace/skills/web-reader/` | Existing |
| `browser-use` | [TBD - to be created] | `/workspace/skills/browser-use/` | New |

---

## Category Breakdown

### Development

| Skill | Description | Status |
|-------|-------------|--------|
| `superpowers` | Core development capabilities and workflows | New |
| `mcp-builder` | Build MCP servers (TypeScript/Python) with tools, resources, prompts | Existing |
| `nvidia-build` | Call NVIDIA NIM LLM API for text generation | Existing |
| `explained-code` | Beginner-friendly code walkthroughs with analogies | Existing |

**Pipeline Role:** `superpowers` orchestrates, `mcp-builder` builds integrations, `nvidia-build` provides AI, `explained-code` documents

---

### Design

| Skill | Description | Status |
|-------|-------------|--------|
| `frontend-design` | Frontend design patterns and best practices | New |
| `web-design-guidelines` | Web design guidelines and standards | New |
| `web-artifacts-builder` | Build self-contained single-file HTML interactive apps | Existing |
| `photography-ai` | Photography AI assistance and guidance | Existing |

**Pipeline Role:** `frontend-design` and `web-artifacts-builder` for building, `photography-ai` for media

---

### Content

| Skill | Description | Status |
|-------|-------------|--------|
| `seo-content-writer` | Create SEO-optimized blog posts and articles | Existing |
| `humanizer` | Make AI content sound more human and natural | New |
| `social-content-pillars` | Generate content calendars and social media strategy | Existing |
| `social-media-manager` | Manage and schedule social media posts | New |

**Pipeline Role:** `seo-content-writer` creates content, `humanizer` polishes, `social-content-pillars` and `social-media-manager` distribute

---

### Marketing

| Skill | Description | Status |
|-------|-------------|--------|
| `gumroad-pipeline` | Launch and monetize digital products on Gumroad | Existing |
| `jtbd-research` | Conduct Jobs to be Done product research | Existing |

**Pipeline Role:** `jtbd-research` discovers market needs, `gumroad-pipeline` monetizes

---

### Infrastructure

| Skill | Description | Status |
|-------|-------------|--------|
| `deployment-manager` | Deploy to Vercel/Netlify/GitHub Pages with CI/CD | Existing |
| `audit-analyzer` | Detect performance, accessibility, monitoring issues | Existing |

**Pipeline Role:** `deployment-manager` ships, `audit-analyzer` verifies

---

### Reasoning

| Skill | Description | Status |
|-------|-------------|--------|
| `chain-of-thought` | Explicit step-by-step reasoning | Existing |
| `socratic-method` | Ask questions to find answers | Existing |
| `devils-advocate` | Challenge arguments rigorously | Existing |
| `context-compressor` | Compress long conversations | Existing |

**Pipeline Role:** Critical thinking support across all pipeline stages

---

### Utilities

| Skill | Description | Status |
|-------|-------------|--------|
| `output-formatter` | Format structured output (JSON, tables, markdown) | Existing |
| `skill-finder` | Discover and evaluate external skills | Existing |
| `simulation-sandbox` | Test scenarios safely | Existing |
| `web-reader` | Fetch and analyze web content | Existing |
| `browser-use` | Browser automation and interaction | New |

**Pipeline Role:** Cross-cutting utility functions

---

## Redundancy Map

This map shows skills that overlap and how they complement each other. Use this to avoid duplication when extending skills.

### Overlapping Skills

| Skill A | Skill B | Overlap Area | Resolution |
|---------|--------|------------|------------|
| `seo-content-writer` | `jtbd-research` | Content creation | JTBD informs what to write; SEO writes it |
| `deployment-manager` | `audit-analyzer` | Deployment | Analyzer reviews what deployment-manager ships |
| `chain-of-thought` | `socratic-method` | Reasoning | CoT shows reasoning; Socratic uncovers it |
| `devils-advocate` | `jtbd-research` | Challenge | Devil challenges assumptions; JTBD surfaces them |
| `web-artifacts-builder` | `output-formatter` | Output | Formatter structures; Builder creates |
| `frontend-design` | `web-design-guidelines` | Design | Guidelines provide standards; frontend applies them |
| `social-content-pillars` | `social-media-manager` | Social | Pillars strategy; Manager executes |

### Complementary Chains

```
jtbd-research → seo-content-writer → humanizer → gumroad-pipeline
    (discover)      (create)        (polish)       (sell)

deployment-manager → audit-analyzer
    (ship)           (verify)

chain-of-thought → devils-advocate
    (reason)          (challenge)

skill-finder → mcp-builder
    (discover)     (build)

frontend-design → web-artifacts-builder
    (design)        (implement)

social-content-pillars → social-media-manager
    (strategy)          (execute)
```

---

## Trigger Phrase Index

Use this index to quickly find the right skill. Search for keywords that match your task.

| Trigger Phrase | Skill |
|---------------|-------|
| "deploy to Vercel" | `deployment-manager` |
| "deploy to Netlify" | `deployment-manager` |
| "deploy to GitHub Pages" | `deployment-manager` |
| "SEO content" | `seo-content-writer` |
| "write blog post" | `seo-content-writer` |
| "content calendar" | `social-content-pillars` |
| "social media strategy" | `social-content-pillars` |
| "schedule posts" | `social-media-manager` |
| "make it human" | `humanizer` |
| "Gumroad product" | `gumroad-pipeline` |
| "sell digital product" | `gumroad-pipeline` |
| "MCP server" | `mcp-builder` |
| "build MCP" | `mcp-builder` |
| "NVIDIA API" | `nvidia-build` |
| "call LLM" | `nvidia-build` |
| "explain code" | `explained-code` |
| "beginner-friendly" | `explained-code` |
| "JTBD research" | `jtbd-research` |
| "product research" | `jtbd-research` |
| "step by step" | `chain-of-thought` |
| "reason through" | `chain-of-thought` |
| "challenge this" | `devils-advocate` |
| "critique" | `devils-advocate` |
| "ask questions" | `socratic-method` |
| "compress context" | `context-compressor` |
| "summarize" | `context-compressor` |
| "HTML artifact" | `web-artifacts-builder` |
| "single-file app" | `web-artifacts-builder` |
| "frontend design" | `frontend-design` |
| "UI patterns" | `frontend-design` |
| "design guidelines" | `web-design-guidelines` |
| "audit analysis" | `audit-analyzer` |
| "find a skill" | `skill-finder` |
| "discover skill" | `skill-finder` |
| "simulate" | `simulation-sandbox` |
| "test scenario" | `simulation-sandbox` |
| "fetch URL" | `web-reader` |
| "scrape web" | `web-reader` |
| "browser automation" | `browser-use` |
| "interact with page" | `browser-use` |
| "format output" | `output-formatter` |

---

## Workflow Diagram

```
+---------------------------------------------------------------------+
|                      WORKFLOW PIPELINE                              |
+---------------------------------------------------------------------+
|                                                                     |
|   +----------+    +----------+    +----------+    +----------+    +----------+  |
|   |   PLAN   | -->|  BUILD  | -->|  TEST   | -->|  SHIP   | -->| MARKET  |  |
|   +----------+    +----------+    +----------+    +----------+    +----------+  |
|        |               |               |               |               |
|        v               v               v               v               v      |
|   +---------+     +----------+    +---------+    +----------+    +---------+    |
|   |  JTBD   |     |  MCP     |    |Simulation|    | Depl.   |    |   SEO   |    |
|   |Research|     | Builder  |    | Sandbox  |    | Manager |    |Content |    |
|   |        |     |          |    |          |    |         |    |        |    |
|   |Socratic|     | NVIDIA   |    | Audit    |    | Output  |    | Social |    |
|   | Method |     | Build    |    | Analyzer|    | Formatter  |    |Content |    |
|   |        |     |          |    |          |    |         |    |        |    |
|   |Context |     | Explaine|    | Devil's |    |         |    |Humanizer|    |
|   | Compress|     | Code    |    | Advocate|    |         |    |        |    |
|   +---------+     +----------+    +---------+    +----------+    +---------+    |
|                                                                     |
+---------------------------------------------------------------------+
```

### Pipeline Mapping

| Pipeline Stage | Skills | Use Case |
|---------------|--------|----------|
| **Plan** | `jtbd-research`, `socratic-method`, `skill-finder`, `context-compressor`, `superpowers` | Discover, research, strategize |
| **Build** | `mcp-builder`, `nvidia-build`, `explained-code`, `web-artifacts-builder`, `frontend-design`, `web-design-guidelines` | Code, integrate, create |
| **Test** | `simulation-sandbox`, `audit-analyzer`, `devils-advocate` | Verify, validate, challenge |
| **Ship** | `deployment-manager`, `output-formatter`, `browser-use` | Deploy, format, test |
| **Market** | `seo-content-writer`, `humanizer`, `social-content-pillars`, `social-media-manager`, `gumroad-pipeline` | Publish, promote, sell |

---

## Adding New Skills

Before creating a new skill:

1. Check this README for existing coverage
2. Search `/workspace/skills/` for similar SKILL.md files
3. Use `skill-finder` to research external options
4. Follow the skill template structure:
   - **Context**: When to use this skill
   - **Instructions**: Step-by-step workflow
   - **Constraints**: Hard rules
   - **Examples**: Sample inputs/outputs

---

## Quick Reference

| Need... | Use... | Category |
|---------|-------|----------|
| Build an MCP server | `mcp-builder` | Development |
| Call external LLM | `nvidia-build` | Development |
| Explain code | `explained-code` | Development |
| User interface design | `frontend-design` | Design |
| Design standards | `web-design-guidelines` | Design |
| Build HTML app | `web-artifacts-builder` | Design |
| Photography help | `photography-ai` | Design |
| Write SEO content | `seo-content-writer` | Content |
| Make human-like | `humanizer` | Content |
| Social strategy | `social-content-pillars` | Content |
| Schedule posts | `social-media-manager` | Content |
| Launch product | `gumroad-pipeline` | Marketing |
| Product research | `jtbd-research` | Marketing |
| Deploy project | `deployment-manager` | Infrastructure |
| Audit code | `audit-analyzer` | Infrastructure |
| Complex reasoning | `chain-of-thought` | Reasoning |
| Challenge plan | `devils-advocate` | Reasoning |
| Ask questions | `socratic-method` | Reasoning |
| Compress context | `context-compressor` | Reasoning |
| Format output | `output-formatter` | Utilities |
| Find skill | `skill-finder` | Utilities |
| Test scenario | `simulation-sandbox` | Utilities |
| Fetch web | `web-reader` | Utilities |
| Browser automation | `browser-use` | Utilities |

---

## New Skills to Be Created

The following 6 skills are planned but not yet implemented:

| Skill | Category | Purpose | Priority |
|-------|----------|---------|----------|
| `superpowers` | Development | Core development workflow orchestration | High |
| `frontend-design` | Design | Frontend design patterns | High |
| `web-design-guidelines` | Design | Web design standards | Medium |
| `humanizer` | Content | Make AI content natural | Medium |
| `social-media-manager` | Content | Social posting automation | Medium |
| `browser-use` | Utilities | Browser interaction | High |

---

*Last updated: April 2026*
*Maintainer: AI Agent Skills System*