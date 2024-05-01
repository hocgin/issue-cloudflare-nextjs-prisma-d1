## Getting Started

> issue-cloudflare-nextjs-prisma-d1
>
> [issues#740](https://github.com/cloudflare/next-on-pages/issues/740)

First, run the development server:

```bash
npx wrangler d1 create my-db

# change with wrangler.toml > [[d1_databases]]

npx wrangler d1 migrations apply my-db --remote

npm run deploy
```
