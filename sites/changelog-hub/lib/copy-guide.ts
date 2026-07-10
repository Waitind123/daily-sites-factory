import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Beamer Alternative for Indie Hackers — Changelog Guide",
      description:
        "Beamer $49/mo, AnnounceKit $79/mo too expensive? Compare 2026 changelog tools and find a $9.9/mo minimalist alternative for bootstrapped founders.",
    },
    h1: "2026 Beamer Alternative for Indie Hackers: Changelog Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "If you're an indie hacker or bootstrapped SaaS founder, you know changelogs drive retention. Users need to see you ship, fix bugs, and add features they asked for. An active changelog page is proof your product is alive.",
      "But in 2025–2026, dedicated changelog and product communication SaaS prices keep climbing. Beamer starts at $49/mo, AnnounceKit $79/mo, Canny's changelog needs $79/mo. For solo founders at $500–$3000 MRR, $49/mo just to post a few updates hurts.",
      "A common Indie Hackers complaint: \"I'm paying $49/mo for a changelog I update twice a month.\" Another: \"Built my own in 2 hours. Why am I paying Beamer $588/year?\"",
      "This guide helps you evaluate 2026 changelog tools and find a minimalist option for indie stage.",
    ],
    sections: [
      {
        h2: "Why indie hackers need dedicated changelog tools",
        paragraphs: ["You might ask: can't I use Notion or GitHub Releases? In theory yes, but in practice:"],
        list: [
          "Hard to discover — GitHub Releases are for developers, not end users",
          "Unprofessional display — Notion lacks version tags and visual hierarchy",
          "No notifications — no RSS, no embed widget, users miss new releases",
          "Status page split — incidents need Statuspage ($29/mo) as a separate tool",
        ],
        after: [
          "Dedicated tools solve the write → publish → notify → display pipeline. A good one gets you from zero to published changelog in 10 minutes.",
        ],
      },
      {
        h2: "2026 changelog tools compared",
        tools: [
          {
            h3: "Beamer — $49–99/mo",
            p: "Industry leader: in-app notifications, segmentation, A/B tests, multi-language. Steep pricing — base $49/mo, white-label $79/mo. MAU billing means growth increases cost. Best for mature products with thousands of users.",
          },
          {
            h3: "AnnounceKit — $79/mo",
            p: "Beautiful design, many widget types, NPS and feature requests. Still pricey for early-stage indie products. Best for design-driven teams with stable MRR.",
          },
          {
            h3: "Vershun — €7/mo",
            p: "2026 EU-hosted option with changelog + feedback + roadmap + status page. Feature-rich but still iterating. Best for European teams needing GDPR compliance.",
          },
          {
            h3: "Indie Changelog — $9.9/mo",
            p: "Does one thing well: fast public changelog page + embed widget + status snippet + RSS. No in-app notifications, no MAU billing, no A/B tests. Pure HTML export, zero vendor lock-in.",
            link: { href: "/publish", text: "Indie Changelog", suffix: " offers 5 free tries before you subscribe." },
          },
        ],
      },
      {
        h2: "How to choose: decision framework",
        paragraphs: ["Don't ask \"which tool is best\" — ask \"what stage am I at?\""],
        tools: [
          {
            h3: "Scenario 1: MRR < $3000, 2–8 updates/month",
            p: "Early traction — steady ship rhythm but not enough users to justify $49/mo. You need a beautiful changelog page, embed widget, and RSS feed fast.",
          },
          {
            h3: "Scenario 2: in-app notifications and MAU segmentation",
            p: "Thousands of active users, different updates for new vs power users. Beamer's segmentation may be worth $49/mo here.",
          },
          {
            h3: "Scenario 3: feedback board + roadmap in one",
            p: "You need changelog plus user feedback and public roadmap. Canny and Vershun excel here but cost more or are still maturing.",
          },
        ],
        after: [
          "If you ship 2–10 updates/month, don't need MAU segmentation, and want pure HTML export — Indie Changelog at $9.9/mo is likely the best value in 2026.",
        ],
      },
      {
        h2: "Changelog best practices",
        paragraphs: ["Regardless of tool, these maximize impact:"],
        ordered: [
          "Ship at least every two weeks — even small fixes count",
          "Use tags — feature / fix / improvement for quick scanning",
          "Write for users — \"Fixed PDF export\" beats \"Fixed UTF-8 encoding issue\"",
          "Embed in-product — changelog widget in nav or settings boosts open rate",
          "Provide RSS — power users subscribe, long-tail SEO traffic follows",
        ],
      },
      {
        h2: "Build yourself vs use a tool",
        paragraphs: [
          "Many indie hackers hand-roll changelog pages — Markdown + static site generator. Zero cost, fully viable. But you maintain version tag HTML, embed widget JS, RSS generation, and status pages yourself.",
          "If your time is better spent on product, $9.9/mo saves 2–4 hours/month. At $50/hr indie rate, ROI is positive.",
        ],
      },
      {
        h2: "SEO and distribution",
        paragraphs: [
          "New sites won't rank day one, but long-tail content brings steady visitors. Keywords like \"Beamer alternative\" and \"indie hacker changelog tool\" have lower competition.",
          "After deploy: submit sitemap to Google Search Console, share on Product Hunt, Hacker News Show HN, and Reddit r/SideProject for initial backlinks.",
        ],
      },
      {
        h2: "Summary",
        paragraphs: [
          "2026 changelog tools are splitting: Beamer/AnnounceKit for mature SaaS ($49–99/mo), Vershun and Indie Changelog for indie stage ($7–10/mo).",
          "If MRR is four figures or below, you update under 10 times/month, and don't need MAU segmentation — skip $49/mo. Pick a $9.9 tool and invest savings in growth or product.",
        ],
      },
    ],
    cta: {
      title: "Ready to publish your changelog?",
      subtitle: "5 free tries · then $9.9/mo",
      button: "Start free",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Beamer 替代方案 — Changelog 工具完整指南",
      description:
        "Beamer $49/月、AnnounceKit $79/月太贵？对比 2026 年 Changelog 工具，找到 $9.9/月的极简替代方案。",
    },
    h1: "2026 独立开发者 Beamer 替代方案：Changelog 工具完整指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "如果你是一名独立开发者或 bootstrapped SaaS 创始人，你一定知道「产品更新日志」（Changelog）对用户留存有多重要。用户需要知道你一直在 ship、在修复 bug、在添加他们想要的功能。一个活跃的 changelog 页面，是产品生命力的最好证明。",
      "但 2025-2026 年，专门做 Changelog 和 Product Communication 的 SaaS 工具价格却在持续上涨。Beamer 起步 $49/月，AnnounceKit $79/月，Canny 的 changelog 功能需要 $79/月。对于 MRR 还在 $500-$3000 阶段的 solo founder，每月 $49 只为了能发几条更新通知，确实肉疼。",
      "Indie Hackers 社区里一个高频吐槽是：「I'm paying $49/mo for a changelog that I update twice a month.」另一位开发者写道：「Built my own changelog page in 2 hours. Why am I paying Beamer $588/year?」",
      "这篇指南帮你系统评估 2026 年的 Changelog 工具选择，并找到真正适合 indie stage 的极简方案。",
    ],
    sections: [
      {
        h2: "为什么 indie hacker 需要专门的 Changelog 工具？",
        paragraphs: ["你可能会问：在 Notion 或 GitHub Releases 里写更新不就行了吗？理论上可以，但实践中会遇到几个问题："],
        list: [
          "用户发现难：GitHub Releases 只有开发者看，普通用户不会去翻",
          "展示不专业：Notion 页面缺乏 changelog 特有的版本标签和视觉层次",
          "通知缺失：没有 RSS、没有嵌入 widget，用户不知道你发了新版本",
          "状态页分离：incident 时需要另找 Statuspage（$29/月），工具割裂",
        ],
        after: [
          "专门的 Changelog 工具解决的是「撰写 → 发布 → 通知 → 展示」这条 pipeline。好的工具应该让你在 10 分钟内从零到可发布的 changelog 页面。",
        ],
      },
      {
        h2: "2026 年主流 Changelog 工具对比",
        tools: [
          {
            h3: "Beamer — $49-99/月",
            p: "行业最知名的 changelog 和 product announcement 平台。功能全面：in-app 通知、segmentation、A/B 测试、多语言。但价格曲线陡峭——基础 $49/月，去品牌 $79/月。且按 MAU 计费，用户增长反而增加成本。适合已有大量用户、需要精细分群通知的成熟产品。",
          },
          {
            h3: "AnnounceKit — $79/月",
            p: "设计精美，widget 种类多，支持 NPS 调查和 feature request。但 $79/月对于 early stage indie 产品仍然偏高。适合设计驱动型产品、已有稳定 MRR 的团队。",
          },
          {
            h3: "Vershun — €7/月",
            p: "2026 年新兴的 EU-hosted 选择，€7/月包含 changelog + feedback + roadmap + status page。功能全面但仍在快速迭代中。适合欧洲用户、需要 GDPR 合规的团队。",
          },
          {
            h3: "Indie Changelog 发布台 — $9.9/月",
            p: "专注做一件事：快速生成可发布的 Changelog 公开页 + 嵌入 Widget + 状态页片段 + RSS。没有 in-app 通知、没有 MAU 计费、没有 A/B 测试。纯 HTML 导出，零 vendor lock-in。",
            link: { href: "/publish", text: "Indie Changelog", suffix: " 可以免费体验 5 次，感受生成速度后再决定是否订阅。" },
          },
        ],
      },
      {
        h2: "如何选择：决策框架",
        paragraphs: ["不要问「哪个工具最好」，问「我处于什么阶段」："],
        tools: [
          {
            h3: "场景 1：MRR < $3000，每月发 2-8 次更新",
            p: "产品刚上线或处于 early traction 阶段，有稳定的 ship 节奏，但用户量还不足以支撑 $49/月的工具费。你需要快速生成好看的 changelog 页面，附带嵌入 widget 和 RSS feed。",
          },
          {
            h3: "场景 2：需要 in-app 通知和 MAU 分群",
            p: "产品已有数千活跃用户，需要按用户属性推送不同的更新通知。这时期待的是 Beamer 的 segmentation 能力，$49/月可能物有所值。",
          },
          {
            h3: "场景 3：需要 feedback board + roadmap 一体",
            p: "不仅需要 changelog，还需要用户反馈收集和公开 roadmap。Canny 和 Vershun 在这方面有优势，但价格更高或功能仍在完善中。",
          },
        ],
        after: [
          "如果你 MRR 还在四位数以下、每月更新不超过 10 次、不需要 MAU 分群，没有理由付 $49/月。选一个 $9.9 的工具，把省下的钱投入获客或产品开发。",
        ],
      },
      {
        h2: "Changelog 最佳实践",
        paragraphs: ["无论你选择哪个工具，以下实践能最大化 changelog 的效果："],
        ordered: [
          "保持更新频率：至少每两周发一次，即使只是小修复",
          "用标签分类：feature / fix / improvement 让用户快速扫描",
          "写用户语言：「修复了导出 PDF 乱码」比「Fixed UTF-8 encoding issue」更好",
          "嵌入产品内：在设置页或导航栏放 changelog widget，提高打开率",
          "提供 RSS：让重度用户订阅，也是 SEO 长尾流量的来源",
        ],
      },
      {
        h2: "自己搭建 vs 用工具",
        paragraphs: [
          "很多 indie hacker 选择手搓 changelog 页面——一个 Markdown 文件 + 静态站点生成器。这完全可行，成本为零。但你需要自己维护版本标签 HTML、嵌入 widget JS、RSS feed 生成和状态页。",
          "如果你时间宝贵、更想专注产品本身，$9.9/月的工具能帮你省下每月 2-4 小时的维护时间。按 indie hacker 时薪 $50 算，ROI 是正向的。",
        ],
      },
      {
        h2: "SEO 与外链分发",
        paragraphs: [
          "新站不会第一天就有自然流量，但长尾内容能带来持续访客。关键词如「Beamer 替代」「indie hacker changelog 工具」竞争度低于主品牌词。",
          "部署后提交 sitemap 到 Google Search Console，在 Product Hunt、Hacker News Show HN、Reddit r/SideProject 发布时带上指南链接。",
        ],
      },
      {
        h2: "总结",
        paragraphs: [
          "2026 年的 Changelog 工具市场正在分化：一端是 Beamer/AnnounceKit 面向成熟 SaaS 的全功能平台（$49-99/月），另一端是 Vershun、Indie Changelog 等面向 indie stage 的极简方案（$7-10/月）。",
          "如果你 MRR 还在四位数以下、每月更新不超过 10 次、不需要 MAU 分群，没有理由付 $49/月。选一个 $9.9 的工具，把省下的钱投入获客或产品开发。免费体验 5 次，无风险试用。",
        ],
      },
    ],
    cta: {
      title: "准备好发布你的 Changelog 了吗？",
      subtitle: "免费体验 5 次 · 之后 $9.9/月",
      button: "免费开始",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
