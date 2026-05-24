---
name: code-research
description: >
  Research open-source repositories to understand how something is built. Use when use when researching open-source code to understand implementation patterns
  Triggers on keywords: research, codebase, open-source, patterns.
allowed-tools: Read, Write, Bash, Grep, Glob
user-invocable: true
mcp-servers: [fetch, brave-search, sqlite, postgres]
---

# Code Researcher

## context

Research open-source repositories to understand how something was implemented. Finds relevant code, reads implementations, and synthesizes patterns and approaches from real projects. This skill provides data extraction, analysis, and research capabilities that turn raw information into actionable insights.

## instructions

### Step 1: Define Research Scope

1. Identify the data source or research target
2. Determine what information is needed
3. Set boundaries — depth, breadth, and time constraints
4. Define output format — structured data, summary, or detailed report

### Step 2: Execute Research/Analysis

1. **Gather** — Collect data from the source using appropriate tools
2. **Filter** — Remove noise and irrelevant information
3. **Analyze** — Extract patterns, relationships, and key findings
4. **Synthesize** — Combine findings into a coherent narrative

### Step 3: Generate Research Report

```markdown
## Research Findings

### Summary
Concise overview of findings with confidence levels

### Key Findings
1. Finding with supporting data
2. Finding with supporting data
3. Finding with supporting data

### Data Sources
- Source 1 with reliability assessment
- Source 2 with reliability assessment

### Implications
- Implication 1
- Implication 2

### Recommendations
- Actionable recommendation 1
- Actionable recommendation 2
```

### Step 4: Validate Findings

- [ ] Data is from reliable sources
- [ ] Findings are supported by evidence
- [ ] Limitations are acknowledged
- [ ] Conclusions are proportional to evidence strength

## constraints

- NEVER present correlation as causation without evidence.
- NEVER cherry-pick data that only supports one conclusion.
- NEVER skip source verification — bad data leads to bad decisions.
- ALWAYS cite sources and assess their reliability.
- ALWAYS acknowledge limitations and gaps in the research.

## examples

### Example: Research Task

**Input:** "Use when researching open-source code to understand implementation patterns"

**Output:**
```markdown
## Research Findings

### Summary
Key findings from the analysis with confidence levels.

### Key Findings
1. Primary finding with supporting evidence
2. Secondary finding with supporting evidence

### Recommendations
Actionable next steps based on the research
```
