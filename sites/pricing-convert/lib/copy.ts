import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Hotjar $39+/mo · VWO $198+/mo · we diagnose for $9.9/mo",
    title: "Pricing page conversion diagnosis for indie hackers",
    subtitle:
      "85% of visitors leave /pricing without buying. Paste your URL — get heatmap zones, drop-off analysis, layout fixes, and A/B playbook in 2 minutes. 5 free diagnoses, then $9.9/mo.",
    ctaPrimary: "Diagnose my pricing page",
    ctaPrimaryHref: "/diagnose",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free diagnoses · then $9.9/mo",
    stats: [
      { stat: "85%", label: "avg pricing page bounce rate" },
      { stat: "2 min", label: "full conversion audit" },
      { stat: "+19%", label: "avg lift after fixes" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste pricing page URL",
          desc: "We map attention heatmap zones and funnel drop-off across hero, tiers, FAQ, and checkout",
        },
        {
          step: "2",
          title: "See where visitors leak",
          desc: "Drop-off percentages per section — know if they bounce at tiers, toggle, or CTA",
        },
        {
          step: "3",
          title: "Ship prioritized fixes",
          desc: "Layout diagnosis + A/B playbook ranked by expected revenue lift",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🔥",
        title: "Heatmap zone analysis",
        desc: "Hero, tier grid, FAQ, CTA — see which blocks get attention vs where eyes skip.",
      },
      {
        icon: "📉",
        title: "Funnel drop-off report",
        desc: "Step-by-step leak percentages: land → scroll → select tier → checkout click.",
      },
      {
        icon: "📐",
        title: "Layout diagnosis",
        desc: "Choice paralysis, buried CTAs, weak social proof — ranked by severity.",
      },
      {
        icon: "🧪",
        title: "A/B test playbook",
        desc: "Annual toggle, guarantee placement, recommended badge — with expected lift ranges.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex T.",
        role: "Solo SaaS founder",
        text: "Hotjar wanted $39/mo just to see scroll depth. Pricing Convert showed me 62% drop at tier selection — fixed the badge, conversion up 18%.",
      },
      {
        name: "Mia C.",
        role: "Indie hacker",
        text: "VWO was overkill. I needed to know WHY 85% bounced at /pricing. Drop-off report + 3 A/B ideas shipped same day.",
      },
      {
        name: "Jordan P.",
        role: "Bootstrapped dev",
        text: "No SDK install. Paste URL, get heatmap zones and fixes. $9.9/mo vs enterprise tools that need a sales call.",
      },
    ],
    closing: {
      title: "Stop losing 85% of pricing page visitors",
      subtitle: "5 free conversion diagnoses · then $9.9/mo unlimited",
      ctaPrimary: "Diagnose my pricing page",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Conversion diagnosis preview",
      caption: "Heatmap zones · drop-off funnel · A/B playbook",
      preview:
        "Report: yoursaas.com/pricing\n─────────────────────────────────\nScore: 64/100  │  Est. conversion: 2.7%\n─────────────────────────────────\n[DROPOFF] Tier selection — 38% leak\n  → No 'Recommended' badge on middle tier\n\n[HEATMAP] FAQ section — low attention\n  → Move top 3 objections under tiers\n\n[LAYOUT] CTA placement — HIGH\n  → Add sticky CTA after hero (+14% est.)\n\n[A/B] Annual pre-selected + 'Save 17%' → +15–22% ARR",
    },
  },
  zh: {
    badge: "Hotjar $39+/月 · VWO $198+/月 · 我们 $9.9/月诊断",
    title: "独立开发者的定价页转化诊断",
    subtitle:
      "85% 访客在 /pricing 未购买就离开。粘贴链接 — 2 分钟获得热力图区域、流失分析、布局修复与 A/B 方案。免费体验 5 次，之后 $9.9/月。",
    ctaPrimary: "诊断我的定价页",
    ctaPrimaryHref: "/diagnose",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "85%", label: "定价页平均跳出率" },
      { stat: "2 分钟", label: "完整转化审计" },
      { stat: "+19%", label: "修复后平均提升" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴定价页链接",
          desc: "映射热力图区域与漏斗流失：首屏、档位、常见问题、结账按钮",
        },
        {
          step: "2",
          title: "看清访客在哪里流失",
          desc: "每个区块的流失百分比 — 知道是在档位、切换还是按钮处跳出",
        },
        {
          step: "3",
          title: "按优先级落地修复",
          desc: "布局诊断 + 按预期收入提升排序的 A/B 方案",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🔥",
        title: "热力图区域分析",
        desc: "首屏、档位网格、常见问题、行动按钮 — 哪些区块获关注、哪些被跳过。",
      },
      {
        icon: "📉",
        title: "漏斗流失报告",
        desc: "逐步流失比例：进入 → 滚动 → 选档位 → 点击结账。",
      },
      {
        icon: "📐",
        title: "布局诊断",
        desc: "选择困难、按钮埋藏、社会证明薄弱 — 按严重程度排序。",
      },
      {
        icon: "🧪",
        title: "A/B 测试方案",
        desc: "年付默认、退款保证位置、推荐角标 — 附带预期提升区间。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex T.",
        role: "一人 SaaS 创始人",
        text: "Hotjar 只看滚动深度就要 $39/月。Pricing Convert 指出 62% 在选档位流失 — 加了角标后转化涨 18%。",
      },
      {
        name: "Mia C.",
        role: "独立开发者",
        text: "VWO 太重了。我只想知道 85% 为什么在 /pricing 跳出。流失报告 + 3 个 A/B 方案当天上线。",
      },
      {
        name: "Jordan P.",
        role: "自举创业者",
        text: "不用装 SDK。贴链接、拿热力图和修复方案。$9.9/月，不用企业销售演示。",
      },
    ],
    closing: {
      title: "别再流失 85% 的定价页访客",
      subtitle: "免费 5 次转化诊断 · 之后 $9.9/月 不限次数",
      ctaPrimary: "诊断我的定价页",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "转化诊断报告预览",
      caption: "热力图区域 · 流失漏斗 · A/B 方案",
      preview:
        "报告：你的saas.com/pricing\n─────────────────────────────────\n评分：64/100  │  预估转化：2.7%\n─────────────────────────────────\n[流失] 选档位 — 38% 泄漏\n  → 中间档位无「最受欢迎」角标\n\n[热力] 常见问题区 — 关注度低\n  → 前 3 个异议移到档位下方\n\n[布局] 行动按钮位置 — 高优先级\n  → 首屏后加固定行动条（预估 +14%）\n\n[A/B] 默认年付 +「省 17%」→ +15–22% 年化收入",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Pricing Convert",
    subtitle: "One price, unlimited pricing page conversion diagnoses. No per-session fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Hotjar $39+/mo · cancel anytime",
    perks: [
      "Unlimited conversion diagnoses",
      "Heatmap zone analysis",
      "Funnel drop-off reports",
      "Layout diagnosis + severity scores",
      "A/B test playbook with lift estimates",
      "Export reports (PDF)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free diagnoses, then subscribe?",
    whyItems: [
      "Conversion analysis uses real compute per scan",
      "Paying users = founders who actually ship pricing fixes",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅定价页转化诊断",
    subtitle: "一口价，定价页转化诊断不限次数。不按会话收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Hotjar $39+/月 · 随时可取消",
    perks: [
      "转化诊断不限次数",
      "热力图区域分析",
      "漏斗流失报告",
      "布局诊断 + 严重程度评分",
      "A/B 测试方案（含提升预估）",
      "报告导出（PDF）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "每次扫描有真实算力成本",
      "付费用户 = 真正落地定价页修复的创始人",
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
