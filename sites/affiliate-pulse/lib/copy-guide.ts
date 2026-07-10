import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Rewardful Alternative for Indie Hackers — Affiliate Tracking Guide",
      description:
        "Rewardful charges $49/mo plus 9% of affiliate revenue. Compare Stripe-native affiliate tools for indie SaaS. Find a $29/mo flat-rate alternative with zero revenue share.",
    },
    h1: "2026 Rewardful Alternative for Indie Hackers: Affiliate Tracking Guide",
    updated: "Updated July 2026 · 12 min read",
    intro: [
      "You launched a SaaS product. Early users love it. A few ask: \"Do you have an affiliate program? I'd love to promote this.\" You say yes — then realize affiliate tracking software costs more than your MRR.",
      "Rewardful is the default choice for Stripe-based SaaS. Connect Stripe, generate affiliate links, track conversions, pay commissions. Solid product. But the pricing model punishes growth: $49/month base fee plus 9% of everything your affiliates sell. At $10,000 in affiliate-driven revenue, you pay Rewardful $949 that month. For software.",
      "Alternatives emerged: Komissio at $49 flat (no revenue share), Affilut at $19/mo, Refgrow at $29/mo, Referralful with pay-per-payout pricing. All better than 9% revenue share — but still $19–49/month before you make a single affiliate sale.",
      "On Indie Hackers and r/SaaS, founders repeatedly ask: \"What's the cheapest affiliate tracking tool for Stripe?\" Another wrote: \"I just want to know what I owe each affiliate at month-end — Rewardful's 9% cut feels like a tax on my own growth.\" If that sounds like you, this guide is for you.",
      "This guide explains how Stripe-native affiliate tracking works, compares 2026 tools for bootstrapped founders, and shows you how to launch an affiliate program in under 15 minutes for $29/mo with zero revenue share.",
    ],
    sections: [
      {
        h2: "Why indie SaaS founders need affiliate tracking",
        paragraphs: ["Affiliate programs are the cheapest customer acquisition channel for early-stage SaaS:"],
        list: [
          "Pay only on conversion — no upfront ad spend",
          "Affiliates bring warm traffic from their audience",
          "Recurring commissions align incentives for subscription products",
          "Word-of-mouth at scale — bloggers, YouTubers, newsletter writers",
        ],
        after: [
          "The problem is not running an affiliate program. The problem is tracking who referred whom, calculating commissions accurately, and paying affiliates without spending $500/month on software that takes 9% of your revenue on top.",
        ],
      },
      {
        h2: "2026 affiliate tracking tools compared",
        tools: [
          {
            h3: "Rewardful — $49/mo + 9% revenue share",
            p: "The Stripe-native standard. Clean UI, recurring commission support, PayPal/Wise payouts. Growth plan $49/mo plus 9% of affiliate revenue. At $50k/mo in affiliate sales, that's $4,549/month total. Great product, expensive growth tax.",
          },
          {
            h3: "FirstPromoter — $49+/mo",
            p: "Similar Stripe integration, tiered plans with revenue caps on entry tiers. $49/mo for up to $10k tracked revenue. Scales up quickly. Good for established programs.",
          },
          {
            h3: "Tolt — $29+/mo",
            p: "Stripe-native with branded affiliate portal. Starter $29/mo with $2k revenue cap. Clean UI, popular on Indie Hackers. Still a monthly fee before affiliates convert.",
          },
          {
            h3: "Komissio — $49/mo flat",
            p: "Built specifically as a Rewardful alternative with zero revenue share. $49/mo flat regardless of affiliate volume. Good if you're already doing $5k+/mo in affiliate sales.",
          },
          {
            h3: "Affiliate Pulse — $29/mo flat",
            p: "Built for indie hackers: create affiliate programs, generate tracking links, see clicks/conversions/commission owed. Stripe metadata attribution. 5 free programs, then $29/mo unlimited. Zero revenue share.",
            link: { href: "/dashboard", text: "Create affiliate program free", suffix: " — five programs, no credit card." },
          },
        ],
      },
      {
        h2: "How Stripe-native affiliate tracking works",
        paragraphs: [
          "The best indie affiliate tools don't use pixels or JavaScript SDKs. They read Stripe charge metadata. When a customer pays, the charge includes a referral code in metadata. The tracking tool matches the code to an affiliate and calculates commission.",
          "This approach is ad-blocker safe, privacy-friendly, and works with any Stripe Checkout or Payment Element integration. No third-party cookies. No fragile client-side tracking.",
          "The indie workflow: create an affiliate with a commission rate, share their unique tracking link (/r/their-code), when someone clicks and later pays via Stripe with that referral code, the conversion is attributed automatically.",
        ],
      },
      {
        h2: "Launch your affiliate program in 15 minutes",
        paragraphs: ["The fastest indie affiliate setup:"],
        ordered: [
          "Pick your commission rate — 20% recurring is standard for SaaS",
          "Create affiliate programs with name, product URL, and rate",
          "Share unique tracking links with your affiliates",
          "Add Stripe metadata snippet to your checkout (one line of code)",
          "Check the dashboard monthly for commission owed, pay via Stripe/PayPal/Wise",
        ],
        afterLink: {
          href: "/dashboard",
          label: "Affiliate Pulse",
          prefix: "Use ",
          suffix: " to create your first affiliate program in under a minute. Five free programs, no credit card.",
        },
      },
      {
        h2: "The 9% revenue share math that kills indie margins",
        paragraphs: [
          "Rewardful Growth: $49/mo + 9% of affiliate revenue.",
          "At $1,000/mo affiliate sales: $49 + $90 = $139/mo total.",
          "At $5,000/mo affiliate sales: $49 + $450 = $499/mo total.",
          "At $10,000/mo affiliate sales: $49 + $900 = $949/mo total.",
          "Affiliate Pulse: $29/mo flat. Whether affiliates drive $1,000 or $100,000, you pay $29.",
          "For bootstrapped founders with early affiliate programs doing $500–5,000/mo, the savings are $100–500/month — money that should go to product development, not affiliate software markup.",
        ],
        after: [
          "Ready to try? Create 5 affiliate programs free, share tracking links with your first affiliates, and upgrade only when you need unlimited programs.",
        ],
      },
    ],
    cta: {
      title: "Create affiliate programs free",
      subtitle: "5 free programs · Stripe tracking · $29/mo unlimited",
      button: "Open dashboard →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Rewardful 平替指南 — 联盟追踪选型",
      description:
        "Rewardful 收 $49/月加联盟收入 9%。对比 Stripe 原生联盟工具，找到 $29/月一口价、零收入分成的独立开发者方案。",
    },
    h1: "2026 独立开发者 Rewardful 平替：联盟追踪选型指南",
    updated: "更新于 2026 年 7 月 · 阅读约 12 分钟",
    intro: [
      "你上线了一个 SaaS 产品。早期用户很喜欢。有几位问：「有联盟计划吗？我想推广。」你说有 — 然后发现联盟追踪软件比你的 MRR 还贵。",
      "Rewardful 是 Stripe 系 SaaS 的默认选择。连接 Stripe、生成联盟链接、追踪转化、支付佣金。产品扎实。但定价模式惩罚增长：$49/月基础费加联盟销售额的 9%。联盟月收入 $10000 时，你当月付 Rewardful $949。买软件。",
      "替代品出现了：Komissio $49 一口价（无收入分成）、Affilut $19/月、Refgrow $29/月、Referralful 按打款量计费。都比 9% 分成好 — 但在联盟带来第一笔销售前仍要 $19–49/月。",
      "在 Indie Hackers 和 r/SaaS 上，创始人反复问：「最便宜的 Stripe 联盟追踪工具是什么？」还有人写：「我只想知道月底该付每位联盟伙伴多少 — Rewardful 的 9% 抽成像是对自己增长的税。」如果这像你说的，这篇指南就是为你写的。",
      "本指南说明 Stripe 原生联盟追踪如何工作、对比 2026 年适合自举创始人的工具，并展示如何 15 分钟内以 $29/月零收入分成上线联盟计划。",
    ],
    sections: [
      {
        h2: "为什么独立 SaaS 创始人需要联盟追踪",
        paragraphs: ["联盟计划是早期 SaaS 最便宜的获客渠道："],
        list: [
          "仅按转化付费 — 无前期广告支出",
          "联盟伙伴从其受众带来温流量",
          "循环佣金与订阅产品利益一致",
          "规模化口碑 — 博主、YouTuber、通讯作者",
        ],
        after: [
          "问题不是运营联盟计划。问题是追踪谁推荐了谁、准确计算佣金，以及在不花 $500/月买还在收入上抽 9% 的软件的情况下打款。",
        ],
      },
      {
        h2: "2026 联盟追踪工具对比",
        tools: [
          {
            h3: "Rewardful — $49/月 + 9% 收入分成",
            p: "Stripe 原生标准。界面清爽、支持循环佣金、PayPal/Wise 打款。成长版 $49/月加联盟收入 9%。联盟月销 $50k 时总计 $4549/月。好产品，增长税太贵。",
          },
          {
            h3: "FirstPromoter — $49+/月",
            p: "类似 Stripe 集成，入门档有收入上限。$49/月追踪最高 $10k 收入。规模上去很快。适合成熟计划。",
          },
          {
            h3: "Tolt — $29+/月",
            p: "Stripe 原生带品牌联盟门户。入门 $29/月上限 $2k 收入。界面清爽，Indie Hackers 上流行。联盟转化前仍有月费。",
          },
          {
            h3: "Komissio — $49/月 一口价",
            p: "专为替代 Rewardful 打造，零收入分成。联盟量多大都 $49/月。联盟月销已 $5k+ 时不错。",
          },
          {
            h3: "联盟追踪平替 — $29/月 一口价",
            p: "为独立开发者打造：创建联盟计划、生成追踪链接、查看点击/转化/应付佣金。Stripe 元数据归因。免费 5 个计划，之后 $29/月不限量。零收入分成。",
            link: { href: "/dashboard", text: "免费创建联盟计划", suffix: " — 五个计划，无需信用卡。" },
          },
        ],
      },
      {
        h2: "Stripe 原生联盟追踪如何工作",
        paragraphs: [
          "最好的 indie 联盟工具不用像素或 JavaScript SDK。它们读取 Stripe 扣款元数据。客户付款时，扣款元数据含推荐码。追踪工具将代码匹配到联盟伙伴并计算佣金。",
          "这种方式防广告拦截、隐私友好，适用于任何 Stripe Checkout 或 Payment Element 集成。无第三方 Cookie，无脆弱的客户端追踪。",
          "indie 工作流：创建带佣金比例的联盟伙伴、分享唯一追踪链接（/r/专属代码）、有人点击后通过带该推荐码的 Stripe 付款时，转化自动归因。",
        ],
      },
      {
        h2: "15 分钟上线联盟计划",
        paragraphs: ["最快的 indie 联盟设置："],
        ordered: [
          "选定佣金比例 — SaaS 常见 20% 循环",
          "用名称、产品链接和比例创建联盟计划",
          "将唯一追踪链接分享给联盟伙伴",
          "在结账加入 Stripe 元数据片段（一行代码）",
          "每月查看看板应付佣金，通过 Stripe/PayPal/Wise 打款",
        ],
        afterLink: {
          href: "/dashboard",
          label: "联盟追踪平替",
          prefix: "用",
          suffix: "一分钟内创建第一个联盟计划。免费 5 个，无需信用卡。",
        },
      },
      {
        h2: "扼杀 indie 利润的 9% 分成账",
        paragraphs: [
          "Rewardful 成长版：$49/月 + 联盟收入 9%。",
          "联盟月销 $1000：$49 + $90 = 总计 $139/月。",
          "联盟月销 $5000：$49 + $450 = 总计 $499/月。",
          "联盟月销 $10000：$49 + $900 = 总计 $949/月。",
          "联盟追踪平替：$29/月 一口价。联盟带来 $1000 还是 $100000，你都付 $29。",
          "对早期联盟月销 $500–5000 的自举创始人，每月省 $100–500 — 这些钱应投入产品开发，而非联盟软件加价。",
        ],
        after: [
          "准备好试试？免费创建 5 个联盟计划，把追踪链接分享给首批联盟伙伴，需要无限计划时再升级。",
        ],
      },
    ],
    cta: {
      title: "免费创建联盟计划",
      subtitle: "免费 5 个计划 · Stripe 追踪 · $29/月 不限量",
      button: "打开控制台 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
