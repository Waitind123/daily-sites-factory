import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Freelance Contract Review Guide — AI Alternative to $300/hr Lawyers",
      description:
        "Signing a client contract blind? Learn how freelancers scan for payment traps, IP grabs, and unlimited liability in 60 seconds with AI. Lawyer $300+/hr vs $29/mo flat.",
    },
    h1: "2026 Freelance Contract Review: Sign With Confidence, Not Anxiety (AI Alternative to Lawyers)",
    updated: "Updated July 2026 · 10 min read",
    intro: [
      "A new client sends you a 'standard' freelance agreement. Twelve pages of legal jargon. You skim it, sign, and start work. Three months later, you discover Net-90 payment terms buried on page 8. The IP clause hands over your pre-existing tools. There's no liability cap — one bug could cost more than the entire project fee.",
      "On Reddit r/SaaS, a freelance developer wrote: 'I signed a client SOW without reading it properly. They claimed ownership of my entire codebase including libraries I built before the project. Lawyer quoted $400 just to review one contract. I wish there was a $10/month tool that flags the risky clauses.' The post resonated with thousands of freelancers who've been burned by contracts they didn't fully understand.",
      "Enterprise contract lifecycle management tools like DocuSign CLM ($40+/seat/month) and LegalOn ($100+/month) are built for legal teams managing hundreds of contracts. They offer workflow automation, approval chains, and clause libraries. Powerful — but massive overkill when you're a solo freelancer reviewing one client SOW per month.",
      "The gap is clear: freelancers and indie consultants sign client contracts constantly but cannot justify $300/hour attorney fees for every agreement. They need a tool that scans contract text, flags risky clauses with plain-English explanations, and generates negotiation language they can send back to clients.",
      "This guide explains the freelance contract review workflow, compares 2026 tools for bootstrapped founders, and shows how to review your first contract in 60 seconds for $29/mo flat.",
    ],
    sections: [
      {
        h2: "Why freelancers sign dangerous contracts",
        paragraphs: ["The statistics on freelance contract problems are sobering:"],
        list: [
          "71% of freelancers report experiencing non-payment or late payment — often due to unclear contract terms",
          "Average freelancer spends 0 minutes reviewing 'standard' client templates before signing",
          "Broad IP assignment clauses can transfer ownership of pre-existing tools and portfolio work",
          "Uncapped liability clauses can exceed the entire contract value from a single dispute",
          "Net-60/90 payment terms delay cash flow for months while work is already delivered",
        ],
        after: [
          "The freelancer who catches risky clauses before signing saves thousands. The one who signs blind often learns expensive lessons.",
        ],
      },
      {
        h2: "2026 contract review tools compared",
        paragraphs: ["Here's how the main options stack up for freelancers:"],
        tools: [
          {
            h3: "Lawyer review — $300-600 per contract",
            p: "Thorough and legally binding advice. Excellent for complex enterprise MSAs. Overkill for standard freelance SOWs when you just need to flag payment terms and IP traps before signing.",
          },
          {
            h3: "DocuSign CLM / Ironclad — $40-100+/seat/month",
            p: "Full contract lifecycle management for legal teams. Workflow automation, approval chains, clause libraries. Requires onboarding and annual commitment. Not designed for solo freelancers reviewing occasional client agreements.",
          },
          {
            h3: "ChatGPT / generic AI — Free but unreliable",
            p: "Can summarize contracts but lacks freelancer-specific clause detection, risk scoring, and negotiation templates. No structured output, no missing protection alerts, no persistent dashboard.",
          },
          {
            h3: "Contract Review Pulse — $29/mo flat",
            p: "Purpose-built for freelancers: paste contract text, get risk score, flagged clauses with severity ratings, missing protection alerts, and negotiation email draft. 5 free reviews to validate before subscribing.",
            link: { href: "/dashboard", text: "Review contract free", suffix: " — five reviews, no credit card." },
          },
        ],
      },
      {
        h2: "The 5 clause categories that matter most",
        paragraphs: ["Focus your review on these high-impact areas:"],
        list: [
          "Payment terms: Net-30 is standard. Net-60/90 delays your cash flow. Always negotiate upfront deposit (30-50%)",
          "IP ownership: 'Work for hire' clauses may transfer your pre-existing tools. Add carve-out for background IP",
          "Liability caps: Uncapped liability is the biggest financial risk. Cap at fees paid in prior 12 months",
          "Scope boundaries: 'Unlimited revisions' and 'until satisfaction' enable scope creep without extra pay",
          "Termination: Short notice without kill fee leaves you unpaid for work in progress",
        ],
        after: [
          "AI contract review tools scan all five categories in seconds and generate specific counter-language for each flagged clause.",
        ],
      },
      {
        h2: "How to review a contract in 60 seconds today",
        paragraphs: ["A 3-step workflow that takes one minute:"],
        ordered: [
          "Copy contract text from PDF, Word, or email into the review tool",
          "Review the risk score and flagged clauses — focus on HIGH severity items first",
          "Copy the negotiation email draft and send to your client within 24 hours",
        ],
        after: [
          "Most clients accept reasonable changes when you explain them professionally. The negotiation email draft handles the tone and structure. Subscribe at $29/mo when you exceed 5 free reviews.",
        ],
      },
      {
        h2: "Building your personal clause library",
        paragraphs: ["Over time, build a library of clauses you've successfully negotiated:"],
        list: [
          "Payment: '50% upfront, 50% on delivery. Net-30 from invoice date.'",
          "IP: 'Contractor retains all pre-existing IP, tools, and general know-how.'",
          "Liability: 'Total liability capped at fees paid in the 12 months preceding any claim.'",
          "Revisions: 'Includes 2 revision rounds per deliverable. Additional at $X/hour.'",
          "Kill fee: 'Early termination requires 25% of remaining contract value.'",
        ],
        after: [
          "Save accepted redlines from each negotiation. Your clause library becomes a competitive advantage — you negotiate faster with each new client.",
        ],
      },
    ],
    cta: {
      title: "Stop signing contracts blind",
      subtitle: "5 free contract reviews. Then $29/mo for unlimited scans + negotiation emails.",
      button: "Review contract free →",
    },
  },
  zh: {
    meta: {
      title: "2026 自由职业合同审查指南 — AI 替代 $300/小时律师",
      description:
        "盲目签客户合同？自由职业者如何用 AI 在 60 秒内扫描付款陷阱、知识产权掠夺和无限责任。律师 $300+/小时对比 $29/月一口价。",
    },
    h1: "2026 自由职业合同审查：自信签约，不再焦虑（AI 替代律师）",
    updated: "更新于 2026 年 7 月 · 阅读约 10 分钟",
    intro: [
      "新客户发来一份「标准」自由职业协议。十二页法律术语。你扫一眼，签了，开始干活。三个月后才发现第八页藏着 Net-90 付款条款。知识产权条款把你项目前已有的工具也转让了。没有责任上限 — 一个 bug 的损失可能超过整个项目费用。",
      "Reddit r/SaaS 上一位自由职业开发者写道：「我没仔细读就签了客户工作说明书。他们声称拥有我全部代码库，包括项目前我建的库。律师审一份合同报价 $400。真希望有个 $10/月的工具能标出问题条款。」帖子引起数千自由职业者共鸣 — 大家都被没完全理解的合同坑过。",
      "DocuSign CLM（$40+/席位/月）和 LegalOn（$100+/月）等企业合同生命周期管理工具是为管理数百份合同的法律团队设计的。它们提供工作流自动化、审批链和条款库。功能强大 — 但如果你只是每月审一份客户工作说明书，就太重了。",
      "缺口很明显：自由职业者和独立顾问经常签客户合同，却无法为每份协议 justify $300/小时的律师费。他们需要的是：扫描合同文本、用通俗语言标出问题条款、生成可发回客户的谈判语言的工具。",
      "本指南介绍自由职业合同审查工作流、对比 2026 年自举创始人的工具选择，并演示如何 60 秒内审查首份合同，$29/月一口价。",
    ],
    sections: [
      {
        h2: "为什么自由职业者会签危险合同",
        paragraphs: ["自由职业合同问题的数据令人警醒："],
        list: [
          "71% 的自由职业者报告遭遇拖欠或延迟付款 — 常因合同条款不清晰",
          "平均每位自由职业者签「标准」客户模板前花 0 分钟审查",
          "宽泛知识产权转让条款可能转移你既有工具和作品集的所有权",
          "无上限责任条款可能让单次纠纷损失超过整份合同金额",
          "Net-60/90 付款条款在交付工作后还要拖几个月才收款",
        ],
        after: [
          "签约前发现问题条款的自由职业者能省下数千美元。盲目签约的人往往用惨痛代价学习。",
        ],
      },
      {
        h2: "2026 合同审查工具对比",
        paragraphs: ["以下是自由职业者的主要选择："],
        tools: [
          {
            h3: "律师审查 — 每份合同 $300-600",
            p: "全面且具法律约束力的建议。适合复杂企业主合同。标准自由职业工作说明书只需标出付款和知识产权陷阱时太重。",
          },
          {
            h3: "DocuSign CLM / Ironclad — $40-100+/席位/月",
            p: "法律团队的全量合同生命周期管理。工作流自动化、审批链、条款库。需入职和年付承诺。不是为偶尔审客户协议的独立自由职业者设计。",
          },
          {
            h3: "ChatGPT / 通用 AI — 免费但不可靠",
            p: "能总结合同但缺少自由职业者专用条款检测、风险评分和谈判模板。无结构化输出、无缺失保护提醒、无持久看板。",
          },
          {
            h3: "合同审查助手 — $29/月一口价",
            p: "为自由职业者设计：粘贴合同文本，获得风险评分、带严重度的问题条款、缺失保护提醒和谈判邮件草稿。免费体验 5 次验证价值。",
            link: { href: "/dashboard", text: "免费审查合同", suffix: " — 五次体验，无需信用卡。" },
          },
        ],
      },
      {
        h2: "最重要的 5 类条款",
        paragraphs: ["审查时优先关注这些高影响领域："],
        list: [
          "付款条件：Net-30 是标准。Net-60/90 拖慢现金流。始终谈判预付款（30-50%）",
          "知识产权：「雇佣作品」条款可能转让你既有工具。添加背景知识产权保留条款",
          "责任上限：无上限责任是最大财务风险。上限设为过去 12 个月已付费用",
          "范围边界：「无限修改」和「直到满意」让范围蔓延却不加钱",
          "终止条款：短通知期无违约金会让你进行中的工作白干",
        ],
        after: [
          "AI 合同审查工具几秒内扫描全部五类，并为每个问题条款生成具体反制语言。",
        ],
      },
      {
        h2: "今天 60 秒审查一份合同",
        paragraphs: ["三步工作流，一分钟完成："],
        ordered: [
          "从 PDF、Word 或邮件复制合同文本到审查工具",
          "查看风险评分和问题条款 — 优先处理高危项",
          "复制谈判邮件草稿，24 小时内发给客户",
        ],
        after: [
          "专业解释下大多数客户会接受合理修改。谈判邮件草稿帮你把握语气和结构。超过 5 次免费体验后 $29/月订阅。",
        ],
      },
      {
        h2: "建立个人条款库",
        paragraphs: ["逐步积累成功谈判过的条款："],
        list: [
          "付款：「50% 预付，50% 交付时付。发票日起 Net-30。」",
          "知识产权：「承包商保留所有既有知识产权、工具和通用技术。」",
          "责任：「总责任上限为索赔前 12 个月已付费用。」",
          "修改：「每份交付物含 2 轮修改。额外按 $X/小时计费。」",
          "违约金：「提前终止需付剩余合同金额 25% 违约金。」",
        ],
        after: [
          "保存每次谈判中客户接受的修改。条款库会成为竞争优势 — 每个新客户你谈判得更快。",
        ],
      },
    ],
    cta: {
      title: "别再盲目签合同",
      subtitle: "免费体验 5 次 · 之后 $29/月无限扫描 + 谈判邮件",
      button: "免费审查合同 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
