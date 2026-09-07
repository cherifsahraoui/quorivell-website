import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://quorivell.com',
    integrations: [sitemap()],
    output: 'static',
    trailingSlash: 'never',
});
