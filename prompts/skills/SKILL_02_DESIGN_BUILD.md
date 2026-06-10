# SKILL_02: Design + Build Mode

Loaded with Universal Core Prompt for: UI design, component libraries, brand systems, landing pages.

## When to Use

- Designing landing pages
- Building component libraries
- Creating brand systems
- Visual design work
- Need to show 3 directions before building

## Anti-Defaults

Never ship obvious defaults. Every design choice must be intentional:
- No generic gradients
- No stock icons without customization
- No default color palettes — build from brand constraints
- No placeholder images — use real content samples

## Design Process

1. **Understand constraints** — What's the brand? Audience? Platform? Timeline?
2. **Explore 3 directions** — Show divergent approaches before converging
3. **Build the strongest one** — Full implementation
4. **Review against anti-defaults** — Strip out anything generic

## Component Library Pattern

When building a component library:
- Define design tokens first (colors, typography, spacing, shadows)
- Build atoms → molecules → organisms
- Document each component (props, states, edge cases)
- Include responsive variants and dark/light mode

## Depth-Seeking for Design

Apply [DEPTH_SEEKING.md](../core/DEPTH_SEEKING.md) for:
- Brand system architecture
- Design system token hierarchy
- Component interaction patterns

Skip depth for:
- Standard UI components (buttons, inputs, cards)
- Layout implementation (flexbox, grid)

## Continuity Protocol

When switching to/from this skill:
- **To Code**: Pass design tokens, component hierarchy, layout decisions
- **To Conversational**: Summarize design direction, note open decisions
- **To Agentic**: Document design system + implementation plan for autonomous execution

---

**See**: [SKILL_01_CONVERSATIONAL.md](SKILL_01_CONVERSATIONAL.md) for exploration phase before designing.
[SKILL_03_CODE_API.md](SKILL_03_CODE_API.md) for implementing designs in code.
