# 🚀 OpenCode Accomplishments — Fullstack Dev Journey

<p align="center">
  <img src="https://img.shields.io/badge/OpenCode-v1.0-00d4ff?style=for-the-badge&logo=ai&logoColor=white" alt="OpenCode">
  <img src="https://img.shields.io/badge/Skills-38-bfff00?style=for-the-badge">
  <img src="https://img.shields.io/badge/Sessions-2+-ff006e?style=for-the-badge">
  <img src="https://img.shields.io/badge/License-MIT-ffd700?style=for-the-badge">
</p>

<p align="center">
  <strong>An interactive guide to everything built with OpenCode AI agent</strong><br>
  System prompts, skills, scripts, and automated workflows
</p>

---

## 📊 Overview

This project documents the fullstack development journey powered by OpenCode — an AI agent that doesn't just execute tasks, but builds systems that run themselves.

### What We Built

| Metric | Value |
|--------|-------|
| System Prompt Lines | 261 |
| Skills Created | 38 |
| Activation Scripts | 4 |
| Config Files | 2 |
| Session Duration | 2 sessions |

---

## 🏗️ Project Structure

```
/home/hive/workspace/
├── AGENTS.md                    # Full system prompt (261 lines)
├── accomplishments.html         # Interactive accomplishments guide
├── SKILLS.md                    # Skills documentation
└── skills/                      # 38 pre-installed skills
    ├── skill-finder/
    ├── mcp-builder/
    ├── deployment-manager/
    ├── chain-of-thought/
    ├── web-reader/
    ├── explained-code/
    ├── output-formatter/
    ├── web-artifacts-builder/
    ├── context-compressor/
    ├── socratic-method/
    ├── devils-advocate/
    ├── photography-ai/
    ├── nvidia-build/
    ├── simulation-sandbox/
    ├── seo-content-writer/
    ├── social-content-pillars/
    ├── jtbd-research/
    ├── gumroad-pipeline/
    └── feature-research/
```

---

## 🎯 Core Philosophy

### No One-Off Work

> "You do not execute tasks. You build systems. Every time I ask you to do X that could happen again — you do not just do it. You turn it into a skill that runs itself."

### The Rule

1. **Do it manually first** (3–10 real examples only)
2. **Show output** — ask "Does this look right?"
3. **If approved** → write SKILL.md to `/workspace/skills/`
4. **If recurring** → schedule on cron

*The test: If I have to ask for the same thing twice — you failed.*

---

## 📜 System Prompt Highlights

### Operating Principles

- **No filler. No fluff.** Direct and useful only.
- **Working code only** — never pseudocode.
- **Rank by impact** — lead with 80/20 action.
- **Advocacy is on** — warn before mistakes, suggest better ways.

### Closing Block Format

Every complex response ends with:

```
⚡⚡ Recommended Next Step
[Highest leverage action - max 2 sentences]

✨ 3 Suggestions
- **Tactical** — [Immediately executable]
- **Strategic** — [Long-term leverage]
- **Reframe** — [Uncomfortable truth]
```

---

## 🛠️ Skills Library

### Core Skills (5)

| Skill | Purpose |
|-------|---------|
| `skill-finder` | Evaluate and match requests to existing skills |
| `web-reader` | Read/summarize web content from URLs |
| `explained-code` | Translate technical to human-readable |
| `context-compressor` | Summarize long conversations |
| `feature-research` | Research architecture before implementation |

### Dev Skills (3)

| Skill | Purpose |
|-------|---------|
| `mcp-builder` | Build Model Context Protocol servers |
| `deployment-manager` | Deploy to Vercel, Railway, Render, etc. |
| `nvidia-build` | Build CUDA/GPU applications |

### Creative Skills (5)

| Skill | Purpose |
|-------|---------|
| `output-formatter` | Format AI output (Markdown, HTML, PDF) |
| `web-artifacts-builder` | Build interactive web demos |
| `photography-ai` | AI photography guidance & prompts |
| `seo-content-writer` | SEO-optimized content |
| `social-content-pillars` | Social media strategy |

### Strategy Skills (6)

| Skill | Purpose |
|-------|---------|
| `chain-of-thought` | Structured reasoning frameworks |
| `socratic-method` | Guide via questions, not answers |
| `devils-advocate` | Challenge assumptions |
| `simulation-sandbox` | Model scenarios before committing |
| `jtbd-research` | Jobs-to-be-done research |
| `gumroad-pipeline` | Ecommerce pipeline |

---

## ⚡ Activation Scripts

Created in `/tmp/`:

| Script | Purpose |
|--------|---------|
| `complete-activation.sh` | Full system setup |
| `tweak-optimization.sh` | Performance tuning |
| `monitor.sh` | Health monitoring |
| `systemd-service.sh` | Background service |

---

## 🔧 Configuration

### Claude Settings

```json
{
  "ANTHROPIC_BASE_URL": "http://localhost:8080",
  "agentType": "opencode"
}
```

**Location:** `~/.claude/settings.json`

### Connection Flow

```
User → OpenCode Agent → Antigravity Proxy → Claude API
                    ↓
            System Prompt (AGENTS.md)
                    ↓
            Skills Library (/workspace/skills/)
                    ↓
            Output with Closing Block
```

---

## 🎮 Interactive Guide

Open `accomplishments.html` for a visual, interactive experience:

- **Overview** — Stats, current goals, blockers
- **Timeline** — Session-by-session breakdown
- **Skills** — 38 skills with descriptions
- **Config** — System prompt & Claude settings
- **Terminal** — Command execution history
- **Agent Flow** — How the AI processes requests

```bash
# View locally
open accomplishments.html
# or
python3 -m http.server 8000
```

---

## 🚀 Next Steps

### Current Goal
Deploy Antigravity Claude Proxy to cloud (Render/Railway)

### Pending Tasks
- [ ] Complete Render deployment
- [ ] Update `ANTHROPIC_BASE_URL` to cloud URL
- [ ] Test proxy connectivity
- [ ] Schedule cron jobs for recurring tasks

---

## 📝 Key Files Reference

| File | Lines | Purpose |
|------|-------|---------|
| `/home/hive/workspace/AGENTS.md` | 261 | System prompt |
| `/home/hive/.claude/settings.json` | — | Claude config |
| `/tmp/complete-activation.sh` | — | Setup script |
| `/workspace/skills/*/SKILL.md` | — | Skill definitions |

---

## 🤝 Contributing

This is a personal AI assistant configuration. Skills are built on-demand following the skill-building workflow:

1. **Concept** → Describe the process
2. **Prototype** → Run on 3-10 real items
3. **Evaluate** → Get approval
4. **Codify** → Write SKILL.md
5. **Cron** → Schedule if recurring
6. **Monitor** → Check automated runs

---

## 📜 License

MIT License — Feel free to adapt these patterns for your own AI workflows.

---

## 🔗 Links

- [OpenCode Documentation](https://opencode.ai)
- [Antigravity Claude Proxy](https://github.com/badrisnarayanan/antigravity-claude-proxy)
- [Skills Library](./skills/)

---

<p align="center">
  <sub>Built with OpenCode • System Prompt v1.0 • 38 Skills Active</sub>
</p>