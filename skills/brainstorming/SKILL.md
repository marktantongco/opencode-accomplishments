---
name: brainstorming
description: >
  Structured brainstorming framework with divergent and convergent phases — generates ideas rapidly, then clusters, prioritizes, and refines them into actionable concepts. Use when use when generating creative ideas, running brainstorming sessions, or exploring solution spaces with structured divergence-convergence
  Triggers on keywords: brainstorming, ideation, divergent, convergent, creative.
allowed-tools: Read, Write, Bash, Edit, Grep, Glob
user-invocable: true
mcp-servers: [memory, sequential-thinking, sqlite]
---

# Structured Brainstorming

## context

Structured brainstorming framework with divergent and convergent phases — generates, clusters, prioritizes ideas through a repeatable process that maximizes creative output. This skill provides a structured reasoning framework that ensures thorough analysis, reduces cognitive biases, and produces well-supported conclusions.

## instructions

### Step 1: Frame the Problem

1. Identify the core question or decision to be made
2. List known facts, assumptions, and constraints
3. Define what a successful outcome looks like
4. Determine the appropriate reasoning depth

### Step 2: Apply Reasoning Framework

1. **Decompose** — Break the problem into constituent parts
2. **Analyze** — Examine each part with the appropriate lens
3. **Synthesize** — Combine analyses into coherent conclusions
4. **Validate** — Test conclusions against constraints and evidence

### Step 3: Document Reasoning

```markdown
## Reasoning Analysis

### Problem Statement
Clear statement of the question being analyzed

### Key Assumptions
1. Assumption with confidence level
2. Assumption with confidence level

### Reasoning Chain
1. Step 1: evidence leads to intermediate conclusion
2. Step 2: evidence leads to intermediate conclusion
3. Step 3: synthesis leads to final conclusion

### Conclusion
Supported conclusion with confidence level

### Counter-Arguments
- Potential objection with rebuttal
- Potential objection with rebuttal

### Open Questions
- Unresolved question
- Unresolved question
```

### Step 4: Quality Check

- [ ] All assumptions are explicitly stated
- [ ] Evidence supports each reasoning step
- [ ] Counter-arguments are addressed
- [ ] Confidence levels are assigned
- [ ] Open questions are documented

## constraints

- NEVER present assumptions as facts — always label and assess confidence.
- NEVER skip counter-arguments — every conclusion should be challenged.
- NEVER use circular reasoning — each step must add new information.
- ALWAYS show the reasoning chain, not just the conclusion.
- ALWAYS acknowledge uncertainty and limitations.

## examples

### Example: Reasoning Analysis

**Input:** "Use when generating creative ideas, running brainstorming sessions, or exploring solution spaces with structured divergence-convergence"

**Output:**
```markdown
## Reasoning Analysis

### Problem Statement
Framed question with context

### Key Assumptions
1. Primary assumption — High confidence
2. Secondary assumption — Medium confidence

### Reasoning Chain
1. Observation: factual starting point
2. Inference: logical deduction
3. Synthesis: combined insight
4. Conclusion: supported answer

### Confidence Assessment
Overall confidence based on evidence quality and assumption validity
```
