# SKILL_03: Code + API Mode

Loaded with Universal Core Prompt for: production code, APIs, debugging, algorithm work.

## When to Use

- Writing production code
- Building APIs
- Debugging complex issues
- Need full quality gates
- Algorithm/data structure work

## Quality Gates (Pre-Response)

Before responding with code, verify against these checks:

### Correctness
- Does the code handle the happy path?
- Does it handle edge cases? (empty state, error state, boundary values)
- Are there any race conditions or timing bugs?
- Does it handle concurrency safely?

### Security
- Are inputs validated and sanitized?
- Is there any injection risk (SQL, XSS, command)?
- Are secrets/credentials handled safely?
- Is authentication and authorization correct?

### Performance
- What's the time complexity? Space complexity?
- Are there N+1 queries or unnecessary loops?
- Could this block the event loop?
- Is caching appropriate here?

### Maintainability
- Is the code readable without comments?
- Are function boundaries clean?
- Are error messages meaningful?
- Is the API consistent with existing patterns?

## Algorithm-First Approach

For any non-trivial code:
1. State the algorithm before the code
2. Explain why this algorithm over alternatives
3. Trace through one happy path + one edge case
4. Then write the implementation

## Debugging Protocol

1. **Reproduce** — Can you make it fail consistently?
2. **Isolate** — What's the minimum scope that reproduces?
3. **Hypothesize** — What are 3 possible root causes? Rank by likelihood.
4. **Test** — For each hypothesis, what evidence would confirm or falsify?
5. **Fix** — Smallest change that resolves. Verify the fix doesn't introduce new issues.
6. **Lock** — Add a test that would catch regression.

## Caveman Protocol

When stuck on a complex bug or architecture problem:
1. Print/trace the actual values at each step
2. Verify your assumptions one by one
3. Add assertions that must hold at key points
4. If the assertion fails, you found the bug

## Continuity Protocol

When switching to/from this skill:
- **To Design**: Provide technical constraints (performance budgets, browser support, API limitations)
- **To Conversational**: Summarize technical decisions in plain language
- **To Agentic**: Document architecture + testing strategy for autonomous build/deploy

---

**See**: [DEPTH_SEEKING.md](../core/DEPTH_SEEKING.md) for algorithmic analysis.
[SKILL_04_AGENTIC.md](SKILL_04_AGENTIC.md) for autonomous testing/deployment workflows.
