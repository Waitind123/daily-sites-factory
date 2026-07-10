import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 AI Funnel Diagnosis Guide — Mixpanel Alternative for Indie Hackers",
      description:
        "Mixpanel shows drop-off charts but not what to fix. Learn how AI funnel diagnosis helps indie SaaS founders find conversion leaks and get prioritized fix suggestions for $9.9/mo.",
    },
    h1: "2026 AI Funnel Diagnosis: Mixpanel Alternative for Indie Hackers",
    updated: "Updated July 2026 · 10 min read",
    intro: [
      "You have funnel data. Landing → Signup → Activation → Payment. Mixpanel shows you a beautiful chart with 50% drop-off at email verification. Now what? Which fix should you ship first? How much uplift can you expect?",
      "This is the gap between analytics and action. Mixpanel costs $500/month and tells you WHERE users drop off. It doesn't tell you WHY or WHAT to fix. Amplitude is similar. Plausible has no funnels at all.",
      "On Indie Hackers, founders post: \"85% of visitors leave our pricing page without buying — sharing our raw funnel data.\" Another wrote: \"Mixpanel was overkill. Plausible had no funnels. So I built my own.\" The missing piece? AI-powered diagnosis that turns raw funnel numbers into a prioritized fix plan.",
      "This guide explains why indie hackers need AI funnel diagnosis (not just charts), how it compares to Mixpanel/Amplitude/Plausible, and how to fix your biggest conversion leak in under an hour.",
    ],
    sections: [
      {
        h2: "Why charts aren't enough",
        paragraphs: [
          "Knowing that 50% of users drop off at email verification is step one. Step two — the hard part — is deciding between magic-link auth, resend buttons, SMS verification, or simplifying the form. Wrong choice wastes a week of dev time.",
          "AI funnel diagnosis analyzes step names, drop-off patterns, and industry benchmarks to suggest the highest-impact fixes first. Not generic advice — specific actions ranked by estimated revenue uplift.",
        ],
        list: [
          "Identify the single step costing you the most revenue",
          "Get 5 prioritized fix suggestions with estimated uplift",
          "Ship one fix per week instead of guessing",
          "Measure before/after with the same funnel data",
        ],
        after: [
          "The indie hacker workflow: paste funnel data every Monday, get AI diagnosis, ship the #1 high-priority fix, re-measure next week. Compound improvements beat one big redesign.",
        ],
      },
      {
        h2: "2026 funnel tools compared",
        tools: [
          {
            h3: "Mixpanel — $500+/mo",
            p: "Powerful funnels and cohort analysis for growth teams. Shows drop-off charts but no fix suggestions. Overkill for solo founders with 200 users.",
          },
          {
            h3: "Amplitude — $49+/mo (scales fast)",
            p: "Strong behavioral analytics. Great visualization, no AI diagnosis or fix prioritization. Bill grows with MAU.",
          },
          {
            h3: "Plausible — $9/mo (no funnels)",
            p: "Privacy-friendly traffic analytics. No funnel tracking, no drop-off analysis, no fix suggestions.",
          },
          {
            h3: "AI Funnel Diagnosis — $9.9/mo flat",
            p: "Paste funnel steps + user counts, get instant AI analysis with prioritized fix plan. 5 free diagnoses, then $9.9/mo unlimited. Built for indie hackers who want action, not dashboards.",
            link: { href: "/diagnose", text: "Run free AI diagnosis", suffix: " — five diagnoses, no credit card." },
          },
        ],
      },
      {
        h2: "How AI funnel diagnosis works",
        paragraphs: ["Three steps from data to fix plan:"],
        ordered: [
          "Enter funnel name, step names, and user counts per step",
          "AI engine identifies the biggest leak and analyzes step patterns",
          "Receive 5 prioritized fix suggestions with estimated uplift percentages",
        ],
        after: [
          "The AI uses pattern matching on step names (email, signup, payment, onboarding) combined with drop-off severity to generate context-specific recommendations. No external API needed — instant results.",
        ],
        afterLink: {
          href: "/diagnose",
          label: "AI Funnel Diagnosis",
          prefix: "Try ",
          suffix: " — paste your funnel data and get a fix plan in 60 seconds. Five free diagnoses, no credit card.",
        },
      },
      {
        h2: "Real example: 62% email verification leak",
        paragraphs: [
          "An indie hacker pasted their SaaS signup funnel: 2,400 landing → 1,680 signup → 840 verified → 672 activated → 336 paid. AI diagnosis flagged email verification as the critical leak (50% drop-off).",
          "Top suggestions: switch to magic-link auth (25–45% fewer drop-offs), add resend + 10-minute reminder (15–25% recovery), A/B test simplified verify flow. They shipped magic-link in one afternoon. Overall conversion doubled.",
          "Same data Mixpanel would show as a chart — but with a fix plan attached.",
        ],
      },
      {
        h2: "SEO and distribution",
        paragraphs: [
          "Long-tail keywords like \"AI funnel diagnosis\" and \"Mixpanel alternative indie hacker\" rank within 1–3 months. Submit sitemap to Google Search Console.",
          "Distribution: Product Hunt, Hacker News Show HN, Reddit r/SideProject and r/SaaS, Twitter/X thread with your first AI diagnosis insight, Indie Hackers milestone post.",
        ],
      },
      {
        h2: "Summary",
        closingLink: {
          href: "/join",
          label: "try AI Funnel Diagnosis free",
          prefix: "Mixpanel tells you where users leave. AI Funnel Diagnosis tells you what to fix first. ",
          suffix: ". Five free diagnoses, no credit card. Stop staring at charts — start shipping fixes.",
        },
      },
    ],
    cta: {
      title: "Ready for your AI diagnosis?",
      subtitle: "5 free diagnoses · unlimited after subscribe",
      button: "Diagnose my funnel free",
    },
  },
  zh: {
    meta: {
      title: "2026 AI 漏斗诊断指南 — 独立开发者 Mixpanel 替代品",
      description:
        "Mixpanel 只显示流失图表，不告诉你怎么修。了解 AI 漏斗诊断如何帮助独立 SaaS 创始人找到转化漏洞并获得优先级修复建议，$9.9/月。",
    },
    h1: "2026 AI 漏斗诊断：独立开发者 Mixpanel 替代品指南",
    updated: "更新于 2026 年 7 月 · 阅读约 10 分钟",
    intro: [
      "你有漏斗数据。落地页 → 注册 → 激活 → 付费。Mixpanel 给你一张漂亮的图表，显示邮件验证步骤 50% 流失。然后呢？应该先修什么？预期提升多少？",
      "这就是分析与行动之间的鸿沟。Mixpanel 要 $500/月，告诉你用户在哪流失，但不告诉你为什么、该修什么。Amplitude 类似。Plausible 根本没有漏斗功能。",
      "Indie Hackers 上经常有创始人发帖：「85% 访客离开定价页未购买 — 分享原始漏斗数据。」还有人说：「Mixpanel 太重，Plausible 没有漏斗，所以我自己做了一个。」缺失的一环？把原始漏斗数字变成优先级修复方案的 AI 诊断。",
      "本指南解释为什么独立开发者需要 AI 漏斗诊断（不只是图表），与 Mixpanel/Amplitude/Plausible 的对比，以及如何在 1 小时内修复最大转化漏洞。",
    ],
    sections: [
      {
        h2: "为什么图表不够",
        paragraphs: [
          "知道 50% 用户在邮件验证步骤流失是第一步。第二步 — 也是最难的 — 是在 Magic Link、重发按钮、短信验证和简化表单之间做选择。选错了就浪费一周开发时间。",
          "AI 漏斗诊断分析步骤名称、流失模式和行业基准，优先推荐影响最大的修复方案。不是泛泛建议 — 是按预估收入提升排序的具体行动。",
        ],
        list: [
          "定位损失最多收入的单个步骤",
          "获得 5 条带预估提升的优先级修复建议",
          "每周上线一个修复，而不是靠猜测",
          "用相同漏斗数据测量修复前后效果",
        ],
        after: [
          "独立开发者工作流：每周一粘贴漏斗数据，获得 AI 诊断，上线 #1 高优先级修复，下周重新测量。复利式改进胜过一次性大改版。",
        ],
      },
      {
        h2: "2026 年漏斗工具对比",
        tools: [
          {
            h3: "Mixpanel — $500+/月",
            p: "面向增长团队的强大漏斗和队列分析。显示流失图表但没有修复建议。对 200 用户的独立开发者来说太重。",
          },
          {
            h3: "Amplitude — $49+/月（涨得快）",
            p: "强大的行为分析，可视化优秀，无 AI 诊断或修复优先级。账单随 MAU 增长。",
          },
          {
            h3: "Plausible — $9/月（无漏斗）",
            p: "注重隐私的流量分析。无漏斗追踪、无流失分析、无修复建议。",
          },
          {
            h3: "AI 漏斗诊断 — $9.9/月 一口价",
            p: "粘贴漏斗步骤 + 用户数量，获得即时 AI 分析和优先级修复方案。免费 5 次诊断，之后 $9.9/月 不限量。为想要行动而非仪表盘的独立开发者打造。",
            link: { href: "/diagnose", text: "免费运行 AI 诊断", suffix: " — 五次诊断，无需信用卡。" },
          },
        ],
      },
      {
        h2: "AI 漏斗诊断如何工作",
        paragraphs: ["从数据到修复方案三步走："],
        ordered: [
          "输入漏斗名称、步骤名称和每步用户数量",
          "AI 引擎识别最大漏洞并分析步骤模式",
          "获得 5 条带预估提升百分比的优先级修复建议",
        ],
        after: [
          "AI 对步骤名称（邮件、注册、支付、引导）进行模式匹配，结合流失严重程度生成上下文相关的建议。无需外部 API — 即时出结果。",
        ],
        afterLink: {
          href: "/diagnose",
          label: "AI 漏斗诊断",
          prefix: "试试",
          suffix: " — 粘贴漏斗数据，60 秒获得修复方案。免费 5 次诊断，无需信用卡。",
        },
      },
      {
        h2: "真实案例：62% 邮件验证流失",
        paragraphs: [
          "一位独立开发者粘贴 SaaS 注册漏斗：2,400 落地 → 1,680 注册 → 840 验证 → 672 激活 → 336 付费。AI 诊断标记邮件验证为严重漏洞（50% 流失）。",
          "优先建议：改用 Magic Link 无密码登录（流失减少 25–45%）、添加重发 + 10 分钟提醒（恢复 15–25%）、A/B 测试简化验证流程。一个下午上线 Magic Link，总转化率翻倍。",
          "Mixpanel 会显示的同样数据 — 但附带了修复方案。",
        ],
      },
      {
        h2: "SEO 与分发",
        paragraphs: [
          "「AI 漏斗诊断」「Mixpanel 替代品 独立开发者」等长尾词 1–3 个月可排名。向 Google Search Console 提交 sitemap。",
          "分发渠道：Product Hunt、Hacker News Show HN、Reddit r/SideProject 和 r/SaaS、推特分享首个 AI 诊断洞察、Indie Hackers 里程碑帖。",
        ],
      },
      {
        h2: "总结",
        closingLink: {
          href: "/join",
          label: "免费试用 AI 漏斗诊断",
          prefix: "Mixpanel 告诉你用户在哪离开。AI 漏斗诊断告诉你先修什么。",
          suffix: "。免费 5 次诊断，无需信用卡。别只盯着图表 — 开始上线修复。",
        },
      },
    ],
    cta: {
      title: "准备好 AI 诊断了吗？",
      subtitle: "免费 5 次诊断 · 订阅后不限量",
      button: "免费诊断我的漏斗",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
