# Incident AI (AI 事件摘要)

> Statuspage $29+/mo? $9.9/mo flat: paste alert → status update, email, Slack, postmortem

## Core features

- Paste PagerDuty/Datadog/uptime alerts → 4 channel drafts
- Status page update, customer email, internal Slack, postmortem
- Severity detection from raw alert text
- 5 free drafts, then $9.9/mo subscription
- Dark theme + en/zh i18n

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Auto-deploy via GitHub Actions `deploy-site.yml` to Vercel.
