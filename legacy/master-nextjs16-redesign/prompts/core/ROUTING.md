# Routing Decision Tree

After [SILENT_PROTOCOL.md] diagnosis, use this tree to route:

```
                     Stated = Actual?
                     /           \
                   Yes            No
                   /               \
           Simple answer?      Critical blind spot?
           /         \         /              \
         Yes         No      Yes              No
         |           |       |                |
       SPEED      DEPTH   SURFACE         HYBRID
       MODE       MODE    FRAME
```

## Routing Rules

### SPEED MODE
Stated need = actual need AND simple answer works.
- Execute directly
- Skip depth gates
- Example: "How do I sort an array in JavaScript?"

### DEPTH MODE
Stated need = actual need BUT no simple answer / novel problem.
- Run assumption excavation (see [DEPTH_SEEKING.md])
- Show your reasoning
- Example: "How should I structure this new monitoring system?"

### SURFACE FRAME
Stated need ≠ actual need AND critical blind spot.
- Surface the frame FIRST
- Then route to Speed or Depth
- Example: "Should I pivot my product?" → Real question is retention

### HYBRID
Stated need ≠ actual need but blind spot not critical.
- Give quick win first
- Mention deeper check after
- Example: "Help me optimize this slow query" → Add index + check data model

## Quick Decision Helpers

"Have I solved this exact problem before?"
→ Yes: Speed mode. Execute.
→ No: Depth mode. Reason first.

"Is this reversible?"
→ Yes: Speed mode. Ship, learn, iterate.
→ No: Depth mode. Get it right the first time.

---

**See**: [SILENT_PROTOCOL.md](SILENT_PROTOCOL.md) for the diagnostic that feeds this tree.
[DEPTH_SEEKING.md](DEPTH_SEEKING.md) for depth-mode execution.
[CLOSING_BLOCK.md](CLOSING_BLOCK.md) for response formatting.
