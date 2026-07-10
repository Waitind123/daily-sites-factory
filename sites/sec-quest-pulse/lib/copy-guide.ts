import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Security Questionnaire Auto-Fill Guide — Vanta Alternative for Indie SaaS",
      description:
        "Enterprise deal at the finish line? Learn how indie founders fill 250-row security questionnaires in minutes with AI, not weekends. Vanta $5k+/yr vs $29/mo flat.",
    },
    h1: "2026 Security Questionnaire Auto-Fill: Close B2B Deals Without Losing Weekends (Vanta Alternative)",
    updated: "Updated July 2026 · 10 min read",
    intro: [
      "You're three weeks into an enterprise deal. Product demo went well. Pricing agreed. Then procurement sends a 250-row Excel security questionnaire. Encryption at rest? SOC 2 Type II? Penetration testing frequency? GDPR data retention? You spend your entire weekend copying answers from scattered docs.",
      "On Hacker News, a solo founder wrote: \"We just spent 3 weeks chasing a $XXk enterprise deal. At the finish line, they sent a 250-row Excel security questionnaire. It took me my entire weekend to fill out. I looked at competitors ($5k+/year, overkill for us).\" The post got hundreds of upvotes — because every B2B indie founder has lived this.",
      "Enterprise compliance platforms like Vanta ($5,000+/year) and Conveyor ($3,000+/year) are built for companies pursuing SOC 2 certification year-round. They monitor controls, collect evidence, and maintain audit trails. Powerful — but massive overkill when you just need to answer one buyer's vendor security assessment.",
      "The gap is clear: indie SaaS founders selling to mid-market companies hit security questionnaires constantly, but cannot justify $5k/year compliance platforms for occasional questionnaire fills. They need a tool that takes their existing security policy, matches it to buyer questions, and exports filled answers in minutes.",
      "This guide explains the security questionnaire workflow, compares 2026 tools for bootstrapped founders, and shows how to auto-fill your first questionnaire in 2 minutes for $29/mo flat.",
    ],
    sections: [
      {
        h2: "Why security questionnaires kill indie B2B deals",
        paragraphs: ["Security questionnaires are not optional in enterprise sales:"],
        list: [
          "85% of mid-market buyers require vendor security assessment before contract signature",
          "Average questionnaire has 150-300 questions across encryption, access control, compliance, and incident response",
          "Manual fill takes 6-12 hours per questionnaire when answers are scattered across docs",
          "Deals stall 2-4 weeks while founders hunt for SOC 2 summaries and policy documents",
        ],
        after: [
          "The founder who responds fastest often wins — even if their security posture is identical to a slower competitor.",
        ],
      },
      {
        h2: "2026 security questionnaire tools compared",
        paragraphs: ["Here's how the main options stack up for indie founders:"],
        tools: [
          {
            h3: "Vanta — $5,000+/year",
            p: "Full compliance automation: SOC 2, ISO 27001, HIPAA monitoring. Excellent for companies pursuing certification. Overkill when you need to fill one buyer questionnaire, not maintain year-round audit evidence.",
          },
          {
            h3: "Conveyor / Drata — $3,000-8,000/year",
            p: "Similar to Vanta with trust center and questionnaire automation for certified companies. Requires onboarding, sales calls, and annual commitment. Not designed for solo founders with occasional enterprise deals.",
          },
          {
            h3: "Manual Excel + Google Docs — Free but expensive in time",
            p: "Copy-paste from security policy PDFs. Works for one questionnaire but does not scale across multiple buyers. No answer reuse, no completion tracking, no AI matching.",
          },
          {
            h3: "SecQuest Pulse — $29/mo flat",
            p: "Purpose-built for indie founders: paste questions, add answer bank from your security docs, AI fills answers in seconds. 5 free fills to validate before subscribing. CSV export for buyer submission.",
            link: { href: "/dashboard", text: "Fill questionnaire free", suffix: " — five fills, no credit card." },
          },
        ],
      },
      {
        h2: "How to auto-fill security questionnaires today",
        paragraphs: ["A 3-step workflow that takes 2 minutes per questionnaire:"],
        ordered: [
          "Build your answer bank once: paste security policy, SOC 2 summary, or keyword:answer pairs",
          "Paste buyer questionnaire questions — any format from Excel, portal, or email",
          "Review AI-filled answers, export CSV, and submit to buyer procurement",
        ],
        after: [
          "Reuse your answer bank across all buyers. Each new questionnaire takes minutes, not weekends. Subscribe at $29/mo when you exceed 5 free fills.",
        ],
      },
      {
        h2: "Building a reusable answer bank",
        paragraphs: ["The answer bank is your competitive advantage. Include these categories:"],
        list: [
          "Encryption: AES-256 at rest, TLS 1.3 in transit, key rotation policy",
          "Access control: SSO/SAML, MFA enforcement, role-based permissions",
          "Compliance: SOC 2 status, GDPR DPA, data retention and deletion",
          "Incident response: breach notification timeline, penetration test frequency",
          "Infrastructure: cloud provider, backup RTO/RPO, disaster recovery",
        ],
        after: [
          "Format as keyword:answer pairs for best AI matching. Example: \"encrypt: All data encrypted at rest (AES-256) and in transit (TLS 1.3).\"",
        ],
      },
    ],
    cta: {
      title: "Stop losing weekends to security questionnaires",
      subtitle: "5 free questionnaire fills. Then $29/mo for unlimited auto-fill.",
      button: "Fill questionnaire free →",
    },
  },
  zh: {
    meta: {
      title: "2026 安全问卷自动填写指南 — Vanta 替代品",
      description:
        "企业大单临门一脚？独立开发者如何用 AI 在几分钟内填完 250 行安全问卷，而非牺牲整个周末。Vanta $5k+/年对比 $29/月一口价。",
    },
    h1: "2026 安全问卷自动填写：不牺牲周末拿下 B2B 大单（Vanta 替代品）",
    updated: "更新于 2026 年 7 月 · 阅读约 10 分钟",
    intro: [
      "你跟进了三周的企业大单。产品演示顺利，价格也谈好了。然后采购发来 250 行 Excel 安全问卷。数据静态加密？SOC 2 Type II？渗透测试频率？GDPR 数据保留？你整个周末都在从各处文档复制粘贴答案。",
      "Hacker News 上一位独立创始人写道：「我们追了三个星期的大单，临门一脚对方发来 250 行安全问卷，我整个周末都在填。看了竞品（$5k+/年，对我们太重了）。」帖子获数百赞 — 因为每个卖 B2B 的独立开发者都经历过。",
      "Vanta（$5,000+/年）和 Conveyor（$3,000+/年）等合规平台是为全年追求 SOC 2 认证的公司设计的。它们监控控制项、收集证据、维护审计轨迹。功能强大 — 但如果你只需要回答一个买家的供应商安全评估，就太重了。",
      "缺口很明显：独立开发者向中型企业销售时经常遇到安全问卷，却无法为偶尔填写 justify $5k/年的合规平台。他们需要的是：拿现有安全政策、匹配买家题目、几分钟导出填写结果的工具。",
      "本指南介绍安全问卷工作流、对比 2026 年自举创始人的工具选择，并演示如何 2 分钟内自动填写首份问卷，$29/月一口价。",
    ],
    sections: [
      {
        h2: "为什么安全问卷会卡住独立开发者的 B2B 大单",
        paragraphs: ["企业销售中安全问卷不是可选项："],
        list: [
          "85% 的中型企业买家签约前要求供应商安全评估",
          "平均问卷 150-300 题，涵盖加密、访问控制、合规与事件响应",
          "答案散落在各处文档时，手动填写每份需 6-12 小时",
          "创始人找 SOC 2 摘要和政策文档时，大单常卡 2-4 周",
        ],
        after: [
          "回复最快的创始人往往赢 — 即使安全态势与慢半拍的竞品相同。",
        ],
      },
      {
        h2: "2026 安全问卷工具对比",
        paragraphs: ["以下是独立开发者的主要选择："],
        tools: [
          {
            h3: "Vanta — $5,000+/年",
            p: "全量合规自动化：SOC 2、ISO 27001、HIPAA 监控。适合追求认证的公司。只需填一份买家问卷时太重，不是为全年维护审计证据设计。",
          },
          {
            h3: "Conveyor / Drata — $3,000-8,000/年",
            p: "类似 Vanta，带信任中心与问卷自动化，面向已认证企业。需入职、销售电话和年付承诺。不是为偶尔签企业大单的独立开发者设计。",
          },
          {
            h3: "手动 Excel + 文档 — 免费但时间成本高",
            p: "从安全政策 PDF 复制粘贴。一份问卷还行，多个买家无法扩展。无答案复用、无完成度追踪、无 AI 匹配。",
          },
          {
            h3: "安全问卷自动填写 — $29/月一口价",
            p: "为独立开发者设计：粘贴题目、从安全文档添加答案库、AI 几秒内填写。免费体验 5 次验证价值。CSV 导出供买家提交。",
            link: { href: "/dashboard", text: "免费填写问卷", suffix: " — 五次体验，无需信用卡。" },
          },
        ],
      },
      {
        h2: "今天就开始自动填写安全问卷",
        paragraphs: ["三步工作流，每份问卷 2 分钟："],
        ordered: [
          "一次性建好答案库：粘贴安全政策、SOC 2 摘要或「关键词:答案」对照",
          "粘贴买家问卷题目 — Excel、门户或邮件任意格式",
          "复核 AI 填写结果，导出 CSV，提交给买家采购",
        ],
        after: [
          "答案库跨所有买家复用。每份新问卷几分钟而非整个周末。超过 5 次免费体验后 $29/月订阅。",
        ],
      },
      {
        h2: "构建可复用的答案库",
        paragraphs: ["答案库是你的竞争优势，应包含这些类别："],
        list: [
          "加密：AES-256 静态加密、TLS 1.3 传输、密钥轮换政策",
          "访问控制：SSO/SAML、MFA 强制、基于角色的权限",
          "合规：SOC 2 状态、GDPR DPA、数据保留与删除",
          "事件响应：泄露通知时限、渗透测试频率",
          "基础设施：云服务商、备份 RTO/RPO、灾难恢复",
        ],
        after: [
          "用「关键词:答案」格式获得最佳 AI 匹配。例如：「加密: 所有数据静态加密（AES-256）与传输加密（TLS 1.3）。」",
        ],
      },
    ],
    cta: {
      title: "别再为安全问卷牺牲周末",
      subtitle: "免费体验 5 次 · 之后 $29/月不限量自动填写",
      button: "免费填写问卷 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
