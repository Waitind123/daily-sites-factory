import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Stripe Failed Payment Recovery Guide — Dunning for Indie SaaS",
      description:
        "9% of MRR leaks to failed payments monthly. Compare Churnkey, SubRevival, and Stripe Smart Retries. Learn how indie hackers recover 50%+ with reason-specific dunning emails for $29/mo.",
    },
    h1: "2026 Stripe Failed Payment Recovery: Dunning Guide for Indie Hackers",
    updated: "Updated July 2026 · 14 min read",
    intro: [
      "You check Stripe on Monday morning. Revenue is up — but 12 subscriptions failed overnight. That's $348 in MRR at risk this month. Stripe Smart Retries will recover maybe 30% of that. The rest quietly churns.",
      "Failed payments are the silent killer of bootstrapped SaaS. Industry data shows roughly 9% of monthly recurring revenue fails to collect each billing cycle. Of that, about 57% is recoverable — but only if you have a real dunning stack: branded emails, card-update links, and reason-specific messaging.",
      "Enterprise tools like Churnkey ($199+/mo) and Recoverly ($199+/mo) target companies doing $50K+ MRR. SubRevival starts at $19/mo. RecoverKit at €29/mo. All better than losing MRR — but still expensive before you've validated product-market fit.",
      "On Indie Hackers and r/SaaS, founders repeatedly ask: \"What's the cheapest dunning tool for Stripe?\" Another wrote: \"Stripe retries get 30% but my customers never get an email asking them to update their card.\" If that sounds like you, this guide is for you.",
      "This guide explains how Stripe dunning works, compares 2026 recovery tools for bootstrapped founders, and shows you how to launch your first recovery campaign in 5 minutes for $29/mo flat.",
    ],
    sections: [
      {
        h2: "Why failed payments destroy indie SaaS MRR",
        paragraphs: ["Failed payments cause more involuntary churn than most founders realize:"],
        list: [
          "9% of MRR fails to collect each month on average",
          "Stripe Smart Retries only recover 30-40% without customer outreach",
          "Expired cards need different messaging than insufficient funds",
          "Each recovered $29/mo subscription = $348/year you almost lost",
        ],
        after: [
          "The problem is not Stripe. Stripe retries charges automatically. The problem is your customers don't know their payment failed — and generic \"payment failed\" emails get ignored.",
        ],
      },
      {
        h2: "2026 dunning tools compared",
        tools: [
          {
            h3: "Stripe Smart Retries — Free",
            p: "Built into Stripe Billing. Automatically retries failed charges on optimal schedules. Recovers 30-40% with zero setup. No customer emails, no card-update page. The right baseline — not a complete solution.",
          },
          {
            h3: "Churnkey — $199+/mo",
            p: "Industry standard for $30K+ MRR companies. AI retry logic, cancel flows, payment recovery. Recovers 45-55%. Excellent product — overkill and expensive for early-stage indie SaaS.",
          },
          {
            h3: "SubRevival — $19/mo flat",
            p: "Branded emails from your domain, hosted card-update page, trial/renewal reminders. Good value for Stripe-native SaaS under $50K MRR. No reason-specific email sequences on entry plan.",
          },
          {
            h3: "RecoverKit — €29/mo",
            p: "Built for indie founders €3K-50K MRR. Automated email sequences, decline code classification. 4-email dunning sequence included. European pricing.",
          },
          {
            h3: "Dunning Pulse — $29/mo flat",
            p: "Built for indie hackers: create recovery campaigns, reason-specific dunning sequences (expired card vs insufficient funds), recovery dashboard. 5 free campaigns, then $29/mo unlimited. Zero % of recovered revenue.",
            link: { href: "/dashboard", text: "Create recovery campaign free", suffix: " — five campaigns, no credit card." },
          },
        ],
      },
      {
        h2: "How reason-specific dunning works",
        paragraphs: [
          "Generic \"please update your card\" emails recover 15-20% of failed payments. Reason-specific messaging recovers 50-67%. The difference is context.",
          "An expired card customer needs: \"Your Visa ending 4242 expired. Update in one click.\" An insufficient funds customer needs: \"We'll retry in 3 days when your balance clears.\" A 3DS-required customer needs: \"Complete authentication to keep your subscription.\"",
          "The indie workflow: import failed payment (email, amount, decline reason), review auto-generated email sequence, send dunning emails on schedule, track recovery in dashboard.",
        ],
      },
      {
        h2: "Launch dunning in 5 minutes",
        paragraphs: ["The fastest indie dunning setup:"],
        ordered: [
          "Turn on Stripe Smart Retries (free, do this first)",
          "Create a recovery campaign for each failed payment",
          "Review reason-specific email sequence (expired card = 4 emails over 7 days)",
          "Send dunning emails with hosted card-update link",
          "Track MRR at risk vs recovered in dashboard weekly",
        ],
        afterLink: {
          href: "/dashboard",
          label: "Dunning Pulse",
          prefix: "Use ",
          suffix: " — 5 free campaigns, $29/mo after.",
        },
      },
      {
        h2: "Dunning email best practices",
        paragraphs: ["What actually works for indie SaaS recovery:"],
        list: [
          "Send first email within 1 hour of failure (not 3 days later)",
          "Use your domain, not noreply@stripe.com",
          "Include one-click card update link (not \"log into your account\")",
          "Match message to decline reason (expired vs insufficient funds)",
          "Stop sequence immediately on successful recovery",
          "Track recovery rate weekly — aim for 50%+ with full stack",
        ],
      },
      {
        h2: "When to upgrade from free Stripe retries",
        paragraphs: [
          "Stripe Smart Retries are enough when you're under $1K MRR and losing less than $50/month to failed payments. Upgrade to a dunning tool when:",
        ],
        list: [
          "You're losing $100+/month to failed payments",
          "You have 20+ active subscriptions",
          "Customers email asking why their access was suspended",
          "You want branded emails from your domain",
          "You need a hosted card-update page",
        ],
        after: [
          "At $29/mo, a dunning tool pays for itself when it recovers a single $29/month subscription. Most indie SaaS founders hit that threshold within the first month.",
        ],
      },
    ],
    cta: {
      title: "Start recovering failed payments today",
      subtitle: "5 free recovery campaigns. Reason-specific dunning. $29/mo after.",
      button: "Create recovery campaign free →",
    },
  },
  zh: {
    meta: {
      title: "2026 Stripe 失败支付恢复指南 — 独立开发者催款教程",
      description:
        "每月约 9% MRR 因支付失败流失。对比 Churnkey、SubRevival 与 Stripe 智能重试。了解独立开发者如何用 $29/月按原因定制催款邮件恢复 50%+ 收入。",
    },
    h1: "2026 Stripe 失败支付恢复：独立开发者催款指南",
    updated: "2026 年 7 月更新 · 阅读约 14 分钟",
    intro: [
      "周一早上打开 Stripe。收入在涨 — 但昨晚 12 个订阅扣款失败。本月风险 MRR 达 $348。Stripe 智能重试大概能恢复 30%。其余悄悄流失。",
      "失败支付是自举 SaaS 的隐形杀手。行业数据显示每月约 9% 的经常性收入扣款失败。其中约 57% 可恢复 — 但前提是你有完整的催款栈：品牌化邮件、更新卡片链接、按原因定制的消息。",
      "Churnkey（$199+/月）和 Recoverly（$199+/月）等企业工具面向 $50K+ MRR 公司。SubRevival 从 $19/月起。RecoverKit €29/月。都比流失 MRR 好 — 但在验证产品市场契合前仍然偏贵。",
      "Indie Hackers 和 r/SaaS 上创始人反复问：「Stripe 最便宜的催款工具是什么？」还有人写：「Stripe 重试能恢复 30%，但客户从没收到更新卡片的邮件。」如果这像你说的情况，这篇指南就是为你写的。",
      "本指南解释 Stripe 催款如何运作、对比 2026 年自举创始人恢复工具，并展示如何 5 分钟以 $29/月一口价上线首个恢复活动。",
    ],
    sections: [
      {
        h2: "为什么失败支付摧毁独立 SaaS 的 MRR",
        paragraphs: ["失败支付造成的非自愿流失比多数创始人意识到的更严重："],
        list: [
          "平均每月约 9% MRR 扣款失败",
          "Stripe 智能重试无客户触达时仅恢复 30-40%",
          "过期卡与余额不足需要完全不同的消息",
          "每恢复一个 $29/月订阅 = 每年少损失 $348",
        ],
        after: [
          "问题不在 Stripe。Stripe 会自动重试扣款。问题是客户不知道支付失败了 — 而千篇一律的「支付失败」邮件会被忽略。",
        ],
      },
      {
        h2: "2026 催款工具对比",
        tools: [
          {
            h3: "Stripe 智能重试 — 免费",
            p: "内置于 Stripe Billing。按最优时间表自动重试失败扣款。零配置恢复 30-40%。无客户邮件、无更新卡片页。正确的基础 — 不是完整方案。",
          },
          {
            h3: "Churnkey — $199+/月",
            p: "$30K+ MRR 公司的行业标准。AI 重试逻辑、取消流程、支付恢复。恢复 45-55%。优秀产品 — 对早期独立 SaaS 过重过贵。",
          },
          {
            h3: "SubRevival — $19/月一口价",
            p: "自有域名品牌化邮件、托管更新卡片页、试用/续费提醒。$50K 以下 MRR 的 Stripe SaaS 性价比高。入门档无按原因定制邮件序列。",
          },
          {
            h3: "RecoverKit — €29/月",
            p: "面向 €3K-50K MRR 独立创始人。自动邮件序列、拒绝码分类。含 4 封催款邮件。欧洲定价。",
          },
          {
            h3: "失败支付恢复 — $29/月一口价",
            p: "为独立开发者打造：创建恢复活动、按原因定制催款序列（过期卡 vs 余额不足）、恢复看板。免费 5 个活动，之后 $29/月不限量。零恢复收入分成。",
            link: { href: "/dashboard", text: "免费创建恢复活动", suffix: " — 五个活动，无需信用卡。" },
          },
        ],
      },
      {
        h2: "按原因定制催款如何运作",
        paragraphs: [
          "千篇一律的「请更新卡片」邮件恢复 15-20% 失败支付。按原因定制消息恢复 50-67%。差别在上下文。",
          "过期卡客户需要：「您的尾号 4242 Visa 已过期，一键更新。」余额不足客户需要：「3 天后余额充足时我们将重试。」需 3DS 客户需要：「完成验证以保留订阅。」",
          "独立开发者工作流：导入失败支付（邮箱、金额、拒绝原因）、查看自动生成的邮件序列、按计划发送催款邮件、在看板追踪恢复。",
        ],
      },
      {
        h2: "5 分钟上线催款",
        paragraphs: ["最快的独立开发者催款设置："],
        ordered: [
          "开启 Stripe 智能重试（免费，先做这步）",
          "为每笔失败支付创建恢复活动",
          "查看按原因定制的邮件序列（过期卡 = 7 天内 4 封）",
          "发送带托管更新卡片链接的催款邮件",
          "每周在看板对比风险 MRR 与已恢复收入",
        ],
        afterLink: {
          href: "/dashboard",
          label: "失败支付恢复",
          prefix: "使用 ",
          suffix: " — 免费 5 个活动，之后 $29/月。",
        },
      },
      {
        h2: "催款邮件最佳实践",
        paragraphs: ["对独立 SaaS 恢复真正有效的做法："],
        list: [
          "失败后 1 小时内发第一封（不是 3 天后）",
          "用自有域名，不是 noreply@stripe.com",
          "包含一键更新卡片链接（不是「登录账户」）",
          "消息匹配拒绝原因（过期 vs 余额不足）",
          "恢复成功后立即停止序列",
          "每周追踪恢复率 — 完整栈目标 50%+",
        ],
      },
      {
        h2: "何时从免费 Stripe 重试升级",
        paragraphs: [
          "$1K MRR 以下、每月因失败支付损失不到 $50 时，Stripe 智能重试够用。出现以下情况应升级催款工具：",
        ],
        list: [
          "每月因失败支付损失 $100+",
          "有 20+ 活跃订阅",
          "客户发邮件问为什么访问被暂停",
          "需要自有域名的品牌化邮件",
          "需要托管更新卡片页",
        ],
        after: [
          "$29/月 的催款工具，恢复一个 $29/月订阅就回本。多数独立 SaaS 创始人首月即达到这个门槛。",
        ],
      },
    ],
    cta: {
      title: "今天就开始恢复失败支付",
      subtitle: "免费 5 个恢复活动。按原因定制催款。之后 $29/月。",
      button: "免费创建恢复活动 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
