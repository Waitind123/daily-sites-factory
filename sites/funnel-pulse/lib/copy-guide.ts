import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Mixpanel Alternative for Indie Hackers — Funnel Analytics Guide",
      description:
        "Mixpanel costs $500/mo for solo founders. Compare funnel analytics tools for indie SaaS: Mixpanel, Amplitude, Plausible. Find a $29/mo flat-rate alternative with drop-off tracking.",
    },
    h1: "2026 Mixpanel Alternative for Indie Hackers: Funnel Analytics Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "You launched your SaaS. Signups are trickling in — 50 a week from Product Hunt, Twitter, and word of mouth. But only 12% of visitors who hit your landing page ever create an account. Where do the other 88% go? Which step in your onboarding leaks the most users?",
      "Funnel analytics answers these questions. Track users through Landing → Signup → Activation → Payment, measure conversion at each step, and fix the biggest drop-off first. The problem? Mixpanel charges $500/month for funnel reports and requires a 3-week integration. Amplitude starts at $49/mo but ramps fast with MAU pricing. Plausible is beautifully simple but has no funnels.",
      "On Indie Hackers, founders repeatedly post: \"I spent two days integrating Mixpanel — then saw the pricing page. $500/month for funnel analytics. For a solo developer with maybe 200 users.\" Another wrote: \"Mixpanel was overkill. Plausible had no funnels. So I built my own.\"",
      "This guide compares 2026 funnel analytics tools for solo founders, what actually matters at indie scale, and how to find your biggest conversion leak without eating your entire MRR on analytics.",
    ],
    sections: [
      {
        h2: "Why indie hackers need funnel analytics",
        paragraphs: [
          "Knowing your overall conversion rate is not enough. A 3% landing-to-paid rate could hide a 70% drop-off at email verification — fix that one step and you might double revenue without more traffic.",
          "At 200 MAU, every percentage point matters. Indie hackers who track funnels ship onboarding fixes faster and waste less paid acquisition budget on a leaky bucket.",
        ],
        list: [
          "Find which onboarding step loses the most users",
          "Measure impact of UX changes with before/after funnel data",
          "Prioritize product work by revenue impact, not gut feeling",
          "Build investor-ready metrics from day one",
        ],
        after: [
          "The classic indie stack: define 3–5 funnel steps, POST events from your app, check the dashboard weekly, fix the worst leak. At solo scale, you don't need cohort analysis across 47 segments, session replay bundled at $300/mo, or dedicated analytics engineers. You need: step conversion rates, drop-off percentages, flat pricing.",
        ],
      },
      {
        h2: "2026 funnel analytics tools compared",
        tools: [
          {
            h3: "Mixpanel — $500+/mo",
            p: "Industry-standard product analytics with powerful funnels, retention, and cohort analysis. Excellent for growth teams at funded startups. Overkill for a solo founder with 200 users. Pricing scales with monthly tracked users — your bill grows as you succeed.",
          },
          {
            h3: "Amplitude — $49+/mo (scales fast)",
            p: "Strong behavioral analytics and funnel visualization. Free tier exists but limits events. Real usage for a growing SaaS quickly hits $200–500/mo. Great for product managers, heavy for bootstrapped devs.",
          },
          {
            h3: "Plausible — $9/mo (no funnels)",
            p: "Privacy-friendly, lightweight page analytics. Perfect for traffic and referrers. But no funnel tracking, no step-by-step drop-off. Many indie hackers pair it with a spreadsheet — painful.",
          },
          {
            h3: "Funnel Pulse — $29/mo flat",
            p: "Built for indie hackers: define funnel steps, track with one POST request, see drop-off charts and biggest-leak detection. 5 free funnels, then $29/mo unlimited. No per-MAU fees, no sales calls.",
            link: { href: "/funnels", text: "Create a funnel free", suffix: " — five funnels, no credit card." },
          },
        ],
      },
      {
        h2: "What funnel steps to track first",
        paragraphs: ["Start with your core revenue path:"],
        ordered: [
          "Landing page view — top of funnel, 100% baseline",
          "Signup started — measures headline and CTA effectiveness",
          "Email verified or profile completed — often the biggest leak",
          "First key action (activation) — user got value from your product",
          "Payment completed — bottom of funnel, ties to MRR",
        ],
        after: [
          "Keep it to 4–5 steps max. More steps = more noise. The goal is finding one fixable bottleneck per week, not building a NASA mission control dashboard.",
        ],
      },
      {
        h2: "5 minutes to launch your first funnel",
        paragraphs: ["The fastest indie path:"],
        ordered: [
          "Name your funnel and list steps: Landing, Signup, Activation, Payment",
          "Create the funnel in Funnel Pulse dashboard",
          "POST events from your app: { slug, step: 0 } for landing, step: 1 for signup, etc.",
          "Wait for 50+ users through the funnel",
          "Check which step has the highest drop-off — fix that first",
        ],
        afterLink: {
          href: "/funnels",
          label: "Funnel Pulse",
          prefix: "Use ",
          suffix: " to create your first funnel in under a minute. Five free funnels, no credit card.",
        },
      },
      {
        h2: "Real example: fixing a 62% onboarding leak",
        paragraphs: [
          "An indie hacker tracked their SaaS signup funnel and found 62% drop-off between \"Signup started\" and \"Email verified.\" Users were abandoning the verification email step.",
          "They added a resend button, switched to magic-link auth, and sent a reminder after 10 minutes. Drop-off fell from 62% to 28%. Overall landing-to-paid conversion doubled — same traffic, double the MRR.",
          "This is the power of funnel analytics at indie scale. One fix, measurable impact, no $500/mo tool required.",
        ],
      },
      {
        h2: "SEO and distribution for analytics tools",
        paragraphs: [
          "Long-tail content like \"Mixpanel alternative indie hacker\" and \"cheap funnel analytics SaaS\" ranks within 1–3 months on a custom domain. Submit your sitemap to Google Search Console.",
          "Distribution channels: Product Hunt launch, Hacker News Show HN, Reddit r/SideProject and r/SaaS, Twitter/X thread sharing your first funnel insight, Indie Hackers milestone post.",
        ],
      },
      {
        h2: "Summary",
        closingLink: {
          href: "/join",
          label: "try Funnel Pulse free",
          prefix: "Mixpanel is powerful software built for growth teams with analytics budgets. If you need step-by-step drop-off charts, one-line event tracking, and $29/mo flat pricing, ",
          suffix: ". Five funnels, no credit card. Stop guessing where users leave — start measuring.",
        },
      },
    ],
    cta: {
      title: "Ready to find your biggest leak?",
      subtitle: "5 free funnels · unlimited events after subscribe",
      button: "Create your first funnel",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Mixpanel 替代品指南 — 漏斗分析",
      description:
        "Mixpanel 对独立开发者要 $500/月。对比 Mixpanel、Amplitude、Plausible 等漏斗分析工具，找到 $29/月一口价的流失追踪替代方案。",
    },
    h1: "2026 独立开发者 Mixpanel 替代品：漏斗分析完整指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "你上线了 SaaS，每周从 Product Hunt、推特和口碑来 50 个注册。但只有 12% 的落地页访客会创建账号。另外 88% 去哪了？新手引导哪一步流失最多？",
      "漏斗分析回答这些问题。追踪用户从落地页 → 注册 → 激活 → 付费的每一步，测量每步转化率，优先修复最大流失点。问题是：Mixpanel 漏斗报告要 $500/月，接入要三周。Amplitude 起步 $49/月但 MAU 定价涨得快。Plausible 简洁好看但没有漏斗功能。",
      "Indie Hackers 上经常有创始人发帖：「我花了两天接入 Mixpanel，然后看到定价页 — 漏斗分析 $500/月，我只有 200 用户。」还有人说：「Mixpanel 太重，Plausible 没有漏斗，所以我自己做了一个。」",
      "本指南对比 2026 年适合独立开发者的漏斗分析工具、一人规模真正需要什么，以及如何不把整月 MRR 花在分析工具上就找到最大转化漏洞。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要漏斗分析",
        paragraphs: [
          "只知道总转化率不够。3% 的落地页到付费转化率，可能隐藏着邮箱验证步骤 70% 的流失 — 修好这一步，不用更多流量就能翻倍收入。",
          "200 MAU 时，每一个百分点都很重要。追踪漏斗的独立开发者更快修复引导流程，少在漏桶上浪费获客预算。",
        ],
        list: [
          "找到新手引导流失最多的步骤",
          "用修复前后的漏斗数据衡量体验改动效果",
          "按收入影响排优先级，而不是靠直觉",
          "从第一天就有投资人看得懂的指标",
        ],
        after: [
          "经典独立开发者路径：定义 3–5 个漏斗步骤，从应用 POST 事件，每周查看看板，修复最大漏洞。一人规模不需要 47 个分群的队列分析、$300/月捆绑的会话回放，或专职分析工程师。你需要的是：步骤转化率、流失百分比、一口价。",
        ],
      },
      {
        h2: "2026 年漏斗分析工具对比",
        tools: [
          {
            h3: "Mixpanel — $500+/月",
            p: "行业标准产品分析，漏斗、留存、队列分析功能强大。适合有融资的增长团队，对 200 用户的独立开发者来说太重。按月度追踪用户定价 — 越成功账单越高。",
          },
          {
            h3: "Amplitude — $49+/月（涨得快）",
            p: "强大的行为分析和漏斗可视化。有免费档但限制事件数。Growing SaaS 的实际用量很快到 $200–500/月。适合产品经理，对自举开发者来说偏重。",
          },
          {
            h3: "Plausible — $9/月（无漏斗）",
            p: "注重隐私的轻量页面分析，适合看流量和来源。但没有漏斗追踪、没有逐步流失分析。很多独立开发者用表格凑合 — 很痛苦。",
          },
          {
            h3: "Funnel Pulse — $29/月 一口价",
            p: "为独立开发者打造：定义漏斗步骤、一行 POST 追踪、流失图表与最大漏洞检测。免费 5 个漏斗，之后 $29/月 不限量，不按 MAU 收费，无需销售演示。",
            link: { href: "/funnels", text: "免费创建漏斗", suffix: " — 五个漏斗，无需信用卡。" },
          },
        ],
      },
      {
        h2: "应该先追踪哪些漏斗步骤",
        paragraphs: ["从核心收入路径开始："],
        ordered: [
          "落地页浏览 — 漏斗顶部，100% 基准",
          "开始注册 — 衡量标题和按钮效果",
          "邮箱验证或资料完善 — 通常是最大漏洞",
          "首次关键操作（激活）— 用户从产品获得价值",
          "完成付费 — 漏斗底部，直接关联 MRR",
        ],
        after: [
          "最多 4–5 步。步骤越多噪音越大。目标是每周找到一个可修复的瓶颈，而不是建 NASA 控制台。",
        ],
      },
      {
        h2: "5 分钟上线第一个漏斗",
        paragraphs: ["独立开发者最快路径："],
        ordered: [
          "命名漏斗并列出步骤：落地页、注册、激活、付费",
          "在 Funnel Pulse 看板创建漏斗",
          "从应用 POST 事件：{ slug, step: 0 } 表示落地页，step: 1 表示注册，以此类推",
          "等 50+ 用户走完漏斗",
          "查看哪步流失最高 — 优先修复",
        ],
        afterLink: {
          href: "/funnels",
          label: "Funnel Pulse",
          prefix: "用",
          suffix: "一分钟内创建第一个漏斗，免费 5 次，无需信用卡。",
        },
      },
      {
        h2: "真实案例：修复 62% 的引导流失",
        paragraphs: [
          "一位独立开发者追踪 SaaS 注册漏斗，发现「开始注册」到「邮箱验证」之间 62% 流失。用户在验证邮件步骤放弃了。",
          "他加了重发按钮、改用魔法链接登录、10 分钟后发提醒。流失从 62% 降到 28%，落地页到付费总转化率翻倍 — 同样流量，双倍 MRR。",
          "这就是独立开发者规模下漏斗分析的力量。一个修复，可衡量的影响，不需要 $500/月的工具。",
        ],
      },
      {
        h2: "分析工具的 SEO 与分发",
        paragraphs: [
          "「Mixpanel 替代品 独立开发者」「便宜漏斗分析 SaaS」等长尾词在自定义域名下 1–3 个月可排名。向 Google Search Console 提交 sitemap。",
          "分发渠道：Product Hunt 发布、Hacker News Show HN、Reddit r/SideProject 和 r/SaaS、推特分享首个漏斗洞察、Indie Hackers 里程碑帖。",
        ],
      },
      {
        h2: "总结",
        closingLink: {
          href: "/join",
          label: "免费试用 Funnel Pulse",
          prefix: "Mixpanel 是面向有分析预算增长团队的重型软件。若你需要逐步流失图表、一行事件追踪、$29/月 一口价，可",
          suffix: "。五个漏斗，无需信用卡。别再猜用户在哪离开 — 开始测量。",
        },
      },
    ],
    cta: {
      title: "准备好找到最大漏洞了吗？",
      subtitle: "免费 5 个漏斗 · 订阅后事件不限量",
      button: "创建第一个漏斗",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
