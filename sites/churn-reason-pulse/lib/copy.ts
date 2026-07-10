import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "ChartMogul shows churn % · not why · $29/mo",
    title: "Know why customers cancel — churn reason tracking for indie SaaS",
    subtitle:
      "ChartMogul tells you 4.2% churned. It doesn't tell you why. Log cancellation reasons, categorize by price/feature/competitor, and spot patterns before they compound. 5 free logs, then $29/mo.",
    ctaPrimary: "Log cancellations free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free cancellation logs · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Baremetrics $50+" },
      { stat: "7", label: "churn reason categories built-in" },
      { stat: "2 min", label: "to log your first cancellation" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Log each cancellation",
          desc: "Customer email, MRR lost, reason category — plus optional free-text feedback",
        },
        {
          step: "2",
          title: "Auto-categorize",
          desc: "Price, missing feature, switched competitor, not using, support, bugs, other",
        },
        {
          step: "3",
          title: "Spot patterns",
          desc: "See which reason dominates, total MRR lost, and trend breakdown in one dashboard",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📋",
        title: "Cancellation reason capture",
        desc: "Structured exit survey without building your own. Log reasons in 30 seconds per churn.",
      },
      {
        icon: "📊",
        title: "Category breakdown dashboard",
        desc: "Bar chart by reason, top churn driver, total MRR lost — the context ChartMogul doesn't give you.",
      },
      {
        icon: "💬",
        title: "Free-text feedback",
        desc: "Capture verbatim quotes alongside categories. \"Too expensive for what I use\" beats a number.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited cancellation logs. No per-customer fees like enterprise CS tools.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo SaaS founder",
        text: "Churn was 5% but I had no idea why. After 20 logs, 'missing feature' was 40%. Fixed onboarding, churn dropped to 3.2%.",
      },
      {
        name: "Sarah L.",
        role: "Indie hacker",
        text: "ChartMogul shows the number. This shows the story. Worth $29 just to stop guessing.",
      },
      {
        name: "David K.",
        role: "Bootstrapped dev",
        text: "I thought price was the problem. Turns out 60% churned because they never activated the core feature.",
      },
    ],
    closing: {
      title: "Stop guessing why customers leave",
      subtitle: "5 free cancellation logs · then $29/mo for unlimited churn reason tracking",
      ctaPrimary: "Log cancellations free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Churn reason dashboard preview",
      caption: "Cancellations · MRR lost · reason breakdown",
      preview:
        "📉 Churn Reason Pulse                    Last log: 12 min ago\n─────────────────────────────────────────────────────\n  Cancellations    MRR lost       Top reason\n  24               $1,680         Missing feature (38%)\n─────────────────────────────────────────────────────\n  Reason breakdown:\n  Missing feature  ████████░░  38%   (9)\n  Price            █████░░░░░  25%   (6)\n  Not using        ████░░░░░░  21%   (5)\n  Switched         ██░░░░░░░░  12%   (3)\n  Other            █░░░░░░░░░   4%   (1)\n─────────────────────────────────────────────────────\n  sarah@startup.io  $49/mo  \"Need API webhooks\"\n  tom@indie.dev     $29/mo  \"Too expensive for solo use\"\n─────────────────────────────────────────────────────\n  [ + Log cancellation ]    [ Export CSV ]",
    },
  },
  zh: {
    badge: "ChartMogul 只显示流失率 · 不记原因 · $29/月",
    title: "知道客户为什么取消 — 独立开发者流失原因追踪",
    subtitle:
      "ChartMogul 告诉你流失了 4.2%，但不告诉你为什么。记录取消原因、按价格/功能/竞品分类，在问题恶化前发现规律。免费体验 5 次记录，之后 $29/月。",
    ctaPrimary: "免费记录取消",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Baremetrics 要 $50+" },
      { stat: "7", label: "内置流失原因分类" },
      { stat: "2 分钟", label: "记录首条取消" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "记录每次取消",
          desc: "客户邮箱、流失 MRR、原因分类 — 可附自由文本反馈",
        },
        {
          step: "2",
          title: "自动分类",
          desc: "价格、缺功能、换竞品、不用了、客服、缺陷、其他",
        },
        {
          step: "3",
          title: "发现规律",
          desc: "一屏看清主导原因、总流失 MRR 与分类占比",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📋",
        title: "取消原因采集",
        desc: "结构化退出调研，无需自建。每条流失 30 秒记录完成。",
      },
      {
        icon: "📊",
        title: "分类占比看板",
        desc: "按原因柱状图、首要流失驱动、总 MRR 损失 — ChartMogul 给不了的上下文。",
      },
      {
        icon: "💬",
        title: "自由文本反馈",
        desc: "分类之外保留原话。「功能用不上却太贵」比数字更有用。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "取消记录不限量。不像企业客服工具按客户数收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "独立 SaaS 创始人",
        text: "流失率 5% 却不知原因。记录 20 条后发现「缺功能」占 40%。改完引导后降到 3.2%。",
      },
      {
        name: "Sarah L.",
        role: "独立开发者",
        text: "ChartMogul 给数字，这个给故事。光是不猜就值 $29。",
      },
      {
        name: "David K.",
        role: "自举开发者",
        text: "以为是价格问题。结果 60% 是因为从未激活核心功能。",
      },
    ],
    closing: {
      title: "别再猜客户为什么离开",
      subtitle: "免费体验 5 次记录 · 之后 $29/月不限量追踪",
      ctaPrimary: "免费记录取消",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "流失原因看板实时预览",
      caption: "取消记录 · 流失 MRR · 原因占比",
      preview:
        "📉 流失原因追踪                        最近记录：12 分钟前\n─────────────────────────────────────────────────────\n  取消数          流失 MRR       首要原因\n  24              $1,680         缺功能 (38%)\n─────────────────────────────────────────────────────\n  原因占比：\n  缺功能          ████████░░  38%   (9)\n  价格            █████░░░░░  25%   (6)\n  不用了          ████░░░░░░  21%   (5)\n  换竞品          ██░░░░░░░░  12%   (3)\n  其他            █░░░░░░░░░   4%   (1)\n─────────────────────────────────────────────────────\n  sarah@startup.io  $49/月  「需要 API 回调」\n  tom@indie.dev     $29/月  「个人用太贵」\n─────────────────────────────────────────────────────\n  [ + 记录取消 ]    [ 导出 CSV ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
