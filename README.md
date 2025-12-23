# DeVoise Ascension Group Website

A clean, luxury-style Next.js website for DeVoise Ascension Group.

## Local Setup

1. Install Node.js (18+ recommended)
2. In the project folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit Content

All content is in `src/data/`:
- `books.json` (includes cover paths + buy links)
- `services.json` (service cards + pricing)
- `events.json`
- `testimonials.json`

Book cover images live in `public/books/`.

## Deploy to Vercel (Recommended)

### Option A — Vercel + GitHub (Easiest)
1. Create a GitHub repo
2. Upload the project files
3. In Vercel: **New Project** → Import your repo → Deploy

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel
```

## Custom Domain (Namecheap → Vercel)

If your domain is on Namecheap, set:
- **A record** for `@` → `76.76.21.21`
- **CNAME** for `www` → `cname.vercel-dns.com`

Then in Vercel:
- Project → Settings → Domains → Add your domain

DNS + SSL can take time to propagate.

