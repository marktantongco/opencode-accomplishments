# Skills Manifest

## Architecture

1 Universal Core Prompt (router/identity) + 4 loadable skills.

```
prompts/AGENTS.md (always loaded)
  ├─ skills/SKILL_01_CONVERSATIONAL.md — Mobile, chatting, exploration
  ├─ skills/SKILL_02_DESIGN_BUILD.md   — Desktop, visual, iterative
  ├─ skills/SKILL_03_CODE_API.md       — Desktop, production code, correctness
  └─ skills/SKILL_04_AGENTIC.md        — Autonomous, orchestration, sub-agents
```

## Token Budget (Approximate)

| Context | Tokens | Effort | Thinking |
|---------|--------|--------|----------|
| Universal only | ~1,800 | Low | Minimal |
| Universal + SKILL_01 | ~2,600 | Medium | Minimal |
| Universal + SKILL_02 | ~3,200 | Medium | Medium |
| Universal + SKILL_03 | ~3,400 | High | Heavy |
| Universal + SKILL_04 | ~3,300 | High | Heavy |

## Loading Strategy by Platform

### API
```python
UNIVERSAL = load_file("prompts/AGENTS.md")
SKILLS = {
  "conversational": load_file("prompts/skills/SKILL_01_CONVERSATIONAL.md"),
  "design": load_file("prompts/skills/SKILL_02_DESIGN_BUILD.md"),
  "code": load_file("prompts/skills/SKILL_03_CODE_API.md"),
  "agentic": load_file("prompts/skills/SKILL_04_AGENTIC.md")
}

def detect_context(message):
  # Infer skill from keywords
  if "design" in message: return "design"
  elif "code" in message or "debug" in message: return "code"
  # etc.

system_prompt = UNIVERSAL + SKILLS[detect_context(message)]
```

### CLI
```bash
# Load specific skill
model --system prompts/AGENTS.md --append prompts/skills/SKILL_01_CONVERSATIONAL.md

# Or pipe to system prompt field
cat prompts/AGENTS.md prompts/skills/SKILL_03_CODE_API.md | model --system-stdin
```

### Browser/Mobile
- Paste `prompts/AGENTS.md` into system prompt / custom instructions field
- Append relevant skill when context changes
- Use text expander for quick skill swapping

## Skill Selection Quick Reference

| Ask | Skill |
|-----|-------|
| "Chatting, questions, exploring" | SKILL_01 |
| "Design, UI, components, brand" | SKILL_02 |
| "Code, API, debug, production" | SKILL_03 |
| "Automate, orchestrate, build" | SKILL_04 |

## Skill-Switching Patterns

### Conversational → Design
1. User shifts from strategy to visual work
2. Announce: "Switching to Design mode..."
3. Preserve conversational context (positioning, audience, constraints)
4. Apply SKILL_02 instructions

### Design → Code
1. User shifts from mockup to implementation
2. Announce: "Switching to Code mode..."
3. Preserve design tokens, component hierarchy, layout decisions
4. Apply SKILL_03 instructions

### Code → Agentic
1. User shifts from building to automating
2. Announce: "Switching to Agentic mode..."
3. Preserve code architecture, testing strategy, deployment config
4. Apply SKILL_04 instructions

### Within-Skill Continuation
- No switch needed
- Stay in current skill
- Continue with accumulated context

---

**See**: All skill files in `prompts/skills/`. Architecture overview in `prompts/INDEX.md`.
