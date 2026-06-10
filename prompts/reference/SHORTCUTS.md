# Shortcuts & Function Calls

Text commands, API methods, and CLI flags for controlling the prompt system.

## Text Commands

Insert these in your message to override routing:

| Command | Effect |
|---------|--------|
| `?speed` | Force Speed Mode — direct answer, no depth |
| `?depth` | Force Depth Mode — full analysis, show reasoning |
| `?code` | Force Code/API mode |
| `?design` | Force Design mode |
| `?agentic` | Force Agentic mode |
| `?conversational` | Force Conversational mode |
| `?plan` | Request plan structure before execution |
| `?review` | Request quality review before finalizing |

## API Methods

```python
# Force skill in API call
response = client.chat.completions.create(
    model="model-name",
    messages=[
        {"role": "system", "content": UNIVERSAL + SKILL_03},
        {"role": "user", "content": message}
    ]
)
```

```javascript
// CLI invocation with skill selection
const { exec } = require('child_process');
exec(`model --system prompts/AGENTS.md --skill code "Build an API endpoint"`);
```

## CLI Flags

```
--system <file>         Load system prompt from file
--skill <name>          Load skill module (conversational/design/code/agentic)
--speed                 Force speed mode
--depth                 Force depth mode
--plan-first            Require plan before execution
```

## Routing Override Priority

1. Explicit user command (`?speed`, `?code`, etc.) — highest
2. Detected context (keyword matching) — medium
3. Default skill (conversational) — lowest

---

**See**: [MANIFEST.md](MANIFEST.md) for loading strategies. Core routing logic in `prompts/core/ROUTING.md`.
