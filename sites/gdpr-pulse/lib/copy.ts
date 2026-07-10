import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Vanta $10K/yr? · $29/mo flat",
    title: "GDPR compliance self-check for indie SaaS",
    subtitle:
      "Scan your stack, score GDPR gaps, and generate a privacy policy draft. 5 free scans, then $29/mo.",
    ctaPrimary: "Run free GDPR scan",
    ctaPrimaryHref: "/scan",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free scans · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Vanta $10K/yr" },
      { stat: "258+", label: "GDPR checkpoints" },
      { stat: "3 min", label: "to first compliance report" },
    ],
    auditTitle: "Typical indie gaps",
    auditStats: [
      { label: "Missing cookie consent", value: "68%" },
      { label: "No DPA with Stripe", value: "54%" },
      { label: "Stale privacy policy", value: "41%" },
    ],
    sampleTitle: "Sample scan grades",
    scoreLabel: (n: number) => `Score ${n}`,
    sampleItems: [
      {
        id: "indie",
        label: "Indie SaaS",
        alt: "3 critical gaps — cookie banner + DPA missing",
        score: 72,
      },
      {
        id: "b2b",
        label: "B2B tool",
        alt: "1 warning — GA4 EU transfer documented",
        score: 88,
      },
      {
        id: "eu",
        label: "EU marketplace",
        alt: "Ready for enterprise procurement",
        score: 94,
      },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Describe your stack",
          desc: "Product name, processors (Stripe, GA, Supabase), and what data you collect",
        },
        {
          step: "2",
          title: "Get scored checklist",
          desc: "Article-referenced pass/warn/fail items with copy-paste fixes",
        },
        {
          step: "3",
          title: "Export policy draft",
          desc: "Privacy policy markdown ready to publish — review with counsel before enterprise deals",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🛡️",
        title: "GDPR gap scanner",
        desc: "Cookie consent, DPAs, DSR process, and processor documentation — scored in minutes.",
      },
      {
        icon: "📄",
        title: "Policy generator",
        desc: "Auto-draft privacy policy sections tailored to your processors and data types.",
      },
      {
        icon: "⚖️",
        title: "Article references",
        desc: "Every finding links to GDPR articles — share with your lawyer or enterprise buyer.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited scans. No $10K/year Vanta contracts for bootstrapped founders.",
      },
    ],
    testimonialsTitle: "What indie founders say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo SaaS founder",
        text: "Enterprise prospect asked for a DPA. GDPR Pulse gave me a checklist and policy draft in one afternoon.",
      },
      {
        name: "Priya K.",
        role: "Indie hacker",
        text: "I had no idea GA4 needed EU consent settings. Fixed 3 gaps before launching in Germany.",
      },
      {
        name: "Tom R.",
        role: "Bootstrapped B2B",
        text: "Cheaper than one lawyer hour. Not a replacement for counsel — but perfect for MVP compliance.",
      },
    ],
    closing: {
      title: "Ship to EU customers without $10K compliance tools",
      subtitle: "5 free scans · then $29/mo unlimited",
      ctaPrimary: "Run free GDPR scan",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live scan preview",
      caption: "Product · processors · checklist · policy draft",
      preview:
        "🛡️ GDPR Pulse Scanner                    Grade B · 82/100\n─────────────────────────────────────────────────────\n  Product: Indie SaaS · myapp.com\n  Processors: Stripe, Vercel, PostHog\n  EU users: Yes · Cookies: Yes\n─────────────────────────────────────────────────────\n  ✗ Cookie consent before tracking     Art. 7\n    → Add opt-in banner blocking analytics\n  ⚠ DPA with sub-processors            Art. 28\n    → Sign Stripe & Vercel DPAs\n  ✓ Privacy policy published           Art. 13\n─────────────────────────────────────────────────────\n  Policy draft ready · 847 words\n  [ Copy policy ]    [ Export PDF ]",
    },
  },
  zh: {
    badge: "Vanta 年费 $10K？· $29/月一口价",
    title: "独立开发者 GDPR 合规自检",
    subtitle:
      "扫描技术栈、评分合规缺口、生成隐私政策草稿。免费体验 5 次，之后 $29/月。",
    ctaPrimary: "免费 GDPR 自检",
    ctaPrimaryHref: "/scan",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月 vs Vanta $10K/年" },
      { stat: "258+", label: "GDPR 检查点" },
      { stat: "3 分钟", label: "出首份合规报告" },
    ],
    auditTitle: "独立开发者常见缺口",
    auditStats: [
      { label: "缺少 Cookie 同意", value: "68%" },
      { label: "未签 Stripe DPA", value: "54%" },
      { label: "隐私政策过时", value: "41%" },
    ],
    sampleTitle: "扫描评分样例",
    scoreLabel: (n: number) => `评分 ${n}`,
    sampleItems: [
      {
        id: "indie",
        label: "独立 SaaS",
        alt: "3 项严重缺口 — 缺 Cookie 横幅与 DPA",
        score: 72,
      },
      {
        id: "b2b",
        label: "B2B 工具",
        alt: "1 项警告 — GA4 欧盟传输已记录",
        score: 88,
      },
      {
        id: "eu",
        label: "欧盟市场",
        alt: "可应对企业采购合规审查",
        score: 94,
      },
    ],
    howItWorks: {
      title: "使用流程",
      steps: [
        {
          step: "1",
          title: "描述技术栈",
          desc: "产品名、处理器（Stripe、GA、Supabase）及收集的数据类型",
        },
        {
          step: "2",
          title: "获取评分清单",
          desc: "按 GDPR 条款标注通过/警告/失败，附可复制修复建议",
        },
        {
          step: "3",
          title: "导出政策草稿",
          desc: "隐私政策 Markdown 可直接发布 — 企业客户前建议律师审阅",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🛡️",
        title: "GDPR 缺口扫描",
        desc: "Cookie 同意、DPA、数据主体请求流程与处理器文档 — 数分钟出分。",
      },
      {
        icon: "📄",
        title: "政策生成器",
        desc: "按你的处理器与数据类型自动生成隐私政策章节。",
      },
      {
        icon: "⚖️",
        title: "法条引用",
        desc: "每项发现对应 GDPR 条款 — 可发给律师或企业采购。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "无限扫描。自举创始人不必签 $10K/年 Vanta 合同。",
      },
    ],
    testimonialsTitle: "独立开发者评价",
    testimonials: [
      {
        name: "Alex M.",
        role: "独立 SaaS 创始人",
        text: "企业客户要 DPA。GDPR Pulse 一个下午就给了清单和政策草稿。",
      },
      {
        name: "Priya K.",
        role: "独立开发者",
        text: "不知道 GA4 需要欧盟同意设置。在德国上线前修好了 3 个缺口。",
      },
      {
        name: "Tom R.",
        role: "自举 B2B",
        text: "比律师一小时便宜。不能替代法律顾问 — 但 MVP 合规刚好。",
      },
    ],
    closing: {
      title: "不用 $10K 合规工具也能服务欧盟客户",
      subtitle: "免费体验 5 次 · 之后 $29/月无限扫描",
      ctaPrimary: "免费 GDPR 自检",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "实时扫描预览",
      caption: "产品 · 处理器 · 检查清单 · 政策草稿",
      preview:
        "🛡️ GDPR Pulse 扫描器                    等级 B · 82/100\n─────────────────────────────────────────────────────\n  产品：独立 SaaS · myapp.com\n  处理器：Stripe、Vercel、PostHog\n  欧盟用户：是 · Cookie：是\n─────────────────────────────────────────────────────\n  ✗ 追踪前 Cookie 同意                 第 7 条\n    → 添加阻止分析的 opt-in 横幅\n  ⚠ 子处理器 DPA                       第 28 条\n    → 签署 Stripe 与 Vercel DPA\n  ✓ 已发布隐私政策                     第 13 条\n─────────────────────────────────────────────────────\n  政策草稿就绪 · 847 字\n  [ 复制政策 ]    [ 导出 PDF ]",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Subscribe to GDPR Pulse",
    subtitle: "One price, unlimited GDPR scans and policy exports.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs Vanta $10K/yr · cancel anytime",
    perks: [
      "Unlimited GDPR compliance scans",
      "Privacy policy draft generator",
      "Article-referenced gap checklist",
      "Sub-processor DPA tracker",
      "Cookie consent audit",
      "Priority support for indie founders",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free scans, then subscribe?",
    whyItems: [
      "Founders need to see real gaps before paying",
      "Paying users = teams selling to EU customers",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 GDPR 合规自检",
    subtitle: "一口价，GDPR 扫描与政策导出不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCompetitor: "对比 Vanta 年费 $10K · 随时可取消",
    perks: [
      "GDPR 合规扫描不限量",
      "隐私政策草稿生成",
      "法条引用缺口清单",
      "子处理器 DPA 追踪",
      "Cookie 同意审计",
      "独立开发者优先支持",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "创始人需要先看到真实缺口再付费",
      "付费用户 = 真正向欧盟客户销售的团队",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
