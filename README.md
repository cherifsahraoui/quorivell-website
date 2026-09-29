# Quorivell public site

This folder is an Astro static site for `quorivell.com`, inspired by the
component and metadata structure of `tmpl/astrowind`.

## Local development

```shell
npm install
npm run dev
```

Run `npm run check` for Astro diagnostics and `npm run build` to generate the
deployable site in `dist/`.

## Publish from GitHub Pages

1. Push this repository to a public GitHub repository.
2. Open **Settings > Pages** and choose **GitHub Actions** as the source.
3. Push to `main` or run the `Deploy Quorivell site` workflow manually. The
   checked-in `.github/workflows/pages.yml` builds and publishes `dist/`.
4. Add `quorivell.com` as the custom domain in the Pages settings.
5. At the domain registrar, point the apex domain to GitHub Pages using the
	current GitHub Pages A records, and add the `www` CNAME GitHub provides.
6. Enable HTTPS after GitHub verifies the DNS records.
7. Create and test the `support@quorivell.com` mailbox before publishing the
	support URL in store metadata.

The privacy page is a release draft. Have the responsible legal entity review it
against the exact Android release, Firebase services, retention behavior, and
store disclosures before submission.

## In-app update manifest

`public/app-update.json` is fetched by the Flutter app from raw GitHub
(`https://raw.githubusercontent.com/cherifsahraoui/quorivell-website/main/public/app-update.json`)
on cold start — no GitHub Pages deploy is required for the update check.
Keep `latestVersion` in lockstep with the app marketing version by running
`dart run tools/bump_version.dart <x.y.z>` from the `ai_flutter` repo root,
then commit and push this repository (and the submodule pointer in
`ai_flutter` when that PR ships).

GitHub Pages (below) still publishes the marketing / privacy site at
`quorivell.com`; that is separate from the update manifest.
