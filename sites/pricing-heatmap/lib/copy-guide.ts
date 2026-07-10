import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 AI Pricing Page Optimization Guide for Indie Hackers",
      description:
        "85% of visitors leave your pricing page without buying. Compare Hotjar, Evelance, and PriceDiagnose. Learn conversion diagnosis, layout diagnosis, and A/B playbook at $29/mo.",
    },
    h1: "2026 AI Pricing Page Optimization Guide for Indie Hackers",
    updated: "Updated June 2026 · 14 min read",
    intro: [
      "You built a SaaS. Traffic is coming — 200 visitors a week from Product Hunt, Twitter, and SEO. Your landing page converts at 4%. But when those visitors hit /pricing, 85% leave without clicking Subscribe. You have no idea whether they bounced at the tier comparison, the annual toggle, or the checkout button.",
      "Pricing page conversion is the highest-leverage metric for indie hackers. A 2% improvement on a page that gets 1,000 visits/month can mean 20 extra customers — without spending a dollar on ads. The problem? Hotjar charges $500+ per pricing page test. Evelance and PriceDiagnose start at $49–149/mo. Enterprise UX research is priced for funded teams, not solo founders.",
      "On Indie Hackers, founders repeatedly post: \"I know my pricing copy is weak, but I can't justify $500 on Hotjar when I have 50 paying customers.\" Another wrote: \"AI rewrote my headline from feature-first to outcome-first and conversion jumped 23%. Wish I'd diagnosed sooner.\"",
      "This guide explains why pricing pages leak visitors, how conversion diagnosis and layout diagnosis help without enterprise budgets, how to prioritize fixes by revenue impact, and how to run your first AI optimization in under 5 minutes.",
    ],
    sections: [
      {
        h2: "Why 85% of pricing page visitors don't buy",
        paragraphs: [
          "The pricing page is where intent meets friction. Visitors who reach /pricing are already interested — they read your landing page, maybe tried your product. But pricing introduces new cognitive load: tier comparison, annual vs monthly math, feature gates, and the psychological moment of pulling out a credit card.",
          "Common leak points indie hackers miss: no recommended tier badge (visitors freeze on choice), annual savings hidden behind a toggle, weak social proof above the fold, CTA copy that sounds like commitment ('Subscribe now') instead of low-risk entry ('Start free — no card'), and FAQ sections buried below the fold where anxious buyers never scroll.",
        ],
        list: [
          "Choice paralysis: 3+ tiers without a 'Recommended' badge drops selection rate 30–50%",
          "Annual toggle hidden: default monthly means leaving 15–20% ARR on the table",
          "Weak CTA: 'Get started' converts worse than 'Start free — no card required'",
          "Missing trust signals: no refund guarantee, payment icons, or customer count near checkout",
          "Scroll depth failure: pricing tiers below fold on mobile lose 40%+ of visitors",
        ],
        after: [
          "At indie scale (50–500 paying customers), you don't need session replay of every visitor. You need: which sections get attention, where drop-off happens, and 3 concrete A/B test ideas you can ship this week.",
        ],
      },
      {
        h2: "2026 AI pricing page tools compared",
        tools: [
          {
            h3: "Hotjar — $500+/test",
            p: "B2B pricing page testing with verified buyers. Excellent for funded teams validating ICP messaging. Overkill for solo founders who need copy rewrites this afternoon, not in 48 hours.",
          },
          {
            h3: "PriceDiagnose — $49+/mo",
            p: "Stripe-connected price A/B experiments. Great when you have traffic to split. Less helpful when your problem is copy and layout, not price points.",
          },
          {
            h3: "VWO — $198+/mo",
            p: "Full experimentation platform with A/B testing, multivariate, and personalization. Powerful for funded startups. A non-starter for bootstrapped devs testing one pricing headline.",
          },
          {
            h3: "Indie Pricing Heatmap — $29/mo flat",
            p: "Built for indie hackers: paste your /pricing URL, get conversion diagnosis with rationale, layout diagnosis with severity scores, and A/B playbook with expected lift. 5 free diagnoses, no SDK install.",
            link: { href: "/diagnose", text: "Diagnose my pricing page", suffix: " — five free scans, no credit card." },
          },
        ],
      },
      {
        h2: "What to measure on your pricing page",
        paragraphs: [
          "Before installing any tool, define your pricing funnel in 4 steps: (1) Land on /pricing, (2) Scroll to tier section, (3) Select a tier or click CTA, (4) Complete checkout. Measure drop-off between each step.",
          "Attention heatmap zones tell you which blocks earn eyeballs. High attention + high drop-off = fix priority #1. Low attention on social proof = move testimonials above tiers.",
        ],
        ordered: [
          "Paste your /pricing URL into an audit tool",
          "Review heatmap zones: hero, tiers, FAQ, CTA, social proof",
          "Identify the highest drop-off step (usually tier selection or checkout click)",
          "Apply the top A/B suggestion (CTA copy or recommended badge)",
          "Re-audit after 2 weeks of traffic to measure improvement",
        ],
      },
      {
        h2: "Quick wins that move conversion 10–20%",
        paragraphs: [
          "These fixes cost zero engineering time and show up in almost every indie pricing page audit:",
        ],
        list: [
          "Add 'Recommended' badge on your middle tier — reduces choice paralysis",
          "Change primary CTA from 'Get started' to 'Start free — no card required'",
          "Show annual price with savings % by default, not hidden behind toggle",
          "Add '2,400+ founders subscribed' or real testimonial above pricing cards",
          "Place money-back guarantee and Stripe/payment icons directly above CTA button",
        ],
        after: [
          "One solo founder on Indie Hackers reported going from 1.9% to 3.4% pricing conversion in 10 days — just from CTA copy and a recommended tier badge. No redesign, no new features.",
        ],
      },
      {
        h2: "How to run your first audit in 5 minutes",
        paragraphs: [
          "You don't need a week of setup. Open Indie Pricing Heatmap, paste your live /pricing URL, and review the generated report: conversion score (0–100), estimated conversion rate, heatmap zones with risk levels, drop-off points with fix suggestions, and A/B copy swaps with expected lift ranges.",
          "Start with the highest-risk zone (usually pricing tiers or CTA). Ship one fix. If you run A/B tests, pair the audit suggestions with a split testing tool. Re-audit monthly as you iterate tiers and pricing.",
        ],
        afterLink: {
          href: "/diagnose",
          label: "Indie Pricing Heatmap",
          prefix: "Use ",
          suffix: " to audit your pricing page in under 2 minutes. Five free scans, no credit card.",
        },
      },
      {
        h2: "SEO and distribution for pricing page tools",
        paragraphs: [
          "Long-tail content like \"Hotjar alternative indie hacker\" and \"pricing page conversion audit\" ranks within 1–3 months on a custom domain. Submit your sitemap to Google Search Console.",
          "Distribution channels: Product Hunt launch, Hacker News Show HN, Reddit r/SideProject and r/SaaS, Twitter/X thread on your audit results, Indie Hackers milestone post.",
        ],
      },
      {
        h2: "Summary",
        closingLink: {
          href: "/join",
          label: "try Indie Pricing Heatmap free",
          prefix: "Hotjar is built for teams with dedicated UX researchers. If you need heatmap zones, drop-off analysis, and $29/mo flat pricing, ",
          suffix: ". Five free audits, no credit card. Stop guessing — start diagnosing.",
        },
      },
    ],
    cta: {
      title: "Ready to find where your pricing page leaks?",
      subtitle: "5 free audits · then $29/mo for unlimited scans",
      button: "Audit my pricing page",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者定价页转化诊断指南",
      description:
        "85% 访客离开定价页未购买。对比 Hotjar、Crazy Egg、VWO 定价页诊断工具。学习热力图分析、流失修复与 A/B 测试建议，$29/月一口价。",
    },
    h1: "2026 独立开发者定价页转化诊断指南",
    updated: "更新于 2026 年 6 月 · 阅读约 14 分钟",
    intro: [
      "你做了一个 SaaS。流量来了 — 每周 200 访客来自 Product Hunt、推特和 SEO。落地页转化率 4%。但访客进入 /pricing 后，85% 没点订阅就离开了。你不知道他们是卡在档位对比、年付切换，还是结账按钮。",
      "定价页转化是独立开发者杠杆最高的指标。一个每月 1000 访客的页面，转化率提升 2% 就意味着每月多 20 个客户 — 不用多花一分广告费。问题是？Hotjar 热力图要 $39/月。Crazy Egg 从 $29/月起。VWO A/B 测试要 $198/月。FullStory 等会话回放工具更贵。",
      "Indie Hackers 上创始人经常发帖：「我知道定价页在漏水，但只有 50 个付费客户，没法 justify $39/月的 Hotjar。」还有人写：「把行动按钮从『立即开始』改成『免费开始 — 无需信用卡』，转化率涨了 18%。早知道早点诊断。」",
      "本指南解释定价页为何流失访客、不用企业工具该量什么、如何按收入影响排优先级，以及如何在 5 分钟内完成第一次定价页诊断。",
    ],
    sections: [
      {
        h2: "为什么 85% 定价页访客不买",
        paragraphs: [
          "定价页是意向与阻力的交汇点。能到 /pricing 的访客已经有兴趣 — 他们看过落地页，可能试过产品。但定价带来新的认知负担：档位对比、年付月付计算、功能门控，以及掏出信用卡的心理门槛。",
          "独立开发者常忽略的漏点：没有推荐档位角标（访客在选择上卡住）、年付节省藏在切换按钮后、首屏上方社会证明薄弱、行动按钮文案像承诺（「立即订阅」）而非低风险入口（「免费开始 — 无需信用卡」）、常见问题折叠在首屏以下焦虑买家看不到。",
        ],
        list: [
          "选择瘫痪：3 个以上档位无「推荐」角标，选择率降 30–50%",
          "年付切换隐藏：默认月付意味着少拿 15–20% 年收入",
          "薄弱行动按钮：「立即开始」不如「免费开始 — 无需信用卡」",
          "缺少信任信号：结账旁无退款保证、支付图标或客户数量",
          "滚动深度失败：移动端定价档位在首屏以下流失 40%+ 访客",
        ],
        after: [
          "在独立站规模（50–500 付费客户），你不需要回放每个访客的会话。你需要：哪些区块获得注意力、流失发生在哪、以及本周能上线的 3 条 A/B 测试建议。",
        ],
      },
      {
        h2: "2026 定价页诊断工具对比",
        tools: [
          {
            h3: "Hotjar — $39+/月",
            p: "行业标配热力图与会话录制。适合有专职增长团队的团队。对只想知道 /pricing 为何只有 1.8% 而非 3% 转化的一人创始人来说太重。按日会话量计费。",
          },
          {
            h3: "Crazy Egg — $29+/月",
            p: "滚动图与点击热力图，侧重布局诊断。适合内容站，对 SaaS 档位对比模式针对性弱。无内置 A/B 测试建议。",
          },
          {
            h3: "VWO — $198+/月",
            p: "完整实验平台：A/B、多变量、个性化。资金充裕的创业公司利器。对自举开发者测一个定价标题来说门槛太高。",
          },
          {
            h3: "Indie Pricing Heatmap — $29/月一口价",
            p: "为独立开发者打造：粘贴 /pricing 链接，获取注意力热力图分区、流失漏斗分析与文案级 A/B 建议（含预期提升）。免费 5 次，无需 SDK，无会话回放臃肿功能。",
            link: { href: "/diagnose", text: "诊断我的定价页", suffix: " — 免费 5 次，无需信用卡。" },
          },
        ],
      },
      {
        h2: "定价页该量什么",
        paragraphs: [
          "装任何工具前，先把定价漏斗定义为 4 步：（1）进入 /pricing，（2）滚动到档位区，（3）选择档位或点击行动按钮，（4）完成结账。量每一步之间的流失。",
          "注意力热力图分区告诉你哪些区块获得目光。高注意力 + 高流失 = 优先修复 #1。社会证明注意力低 = 把证言移到档位上方。",
        ],
        ordered: [
          "把 /pricing 链接粘贴到诊断工具",
          "查看热力图分区：首屏、档位、常见问题、行动按钮、社会证明",
          "找出流失最高的步骤（通常是选档位或点结账）",
          "落地排名最高的 A/B 建议（行动按钮文案或推荐角标）",
          "两周流量后重新诊断，衡量改善",
        ],
      },
      {
        h2: "能拉动 10–20% 转化的快速修复",
        paragraphs: ["以下修复零工程成本，几乎每次独立站定价页诊断都会出现："],
        list: [
          "中间档位加「推荐」角标 — 减少选择瘫痪",
          "主行动按钮从「立即开始」改为「免费开始 — 无需信用卡」",
          "默认展示年付价格与节省百分比，不要藏在切换后",
          "在定价卡片上方加「2,400+ 创始人已订阅」或真实证言",
          "行动按钮正上方放退款保证与 Stripe/支付图标",
        ],
        after: [
          "Indie Hackers 上一位创始人报告 10 天内定价转化从 1.9% 升到 3.4% — 只靠行动按钮文案和推荐档位角标。没有改版，没有新功能。",
        ],
      },
      {
        h2: "5 分钟完成第一次诊断",
        paragraphs: [
          "不需要一周部署。打开 Indie Pricing Heatmap，粘贴线上 /pricing 链接，查看生成的报告：转化评分（0–100）、预估转化率、带风险等级的热力图分区、带修复建议的流失节点、以及带预期提升区间的 A/B 文案替换方案。",
          "从最高风险分区开始（通常是定价档位或行动按钮）。上线一个修复。若做 A/B 测试，把诊断建议与分流工具配合。每月重新诊断，随档位与定价迭代。",
        ],
        afterLink: {
          href: "/diagnose",
          label: "Indie Pricing Heatmap",
          prefix: "用",
          suffix: "两分钟内完成定价页诊断，免费 5 次，无需信用卡。",
        },
      },
      {
        h2: "定价页工具的 SEO 与分发",
        paragraphs: [
          "「Hotjar 替代品 独立开发者」「定价页转化诊断」等长尾词在自定义域名下 1–3 个月可排名。向 Google Search Console 提交 sitemap。",
          "分发渠道：Product Hunt 发布、Hacker News Show HN、Reddit r/SideProject 和 r/SaaS、推特分享诊断结果、Indie Hackers 里程碑帖。",
        ],
      },
      {
        h2: "总结",
        closingLink: {
          href: "/join",
          label: "免费试用 Indie Pricing Heatmap",
          prefix: "Hotjar 面向有专职 UX 研究员的团队。若你需要热力图分区、流失分析与 $29/月 一口价，可",
          suffix: "。免费 5 次诊断，无需信用卡。别再猜 — 开始诊断。",
        },
      },
    ],
    cta: {
      title: "准备好找出定价页漏水点了吗？",
      subtitle: "免费 5 次诊断 · 之后 $29/月 不限次数",
      button: "诊断我的定价页",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
