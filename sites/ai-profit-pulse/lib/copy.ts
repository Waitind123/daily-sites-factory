import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Revenue up, margins down? · $9.9/mo flat",
    title: "Per-customer AI profit tracking for indie SaaS",
    subtitle:
      "Stripe shows revenue growing — but OpenAI bills rising faster? See profit per customer: revenue vs AI API cost. 5 free analyses, then $9.9/mo.",
    ctaPrimary: "Analyze profit free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free analyses · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs AICost.ai $49+" },
      { stat: "8", label: "customers analyzed per sync" },
      { stat: "2 min", label: "to connect Stripe & see margins" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Connect Stripe",
          desc: "Paste your restricted API key — read-only, pulls revenue per customer",
        },
        {
          step: "2",
          title: "Add AI costs",
          desc: "Log OpenAI/Anthropic spend per customer or use auto-estimates from API calls",
        },
        {
          step: "3",
          title: "Spot unprofitable users",
          desc: "See which customers eat your margins — raise prices or cap usage before you bleed cash",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "💹",
        title: "Per-customer profit table",
        desc: "Revenue, AI cost, profit, margin % — one row per customer. No spreadsheet math.",
      },
      {
        icon: "🔴",
        title: "Unprofitable customer alerts",
        desc: "Instantly see who costs more in AI than they pay you. Fix pricing before it's too late.",
      },
      {
        icon: "📊",
        title: "Gross margin dashboard",
        desc: "Total revenue vs total AI spend, average margin, profitable vs unprofitable count.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited profit analyses. No per-customer fees like enterprise analytics tools.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "AI SaaS founder",
        text: "MRR was $8K but I was losing money on 3 heavy users. This showed me exactly who to cap or upsell.",
      },
      {
        name: "Sarah L.",
        role: "Solo dev",
        text: "OpenAI bill jumped 3x in one month. I had no idea which customers caused it until I ran this.",
      },
      {
        name: "Mike T.",
        role: "Bootstrapped founder",
        text: "ChartMogul shows revenue. This shows if I'm actually making money after AI costs. Game changer.",
      },
    ],
    closing: {
      title: "Know your real margins, not just MRR",
      subtitle: "5 free analyses · then $9.9/mo for unlimited",
      ctaPrimary: "Analyze profit free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live profit dashboard preview",
      caption: "Revenue vs AI cost per customer — updated on sync",
      preview:
        "💹 AI Profit Dashboard              Last sync: 3 min ago\n─────────────────────────────────────────────────────\n  Revenue      AI Cost     Profit      Margin\n  $2,173       $471        $1,702      78.3%\n─────────────────────────────────────────────────────\n  Customer          Rev      AI Cost   Margin\n  Acme Corp        $299      $42       86%\n  StartupXYZ        $99      $78      -21% ⚠️\n  IndieDev Co       $49      $12       76%\n  BigClient Inc    $499     $156       69%\n  SoloFounder       $29      $31       -7% ⚠️\n─────────────────────────────────────────────────────\n  [ Analyze now ]    [ Export CSV ]    [ Set alerts ]",
    },
  },
  zh: {
    badge: "收入增长，利润下降？· $9.9/月一口价",
    title: "独立开发者 AI 客户利润追踪",
    subtitle:
      "Stripe 显示收入增长，但 OpenAI 账单涨得更快？按客户查看利润：收入对比 AI API 成本。免费体验 5 次分析，之后 $9.9/月。",
    ctaPrimary: "免费分析利润",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，竞品要 $49+" },
      { stat: "8", label: "每次同步分析的客户数" },
      { stat: "2 分钟", label: "连接 Stripe 查看利润率" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "连接 Stripe",
          desc: "粘贴只读 API 密钥 — 拉取每个客户的收入数据",
        },
        {
          step: "2",
          title: "录入 AI 成本",
          desc: "记录每个客户的 OpenAI/Anthropic 支出，或根据 API 调用量自动估算",
        },
        {
          step: "3",
          title: "发现亏损客户",
          desc: "看清哪些客户吃掉你的利润 — 在亏钱前调价或限制用量",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "💹",
        title: "按客户利润表",
        desc: "收入、AI 成本、利润、利润率 — 每个客户一行，不用手算表格。",
      },
      {
        icon: "🔴",
        title: "亏损客户预警",
        desc: "立刻看到 AI 成本超过付费金额的客户，及时调价。",
      },
      {
        icon: "📊",
        title: "毛利率仪表盘",
        desc: "总收入对比 AI 总支出、平均利润率、盈利与亏损客户数。",
      },
      {
        icon: "💰",
        title: "$9.9/月一口价",
        desc: "无限次利润分析，无企业级按客户收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "AI SaaS 创始人",
        text: "MRR 有 $8K，但 3 个重度用户让我亏钱。这个工具精确告诉我该限制谁、该 upsell 谁。",
      },
      {
        name: "Sarah L.",
        role: "独立开发者",
        text: "OpenAI 账单一个月涨了 3 倍，我不知道是哪个客户造成的，直到跑了这个分析。",
      },
      {
        name: "Mike T.",
        role: "自举创始人",
        text: "ChartMogul 显示收入，这个显示扣掉 AI 成本后我是否真的在赚钱。改变游戏规则。",
      },
    ],
    closing: {
      title: "掌握真实利润率，而不只是 MRR",
      subtitle: "免费体验 5 次分析 · 之后 $9.9/月无限使用",
      ctaPrimary: "免费分析利润",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "利润仪表盘实时预览",
      caption: "按客户收入对比 AI 成本 — 同步即更新",
      preview:
        "💹 AI 利润仪表盘                    上次同步：3 分钟前\n─────────────────────────────────────────────────────\n  总收入        AI 成本      利润        利润率\n  $2,173       $471        $1,702      78.3%\n─────────────────────────────────────────────────────\n  客户              收入      AI 成本   利润率\n  Acme Corp        $299      $42       86%\n  StartupXYZ        $99      $78      -21% ⚠️\n  IndieDev Co       $49      $12       76%\n  BigClient Inc    $499     $156       69%\n  SoloFounder       $29      $31       -7% ⚠️\n─────────────────────────────────────────────────────\n  [ 立即分析 ]    [ 导出 CSV ]    [ 设置预警 ]",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join AI Profit Pulse",
    subtitle: "One price, unlimited profit analyses. No per-customer fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs AICost.ai $49+/mo · cancel anytime",
    perks: [
      "Unlimited profit analyses",
      "Per-customer revenue vs AI cost",
      "Gross margin dashboard",
      "Unprofitable customer alerts",
      "CSV export",
      "Read-only Stripe key (secure)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free analyses, then subscribe?",
    whyItems: [
      "Stripe + AI cost calculations need real infrastructure",
      "Paying users = founders who actually track margins weekly",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 AI 客户利润追踪",
    subtitle: "一口价，利润分析不限量。不按客户数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比竞品 $49+/月 · 随时可取消",
    perks: [
      "无限次利润分析",
      "按客户收入对比 AI 成本",
      "毛利率仪表盘",
      "亏损客户预警",
      "CSV 导出",
      "只读 Stripe 密钥（安全）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次分析，之后订阅？",
    whyItems: [
      "Stripe 与 AI 成本计算需要真实基础设施",
      "付费用户 = 真正每周追踪利润率的创始人",
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
