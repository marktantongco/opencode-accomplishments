# Prompt System — Master Index

This folder consolidates three formerly separate prompt systems into one unified, model-agnostic instruction set.

## Origin

| Source | Path | What It Provided |
|--------|------|------------------|
| Root AGENTS.md | `AGENTS.md` | Core identity, Silent Protocol, Routing, Depth-Seeking, Closing Block, Core Rules |
| `agents/` | 9 skill-router files | Skill definitions (SKILL_01-04), routing manifest, shortcuts, automation, system index |
| `profiles/` | 3 analysis files | Silent Protocol integration, Depth-Seeking optimization, routing test cases |

## Structure

```
prompts/
├── INDEX.md                 ← You are here
├── AGENTS.md                ← Universal core prompt (always loaded)
│
├── core/                    ← Behavioral modules (composable)
│   ├── SILENT_PROTOCOL.md   — Pre-response diagnostic layer
│   ├── ROUTING.md           — Speed/Depth/Surface/Hybrid decision tree
│   ├── DEPTH_SEEKING.md     — Assumption excavation, frame testing, Show Your Work
│   └── CLOSING_BLOCK.md     — Closing format (Next Step + 3 Suggestions)
│
├── skills/                  ← Loadable skill modules
│   ├── SKILL_01_CONVERSATIONAL.md  — Chat, explore, advise
│   ├── SKILL_02_DESIGN_BUILD.md    — UI, components, brand systems
│   ├── SKILL_03_CODE_API.md        — Production code, APIs, debugging
│   └── SKILL_04_AGENTIC.md         — Autonomous orchestration, subagents
│
└── reference/               ← Reference + tooling
    ├── MANIFEST.md          — Full skills inventory, routing guide, token budgets
    ├── SHORTCUTS.md         — CLI/API/text command shortcuts
    ├── AUTOMATION.md        — Automation scripts, workflows, CI/CD patterns
    ├── VISUAL.md            — Visual reference, diagrams, style guides
    └── SYSTEM_INDEX.md      — Complete system index, cross-references
```

## Loading Strategy

| Mode | Load |
|------|------|
| **Minimal** | `AGENTS.md` only |
| **Standard** | `AGENTS.md` + `core/` (all 4) |
| **Full** | `AGENTS.md` + `core/` + one `skills/` module |
| **Reference** | Any `reference/` file on demand |

## Cross-Platform Invocation

| Platform | Method |
|----------|--------|
| CLI | `cat prompts/AGENTS.md` → pipe to model system prompt |
| API | Load from file, append to messages array as system role |
| Browser | Paste into custom instructions or system prompt field |
| Mobile | Use text expander + paste into system prompt |
| IDE/Copilot | Load relevant skills based on detected context |

## Dependency Graph

```
INDEX.md
  └─ AGENTS.md
       ├─ core/SILENT_PROTOCOL.md
       │    └─ core/ROUTING.md
       │         └─ core/DEPTH_SEEKING.md
       │              └─ core/CLOSING_BLOCK.md
       ├─ skills/SKILL_01_*.md
       ├─ skills/SKILL_02_*.md
       ├─ skills/SKILL_03_*.md
       └─ skills/SKILL_04_*.md
```

## Migration Status

All prompts have been consolidated here. Legacy files at root `AGENTS.md`, `agents/`, and `profiles/` still exist but redirect here.
