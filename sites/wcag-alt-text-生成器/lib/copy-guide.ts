import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    metaTitle: "WCAG Alt-Text Compliance Guide — ADA Lawsuit Prevention for Web Agencies",
    metaDescription:
      "Complete guide to WCAG 2.2 alt-text requirements: decorative vs informative images, 125-char limits, batch workflows, and ADA lawsuit prevention for web agencies.",
    title: "WCAG Alt-Text Compliance: How Web Agencies Avoid ADA Lawsuits",
    updated: "Updated June 2026 · 10 min read",
    ctaTitle: "Ready to generate compliant alt text?",
    ctaButton: "Try 5 free generations",
    sections: [
      {
        type: "p" as const,
        text: "In the first half of 2025 alone, over 450 websites using accessibility overlay widgets were sued under the Americans with Disabilities Act (ADA). Courts increasingly reject overlay-only fixes as insufficient evidence of compliance. Real alt text — written for every informative image — remains the foundation of WCAG 2.2 Level AA conformance and your best defense in accessibility litigation.",
      },
      {
        type: "h2" as const,
        text: "Why alt text matters more than ever",
      },
      {
        type: "p" as const,
        text: "WCAG Success Criterion 1.1.1 (Non-text Content) requires that all non-text content has a text alternative serving an equivalent purpose. For images, this means the alt attribute. Screen readers announce alt text to blind and low-vision users. Search engines use it for image SEO. And when a plaintiff's lawyer audits your client's site, missing or generic alt text (\"image\", \"photo1.jpg\") is the fastest path to a demand letter.",
      },
      {
        type: "ul" as const,
        items: [
          "ADA Title III applies to public-facing business websites — not just government sites",
          "EAA (European Accessibility Act) enforcement began in 2025 for EU digital services",
          "Overlay widgets do not fix missing alt text — they cannot invent descriptions",
          "Manual alt-text writing does not scale for agencies managing 50+ client sites",
        ],
      },
      {
        type: "h2" as const,
        text: "The three alt-text categories every developer must know",
      },
      {
        type: "p" as const,
        text: "Not every image needs a long description. WCAG distinguishes three categories, and getting the category wrong is as bad as missing alt text entirely.",
      },
      {
        type: "ol" as const,
        items: [
          "Decorative images: pure visual flair with no information value. Use alt=\"\" (empty alt). Screen readers skip these.",
          "Informative images: photos, illustrations, icons that convey meaning. Write concise alt text describing subject and context.",
          "Functional images: buttons, links, form controls rendered as images. Alt text must describe the action, not appearance.",
        ],
      },
      {
        type: "p" as const,
        text: "A common mistake: marking a chart or infographic as decorative. Charts always need alt text summarizing the key data point. Our {link0} handles all three categories with compliance scoring.",
        links: [{ href: "/generate", label: "alt-text generator" }],
      },
      {
        type: "h2" as const,
        text: "Writing WCAG-compliant alt text: the 125-character rule",
      },
      {
        type: "p" as const,
        text: "While WCAG does not mandate a character limit, best practice keeps alt text under 125 characters. Screen readers may truncate longer descriptions. Focus on what the image communicates, not how it looks.",
      },
      {
        type: "table" as const,
        headers: ["Bad alt text", "Good alt text"],
        rows: [
          ["image", "Three designers reviewing wireframes on a laptop"],
          ["chart.png", "Chart showing MRR up 23% quarter over quarter"],
          ["click here", "Download accessibility compliance report (PDF)"],
          ["logo", "Acme Corp logo"],
        ],
      },
      {
        type: "p" as const,
        text: "Avoid starting with \"Image of\" or \"Picture of\" — screen readers already announce it is an image. Include people, actions, and context that matter to understanding the page content.",
      },
      {
        type: "h2" as const,
        text: "Batch alt-text workflows for agencies",
      },
      {
        type: "p" as const,
        text: "A typical agency client site has 200–2,000 images across blog posts, product pages, and team photos. Manual alt-text writing at 2 minutes per image means 67 hours of work. That is why agencies charge $3,000–$15,000 for accessibility remediation — and why automated tools at $9.9/month change the economics entirely.",
      },
      {
        type: "p" as const,
        text: "The efficient workflow: crawl the site for images missing alt attributes, export a CSV with image URLs and page context, batch-generate alt text, review scores above 85/100 automatically, manually review edge cases below 85, then import back to the CMS. Our tool supports this end-to-end at {link0}.",
        links: [{ href: "/join", label: "$9.9/mo unlimited" }],
      },
      {
        type: "h2" as const,
        text: "AltText.ai vs ShiftView vs DIY: cost comparison",
      },
      {
        type: "p" as const,
        text: "AltText.ai starts at $49/month for agencies and charges per image on higher tiers. ShiftView targets dev teams at $79/month with white-label reports. Enterprise tools like Siteimprove start at $15,000/year. For indie agencies and freelancers shipping 5–20 client sites per year, a flat $9.9/month tool with batch CSV export covers the gap without enterprise sales calls.",
      },
      {
        type: "h2" as const,
        text: "Documenting compliance for legal teams",
      },
      {
        type: "p" as const,
        text: "When a client receives an ADA demand letter, the first question from their lawyer is: \"What good-faith accessibility efforts have you made?\" Documentation matters: dated audit reports, alt-text remediation logs, accessibility statements, and evidence of ongoing monitoring. Generate alt text with compliance scores, export CSV logs with timestamps, and attach them to your project handoff package.",
      },
      {
        type: "h2" as const,
        text: "Common mistakes that trigger lawsuits",
      },
      {
        type: "table" as const,
        headers: ["Mistake", "Fix"],
        rows: [
          ["Using overlay widgets only", "Write real alt text for every informative image"],
          ["Same alt text on every image", "Unique, context-specific descriptions per image"],
          ["Filename as alt (IMG_4521.jpg)", "Describe subject and purpose, not file metadata"],
          ["Missing alt on social share images", "OG images need alt text in the HTML img tag too"],
          ["Decorative marked as informative", "Audit decorative images — use alt=\"\" correctly"],
        ],
      },
      {
        type: "h2" as const,
        text: "Start generating compliant alt text today",
      },
      {
        type: "p" as const,
        text: "You do not need a $15,000 Siteimprove contract to start fixing alt text. Paste an image description into our {link0}, get WCAG 2.2 AA alt text with a compliance score, and copy it to your client's CMS. Five free generations let you test on a real client project before subscribing at {link1}.",
        links: [
          { href: "/generate", label: "generator" },
          { href: "/join", label: "$9.9/mo" },
        ],
      },
    ],
  },
  zh: {
    metaTitle: "WCAG Alt 文本合规指南 — 网页代理商 ADA 诉讼防护",
    metaDescription:
      "WCAG 2.2 alt 文本完整指南：装饰性与信息性图片、125 字符限制、批量工作流，以及网页代理商 ADA 诉讼防护策略。",
    title: "WCAG Alt 文本合规：网页代理商如何避免 ADA 诉讼",
    updated: "2026 年 6 月更新 · 10 分钟阅读",
    ctaTitle: "准备好生成合规 alt 文本了吗？",
    ctaButton: "免费体验 5 次",
    sections: [
      {
        type: "p" as const,
        text: "仅 2025 年上半年，就有超过 450 个使用无障碍 overlay 插件的网站在《美国残疾人法案》（ADA）下被起诉。法院越来越认定仅靠 overlay 的修复不足以证明合规。真正的 alt 文本 — 为每张信息性图片撰写 — 仍是 WCAG 2.2 AA 级合规的基础，也是无障碍诉讼中最好的防御。",
      },
      {
        type: "h2" as const,
        text: "为什么 alt 文本比以往更重要",
      },
      {
        type: "p" as const,
        text: "WCAG 成功标准 1.1.1（非文本内容）要求所有非文本内容都有提供同等用途的文本替代。对图片而言，这意味着 alt 属性。屏幕阅读器向视障用户朗读 alt 文本。搜索引擎用它做图片 SEO。当原告律师审计你客户的站点时，缺失或通用的 alt 文本（\"图片\"、\"photo1.jpg\"）是收到律师函最快的路径。",
      },
      {
        type: "ul" as const,
        items: [
          "ADA 第三章适用于面向公众的商业网站 — 不仅是政府站点",
          "EAA（欧洲无障碍法案）2025 年起对欧盟数字服务强制执行",
          "Overlay 插件无法修复缺失的 alt 文本 — 它们无法凭空生成描述",
          "手动写 alt 文本无法扩展至管理 50+ 客户站点的代理商",
        ],
      },
      {
        type: "h2" as const,
        text: "每个开发者必须知道的三种 alt 文本类别",
      },
      {
        type: "p" as const,
        text: "不是每张图片都需要长描述。WCAG 区分三类，搞错类别和缺失 alt 文本一样糟糕。",
      },
      {
        type: "ol" as const,
        items: [
          "装饰性图片：纯视觉装饰，无信息价值。使用 alt=\"\"（空 alt）。屏幕阅读器会跳过。",
          "信息性图片：传达含义的照片、插图、图标。写简洁 alt 文本描述主体和上下文。",
          "功能性图片：以图片呈现的按钮、链接、表单控件。Alt 文本必须描述动作，而非外观。",
        ],
      },
      {
        type: "p" as const,
        text: "常见错误：把图表或信息图标记为装饰性。图表始终需要 alt 文本总结关键数据点。我们的 {link0} 处理全部三类并给出合规评分。",
        links: [{ href: "/generate", label: "alt 文本生成器" }],
      },
      {
        type: "h2" as const,
        text: "撰写 WCAG 合规 alt 文本：125 字符规则",
      },
      {
        type: "p" as const,
        text: "虽然 WCAG 没有强制字符限制，最佳实践将 alt 文本控制在 125 字符以内。屏幕阅读器可能截断更长的描述。聚焦图片传达的内容，而非外观。",
      },
      {
        type: "table" as const,
        headers: ["错误 alt 文本", "正确 alt 文本"],
        rows: [
          ["图片", "三位设计师在笔记本前评审线框图"],
          ["chart.png", "图表显示 MRR 季度环比增长 23%"],
          ["点击这里", "下载无障碍合规报告（PDF）"],
          ["logo", "Acme 公司 logo"],
        ],
      },
      {
        type: "p" as const,
        text: "避免以「图片」或「照片」开头 — 屏幕阅读器已经会告知是图片。包含对理解页面内容重要的人物、动作和上下文。",
      },
      {
        type: "h2" as const,
        text: "代理商批量 alt 文本工作流",
      },
      {
        type: "p" as const,
        text: "典型代理商客户站点在博客、产品页、团队照片中有 200–2000 张图片。手动写 alt 文本每张 2 分钟意味着 67 小时工作量。这就是为什么代理商对无障碍修复收费 $3,000–$15,000 — 以及为什么 $9.9/月的自动化工具完全改变了成本结构。",
      },
      {
        type: "p" as const,
        text: "高效工作流：爬取站点找出缺失 alt 的图片，导出含图片 URL 和页面上下文的 CSV，批量生成 alt 文本，自动审核 85/100 以上评分，人工审核 85 以下边缘案例，然后导入回 CMS。我们的工具在 {link0} 支持端到端流程。",
        links: [{ href: "/join", label: "$9.9/月无限" }],
      },
      {
        type: "h2" as const,
        text: "AltText.ai vs ShiftView vs 自建：成本对比",
      },
      {
        type: "p" as const,
        text: "AltText.ai 代理商版从 $49/月起，更高档位按张计费。ShiftView 面向开发团队 $79/月含白标报告。Siteimprove 等企业工具从 $15,000/年起。对每年交付 5–20 个客户站点的独立代理商和自由职业者，$9.9/月一口价含 CSV 批量导出的工具填补了空白，无需企业销售流程。",
      },
      {
        type: "h2" as const,
        text: "为法务团队记录合规证据",
      },
      {
        type: "p" as const,
        text: "客户收到 ADA 律师函时，律师第一个问题是：「你们做了哪些善意的无障碍努力？」文档很重要：带日期的审计报告、alt 文本修复日志、无障碍声明、持续监控证据。用合规评分生成 alt 文本，导出带时间戳的 CSV 日志，附在项目交付包中。",
      },
      {
        type: "h2" as const,
        text: "引发诉讼的常见错误",
      },
      {
        type: "table" as const,
        headers: ["错误", "修复"],
        rows: [
          ["仅使用 overlay 插件", "为每张信息性图片写真实 alt 文本"],
          ["所有图片用相同 alt 文本", "每张图片独特的、上下文相关的描述"],
          ["用文件名作 alt（IMG_4521.jpg）", "描述主体和用途，而非文件元数据"],
          ["社交分享图缺失 alt", "OG 图片在 HTML img 标签中也需要 alt 文本"],
          ["装饰性误标为信息性", "审计装饰性图片 — 正确使用 alt=\"\""],
        ],
      },
      {
        type: "h2" as const,
        text: "今天就开始生成合规 alt 文本",
      },
      {
        type: "p" as const,
        text: "你不需要 $15,000 的 Siteimprove 合同就能开始修复 alt 文本。把图片描述粘贴到我们的 {link0}，获取带合规评分的 WCAG 2.2 AA alt 文本，复制到客户 CMS。免费体验 5 次让你在真实客户项目上测试，再于 {link1} 订阅。",
        links: [
          { href: "/generate", label: "生成器" },
          { href: "/join", label: "$9.9/月" },
        ],
      },
    ],
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
