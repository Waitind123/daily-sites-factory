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
  polar: {
    tagline: "Developer-first Merchant of Record — SaaS billing + tax compliance",
    preview:
      "Collect global subscriptions without a company. Polar handles VAT/sales tax as MoR — better than raw Stripe for solo SaaS.",
    review: {
      summary:
        "Polar is the hottest payment stack for indie hackers in 2024–2026. As Merchant of Record it handles global tax — essential for builders without a US entity.",
      bestFor: ["First USD SaaS", "Subscriptions + usage billing", "Skip VAT headaches"],
      pricingDetail:
        "4% + $0.40/tx, no monthly fee. Looks pricier than Stripe 2.9%+$0.30, but MoR tax handling alone costs $99+/mo elsewhere.",
      alternatives: [
        { name: "Stripe", pricing: "2.9%+$0.30", when: "US company, handle tax yourself" },
        { name: "Lemon Squeezy", pricing: "5%+$0.50", when: "Hosted storefront + affiliates" },
        { name: "Paddle", pricing: "5%+$0.50", when: "Enterprise MoR" },
      ],
      pros: ["MoR tax out of the box", "Great TypeScript SDK", "Usage-based billing", "Clean dashboard"],
      cons: ["Higher fee than bare Stripe", "Younger ecosystem", "Some payout country limits"],
      setupTips: [
        "Create Organization on polar.sh",
        "npm install @polar-sh/sdk",
        "Create Product + Price, embed Checkout Link",
        "Configure webhook to /api/webhooks/polar",
      ],
      verdict: "2026 indie SaaS payments default. No US company? Polar beats Stripe by 10 pitfalls.",
    },
  },
  resend: {
    tagline: "Developer-friendly transactional email API with React Email templates",
    preview:
      "Skip SendGrid config hell. Send mail in 3 lines, write templates in React — indie SaaS email standard.",
    review: {
      summary:
        "Built by ex-Vercel folks for developers. Onboarding in 5 minutes vs SendGrid/Mailgun. React Email fits Next.js perfectly.",
      bestFor: ["SaaS transactional mail", "Next.js projects", "Cold-start deliverability"],
      pricingDetail: "Free 3K/mo + 100/day. Pro $20/mo for 50K. Beats Loops ($49+) for early stage.",
      alternatives: [
        { name: "Loops", pricing: "$49+/mo", when: "Marketing + product email combined" },
        { name: "Postmark", pricing: "$15/mo 10K", when: "Pure transactional, max deliverability" },
        { name: "Amazon SES", pricing: "$0.10/1K", when: "High volume, DIY DNS" },
      ],
      pros: ["Minimal API", "React Email ecosystem", "Generous free tier", "Vercel integration"],
      cons: ["Weak marketing automation", "No complex workflows", "Occasional CN latency"],
      setupTips: [
        "Sign up at resend.com → add domain → SPF/DKIM",
        "npm install resend",
        "Write WelcomeEmail.tsx with React Email",
        "Test via dev /api/send route first",
      ],
      verdict: "Default transactional email for indie SaaS. Free tier validates MVP; deliverability beats DIY SMTP.",
    },
  },
  vercel: {
    tagline: "One-click Next.js deploy, global CDN, preview environments",
    preview:
      "levelsio-style ship infrastructure. git push → live URL, auto HTTPS, preview per branch.",
    review: {
      summary:
        "The de facto deploy target for indie Next.js. Hobby free tier covers most MVPs; Pro $20/mo for teams and bandwidth.",
      bestFor: ["Next.js / React", "Fast iteration", "Show HN same-day launch"],
      pricingDetail:
        "Hobby free (personal). Pro $20/mo/member. Best frontend value vs Railway/Fly for typical indie apps.",
      alternatives: [
        { name: "Cloudflare Pages", pricing: "Free", when: "Static + Workers, cost-sensitive" },
        { name: "Railway", pricing: "$5+/mo", when: "Persistent backend/DB" },
        { name: "Netlify", pricing: "Free/Pro $19", when: "Non-Next Jamstack" },
      ],
      pros: ["Git push deploy", "Global Edge CDN", "Preview per branch", "Built-in Analytics"],
      cons: ["Serverless cold starts", "Cost spikes at scale", "Vendor lock-in risk"],
      setupTips: [
        "Connect GitHub repo",
        "Configure rewrites in vercel.json",
        "Set env vars in Dashboard",
        "CNAME custom domain to cname.vercel-dns.com",
      ],
      verdict: "Ship day 1 on Vercel. Fastest path from code to public HTTPS URL.",
    },
  },
  clerk: {
    tagline: "Auth in 5 minutes — social login, MFA, user management",
    preview:
      "Don't roll your own auth. Drop-in UI, OAuth, sessions — one line in Next.js middleware.",
    review: {
      summary:
        "Self-built auth is indie's biggest time sink. Clerk gives UI components, Google/GitHub/magic link — free 10K MAU covers early MRR.",
      bestFor: ["Fast login launch", "Multi-tenant SaaS", "Skip auth security maintenance"],
      pricingDetail: "Free 10K MAU. Pro $25/mo + $0.02/MAU over. Beats Auth0 for indie DX.",
      alternatives: [
        { name: "Supabase Auth", pricing: "Free", when: "Already on Supabase, build UI yourself" },
        { name: "NextAuth.js", pricing: "Free", when: "Full control, willing to maintain" },
        { name: "Lucia", pricing: "Free", when: "Lightweight, no UI kit" },
      ],
      pros: ["5-min Next.js integration", "Polished login UI", "Generous free tier", "B2B orgs built-in"],
      cons: ["Cost grows past free tier", "UI customization limits", "Occasional CN slowness"],
      setupTips: [
        "Create Application on clerk.com",
        "npm install @clerk/nextjs",
        "Configure middleware.ts routes",
        "Use <SignIn /> and <UserButton />",
      ],
      verdict: "Don't write auth for MVP. Clerk saves 2 weeks — enough to ship 3 products.",
    },
  },
  plausible: {
    tagline: "Privacy-friendly, lightweight, cookieless analytics",
    preview:
      "GA4 is heavy and invasive. One script, clean dashboard, GDPR-friendly for landing pages.",
    review: {
      summary:
        "Indie landing pages don't need GA4 complexity. Core metrics only, <1KB script, no cookie banner required in EU.",
      bestFor: ["Landing page analytics", "Privacy-sensitive products", "Simple dashboard"],
      pricingDetail: "$9/mo for 10K pageviews. Self-host CE free. Beats Fathom ($14/mo) on value.",
      alternatives: [
        { name: "Fathom", pricing: "$14/mo", when: "Similar product, US company" },
        { name: "Umami", pricing: "Free self-host", when: "Full control" },
        { name: "Vercel Analytics", pricing: "Pro built-in", when: "Already on Vercel Pro" },
      ],
      pros: ["5-second dashboard", "No cookies / GDPR easy", "Ultra-light script", "Public stats option"],
      cons: ["Limited funnels without Goals", "Fewer features than GA4", "Dashboard blocked in CN"],
      setupTips: [
        "Register at plausible.io → add domain",
        "Add script tag in layout.tsx",
        "Set Goals for /join conversions",
        "Optional: share public stats link",
      ],
      verdict: "Default landing analytics. $9/mo beats hours configuring free GA4.",
    },
  },
  supabase: {
    tagline: "Open-source Firebase alt — Postgres + Auth + Storage + Realtime",
    preview:
      "One-person full stack backend. Postgres + auto API + storage — free tier for MVP, Pro $25/mo for prod.",
    review: {
      summary:
        "Skip pick-DB → write-API → auth → deploy. One Postgres + generated API + dashboard — backend in a weekend.",
      bestFor: ["Full-stack indie SaaS", "Relational data", "Fast MVP backend"],
      pricingDetail: "Free: 500MB DB, 1GB storage, 50K auth MAU. Pro $25/mo: 8GB, no pause.",
      alternatives: [
        { name: "PlanetScale", pricing: "$29+/mo", when: "MySQL, branch DB" },
        { name: "Turso", pricing: "Free/Pro $29", when: "Edge SQLite" },
        { name: "Neon", pricing: "Free/Pro $19", when: "Serverless Postgres" },
      ],
      pros: ["Full Postgres", "Visual dashboard", "Row Level Security", "Edge Functions"],
      cons: ["Free projects pause after 7d idle", "Complex queries need tuning", "Moderate lock-in"],
      setupTips: [
        "Create Project on supabase.com",
        "npm install @supabase/supabase-js",
        "Set SUPABASE_URL + ANON_KEY in .env.local",
        "Create tables + RLS in SQL Editor",
      ],
      verdict: "2026 indie full-stack default. Free validates; Pro $25/mo scales to $5K MRR.",
    },
  },
  "lemon-squeezy": {
    tagline: "Hosted checkout + MoR for digital products and subscriptions",
    preview:
      "More storefront than Polar. Hosted checkout, affiliates, discount codes — templates/courses/digital goods.",
    review: {
      summary:
        "Acquired by Stripe — more stable. Full digital store: hosted checkout, tax, affiliates, license keys. Better for non-pure-SaaS goods.",
      bestFor: ["Digital products/templates", "Affiliate marketing", "Zero-code hosted checkout"],
      pricingDetail: "5% + $0.50/tx, no monthly fee, MoR included. Beats Gumroad (10%) for features.",
      alternatives: [
        { name: "Polar", pricing: "4%+$0.40", when: "Pure SaaS API integration" },
        { name: "Gumroad", pricing: "10%", when: "Minimal, existing audience" },
        { name: "Stripe", pricing: "2.9%+$0.30", when: "Company + self-serve tax" },
      ],
      pros: ["Zero-code checkout", "Built-in affiliates", "License key management", "Stripe-backed"],
      cons: ["Slightly higher fee than Polar", "Less flexible API", "Limited checkout customization"],
      setupTips: [
        "Register at lemonsqueezy.com → create Store",
        "Create Product + Variant",
        "Embed Checkout Overlay or Link",
        "Webhook for license delivery",
      ],
      verdict: "Best for digital products (templates, courses). SaaS subscriptions → Polar.",
    },
  },
  posthog: {
    tagline: "Open-source product analytics + Feature Flags + Session Replay",
    preview:
      "10× GA4 for product analytics. Events, funnels, A/B tests, flags — free 1M events/mo for indie SaaS.",
    review: {
      summary:
        "Swiss army knife for indie SaaS analytics. Track events, funnels, A/B tests, feature flags — free 1M events/mo is generous.",
      bestFor: ["SaaS product analytics", "Feature flags", "Session replay"],
      pricingDetail: "Free 1M events/mo. Then $0.00005/event. Crushes Mixpanel ($28/mo) at early stage.",
      alternatives: [
        { name: "Mixpanel", pricing: "$28+/mo", when: "Mature product, complex funnels" },
        { name: "Plausible", pricing: "$9/mo", when: "Landing page PV only" },
        { name: "Umami", pricing: "Free", when: "Minimal pageviews" },
      ],
      pros: ["Generous free tier", "Feature flags included", "Session replay", "Self-host OSS"],
      cons: ["Steeper learning curve", "Heavier script than Plausible", "Slow in CN"],
      setupTips: [
        "Register at posthog.com → create Project",
        "npm install posthog-js",
        "Init in app/providers.tsx",
        "Track signup, checkout, feature_use events",
      ],
      verdict: "Default SaaS analytics. Free tier 0→$5K MRR; flags replace LaunchDarkly $10/mo.",
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
