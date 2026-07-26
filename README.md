# DBD Cheats Site

Dead by Daylight cheats landing site — visual clone styled after darkanddarkercheats.com with Zadeyo DBD content.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- React Router v7
- GitHub Pages (`base: /dbd/` in production)

## Development

```bash
npm install
npm run dev
```

Open **http://localhost:5173/**

## Build & Preview

```bash
npm run build
npm run preview          # local dev base (/)
npm run preview:gh       # simulates GitHub Pages base (/dbd/)
```

## Deploy to GitHub Pages

1. Create a GitHub repo named `dbd` (or update `base` in `vite.config.ts` to match your repo name)
2. Push this project to `main` or `master`
3. In repo **Settings → Pages → Build and deployment**, set source to **GitHub Actions**
4. Push triggers `.github/workflows/deploy.yml` automatically
5. Live URL: `https://<username>.github.io/dbd/`

### First-time deploy checklist

- [ ] Repo name matches `base: '/dbd/'` in `vite.config.ts` (production build)
- [ ] GitHub Pages enabled with **GitHub Actions** source
- [ ] `workflow_dispatch` can also be triggered manually from the Actions tab

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/buy` | Pricing, features, FAQ |
| `/blog` | Blog index with filters |
| `/blog/:slug` | Blog article |

## Assets

| File | Source |
|------|--------|
| `src/assets/video/hero-dbd.mp4` | Local DBD gameplay video |
| `src/assets/images/dbd-atmosphere-*.jpg` | Pinterest references |
| `src/assets/images/cheat-menu-screenshot.png` | Discord screenshot |
| `src/assets/prompts/*.prompt.txt` | AI image generator prompts |

## Phases

- [x] Phase 1 — Scaffold
- [x] Phase 2 — Homepage
- [x] Phase 3 — Buy page
- [x] Phase 4 — Blog
- [x] Phase 5 — Content & assets
- [x] Phase 6 — Visual QA
- [x] Phase 7 — GitHub Pages
