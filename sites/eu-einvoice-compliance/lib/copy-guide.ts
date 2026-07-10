import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "Poland E-Invoice UBL Compliance 2026 — Complete Guide for EU Freelancers",
      description:
        "Poland mandates KSeF e-invoices from April 2026. Learn EN16931 UBL 2.1 requirements, VAT field validation, and how to generate Peppol-ready XML without enterprise tax software.",
    },
    h1: "Poland E-Invoice UBL Compliance 2026: Complete Guide for EU Freelancers",
    updated: "Updated July 2026 · 14 min read",
    intro: [
      "If you're a freelancer billing clients in Poland or anywhere in the EU, April 2026 is a deadline you cannot ignore. Poland's Ministry of Finance made structured e-invoicing mandatory through the KSeF (National e-Invoice System). Paper PDFs and simple email attachments no longer cut it — you need machine-readable UBL 2.1 XML that passes EN16931 validation.",
      "HN thread #47625069 lit up when easyinvoicepdf launched: founders asked \"why does every e-invoice tool cost €50/month?\" Reddit r/SaaS filled with posts from Warsaw consultants panicking about KSeF onboarding. Indie Hackers threads compare Vatify, Basware, and enterprise suites that price out solo freelancers.",
      "The uncomfortable truth: most EU freelancers don't need a full ERP. They need five things: enter seller and buyer VAT IDs, add line items in EUR or PLN, validate mandatory fields, export UBL XML, and submit to KSeF or send via Peppol. That's it.",
      "Enterprise tax suites charge per invoice or per legal entity. A Warsaw designer billing 4 clients per month doesn't need SAP. They need a browser tool that generates compliant XML in 5 minutes for $29/month.",
      "This guide explains Poland's 2026 e-invoice mandate, what EN16931 and Peppol billing 3.0 mean in practice, and how to pick a tool that won't eat your project margins.",
    ],
    sections: [
      {
        h2: "Why Poland's April 2026 deadline matters for all EU freelancers",
        paragraphs: ["Even if you're not Polish, cross-border B2B invoicing in the EU increasingly requires structured data:"],
        list: [
          "VAT ID validation — both seller and buyer tax identifiers must be present for B2B",
          "ISO 3166 country codes — PL, DE, FR etc. in machine-readable format",
          "ISO 4217 currency codes — EUR, PLN, GBP in the XML header",
          "UBL 2.1 Invoice document type — the standard KSeF and Peppol networks accept",
          "EN16931 compliance — European semantic model for e-invoicing since 2017",
        ],
        after: [
          "Poland is the first large EU market to make this mandatory for all VAT-registered businesses. Other member states are watching — Germany, France, and Italy are rolling out similar mandates through 2027. Getting UBL-ready now saves painful migration later.",
        ],
      },
      {
        h2: "2026 EU e-invoice tools compared",
        tools: [
          {
            h3: "Basware / OpusCapita — €100+/mo",
            p: "Enterprise AP/AR automation. Full purchase-to-pay workflows. Overkill when you invoice 3–5 clients per month as a solo freelancer.",
          },
          {
            h3: "Vatify / Taxually — €40+/mo",
            p: "VAT compliance and e-invoicing for mid-market companies. Good for multi-entity groups. Expensive per-seat for indie consultants.",
          },
          {
            h3: "easyinvoicepdf — free tier limited",
            p: "HN-launched PDF generator. Popular for quick invoices but limited UBL export and no live compliance scoring for KSeF submission.",
          },
          {
            h3: "Fakturownia — PLN pricing",
            p: "Polish market leader. Strong for domestic businesses. UI and docs primarily Polish — harder for international freelancers billing in EUR.",
          },
          {
            h3: "EU E-Invoice Compliance — $29/mo",
            p: "Browser-side UBL 2.1 generator with live EN16931 compliance score. Multi-currency EUR/PLN/USD/GBP. 5 free invoices to test with your accountant. Peppol billing 3.0 profile built in.",
          },
        ],
      },
      {
        h2: "What to look for in a freelancer e-invoice tool",
        paragraphs: ["At indie scale, these features matter more than enterprise bells:"],
        list: [
          "UBL 2.1 XML export — not just PDF, the actual structured file KSeF accepts",
          "Live compliance checklist — catch missing VAT IDs before submission",
          "Multi-currency — bill EU clients in EUR, Polish clients in PLN",
          "Browser-side processing — your client data doesn't sit on someone else's server",
          "Flat pricing — no per-invoice fees that scale with your revenue",
          "Peppol profile ID — future-proof for cross-border B2B via the Peppol network",
        ],
        after: [
          "Skip features you'll never use: purchase order matching, three-way invoice approval, and ERP integrations. A $29/month UBL generator beats a €100/month suite you use 5% of.",
        ],
      },
      {
        h2: "How to generate your first KSeF-ready UBL invoice",
        paragraphs: [
          "Step 1: Gather your seller VAT ID (e.g. PL1234567890) and registered address. Step 2: Get buyer legal name and VAT ID for B2B transactions. Step 3: Enter line items with descriptions, quantities, and unit prices in your chosen currency.",
          "Step 4: Run the compliance checklist — aim for 100% on required fields. Step 5: Download the UBL XML file. Step 6: Submit via KSeF portal or send through your Peppol access point. Most solo freelancers complete this in under 10 minutes after the first invoice.",
        ],
      },
      {
        h2: "Pricing math: why $29/mo beats per-invoice fees",
        paragraphs: [
          "Some tools charge €2–5 per UBL export. On 20 invoices per month, that's €40–100 — 4–10× the cost of a flat subscription.",
          "Enterprise suites start at €50/month with annual contracts. A solo freelancer billing €5,000/month shouldn't spend 2% of revenue on invoicing software.",
          "A flat $29/month tool with 5 free trial invoices lets you validate with your accountant before committing. No surprise price hikes like HoneyBook's 89% increase taught US freelancers.",
        ],
      },
    ],
    cta: {
      title: "Try EU E-Invoice Compliance free — 5 UBL exports, no credit card",
      subtitle: "Generate your first KSeF-ready invoice in 5 minutes · $29/mo unlimited",
      button: "Generate UBL invoice free →",
    },
  },
  zh: {
    meta: {
      title: "波兰电子发票 UBL 合规 2026 — 欧盟自由职业者完整指南",
      description:
        "波兰 2026 年 4 月起强制 KSeF 电子发票。了解 EN16931 UBL 2.1 要求、增值税字段校验，以及如何不用企业税务软件生成 Peppol 就绪 XML。",
    },
    h1: "波兰电子发票 UBL 合规 2026：欧盟自由职业者完整指南",
    updated: "更新于 2026 年 7 月 · 阅读约 14 分钟",
    intro: [
      "如果你在波兰或欧盟任何地方向客户开票，2026 年 4 月是一个不能忽视的截止日期。波兰财政部通过 KSeF（国家电子发票系统）强制推行结构化电子发票。纸质 PDF 和简单邮件附件已不够用 — 你需要能通过 EN16931 校验的机器可读 UBL 2.1 XML。",
      "HN 帖子 #47625069 在 easyinvoicepdf 上线后引发热议：创始人问「为什么每个电子发票工具都要 €50/月？」Reddit r/SaaS 上华沙顾问们为 KSeF 接入恐慌发帖。Indie Hackers 上比较 Vatify、Basware 等定价把独立自由职业者挡在门外的企业套件。",
      "令人不适的真相：大多数欧盟自由职业者不需要完整 ERP。他们需要五件事：填写买卖双方增值税号、用欧元或兹罗提添加明细、校验必填字段、导出 UBL XML、提交到 KSeF 或通过 Peppol 发送。仅此而已。",
      "企业税务套件按发票或法人实体收费。一个月给 4 个客户开单的华沙设计师不需要 SAP。他们需要一个浏览器工具，5 分钟生成合规 XML，$29/月。",
      "本指南解释波兰 2026 电子发票强制令、EN16931 和 Peppol billing 3.0 的实际含义，以及如何选一款不会吃掉项目利润的工具。",
    ],
    sections: [
      {
        h2: "为什么波兰 2026 年 4 月截止日期对所有欧盟自由职业者重要",
        paragraphs: ["即使你不是波兰人，欧盟跨境 B2B 开票也越来越需要结构化数据："],
        list: [
          "增值税号校验 — B2B 交易必须包含买卖双方税号",
          "ISO 3166 国家代码 — PL、DE、FR 等机器可读格式",
          "ISO 4217 货币代码 — XML 头部的 EUR、PLN、GBP",
          "UBL 2.1 发票文档类型 — KSeF 和 Peppol 网络接受的标准",
          "EN16931 合规 — 2017 年以来的欧洲电子发票语义模型",
        ],
        after: [
          "波兰是首个对全部增值税注册企业强制推行的大型欧盟市场。其他成员国在观望 — 德国、法国、意大利将在 2027 年前推出类似强制令。现在做好 UBL 准备可避免日后痛苦迁移。",
        ],
      },
      {
        h2: "2026 年欧盟电子发票工具对比",
        tools: [
          {
            h3: "Basware / OpusCapita — €100+/月",
            p: "企业应付/应收自动化。完整采购到付款流程。独立自由职业者月开 3–5 张发票时完全过剩。",
          },
          {
            h3: "Vatify / Taxually — €40+/月",
            p: "中型企业增值税合规与电子发票。适合多实体集团。按席位收费对独立顾问太贵。",
          },
          {
            h3: "easyinvoicepdf — 免费档有限",
            p: "HN 上线的 PDF 生成器。适合快速发票但 UBL 导出有限，无 KSeF 提交所需的实时合规评分。",
          },
          {
            h3: "Fakturownia — 兹罗提定价",
            p: "波兰市场领导者。本土企业很强。界面和文档主要是波兰语 — 用欧元开票的国际自由职业者较难上手。",
          },
          {
            h3: "欧盟电子发票合规 — $29/月",
            p: "浏览器端 UBL 2.1 生成器，实时 EN16931 合规评分。多币种欧元/兹罗提/美元/英镑。5 张免费发票与会计师测试。内置 Peppol billing 3.0 配置。",
          },
        ],
      },
      {
        h2: "自由职业者电子发票工具该看什么",
        paragraphs: ["在独立开发者规模，这些功能比企业花架子更重要："],
        list: [
          "UBL 2.1 XML 导出 — 不只是 PDF，而是 KSeF 接受的结构化文件",
          "实时合规清单 — 提交前发现缺失增值税号",
          "多币种 — 用欧元开欧盟客户、用兹罗提开波兰客户",
          "浏览器端处理 — 客户数据不留在别人服务器",
          "一口价 — 无按张收费随收入上涨",
          "Peppol 配置 ID — 为跨境 B2B 经 Peppol 网络未来做准备",
        ],
        after: [
          "跳过永远用不上的功能：采购订单匹配、三方发票审批、ERP 集成。$29/月的 UBL 生成器胜过你只用到 5% 的 €100/月套件。",
        ],
      },
      {
        h2: "如何生成第一张 KSeF 就绪 UBL 发票",
        paragraphs: [
          "第一步：准备卖方增值税号（如 PL1234567890）和注册地址。第二步：获取买方法定名称和 B2B 交易的增值税号。第三步：用所选币种填写明细描述、数量和单价。",
          "第四步：运行合规清单 — 必填项目标 100%。第五步：下载 UBL XML 文件。第六步：通过 KSeF 门户提交或经 Peppol 接入点发送。大多数独立自由职业者第一张发票后 10 分钟内可完成。",
        ],
      },
      {
        h2: "定价算账：为什么 $29/月胜过按张收费",
        paragraphs: [
          "有些工具每张 UBL 收 €2–5。月开 20 张就是 €40–100 — 是 flat 订阅的 4–10 倍。",
          "企业套件 €50/月起且常要年约。月开票 €5,000 的独立自由职业者不应把 2% 收入花在开票软件上。",
          "$29/月一口价加 5 张免费试用，可先与会计师验证再付费。不会像 HoneyBook 涨价 89% 那样给美国自由职业者惊喜。",
        ],
      },
    ],
    cta: {
      title: "免费试用欧盟电子发票合规 — 5 次 UBL 导出，无需信用卡",
      subtitle: "5 分钟生成第一张 KSeF 就绪发票 · $29/月不限量",
      button: "免费生成 UBL 发票 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
