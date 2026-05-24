---
name: gsap-animations
description: >
  Production-grade GSAP animation patterns — 24 patterns, ScrollTrigger, Flip plugin, React integration. Use when use when building animations, scroll effects, or motion design
  Triggers on keywords: gsap, animation, scroll, motion, react.
allowed-tools: Read, Write, Bash, Edit, Grep, Glob
user-invocable: true
mcp-servers: [filesystem, fetch, google-drive]
---

# GSAP Animation Pattern Library

## context

Production-grade GSAP animation patterns with ScrollTrigger, timeline sequencing, and performance optimization. 24 battle-tested patterns covering reveals, transitions, parallax, and SVG animations. This skill provides structured frameworks and production-ready patterns that ensure consistency, accessibility, and performance across all design outputs.

## instructions

### Step 1: Understand the Design Request

1. Identify the design goal — is it a new component, a full page, a design system, or an audit?
2. Determine constraints — brand guidelines, accessibility requirements, performance budgets
3. Assess the context — what platform, framework, and existing design tokens are in play?

### Step 2: Apply Design Framework

1. **ScrollTrigger reveal patterns** — Provides structured approach
2. **Timeline sequencing templates** — Provides structured approach
3. **SVG morph and draw animations** — Provides structured approach
4. **Parallax and scroll-linked effects** — Provides structured approach
5. **Staggered entrance animations** — Provides structured approach
6. **Performance-optimized implementations** — Provides structured approach

### Step 3: Generate Output

Produce structured design output following this format:

```markdown
## Design Specification

### Overview
Summary of the design decision and rationale

### Design Tokens
- Colors: palette with hex values and contrast ratios
- Typography: font stack with sizes, weights, line heights
- Spacing: scale with values
- Breakpoints: responsive breakpoints

### Component Structure
Component hierarchy and layout specification

### Accessibility Notes
- Contrast ratios for all color combinations
- Keyboard navigation flow
- Screen reader considerations

### Implementation Notes
- Framework-specific guidance
- Performance considerations
```

### Step 4: Validate and Refine

- Check all color combinations meet WCAG 2.1 AA (4.5:1 for text, 3:1 for large text)
- Verify responsive behavior at all breakpoints
- Confirm animation respects prefers-reduced-motion
- Validate semantic HTML structure
- Test with screen reader navigation patterns

## constraints

- NEVER generate designs that fail WCAG 2.1 AA contrast requirements.
- NEVER use placeholder colors — always provide specific hex/hsl values with contrast ratios.
- NEVER skip responsive design — every component must work from 320px to 2560px.
- ALWAYS consider dark mode from the start, not as an afterthought.
- ALWAYS document design decisions and their rationale.

## examples

### Example: Design Request

**Input:** "Use when building animations, scroll effects, or motion design"

**Output:**
```markdown
## Design Specification

### Overview
Production-ready gsap animations implementation following GSAP Animation Pattern Library patterns.

### Design Tokens
- Primary: #3B82F6 (contrast 4.6:1 on white)
- Surface: #F8FAFC
- Text: #0F172A (contrast 15.4:1 on white)
- Font: Inter 16px/1.5 body, 24px/1.2 headings

### Accessibility Notes
- All interactive elements keyboard-accessible
- Focus indicators visible (3px offset ring)
- Screen reader labels on all controls
- Reduced-motion fallback provided
```
