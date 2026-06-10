# Automation Patterns

Scripts, workflows, and CI/CD patterns for managing the prompt system.

## Setup Automation

### Deploy Prompt to API

```bash
#!/bin/bash
# deploy-prompt.sh — Deploy prompt to API endpoint

UNIVERSAL="prompts/AGENTS.md"
SKILL="prompts/skills/$1.md"  # Pass skill name as argument

if [ -z "$1" ]; then
  echo "Usage: $0 <skill-name>"
  echo "Skills: conversational, design, code, agentic"
  exit 1
fi

cat "$UNIVERSAL" "$SKILL" > /tmp/combined-prompt.md
echo "Prompt ready at /tmp/combined-prompt.md"
```

### Load Prompt via API

```python
# prompt_loader.py — Load prompt files for API context

def load_prompt(skill_name: str = None) -> str:
    """Load universal core + optional skill."""
    base = open("prompts/AGENTS.md").read()
    if skill_name:
        skill = open(f"prompts/skills/SKILL_04_AGENTIC.md").read()
        return base + "\n\n" + skill
    return base
```

## Pre-Deployment Validation

Before deploying a new prompt version:

1. Check all cross-references resolve: `grep -r '\](' prompts/ | grep -v INDEX.md`
2. Verify no model-specific references remain: `grep -ri 'claude\|openai\|gpt-4' prompts/`
3. Check for broken file links: every `[file.md]` reference has a matching file
4. Lint markdown: ensure consistent heading structure

## Monitoring

Track per context:
- Token usage (are you under the context window threshold?)
- Response time (is thinking adding latency?)
- Routing accuracy (are context switches working?)
- User satisfaction (qualitative feedback)

Alert on:
- Token usage > 80% of context window
- Response time > 30 seconds (overthinking)
- Routing failures (wrong skill loaded)
- Context loss (Continuity Protocol breaks)

## Contingency Procedures

### Routing Sends Code Question to Wrong Skill
1. Check: Is SKILL_03 loaded?
2. If not: Manually switch to SKILL_03
3. If yes: Routing keywords need refinement

### Skill Switch Loses Context
1. Check: Is Continuity Protocol in the active prompt?
2. If not: Add it explicitly
3. If yes: Verify prior messages are reviewed before responding

### Autonomous Workflow Hangs
1. Check: Is state being reported every N steps?
2. If not: Add timeout alerts
3. Use pause command: "Pause and show current state"

---

**See**: [SHORTCUTS.md](SHORTCUTS.md) for CLI flags and commands.
[MANIFEST.md](MANIFEST.md) for loading strategies.
