import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "DocuSign CLM $40+/seat · LegalOn $100+/mo · $29/mo",
    title: "Know what you're signing — AI contract risk scan in 60 seconds",
    subtitle:
      "Client sent a freelance contract? Paste the text, get risk score, flagged clauses, missing protections, and negotiation email. 5 free reviews, then $29/mo. No lawyer required.",
    ctaPrimary: "Review contract free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free contract reviews · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs lawyer $300+/hr" },
      { stat: "15+", label: "clause categories scanned" },
      { stat: "60 sec", label: "to review your first contract" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste contract",
          desc: "Copy text from PDF, Word, or email — NDAs, SOWs, MSAs, freelance agreements",
        },
        {
          step: "2",
          title: "AI risk scan",
          desc: "Flags payment traps, IP grabs, unlimited liability, non-competes, scope creep",
        },
        {
          step: "3",
          title: "Negotiate with confidence",
          desc: "Get redline suggestions and a ready-to-send negotiation email",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "⚠️",
        title: "Risk scoring 0-100",
        desc: "Every contract gets a risk score with high/medium/low severity breakdown.",
      },
      {
        icon: "🔍",
        title: "15+ clause categories",
        desc: "Payment terms, IP ownership, liability caps, non-competes, auto-renewal, scope creep.",
      },
      {
        icon: "📧",
        title: "Negotiation email draft",
        desc: "Copy-paste counter-language and a professional negotiation email in seconds.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited contract reviews. No per-seat enterprise pricing like DocuSign CLM.",
      },
    ],
    testimonialsTitle: "What freelancers say",
    testimonials: [
      {
        name: "Sarah M.",
        role: "Freelance designer",
        text: "Client buried Net-90 payment on page 12. Caught it before signing. Negotiated to Net-30 with 50% upfront.",
      },
      {
        name: "David L.",
        role: "Indie consultant",
        text: "Lawyer quoted $400 to review one SOW. This flagged the IP grab and unlimited liability in under a minute.",
      },
      {
        name: "Priya K.",
        role: "Solo developer",
        text: "The negotiation email draft saved me an hour. Client accepted 3 of 4 suggested changes on first reply.",
      },
    ],
    closing: {
      title: "Stop signing contracts blind",
      subtitle: "5 free contract reviews · then $29/mo for unlimited scans + negotiation drafts",
      ctaPrimary: "Review contract free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Contract risk scan preview",
      caption: "Risk score · flagged clauses · missing protections",
      preview:
        "📄 Contract Review Pulse              Last scan: 2 min ago\n─────────────────────────────────────────────────────\n  Risk Score    High    Medium    Missing\n  72/100        3       2         2\n─────────────────────────────────────────────────────\n  🔴 HIGH · Payment: Net-90 terms detected\n     → Negotiate Net-30 or 50% upfront deposit\n\n  🔴 HIGH · IP: Broad work-for-hire assignment\n     → Add pre-existing IP carve-out clause\n\n  🟡 MED · Auto-renewal without opt-in\n     → Require 30-day written notice before renewal\n─────────────────────────────────────────────────────\n  [ + Review contract ]    [ Copy negotiation email ]",
    },
  },
  zh: {
    badge: "DocuSign CLM $40+/席位 · LegalOn $100+/月 · $29/月",
    title: "签之前先看清 — AI 合同风险扫描 60 秒出结果",
    subtitle:
      "客户发来自由职业合同？粘贴文本，获得风险评分、问题条款、缺失保护项和谈判邮件草稿。免费体验 5 次，之后 $29/月。无需请律师。",
    ctaPrimary: "免费审查合同",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，律师要 $300+/小时" },
      { stat: "15+", label: "条款类别扫描" },
      { stat: "60 秒", label: "完成首份合同审查" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴合同",
          desc: "从 PDF、Word 或邮件复制文本 — 保密协议、工作说明书、主合同、自由职业协议",
        },
        {
          step: "2",
          title: "AI 风险扫描",
          desc: "标记付款陷阱、知识产权掠夺、无限责任、竞业限制、范围蔓延",
        },
        {
          step: "3",
          title: "自信谈判",
          desc: "获得修改建议和可直接发送的谈判邮件",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "⚠️",
        title: "风险评分 0-100",
        desc: "每份合同获得风险评分，附高/中/低严重度分类。",
      },
      {
        icon: "🔍",
        title: "15+ 条款类别",
        desc: "付款条件、知识产权、责任上限、竞业限制、自动续约、范围蔓延。",
      },
      {
        icon: "📧",
        title: "谈判邮件草稿",
        desc: "几秒内获得可复制反制语言和专业谈判邮件。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "合同审查不限量。不像 DocuSign CLM 按席位收企业价。",
      },
    ],
    testimonialsTitle: "自由职业者怎么说",
    testimonials: [
      {
        name: "Sarah M.",
        role: "自由设计师",
        text: "客户在第十二页藏了 Net-90 付款条款。签约前发现了，谈成 Net-30 加 50% 预付款。",
      },
      {
        name: "David L.",
        role: "独立顾问",
        text: "律师审一份工作说明书报价 $400。这个工具一分钟内标出了知识产权掠夺和无限责任。",
      },
      {
        name: "Priya K.",
        role: "独立开发者",
        text: "谈判邮件草稿省了我一小时。客户首轮回复就接受了 4 条建议中的 3 条。",
      },
    ],
    closing: {
      title: "别再盲目签合同",
      subtitle: "免费体验 5 次合同审查 · 之后 $29/月无限扫描 + 谈判草稿",
      ctaPrimary: "免费审查合同",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "合同风险扫描预览",
      caption: "风险评分 · 问题条款 · 缺失保护项",
      preview:
        "📄 合同审查助手                      上次扫描：2 分钟前\n─────────────────────────────────────────────────────\n  风险评分      高危    中危    缺失\n  72/100        3       2       2\n─────────────────────────────────────────────────────\n  🔴 高危 · 付款：检测到 Net-90 条款\n     → 谈判 Net-30 或 50% 预付款\n\n  🔴 高危 · 知识产权：宽泛雇佣作品转让\n     → 添加既有知识产权保留条款\n\n  🟡 中危 · 自动续约无主动确认\n     → 要求续约前 30 天书面通知\n─────────────────────────────────────────────────────\n  [ + 审查合同 ]    [ 复制谈判邮件 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
