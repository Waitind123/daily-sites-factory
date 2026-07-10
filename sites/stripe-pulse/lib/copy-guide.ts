import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 ChartMogul Alternative for Indie Hackers — Stripe Metrics Guide",
      description:
        "ChartMogul starts at $79/mo. Compare Stripe revenue dashboards for indie SaaS. Find a $29/mo flat-rate MRR/ARR/churn tool without per-customer fees.",
    },
    h1: "2026 ChartMogul Alternative for Indie Hackers: Stripe Metrics Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "Every Monday morning, bootstrapped founders open Stripe and manually calculate MRR. Some export CSVs into spreadsheets. Others pay $79–$500/month for ChartMogul, Baremetrics, or Mixpanel — tools built for teams of 50, not solo devs with 100 customers.",
      "Stripe already has your revenue data. What you need is a clean dashboard: MRR, ARR, churn rate, new vs churned customers, expansion and contraction MRR. Four numbers. Not a 50-page enterprise report.",
      "The problem? ChartMogul Starter is $79/month for up to $10K MRR. Baremetrics starts around $50/month and scales with customer count. For a solo founder at $3K MRR, that's 2.6% of revenue just to see your own numbers.",
      "On r/SaaS and Indie Hackers, founders repeatedly ask: \"What's the cheapest Stripe metrics dashboard?\" Another wrote: \"I just want MRR and churn — ChartMogul is overkill for my 80 customers.\" If that sounds like you, this guide is for you.",
      "This guide compares 2026 Stripe revenue tools for solo founders, what metrics actually matter at indie scale, and how to pick a dashboard that won't eat your margins.",
    ],
    sections: [
      {
        h2: "Why indie hackers need a Stripe metrics dashboard",
        paragraphs: ["Stripe's built-in dashboard shows gross volume. It doesn't show:"],
        list: [
          "MRR — monthly recurring revenue, the number investors and founders obsess over",
          "Churn rate — percentage of customers who cancel each month",
          "Customer movements — new signups vs cancellations with dollar impact",
          "Expansion MRR — upgrades and add-ons that grow revenue without new customers",
        ],
        after: [
          "The classic indie stack: connect Stripe on Monday, check MRR and churn, spot a spike, email churned customers personally. You don't need cohort analysis with 12-month retention curves in week one. You need: MRR, churn, and customer count.",
        ],
      },
      {
        h2: "2026 Stripe metrics tools compared",
        tools: [
          {
            h3: "ChartMogul — $79+/mo",
            p: "Industry standard for SaaS metrics. Starter $79/mo up to $10K MRR. Great for funded startups with finance teams. Expensive when you're bootstrapping at $2–5K MRR.",
          },
          {
            h3: "Baremetrics — $50+/mo",
            p: "Clean UI, popular with indie hackers. Pricing scales with MRR and customer count. Forecasting and dunning on higher tiers. Solid but adds up as you grow.",
          },
          {
            h3: "Stripe Dashboard — free",
            p: "Shows gross volume and recent charges. No MRR calculation. No churn rate. No customer movement breakdown. Fine for payment processing, not revenue analytics.",
          },
          {
            h3: "Google Sheets + CSV export — free",
            p: "Manual MRR calculation every Monday. Error-prone. Breaks when you add annual plans or prorations. Works until you have 50+ customers.",
          },
          {
            h3: "Stripe Pulse — $29/mo flat",
            p: "Built for indie hackers who want MRR/ARR/churn without per-customer fees. Connect Stripe in 2 minutes, sync weekly, see customer movements.",
            link: { href: "/join", text: "5 free syncs to try", suffix: ", then $29/mo flat. No annual lock-in." },
          },
        ],
      },
      {
        h2: "What metrics to track at indie scale",
        paragraphs: ["Before comparing prices, decide what you actually check weekly:"],
        ordered: [
          "MRR — the north star number for subscription businesses",
          "Churn rate — if above 5% monthly, you have a retention problem",
          "New customers — are your marketing channels working?",
          "Net revenue change — expansion minus contraction minus churn",
        ],
        after: [
          "Skip enterprise metrics you won't act on in month one: LTV/CAC ratios with 30 customers, 12-month cohort retention curves, revenue forecasting models.",
        ],
      },
      {
        h2: "How to connect Stripe in 2 minutes",
        paragraphs: ["The fastest path for a solo founder:"],
        ordered: [
          "Create a restricted API key in Stripe Dashboard (read-only)",
          "Paste the key into your metrics dashboard",
          "Click sync — see MRR, ARR, churn, and customer count",
          "Set a Monday calendar reminder to sync and review",
          "When churn spikes, email cancelled customers personally",
        ],
        after: [
          "Most founders over-analyze before they have paying customers. Start with MRR and churn. Add cohort analysis only when you have 200+ customers.",
        ],
      },
      {
        h2: "Churn tracking: the metric that saves your business",
        paragraphs: [
          "Here's a real scenario: your MRR is $4,200 with 140 customers. Churn is 2.3% — looks healthy. But three enterprise customers ($200/mo each) cancelled last week. Your dashboard shows -$600 contraction MRR.",
          "Without customer movement tracking, you'd see MRR drop $600 and wonder why. With it, you know exactly who left and can reach out. At indie scale, saving one $200/mo customer pays for 20 months of your metrics tool.",
          "Churn tracking isn't vanity analytics. It's how you catch problems before they compound.",
        ],
      },
      {
        h2: "Pricing math for indie founders",
        paragraphs: [
          "ChartMogul Starter: $79/mo × 12 = $948/year. At $3K MRR, that's 2.6% of revenue.",
          "Baremetrics at $50/mo: $600/year, plus price increases as MRR grows.",
          "Stripe Pulse: $29/mo × 12 = $118.80/year. Flat pricing regardless of customer count.",
          "For bootstrapped founders, the break-even is immediate. One saved churned customer pays for years of dashboard access.",
        ],
        after: [
          "Ready to try? Connect Stripe free, sync your metrics 5 times, and upgrade only when you need unlimited weekly syncs.",
        ],
      },
    ],
    cta: {
      title: "Connect Stripe and see your MRR free",
      subtitle: "5 free syncs · MRR/ARR/churn · $29/mo unlimited",
      button: "Open dashboard →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 ChartMogul 平替指南 — Stripe 指标仪表盘选型",
      description:
        "ChartMogul 起步 $79/月。对比独立开发者 Stripe 收入仪表盘，找到 $29/月一口价、无按客户收费的 MRR/ARR/流失分析工具。",
    },
    h1: "2026 独立开发者 ChartMogul 平替：Stripe 指标仪表盘选型指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "每个周一早上，自举创始人打开 Stripe 手动计算 MRR。有人导出 CSV 到表格，有人付 $79–$500/月给 ChartMogul、Baremetrics 或 Mixpanel — 这些工具为 50 人团队设计，不是为 100 个客户的独立开发者。",
      "Stripe 已有你的收入数据。你需要的是一个干净的仪表盘：MRR、ARR、流失率、新增与流失客户、扩展与收缩 MRR。四个数字，不是 50 页企业报告。",
      "问题在于？ChartMogul 入门版 $79/月覆盖 $10K 以下 MRR。Baremetrics 约 $50/月起并按客户数涨价。对 $3K MRR 的独立开发者，仅看自己的数字就要花 2.6% 收入。",
      "在 r/SaaS 和 Indie Hackers 上，创始人反复问：「最便宜的 Stripe 指标仪表盘是什么？」还有人写道：「我只想要 MRR 和流失率 — ChartMogul 对我 80 个客户来说太重了。」如果这像你说的，这篇指南就是为你写的。",
      "本指南对比 2026 年适合独立开发者的 Stripe 收入工具、在 indie 规模真正重要的指标，以及如何选择不会侵蚀利润率的仪表盘。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要 Stripe 指标仪表盘",
        paragraphs: ["Stripe 内置仪表盘显示总交易额，但不显示："],
        list: [
          "MRR — 月度经常性收入，投资人和创始人最关注的数字",
          "流失率 — 每月取消订阅的客户百分比",
          "客户变动 — 新增与取消及其金额影响",
          "扩展 MRR — 升级和增购带来的收入增长",
        ],
        after: [
          "经典 indie 流程：周一连接 Stripe，查看 MRR 和流失率，发现异常后亲自邮件联系流失客户。第一周不需要 12 个月留存曲线。你需要的是：MRR、流失率、客户数。",
        ],
      },
      {
        h2: "2026 Stripe 指标工具对比",
        tools: [
          {
            h3: "ChartMogul — $79+/月",
            p: "SaaS 指标行业标准。入门版 $79/月覆盖 $10K 以下 MRR。适合有财务团队的融资创业公司。$2–5K MRR 自举时偏贵。",
          },
          {
            h3: "Baremetrics — $50+/月",
            p: "界面简洁，独立开发者常用。定价随 MRR 和客户数增长。高档有预测和催款功能。不错但随规模累积。",
          },
          {
            h3: "Stripe 仪表盘 — 免费",
            p: "显示总交易额和近期扣款。无 MRR 计算。无流失率。无客户变动明细。适合收款，不适合收入分析。",
          },
          {
            h3: "Google 表格 + CSV 导出 — 免费",
            p: "每周一手动算 MRR。容易出错。加入年付或按比例退款就崩。50 个客户以下还能凑合。",
          },
          {
            h3: "Stripe 收入仪表盘 — $29/月 一口价",
            p: "为想要 MRR/ARR/流失率、不想按客户付费的独立开发者打造。2 分钟连接 Stripe，每周同步，查看客户变动。",
            link: { href: "/join", text: "免费体验 5 次同步", suffix: "，之后 $29/月一口价。无年付绑定。" },
          },
        ],
      },
      {
        h2: "indie 规模该追踪什么指标",
        paragraphs: ["比价格之前，先想清楚每周真正看什么："],
        ordered: [
          "MRR — 订阅业务的北极星指标",
          "流失率 — 月流失超 5% 说明留存有问题",
          "新增客户 — 营销渠道是否有效？",
          "净收入变化 — 扩展减收缩减流失",
        ],
        after: [
          "跳过第一个月不会行动的指标：30 个客户时的 LTV/CAC、12 个月队列留存曲线、收入预测模型。",
        ],
      },
      {
        h2: "2 分钟连接 Stripe",
        paragraphs: ["独立开发者最快路径："],
        ordered: [
          "在 Stripe 后台创建受限 API 密钥（只读）",
          "将密钥粘贴到指标仪表盘",
          "点击同步 — 查看 MRR、ARR、流失率和客户数",
          "设置周一日历提醒同步并复盘",
          "流失率飙升时亲自邮件联系取消的客户",
        ],
        after: [
          "多数创始人在有付费客户前就过度分析。从 MRR 和流失率开始。200+ 客户后再加队列分析。",
        ],
      },
      {
        h2: "流失追踪：能救业务的指标",
        paragraphs: [
          "真实场景：MRR $4,200，140 个客户。流失率 2.3% — 看起来健康。但上周三个企业客户（各 $200/月）取消了。仪表盘显示 -$600 收缩 MRR。",
          "没有客户变动追踪，你会看到 MRR 降 $600 却不知原因。有了它，你知道谁走了可以联系。在 indie 规模，挽回一个 $200/月客户够付 20 个月工具费。",
          "流失追踪不是虚荣分析。它是你在问题复合化之前发现它们的方式。",
        ],
      },
      {
        h2: "独立开发者的定价账",
        paragraphs: [
          "ChartMogul 入门版：$79/月 × 12 = $948/年。$3K MRR 时占收入 2.6%。",
          "Baremetrics $50/月：$600/年，MRR 增长还会涨价。",
          "Stripe 收入仪表盘：$29/月 × 12 = $118.80/年。不论客户数一口价。",
          "对自举创始人，回本立竿见影。挽回一个流失客户够付数年仪表盘费用。",
        ],
        after: [
          "准备好试试？免费连接 Stripe，同步 5 次看指标，需要每周无限同步时再升级。",
        ],
      },
    ],
    cta: {
      title: "免费连接 Stripe 查看 MRR",
      subtitle: "免费 5 次同步 · MRR/ARR/流失率 · $29/月 不限量",
      button: "打开仪表盘 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
