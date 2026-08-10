# Progress

Working state of the portfolio enhancement. **Read this before reading the codebase.**
Read [`GUIDELINES.md`](GUIDELINES.md) next — it holds the rules that govern the work.

- **Branch:** `feat/dynamic-portfolio` (never work on `master` — Vercel auto-deploys it)
- **Restore point:** branch `backup/pre-enhancement-2026-08-10`, tag `v0-pre-enhancement`
- **Live site:** https://vedmeena21pf.vercel.app
- **Last updated:** 2026-08-10

---

## The goal

Take a static Vite + React portfolio and make it dynamic, visually striking, and
professionally engineered — without redesigning it. Content, structure, and visual
identity stay exactly as they are.

**Hard constraints from Ved:**

1. Nothing that costs money.
2. Nothing that requires an external account, API key, or any manual setup from him.
3. Hero copy is frozen verbatim, project descriptions are not to be rewritten.

Constraint 2 is why the RAG assistant is planned as retrieval-only, the GitHub layer
uses the unauthenticated API, and status metrics live in memory rather than in Redis.

---

## Done and verified

### Repo safety
Backup branch and tag pushed to GitHub before any change. Working tree was clean and
matched `origin/master` at the time of the snapshot.

### Hygiene
- `dist/` and `.DS_Store` untracked; `.gitignore` rewritten.
- Six unused dependencies removed (`@mui/material`, `@mui/icons-material`,
  `@emotion/react`, `@emotion/styled`, `@fontsource/roboto`, `react-fast-marquee`).
- `react-spinners` removed with the loading gate.
- Invalid npm package name fixed.

### Crawlability — the headline fix
The site previously shipped `<div id="root"></div>` and nothing else.

- A post-build step (`scripts/prerender.ts`) renders the app with `renderToString`
  and injects **55,562 characters** of real HTML into `dist/index.html`.
- Meta description, canonical, OG and Twitter cards, `robots.txt`, `sitemap.xml`,
  and JSON-LD `Person` linking GitHub, LinkedIn and Instagram.
- All head tags generate from one typed source (`src/config/site.ts` → `head.ts`) and
  are injected in **both** dev and build, so they cannot drift.

**Verified:** `curl -s http://localhost:4173 | grep -i "Software Developer"` returns the
hero copy; all six project titles and the Mercer | Mettl experience appear in the raw
HTML; `robots.txt`, `sitemap.xml` and the JSON-LD block are all served.

**Load-bearing detail:** the artificial 3-second loading gate in `App` had to go. An
agent verified empirically that prerendering the content while `App` still started with
`loading=true` produced a real hydration failure — React logged "Hydration failed
because the initial UI does not match" and replaced the prerendered HTML with an empty
container. This was a prerequisite, not a cleanup.

### Build tooling
- Vite 4 → 6 (needed `isSsrBuild`; Vite 4.3 also predates vitest 4).
- `ssr.noExternal` for `react-icons` (bare directory imports Node's ESM resolver
  rejects) and `lottie-react` (CJS default export does not survive Node interop).
- `scripts/stubs/lottie-web.js` — an inert stand-in aliased in only during the SSR
  build, because `lottie-web` touches `document` at module scope and Node ≥ 21 always
  defines `navigator`, so the real module crashes the prerender.

### Theme
Prerendering exposed a flash of the wrong theme, since the theme class was applied in
an effect. Now: a pre-paint inline script in `index.html` plus a shared store
(`src/lib/theme.ts` + `useTheme` via `useSyncExternalStore`), persisted to
`localStorage`. This also deleted the duplicated, inverted toggle in `Menu` that had
been force-switching the site to dark mode whenever the mobile menu opened.

### TypeScript migration
Every component, entry point and constants module is now `.ts`/`.tsx` under `strict`,
`noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`. No `any`, no non-null
assertions. `Exp_prop`/`Project_prop`/`Img_prop` renamed to
`ExperienceCard`/`ProjectCard`/`SkillIcon`. `Constant.jsx` became
`constants/assets.ts`, dropping 15 image imports no component referenced — Vite was
bundling roughly 3.5 MB of never-displayed assets, including a 2.5 MB 7730×7730 JPEG.

ESLint 8 rc config replaced with ESLint 9 flat config, adding `jsx-a11y` and type-aware
TypeScript rules.

**Verified:** `tsc --noEmit` clean, `eslint` clean at `--max-warnings 0`, headless
Chrome reports zero hydration warnings and a completely clean console, and the
prerendered markup md5 is **identical** to the pre-migration baseline
(`421437ae118ba907ecad7c8856c3bc82`) — the migration changed no markup at all.

---

## Next up

In order. Report after each; nothing here has been started.

1. **API layer.** Extract inline content out of JSX into typed data modules, serve via
   `/api/v1/projects`, `/api/v1/stack`, `/api/v1/status` as Vercel TypeScript
   serverless functions. Zod at every boundary, one typed error shape, Scalar docs
   linked discreetly from the footer. Static data stays as the fallback so the page can
   never render empty.
2. **Project imagery.** Replace the college logo on all six cards. Sourcing is already
   researched — see the table below.
3. **GitHub layer.** Unauthenticated API, fetched at build time into a snapshot and
   refreshed at runtime when the rate limit allows, always falling back to the snapshot.
   Honest caveat: the full-year contribution graph needs authenticated GraphQL, so
   without a token this shows public commit activity for ~90 days, labelled as such.
4. **Status metrics.** p95, cache hit rate, requests/24h, uptime — in-memory, labelled
   "since last cold start" rather than implying long uptime.
5. **Assistant.** Retrieval-only RAG: real chunking, a build-time vector index, real
   retrieval settings, sources shown, streaming, guardrails, per-IP rate limiting.
   Answers are extracted verbatim from the documents, so nothing can be hallucinated.
   The "how this works" panel must say exactly that. Provider-agnostic interface so a
   generative step can drop in later if Ved ever adds a key.
6. **Live demos.** SpendWise and SHL only — they are the two that are actually deployed.
7. **Motion and polish.** Latency badges, count-up, scroll-reveal, spring card hover,
   ⌘K palette, heatmap cell-by-cell paint. Reduced-motion honoured, under 400ms.
8. **Accessibility pass.** Semantic landmarks, heading order, form labels, contrast,
   touch targets. See the outstanding-issues list below.
9. **Final report.** All `[[NEEDS INPUT]]` markers, Lighthouse scores, test results,
   lint status, and a diff summary confirming no copy or layout changed out of scope.

---

## Project imagery — researched, not yet applied

Every repo was inspected via the unauthenticated GitHub API. No project has a usable
logo of its own except Dynamic Calendar, and that one is stock art in a forked repo, so
a stack mark is the safer, licence-clean choice. All Simple Icons slugs below were
verified to resolve.

| Project | Mark | Slugs |
| --- | --- | --- |
| Movie Recommendation System | stack | `python`, `huggingface`, `pytorch` |
| Multi-threaded LRU Cache | stack | `cplusplus`, `linux` |
| AskMyPDF | stack | `langchain`, `huggingface`, `streamlit` |
| SpendWise | stack | `nextdotjs`, `mongodb`, `huggingface` |
| SHL Assessment | stack | `googlegemini`, `fastapi`, `nextdotjs` |
| Dynamic Calendar | stack | `react`, `typescript`, `tailwindcss` |

Assets must be self-hosted and SVGO-optimised. The college logo stays only in the
Education section. Descriptive per-project alt text was drafted during research.

---

## Outstanding issues, verified but not yet fixed

Each survived an adversarial verification pass.

**Security — needs Ved, not code:** a GitHub personal access token is embedded in the
`.git/config` remote URL in plaintext. It should be revoked at
github.com/settings/tokens and the remote switched to a plain HTTPS URL backed by
`gh auth login`. Untouched so far because changing the remote could break his push flow.

**Accessibility:** no `<main>` landmark; 19 `<h1>` elements on the page and the first
heading is an `<h3>`; contact form inputs have no labels; `alt="html"` hardcoded on all
12 skill icons; empty alt on card images; no `prefers-reduced-motion` handling anywhere
despite AOS, Framer Motion and two looping Lotties; touch targets below 44px on card and
social icons.

**Contrast:** SkillCard description text is roughly 1.4:1 in light mode; the amber/yellow
gradient heading is roughly 1.5:1 on the light background.

**Content accuracy — flag to Ved, do not edit:**
- The Movie Recommendation System card says "LLaMA, spaCy, and Neo4j". A grep of that
  repo finds none of the three; it is Hugging Face Transformers (`bart-large-mnli` plus
  a RoBERTa NER model) on PyTorch, in Colab notebooks.
- The LRU cache repo has no mutex, lock guard, or atomic. Each thread allocates its own
  private cache, so nothing is actually shared or locked.
- SpendWise's README points its clone instructions at a different user's repository.

**Smaller:** `Project_prop`'s "Tech Stack" heading renders above an always-empty row
because six icon props are declared but never passed; four skill logos are still
hotlinked from third-party CDNs; the SpendWise live link is a free-tier Render URL with
a 15s+ cold start that reads as dead; there is no resume link anywhere on the site.

---

## Open questions for Ved

- `[[NEEDS INPUT: resume PDF to link from the site]]`
- `[[NEEDS INPUT: which Mercer | Mettl details are cleared for publication]]`
- `[[NEEDS INPUT: whether any project has an architecture diagram to animate]]`
