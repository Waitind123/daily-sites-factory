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

/** English display fields keyed by tool id */
export const toolsLocaleEn: Record<string, ToolLocaleFields> = {
  "feedback-glow": {
    tagline: "Canny alternative — feature voting + public roadmap with pay-once option",
    preview:
      "Canny $79/mo too much? Feedback Glow offers feature requests, public roadmap, changelog — with a one-time purchase option for indie teams.",
    review: {
      summary:
        "Lightweight Canny alternative from HN Show HN 2024. Collect feature requests, bug reports, public roadmap — users vote without login. Highlight: one-time payment option vs Canny's $79/mo bill.",
      bestFor: ["Indie product feedback", "Escaping Canny $79/mo", "Public roadmap needed"],
      pricingDetail:
        "$19/mo or $99 one-time purchase. vs Canny Launch $79/mo, ProductBoard $25+/mo — 10x more indie-budget friendly.",
      alternatives: [
        { name: "Canny", pricing: "$79/mo+", when: "Enterprise, CRM integrations" },
        { name: "Featurebase", pricing: "$49/mo+", when: "Changelog + help center bundle" },
        { name: "GitHub Issues", pricing: "Free", when: "Dev-only product, dev users" },
      ],
      pros: ["One-time purchase option", "Public roadmap + changelog", "Vote without login", "Custom branding"],
      cons: ["Fewer features than Canny", "No native Intercom integration", "Smaller community"],
      setupTips: [
        "Register at feedbackglow.com",
        "Create Board, embed widget on landing page",
        "Configure public roadmap URL",
        "Choose one-time payment plan to lock price",
      ],
      verdict: "Indie product feedback default. $99 once vs Canny $948/yr — save $849 year one.",
    },
  },
  kanba: {
    tagline: "Open-source Trello alternative — MIT license, self-hosted, your data",
    preview:
      "Trello bloated? Kanba is a lightweight kanban board, React + Supabase, MIT open source, fully self-hosted.",
    review: {
      summary:
        "Self-hosted PM tool from HN Show HN 2025. Trello open-source alternative — data in your own Supabase, no vendor lock-in. For teams tired of Asana/Trello at $10+/seat/mo.",
      bestFor: ["Solo founder task management", "Data sovereignty", "Already on Supabase stack"],
      pricingDetail:
        "Free self-hosted. vs Trello Standard $5/user/mo, Asana $10.99/user/mo — save $300–660/yr for 5-person team.",
      alternatives: [
        { name: "Trello", pricing: "$5/user/mo", when: "Don't want to self-host, need Power-Ups" },
        { name: "Plane", pricing: "Free self-hosted", when: "Need sprints + cycle planning" },
        { name: "Notion", pricing: "$8/user/mo", when: "Docs + PM in one" },
      ],
      pros: ["MIT open source", "Lightweight UI", "Supabase backend", "Zero monthly fee"],
      cons: ["Self-host maintenance", "Fewer features than Trello", "Mobile UX average"],
      setupTips: [
        "git clone Kanba repo",
        "Create Supabase project, configure .env",
        "npm install && npm run build",
        "Deploy to Vercel or own VPS",
      ],
      verdict: "Lowest-cost self-hosted PM. Enough for solo teams, data always yours.",
    },
  },
  formbricks: {
    tagline: "Open-source Typeform alternative — unlimited forms, self-hosted, MIT",
    preview:
      "Typeform free tier only 10 responses/mo? Formbricks is open-source forms + in-app surveys, self-hosted unlimited responses.",
    review: {
      summary:
        "German team's open-source Typeform alternative, YC-backed. Not just forms — in-app pop-up surveys, NPS, feature priority voting. Self-hosted completely free, cloud from $49/mo.",
      bestFor: ["MVP user research", "Escaping Typeform 10-response cap", "In-app surveys"],
      pricingDetail:
        "Self-hosted free unlimited forms. vs Typeform Basic $25/mo 100 responses — save $300–600/yr.",
      alternatives: [
        { name: "Typeform", pricing: "$25/mo+", when: "Beautiful UI, don't want to self-host" },
        { name: "Tally", pricing: "Free unlimited", when: "Simple forms, accept tally.so domain" },
        { name: "form-pulse", pricing: "$29/mo", when: "Drop-off analysis + embed widget" },
      ],
      pros: ["Open source self-hostable", "In-app survey widget", "Unlimited responses", "GDPR friendly"],
      cons: ["Self-host maintenance", "UI less polished than Typeform", "Advanced analytics on paid cloud"],
      setupTips: [
        "docker compose up one-click deploy",
        "Or register cloud trial at formbricks.com",
        "Create Survey, embed script on landing page",
        "Configure webhook to Notion/Slack",
      ],
      verdict: "Best open-source form research for indie. Self-host = permanently free + data sovereignty.",
    },
  },
  umami: {
    tagline: "Open-source Plausible alternative — privacy-friendly analytics, one-click self-host",
    preview:
      "Mixpanel $500/mo, Plausible $9/mo? Umami is open-source web analytics, self-hosted free, 2KB script, GDPR compliant.",
    review: {
      summary:
        "Most popular open-source web analytics, 20K+ GitHub stars. Lightweight script, privacy-first, no cookie banner headaches. Self-hosted free, Umami Cloud $9/mo managed.",
      bestFor: ["Landing page PV/UV tracking", "Privacy compliance", "Escaping Plausible/Mixpanel bills"],
      pricingDetail:
        "Self-hosted $0. vs Plausible $9/mo, Mixpanel Growth $500/mo — zero cost for landing page analytics.",
      alternatives: [
        { name: "Plausible", pricing: "$9/mo+", when: "Don't want to self-host" },
        { name: "PostHog", pricing: "Free 1M events", when: "Product analytics + Feature Flags" },
        { name: "Google Analytics", pricing: "Free", when: "Accept Google tracking" },
      ],
      pros: ["2KB lightweight script", "Open source auditable", "Docker one-click", "Real-time dashboard"],
      cons: ["No funnel analysis", "No Session Replay", "Self-host maintenance"],
      setupTips: [
        "docker run ghcr.io/umami-software/umami",
        "Add website, copy tracking script",
        "Embed in layout.tsx <head>",
        "Optional: custom domain + HTTPS",
      ],
      verdict: "Open-source standard for landing page analytics. 5-minute self-host, permanently free.",
    },
  },
  "invoice-ninja": {
    tagline: "Open-source invoicing — quotes + contracts + invoices + payments, free self-hosted",
    preview:
      "HoneyBook up 89%, Bonsai $25/mo? Invoice Ninja open-source quotes + invoices + online payments, self-hosted free.",
    review: {
      summary:
        "Mature open-source invoicing tool since 2014. Quotes, contracts, invoices, online payments (Stripe/PayPal), client portal. Self-hosted full features free, cloud from $10/mo.",
      bestFor: ["Freelancer quotes & invoicing", "Escaping HoneyBook/Bonsai", "Client self-service portal"],
      pricingDetail:
        "Self-hosted $0 full features. vs Bonsai $25/mo, HoneyBook $39/mo — save $300–468/yr.",
      alternatives: [
        { name: "Bonsai", pricing: "$25/mo+", when: "Contract templates + US tax" },
        { name: "invoice-desk", pricing: "$29/mo", when: "Minimal UI, Chinese localization" },
        { name: "Wave", pricing: "Free", when: "North America SMB, accept ads" },
      ],
      pros: ["10-year open source history", "Stripe/PayPal integration", "Client portal", "Multi-currency"],
      cons: ["Traditional UI", "Complex self-host setup", "Limited Chinese support"],
      setupTips: [
        "Docker deploy or invoiceninja.com cloud",
        "Configure Stripe payments",
        "Create quote templates",
        "Send client portal link for payment",
      ],
      verdict: "Best open-source invoicing for freelancers. Matches $25/mo SaaS at $0 cost.",
    },
  },
  listmonk: {
    tagline: "Open-source newsletter tool — million subscribers, zero monthly fee",
    preview:
      "Mailchimp $20/mo+, ConvertKit $29/mo? Listmonk self-hosted email lists — million subscribers, pay only SMTP.",
    review: {
      summary:
        "High-performance email list tool by Vik, single-binary deploy. Subscriber management, templates, campaigns, analytics. Self-hosted — only pay Amazon SES $0.10/1K emails SMTP.",
      bestFor: ["Indie newsletter sending", "1000+ subscribers saving money", "Have VPS/Docker skills"],
      pricingDetail:
        "Software $0, SMTP ~$1/10K emails. vs ConvertKit $29/mo 1K subs — save $240–348/yr at 10K list.",
      alternatives: [
        { name: "ConvertKit", pricing: "$29/mo+", when: "Don't self-host, need landing pages" },
        { name: "Buttondown", pricing: "$9/mo+", when: "Minimal newsletter, Markdown writing" },
        { name: "Resend", pricing: "Free 3K/mo", when: "Transactional email only" },
      ],
      pros: ["Single binary deploy", "Million-scale performance", "Template API", "Full subscriber ownership"],
      cons: ["SMTP configuration needed", "No drag-drop editor", "Deliverability on you"],
      setupTips: [
        "docker compose deploy listmonk",
        "Configure Amazon SES or Postmark SMTP",
        "Import subscriber CSV",
        "Create template, send first newsletter",
      ],
      verdict: "Ultimate money-saver for large newsletters. Save thousands/yr at 10K+ subscribers.",
    },
  },
  "cal-com": {
    tagline: "Open-source Calendly alternative — free self-hosted, white-label booking",
    preview:
      "Calendly $12/mo with no white-label? Cal.com open-source scheduling, self-hosted free, custom domain and branding.",
    review: {
      summary:
        "30K+ GitHub stars open-source scheduler. Personal/team booking, timezone conversion, Google/Outlook sync, Stripe paid bookings. Self-hosted full features, Cal.com Cloud $12/mo+.",
      bestFor: ["Indie dev consulting bookings", "White-label booking page", "Post-Calendly price hike migration"],
      pricingDetail:
        "Self-hosted $0. vs Calendly Standard $12/mo, Teams $20/mo — save $144–240/yr.",
      alternatives: [
        { name: "Calendly", pricing: "$12/mo+", when: "Don't self-host, want simplest UX" },
        { name: "book-pulse", pricing: "$29/mo", when: "Minimal booking + project showcase" },
        { name: "TidyCal", pricing: "$29 lifetime", when: "Want lifetime deal, accept LTD" },
      ],
      pros: ["Fully open source", "White-label custom", "Stripe payment integration", "Team scheduling"],
      cons: ["Self-host maintenance", "UI less polished than Calendly", "Average mobile UX"],
      setupTips: [
        "Register cal.com or Docker self-host",
        "Connect Google Calendar",
        "Create Event Type, set availability",
        "Embed booking link on landing page",
      ],
      verdict: "Open-source standard for scheduling. Self-host = permanently free + full white-label.",
    },
  },
  "statping-ng": {
    tagline: "Open-source status page + uptime monitoring — replaces Statuspage.io $29/mo",
    preview:
      "Statuspage.io $29/mo, UptimeRobot 4x price hike? Statping-ng self-hosted monitoring + public status page, deploy once, free forever.",
    review: {
      summary:
        "Community-maintained Statping fork, Go single-binary. HTTP/TCP/ICMP monitoring, public status page, incident management, email/Slack alerts. Perfect Statuspage + UptimeRobot combo replacement.",
      bestFor: ["SaaS status page", "Multi-service uptime monitoring", "Escaping Statuspage $29/mo"],
      pricingDetail:
        "Self-hosted $0. vs Statuspage $29/mo + UptimeRobot Pro $7/mo — save $432/yr.",
      alternatives: [
        { name: "uptime-alt", pricing: "$29/mo", when: "Don't self-host, want managed" },
        { name: "Better Stack", pricing: "$20/mo+", when: "Logs + monitoring bundle" },
        { name: "Cachet", pricing: "Free self-hosted", when: "Status page only, no monitoring" },
      ],
      pros: ["Monitoring + status page bundle", "Single binary deploy", "Multi-channel alerts", "Fully open source"],
      cons: ["Technical UI style", "Server maintenance", "No global probe nodes"],
      setupTips: [
        "Docker deploy statping-ng",
        "Add HTTP monitoring endpoints",
        "Configure Slack/email alerts",
        "Publish public status page URL for customers",
      ],
      verdict: "Best self-hosted monitoring + status page for indie SaaS. Save $400+/yr.",
    },
  },
  papermark: {
    tagline: "Open-source DocSend alternative — secure doc sharing + read analytics",
    preview:
      "DocSend $15/mo just to share PDFs? Papermark open-source doc sharing, track who read and how long, self-hosted free.",
    review: {
      summary:
        "Vercel-team-background open-source DocSend alternative. Upload PDFs/decks, secure share links, track read time, downloads, forwards. For founders sending pitch decks to investors.",
      bestFor: ["Sending pitch decks to investors", "Sales proposal tracking", "Escaping DocSend $15/mo"],
      pricingDetail:
        "Self-hosted free. Papermark Cloud free 3 docs, Pro $29/mo. vs DocSend $15/mo — save $180/yr self-hosted.",
      alternatives: [
        { name: "DocSend", pricing: "$15/mo+", when: "Enterprise, CRM integration" },
        { name: "Notion public link", pricing: "Free", when: "No read tracking needed" },
        { name: "Google Drive", pricing: "Free", when: "Internal sharing only" },
      ],
      pros: ["Read duration tracking", "Link password protection", "Open source self-hostable", "Modern UI"],
      cons: ["PDF/deck only", "Self-host needs S3 config", "Cloud free tier 3 docs"],
      setupTips: [
        "Register papermark.com or GitHub self-host",
        "Upload PDF, generate share link",
        "Set password and expiry",
        "Dashboard view read analytics",
      ],
      verdict: "Best open-source tool for founder pitch decks. Know if investors actually read your deck.",
    },
  },
  twenty: {
    tagline: "Open-source Salesforce alternative — modern CRM, free self-hosted",
    preview:
      "HubSpot CRM limited free, Pipedrive $15/mo? Twenty open-source modern CRM, Notion-style UI, self-hosted free.",
    review: {
      summary:
        "YC W24 open-source CRM — 'Salesforce for the 21st century'. Contacts, companies, deals, email integration, modern Notion-like UI. Self-hosted free, Cloud $12/user/mo.",
      bestFor: ["B2B indie SaaS customer management", "Escaping Pipedrive $15/mo", "Modern UI CRM"],
      pricingDetail:
        "Self-hosted $0. vs Pipedrive $15/user/mo, HubSpot Sales Hub $20/mo — save $900–1200/yr for 5-person team.",
      alternatives: [
        { name: "Pipedrive", pricing: "$15/user/mo", when: "Mature sales process, don't self-host" },
        { name: "HubSpot Free", pricing: "Free", when: "Accept HubSpot ecosystem lock-in" },
        { name: "Notion CRM template", pricing: "Free", when: "Minimal needs, already on Notion" },
      ],
      pros: ["Modern Notion-style UI", "Open source extensible", "Email integration", "Solid API"],
      cons: ["Relatively new", "Complex self-host setup", "Advanced automation on Cloud"],
      setupTips: [
        "Register twenty.com or Docker self-host",
        "Import existing contacts CSV",
        "Configure email integration",
        "Create deal Pipeline",
      ],
      verdict: "Modern CRM default for indie B2B SaaS. Self-hosted free, UI crushes legacy CRM.",
    },
  },
  docmost: {
    tagline: "Open-source Notion alternative — team wiki, free self-hosted",
    preview:
      "Notion $8/user/mo, GitBook $65/mo? Docmost open-source collaborative wiki, self-hosted free, real-time collaboration.",
    review: {
      summary:
        "Emerging open-source Notion/Confluence alternative. Rich text, nested pages, team collaboration, permissions. For indie team docs, API docs, product wiki. Docker one-click deploy.",
      bestFor: ["Team internal wiki", "API docs hosting", "Escaping Notion/GitBook bills"],
      pricingDetail:
        "Self-hosted $0. vs Notion Plus $8/user/mo, GitBook $65/mo — save $480–780/yr for 5-person team.",
      alternatives: [
        { name: "Notion", pricing: "$8/user/mo", when: "Need databases + PM in one" },
        { name: "docs-pulse", pricing: "$29/mo", when: "Pure API docs + llms.txt" },
        { name: "Outline", pricing: "Free self-hosted", when: "Mature wiki, have experience" },
      ],
      pros: ["Real-time collaboration", "Docker deploy", "Permission management", "Fully open source"],
      cons: ["Newer ecosystem", "No Notion databases", "Fewer templates"],
      setupTips: [
        "Docker compose deploy Docmost",
        "Create Workspace and first Space",
        "Invite team members",
        "Migrate existing Markdown docs",
      ],
      verdict: "High-value open-source team wiki. Self-host = data sovereignty + zero monthly fee.",
    },
  },
  tidycal: {
    tagline: "Calendly lifetime deal — AppSumo $29 one-time",
    preview:
      "Calendly $12/mo forever? TidyCal AppSumo lifetime deal $29 once, unlimited booking types, for ultra-tight indie budgets.",
    review: {
      summary:
        "AppSumo perennial bestseller Calendly lifetime alternative. $29 one-time, unlimited booking types, calendar integration, custom domain. Less feature-rich than Cal.com but zero maintenance, zero monthly.",
      bestFor: ["Ultra-budget indie", "Don't want to self-host Cal.com", "Simple booking needs"],
      pricingDetail:
        "$29 one-time lifetime. vs Calendly $12/mo — pays back in 3 months, saves $403 over 3 years.",
      alternatives: [
        { name: "Cal.com self-hosted", pricing: "Free", when: "Have tech skills, want full control" },
        { name: "Calendly", pricing: "$12/mo+", when: "Want most mature UX" },
        { name: "Cal.com Cloud", pricing: "$12/mo+", when: "Open source but don't self-host" },
      ],
      pros: ["$29 lifetime purchase", "Zero maintenance", "Calendar integration", "Custom domain"],
      cons: ["Basic features", "AppSumo-style UI", "No team scheduling", "Depends on AppSumo survival"],
      setupTips: [
        "Buy TidyCal LTD $29 on AppSumo",
        "Connect Google Calendar",
        "Create booking types",
        "Share link on landing page",
      ],
      verdict: "Cheapest Calendly alternative. $29 lifetime for indie who don't want to touch servers.",
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
