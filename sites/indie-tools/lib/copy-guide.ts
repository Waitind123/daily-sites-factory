import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Indie Developer Tool Stack Guide — pick your SaaS stack in one hour",
      description:
        "From payments to deploy: how indie hackers pick Polar, Vercel, Resend and more. Keep MVP costs under $50/mo and charge from day 1.",
    },
    h1: "Indie developer tool stack guide: 2026 picks for solo founders",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "The biggest time sink for solo founders isn't bad code — it's spending two weeks comparing tools before writing the first line of business logic. levelsio shipped 12 paid products in 12 weekends using Vercel + Stripe. His secret wasn't picking the \"best\" tool — it was picking \"good enough, live today\" tools.",
      "This guide gives you a decision-tree method to lock your indie SaaS stack in under an hour, keep MVP monthly costs under $50, and design a paywall from day 1.",
      "Reddit r/indiehackers is full of posts like \"I've been researching databases for a week and haven't started coding.\" The failure mode is always the same: over-research, tool-hop every time something trends on Twitter, ignore pricing until MRR is still $0.",
      "The correct principle: mature tools, controlled monthly spend, charge on day 1, ship this weekend.",
    ],
    sections: [
      {
        h2: "Why tool selection is indie trap #1",
        paragraphs: ["Common failure patterns:"],
        list: [
          "Over-research — compare 20 tools, read every G2 review",
          "Chasing hype — Turso today, Neon tomorrow",
          "Ignoring cost — $99/mo tools while MRR is $0",
          "Over-building — custom auth, DIY SMTP, microservices for an MVP",
        ],
        after: [
          "Better Launch's 2026 survey of bootstrapped founders puts a sustainable indie SaaS bill at $200–600/mo. Before first revenue, stay under $50/mo using free tiers.",
        ],
      },
      {
        h2: "The 2026 default indie SaaS stack (under $50/mo)",
        tools: [
          {
            h3: "Frontend + deploy: Next.js + Vercel",
            p: "Next.js 15 + TypeScript + Tailwind is the indie frontend default. Vercel Hobby free tier covers MVPs; Pro $20/mo for bandwidth. git push → HTTPS URL same day you want to Show HN.",
          },
          {
            h3: "Payments: Polar (no company) or Stripe (US entity)",
            p: "No overseas company? Polar as Merchant of Record handles global tax at 4%+$0.40/tx. US company? Raw Stripe at 2.9%+$0.30. Selling templates/courses? Lemon Squeezy hosted checkout.",
            link: { href: "/tools", text: "See payment tool deep reviews", suffix: " with pricing tables." },
          },
          {
            h3: "Email: Resend",
            p: "Transactional mail (signup, receipts) via Resend. Free 3K/mo, React Email templates, 5-minute setup. Skip SendGrid config hell.",
          },
          {
            h3: "Auth: Clerk or Supabase Auth",
            p: "Don't roll your own auth. Clerk free 10K MAU with drop-in UI. Already on Supabase? Use Supabase Auth and build UI yourself.",
          },
          {
            h3: "Database: Supabase",
            p: "500MB Postgres free + auto API + dashboard. Pro $25/mo when you have paying users. One Postgres beats three databases.",
          },
          {
            h3: "Analytics: Plausible + PostHog",
            p: "Landing page → Plausible ($9/mo, privacy-friendly). In-app SaaS analytics → PostHog (free 1M events/mo, feature flags included).",
          },
        ],
      },
      {
        h2: "5-minute decision tree",
        paragraphs: ["Answer in order:"],
        ordered: [
          "US company? Yes → Stripe. No → Polar.",
          "SaaS subscription or digital product? SaaS → Polar/Stripe API. Digital goods → Lemon Squeezy.",
          "Need login? Yes → Clerk. No → skip.",
          "Need persistent data? Yes → Supabase. No → JSON/localStorage is fine for MVP.",
          "Need email? Yes → Resend. No → skip.",
          "Need analytics? Landing → Plausible. SaaS → PostHog.",
        ],
        after: [
          "Six answers = your stack. Total: $0 (all free tiers) to ~$50 (all Pro). Validate willingness to pay on free tiers first.",
        ],
      },
      {
        h2: "MVP cost control checklist",
        paragraphs: ["Upgrade only when you hit these triggers:"],
        list: [
          "Vercel Pro ($20/mo) — team collab or bandwidth limits",
          "Polar/Stripe — day 1, pay per transaction only",
          "Resend Pro ($20/mo) — sending >2,500 emails/mo",
          "Clerk Pro ($25/mo) — MAU >8K",
          "Supabase Pro ($25/mo) — DB >400MB or need 24/7 uptime",
          "Plausible ($9/mo) — launch landing page same day",
        ],
        after: [
          "Never spend $200/mo on tools at $0 MRR. First dollar of revenue, then upgrade one tier at a time.",
        ],
      },
      {
        h2: "Common mistakes to avoid",
        list: [
          "Custom auth — saves $0, costs 2 weeks + security bugs",
          "Three databases at once — one Postgres is enough",
          "Premature K8s — MVPs don't need microservices",
          "\"Free users first, charge later\" — 99% never charge",
          "Tool hoarding — 10 SaaS subscriptions, product not live",
        ],
      },
      {
        h2: "Next steps this weekend",
        paragraphs: [
          "1. Run the decision tree above",
          "2. Create a Vercel project, git push deploy",
          "3. Wire Polar/Stripe and publish a $29/mo pricing page",
          "4. Ship MVP and post Show HN for first users",
        ],
        after: [
          "Want pricing comparisons, alternatives and setup checklists for each tool? Browse our curated directory — 5 free deep reviews, then $29/mo unlimited.",
        ],
      },
    ],
    cta: {
      title: "Don't want to research each tool?",
      subtitle: "40+ indie tools reviewed with pricing tables and 5-minute setup guides",
      button: "Subscribe $29/mo · unlimited reviews",
    },
  },
  zh: {
    meta: {
      title: "独立开发者技术栈选型指南 — 2026 年 indie hacker 工具推荐",
      description:
        "从支付到部署：手把手教 indie hacker 选择 Polar、Vercel、Resend 等工具，控制 MVP 成本，第一天就能收费。含完整技术栈清单和选型决策树。",
    },
    h1: "独立开发者技术栈选型指南：2026 年 indie hacker 工具推荐",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "独立开发者最大的时间浪费不是写错代码，而是在工具选型上纠结两周，还没写第一行业务逻辑。levelsio 用 Vercel + Stripe 在 12 个周末 ship 了 12 个付费产品——他的秘诀不是选了「最好的」工具，而是选了「足够好、当天能上线」的工具。",
      "这篇指南帮你用决策树方法快速确定 indie SaaS 的技术栈，控制 MVP 月成本在 $50 以内，同时第一天就设计收费点。",
      "Reddit r/indiehackers 上最常见的帖子：「我在选数据库/支付/邮件服务，已经调研了一周，还没开始写代码。」失败模式惊人地相似：过度调研、追新、忽视成本、自建过度。",
      "正确的原则：用成熟工具、控制月费、第一天收费、周末能 ship。",
    ],
    sections: [
      {
        h2: "一、为什么工具选型是 indie 的头号陷阱？",
        paragraphs: ["典型失败模式："],
        list: [
          "过度调研 — 对比 20 个工具，每个都看 pricing page 和 G2 评论",
          "追新 — 今天 Turso 火就用 Turso，明天 Neon 火就迁移",
          "忽视成本 — 选了 $99/月的工具，MRR 还是 $0",
          "自建过度 — 自己写 auth、自己搭邮件服务器",
        ],
        after: [
          "正确原则：用成熟工具、控制月费、第一天收费、周末能 ship。",
        ],
      },
      {
        h2: "二、2026 indie SaaS 标准技术栈（$50/月以内）",
        tools: [
          {
            h3: "前端 + 部署：Next.js + Vercel",
            p: "Next.js 15 + TypeScript + Tailwind 是 2026 年 indie 前端的事实标准。Vercel Hobby 免费层够 MVP，Pro $20/月解锁更多带宽。git push 即部署，Show HN 当天就能有公网 URL。",
          },
          {
            h3: "支付：Polar（无公司）或 Stripe（有美国公司）",
            p: "没有海外公司的开发者，Polar 作为 Merchant of Record 处理全球税务，4%+$0.40/笔，无月费。有美国公司的用 Stripe 裸接（2.9%+$0.30）。卖数字产品？选 Lemon Squeezy。",
            link: { href: "/tools", text: "查看支付工具深度对比", suffix: "。" },
          },
          {
            h3: "邮件：Resend",
            p: "事务邮件（注册确认、密码重置、支付收据）用 Resend。免费 3000 封/月够 MVP，API 极简，React Email 写模板。",
          },
          {
            h3: "认证：Clerk 或 Supabase Auth",
            p: "别自己写 auth。Clerk 免费 10K MAU，5 分钟集成 Next.js。已用 Supabase 做后端的用 Supabase Auth（免费但 UI 自建）。",
          },
          {
            h3: "数据库：Supabase",
            p: "Supabase 免费层：500MB Postgres + 1GB 存储 + 50K auth MAU。Pro $25/月扩展到生产。一个 Postgres 实例 + 自动 API + Dashboard，周末搭完后端。",
          },
          {
            h3: "分析：Plausible（landing）+ PostHog（SaaS）",
            p: "Landing page 用 Plausible（$9/月，隐私友好）。SaaS 产品内分析用 PostHog（免费 1M events/月，含 Feature Flags）。",
          },
        ],
      },
      {
        h2: "三、选型决策树（5 分钟版）",
        paragraphs: ["按顺序回答以下问题："],
        ordered: [
          "有美国公司吗？有 → Stripe。没有 → Polar。",
          "卖 SaaS 订阅还是数字产品？SaaS → Polar/Stripe API。数字产品 → Lemon Squeezy。",
          "需要用户登录吗？要 → Clerk。不要 → 跳过。",
          "需要持久化数据吗？要 → Supabase。不要 → localStorage/JSON 够用。",
          "需要发邮件吗？要 → Resend。不要 → 跳过。",
          "需要产品分析吗？Landing → Plausible。SaaS → PostHog。",
        ],
        after: [
          "回答完这 6 个问题，你的技术栈就确定了。总月费：$0（全免费层）到 $50（全 Pro）。",
        ],
      },
      {
        h2: "四、MVP 成本控制清单",
        paragraphs: ["在免费层验证付费意愿，有第一笔收入后再升级 Pro："],
        list: [
          "Vercel Pro（$20/月）— 需要团队协作或 Analytics",
          "Polar/Stripe — 第一天就用，按交易付费",
          "Resend Pro（$20/月）— 月发送 >2500 封",
          "Clerk Pro（$25/月）— MAU >8K",
          "Supabase Pro（$25/月）— DB >400MB 或需 7×24",
          "Plausible（$9/月）— 上线 landing page 当天",
        ],
        after: [
          "关键原则：在 $0 MRR 时不要花 $200/月买工具。",
        ],
      },
      {
        h2: "五、常见错误和避坑",
        list: [
          "自建 auth — 省 $0，浪费 2 周，引入安全漏洞",
          "同时用 3 个数据库 — 一个 Postgres 够用",
          "过早优化 — MVP 阶段不需要 K8s、微服务",
          "忽视支付 — 「先免费积累用户再收费」= 99% 永远不收费",
          "工具囤积 — 订阅 10 个 SaaS 工具但产品还没上线",
        ],
      },
      {
        h2: "六、下一步行动",
        paragraphs: [
          "1. 用上面的决策树确定你的 6 个工具",
          "2. 在 Vercel 创建项目，git push 部署",
          "3. 接入 Polar/Stripe，设计 $29/月定价页",
          "4. 本周末 ship MVP，Show HN 获取第一批用户",
        ],
        after: [
          "需要每个工具的定价对比、替代方案和接入指南？浏览独立开发者工具箱完整目录，免费体验 5 次深度评测。",
        ],
      },
    ],
    cta: {
      title: "不想一个个调研？",
      subtitle: "我们已评测 40+ indie 工具，含定价对比和 5 分钟接入指南",
      button: "订阅 $29/月 · 无限查阅",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
