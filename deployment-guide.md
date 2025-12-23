# Deployment Guide (Namecheap + Vercel)

## 1) Deploy the site

### Recommended: GitHub Import
1. Create a new GitHub repository (private or public)
2. Upload this project
3. Go to Vercel → **Add New** → **Project** → import the repo → **Deploy**

Vercel will give you a preview URL like:
`https://your-project.vercel.app`

## 2) Attach your custom domain

In Vercel:
- Project → **Settings** → **Domains** → add `devoiseascension.com` and `www.devoiseascension.com`

## 3) Fix Namecheap DNS

In Namecheap:
- Domain List → Manage → Advanced DNS

Set records:
- **A Record**
  - Host: `@`
  - Value: `76.76.21.21`
  - TTL: Automatic

- **CNAME Record**
  - Host: `www`
  - Value: `cname.vercel-dns.com`
  - TTL: Automatic

Remove old/parking records pointing to `192.64.119.170`.

## 4) SSL

Vercel will auto-issue SSL once DNS points correctly.

## 5) Verify

- Check the Vercel preview URL first (it should work immediately)
- Then check your custom domain after DNS updates

