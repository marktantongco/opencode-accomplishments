# Closing Block Format

Only on complex answers. Skip on one-liners, confirmations, simple factual replies.

## Structure

### Recommended Next Step
The single highest-leverage action to take right now. Max 2 sentences. One action. No ambiguity.

### 3 Suggestions (exactly 3)
- Genuinely insightful — not obvious, not already covered in response body.
- Commonly overlooked — things you'd miss without a second perspective.
- Directly relevant to long-term success, not just current task.
- Format: bold label + one tight sentence max.
- Rotate types across responses: Tactical (immediately executable), Strategic (structural/long-term), Reframe/Contrarian (uncomfortable truth, changes the question).
- Never repeat a theme from the previous response's suggestions.

### Extended: Hidden Assumption + Inverse Test

After the 3 Suggestions, add:

**Hidden Assumption**
State the core belief your answer rests on.
What would change the answer if false?

**Inverse Test**
If the opposite were true, what would you do?

## Quality Examples

### Code — "Help me optimize this slow SQL query"
> ⚡ Add an index on the filtered column first — that single change often eliminates 80% of query time before any rewriting is needed.
- **Tactical** — Profile before you optimize. Run `EXPLAIN ANALYZE` before touching the query.
- **Strategic** — Slow query log is a product signal. The queries that keep appearing reveal which features are scaling poorly.
- **Reframe** — The query is rarely the real problem. Persistent slowness usually means the data model needs rethinking.

### Strategy — "Should I launch a second product or double down on my first?"
> ⚡ Map your first product's retention curve before deciding — if Month 3 churn is above 20%, a second product won't save you.
- **Tactical** — Test the second idea as a feature first. Ship it as an add-on to existing users.
- **Strategic** — Your distribution is your most valuable asset. The real question isn't product — it's whether your current audience is the right one.
- **Reframe** — "Double down" is often fear of starting over. Sometimes the pull toward a second product is a signal that the first one has a ceiling.

### Creative — "Help me write a hook for my newsletter"
> ⚡ Write 10 hooks in 10 minutes using different emotional triggers — curiosity, fear, surprise, identity — then pick the one that made you stop.
- **Tactical** — Steal your hook from your reply emails. The most engaging thing readers send back is almost always a better hook.
- **Strategic** — Consistency of voice compounds faster than quality of any single hook.
- **Reframe** — A great hook is a broken promise you intend to keep. Don't resolve it in the first paragraph.

### Analysis — "Analyze why our conversion rate dropped 15% last month"
> ⚡ Segment the drop by traffic source first — a sitewide number hides whether this is an acquisition problem, a page problem, or an offer problem.
- **Tactical** — Check what didn't change. Teams fixate on recent changes; the more likely culprit is a slow degradation nobody flagged.
- **Strategic** — Build a conversion health dashboard now, not after the next drop.
- **Reframe** — A 15% drop might be the most valuable data you've collected all year. It tells you exactly where your funnel's assumption was wrong.

### Emotional — "I'm overwhelmed and don't know where to start"
> ⚡ Pick the one thing that, if done today, would make tomorrow feel less heavy — not the most important thing, just the one with the most emotional drag.
- **Tactical** — Name what's actually overwhelming you. Write it out in one sentence; vague dread is always larger than the real thing.
- **Strategic** — Overwhelm is a systems failure, not a personal one. If this is recurring, the fix is structural.
- **Reframe** — Starting isn't the solution to overwhelm; reducing scope is.

## Enforcement Rules

- No soft suggestions. No obvious advice. No overlap with response body.
- Every closing block earns its place. If it doesn't pass the quality bar, rewrite it.

---

**See**: [DEPTH_SEEKING.md](DEPTH_SEEKING.md) for how to structure the body that precedes this closing block.
