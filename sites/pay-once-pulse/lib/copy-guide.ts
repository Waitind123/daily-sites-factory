import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Pay-Once SaaS Alternatives Guide — escape subscription fatigue",
      description:
        "HN#41614926 sparked subscription fatigue. How indie hackers replace Canny, Typeform, Mixpanel, Calendly with buy-once and self-hosted tools. Save $2,000+/yr.",
    },
    h1: "Pay-once SaaS alternatives: 2026 guide to escaping subscription hell",
    updated: "Updated July 2026 · 14 min read",
    intro: [
      "In January 2026, HN thread #41614926 about payoncealternatives.com hit the front page. The top comment wasn't about a specific tool — it was a collective sigh: indie hackers are tired of paying $79/mo for Canny, $25/mo for Typeform, $12/mo for Calendly, $29/mo for Statuspage, stacking to $200–600/mo before earning a single dollar.",
      "levelsio built PhotoAI to $100K+/mo, but his early products ran on $0–50/mo stacks. The lesson isn't 'never pay for software' — it's 'pay once when possible, self-host when you can, subscribe only when the ROI is obvious.'",
      "This guide maps the 7 highest-impact subscription categories where pay-once or self-hosted alternatives exist today, with real savings math and migration checklists.",
      "Reddit r/SaaS is full of posts like 'My SaaS tool bill is $340/mo and I have 12 users.' The fix isn't canceling everything — it's replacing the 3–4 tools with the worst cost-to-value ratio.",
    ],
    sections: [
      {
        h2: "Why subscription fatigue is indie trap #2 (after tool selection)",
        paragraphs: ["Common patterns we see in HN and Indie Hackers:"],
        list: [
          "Stacking subscriptions before revenue — Canny + Typeform + Mixpanel + Calendly = $150/mo at $0 MRR",
          "Ignoring lifetime deals — AppSumo TidyCal $29 once vs Calendly $144/yr",
          "Not self-hosting when you can — Umami analytics is free self-hosted vs Plausible $108/yr",
          "Paying for features you don't use — Canny's CRM integrations when you have 50 users",
        ],
        after: [
          "A bootstrapped founder spending $200/mo on tools needs ~20 paying users at $29/mo just to break even on software. Before first revenue, target under $30/mo total.",
        ],
      },
      {
        h2: "Category 1: Product feedback (Canny $79/mo → Feedback Glow $99 once)",
        tools: [
          {
            h3: "The problem: Canny pricing outgrew indie budgets",
            p: "Canny Launch went from $50/mo to $79/mo. For a solo founder with 200 users, that's $948/year for a voting board. Feedback Glow offers the same core features — feature requests, public roadmap, changelog — with a $99 one-time purchase option.",
          },
          {
            h3: "Migration checklist",
            p: "Export Canny posts as CSV → import to Feedback Glow → update embed widget on your site → redirect roadmap URL → cancel Canny. Total time: 2–3 hours.",
            link: { href: "/tools", text: "See Feedback Glow deep lookup", suffix: " with full pricing comparison." },
          },
        ],
      },
      {
        h2: "Category 2: Forms & surveys (Typeform $25/mo → Formbricks free self-hosted)",
        tools: [
          {
            h3: "The problem: Typeform's 10-response free tier",
            p: "Typeform Basic is $25/mo for 100 responses. For MVP user research, that's absurd. Formbricks is MIT-licensed, supports unlimited responses self-hosted, plus in-app pop-up surveys Typeform doesn't offer.",
          },
          {
            h3: "Self-host in 5 minutes",
            p: "docker compose up with Formbricks' official compose file. Connect to your domain, embed the script, start collecting responses. Cost: $0 + your existing VPS.",
          },
        ],
      },
      {
        h2: "Category 3: Analytics (Plausible $9/mo → Umami free self-hosted)",
        tools: [
          {
            h3: "Landing page analytics without monthly bills",
            p: "Plausible is great at $9/mo, but that's $108/year forever. Umami gives you the same privacy-friendly PV/UV tracking with a 2KB script, self-hosted via Docker. For landing pages and marketing sites, it's identical value at $0.",
          },
          {
            h3: "When to still pay for analytics",
            p: "Product analytics with funnels, feature flags, and session replay? PostHog's free 1M events/mo tier is still the best value. Umami is for landing pages, not in-app product analytics.",
          },
        ],
      },
      {
        h2: "Category 4: Scheduling (Calendly $12/mo → Cal.com free or TidyCal $29 lifetime)",
        tools: [
          {
            h3: "Cal.com self-hosted: the open-source standard",
            p: "30K+ GitHub stars. White-label booking pages, timezone sync, Stripe paid consultations. Self-host free or use Cloud at $12/mo. Migration from Calendly: export event types, reconnect calendar, update embed links.",
          },
          {
            h3: "TidyCal: for those who refuse to touch servers",
            p: "AppSumo lifetime deal at $29 once. Less features than Cal.com but zero maintenance. Pays back vs Calendly in 3 months.",
          },
        ],
      },
      {
        h2: "Category 5: Status pages (Statuspage.io $29/mo → Statping-ng free)",
        tools: [
          {
            h3: "Monitoring + status page in one binary",
            p: "Statuspage.io starts at $29/mo for a public page with no monitoring included. Statping-ng is a Go binary that does HTTP/TCP monitoring AND publishes a public status page. Docker deploy, Slack alerts, $0 forever.",
          },
        ],
      },
      {
        h2: "The pay-once decision framework",
        paragraphs: ["For each subscription, ask:"],
        ordered: [
          "Can I self-host an open-source alternative? → Do it if you have Docker skills.",
          "Is there a lifetime deal (LTD)? → Buy if payback < 6 months vs monthly.",
          "Does the subscription save me >5 hours/month? → Keep it. Time > money.",
          "Am I paying for enterprise features I don't use? → Downgrade or switch.",
          "Can I build a 80% solution in a weekend? → Only if it's core to your product.",
        ],
        after: [
          "Most indie hackers can cut their SaaS bill 40–70% by replacing 3–4 tools. The savings fund your own product's runway.",
        ],
      },
      {
        h2: "Common mistakes when switching to pay-once",
        list: [
          "Self-hosting without backups — Docker volume backups are non-negotiable",
          "Buying every AppSumo LTD — only buy tools you'll actually use",
          "Migrating everything at once — replace one tool per weekend",
          "Ignoring deliverability — self-hosted email (Listmonk) needs proper SMTP setup",
          "Skipping the pricing page — your own product should charge from day 1 too",
        ],
      },
      {
        h2: "Next steps this weekend",
        paragraphs: [
          "1. Audit your current SaaS subscriptions — list every tool and monthly cost",
          "2. Pick the highest-cost, lowest-usage tool to replace first",
          "3. Browse our pay-once directory — 5 free deep lookups with migration guides",
          "4. Migrate one tool, cancel one subscription, redirect savings to marketing",
        ],
        after: [
          "Want savings math, migration checklists, and Docker setup for every alternative? Browse our curated directory — 5 free deep lookups, then $29/mo unlimited.",
        ],
      },
    ],
    cta: {
      title: "Don't want to research each alternative?",
      subtitle: "12+ pay-once tools with savings calculators and migration guides",
      button: "Subscribe $29/mo · unlimited lookups",
    },
  },
  zh: {
    meta: {
      title: "2026 一次性买断 SaaS 替代品指南 — 逃离订阅地狱",
      description:
        "HN#41614926 引发订阅疲劳热议。独立开发者如何用买断和自托管工具替代 Canny、Typeform、Mixpanel、Calendly，年省 $2000+。",
    },
    h1: "一次性买断 SaaS 替代品：2026 年逃离订阅地狱完整指南",
    updated: "更新于 2026 年 7 月 · 阅读约 14 分钟",
    intro: [
      "2026 年 1 月，HN #41614926 关于 payoncealternatives.com 的帖子登上首页。最高赞评论不是讨论某个具体工具，而是一声集体叹息：indie hacker 厌倦了 Canny $79/月、Typeform $25/月、Calendly $12/月、Statuspage $29/月，在还没赚一分钱之前就堆到 $200–600/月的 SaaS 账单。",
      "levelsio 把 PhotoAI 做到 $100K+/月，但他早期产品的技术栈月费只有 $0–50。教训不是「永远不买软件」，而是「能买断就买断，能自托管就自托管，只有 ROI 明确时才订阅」。",
      "本指南梳理 7 个最有替换价值的订阅品类，每个都有真实省钱计算和迁移清单。",
      "Reddit r/SaaS 上满是「我的 SaaS 工具账单 $340/月，只有 12 个用户」的帖子。解法不是全部取消，而是替换 3–4 个性价比最差的工具。",
    ],
    sections: [
      {
        h2: "一、为什么订阅疲劳是 indie 第二大陷阱？",
        paragraphs: ["HN 和 Indie Hackers 上常见的模式："],
        list: [
          "收入前堆订阅 — Canny + Typeform + Mixpanel + Calendly = $150/月，MRR 还是 $0",
          "忽视终身 Deal — AppSumo TidyCal $29 买断 vs Calendly $144/年",
          "能自托管却不自托管 — Umami 分析免费自托管 vs Plausible $108/年",
          "为不用的功能付费 — 50 个用户却买 Canny 的 CRM 集成",
        ],
        after: [
          "Bootstrap 创始人月花 $200 买工具，需要约 20 个 $29/月的付费用户才能打平软件成本。第一笔收入前，总月费应控制在 $30 以内。",
        ],
      },
      {
        h2: "二、品类 1：产品反馈（Canny $79/月 → Feedback Glow $99 买断）",
        tools: [
          {
            h3: "问题：Canny 定价超出 indie 预算",
            p: "Canny Launch 从 $50/月涨到 $79/月。solo founder 200 个用户，投票板一年 $948。Feedback Glow 提供相同核心功能 — 功能请求、公开路线图、更新日志 — 支持 $99 一次性买断。",
          },
          {
            h3: "迁移清单",
            p: "导出 Canny 帖子 CSV → 导入 Feedback Glow → 更新网站 embed widget → 重定向路线图 URL → 取消 Canny。总耗时 2–3 小时。",
            link: { href: "/tools", text: "查看 Feedback Glow 深度查询", suffix: "，含完整定价对比。" },
          },
        ],
      },
      {
        h2: "三、品类 2：表单调研（Typeform $25/月 → Formbricks 免费自托管）",
        tools: [
          {
            h3: "问题：Typeform 免费版仅 10 条回复",
            p: "Typeform Basic $25/月才 100 条回复。MVP 用户调研这太离谱。Formbricks MIT 开源，自托管无限回复，还支持 Typeform 没有的应用内弹窗调研。",
          },
          {
            h3: "5 分钟自托管",
            p: "docker compose up 官方 compose 文件。绑定域名，嵌入 script，开始收集回复。成本：$0 + 你现有的 VPS。",
          },
        ],
      },
      {
        h2: "四、品类 3：网站分析（Plausible $9/月 → Umami 免费自托管）",
        tools: [
          {
            h3: "落地页分析，零月费",
            p: "Plausible $9/月不错，但一年 $108 永远持续。Umami 提供相同的隐私友好 PV/UV 追踪，2KB script，Docker 自托管。落地页和营销站，价值相同，成本 $0。",
          },
          {
            h3: "什么时候仍该付费分析",
            p: "需要漏斗、Feature Flags、Session Replay 的产品内分析？PostHog 免费 1M events/月 仍是最佳性价比。Umami 适合落地页，不适合应用内产品分析。",
          },
        ],
      },
      {
        h2: "五、品类 4：预约调度（Calendly $12/月 → Cal.com 免费或 TidyCal $29 终身）",
        tools: [
          {
            h3: "Cal.com 自托管：开源标准",
            p: "GitHub 30K+ stars。白标预约页、时区同步、Stripe 付费咨询。自托管免费或 Cloud $12/月。从 Calendly 迁移：导出事件类型、重连日历、更新嵌入链接。",
          },
          {
            h3: "TidyCal：不想碰服务器的人",
            p: "AppSumo 终身 Deal $29 买断。功能比 Cal.com 少但零维护。对比 Calendly 3 个月回本。",
          },
        ],
      },
      {
        h2: "六、品类 5：状态页（Statuspage.io $29/月 → Statping-ng 免费）",
        tools: [
          {
            h3: "监控 + 状态页一个二进制搞定",
            p: "Statuspage.io $29/月起，公开页面不含监控。Statping-ng 是 Go 二进制，HTTP/TCP 监控 + 公开状态页。Docker 部署，Slack 告警，永久 $0。",
          },
        ],
      },
      {
        h2: "买断决策框架",
        paragraphs: ["对每个订阅问自己："],
        ordered: [
          "有开源替代品能自托管吗？→ 有 Docker 能力就做。",
          "有终身 Deal（LTD）吗？→ 对比月费 6 个月内回本就买。",
          "订阅每月帮我省 5+ 小时吗？→ 留着。时间比钱值钱。",
          "在为不用的企业功能付费吗？→ 降级或换工具。",
          "周末能做 80% 方案吗？→ 只有是产品核心才自建。",
        ],
        after: [
          "大多数 indie hacker 替换 3–4 个工具就能砍掉 40–70% SaaS 账单。省下的钱是你自己产品的 runway。",
        ],
      },
      {
        h2: "切换到买断方案的常见错误",
        list: [
          "自托管不做备份 — Docker volume 备份不可省略",
          "买遍 AppSumo LTD — 只买真正会用的工具",
          "一次迁移全部 — 每周末替换一个工具",
          "忽视送达率 — 自托管邮件（Listmonk）需正确配置 SMTP",
          "不做定价页 — 你自己的产品也应该第一天收费",
        ],
      },
      {
        h2: "本周末行动清单",
        paragraphs: [
          "1. 审计当前 SaaS 订阅 — 列出每个工具和月费",
          "2. 选成本最高、使用最少的工具先替换",
          "3. 浏览我们的买断目录 — 5 次免费深度查询含迁移指南",
          "4. 迁移一个工具，取消一个订阅，把省下的钱投入营销",
        ],
        after: [
          "想要每个替代品的省钱计算、迁移清单和 Docker 部署步骤？浏览精选目录 — 免费体验 5 次深度查询，之后 $29/月无限查阅。",
        ],
      },
    ],
    cta: {
      title: "不想一个个调研替代品？",
      subtitle: "12+ 买断工具，含省钱计算器和迁移指南",
      button: "订阅 $29/月 · 无限查询",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
