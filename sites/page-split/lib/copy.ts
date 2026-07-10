import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "VWO $198/mo? · $29/mo flat",
    title: "Landing page A/B testing for indie hackers",
    subtitle:
      "Split traffic 50/50, track conversions, pick the winner. No per-visitor fees. 5 free experiments, then $29/mo.",
    ctaPrimary: "Start a test free",
    ctaPrimaryHref: "/experiments",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free experiments · then $29/mo",
    socialProof: "89 indie founders testing headlines this month",
    stats: [
      { stat: "$29", label: "flat/mo vs VWO $198+" },
      { stat: "50/50", label: "traffic split, auto winner" },
      { stat: "5 min", label: "to launch first test" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create an experiment",
          desc: "Name your test, paste your landing page URL, write two headline variants",
        },
        {
          step: "2",
          title: "Add the snippet",
          desc: "Drop one script tag before </body> — no redeploy needed",
        },
        {
          step: "3",
          title: "Ship the winner",
          desc: "Watch conversions in real time; auto-detect when variant B beats A",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "⚡",
        title: "50/50 traffic split",
        desc: "Visitors randomly see variant A or B. Fair split, real conversion data.",
      },
      {
        icon: "📊",
        title: "Live conversion dashboard",
        desc: "Views, conversions, and rates update in real time. Know when you have a winner.",
      },
      {
        icon: "🏆",
        title: "Auto winner detection",
        desc: "Statistical confidence when one variant clearly converts better.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited experiments and pageviews. No per-visitor fees like enterprise tools.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo SaaS founder",
        text: "VWO wanted $198/mo for one pricing headline test. Page Split does exactly what I need for $29.",
      },
      {
        name: "Sarah L.",
        role: "Indie hacker",
        text: "Changed my hero CTA and lifted signups 18% in a week. Finally data, not gut feeling.",
      },
      {
        name: "James K.",
        role: "Bootstrapped dev",
        text: "Five minutes from signup to live A/B test. No sales demo, no annual contract.",
      },
    ],
    closing: {
      title: "Stop guessing which headline wins",
      subtitle: "5 free experiments · then $29/mo unlimited",
      ctaPrimary: "Start your first test",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live A/B dashboard preview",
      caption: "Variant B winning · 12.4% vs 8.1% conversion",
      preview:
        "Experiment: Hero headline test\n─────────────────────────────────\nVariant A  │  1,240 views  │  100 conv  │  8.1%\nVariant B ★│  1,198 views  │  149 conv  │ 12.4%  ← winner\n─────────────────────────────────\nConfidence: 95% · Ship variant B",
    },
  },
  zh: {
    badge: "VWO $198/月？· $29/月一口价",
    title: "独立开发者的落地页 A/B 测试",
    subtitle:
      "50/50 分流、追踪转化、自动判定赢家。不按访客收费。免费 5 个实验，之后 $29/月。",
    ctaPrimary: "免费开始测试",
    ctaPrimaryHref: "/experiments",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个实验 · 之后 $29/月",
    socialProof: "本月已有 89 位独立开发者在测标题",
    stats: [
      { stat: "$29", label: "一口价/月，VWO 要 $198+" },
      { stat: "50/50", label: "流量分流，自动判定赢家" },
      { stat: "5 分钟", label: "上线第一个测试" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建实验",
          desc: "命名测试、粘贴落地页链接、写两个标题变体",
        },
        {
          step: "2",
          title: "添加代码片段",
          desc: "在 </body> 前贴一行脚本 — 无需重新部署",
        },
        {
          step: "3",
          title: "上线赢家",
          desc: "实时查看转化；当 B 版明显胜出时自动提示",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "⚡",
        title: "50/50 流量分流",
        desc: "访客随机看到 A 或 B 版，公平分流，真实转化数据。",
      },
      {
        icon: "📊",
        title: "实时转化看板",
        desc: "浏览、转化、转化率实时更新，清楚何时有赢家。",
      },
      {
        icon: "🏆",
        title: "自动判定赢家",
        desc: "当某一变体转化明显更好时给出统计置信度。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "实验与页面浏览不限量，不像企业工具按访客收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "一人 SaaS 创始人",
        text: "VWO 测一个定价标题就要 $198/月。Page Split $29 刚好够用。",
      },
      {
        name: "Sarah L.",
        role: "独立开发者",
        text: "改了首屏按钮，一周注册量涨 18%。终于有数据，不靠猜。",
      },
      {
        name: "James K.",
        role: "自举创业者",
        text: "从注册到上线 A/B 测试只要 5 分钟，没有销售演示，没有年付合同。",
      },
    ],
    closing: {
      title: "别再猜哪个标题会赢",
      subtitle: "免费 5 个实验 · 之后 $29/月 不限量",
      ctaPrimary: "开始第一个测试",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "A/B 看板实时预览",
      caption: "B 版胜出 · 转化率 12.4% 对比 8.1%",
      preview:
        "实验：首屏标题测试\n─────────────────────────────────\n变体 A  │  1,240 浏览  │  100 转化  │  8.1%\n变体 B ★│  1,198 浏览  │  149 转化  │ 12.4%  ← 赢家\n─────────────────────────────────\n置信度：95% · 上线变体 B",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Subscribe to Page Split",
    subtitle: "One price, unlimited experiments. No per-visitor fees.",
    recommended: "Best value",
    monthly: "Monthly",
    annual: "Annual",
    perMonth: "/mo",
    perYear: "/yr",
    saveAnnual: "Save 17% vs monthly",
    vsCanny: "vs VWO $198+/mo · cancel anytime",
    monthlyPrice: "$29",
    annualPrice: "$99",
    perks: [
      "Unlimited A/B experiments",
      "Unlimited pageviews & conversions",
      "50/50 traffic split",
      "Live conversion dashboard",
      "Auto winner detection",
      "Tracking snippet for any site",
    ],
    subscribe: "Subscribe · $29/mo",
    subscribeAnnual: "Subscribe · $29/mo",
    socialProof: "89 indie founders subscribed this month",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free experiments, then subscribe?",
    whyItems: [
      "Real-time conversion tracking costs infrastructure",
      "Paying users = founders who ship data-driven copy",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
    compareTitle: "Page Split vs VWO",
    compareRows: [
      { label: "Monthly price", us: "$29 flat", them: "$198+ (enterprise)" },
      { label: "Per-visitor fees", us: "None", them: "Yes, scales with traffic" },
      { label: "Setup time", us: "5 minutes", them: "Sales demo required" },
      { label: "Indie-friendly", us: "Built for solo founders", them: "Built for teams" },
    ],
    guarantee: "7-day money-back guarantee · cancel anytime",
    faqTitle: "Common questions",
    faq: [
      {
        q: "Can I try before paying?",
        a: "Yes — run 5 experiments free. No credit card until you need unlimited tests.",
      },
      {
        q: "What happens if I cancel?",
        a: "Your experiments stay accessible for 30 days. Export data anytime from the dashboard.",
      },
      {
        q: "Do I need to redeploy my site?",
        a: "No. Add one script tag — variants swap client-side without code changes.",
      },
      {
        q: "How is this different from VWO?",
        a: "Flat $29/mo with unlimited pageviews. VWO starts at $198/mo with sales calls.",
      },
    ],
  },
  zh: {
    title: "订阅 Page Split",
    subtitle: "一口价，实验不限量。不按访客收费。",
    recommended: "最划算",
    monthly: "月付",
    annual: "年付",
    perMonth: "/月",
    perYear: "/年",
    saveAnnual: "比月付省 17%",
    vsCanny: "对比 VWO $198+/月 · 随时可取消",
    monthlyPrice: "$29",
    annualPrice: "¥699",
    perks: [
      "A/B 实验不限量",
      "页面浏览与转化追踪不限量",
      "50/50 流量分流",
      "实时转化看板",
      "自动判定赢家",
      "任意站点可用的追踪代码片段",
    ],
    subscribe: "订阅 · $29/月",
    subscribeAnnual: "订阅 · ¥199/月",
    socialProof: "本月已有 89 位独立开发者订阅",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个实验，之后订阅？",
    whyItems: [
      "实时转化追踪有真实基础设施成本",
      "付费用户 = 用数据驱动文案的创业者",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
    compareTitle: "Page Split 对比 VWO",
    compareRows: [
      { label: "月费", us: "$29 一口价", them: "$198+（企业版）" },
      { label: "按访客收费", us: "无", them: "有，随流量增长" },
      { label: "上线时间", us: "5 分钟", them: "需销售演示" },
      { label: "适合独立开发者", us: "为一人团队打造", them: "面向大团队" },
    ],
    guarantee: "7 天无理由退款 · 随时可取消",
    faqTitle: "常见问题",
    faq: [
      {
        q: "可以先试用再付费吗？",
        a: "可以 — 免费跑 5 个实验，无需信用卡。需要无限测试时再订阅。",
      },
      {
        q: "取消订阅后会怎样？",
        a: "实验数据保留 30 天，可随时从看板导出。",
      },
      {
        q: "需要重新部署网站吗？",
        a: "不需要。加一行脚本即可 — 变体在客户端切换，无需改代码。",
      },
      {
        q: "和 VWO 有什么区别？",
        a: "$29/月 一口价，页面浏览不限。VWO 起步 $198/月 还要销售演示。",
      },
    ],
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
