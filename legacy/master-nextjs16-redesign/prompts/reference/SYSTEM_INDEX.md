# Complete System Index

Cross-reference index for the entire prompt system.

## File Cross-Reference

| File | Linked From | Links To |
|------|-------------|----------|
| `INDEX.md` | — | All files |
| `AGENTS.md` | INDEX.md | core/SILENT_PROTOCOL.md, core/DEPTH_SEEKING.md, core/CLOSING_BLOCK.md |
| `core/SILENT_PROTOCOL.md` | AGENTS.md | core/ROUTING.md, core/DEPTH_SEEKING.md |
| `core/ROUTING.md` | SILENT_PROTOCOL.md | core/DEPTH_SEEKING.md, core/CLOSING_BLOCK.md |
| `core/DEPTH_SEEKING.md` | ROUTING.md | core/CLOSING_BLOCK.md |
| `core/CLOSING_BLOCK.md` | DEPTH_SEEKING.md | — |
| `skills/SKILL_01_CONVERSATIONAL.md` | INDEX.md, MANIFEST.md | skills/02, 03, 04 |
| `skills/SKILL_02_DESIGN_BUILD.md` | INDEX.md, MANIFEST.md | skills/01, 03, 04 |
| `skills/SKILL_03_CODE_API.md` | INDEX.md, MANIFEST.md | core/DEPTH_SEEKING.md, skills/04 |
| `skills/SKILL_04_AGENTIC.md` | INDEX.md, MANIFEST.md | core/DEPTH_SEEKING.md, skills/02, 03 |
| `reference/MANIFEST.md` | INDEX.md | All skill files |
| `reference/SHORTCUTS.md` | INDEX.md | MANIFEST.md, core/ROUTING.md |
| `reference/AUTOMATION.md` | INDEX.md | SHORTCUTS.md, MANIFEST.md |
| `reference/VISUAL.md` | INDEX.md | All |
| `reference/SYSTEM_INDEX.md` | INDEX.md | All (this file) |

## Concept Index

| Concept | File(s) |
|---------|---------|
| Silent Protocol | core/SILENT_PROTOCOL.md, AGENTS.md (Core Rules) |
| Routing (Speed/Depth/Surface/Hybrid) | core/ROUTING.md, core/SILENT_PROTOCOL.md |
| Depth-Seeking | core/DEPTH_SEEKING.md |
| Closing Block | core/CLOSING_BLOCK.md |
| No one-off work | AGENTS.md |
| Skill building process | AGENTS.md |
| Plan → Validate → Execute | AGENTS.md |
| Anti-defaults (design) | skills/SKILL_02_DESIGN_BUILD.md |
| Quality gates (code) | skills/SKILL_03_CODE_API.md |
| Debugging protocol | skills/SKILL_03_CODE_API.md |
| Task decomposition | skills/SKILL_04_AGENTIC.md |
| Sub-agent patterns | skills/SKILL_04_AGENTIC.md |
| Continuity Protocol | skills/SKILL_01-04, reference/MANIFEST.md |
| Anti-overthinking | skills/SKILL_01_CONVERSATIONAL.md |
| Deployment (prompts) | reference/AUTOMATION.md |
| Contingency procedures | reference/AUTOMATION.md |
| Cross-platform invocation | INDEX.md, reference/SHORTCUTS.md, reference/MANIFEST.md |

## Migration Map

| Legacy Path | New Path(s) |
|-------------|-------------|
| `AGENTS.md` (root) | `prompts/AGENTS.md` (content lives here; root becomes bootstrapper) |
| `agents/SKILL_01_Clean.md` | `prompts/core/*` (Silent Protocol, Routing, Closing Block modules) + `prompts/skills/SKILL_01_CONVERSATIONAL.md` |
| `agents/SKILL_02_DESIGN_BUILD.md` | `prompts/skills/SKILL_02_DESIGN_BUILD.md` |
| `agents/SKILL_03_CODE_API.md` | `prompts/skills/SKILL_03_CODE_API.md` |
| `agents/SKILL_04_AGENTIC.md` | `prompts/skills/SKILL_04_AGENTIC.md` |
| `agents/SKILLS_MANIFEST.md` | `prompts/reference/MANIFEST.md` |
| `agents/SKILL_SHORTCUTS_FUNCTION_CALLS.md` | `prompts/reference/SHORTCUTS.md` |
| `agents/09_AUTOMATION_SCRIPTS.md` | `prompts/reference/AUTOMATION.md` |
| `agents/10_VISUAL_REFERENCE.md` | `prompts/reference/VISUAL.md` |
| `agents/11_COMPLETE_SYSTEM_INDEX.md` | `prompts/reference/SYSTEM_INDEX.md` |
| `profiles/inprotocol.md` | `prompts/core/SILENT_PROTOCOL.md` |
| `profiles/indepth.md` | `prompts/core/DEPTH_SEEKING.md` |
| `profiles/test-routing.md` | `prompts/core/ROUTING.md` (test cases integrated) |

---

**See**: `prompts/INDEX.md` for structural overview. All files in `prompts/` for actual content.
