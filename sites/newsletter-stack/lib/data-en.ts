import type { ComparisonDetail } from "./data";

type ToolEnOverlay = {
  categoryKey: "creator" | "growth" | "automation" | "legacy" | "minimal" | "blog";
  preview: string;
  freeTier: string;
  comparison: ComparisonDetail;
};

export const toolsEn: Record<string, ToolEnOverlay> = {
  substack: {
    categoryKey: "creator",
    preview: "10% platform cut, $0 monthly. Built-in discovery network for new writers",
    freeTier: "Free to publish, 10% on paid subs",
    comparison: {
      summary:
        "Substack is the largest newsletter creator platform in 2026. Zero monthly fee but 10% platform cut — at $1K MRR you pay $100/mo, more than Kit at $29. Best for writers starting from zero who rely on platform discovery.",
      lastUpdated: "2026-06-24",
      pricingModel: "Platform cut + optional Pro monthly",
      transactionFee: "10% on paid subs + Stripe 2.9%+$0.30",
      migrationDifficulty: "medium",
      bestFor: ["Writers starting from scratch", "Creators relying on discovery", "Beginners avoiding monthly fees"],
      pros: [
        "No monthly fee — pay on revenue",
        "Built-in reader discovery (Recommendations)",
        "Minimal writing UX, live in 5 minutes",
        "Notes social feature drives extra traffic",
      ],
      cons: [
        "10% cut exceeds monthly tools at $1K+ MRR",
        "Limited data export, costly to leave",
        "Weak branding (xxx.substack.com)",
        "No custom email templates",
      ],
      pricingHistory: [
        { date: "2024-01", change: "Pro plan raised from $7/mo to $50/mo" },
        { date: "2025-06", change: "Notes opened to all users" },
        { date: "2026-03", change: "Recommendation algo update — small accounts -30% reach" },
      ],
      featureMatrix: [
        { feature: "Custom domain", value: "Pro $50/mo", note: "Free tier is substack.com subdomain only" },
        { feature: "Automations", value: "Basic", note: "Welcome email only, no complex sequences" },
        { feature: "Paywall", value: "✓ Built-in", note: "Stripe integrated, 10% cut" },
        { feature: "API access", value: "Limited", note: "No public API" },
        { feature: "Analytics", value: "Basic free / Advanced Pro", note: "Open rates, subscriber growth" },
        { feature: "RSS", value: "✓", note: "Public RSS feed" },
      ],
      competitorNotes: [
        "Beehiiv cheaper for creators with existing audience",
        "Kit stronger automations for course/product launches",
        "Ghost better for blog + newsletter combo",
      ],
      migrationTips: [
        "Export subscriber CSV (Settings → Import/Export)",
        "Paid subs require manual Stripe migration",
        "Notify subscribers 2 weeks before switching",
        "Keep Substack for discovery, move main newsletter elsewhere",
      ],
      affiliateOffer: "Substack referral program — $50 per referral",
    },
  },
  beehiiv: {
    categoryKey: "growth",
    preview: "Ad Network + referral network, $0 start. Indie hackers' 2026 favorite",
    freeTier: "2,500 subscribers free",
    comparison: {
      summary:
        "Beehiiv is the fastest-growing newsletter platform in 2026. Ad Network and open referral network are unique. Free 2,500 subs beats Kit. Scale at $49/mo includes ads — top Substack migration target on Indie Hackers.",
      lastUpdated: "2026-06-24",
      pricingModel: "Tiered monthly by subscriber count",
      transactionFee: "0% platform cut, Stripe 2.9%+$0.30 only",
      migrationDifficulty: "easy",
      bestFor: ["Substack migrants", "Newsletters monetizing via ads", "Growth-focused indie hackers"],
      pros: [
        "2,500 free subs — more generous than Kit",
        "Ad Network matches sponsors to creators",
        "Referral network drives organic growth",
        "One-click Substack import",
      ],
      cons: [
        "Lower brand awareness than Substack",
        "Writing UX less minimal than Substack",
        "Ad Network needs volume to fill inventory",
        "Max plan $99/mo is pricey",
      ],
      pricingHistory: [
        { date: "2025-03", change: "Launch free tier raised from 1K to 2,500 subs" },
        { date: "2025-09", change: "Scale plan $39→$49/mo" },
        { date: "2026-01", change: "Ad Network opened to all Scale users" },
      ],
      featureMatrix: [
        { feature: "Custom domain", value: "✓ Free", note: "Included on Launch" },
        { feature: "Automations", value: "Scale+", note: "Welcome sequences, drips" },
        { feature: "Paywall", value: "✓", note: "Stripe, 0% platform cut" },
        { feature: "Ad Network", value: "Scale+", note: "Platform-matched sponsor ads" },
        { feature: "A/B testing", value: "Scale+", note: "Subject lines, send times" },
        { feature: "API access", value: "Max", note: "REST API" },
      ],
      competitorNotes: [
        "Cheaper than Substack at $500+ MRR",
        "Kit stronger automations, no Ad Network",
        "Buttondown more minimal, fewer features",
      ],
      migrationTips: [
        "Use Beehiiv one-click Substack migration",
        "Verify custom domain DNS after import",
        "Send 2-3 test issues before announcing switch",
        "Keep Substack 3 months as transition",
      ],
      affiliateOffer: "20% first-year commission on referrals",
    },
  },
  convertkit: {
    categoryKey: "automation",
    preview: "Creator marketing automation leader, from $29/mo. Essential for launches",
    freeTier: "10,000 subscribers free (1 automation limit)",
    comparison: {
      summary:
        "Kit (formerly ConvertKit) is the automation benchmark for creators. Free tier expanded to 10K subs but limited to 1 automation. Best for selling digital products — weaker for pure writing newsletters.",
      lastUpdated: "2026-06-24",
      pricingModel: "Tiered monthly by subscriber count",
      transactionFee: "0% platform cut, Commerce 3.5%",
      migrationDifficulty: "easy",
      bestFor: ["Course & digital product sellers", "Complex email marketing", "Indie hackers with existing products"],
      pros: [
        "Best-in-class visual automation builder",
        "Extremely flexible tagging",
        "Commerce for digital products",
        "10,000 subscriber free tier",
      ],
      cons: [
        "Writing UX weaker than Substack/Beehiiv",
        "No built-in discovery network",
        "Creator $29/mo only covers 1K subs",
        "Email templates look dated",
      ],
      pricingHistory: [
        { date: "2024-10", change: "Rebranded from ConvertKit to Kit" },
        { date: "2025-01", change: "Free tier expanded to 10K subscribers" },
        { date: "2026-02", change: "Creator Pro adds AI writing assistant" },
      ],
      featureMatrix: [
        { feature: "Custom domain", value: "✓", note: "All plans" },
        { feature: "Automations", value: "1 free / unlimited paid", note: "Visual builder" },
        { feature: "Paywall", value: "Commerce", note: "Sell digital products, 3.5% cut" },
        { feature: "Landing pages", value: "✓", note: "Built-in page builder" },
        { feature: "A/B testing", value: "Creator Pro", note: "Subject line tests" },
        { feature: "API access", value: "✓", note: "V3 + V4 API" },
      ],
      competitorNotes: [
        "Mailchimp more features but overkill for newsletters",
        "Beehiiv stronger growth, Kit stronger automations",
        "ActiveCampaign enterprise-grade, $29/mo for 1K contacts",
      ],
      migrationTips: [
        "CSV import + tag mapping",
        "Use Kit migration wizard to rebuild automations",
        "Reconfigure Commerce Stripe products",
        "Test automation triggers before switching domain",
      ],
      affiliateOffer: "Kit affiliate — 30% recurring for 12 months",
    },
  },
  mailchimp: {
    categoryKey: "legacy",
    preview: "Legacy email marketing, 500 free contacts. Full-featured but heavy for newsletters",
    freeTier: "500 contacts + 1,000 sends/mo",
    comparison: {
      summary:
        "Mailchimp is the legacy giant — increasingly hostile to small creators. Free tier cut from 2K to 500 contacts. Full CRM/ads/ecommerce stack is overkill for indie newsletters.",
      lastUpdated: "2026-06-24",
      pricingModel: "Tiered monthly by contact count",
      transactionFee: "2% on Mailchimp Commerce transactions",
      migrationDifficulty: "medium",
      bestFor: ["Ecommerce + email combo", "Small businesses needing CRM", "Existing Mailchimp users"],
      pros: [
        "Most comprehensive feature set",
        "Rich template library",
        "High brand recognition",
        "Deep Shopify/WooCommerce integration",
      ],
      cons: [
        "Free tier only 500 contacts (cut from 2K in 2024)",
        "Complex UI, steep learning curve",
        "Overkill for pure newsletter creators",
        "Price scales fast with contacts",
      ],
      pricingHistory: [
        { date: "2024-05", change: "Free tier cut from 2,000 to 500 contacts" },
        { date: "2025-08", change: "Essentials $11→$13/mo" },
        { date: "2026-01", change: "AI content generator on all plans" },
      ],
      featureMatrix: [
        { feature: "Custom domain", value: "Paid plans", note: "Connect your domain" },
        { feature: "Automations", value: "Standard+", note: "Customer journey builder" },
        { feature: "Paywall", value: "Commerce", note: "Requires Mailchimp Commerce" },
        { feature: "CRM", value: "✓", note: "Built-in marketing CRM" },
        { feature: "A/B testing", value: "Essentials+", note: "Subject, content, send time" },
        { feature: "API access", value: "✓", note: "Marketing API v3" },
      ],
      competitorNotes: [
        "Kit more creator-friendly with clearer automations",
        "Beehiiv newsletter-focused without CRM baggage",
        "Brevo cheaper with 300 emails/day free",
      ],
      migrationTips: [
        "Export contacts CSV (Audience → Export)",
        "Tags and segments must be rebuilt manually",
        "Automations can't export — screenshot and rebuild",
        "Migrate to Kit or Beehiiv, not another Mailchimp account",
      ],
      affiliateOffer: "Mailchimp partner program — up to $120 per referral",
    },
  },
  buttondown: {
    categoryKey: "minimal",
    preview: "Minimalist newsletter tool, $9/mo. Markdown-native, developer-friendly",
    freeTier: "100 subscribers free",
    comparison: {
      summary:
        "Buttondown is the anti-bloat newsletter tool — Markdown writing, clean API, $9/mo flat. Perfect for developers and technical writers who don't need automations or growth hacks.",
      lastUpdated: "2026-06-24",
      pricingModel: "Flat monthly by subscriber tier",
      transactionFee: "0% platform cut, Stripe only",
      migrationDifficulty: "easy",
      bestFor: ["Developer newsletters", "Technical writers", "Minimalists who hate feature bloat"],
      pros: [
        "Markdown-native writing",
        "Clean REST API",
        "$9/mo flat — predictable pricing",
        "No ads, no discovery network noise",
      ],
      cons: [
        "Only 100 free subscribers",
        "No automations or funnels",
        "No built-in monetization",
        "Basic analytics",
      ],
      pricingHistory: [
        { date: "2025-04", change: "Basic plan $7→$9/mo" },
        { date: "2025-11", change: "Added paid subscriptions via Stripe" },
        { date: "2026-02", change: "RSS-to-email automation beta" },
      ],
      featureMatrix: [
        { feature: "Custom domain", value: "✓", note: "All plans" },
        { feature: "Automations", value: "✗", note: "No drip sequences" },
        { feature: "Paywall", value: "Basic", note: "Stripe paid subs" },
        { feature: "API access", value: "✓", note: "Full REST API" },
        { feature: "Markdown", value: "✓", note: "Native Markdown editor" },
        { feature: "Analytics", value: "Basic", note: "Opens and clicks only" },
      ],
      competitorNotes: [
        "Substack better for discovery, Buttondown for control",
        "Kit for automations, Buttondown for simplicity",
        "Ghost if you also need a blog",
      ],
      migrationTips: [
        "Import subscribers via CSV",
        "Set up custom domain DNS",
        "Use API to automate archive imports",
        "Notify readers of new sending address",
      ],
      affiliateOffer: "Buttondown referral — 1 month free per referral",
    },
  },
  ghost: {
    categoryKey: "blog",
    preview: "Blog + newsletter CMS, $9/mo hosted. SEO-first, self-host option",
    freeTier: "14-day trial",
    comparison: {
      summary:
        "Ghost is a professional publishing CMS — blog SEO + newsletter in one. Self-host for ~$8/mo or Ghost(Pro) at $9/mo. Best for creators who want owned content, not platform lock-in.",
      lastUpdated: "2026-06-24",
      pricingModel: "Flat monthly (hosted) or self-host + VPS",
      transactionFee: "0% platform cut, Stripe 2.9%+$0.30",
      migrationDifficulty: "medium",
      bestFor: ["Blog + newsletter combo", "SEO-focused creators", "Self-hosters who want data ownership"],
      pros: [
        "Best-in-class blog SEO",
        "Newsletter + blog unified",
        "Self-host option (~$8/mo total)",
        "Open source, no vendor lock-in",
      ],
      cons: [
        "No discovery network",
        "Steeper setup than Substack",
        "Fewer growth tools than Beehiiv",
        "Themes require some HTML/CSS",
      ],
      pricingHistory: [
        { date: "2025-02", change: "Starter plan $9/mo for 500 members" },
        { date: "2025-10", change: "Ghost 6.0 — improved editor" },
        { date: "2026-04", change: "Built-in recommendations feature" },
      ],
      featureMatrix: [
        { feature: "Custom domain", value: "✓", note: "All plans" },
        { feature: "Blog SEO", value: "✓ Excellent", note: "Built-in SEO, sitemap, schema" },
        { feature: "Paywall", value: "✓", note: "Membership tiers via Stripe" },
        { feature: "Automations", value: "Basic", note: "Welcome emails only" },
        { feature: "Self-host", value: "✓", note: "Open source on GitHub" },
        { feature: "API access", value: "✓", note: "Content API + Admin API" },
      ],
      competitorNotes: [
        "Substack easier start, Ghost better long-term ownership",
        "WordPress + Mailchimp more flexible but complex",
        "Beehiiv better growth tools, Ghost better content SEO",
      ],
      migrationTips: [
        "Import posts and subscribers via Ghost migration tools",
        "Set up Stripe for memberships",
        "Configure DNS for custom domain",
        "301 redirect old blog URLs for SEO",
      ],
      affiliateOffer: "Ghost referral — 20% recurring commission",
    },
  },
};
