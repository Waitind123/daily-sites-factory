import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 GitBook Alternative for Indie Hackers — API Docs Hosting Guide",
      description:
        "GitBook charges $65/mo plus $12 per editor. Compare API documentation platforms for indie SaaS. Find a $29/mo flat-rate alternative with custom domain and llms.txt.",
    },
    h1: "2026 GitBook Alternative for Indie Hackers: API Docs Hosting Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "You shipped an API. Developers need docs — authentication guides, endpoint reference, error codes, and changelog. Notion works for internal notes but looks unprofessional as public API docs. GitBook looks great — until you see $65/month per site plus $12 per editor.",
      "Documentation platforms solve this: markdown editing, custom domains, search, and SEO. Modern tools also ship llms.txt so ChatGPT, Claude, and Cursor can index your API reference.",
      "The problem? GitBook Premium starts at $65/month plus $12 per editor. A 3-person team pays $101/month before adding a single page. ReadMe.io Pro is $250/month. Mintlify starts at $150/month. For a solo founder documenting a v1 API with 20 endpoints, that's absurd.",
      "On r/SaaS and Indie Hackers, founders repeatedly ask: \"What's the cheapest GitBook alternative without per-seat pricing?\" Another wrote: \"I just want docs.yourproduct.com live this week — not a sales call and $300/mo enterprise plan.\" If that sounds like you, this guide is for you.",
      "This guide compares 2026 API documentation platforms for solo founders, what actually matters at indie scale, and how to pick a tool that won't punish growth with per-editor fees.",
    ],
    sections: [
      {
        h2: "Why indie hackers need proper API docs",
        paragraphs: ["A dedicated docs platform does three things Notion cannot:"],
        list: [
          "Developer experience — sidebar navigation, code blocks, and search that developers expect",
          "SEO + LLM indexing — llms.txt and structured metadata so your API shows up in AI search",
          "Custom domain — docs.yourproduct.com on your brand, not docs.gitbook.io/some-random-slug",
        ],
        after: [
          "The classic indie stack: write Getting Started + Authentication + 10 endpoint pages, point docs.yourproduct.com, link from your README and landing page. You don't need enterprise SSO or 50 integrations in week one. You need: flat pricing, custom domain, and llms.txt.",
        ],
      },
      {
        h2: "2026 API docs platforms compared",
        tools: [
          {
            h3: "GitBook — $0 free / $65+/mo",
            p: "Polished UI, Git sync, popular with startups. Premium $65/mo per site plus $12/editor. A 5-person team on Premium pays $125/month. Great for funded companies; expensive when you're documenting a side-project API.",
          },
          {
            h3: "ReadMe.io — $250+/mo",
            p: "Excellent API playground and metrics. Pro plan $250/month billed annually. Overkill for indie hackers shipping v1 docs with 15 endpoints.",
          },
          {
            h3: "Mintlify — $150+/mo",
            p: "Beautiful auto-generated docs from OpenAPI. Starter $150/month. Great DX but pricing targets Series A teams, not solo founders.",
          },
          {
            h3: "Docusaurus / Fumadocs — free (self-hosted)",
            p: "Open source, full control, zero subscription. Requires engineering time to set up, deploy, and maintain. Fine if you enjoy DevOps; slow if you want docs live today.",
          },
          {
            h3: "Docs Pulse — $29/mo flat",
            p: "Built for indie hackers who want GitBook-quality docs without per-seat pricing. Unlimited doc sites, unlimited pages, auto llms.txt, custom domain.",
            link: { href: "/join", text: "5 free doc sites to try", suffix: ", then $29/mo flat. No annual lock-in." },
          },
        ],
      },
      {
        h2: "What to look for in a docs platform",
        paragraphs: ["Before comparing prices, decide what you actually need:"],
        ordered: [
          "Flat pricing — no per-editor or per-seat surprises when your co-founder joins",
          "Custom domain — docs.yourproduct.com, not a subdomain on someone else's brand",
          "llms.txt — auto-generated manifest so AI assistants index your API reference",
          "Markdown editor — write in markdown, preview live, ship in minutes not days",
        ],
        after: [
          "Skip enterprise features you'll never use: SSO, advanced analytics, 20 integrations. At indie scale, fast publishing and flat pricing matter more than AI-powered semantic search.",
        ],
      },
      {
        h2: "How to ship API docs in one afternoon",
        paragraphs: [
          "Start with three pages: Getting Started (install + first API call), Authentication (API keys, Bearer tokens), and your most-used endpoint. Add Error Codes and Changelog later.",
          "Use consistent structure: every endpoint page has Method + Path, Parameters table, Request example, Response example, and Error codes. Developers scan — they don't read prose.",
          "Publish llms.txt on day one. As more developers use ChatGPT and Cursor for API questions, indexed docs become a distribution channel.",
        ],
      },
      {
        h2: "Pricing reality for solo founders",
        paragraphs: [
          "GitBook's per-site plus per-editor model means costs scale with team size, not value received. A solo founder paying $65/month for docs that get 200 views/month is paying $0.32 per view.",
          "Flat-rate tools at $29/month align incentives: you pay for hosting and features, not headcount. When you hire your first engineer, docs pricing stays the same.",
          "Free tiers are fine for validation. But if docs are customer-facing (API product, developer tool), professional branding and custom domain justify $29/month from day one.",
        ],
      },
    ],
    cta: {
      title: "Ready to ship your API docs?",
      subtitle: "Create your first doc site free. 5 sites included, then $29/mo flat.",
      button: "Start building →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 GitBook 替代品指南 — API 文档托管",
      description:
        "GitBook $65/月 + $12/编辑者。对比独立开发者 API 文档平台，找到 $29/月一口价、支持自定义域名和 llms.txt 的替代方案。",
    },
    h1: "2026 独立开发者 GitBook 替代品：API 文档托管指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "你上线了 API。开发者需要文档 — 身份验证指南、端点参考、错误码和更新日志。Notion 适合内部笔记，但作为公开 API 文档显得不专业。GitBook 界面精美 — 直到你看到每站 $65/月加每位编辑者 $12。",
      "文档平台解决这个问题：Markdown 编辑、自定义域名、搜索和 SEO。现代工具还会生成 llms.txt，让 ChatGPT、Claude 和 Cursor 能索引你的 API 参考。",
      "问题在于？GitBook Premium 每站 $65/月起，加 $12/编辑者。3 人团队每月 $101，还没写一页。ReadMe.io Pro $250/月。Mintlify 起步 $150/月。对只有 20 个端点的 v1 API 来说，太贵了。",
      "在 r/SaaS 和 Indie Hackers 上，创始人反复问：「有没有不按人头收费的 GitBook 替代品？」还有人写：「我只想这周让 docs.yourproduct.com 上线 — 不想打销售电话开 $300/月企业版。」如果这像你说的，这篇指南就是为你写的。",
      "本指南对比 2026 年适合独立开发者的 API 文档平台、独立开发者真正需要什么，以及如何选择不会因按编辑者收费而惩罚增长的工具。",
    ],
    sections: [
      {
        h2: "独立开发者为什么需要专业 API 文档",
        paragraphs: ["专业文档平台能做 Notion 做不到的三件事："],
        list: [
          "开发者体验 — 侧边栏导航、代码块和开发者习惯的搜索",
          "SEO + LLM 索引 — llms.txt 和结构化元数据，让 API 出现在 AI 搜索中",
          "自定义域名 — docs.yourproduct.com 用你的品牌，不是 docs.gitbook.io/随机路径",
        ],
        after: [
          "经典独立开发者流程：写快速开始 + 身份验证 + 10 个端点页面，指向 docs.yourproduct.com，在 README 和落地页加链接。第一周不需要企业 SSO 或 50 个集成。你需要：一口价、自定义域名和 llms.txt。",
        ],
      },
      {
        h2: "2026 API 文档平台对比",
        tools: [
          {
            h3: "GitBook — 免费 / $65+/月",
            p: "界面精美、Git 同步、创业公司常用。Premium 每站 $65/月加 $12/编辑者。5 人团队 Premium 每月 $125。适合融资公司；记录副业 API 太贵。",
          },
          {
            h3: "ReadMe.io — $250+/月",
            p: "出色的 API 沙盒和指标。Pro 年费 $250/月。对只有 15 个端点的独立开发者来说杀鸡用牛刀。",
          },
          {
            h3: "Mintlify — $150+/月",
            p: "从 OpenAPI 自动生成精美文档。入门 $150/月。体验好但定价面向 A 轮团队，不是独立开发者。",
          },
          {
            h3: "Docusaurus / Fumadocs — 免费（自托管）",
            p: "开源、完全控制、零订阅。需要工程时间搭建、部署和维护。喜欢 DevOps 可以；想今天上线文档就太慢。",
          },
          {
            h3: "API 文档托管 — $29/月一口价",
            p: "为独立开发者打造，GitBook 品质文档、无按人头收费。无限文档站、无限页面、自动 llms.txt、自定义域名。",
            link: { href: "/join", text: "免费体验 5 个文档站", suffix: "，之后 $29/月一口价。无年付锁定。" },
          },
        ],
      },
      {
        h2: "选文档平台要看什么",
        paragraphs: ["比价格之前，先想清楚真正需要什么："],
        ordered: [
          "一口价 — 联合创始人加入时不会因按人头涨价",
          "自定义域名 — docs.yourproduct.com，不是别人品牌下的子域名",
          "llms.txt — 自动生成清单，让 AI 助手索引 API 参考",
          "Markdown 编辑器 — Markdown 编写、实时预览、分钟级发布",
        ],
        after: [
          "跳过用不上的企业功能：SSO、高级分析、20 个集成。独立开发者规模下，快速发布和一口价比 AI 语义搜索更重要。",
        ],
      },
      {
        h2: "一个下午上线 API 文档",
        paragraphs: [
          "从三页开始：快速开始（安装 + 第一次 API 调用）、身份验证（API 密钥、Bearer 令牌）、最常用的端点。错误码和更新日志后面再加。",
          "统一结构：每个端点页有方法 + 路径、参数表、请求示例、响应示例和错误码。开发者是扫读的 — 不是读散文。",
          "第一天就发布 llms.txt。越来越多开发者用 ChatGPT 和 Cursor 查 API，被索引的文档就是分发渠道。",
        ],
      },
      {
        h2: "独立开发者的定价现实",
        paragraphs: [
          "GitBook 按站加按编辑者计费，成本随团队人数涨，不随价值涨。独立开发者每月 $65 买月浏览 200 次的文档，相当于每次浏览 $0.32。",
          "$29/月一口价工具利益一致：你为托管和功能付费，不为人数付费。招第一个工程师时，文档价格不变。",
          "免费档适合验证。但如果文档面向客户（API 产品、开发者工具），专业品牌和自定义域名从第一天就值 $29/月。",
        ],
      },
    ],
    cta: {
      title: "准备好发布 API 文档了吗？",
      subtitle: "免费创建第一个文档站。含 5 个站点，之后 $29/月一口价。",
      button: "开始创建 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
