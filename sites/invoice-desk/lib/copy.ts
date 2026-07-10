import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Sidepay $20/yr? · $29/mo unlimited",
    title: "Minimal invoicing for solo devs — no HoneyBook bloat",
    subtitle:
      "HN Show HN proved freelancers want $20/yr invoicing, not $66/mo CRM. Create invoices, track paid/unpaid, auto receipts. 5 free, then $29/mo.",
    ctaPrimary: "Create invoice free",
    ctaPrimaryHref: "/invoices",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free invoices · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs HoneyBook $66+" },
      { stat: "60s", label: "to create & send an invoice" },
      { stat: "3-in-1", label: "invoice · payment · receipt" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Fill client & line items",
          desc: "Client name, project title, line items with qty and price — done in under a minute",
        },
        {
          step: "2",
          title: "Send invoice markdown",
          desc: "Copy the formatted invoice to email or Slack — professional layout, due date auto-set",
        },
        {
          step: "3",
          title: "Mark paid → receipt",
          desc: "One click marks paid and generates a receipt number — no awkward chasing emails",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🧾",
        title: "Professional invoices",
        desc: "Auto invoice numbers, 15-day due dates, line item tables — look like you have a back office.",
      },
      {
        icon: "✅",
        title: "One-click receipts",
        desc: "Mark paid and get a receipt with payment date — clients love clean paperwork.",
      },
      {
        icon: "📊",
        title: "Outstanding tracker",
        desc: "See total outstanding vs paid at a glance — know who owes you money.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited invoices & receipts. No per-client fees like Bonsai transaction cuts.",
      },
    ],
    testimonialsTitle: "What freelancers say",
    testimonials: [
      {
        name: "Maya R.",
        role: "Freelance designer",
        text: "HoneyBook raised prices 89%. Invoice Desk does invoices + receipts for $29. That's all I need.",
      },
      {
        name: "Tom K.",
        role: "Indie consultant",
        text: "Bonsai wanted $24/mo for features I never use. I just send invoices and track who's paid.",
      },
      {
        name: "Lisa W.",
        role: "Solo developer",
        text: "5 free invoices let me test with real clients. Subscribed after my third project closed.",
      },
    ],
    closing: {
      title: "Send invoices without enterprise pricing",
      subtitle: "5 free invoices · then $29/mo unlimited",
      ctaPrimary: "Create invoice free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live invoice dashboard preview",
      caption: "Invoices · outstanding · receipts · payment status",
      preview:
        "🧾 Invoice Desk                       Last paid: 2 hours ago\n─────────────────────────────────────────────────────\n  INV-K7X2M9    Web redesign · Acme Corp\n  $3,200.00     Due Jun 10 · Status: Sent\n─────────────────────────────────────────────────────\n  Outstanding: $5,400    Paid this month: $8,200\n─────────────────────────────────────────────────────\n  Recent:\n  INV-M3P1Q8    Logo package      $800   ✓ Paid\n  INV-R9T4N2    API consulting  $2,400   Sent\n─────────────────────────────────────────────────────\n  [ Copy invoice ]  [ Mark paid ]  [ + New invoice ]",
    },
  },
  zh: {
    badge: "Sidepay $20/年？· $29/月不限量",
    title: "独立开发者极简发票 — 不交 HoneyBook 税",
    subtitle:
      "HN Show HN 证明自由职业者要 $20/年开票工具，不是 $66/月 CRM。创建发票、追踪待收、自动生成收据。免费体验 5 张，之后 $29/月。",
    ctaPrimary: "免费开发票",
    ctaPrimaryHref: "/invoices",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 张 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，HoneyBook 要 $66+" },
      { stat: "60 秒", label: "创建并发送一张发票" },
      { stat: "三合一", label: "发票 · 收款 · 收据" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "填写客户与明细",
          desc: "客户名称、项目名称、数量与单价 — 一分钟内完成",
        },
        {
          step: "2",
          title: "发送发票",
          desc: "复制格式化发票到邮件或 Slack — 专业排版，到期日自动设置",
        },
        {
          step: "3",
          title: "标记已付生成收据",
          desc: "一键标记已付并生成收据编号 — 告别尴尬的催款邮件",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🧾",
        title: "专业发票",
        desc: "自动发票编号、15 天到期日、明细表格 — 让客户觉得你有个完整后勤团队。",
      },
      {
        icon: "✅",
        title: "一键收据",
        desc: "标记已付即生成带付款日期的收据 — 客户喜欢干净的单据。",
      },
      {
        icon: "📊",
        title: "待收追踪",
        desc: "一屏看清待收与已收总额 — 知道谁还欠你钱。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "发票与收据不限量。无 Bonsai 按客户收取的交易费。",
      },
    ],
    testimonialsTitle: "自由职业者怎么说",
    testimonials: [
      {
        name: "Maya R.",
        role: "自由设计师",
        text: "HoneyBook 涨价 89%。发票收据管理用 $29 搞定发票和收据，正是我需要的。",
      },
      {
        name: "Tom K.",
        role: "独立顾问",
        text: "Bonsai 要 $24/月买一堆用不上的功能。我只开发票、看谁付了款。",
      },
      {
        name: "Lisa W.",
        role: "独立开发者",
        text: "5 张免费发票让我用真实客户测试。第三个项目结款后就订阅了。",
      },
    ],
    closing: {
      title: "不用企业级定价也能开发票",
      subtitle: "免费体验 5 张发票 · 之后 $29/月不限量",
      ctaPrimary: "免费开发票",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "发票控制台实时预览",
      caption: "发票 · 待收 · 收据 · 付款状态",
      preview:
        "🧾 极简发票工具                        最近收款：2 小时前\n─────────────────────────────────────────────────────\n  INV-K7X2M9    网站改版 · Acme 公司\n  $3,200.00     到期 6月10日 · 状态：已发送\n─────────────────────────────────────────────────────\n  待收：$5,400    本月已收：$8,200\n─────────────────────────────────────────────────────\n  最近：\n  INV-M3P1Q8    Logo 设计包      $800   ✓ 已付\n  INV-R9T4N2    API 咨询        $2,400   已发送\n─────────────────────────────────────────────────────\n  [ 复制发票 ]  [ 标记已付 ]  [ + 新建发票 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
