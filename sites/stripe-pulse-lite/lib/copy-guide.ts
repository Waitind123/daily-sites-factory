import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Baremetrics Alternative for Indie Hackers — Stripe Cohort Analytics Guide",
      description:
        "Baremetrics free tier expired and jumps to $99/mo. Compare Stripe subscription analytics for indie SaaS. Find a $19.9/mo flat-rate MRR/churn/cohort tool.",
    },
    h1: "2026 Baremetrics Alternative for Indie Hackers: Stripe Cohort Analytics Guide",
    updated: "Updated July 2026 · 12 min read",
    intro: [
      "You launched your SaaS six months ago. MRR is growing. Then Baremetrics emails you: free trial over, $99/month starting next billing cycle. ChartMogul wants $79/month. For a solo founder at $5K MRR, that's nearly 2% of revenue just to see your own Stripe data.",
      "Stripe already stores every subscription, cancellation, and upgrade. What indie founders actually need: MRR, churn rate, customer movements, and basic cohort retention — which signup months brought sticky customers?",
      "On r/SaaS and Indie Hackers, the question repeats weekly: \"What's the cheapest Stripe analytics tool with cohorts?\" One founder wrote: \"I don't need forecasting or dunning. I need MRR, churn, and 3-month retention curves.\"",
      "This guide compares 2026 Stripe subscription analytics tools for solo founders, explains which metrics matter at indie scale, and how to pick a dashboard that won't eat your margins when you cross 200 customers.",
      "If you're tired of enterprise pricing for a one-person SaaS, this is your playbook.",
    ],
    sections: [
      {
        h2: "Why indie hackers need cohort analysis, not just MRR",
        paragraphs: ["MRR tells you where you are today. Cohorts tell you why:"],
        list: [
          "MRR — monthly recurring revenue, the north star number",
          "Churn rate — percentage of customers who cancel each month",
          "Cohort retention — which signup months had the best/worst stickiness",
          "Customer movements — new signups vs cancellations with dollar impact",
        ],
        after: [
          "A founder with $6K MRR and 3% churn looks healthy — until cohort analysis reveals that customers from January retain at 45% while March signups retain at 82%. That changes your marketing spend immediately.",
        ],
      },
      {
        h2: "2026 Stripe analytics tools compared",
        tools: [
          {
            h3: "Baremetrics — $99+/mo",
            p: "Popular with indie hackers until the free tier expired. Clean UI, forecasting, dunning on higher tiers. Pricing scales with MRR. Great product, expensive when bootstrapping.",
          },
          {
            h3: "ChartMogul — $79+/mo",
            p: "Industry standard for SaaS metrics. Starter $79/mo up to $10K MRR. Cohort analysis included but overkill for founders who just want weekly numbers.",
          },
          {
            h3: "Stripe Dashboard — free",
            p: "Shows gross volume and recent charges. No MRR calculation. No churn rate. No cohort retention. Fine for payments, not subscription analytics.",
          },
          {
            h3: "Google Sheets + CSV — free",
            p: "Manual MRR and cohort calculation every Monday. Breaks when you add annual plans, coupons, or prorations. Works until 50 customers, then becomes a part-time job.",
          },
          {
            h3: "Stripe Pulse Lite — $19.9/mo flat",
            p: "Built for indie hackers who want MRR/churn/cohorts without per-customer fees. Connect Stripe in 2 minutes, sync weekly, see 3-month retention curves.",
            link: { href: "/join", text: "5 free syncs to try", suffix: ", then $19.9/mo flat. No annual lock-in." },
          },
        ],
      },
      {
        h2: "What metrics to track at indie scale",
        paragraphs: ["Before comparing prices, decide what you check weekly:"],
        ordered: [
          "MRR — the number you tell other founders at coffee chats",
          "Churn rate — if above 5% monthly, fix retention before marketing",
          "Cohort retention — which months brought customers who actually stay",
          "Net revenue change — expansion minus contraction minus churn",
        ],
        after: [
          "Skip enterprise metrics you won't act on: 12-month LTV models with 80 customers, revenue forecasting with 6 months of data, dunning automation before you have churn.",
        ],
      },
      {
        h2: "How to connect Stripe in 2 minutes",
        paragraphs: ["The fastest path for a solo founder:"],
        ordered: [
          "Create a restricted API key in Stripe Dashboard (read-only)",
          "Paste the key into your analytics dashboard",
          "Click sync — see MRR, churn, and cohort retention",
          "Set a Monday calendar reminder to sync and review",
          "When a cohort underperforms, investigate that month's onboarding",
        ],
        after: [
          "Most founders over-analyze before they have 50 paying customers. Start with MRR and churn. Add cohort analysis when you have 3+ months of signup data.",
        ],
      },
      {
        h2: "Cohort retention: the metric that changes marketing",
        paragraphs: [
          "Real scenario: you ran a Product Hunt launch in January. 40 signups, great week. By March, only 18 remain — 45% retention. Your organic signups in March? 28 signups, 24 still active — 86% retention.",
          "Without cohort analysis, you'd see MRR growing and feel good. With it, you know Product Hunt traffic brought low-intent users. You stop chasing launch traffic and double down on content marketing.",
          "At indie scale, one marketing channel insight is worth years of dashboard subscription.",
        ],
      },
      {
        h2: "Pricing math for indie founders",
        paragraphs: [
          "Baremetrics at $99/mo: $1,188/year. At $5K MRR, that's 2% of revenue.",
          "ChartMogul Starter: $79/mo × 12 = $948/year, plus upgrades as MRR grows.",
          "Stripe Pulse Lite: $19.9/mo × 12 = $238.80/year. Flat pricing regardless of customer count.",
          "For bootstrapped founders, the break-even is saving one churned customer per year. Cohort analysis helps you save dozens.",
        ],
        after: [
          "Ready to try? Connect Stripe free, sync your metrics 5 times, and upgrade when you need unlimited weekly syncs with cohort tracking.",
        ],
      },
    ],
    cta: {
      title: "Connect Stripe and see MRR + cohorts free",
      subtitle: "5 free syncs · MRR/churn/cohorts · $19.9/mo unlimited",
      button: "Open dashboard →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Baremetrics 平替指南 — Stripe 队列分析选型",
      description:
        "Baremetrics 免费档过期后跳到 $99/月。对比独立开发者 Stripe 订阅分析工具，找到 $19.9/月一口价 MRR/流失/队列留存方案。",
    },
    h1: "2026 独立开发者 Baremetrics 平替：Stripe 队列分析选型指南",
    updated: "更新于 2026 年 7 月 · 阅读约 12 分钟",
    intro: [
      "你六个月前上线了 SaaS，MRR 在增长。然后 Baremetrics 发来邮件：免费试用结束，下个账单周期起 $99/月。ChartMogul 要 $79/月。对 $5K MRR 的独立开发者，仅看自己的 Stripe 数据就要花近 2% 收入。",
      "Stripe 已存储每一笔订阅、取消和升级。独立开发者真正需要的是：MRR、流失率、客户变动，以及基础队列留存 — 哪个月注册的用户最粘性？",
      "在 r/SaaS 和 Indie Hackers 上，每周都有人问：「最便宜的带队列分析的 Stripe 分析工具是什么？」一位创始人写道：「我不需要预测或催款，我只要 MRR、流失率和 3 个月留存曲线。」",
      "本指南对比 2026 年适合独立开发者的 Stripe 订阅分析工具，解释 indie 规模真正重要的指标，以及如何在超过 200 个客户时选择不侵蚀利润的仪表盘。",
      "如果你厌倦了为一人 SaaS 付企业级定价，这是你的操作手册。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要队列分析，不只是 MRR",
        paragraphs: ["MRR 告诉你今天在哪，队列告诉你为什么："],
        list: [
          "MRR — 月度经常性收入，北极星指标",
          "流失率 — 每月取消订阅的客户百分比",
          "队列留存 — 哪个月注册的用户留存最好/最差",
          "客户变动 — 新增与取消及其金额影响",
        ],
        after: [
          "一个 $6K MRR、3% 流失率的创始人看起来健康 — 直到队列分析显示 1 月注册的用户留存 45%，而 3 月注册的用户留存 82%。这会立即改变你的营销预算分配。",
        ],
      },
      {
        h2: "2026 Stripe 分析工具对比",
        tools: [
          {
            h3: "Baremetrics — $99+/月",
            p: "独立开发者常用，直到免费档过期。界面简洁，高档有预测和催款。定价随 MRR 增长。好产品，自举时偏贵。",
          },
          {
            h3: "ChartMogul — $79+/月",
            p: "SaaS 指标行业标准。入门版 $79/月覆盖 $10K 以下 MRR。含队列分析，但对只想每周看数字的创始人来说过重。",
          },
          {
            h3: "Stripe 仪表盘 — 免费",
            p: "显示总交易额和近期扣款。无 MRR 计算。无流失率。无队列留存。适合收款，不适合订阅分析。",
          },
          {
            h3: "Google 表格 + CSV — 免费",
            p: "每周一手动算 MRR 和队列。加入年付、优惠券或按比例退款就崩。50 个客户以下还能凑合，之后变成兼职工作。",
          },
          {
            h3: "Indie 订阅分析 — $19.9/月 一口价",
            p: "为想要 MRR/流失/队列、不想按客户付费的独立开发者打造。2 分钟连接 Stripe，每周同步，查看 3 个月留存曲线。",
            link: { href: "/join", text: "免费体验 5 次同步", suffix: "，之后 $19.9/月一口价。无年付绑定。" },
          },
        ],
      },
      {
        h2: "indie 规模该追踪什么指标",
        paragraphs: ["比价格之前，先想清楚每周真正看什么："],
        ordered: [
          "MRR — 你在咖啡聊天时告诉其他创始人的数字",
          "流失率 — 月流失超 5% 先修留存再投营销",
          "队列留存 — 哪个月带来了真正留下的客户",
          "净收入变化 — 扩展减收缩减流失",
        ],
        after: [
          "跳过不会行动的指标：80 个客户时的 12 个月 LTV 模型、6 个月数据时的收入预测、有流失之前的催款自动化。",
        ],
      },
      {
        h2: "2 分钟连接 Stripe",
        paragraphs: ["独立开发者最快路径："],
        ordered: [
          "在 Stripe 后台创建受限 API 密钥（只读）",
          "将密钥粘贴到分析仪表盘",
          "点击同步 — 查看 MRR、流失率和队列留存",
          "设置周一日历提醒同步并复盘",
          "某个队列表现差时，调查那个月的 onboarding",
        ],
        after: [
          "多数创始人在有 50 个付费客户前就过度分析。从 MRR 和流失率开始。有 3 个月以上注册数据后再加队列分析。",
        ],
      },
      {
        h2: "队列留存：改变营销策略的指标",
        paragraphs: [
          "真实场景：你 1 月在 Product Hunt 发布。40 个注册，很棒的一周。到 3 月只剩 18 个 — 45% 留存。3 月的自然注册？28 个注册，24 个仍活跃 — 86% 留存。",
          "没有队列分析，你会看到 MRR 增长感觉良好。有了它，你知道 Product Hunt 流量带来了低意向用户。你停止追逐发布流量，加倍投入内容营销。",
          "在 indie 规模，一个营销渠道洞察就值数年仪表盘订阅费。",
        ],
      },
      {
        h2: "独立开发者的定价账",
        paragraphs: [
          "Baremetrics $99/月：$1,188/年。$5K MRR 时占收入 2%。",
          "ChartMogul 入门版：$79/月 × 12 = $948/年，MRR 增长还要升级。",
          "Indie 订阅分析：$19.9/月 × 12 = $238.80/年。不论客户数一口价。",
          "对自举创始人，回本只需每年挽回一个流失客户。队列分析帮你挽回几十个。",
        ],
        after: [
          "准备好试试？免费连接 Stripe，同步 5 次看指标，需要每周无限同步含队列追踪时再升级。",
        ],
      },
    ],
    cta: {
      title: "免费连接 Stripe 查看 MRR + 队列",
      subtitle: "免费 5 次同步 · MRR/流失/队列 · $19.9/月 不限量",
      button: "打开仪表盘 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
