import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    metaTitle: "GDPR Compliance Self-Check Guide for Indie SaaS Founders",
    metaDescription:
      "Complete guide to GDPR basics for bootstrapped founders: cookie consent, DPAs, privacy policies, and data subject requests — without $10K/year compliance platforms.",
    title: "GDPR Compliance Self-Check: How Indie Founders Sell to EU Customers",
    updated: "Updated July 2026 · 12 min read",
    ctaTitle: "Ready to scan your SaaS stack?",
    ctaButton: "Try 5 free scans",
    sections: [
      {
        type: "p" as const,
        text: "If you sell SaaS to customers in the EU or UK, GDPR applies regardless of where your company is registered. Enterprise buyers increasingly ask for a Data Processing Agreement (DPA), sub-processor list, and proof of cookie consent before signing. Lawyers charge $300–500/hour. Vanta and Drata start at $10,000/year. Most bootstrapped founders need a faster path.",
      },
      {
        type: "h2" as const,
        text: "The 5 checkpoints that block most indie deals",
      },
      {
        type: "p" as const,
        text: "After scanning hundreds of indie SaaS stacks, the same gaps appear repeatedly. Fix these before your first EU enterprise call.",
      },
      {
        type: "ul" as const,
        items: [
          "Cookie consent before analytics — Google Analytics and PostHog must not fire until the user opts in (GDPR Art. 7 + ePrivacy Directive).",
          "Published privacy policy — must name your data types, lawful basis, retention, and contact email (Art. 13–14).",
          "DPAs with processors — Stripe, Vercel, Supabase, and email tools process personal data on your behalf (Art. 28).",
          "Data subject request process — users can request access, deletion, or portability within 30 days (Art. 15–22).",
          "Sub-processor transparency — list all third parties in your privacy policy and notify customers of changes.",
        ],
      },
      {
        type: "h2" as const,
        text: "How to run a 3-minute self-check",
      },
      {
        type: "p" as const,
        text: "GDPR Pulse walks you through your stack in under three minutes. List your product name, website, and processors (Stripe, analytics, hosting). Toggle what data you collect and whether you already have a privacy policy and cookie banner. You receive a scored checklist with pass/warn/fail status, GDPR article references, and copy-paste fixes.",
        links: [{ href: "/scan", label: "GDPR scanner" }],
      },
      {
        type: "p" as const,
        text: "A privacy policy markdown draft is generated based on your answers — ready to publish after a quick legal review. This is not legal advice, but it covers 80% of what enterprise procurement questionnaires ask for.",
      },
      {
        type: "ol" as const,
        items: [
          "List your product name, website URL, and sub-processors (Stripe, Vercel, analytics).",
          "Toggle what data you collect: email, payments, cookies, analytics.",
          "Check whether you already have a privacy policy, cookie banner, and signed DPAs.",
          "Run the scan — review pass/warn/fail items with GDPR article references.",
          "Copy the privacy policy draft and fix critical gaps before your next EU sales call.",
        ],
      },
      {
        type: "h2" as const,
        text: "Cookie banners: the most common failure",
      },
      {
        type: "p" as const,
        text: "A footer link to 'Privacy Policy' is not enough if you run Google Analytics, Hotjar, or Facebook Pixel. Non-essential cookies require explicit opt-in consent before loading. Use a consent manager that blocks scripts until acceptance. Log consent timestamps. Honour withdrawal — if a user revokes consent, stop tracking immediately.",
      },
      {
        type: "table" as const,
        headers: ["Common mistake", "Better approach"],
        rows: [
          ["Analytics fires on page load", "Block GA/PostHog until user clicks Accept"],
          ["Generic 'We use cookies' banner", "Name each processor and purpose in the banner"],
          ["No DSR email address", "Add privacy@yourdomain.com with 30-day SLA"],
          ["Privacy policy from 2021", "Update when you add new processors"],
        ],
      },
      {
        type: "h2" as const,
        text: "Stripe, Vercel, and the DPA question",
      },
      {
        type: "p" as const,
        text: "When enterprise procurement asks 'Do you have DPAs with your sub-processors?', they mean legal agreements governing how third parties handle customer data. Stripe, Vercel, Supabase, and most major providers offer standard DPAs in their dashboards — often free. Download them, note the effective date, and link your sub-processor list in your privacy policy. You are the data controller. Stripe is a processor for payment metadata.",
      },
      {
        type: "h2" as const,
        text: "Privacy policy vs legal advice",
      },
      {
        type: "p" as const,
        text: "GDPR Pulse generates structured policy drafts — not legal advice. For high-stakes enterprise contracts, complex international transfers, or health/financial data, consult a qualified lawyer. For most indie SaaS products (email + Stripe + analytics), a well-structured policy satisfies most procurement teams.",
      },
      {
        type: "h2" as const,
        text: "Pricing: $9.9/mo vs enterprise compliance tools",
      },
      {
        type: "p" as const,
        text: "Syncelle charges $290/year for document bundles. Vanta starts at $10K/year. OpenGDPR is free but code-only. GDPR Pulse at $9.9/month gives unlimited scans, policy drafts, and checklist exports — built for founders who ship fast and sell to EU customers without a compliance team.",
        links: [{ href: "/join", label: "View pricing" }],
      },
    ],
  },
  zh: {
    metaTitle: "独立开发者 GDPR 合规自检指南",
    metaDescription:
      "面向自举创始人的 GDPR 实用指南：Cookie 同意、DPA、隐私政策与数据主体请求 — 无需年费 $10K 的合规平台。",
    title: "GDPR 合规自检：独立开发者如何服务欧盟客户",
    updated: "2026 年 7 月更新 · 阅读约 12 分钟",
    ctaTitle: "准备好扫描你的 SaaS 技术栈了吗？",
    ctaButton: "免费体验 5 次",
    sections: [
      {
        type: "p" as const,
        text: "若你向欧盟或英国客户销售 SaaS，无论公司注册地在哪里，GDPR 都适用。企业采购方 increasingly 要求数据处理协议（DPA）、子处理器清单和 Cookie 同意证明。律师收费 $300–500/小时。Vanta 与 Drata 年费 $10,000 起。大多数自举创始人需要更快路径。",
      },
      {
        type: "h2" as const,
        text: "阻碍多数独立开发者成交的 5 项检查",
      },
      {
        type: "p" as const,
        text: "扫描数百个独立 SaaS 技术栈后，相同缺口反复出现。在第一次欧盟企业通话前修复这些。",
      },
      {
        type: "ul" as const,
        items: [
          "分析前 Cookie 同意 — Google Analytics 与 PostHog 须在用户 opt-in 后才加载（GDPR 第 7 条 + ePrivacy 指令）。",
          "已发布隐私政策 — 须写明数据类型、法律依据、保留期限与联系邮箱（第 13–14 条）。",
          "与处理器签署 DPA — Stripe、Vercel、Supabase 与邮件工具代你处理个人数据（第 28 条）。",
          "数据主体请求流程 — 用户可在 30 天内请求访问、删除或可携带（第 15–22 条）。",
          "子处理器透明 — 在隐私政策中列出所有第三方，变更时通知客户。",
        ],
      },
      {
        type: "h2" as const,
        text: "如何完成 3 分钟自检",
      },
      {
        type: "p" as const,
        text: "GDPR Pulse 三分钟内带你过一遍技术栈。填写产品名、网站与处理器（Stripe、分析、托管）。勾选收集的数据类型，以及是否已有隐私政策与 Cookie 横幅。你将获得带通过/警告/失败状态的评分清单、GDPR 条款引用与可复制修复建议。",
        links: [{ href: "/scan", label: "GDPR 扫描器" }],
      },
      {
        type: "p" as const,
        text: "并根据答案生成隐私政策 Markdown 草稿 — 经简短法务审阅即可发布。这不是法律意见，但可覆盖 80% 企业采购问卷所问。",
      },
      {
        type: "ol" as const,
        items: [
          "填写产品名、网站 URL 与子处理器（Stripe、Vercel、分析工具）。",
          "勾选收集的数据：邮箱、支付、Cookie、分析。",
          "确认是否已有隐私政策、Cookie 横幅与已签 DPA。",
          "运行扫描 — 查看带 GDPR 条款引用的通过/警告/失败项。",
          "复制隐私政策草稿，在下次欧盟销售通话前修复关键缺口。",
        ],
      },
      {
        type: "h2" as const,
        text: "Cookie 横幅：最常见失败项",
      },
      {
        type: "p" as const,
        text: "若你运行 Google Analytics、Hotjar 或 Facebook Pixel，页脚「隐私政策」链接不够。非必要 Cookie 须在加载前获得明确 opt-in 同意。使用在用户接受前阻止脚本的同意管理器。记录同意时间戳。尊重撤回 — 用户撤销同意后立即停止追踪。",
      },
      {
        type: "table" as const,
        headers: ["常见错误", "更好做法"],
        rows: [
          ["页面加载即触发分析", "用户点击接受前阻止 GA/PostHog"],
          ["笼统的「我们使用 Cookie」", "在横幅中写明各处理器与用途"],
          ["无 DSR 联系邮箱", "添加 privacy@你的域名.com 并承诺 30 天处理"],
          ["2021 年的隐私政策", "新增处理器时及时更新"],
        ],
      },
      {
        type: "h2" as const,
        text: "Stripe、Vercel 与 DPA 问题",
      },
      {
        type: "p" as const,
        text: "企业采购问「是否与子处理器签有 DPA？」时，指的是规范第三方如何处理客户数据的法律协议。Stripe、Vercel、Supabase 与多数主流提供商在控制台提供免费标准 DPA。下载并记录生效日期，在隐私政策中链接子处理器清单。你是数据控制者。Stripe 是支付元数据的处理器。",
      },
      {
        type: "h2" as const,
        text: "隐私政策 vs 法律意见",
      },
      {
        type: "p" as const,
        text: "GDPR Pulse 生成结构化政策草稿 — 非法律意见。高赌注企业合同、复杂跨境传输或健康/金融数据，请咨询合格律师。对多数独立 SaaS（邮箱 + Stripe + 分析），规范政策可满足多数采购团队。",
      },
      {
        type: "h2" as const,
        text: "定价：$9.9/月 vs 企业合规工具",
      },
      {
        type: "p" as const,
        text: "Syncelle 文档包 $290/年。Vanta 年费 $10K 起。OpenGDPR 免费但仅扫代码。GDPR Pulse $9.9/月提供无限扫描、政策草稿与清单导出 — 为快速 ship、向欧盟客户销售且无合规团队的创始人打造。",
        links: [{ href: "/join", label: "查看定价" }],
      },
    ],
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
