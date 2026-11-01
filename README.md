# PlaceholderJS.com
This is the website for PlaceholderJS.com. To view the Placeholder package repo, click [here](https://github.com/bick/placeholder).

## Deployment
The site is a static Next.js export hosted as a Cloudflare Worker with static assets, configured in `wrangler.jsonc`. Cloudflare serves files in `out/` directly, and `src/worker/index.ts` generates the placeholder images.

| Setting | Value |
| --- | --- |
| Build command | `pnpm build` |
| Deploy command | `npx wrangler deploy` |

`next dev` doesn't serve placeholder images. Run `pnpm preview` to test the site and the images together.
