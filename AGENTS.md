# Quorivell Site UI Rules

Apply these rules to every file under `site/`:

- Preserve the Quorivell editorial visual language: warm paper background, deep green ink, mint surfaces, and coral accents.
- Keep the product promise visible: private by default, reviewable decisions, and evidence retained with every record.
- Prefer Astro components and shared data from `src/config.ts`; do not duplicate site metadata or navigation labels across pages.
- Use semantic HTML, visible keyboard focus, skip navigation, descriptive document titles, canonical URLs, and meaningful link text.
- Keep the site static and dependency-light. Do not add analytics, remote font loading, or third-party embeds without an explicit privacy decision.
- Use responsive layouts that remain readable on small screens. Avoid dense card grids, generic SaaS language, purple gradients, and decorative UI that competes with the product message.
- Treat privacy language as product behavior: never claim data is local, deleted, encrypted, or never transmitted unless the app implementation and release configuration support that claim.
- Run `npm run check` and `npm run build` from `site/` after structural changes.
