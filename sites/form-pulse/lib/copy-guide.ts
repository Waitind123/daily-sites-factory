import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Typeform Alternative for Indie Hackers — Form Builder Guide",
      description:
        "Typeform free tier caps at 10 responses/month. Compare form builders for indie SaaS. Find a $29/mo flat-rate alternative with drop-off analytics and unlimited submissions.",
    },
    h1: "2026 Typeform Alternative for Indie Hackers: Form Builder Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "You need customer feedback, onboarding surveys, or lead capture forms. Google Forms works but looks unprofessional. Typeform looks great — until you hit the free tier cap of 10 responses per month on day one of your launch.",
      "Form builders solve this: one-question-at-a-time UX that converts better than long forms, drop-off analytics showing exactly where people quit, and shareable links or embed widgets for your landing page.",
      "The problem? Typeform Basic starts at $39/month for just 100 responses. Plus plan is $79/month. For a solo founder collecting 200 survey responses after a Product Hunt launch, that's real money.",
      "On r/SaaS and Indie Hackers, founders repeatedly ask: \"What's the cheapest Typeform alternative that doesn't cap responses?\" Another wrote: \"I got 50 signups on launch day and Typeform blocked me — need unlimited for under $20/mo.\" If that sounds like you, this guide is for you.",
      "This guide compares 2026 form builders for solo founders, what actually matters at indie scale, and how to pick a tool that won't punish traction with per-response pricing.",
    ],
    sections: [
      {
        h2: "Why indie hackers need a proper form builder",
        paragraphs: ["A dedicated form tool does three things Google Forms cannot:"],
        list: [
          "Higher completion rates — one question at a time feels conversational, not like homework",
          "Drop-off analytics — see which question loses 40% of respondents and fix it",
          "Professional embed — dark-themed, on-brand forms that match your landing page",
        ],
        after: [
          "The classic indie stack: create a feedback form, embed on your landing page, share after launch on Twitter, export responses to CSV. You don't need enterprise logic branching or 50 integrations in week one. You need: unlimited responses, drop-off data, and flat pricing.",
        ],
      },
      {
        h2: "2026 form builders compared",
        tools: [
          {
            h3: "Typeform — $0 free / $39+/mo",
            p: "Beautiful UX, industry standard for conversational forms. Free tier: 10 responses/month. Basic $39/mo for 100 responses. Great for agencies; expensive when you're validating an MVP with real launch traffic.",
          },
          {
            h3: "Google Forms — free",
            p: "Unlimited responses, zero cost. Looks like a school assignment. No drop-off analytics. No embed styling. Fine for internal surveys, not customer-facing feedback.",
          },
          {
            h3: "Tally — free tier / $29/mo",
            p: "Notion-style form builder, generous free tier. Limited drop-off analytics on basic plans. Good for simple contact forms.",
          },
          {
            h3: "Jotform — $34+/mo",
            p: "Feature-rich, 10,000+ templates. Overwhelming UI for solo devs. Per-form limits on lower tiers.",
          },
          {
            h3: "Form Pulse — $29/mo flat",
            p: "Built for indie hackers who want Typeform-style UX without per-response pricing. Unlimited forms, unlimited responses, drop-off analytics per question.",
            link: { href: "/join", text: "5 free forms to try", suffix: ", then $29/mo flat. No annual lock-in." },
          },
        ],
      },
      {
        h2: "What to look for in a form builder",
        paragraphs: ["Before comparing prices, decide what you actually need:"],
        ordered: [
          "One-question-at-a-time flow — higher completion than single-page forms",
          "Drop-off analytics — which step loses people?",
          "Unlimited responses — launch day traffic shouldn't trigger a paywall",
          "Share link + embed — works on landing pages and in emails",
          "Flat pricing — no per-response fees that punish traction",
        ],
        after: [
          "Skip enterprise features you won't use in month one: CRM sync, 50-question logic trees, team workspaces on every tier.",
        ],
      },
      {
        h2: "How to launch your first feedback form in 10 minutes",
        paragraphs: ["The fastest path for a solo founder:"],
        ordered: [
          "Create a form named after your product or survey goal",
          "Write 2-3 questions: motivation, email, open feedback",
          "Share the link on Twitter after launch or embed on your site",
          "Check drop-off analytics after 50 responses — fix the worst step",
          "Export responses and email respondents personally (optional but powerful)",
        ],
        after: [
          "Most founders over-engineer forms before they have users. Start with 3 questions. Add more only when drop-off data tells you to.",
        ],
      },
      {
        h2: "Drop-off analytics: the feature that pays for itself",
        paragraphs: [
          "Here's a real scenario: you launch on Product Hunt, 200 people start your onboarding survey, 80 complete it. Typeform shows you the completion rate. Form Pulse shows you that 45% quit on question 2 — the email field.",
          "Fix: move email to question 3, make question 2 optional. Completion jumps to 65%. That's 30 more email addresses from the same traffic. At indie scale, that's the difference between \"meh launch\" and \"real validation.\"",
          "Drop-off analytics isn't a nice-to-have. It's how you optimize forms without A/B testing infrastructure.",
        ],
      },
      {
        h2: "Pricing math for indie founders",
        paragraphs: [
          "Typeform Basic: $39/mo × 12 = $468/year for 100 responses/month. If you get 500 responses in a launch month, you need Plus at $79/mo = $948/year.",
          "Form Pulse: $29/mo × 12 = $118.80/year, unlimited responses. The break-even vs Typeform free is immediate — you exceed 10 responses on day one.",
          "For bootstrapped founders, flat pricing means predictable costs. You won't wake up to a bill because your launch went viral.",
        ],
        after: [
          "Ready to try? Create your first form free, see drop-off analytics on real responses, and upgrade only when you need unlimited.",
        ],
      },
    ],
    cta: {
      title: "Create your first form free",
      subtitle: "5 free forms · drop-off analytics · $29/mo unlimited",
      button: "Start building →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Typeform 平替指南 — 表单构建器选型",
      description:
        "Typeform 免费版每月仅 10 条回复。对比独立开发者表单工具，找到 $29/月一口价、放弃率分析与无限回复的替代方案。",
    },
    h1: "2026 独立开发者 Typeform 平替：表单构建器选型指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "你需要收集客户反馈、入门问卷或潜客表单。Google 表单能用但显得不专业。Typeform 体验很好 — 直到上线第一天就撞上免费版每月 10 条回复的上限。",
      "专业表单工具解决这个问题：逐题展示提升完成率、放弃率分析精确定位流失步骤、分享链接或嵌入组件适配落地页。",
      "问题在于？Typeform 基础版 $39/月仅 100 条回复，Plus 版 $79/月。对独立开发者在 Product Hunt 发布后收集 200 份问卷，这是一笔不小的开支。",
      "在 r/SaaS 和 Indie Hackers 上，创始人反复问：「有没有不限回复数的便宜 Typeform 替代品？」还有人写道：「上线第一天 50 人填表，Typeform 就封我了 — 需要 $20 以下无限用的工具。」如果这像你说的，这篇指南就是为你写的。",
      "本指南对比 2026 年适合独立开发者的表单工具、在 indie 规模真正重要的功能，以及如何选择不会因按条收费惩罚增长的工具。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要专业表单工具",
        paragraphs: ["专业表单工具能做到 Google 表单做不到的三件事："],
        list: [
          "更高完成率 — 逐题展示像对话，不像做作业",
          "放弃率分析 — 看清哪一题流失 40% 受访者并针对性优化",
          "专业嵌入 — 深色主题、与落地页品牌一致的表单",
        ],
        after: [
          "经典 indie 流程：创建反馈表单、嵌入落地页、上线后在推特分享、导出 CSV。第一周不需要企业级逻辑分支或 50 个集成。你需要的是：无限回复、放弃率数据、一口价。",
        ],
      },
      {
        h2: "2026 表单工具对比",
        tools: [
          {
            h3: "Typeform — 免费 / $39+/月",
            p: "体验一流，对话式表单行业标准。免费版每月 10 条回复。基础版 $39/月 100 条。适合代理商；用真实上线流量验证 MVP 时偏贵。",
          },
          {
            h3: "Google 表单 — 免费",
            p: "无限回复、零成本。看起来像学校作业。无放弃率分析。无嵌入样式。适合内部调研，不适合面向客户的反馈。",
          },
          {
            h3: "Tally — 免费档 / $29/月",
            p: "Notion 风格表单，免费档慷慨。基础版放弃率分析有限。适合简单联系表单。",
          },
          {
            h3: "Jotform — $34+/月",
            p: "功能丰富、模板超万。对独立开发者界面过载。低档有按表单数量限制。",
          },
          {
            h3: "极简表单构建器 — $29/月 一口价",
            p: "为想要 Typeform 体验、不想按条付费的独立开发者打造。无限表单、无限回复、每题放弃率分析。",
            link: { href: "/join", text: "免费体验 5 个表单", suffix: "，之后 $29/月一口价。无年付绑定。" },
          },
        ],
      },
      {
        h2: "选型要看什么",
        paragraphs: ["比价格之前，先想清楚真正需要什么："],
        ordered: [
          "逐题展示流程 — 完成率高于单页长表单",
          "放弃率分析 — 哪一步流失最多？",
          "无限回复 — 上线日流量不应触发付费墙",
          "分享链接 + 嵌入 — 适用于落地页和邮件",
          "一口价 — 不因按条收费惩罚增长",
        ],
        after: [
          "跳过第一个月用不到的企业功能：CRM 同步、50 题逻辑树、每档都有的团队工作区。",
        ],
      },
      {
        h2: "10 分钟上线第一份反馈表单",
        paragraphs: ["独立开发者最快路径："],
        ordered: [
          "创建以产品或调研目标命名的表单",
          "写 2-3 题：动机、邮箱、开放反馈",
          "上线后在推特分享链接，或嵌入网站",
          "50 份回复后查看放弃率 — 优化最差的一题",
          "导出回复并亲自邮件回访（可选但效果很好）",
        ],
        after: [
          "多数创始人在没有用户前就过度设计表单。从 3 题开始。只有放弃率数据提示时才加题。",
        ],
      },
      {
        h2: "放弃率分析：能自证价值的功能",
        paragraphs: [
          "真实场景：你在 Product Hunt 发布，200 人开始填入门问卷，80 人完成。Typeform 只给你完成率。极简表单构建器告诉你 45% 在第 2 题 — 邮箱字段 — 退出。",
          "修复：把邮箱移到第 3 题，第 2 题改为选填。完成率跳到 65%。同样流量多 30 个邮箱。在 indie 规模，这是「平淡发布」和「真正验证」的区别。",
          "放弃率分析不是锦上添花。它是没有 A/B 测试基础设施时优化表单的方式。",
        ],
      },
      {
        h2: "独立开发者的定价账",
        paragraphs: [
          "Typeform 基础版：$39/月 × 12 = $468/年，每月 100 条。上线月若收到 500 条，需要 Plus $79/月 = $948/年。",
          "极简表单构建器：$29/月 × 12 = $118.80/年，无限回复。对比 Typeform 免费版，第一天超过 10 条就回本。",
          "对自举创始人，一口价意味着成本可预测。不会因为发布火了而收到意外账单。",
        ],
        after: [
          "准备好试试？免费创建第一个表单，用真实回复看放弃率分析，需要无限量时再升级。",
        ],
      },
    ],
    cta: {
      title: "免费创建你的第一个表单",
      subtitle: "免费 5 个表单 · 放弃率分析 · $29/月 不限量",
      button: "开始创建 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
