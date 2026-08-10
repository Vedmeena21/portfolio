# Engineering guidelines

Rules for anyone — human or AI — working in this repo. This is a portfolio, so the
code is part of the product: a hiring engineer may clone it and read it.

---

## 0. Before you touch anything

**Read [`PROGRESS.md`](PROGRESS.md) first.** It records where the work stands, what is
verified, and what comes next. It exists so a new session does not have to re-derive
the state of the project by reading the whole codebase. If it disagrees with the code,
the code wins — then fix `PROGRESS.md`.

**Update `PROGRESS.md` before you stop.** Every session ends by recording what changed,
what was verified and how, what is now in progress, and what the next step is. A session
that leaves no trace forces the next one to start from zero.

**Use the `/clean-code` skill when writing or rewriting code.** It lives at
`.claude/skills/clean-code/SKILL.md` and turns the rules below into a procedure: what to
read first, what to gate on while writing, and what evidence to produce before claiming
something is done.

---

## 1. Scope discipline

The site's content, structure, and visual identity are settled. Enhancement work adds
behaviour and polish inside that identity; it does not redesign it.

- **Never rewrite user-facing copy.** Not the hero, not project descriptions, not
  experience bullets. If copy looks wrong, say so — do not fix it silently.
- **Never invent a fact.** No metric, achievement, date, or claim that is not already
  in the repo or supplied by Ved. If content is missing, insert a
  `[[NEEDS INPUT: <what>]]` marker and collect every marker in the final report.
- **Never fake an artifact.** No mock screenshots, no placeholder product shots, no
  fabricated numbers on a status panel. A monogram is honest; a fake UI is not.
- **Do not reorder or remove sections** or change the information architecture.
- **Raise disagreements before implementing them.** If something in the codebase looks
  broken or counterproductive, report it and wait — do not silently "improve" it.

## 2. Verify, don't assert

A change is not done because it compiles. It is done when you have evidence.

- Prove crawlable output with `curl … | grep`, not by reasoning about the build.
- Prove hydration with a real headless browser run, not by inspecting JSX.
- Prove a refactor changed no markup by comparing the prerendered HTML's md5 before
  and after. This repo has done exactly that for the TypeScript migration.
- Report failures with their output. "Tests pass" with no run behind it is a lie.

## 3. Architecture

- **One direction:** route/handler → service → repository or external client. Business
  logic never lives in a component or a route handler.
- **One responsibility per module.** If describing a file needs the word "and", split it.
- **Feature-based folders**, not type-based dumping grounds.
- **Extract shared logic once.** Two near-identical blocks with small edits is a bug
  waiting to diverge — as the theme toggle did, when the navbar and the mobile menu
  each kept their own copy with inverted logic.
- **Config has one home.** Site identity lives in `src/config/site.ts`; everything that
  needs it — head tags, sitemap, JSON-LD — reads from there.

## 4. Types and validation

- TypeScript strict, with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`.
- **No `any`. No non-null assertions (`!`). No `@ts-ignore`.** If a type is genuinely
  unknown, model it — `unknown` plus narrowing, or a union.
- Type props with a named exported interface. Do not use `React.FC`.
- **Zod at every boundary:** API input, env vars, and external API responses. Parse,
  do not assume. An upstream service can and will return something unexpected.
- Env config is validated once at startup and read from a typed module. Never scatter
  `process.env`, never hardcode a key or secret.

## 5. Errors and external calls

- Typed error objects with codes, one centralized handler, one consistent API error shape.
- **No empty catch blocks, no swallowed errors, no `console.log` as error handling.**
  A `catch` that does nothing must carry a comment saying why nothing is correct.
- Every external call gets an explicit **timeout, retry policy, and failure path**.
- **Every dynamic feature needs a defined fallback** — a cached value, a skeleton, or
  the existing static content. Nothing may render a broken state or a spinner that
  never resolves.
- Show a "last updated" timestamp rather than implying data is fresher than it is.

## 6. Naming and readability

- Descriptive, consistent names. Never `data`, `res`, `temp`, `handleClick2`.
- Components are PascalCase and named for what they are (`ProjectCard`, not `Project_prop`).
- Functions short enough to read without scrolling. Early returns over nested `if`s.
- **Comments explain why, never what.** Delete commented-out code rather than leaving it.
  Do not write comments addressed to the reviewer ("this fixes the bug") — they are
  noise the moment the PR merges.

## 7. Accessibility and mobile — non-negotiable

- Semantic HTML: real `<nav>`, `<header>`, `<main>`, `<footer>`. Not `<div>` soup.
- One `<h1>` per page, and headings in order.
- Keyboard navigable, including the command palette and the assistant. Visible focus states.
- Every image gets descriptive alt text. Not `"project logo"`, not `alt="html"` on
  twelve different icons.
- Contrast ≥ 4.5:1 in **both** themes.
- Touch targets ≥ 44px.
- Honour `prefers-reduced-motion` fully.
- **Verify every new feature at 375px width and in both themes before calling it done.**

## 8. Motion

- Under 400ms. Subtle, fast, once.
- Never block content on animation.
- No scroll-jacking, no parallax on text, no autoplaying audio.
- Never drop below Lighthouse 90 on performance.

## 9. Assets

- Official brand SVGs, or Simple Icons / Devicon. Respect brand usage guidelines.
- **Self-host everything.** Never hotlink a CDN, a search result, or any URL whose
  licence you cannot verify.
- SVG where possible, optimised with SVGO. Raster fallbacks in WebP with explicit
  `width` and `height` to prevent layout shift.
- Verify every asset renders at 375px in both themes.

## 10. Hygiene

- ESLint + Prettier configured, passing, enforced by a pre-commit hook.
- No dead code, unused exports, or unused dependencies. An unused import in a barrel
  file still ships to production — Vite bundles it regardless of whether anything
  renders it.
- Tests for API routes, the retrieval layer, and any non-trivial pure function.
- **Conventional commits, small and scoped.** The body explains *why*, not just what.
- Never commit build output (`dist/`), OS metadata (`.DS_Store`), or credentials.
- README stays current: architecture, local setup, env vars, and the reasoning behind
  the main technical choices.

## 11. Safety of the working tree

- Work on a feature branch, never directly on `master` — Vercel auto-deploys `master`.
- A restore point exists before large changes: branch `backup/pre-enhancement-2026-08-10`
  and tag `v0-pre-enhancement`.
- Stay inside this project directory. Never modify another project on the machine.
- Anything that costs money, needs an external account, or needs manual setup from Ved
  is out of bounds unless he asks for it.

---

## Commands

```bash
npm run dev          # dev server
npm run build        # client build + SSR build + prerender + robots/sitemap
npm run typecheck    # tsc --noEmit
npm run lint         # eslint, zero warnings tolerated
npm run format       # prettier --write
npm run test         # vitest
npm run preview      # serve dist/ (use this to curl the prerendered HTML)
```
