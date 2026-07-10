import type { Locale } from "./i18n-shared";

export type ToolReview = {
  summary: string;
  bestFor: string[];
  pricingDetail: string;
  alternatives: { name: string; pricing: string; when: string }[];
  pros: string[];
  cons: string[];
  setupTips: string[];
  verdict: string;
};

export type ToolLocaleFields = {
  tagline: string;
  preview: string;
  review: ToolReview;
};

export const toolsLocaleEn: Record<string, ToolLocaleFields> = {
  plausible: {
    tagline: "Lightweight, privacy-friendly open-source Google Analytics alternative",
    preview:
      "GA4 is heavy and invasive. Plausible = one script, no cookies, GDPR-friendly — default landing analytics for indie builders.",
    review: {
      summary:
        "Plausible is the most mature open-source GA alternative. 1KB script, no cookie banner, core metrics at a glance. Self-hosted Community Edition is free with Docker Compose.",
      bestFor: ["Landing page PV/UV", "Privacy-sensitive products", "EU GDPR compliance"],
      pricingDetail:
        "Self-hosted CE: $0/mo (~$5 VPS). Official cloud: $9/mo for 10K PV. vs GA4 free but complex, Fathom $14/mo.",
      alternatives: [
        { name: "Google Analytics 4", pricing: "Free", when: "Complex funnels, existing GA ecosystem" },
        { name: "Umami", pricing: "Free self-host", when: "Ultra-minimal, full control" },
        { name: "PostHog", pricing: "Free 1M events", when: "Product events + Feature Flags" },
      ],
      pros: ["5-second dashboard", "No cookies / GDPR easy", "Mature Docker self-host", "Public stats link"],
      cons: ["Funnels need Goals setup", "Fewer features than GA4", "Dashboard slow in CN"],
      setupTips: [
        "git clone plausible/analytics",
        "docker compose up -d (Postgres + Clickhouse)",
        "CNAME stats.yourdomain.com to VPS",
        "Insert script tag in layout.tsx",
      ],
      verdict: "Default self-hosted landing analytics. $5 VPS replaces GA4 + cookie banner legal fees.",
    },
  },
  plane: {
    tagline: "Open-source Jira / Linear alternative — project management + issue tracking",
    preview:
      "Jira $7.75/user/mo is expensive. Plane is open-source, modern UI, Sprint + Kanban + Roadmap — indie team PM standard.",
    review: {
      summary:
        "Plane is the hottest Jira open-source alternative in 2024–2026. Next.js + Django, UI 10× more modern than Jira. Self-hosted Docker is free for 1–20 person indie teams.",
      bestFor: ["Small team issue tracking", "Sprint planning", "Public roadmap"],
      pricingDetail:
        "Community self-host: $0. Cloud: $8/user/mo. vs Jira $7.75+, Linear $8/user, Asana $10.99/user.",
      alternatives: [
        { name: "Jira", pricing: "$7.75+/user", when: "Enterprise, complex workflows" },
        { name: "Linear", pricing: "$8/user", when: "Best UX, closed-source OK" },
        { name: "GitHub Issues", pricing: "Free", when: "Dev-only team, no Sprint needed" },
      ],
      pros: ["Modern UI/UX", "Sprint + Kanban + List views", "Cycles planning", "Mature Docker self-host"],
      cons: ["Self-host needs Postgres maintenance", "Mobile UX average", "Fewer integrations than Jira"],
      setupTips: [
        "docker pull makeplane/plane-backend",
        "Use official docker-compose.yml",
        "Configure SMTP for email notifications",
        "Import GitHub Issues to migrate data",
      ],
      verdict: "Default indie team PM. Self-host $0 replaces Jira $100+/mo (10-person team).",
    },
  },
  mattermost: {
    tagline: "Open-source Slack alternative — self-hosted team chat",
    preview:
      "Slack free tier = 90-day message limit. Mattermost self-host = unlimited history, optional E2E — data stays yours.",
    review: {
      summary:
        "Mattermost is enterprise-grade open-source Slack. Used by US DoD. Self-hosted Team Edition is free with channels, threads, bots, webhooks. Perfect for remote indie teams.",
      bestFor: ["Remote team chat", "Data sovereignty", "Slack migration"],
      pricingDetail:
        "Team Edition self-host: $0. Enterprise: $10/user/mo. vs Slack Pro $8.75/user, Discord free but not enterprise.",
      alternatives: [
        { name: "Slack", pricing: "$8.75+/user", when: "Maximum integration ecosystem" },
        { name: "Rocket.Chat", pricing: "Free self-host", when: "Built-in video calls" },
        { name: "Discord", pricing: "Free", when: "Community-driven, informal teams" },
      ],
      pros: ["Unlimited message history", "Self-hosted data sovereignty", "Slack-like UX", "Rich Bot/Webhook API"],
      cons: ["Self-host ops cost", "UI less polished than Slack", "Video calls need plugins"],
      setupTips: [
        "docker run mattermost/mattermost-team-edition",
        "Configure Postgres database",
        "Set SMTP + custom domain",
        "Import Slack export JSON",
      ],
      verdict: "Default remote indie team chat. $5 VPS replaces Slack $100+/mo.",
    },
  },
  supabase: {
    tagline: "Open-source Firebase alternative — Postgres + Auth + Storage + Realtime",
    preview:
      "Firebase vendor lock-in is real. Supabase = open Postgres + auto API + Auth — solo full-stack backend standard.",
    review: {
      summary:
        "Supabase is the most complete Firebase open-source alternative. Postgres + REST/GraphQL API + Auth + Storage + Edge Functions + Realtime — backend in a weekend. Docker self-host is free.",
      bestFor: ["Full-stack indie SaaS", "Relational data", "Fast MVP backend"],
      pricingDetail:
        "Self-host Docker: $0 (~$10–20 VPS). Cloud free: 500MB DB. Pro $25/mo: 8GB, no pause.",
      alternatives: [
        { name: "Firebase", pricing: "Free tier/usage", when: "NoSQL, Google ecosystem" },
        { name: "Appwrite", pricing: "Free self-host", when: "More built-in services" },
        { name: "PocketBase", pricing: "Single file free", when: "Minimal MVP, SQLite enough" },
      ],
      pros: ["Full Postgres", "Row Level Security", "Visual dashboard", "Edge Functions"],
      cons: ["Self-host needs Postgres maintenance", "Complex queries need tuning", "Some vendor lock-in"],
      setupTips: [
        "git clone supabase/supabase",
        "docker compose -f docker/docker-compose.yml up",
        "Set SUPABASE_URL + ANON_KEY",
        "SQL Editor: create tables + RLS policies",
      ],
      verdict: "2026 indie full-stack default. Self-host $10 VPS replaces Firebase + data sovereignty.",
    },
  },
  calcom: {
    tagline: "Open-source Calendly alternative — self-hosted scheduling",
    preview:
      "Calendly $12/mo with limited customization. Cal.com is open-source, white-label, Stripe integration — indie booking standard.",
    review: {
      summary:
        "Cal.com (formerly Calendso) is the most popular Calendly open-source alternative. Next.js, multi-calendar, timezones, team scheduling, Stripe paid bookings. Self-host is free with custom domain.",
      bestFor: ["Consulting bookings", "Demo call scheduling", "Paid consultation slots"],
      pricingDetail:
        "Self-host: $0. Cloud Teams: $12/user/mo. vs Calendly $12/mo, Calendly Teams $20/user.",
      alternatives: [
        { name: "Calendly", pricing: "$12+/mo", when: "No self-host, maximum brand trust" },
        { name: "TidyCal", pricing: "$29 lifetime", when: "One-time pay, good enough features" },
        { name: "BookPulse", pricing: "$9.9/mo", when: "Minimal indie booking page" },
      ],
      pros: ["Fully open-source", "Stripe paid bookings", "White-label/custom domain", "Team scheduling"],
      cons: ["Self-host maintenance", "Google Calendar sync occasional issues", "Mobile UI average"],
      setupTips: [
        "git clone calcom/cal.com",
        "cp .env.example .env — set DATABASE_URL",
        "yarn && yarn build && yarn start",
        "Connect Google Calendar OAuth",
      ],
      verdict: "Default indie consulting/sales booking. Self-host $0 replaces Calendly $144/yr.",
    },
  },
  ghost: {
    tagline: "Open-source Substack / Medium alternative — professional publishing + memberships",
    preview:
      "Substack takes 10% revenue. Ghost self-host = 0% cut, SEO-first, built-in membership subscriptions — indie blog/newsletter standard.",
    review: {
      summary:
        "Ghost is a professional open-source CMS built for publishing and memberships. Built-in Stripe subscriptions, SEO, newsletter, AMP. Self-host is free with Node.js + MySQL.",
      bestFor: ["Indie blog", "Paid newsletter", "Creator memberships"],
      pricingDetail:
        "Self-host: $0 (~$5–10 VPS). Ghost(Pro) hosted: $9/mo. vs Substack 10% cut, Medium Partner Program unstable.",
      alternatives: [
        { name: "Substack", pricing: "10% revenue cut", when: "Built-in reader discovery network" },
        { name: "WordPress", pricing: "Free self-host", when: "Plugin ecosystem, not newsletter-first" },
        { name: "Hashnode", pricing: "Free", when: "Pure dev blog, no membership" },
      ],
      pros: ["0% platform cut", "SEO-first architecture", "Built-in Stripe membership", "Markdown + editor"],
      cons: ["Self-host needs Node.js ops", "Smaller theme ecosystem than WordPress", "No built-in reader network"],
      setupTips: [
        "ghost install local --db=sqlite (dev)",
        "Production: Docker ghost:latest + MySQL",
        "Settings → Integrations → Stripe",
        "Configure custom domain + SSL",
      ],
      verdict: "Default indie content creator stack. Self-host keeps 100% revenue, SEO beats Substack.",
    },
  },
  n8n: {
    tagline: "Open-source Zapier / Make alternative — self-hosted workflow automation",
    preview:
      "Zapier $29.99+/mo by task count. n8n self-host = unlimited workflows, 400+ integrations — indie automation standard.",
    review: {
      summary:
        "n8n is the most powerful Zapier open-source alternative. Visual workflow editor, 400+ integrations (Stripe, Slack, GitHub, OpenAI), custom Code nodes. Community Edition self-host is free with unlimited executions.",
      bestFor: ["SaaS automation", "Webhook orchestration", "AI workflows"],
      pricingDetail:
        "Community self-host: $0 unlimited executions. Cloud Starter: $24/mo 2500 executions. vs Zapier $29.99/mo 750 tasks.",
      alternatives: [
        { name: "Zapier", pricing: "$29.99+/mo", when: "Non-technical users, max integrations" },
        { name: "Make (Integromat)", pricing: "$10.59+/mo", when: "Complex visual workflows" },
        { name: "Activepieces", pricing: "Free self-host", when: "Lighter, newer project" },
      ],
      pros: ["Unlimited self-host executions", "400+ integrations", "Code nodes (JS/Python)", "AI Agent nodes"],
      cons: ["Self-host maintenance", "Medium learning curve", "UI less polished than Zapier"],
      setupTips: [
        "docker run -it --rm n8nio/n8n",
        "Set N8N_ENCRYPTION_KEY + WEBHOOK_URL",
        "Settings → Credentials: connect Stripe/GitHub",
        "Export workflow JSON for backup",
      ],
      verdict: "Default indie SaaS automation. Self-host $0 replaces Zapier $360+/yr.",
    },
  },
  authentik: {
    tagline: "Open-source Auth0 / Okta alternative — identity + SSO",
    preview:
      "Auth0 free 7K MAU then $23/mo. Authentik self-host = unlimited users, OAuth/SAML/MFA — data-sovereign auth.",
    review: {
      summary:
        "Authentik is a modern open-source IdP. OAuth2, OIDC, SAML, LDAP, MFA, Social Login. Self-host is free — ideal for indie SaaS needing SSO or unified multi-app auth.",
      bestFor: ["Multi-app SSO", "Self-hosted auth", "B2B SAML needs"],
      pricingDetail:
        "Community self-host: $0 unlimited users. Enterprise: contact sales. vs Auth0 $23+/mo 1000 MAU, Clerk $25/mo.",
      alternatives: [
        { name: "Auth0", pricing: "$23+/mo", when: "No ops, maximum ecosystem" },
        { name: "Clerk", pricing: "Free 10K MAU", when: "Next.js embedded UI priority" },
        { name: "Keycloak", pricing: "Free self-host", when: "Enterprise Java ecosystem" },
      ],
      pros: ["Unlimited self-host users", "OAuth + SAML + LDAP", "Modern UI/admin", "Custom auth Flows"],
      cons: ["Self-host ops complexity", "Docs less than Auth0", "Overkill for tiny projects"],
      setupTips: [
        "docker compose -f docker-compose.yml up (official)",
        "Admin → Applications → create OAuth Provider",
        "Configure Outpost for Proxy auth",
        "Integrate Next.js via OIDC",
      ],
      verdict: "Default for indie SaaS needing SSO/data sovereignty. Self-host $0 replaces Auth0 $276+/yr.",
    },
  },
};

export function localizeToolFields<T extends { id: string; tagline: string; preview: string; review: ToolReview }>(
  tool: T,
  locale: Locale
): T {
  if (locale === "zh") return tool;
  const en = toolsLocaleEn[tool.id];
  if (!en) return tool;
  return { ...tool, tagline: en.tagline, preview: en.preview, review: en.review };
}
