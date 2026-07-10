import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 GummySearch Alternative for Indie Hackers — Reddit Pain Point Mining Guide",
      description:
        "GummySearch shut down in 2025. Compare Reddit audience research tools: GummySearch, SpyCenter, BuildWhatTheyWant. Find a $29/mo flat-rate alternative for mining pain points.",
    },
    h1: "2026 GummySearch Alternative for Indie Hackers: Reddit Pain Point Mining Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "You want to build your next micro-SaaS. But which problem should you solve? The worst mistake indie hackers make is building in a vacuum — shipping a feature nobody asked for, then wondering why nobody pays.",
      "The best validation signal is not a survey. It is a stranger on Reddit typing: \"I wish there was a tool that…\" or \"Looking for an alternative to [expensive tool] under $20/mo.\" These are pre-qualified buyers describing exactly what they would pay for — in their own words.",
      "GummySearch was the gold standard for this. 135,000+ founders used it to mine Reddit for audience insights. Then it shut down on November 30, 2025. Overnight, the indie hacker community lost its primary research tool.",
      "Replacements emerged fast: SpyCenter at $79–199/mo, BuildWhatTheyWant, ThreddIQ, BigIdeasDB. All useful — but most price out solo founders who just need to find 10 pain points in a niche before shipping an MVP.",
      "This guide explains how Reddit pain point mining works, compares 2026 audience research tools for bootstrapped founders, and shows you how to validate your next SaaS idea in under 10 minutes for $29/mo.",
    ],
    sections: [
      {
        h2: "Why Reddit is the best validation channel",
        paragraphs: [
          "Reddit is where people complain honestly. No LinkedIn polish, no investor pitch deck language. When someone posts in r/SaaS that they are \"frustrated with Mixpanel pricing\" or \"would pay for a simpler Stripe MRR dashboard,\" that is a product spec written by your future customer.",
          "Four signal types matter most for indie hackers:",
        ],
        list: [
          "\"I wish there was…\" — unmet need, greenfield opportunity",
          "\"Looking for alternative to…\" — competitor weakness, ready to switch",
          "\"Frustrated with…\" — active pain, high urgency",
          "\"Would pay for…\" — explicit willingness to pay, strongest signal",
        ],
        after: [
          "The goal is not to read 500 threads manually. The goal is to extract these four signal types from relevant subreddits (r/SaaS, r/indiehackers, r/Entrepreneur, r/startups), rank them by frustration intensity, and pick the top pain point to solve.",
        ],
      },
      {
        h2: "2026 Reddit research tools compared",
        tools: [
          {
            h3: "GummySearch — shut down (was ~$29–79/mo)",
            p: "The original Reddit audience research tool. 140K+ users. Clean UI, subreddit filtering, saved searches. Shut down November 2025. Many founders still have no replacement.",
          },
          {
            h3: "SpyCenter — $79–199/mo",
            p: "GummySearch replacement with Competitor Spy (ads, SEO, G2 reviews) and Audience Spy (Reddit pain mining). Powerful but priced for funded teams, not solo bootstrappers.",
          },
          {
            h3: "BuildWhatTheyWant — ~$29/mo",
            p: "Scans 65+ subreddits for pay signals and frustration scores. Good for idea discovery. Less focused on verbatim quote extraction and niche keyword mining.",
          },
          {
            h3: "Reddit Pulse — $29/mo flat",
            p: "Built for indie hackers: enter a niche keyword, get ranked pain quotes with signal classification and frustration scores. 5 free searches, then $29/mo unlimited. No enterprise pricing.",
            link: { href: "/mine", text: "Mine pain points free", suffix: " — five searches, no credit card." },
          },
        ],
      },
      {
        h2: "How to mine pain points in 5 minutes",
        paragraphs: ["The fastest indie validation workflow:"],
        ordered: [
          "Pick a niche you understand (analytics, booking, invoicing, monitoring)",
          "Enter the keyword in Reddit Pulse — we scan r/SaaS, r/indiehackers, r/Entrepreneur",
          "Review top pain quotes ranked by frustration intensity",
          "Filter for \"would pay\" and \"looking for alternative\" signals first",
          "Ship a $29/mo micro-SaaS solving the #1 pain point this week",
        ],
        afterLink: {
          href: "/mine",
          label: "Reddit Pulse",
          prefix: "Use ",
          suffix: " to mine your first niche in under a minute. Five free searches, no credit card.",
        },
      },
      {
        h2: "Real example: from Reddit quote to $2k MRR",
        paragraphs: [
          "An indie hacker searched \"gummysearch\" on Reddit Pulse and found: \"Looking for a GummySearch alternative under $20/mo. I just need to find 'I wish' posts in r/Entrepreneur.\"",
          "That single quote validated demand for a Reddit mining tool at indie pricing. They shipped an MVP in 3 days, posted on Indie Hackers, and hit $2k MRR within two months — all from one pain point search.",
          "This is the levelsio playbook: find a real complaint, ship fast, charge from day one. No 6-month roadmap, no free tier forever.",
        ],
      },
      {
        h2: "SEO and distribution for research tools",
        paragraphs: [
          "Long-tail keywords like \"GummySearch alternative\" and \"reddit pain point mining tool\" rank within 1–3 months on a custom domain. Submit your sitemap to Google Search Console.",
          "Distribution checklist: Product Hunt launch, Hacker News Show HN, Reddit r/SideProject and r/SaaS (share a real pain point you found), Twitter/X thread, Indie Hackers milestone post.",
        ],
      },
      {
        h2: "Summary",
        closingLink: {
          href: "/join",
          label: "try Reddit Pulse free",
          prefix: "GummySearch is gone and enterprise replacements cost $79+/mo. If you need niche pain point mining, frustration scoring, and $29/mo flat pricing, ",
          suffix: ". Five searches, no credit card. Stop guessing — start mining.",
        },
      },
    ],
    cta: {
      title: "Ready to find your next SaaS idea?",
      subtitle: "5 free searches · unlimited mining after subscribe",
      button: "Mine your first niche",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 GummySearch 替代品指南 — Reddit 痛点挖掘",
      description:
        "GummySearch 于 2025 年关停。对比 GummySearch、SpyCenter、BuildWhatTheyWant 等 Reddit 受众研究工具，找到 $29/月一口价的痛点挖掘替代方案。",
    },
    h1: "2026 独立开发者 GummySearch 替代品：Reddit 痛点挖掘完整指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "你想做下一个微 SaaS，但该解决什么问题？独立开发者最常犯的错误是闭门造车 — 做一个没人要的功能，然后奇怪为什么没人付费。",
      "最好的验证信号不是问卷，而是 Reddit 上陌生人说：「我希望有个工具能…」或「寻找 $20/月以下的 [贵工具] 替代品。」这是预筛选的买家用自己的话描述他们愿意付费的需求。",
      "GummySearch 曾是这个领域的标杆，13.5 万+ 创始人用它挖掘 Reddit 受众洞察。2025 年 11 月 30 日关停后，独立开发者社区一夜之间失去了主要调研工具。",
      "替代品很快出现：SpyCenter $79–199/月、BuildWhatTheyWant、ThreddIQ、BigIdeasDB。都有用 — 但对只想在细分领域找 10 条痛点再 ship MVP 的独立开发者来说，价格太高。",
      "本指南解释 Reddit 痛点挖掘如何运作、对比 2026 年适合自举创始人的受众研究工具，以及如何用 $29/月 在 10 分钟内验证下一个 SaaS 想法。",
    ],
    sections: [
      {
        h2: "为什么 Reddit 是最好的验证渠道",
        paragraphs: [
          "Reddit 是人们真实抱怨的地方。没有领英上的包装，没有投资人路演话术。当有人在 r/SaaS 发帖说「对 Mixpanel 定价很不满」或「愿意付费买个更简单的 Stripe MRR 仪表盘」，这就是未来客户写好的产品规格。",
          "对独立开发者最重要的四类信号：",
        ],
        list: [
          "「我希望有…」— 未满足需求，蓝海机会",
          "「寻找…替代品」— 竞品弱点，准备切换",
          "「对…很不满」— 活跃痛点，紧迫度高",
          "「愿意付费…」— 明确付费意愿，最强信号",
        ],
        after: [
          "目标不是手动读 500 个帖子，而是从相关社区（r/SaaS、r/indiehackers、r/Entrepreneur、r/startups）提取这四类信号，按挫败感强度排序，选择最高分痛点来解决。",
        ],
      },
      {
        h2: "2026 年 Reddit 调研工具对比",
        tools: [
          {
            h3: "GummySearch — 已关停（曾约 $29–79/月）",
            p: "原始 Reddit 受众研究工具，14 万+ 用户。界面简洁、支持子版块筛选和保存搜索。2025 年 11 月关停，很多创始人至今没有替代方案。",
          },
          {
            h3: "SpyCenter — $79–199/月",
            p: "GummySearch 替代品，含竞品间谍（广告、SEO、G2 评价）和受众间谍（Reddit 痛点挖掘）。功能强大但定价面向有融资团队，不适合自举独立开发者。",
          },
          {
            h3: "BuildWhatTheyWant — 约 $29/月",
            p: "扫描 65+ 子版块寻找付费信号和挫败感分数。适合发现点子，较少聚焦原文引用提取和细分领域关键词挖掘。",
          },
          {
            h3: "Reddit Pulse — $29/月 一口价",
            p: "为独立开发者打造：输入细分领域关键词，获得带信号分类和挫败感评分的排序痛点引用。免费 5 次搜索，之后 $29/月 不限量，无企业定价。",
            link: { href: "/mine", text: "免费挖掘痛点", suffix: " — 五次搜索，无需信用卡。" },
          },
        ],
      },
      {
        h2: "5 分钟挖掘痛点",
        paragraphs: ["最快的独立开发者验证流程："],
        ordered: [
          "选一个你了解的细分领域（分析工具、预约、发票、监控）",
          "在 Reddit Pulse 输入关键词 — 扫描 r/SaaS、r/indiehackers、r/Entrepreneur",
          "查看按挫败感强度排序的痛点引用",
          "优先筛选「愿意付费」和「寻找替代」信号",
          "本周就 ship 一个 $29/月 微 SaaS 解决排名第一的痛点",
        ],
        afterLink: {
          href: "/mine",
          label: "Reddit Pulse",
          prefix: "用",
          suffix: "一分钟内挖掘第一个细分领域，免费 5 次，无需信用卡。",
        },
      },
      {
        h2: "真实案例：从 Reddit 引用到 $2k MRR",
        paragraphs: [
          "一位独立开发者在 Reddit Pulse 搜索「gummysearch」，发现：「寻找 $20/月以下的 GummySearch 替代品，我只需要在 r/Entrepreneur 找『我希望』类帖子。」",
          "这一条引用验证了独立定价 Reddit 挖掘工具的需求。他们 3 天 ship 出 MVP，在 Indie Hackers 发帖，两个月内达到 $2k MRR — 全部来自一次痛点搜索。",
          "这就是 levelsio  playbook：找到真实抱怨，快速 ship，第一天就收费。不要六个月路线图，不要永久免费档。",
        ],
      },
      {
        h2: "调研工具的 SEO 与分发",
        paragraphs: [
          "「GummySearch 替代品」「Reddit 痛点挖掘工具」等长尾词在自定义域名下 1–3 个月可排名。向 Google Search Console 提交 sitemap。",
          "分发清单：Product Hunt 发布、Hacker News Show HN、Reddit r/SideProject 和 r/SaaS（分享你找到的真实痛点）、推特长文、Indie Hackers 里程碑帖。",
        ],
      },
      {
        h2: "总结",
        closingLink: {
          href: "/join",
          label: "免费试用 Reddit Pulse",
          prefix: "GummySearch 已消失，企业替代品要 $79+/月。若你需要细分领域痛点挖掘、挫败感评分、$29/月 一口价，可",
          suffix: "。五次搜索，无需信用卡。别再猜 — 开始挖掘。",
        },
      },
    ],
    cta: {
      title: "准备好找到下一个 SaaS 方向了吗？",
      subtitle: "免费 5 次搜索 · 订阅后挖掘不限量",
      button: "挖掘第一个细分领域",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
