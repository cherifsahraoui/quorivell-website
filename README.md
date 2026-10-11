# Quorivell Website

<p align="center">
  <a href="https://quorivell.com"><img src=".github/assets/readme-banner.png" alt="Quorivell" width="128"></a>
</p>

<p align="center">
  <a href="https://quorivell.com"><img src="https://img.shields.io/website?url=https%3A%2F%2Fquorivell.com&label=quorivell.com" alt="Website: quorivell.com"></a>
  <a href="https://github.com/cherifsahraoui/quorivell-website/actions/workflows/pages.yml"><img src="https://github.com/cherifsahraoui/quorivell-website/actions/workflows/pages.yml/badge.svg" alt="Deploy Quorivell site"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://github.com/cherifsahraoui/Quorivell"><img src="https://img.shields.io/badge/app-cherifsahraoui%2FQuorivell-181717.svg?logo=github" alt="App repository"></a>
</p>

<p align="center">
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-7-BC52EE.svg?logo=astro&logoColor=white" alt="Astro"></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-%3E%3D22.22.3-339933.svg?logo=node.js&logoColor=white" alt="Node.js"></a>
  <a href="https://pages.github.com"><img src="https://img.shields.io/badge/hosted%20on-GitHub%20Pages-222222.svg?logo=github" alt="GitHub Pages"></a>
</p>

<p align="center"><strong>Decisions, with evidence.</strong></p>

This repository contains the public website for
**[Quorivell](https://github.com/cherifsahraoui/Quorivell)**, a local-first
Flutter app that turns messy conversations into reviewable decisions and
commitments. The site is live at **[quorivell.com](https://quorivell.com)**.

| | |
| --- | --- |
| 🌐 **Website** | [quorivell.com](https://quorivell.com) |
| 📱 **App source code** | [github.com/cherifsahraoui/Quorivell](https://github.com/cherifsahraoui/Quorivell) |
| ▶️ **Google Play** | [com.quorivell.app](https://play.google.com/store/apps/details?id=com.quorivell.app) |
| ✉️ **Support** | [support@quorivell.com](mailto:support@quorivell.com) |

Looking for the app itself, its architecture, or how to build it? Head to the
**[Quorivell app repository](https://github.com/cherifsahraoui/Quorivell)**.

---

## 🗺️ What's in this repo

| Path | Purpose |
| --- | --- |
| `src/pages/index.astro` | Home page ([quorivell.com](https://quorivell.com)) |
| `src/pages/privacy.astro` | Privacy policy ([quorivell.com/privacy](https://quorivell.com/privacy)) |
| `src/pages/delete-account.astro` | Account &amp; data deletion ([quorivell.com/delete-account](https://quorivell.com/delete-account)) |
| `src/pages/support.astro` | Support and FAQ ([quorivell.com/support](https://quorivell.com/support)) |
| `src/layouts/`, `src/components/` | Shared layout, header and footer |
| `src/config.ts` | Single source for site name, title, description and contact email |
| `src/styles/global.css` | Site styles |
| `public/app-update.json` | In-app update manifest read by the Quorivell app (see below) |
| `public/CNAME` | Custom domain for GitHub Pages |
| `tmpl/astrowind` | [AstroWind](https://github.com/arthelokyo/astrowind) reference template (git submodule, not part of the build) |
| `.github/workflows/pages.yml` | Manual GitHub Pages deployment |

The site is a static [Astro](https://astro.build) build with the
`@astrojs/sitemap` integration. It deliberately ships no analytics, remote
fonts, or third-party embeds. UI and content rules for contributors live in
[AGENTS.md](AGENTS.md).

---

## 🛠️ Local preview

### Prerequisites

- Node.js **≥ 22.22.3** (see `engines` in `package.json`)

### Run

```bash
git clone https://github.com/cherifsahraoui/quorivell-website.git
cd quorivell-website
npm ci
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Astro dev server with live reload |
| `npm run check` | Run Astro and TypeScript diagnostics |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |

The `tmpl/astrowind` submodule is only a design reference. You don't need it
to build; fetch it with `git submodule update --init` if you want to browse it.

---

## 🚀 Deployment

The site is hosted on **GitHub Pages** with the custom domain `quorivell.com`
(HTTPS enforced). Deploys are **manual only**:

1. Open **Actions → [Deploy Quorivell site](https://github.com/cherifsahraoui/quorivell-website/actions/workflows/pages.yml)**.
2. Click **Run workflow** on `main`.

The workflow installs dependencies with `npm ci`, runs `npm run build`, and
publishes `dist/` to GitHub Pages. Pushing to `main` does **not** deploy.

> The privacy page is a release draft. Have it reviewed against the exact
> Android release, Firebase services, retention behaviour, and store
> disclosures before publishing changes.

---

## 🔔 In-app update manifest

[`public/app-update.json`](public/app-update.json) tells the Quorivell app
which version is current on Google Play. The app fetches it straight from raw
GitHub on cold start:

```
https://raw.githubusercontent.com/cherifsahraoui/quorivell-website/main/public/app-update.json
```

Because it is served from `main` directly, a Pages deploy is **not** needed for
update prompts; pushing to `main` is enough. Keep `latestVersion` in lockstep
with the app's marketing version. It is bumped by the app's release tooling
(`dart run tools/bump_version.dart <x.y.z>`), so don't edit it by hand unless
you are fixing a mistake.

---

## 🤝 Contributing & issues

- **App bugs, feature requests, and questions** belong in the
  [Quorivell app repository issues](https://github.com/cherifsahraoui/Quorivell/issues).
- **Website problems** (typos, broken links, layout issues) can be filed in
  [this repository's issues](https://github.com/cherifsahraoui/quorivell-website/issues).
- Before opening a PR, run `npm run check` and `npm run build`, and follow
  [AGENTS.md](AGENTS.md).
- Contribution guidelines, the Code of Conduct, and the security policy are
  shared with the app:
  [CONTRIBUTING.md](https://github.com/cherifsahraoui/Quorivell/blob/main/CONTRIBUTING.md) ·
  [CODE_OF_CONDUCT.md](https://github.com/cherifsahraoui/Quorivell/blob/main/CODE_OF_CONDUCT.md) ·
  [SECURITY.md](https://github.com/cherifsahraoui/Quorivell/blob/main/SECURITY.md).

---

## 📄 License

Released under the [MIT License](LICENSE). Copyright (c) 2026 Cherif Sahraoui.
