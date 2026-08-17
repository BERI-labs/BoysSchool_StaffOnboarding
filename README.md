# BoysSchool_StaffOnboarding

Beri — an AI staff induction assistant for Haberdashers' Boys' School. Built by [BERI Labs](https://beri-labs.github.io/).

Static Next.js app, hybrid BM25 + on-device vector search over a curated knowledge base, streamed answers via Groq.

## Local development

```bash
npm install
npm run build:index   # chunk BoysSchool_StaffOnboarding.md → public/data/boysschool-chunks.json
cp .env.example .env.local   # add your Groq key
npm run dev
```

`.env.local`:

```
NEXT_PUBLIC_GROQ_API_KEY=your-groq-api-key
```

## Updating the knowledge base

Edit `BoysSchool_StaffOnboarding.md` at the repo root, then re-chunk:

```bash
npm run build:index
```

This regenerates `public/data/boysschool-chunks.json`. Each `##` heading becomes one chunk; a trailing `**Source:** <url>` line on a section is extracted as a citation link. Commit both the updated `.md` and the regenerated `.json`.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

1. **Add the Groq API key as a repository secret** — Settings → Secrets and variables → Actions → New repository secret → name it `GROQ_API_KEY`, value = your Groq API key. (The workflow injects it at build time as `NEXT_PUBLIC_GROQ_API_KEY`.)
2. **Enable Pages** — Settings → Pages → Build and deployment → Source: "GitHub Actions".
3. Push to `main` — the workflow runs `npm run build:index`, builds the static export, and deploys it.
