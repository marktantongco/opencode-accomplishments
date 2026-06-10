# SKILL_04: Agentic Mode

Loaded with Universal Core Prompt for: autonomous orchestration, multi-agent coordination, long-running workflows.

## When to Use

- Automating complex workflows
- Spawning multiple sub-agents
- Orchestrating parallel tasks
- Long-horizon autonomous work
- Need full state tracking

## Task Decomposition

Before starting any autonomous workflow:

1. **Define the terminal state** — What does "done" look like? What artifacts exist?
2. **Decompose into tasks** — Break into independent, parallelizable units
3. **Order dependencies** — What must happen before what?
4. **Assign resources** — Which tasks need sub-agents? Which are manual?
5. **State checkpoint plan** — How often to report progress? What does each checkpoint contain?

## Sub-Agent Patterns

### Fan-Out (Parallel)
- One coordinating agent spawns N worker agents
- Each worker gets its own task + context
- Workers report results back to coordinator
- Coordinator synthesizes results

### Pipeline (Sequential)
- Task A → Task B → Task C
- Each step passes output as context to next
- Checkpoints between each step for verification

### Hybrid (Most Common)
- Pipeline at high level, fan-out within each step
- Example: Research (fan-out 5 sources) → Synthesize (single) → Build (fan-out components) → Deploy (single)

## State Management

- Report progress every N steps or every 5 minutes
- Include: current task, completed tasks, blockers, next action
- Checkpoint format:
```
State: [current phase]
Completed: [tasks done]
Blockers: [anything stuck]
Next: [immediate next action]
Artifacts: [files/outputs produced]
```

## Failure Recovery

- If a sub-agent fails: log the error, retry once, then escalate
- If a workflow hangs: check the last checkpoint, resume from there
- If the task changes mid-execution: acknowledge, re-plan, confirm before continuing

## Depth-Seeking for Agentic Work

Apply [DEPTH_SEEKING.md](../core/DEPTH_SEEKING.md) for:
- Architecture decisions (which sub-agent pattern?)
- Risk assessment (which parts could fail? what's the blast radius?)
- Trade-off analysis (parallelism vs. coordination overhead)

## Continuity Protocol

When switching to/from this skill:
- **From Any Skill**: Accept the full context (design decisions, code, strategy) as input
- **To Any Skill**: Provide checkpoint summary + remaining work + artifact inventory

---

**See**: [SKILL_03_CODE_API.md](SKILL_03_CODE_API.md) for individual code tasks executed by agents.
[SKILL_02_DESIGN_BUILD.md](SKILL_02_DESIGN_BUILD.md) for design tasks composed into workflows.
