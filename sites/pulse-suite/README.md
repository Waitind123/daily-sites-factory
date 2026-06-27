# Pulse Suite（监控状态一体）

**Statuspage $29 + UptimeRobot $7? → $9.9/mo all-in-one**

Uptime monitoring + public status pages + incident management for indie hackers.

## Core features

- 1-minute HTTP uptime checks with latency tracking
- Public status pages with component health (API, Web, Database)
- Incident management — post investigating → resolved updates
- Email subscriber notifications
- 5 free actions, then $9.9/mo flat subscription
- Demo checkout mode when no Stripe/Polar keys configured

## Stack

Next.js 15 · TypeScript · Tailwind · Stripe/Polar checkout

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Push to `main` — GitHub Actions deploys via `.github/workflows/deploy-site.yml`.
