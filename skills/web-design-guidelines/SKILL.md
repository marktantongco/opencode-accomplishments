---
name: web-design-guidelines
description: >
  Quick self-audit checklist for design consistency — typography, color, spacing, accessibility. Use when use when self-auditing design consistency across a project
  Triggers on keywords: design, guidelines, audit, consistency.
allowed-tools: Read, Write, Bash, Grep, Glob
user-invocable: true
mcp-servers: [fetch, brave-search, sqlite, postgres]
---

# Design Guidelines Checker

## context

Quick self-audit checklist for design consistency — typography, spacing, color, and component patterns. Validates designs against established guidelines and best practices. This skill provides data extraction, analysis, and research capabilities that turn raw information into actionable insights.

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

**Input:** "Use when self-auditing design consistency across a project"

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
