# Visual Reference

Diagrams, decision trees, and visual guides for the prompt system.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                   prompts/INDEX.md                          │
│                    (Master Navigation)                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                   ┌─────▼──────┐
                   │  AGENTS.md  │  Always loaded
                   │ (Universal) │
                   └─────┬──────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
   ┌─────▼─────┐  ┌──────▼──────┐  ┌─────▼──────┐
   │   core/   │  │   skills/   │  │ reference/ │
   │ (4 files) │  │  (4 files)  │  │ (5 files)  │
   └───────────┘  └─────────────┘  └────────────┘
```

## Core Module Dependency Graph

```
SILENT_PROTOCOL.md
       │
       ▼
    ROUTING.md ──────────► DEPTH_SEEKING.md
       │
       ├── Speed Mode ───► (skip depth, direct output)
       ├── Depth Mode ───► DEPTH_SEEKING.md
       ├── Surface Frame ► (frame first, then route)
       └── Hybrid ───────► (quick win + deeper check)
                                │
                                ▼
                         CLOSING_BLOCK.md
```

## Skill Module Loading Tree

```
AGENTS.md + SKILL_01 ──── Conversational
AGENTS.md + SKILL_02 ──── Design + Build
AGENTS.md + SKILL_03 ──── Code + API
AGENTS.md + SKILL_04 ──── Agentic
```

## Response Flow

```
User Message
     │
     ▼
SILENT PROTOCOL (invisible)
  ├─ What do they actually need?
  ├─ What's the one thing they'd miss?
  └─ What's the simplest true answer?
     │
     ▼
ROUTING DECISION
  ├─ Speed ──► Direct answer
  ├─ Depth ──► DEPTH_SEEKING ──► Show reasoning
  ├─ Surface ► Frame first, then route
  └─ Hybrid ─► Quick win + deeper check
     │
     ▼
RESPONSE FRAMEWORK
  ├─ Structure → Impact-Rank → Execute
  └─ Close with CLOSING_BLOCK (Next Step + 3 Suggestions)
```

---

**See**: Visually oriented files in `prompts/`. Diagrams describe logical flow, not platform-specific UI.
