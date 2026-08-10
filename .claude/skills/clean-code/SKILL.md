---
name: clean-code
description: Write or rewrite code in this repo to its engineering standard. Use whenever adding a feature, refactoring existing code, or when asked to "clean up", "make it production quality", or "use clean code". Enforces the rules in GUIDELINES.md — layering, strict types, Zod at boundaries, typed errors, fallbacks, accessibility, and verification with evidence.
---

# Clean code

The rules live in [`GUIDELINES.md`](../../../GUIDELINES.md) — read it, do not restate it.
This skill is the *procedure* for applying them. The state of the work lives in
[`PROGRESS.md`](../../../PROGRESS.md) — read that first if you are starting fresh.

## Before writing

1. **Read `PROGRESS.md`, then `GUIDELINES.md`.** Skipping this produces work that
   contradicts decisions already made.
2. **Find the existing pattern before inventing one.** Grep for a module that already
   does something similar. Match its layering, naming, and error handling. New code that
   reads like the surrounding code is worth more than new code that is individually nicer.
3. **Confirm the scope.** Content, copy, layout and information architecture are frozen.
   If the task seems to require changing them, stop and raise it.

## While writing

Work through these in order. Each is a hard gate, not a preference.

**Placement.** Route/handler → service → repository or external client, one direction
only. Business logic never lives in a component or a route handler. If the file you are
about to edit is the wrong layer for the logic, create the right one.

**Single responsibility.** If describing the module needs the word "and", split it before
you continue.

**Types.** Named exported interfaces for props and payloads. No `any`, no `!`, no
`@ts-ignore`. Model genuinely unknown shapes as `unknown` and narrow them.

**Boundaries.** Every API input, env var, and external response is parsed with Zod. Parse,
do not assume — an upstream service will eventually return something unexpected, and this
repo already ships a page that must never render broken.

**Failure.** Every external call gets a timeout, a retry policy, and an explicit failure
path. Every dynamic feature gets a defined fallback: cached value, skeleton, or the
existing static content. No empty catch blocks; a catch that intentionally does nothing
carries a comment saying why that is correct.

**Naming.** Descriptive and consistent. Never `data`, `res`, `temp`, `handleClick2`.
Components are PascalCase named for what they are.

**Shape.** Early returns over nested conditionals. Functions short enough to read without
scrolling.

**Comments.** Why, never what. No commented-out code. No comments addressed to the
reviewer — they are noise once merged.

**Accessibility.** Semantic elements, keyboard reachable, visible focus, descriptive alt
text, contrast ≥ 4.5:1 in both themes, touch targets ≥ 44px, `prefers-reduced-motion`
honoured.

## Before claiming done

Run these and paste real output. A claim without a run behind it does not count.

```bash
npm run typecheck    # must be clean
npm run lint         # must be clean at --max-warnings 0
npm run test         # if the change touches tested code
npm run build        # must succeed end to end
```

Then prove the behaviour, matched to what you changed:

- **Changed rendering or refactored components?** Build, then compare the prerendered
  markup's md5 against the previous build. Identical md5 proves the refactor changed no
  output. This repo has done exactly that for the TypeScript migration.
- **Changed anything the crawler sees?** `npm run preview`, then
  `curl -s http://localhost:4173 | grep …` for the content that should be there.
- **Changed hydration, entry points, or the theme?** Load the build in headless Chrome
  and confirm zero hydration warnings and a clean console.
- **Added UI?** Check it at 375px width and in both light and dark themes.

## Before stopping

1. Commit in small scoped conventional commits whose body explains **why**.
2. Update `PROGRESS.md`: what changed, what was verified and how, what is next.
3. Collect any `[[NEEDS INPUT: …]]` markers you introduced into the final report.

## Never

- Rewrite user-facing copy, invent a metric or claim, or fabricate a screenshot,
  mock, or number.
- Silently "improve" something you think is broken — report it instead.
- Commit build output, OS metadata, or credentials.
- Add anything that costs money, needs an external account, or needs manual setup
  from Ved.
- Work directly on `master`; Vercel auto-deploys it.
