import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Poland e-invoice Apr 2026 · UBL 2.1 compliant",
    title: "EU e-invoice compliance in your browser — no enterprise tax software",
    subtitle:
      "Poland mandates KSeF e-invoices from April 2026. Generate EN16931 UBL XML, validate VAT fields, export multi-currency invoices. 5 free, then $9.9/mo.",
    ctaPrimary: "Generate UBL invoice free",
    ctaPrimaryHref: "/invoices",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free invoices · then $9.9/mo",
    stats: [
      { stat: "UBL 2.1", label: "EN16931 compliant XML export" },
      { stat: "5 min", label: "from form to KSeF-ready file" },
      { stat: "EUR/PLN", label: "multi-currency + VAT validation" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Enter seller & buyer VAT",
          desc: "Your VAT ID, country code, buyer details — compliance checklist runs live",
        },
        {
          step: "2",
          title: "Add line items & currency",
          desc: "EUR, PLN, GBP or USD — VAT rate auto-applied per EU rules",
        },
        {
          step: "3",
          title: "Download UBL XML",
          desc: "One-click export of Peppol-ready UBL 2.1 invoice for KSeF submission",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🇪🇺",
        title: "UBL 2.1 XML export",
        desc: "EN16931 + Peppol billing 3.0 profile — the format Poland KSeF expects in 2026.",
      },
      {
        icon: "✅",
        title: "Live compliance score",
        desc: "Real-time checklist: VAT IDs, ISO country/currency codes, mandatory fields.",
      },
      {
        icon: "💱",
        title: "Multi-currency",
        desc: "EUR, PLN, USD, GBP — one tool for cross-border EU freelancers.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited UBL exports. No per-invoice fees like enterprise tax suites.",
      },
    ],
    testimonialsTitle: "What EU freelancers say",
    testimonials: [
      {
        name: "Anna K.",
        role: "Warsaw consultant",
        text: "Poland e-invoice deadline scared me. This generates KSeF-ready UBL in 5 minutes for $9.9/mo.",
      },
      {
        name: "Marco B.",
        role: "Remote dev, Italy",
        text: "I bill clients in EUR and PLN. VAT validation catches missing buyer IDs before I submit.",
      },
      {
        name: "Sophie L.",
        role: "Freelance designer, France",
        text: "5 free invoices let me test with my accountant. Subscribed after the compliance score hit 100%.",
      },
    ],
    closing: {
      title: "Ship EU-compliant invoices before the deadline",
      subtitle: "5 free UBL exports · then $9.9/mo unlimited",
      ctaPrimary: "Generate UBL invoice free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live e-invoice compliance preview",
      caption: "UBL export · compliance score · VAT validation · multi-currency",
      preview:
        "🇪🇺 EU E-Invoice Compliance              Compliance: 100%\n─────────────────────────────────────────────────────\n  Seller: PL1234567890  ·  Buyer: DE987654321\n  INV-EU7X2M9    Consulting · Acme GmbH\n  €2,400.00     VAT 23% · Due Jul 18 · EUR\n─────────────────────────────────────────────────────\n  ✓ Seller VAT ID    ✓ ISO country codes\n  ✓ UBL 2.1 structure ✓ Peppol profile ID\n─────────────────────────────────────────────────────\n  [ Download UBL XML ]  [ Copy invoice ]  [ + New ]",
    },
  },
  zh: {
    badge: "波兰 2026 年 4 月强制电子发票 · UBL 2.1 合规",
    title: "浏览器端欧盟电子发票合规 — 不用企业税务软件",
    subtitle:
      "波兰 2026 年 4 月起强制 KSeF 电子发票。生成 EN16931 UBL XML、校验增值税字段、多币种导出。免费体验 5 张，之后 $9.9/月。",
    ctaPrimary: "免费生成 UBL 发票",
    ctaPrimaryHref: "/invoices",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 张 · 之后 $9.9/月",
    stats: [
      { stat: "UBL 2.1", label: "EN16931 合规 XML 导出" },
      { stat: "5 分钟", label: "从表单到 KSeF 就绪文件" },
      { stat: "EUR/PLN", label: "多币种 + 增值税校验" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "填写买卖双方增值税号",
          desc: "你的增值税号、国家代码、买方信息 — 合规清单实时检查",
        },
        {
          step: "2",
          title: "添加明细与币种",
          desc: "欧元、兹罗提、英镑或美元 — 按欧盟规则自动应用税率",
        },
        {
          step: "3",
          title: "下载 UBL XML",
          desc: "一键导出 Peppol 就绪的 UBL 2.1 发票，用于 KSeF 提交",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🇪🇺",
        title: "UBL 2.1 XML 导出",
        desc: "EN16931 + Peppol billing 3.0 配置 — 波兰 KSeF 2026 年要求的格式。",
      },
      {
        icon: "✅",
        title: "实时合规评分",
        desc: "实时清单：增值税号、ISO 国家/货币代码、必填字段。",
      },
      {
        icon: "💱",
        title: "多币种",
        desc: "欧元、兹罗提、美元、英镑 — 一个工具搞定跨境欧盟自由职业。",
      },
      {
        icon: "💰",
        title: "$9.9/月一口价",
        desc: "UBL 导出不限量。无企业税务套件按张收费。",
      },
    ],
    testimonialsTitle: "欧盟自由职业者怎么说",
    testimonials: [
      {
        name: "Anna K.",
        role: "华沙顾问",
        text: "波兰电子发票截止日期让我很慌。这个工具 5 分钟生成 KSeF 就绪 UBL，$9.9/月。",
      },
      {
        name: "Marco B.",
        role: "远程开发者，意大利",
        text: "我用欧元和兹罗提开票。增值税校验在提交前就能发现缺失的买方税号。",
      },
      {
        name: "Sophie L.",
        role: "自由设计师，法国",
        text: "5 张免费发票让我和会计师测试。合规评分到 100% 后就订阅了。",
      },
    ],
    closing: {
      title: "在截止日期前上线欧盟合规发票",
      subtitle: "免费体验 5 次 UBL 导出 · 之后 $9.9/月不限量",
      ctaPrimary: "免费生成 UBL 发票",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "电子发票合规实时预览",
      caption: "UBL 导出 · 合规评分 · 增值税校验 · 多币种",
      preview:
        "🇪🇺 欧盟电子发票合规                    合规评分：100%\n─────────────────────────────────────────────────────\n  卖方：PL1234567890  ·  买方：DE987654321\n  INV-EU7X2M9    咨询费 · Acme GmbH\n  €2,400.00     增值税 23% · 到期 7月18日 · 欧元\n─────────────────────────────────────────────────────\n  ✓ 卖方增值税号    ✓ ISO 国家代码\n  ✓ UBL 2.1 结构   ✓ Peppol 配置 ID\n─────────────────────────────────────────────────────\n  [ 下载 UBL XML ]  [ 复制发票 ]  [ + 新建 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
