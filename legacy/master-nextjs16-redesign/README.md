# Legacy: master branch — Next.js 16 Redesign (Deprecated 2026-07-01)

> **This directory is a frozen historical archive.**
> It preserves the unique content of the `master` branch before that branch
> was deleted from `origin`. Nothing here is active. Nothing here is imported
> by the live app. It exists solely so the work isn't lost.

## What this is

The `master` branch was GitHub's **default branch** from the repo's inception
until 2026-07-01. It hosted a parallel evolution of the project — a Next.js 16
+ shadcn/ui + Tailwind v4 + Framer Motion 12 redesign that diverged from the
`main` branch by 268 files / +38,868 / −32,105 lines. Merging either direction
would have been destructive, so the decision was made to:

1. Cherry-pick only the `profiles/` directory from `master` → `main` (the raw
   URL `…/profiles/system-master-prompt-v4` is referenced from outside the repo).
2. Archive all other `master`-unique files (87 files) into this directory.
3. Change GitHub's default branch from `master` to `main`.
4. Delete the `master` branch.

`main` is now the canonical branch. It hosts:
- The v25 Knowledge Base PWA (90+ skills, MCP stacks, doctrine tree)
- The v26 Next.js 15 App Router demo route at `/demo`
- `AGENTS.md` with the System Master Prompt v4 doctrine
- The full `skills/` registry (108 skill directories, 91 surfaced in the PWA)
- The `parallel-deep-research-orchestrator` skill
- The `animation-3d-layered-architect` skill + `LayeredAnimationStack` reference
  implementation

## What's archived here

87 files that existed on `master` but not on `main` at the moment of archival.
Directory structure preserved verbatim from `master`:

| Path | Purpose |
|---|---|
| `src/app/` | Next.js 16 App Router pages (accomplishments, agent-modes, prompt-engineering, skill-ecosystem, stacks, error.tsx, favicon, globals.css, layout.tsx, page.tsx) |
| `src/components/` | Glass-card, command-palette, navbar, motion containers, providers, shadcn ui (button, sonner) |
| `src/lib/data/` | TypeScript data files (agents, community-use-cases, search-index, skills, stacks) |
| `src/lib/motion.ts`, `src/lib/spatial.ts`, `src/lib/utils.ts` | Motion + spatial utility libs |
| `src/lib/store/` | Zustand stores (basket, registry, ui) |
| `prompts/` | 15 prompt-engineering markdown files (core, reference, skills, AGENTS.md, INDEX.md) |
| `workflows/` | 4 workflow markdown files (autonomous-team, bulletproof-quality, skills-org-chart, zero-to-revenue) |
| `skills/` | Master-unique skills + 5 `.zip` backups (anthropic-frontend-design, gsap-animations, ui-ux-pro-max-v7, vercel-react-best-practices, vercel-web-design-guidelines) |
| `agents/Universal_System_Prompt_v1.0_SKILL_01_Clean.md` | Earlier universal prompt (master's `agents/` dir had this one file; main's `agents/` dir has 18 different files) |
| `HERMES_SYSTEM_PROMPT_v4_COMPOUND.md`, `HERMES_SYSTEM_PROMPT_v4_DEPTH.md` | Hermes variants of system-master-prompt-v4 |
| `PLUGINS.md`, `SKILLS.md` | Top-level docs that existed only on master |
| `accomplishments.html`, `index.html` | Master's static HTML exports (different from main's PWA `public/index.html`) |
| `mcp-registry.json`, `stacks.json` | Master's versions (different content from main's) |
| `screenshot-*.png`, `og-skills-showcase.svg` | Screenshots + OG image from master's redesign |
| `skills-showcase-prompt.md` | Prompt used to generate master's showcase |
| `components.json`, `eslint.config.mjs`, `next.config.ts`, `postcss.config.mjs` | Master's Next.js 16 / shadcn config files |

## How this was generated

```bash
# Identify master-unique files
git ls-tree -r --name-only origin/master | sort > /tmp/master_files.txt
git ls-tree -r --name-only HEAD        | sort > /tmp/main_files.txt
comm -23 /tmp/master_files.txt /tmp/main_files.txt  # 87 files

# Archive each one (preserving directory structure)
comm -23 /tmp/master_files.txt /tmp/main_files.txt | while read f; do
  mkdir -p "legacy/master-nextjs16-redesign/$(dirname "$f")"
  git show "origin/master:$f" > "legacy/master-nextjs16-redesign/$f"
done
```

## Restoration

If you ever need to resurrect any of this work, the `master` branch's commit
history is preserved in `git reflog` for ~90 days after deletion, and the
archive can be cherry-picked file-by-file back into `main`:

```bash
git checkout legacy/master-nextjs16-redesign/<path> -- <target-path>
```

For the full Next.js 16 redesign, the most relevant starting points are:
- `legacy/master-nextjs16-redesign/src/app/layout.tsx` — root layout
- `legacy/master-nextjs16-redesign/src/app/page.tsx` — home page
- `legacy/master-nextjs16-redesign/src/lib/data/skills.ts` — skill catalog (different shape from main's `SKILLS_DATA`)
- `legacy/master-nextjs16-redesign/package.json` (not archived — was identical to main's; see git history of master for the deps list)

## Related

- Live app: https://opencode-accomplishments.vercel.app
- Live demo: https://opencode-accomplishments.vercel.app/demo
- PWA: https://opencode-accomplishments.vercel.app/index.html
- Source: https://github.com/marktantongco/opencode-accomplishments
