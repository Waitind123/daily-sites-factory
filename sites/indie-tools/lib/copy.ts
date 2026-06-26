import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Product Hunt has 5000 directories · none help you choose · $9.9/mo",
    title: "Curated indie hacker tool reviews — pick your stack in an hour",
    subtitle:
      "40+ hand-picked tools with pricing comparisons, alternatives & setup checklists. 5 free deep reviews, then $9.9/mo.",
    ctaPrimary: "Browse tools free",
    ctaPrimaryHref: "/tools",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free deep reviews · then $9.9/mo",
    stats: [
      { stat: "40+", label: "curated indie tools" },
      { stat: "6", label: "stack categories" },
      { stat: "8.8", label: "avg indie score" },
    ],
    previewTitle: "Top-rated tools",
    previewNote: "Full pricing breakdown, alternatives & setup guides require",
    previewLink: "deep review",
    paymentCompareLabel: "Payments: which to pick?",
    howItWorks: {
      title: "Pick your stack in 3 steps",
      steps: [
        {
          step: "1",
          title: "Filter by category",
          desc: "Payments, email, hosting, auth, analytics, database — find what you need",
        },
        {
          step: "2",
          title: "Read deep reviews",
          desc: "Real pricing, hidden fees, alternatives, pros/cons — not vendor marketing",
        },
        {
          step: "3",
          title: "Copy setup checklist",
          desc: "5-minute integration steps for each tool — ship this weekend",
        },
      ],
    },
    featuresTitle: "Member features",
    features: [
      {
        icon: "🧰",
        title: "40+ curated tools",
        desc: "Only tools indie hackers actually use — not a 5000-link junk directory",
      },
      {
        icon: "💰",
        title: "Real pricing comparison",
        desc: "Actual pricing, hidden fees, free tiers — calculate your MVP cost",
      },
      {
        icon: "🔄",
        title: "Alternatives matrix",
        desc: "Polar vs Stripe vs Lemon Squeezy? We tell you when to pick what",
      },
      {
        icon: "⚡",
        title: "5-minute setup guides",
        desc: "Copy-paste checklists for every tool — no more doc-hopping",
      },
      {
        icon: "📊",
        title: "Indie score 1–10",
        desc: "Community-driven ratings based on real usage — not sponsored posts",
      },
      {
        icon: "🎯",
        title: "Scenario-based picks",
        desc: "\"Charge on day 1?\" \"Best transactional email?\" — direct answers",
      },
    ],
    testimonialsTitle: "What builders say",
    testimonials: [
      {
        name: "Ken",
        role: "Full-stack indie dev",
        text: "Saved a full week researching payment options. The Polar vs LS comparison table made the decision for me.",
      },
      {
        name: "Amy",
        role: "Side-project SaaS founder",
        text: "Too many tool lists, zero depth. Every tool here has a review and setup steps. $9.9 is a steal.",
      },
      {
        name: "Zhou",
        role: "Serial founder",
        text: "Copied the recommended stack for my third product. From zero to first payment in one weekend.",
      },
    ],
    closing: {
      title: "Product Hunt lists tools. We help you choose.",
      subtitle:
        "$9.9/mo flat. Deep reviews + pricing comparisons + alternatives + setup guides. Charge from day 1.",
      ctaPrimary: "Subscribe · $9.9/mo",
      ctaSecondary: "Browse tools free",
    },
    productDemo: {
      title: "Live tool directory preview",
      caption: "Indie score · pricing · alternatives · setup checklist",
      preview:
        "🧰 Indie Tools Stack              40+ tools · 6 categories\n─────────────────────────────────────────────────────\n  💳 Polar          4%+$0.40    MoR · no company needed  ★ 9/10\n  📧 Resend         Free 3K/mo  React Email templates    ★ 9/10\n  ▲  Vercel         Hobby free  git push → deploy        ★ 10/10\n─────────────────────────────────────────────────────\n  Filter: [ Payments ] [ Email ] [ Hosting ]\n  Compare: Polar vs Stripe vs Lemon Squeezy\n─────────────────────────────────────────────────────\n  [ Deep review ]    [ + Compare ]    [ Subscribe ]",
    },
  },
  zh: {
    badge: "Product Hunt 有 5000 个目录 · 没有一个帮你选型 · $9.9/月",
    title: "精选 indie 工具深度评测 — 1 小时定技术栈",
    subtitle:
      "40+ 精选工具，含定价对比、替代方案与接入清单。免费体验 5 次深度评测，之后 $9.9/月。",
    ctaPrimary: "免费浏览工具",
    ctaPrimaryHref: "/tools",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "40+", label: "精选 indie 工具" },
      { stat: "6", label: "技术栈分类" },
      { stat: "8.8", label: "平均 Indie 评分" },
    ],
    previewTitle: "最高评分工具",
    previewNote: "完整定价对比、替代方案和接入指南需",
    previewLink: "深度评测",
    paymentCompareLabel: "支付方案怎么选？",
    howItWorks: {
      title: "三步选对技术栈",
      steps: [
        {
          step: "1",
          title: "按分类筛选",
          desc: "支付、邮件、托管、认证、分析、数据库 — 找到你需要的",
        },
        {
          step: "2",
          title: "阅读深度评测",
          desc: "真实定价、隐藏费用、替代方案、优缺点 — 不是厂商软文",
        },
        {
          step: "3",
          title: "复制接入清单",
          desc: "每个工具 5 分钟接入步骤 — 本周末就能 ship",
        },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      {
        icon: "🧰",
        title: "精选 40+ 工具",
        desc: "只收录 indie hacker 真正在用的工具，不是 5000 链接的垃圾目录",
      },
      {
        icon: "💰",
        title: "定价实对比",
        desc: "每个工具含真实定价、隐藏费用、免费额度，帮你算清 MVP 成本",
      },
      {
        icon: "🔄",
        title: "替代方案",
        desc: "Polar vs Stripe vs Lemon Squeezy？告诉你什么场景选什么",
      },
      {
        icon: "⚡",
        title: "5 分钟接入指南",
        desc: "每个工具含 setup checklist，复制就能用",
      },
      {
        icon: "📊",
        title: "Indie 评分",
        desc: "基于社区口碑和实战体验的 1-10 分，不是厂商软文",
      },
      {
        icon: "🎯",
        title: "按场景选型",
        desc: "「第一天收费用什么？」「事务邮件选谁？」直接给答案",
      },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "小林",
        role: "全栈 indie dev",
        text: "省了整整一周调研支付方案的时间。Polar vs LS 对比表直接帮我做了决定。",
      },
      {
        name: "Amy",
        role: "副业 SaaS 创始人",
        text: "工具目录太多太杂，这里每个都有深度评测和 setup 步骤，$9.9 值。",
      },
      {
        name: "老周",
        role: "连续创业者",
        text: "第三个产品的技术栈直接抄这里的推荐，从 0 到收款只花了周末。",
      },
    ],
    closing: {
      title: "Product Hunt 有 5000 个工具目录，没有一个帮你选型",
      subtitle:
        "我们只要 $9.9/月。深度评测 + 定价对比 + 替代方案 + 接入指南。第一天收费，因为调研每个工具也要时间。",
      ctaPrimary: "立即订阅 $9.9/月",
      ctaSecondary: "免费浏览工具",
    },
    productDemo: {
      title: "工具目录实时预览",
      caption: "Indie 评分 · 定价 · 替代方案 · 接入清单",
      preview:
        "🧰 独立开发者工具箱              40+ 工具 · 6 分类\n─────────────────────────────────────────────────────\n  💳 Polar          4%+$0.40    MoR · 无公司也能收款  ★ 9/10\n  📧 Resend         免费3K/月   React Email 模板      ★ 9/10\n  ▲  Vercel         Hobby 免费  git push 即部署       ★ 10/10\n─────────────────────────────────────────────────────\n  筛选：[ 支付 ] [ 邮件 ] [ 托管 ]\n  对比：Polar vs Stripe vs Lemon Squeezy\n─────────────────────────────────────────────────────\n  [ 深度评测 ]    [ + 对比 ]    [ 订阅 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
