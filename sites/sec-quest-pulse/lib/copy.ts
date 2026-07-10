import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Vanta $5k+/yr · Conveyor $3k+/yr · $29/mo",
    title: "Fill enterprise security questionnaires in minutes — not weekends",
    subtitle:
      "B2B deal at the finish line? Upload the 250-row Excel security questionnaire, paste your security docs, and get AI-filled answers. 5 free fills, then $29/mo. No sales calls.",
    ctaPrimary: "Fill questionnaire free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free questionnaire fills · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Vanta $5k+/yr" },
      { stat: "250+", label: "questions auto-filled per upload" },
      { stat: "2 min", label: "to fill your first questionnaire" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste questionnaire",
          desc: "Copy questions from Excel, vendor portal, or procurement email — any format",
        },
        {
          step: "2",
          title: "Add answer bank",
          desc: "Paste your security policy, SOC 2 summary, or keyword:answer pairs",
        },
        {
          step: "3",
          title: "Download filled answers",
          desc: "AI matches questions to your docs. Export CSV or copy to spreadsheet",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📋",
        title: "Excel questionnaire import",
        desc: "Paste 250+ row security questionnaires. No manual reformatting required.",
      },
      {
        icon: "🤖",
        title: "AI answer matching",
        desc: "Maps encryption, SOC 2, GDPR, access control questions to your security docs.",
      },
      {
        icon: "📊",
        title: "Completion dashboard",
        desc: "See fill rate, unanswered questions, and export-ready answers in one view.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited questionnaire fills. No per-seat enterprise pricing like Vanta.",
      },
    ],
    testimonialsTitle: "What indie founders say",
    testimonials: [
      {
        name: "Marcus T.",
        role: "B2B SaaS founder",
        text: "Enterprise deal sent a 250-row security questionnaire. Spent my whole weekend filling it. This would have saved 8 hours.",
      },
      {
        name: "Jenny R.",
        role: "Solo founder",
        text: "Vanta quoted $5k/year. I just needed to answer one buyer's questionnaire. $29/mo is exactly right.",
      },
      {
        name: "Alex K.",
        role: "Indie hacker",
        text: "Pasted our security policy once. Filled 3 different buyer questionnaires in 10 minutes total.",
      },
    ],
    closing: {
      title: "Stop losing weekends to security questionnaires",
      subtitle: "5 free questionnaire fills · then $29/mo for unlimited auto-fill",
      ctaPrimary: "Fill questionnaire free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Security questionnaire auto-fill preview",
      caption: "Questions · AI answers · completion rate",
      preview:
        "🔒 SecQuest Pulse                       Last fill: 8 min ago\n─────────────────────────────────────────────────────\n  Questionnaires   Questions      Completion\n  3                247            94%\n─────────────────────────────────────────────────────\n  Q: Do you encrypt data at rest?\n  A: All data encrypted at rest (AES-256) and in transit (TLS 1.3).\n\n  Q: SOC 2 Type II certified?\n  A: SOC 2 Type II audit in progress. ISO 27001 controls documented.\n\n  Q: Penetration testing frequency?\n  A: Annual third-party pen test. Critical CVEs patched within 72h.\n─────────────────────────────────────────────────────\n  [ + Fill questionnaire ]    [ Export CSV ]",
    },
  },
  zh: {
    badge: "Vanta $5k+/年 · Conveyor $3k+/年 · $29/月",
    title: "企业安全问卷几分钟填完 — 不用牺牲整个周末",
    subtitle:
      "B2B 大单临门一脚？上传 250 行 Excel 安全问卷，粘贴安全文档，AI 自动填写答案。免费体验 5 次，之后 $29/月。无需销售电话。",
    ctaPrimary: "免费填写问卷",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Vanta 要 $5k+/年" },
      { stat: "250+", label: "每次上传自动填写题数" },
      { stat: "2 分钟", label: "完成首份问卷填写" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴问卷",
          desc: "从 Excel、采购门户或邮件复制题目 — 任意格式均可",
        },
        {
          step: "2",
          title: "添加答案库",
          desc: "粘贴安全政策、SOC 2 摘要或「关键词:答案」对照表",
        },
        {
          step: "3",
          title: "下载填写结果",
          desc: "AI 匹配题目与文档，导出 CSV 或复制到表格",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📋",
        title: "Excel 问卷导入",
        desc: "粘贴 250+ 行安全问卷，无需手动重新排版。",
      },
      {
        icon: "🤖",
        title: "AI 答案匹配",
        desc: "将加密、SOC 2、GDPR、访问控制等题目映射到你的安全文档。",
      },
      {
        icon: "📊",
        title: "完成度看板",
        desc: "一屏查看填写率、未答题与可导出答案。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "问卷填写不限量。不像 Vanta 按席位收企业价。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Marcus T.",
        role: "B2B SaaS 创始人",
        text: "企业客户发来 250 行安全问卷，我整个周末都在填。这个工具能省 8 小时。",
      },
      {
        name: "Jenny R.",
        role: "独立创始人",
        text: "Vanta 报价 $5k/年。我只需要回答一个买家的问卷。$29/月刚刚好。",
      },
      {
        name: "Alex K.",
        role: "独立开发者",
        text: "安全政策粘贴一次，10 分钟内填完 3 份不同买家的问卷。",
      },
    ],
    closing: {
      title: "别再为安全问卷牺牲周末",
      subtitle: "免费体验 5 次 · 之后 $29/月不限量自动填写",
      ctaPrimary: "免费填写问卷",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "安全问卷自动填写实时预览",
      caption: "题目 · AI 答案 · 完成率",
      preview:
        "🔒 安全问卷自动填写                      最近填写：8 分钟前\n─────────────────────────────────────────────────────\n  问卷数          题目数         完成率\n  3               247            94%\n─────────────────────────────────────────────────────\n  问：数据是否静态加密？\n  答：所有数据静态加密（AES-256）与传输加密（TLS 1.3）。\n\n  问：是否通过 SOC 2 Type II？\n  答：SOC 2 Type II 审计进行中，ISO 27001 控制项已文档化。\n\n  问：渗透测试频率？\n  答：每年第三方渗透测试，关键漏洞 72 小时内修复。\n─────────────────────────────────────────────────────\n  [ + 填写问卷 ]    [ 导出 CSV ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
