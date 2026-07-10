import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Bitly Alternative for Indie Hackers — Short Link Analytics Guide",
      description:
        "Bitly starts at $35/mo for click analytics. Compare URL shorteners for indie SaaS launches. Find a $29/mo flat-rate tool with UTM tracking and referrer stats.",
    },
    h1: "2026 Bitly Alternative for Indie Hackers: Short Link Analytics Guide",
    updated: "Updated June 2026 · 10 min read",
    intro: [
      "Every product launch week, indie hackers paste the same landing page URL into Twitter threads, Reddit comments, Hacker News posts, and newsletter issues. Then they wonder: which link actually drove signups?",
      "Bitly solved this for enterprises — branded short links, click counts, referrer breakdowns. But Bitly's Growth plan is $35/month. For a solo founder running 2–3 launches per year, that's $420/year just to see click stats on 10 links.",
      "The problem? Google Analytics is overkill for a single landing page. UTM parameters in raw URLs are ugly and easy to mistype. You need: a short link, click count, top referrers, and UTM capture. Four things. Not a marketing suite.",
      "On r/SaaS and Indie Hackers, founders repeatedly ask: \"What's the cheapest link shortener with analytics?\" Another wrote: \"I just want to know if my HN post or Twitter thread drove more traffic — Bitly is overkill.\" If that sounds like you, this guide is for you.",
      "This guide compares 2026 URL shorteners for solo founders, what analytics actually matter at indie scale, and how to pick a tool that won't eat your launch budget.",
    ],
    sections: [
      {
        h2: "Why indie hackers need click analytics on short links",
        paragraphs: ["A raw landing page URL tells you nothing about distribution:"],
        list: [
          "Which channel drove traffic — Twitter vs Hacker News vs newsletter",
          "Click-through rate — did people actually click your CTA link?",
          "Referrer breakdown — direct, social, search, or email client",
          "UTM parameters — source, medium, campaign without manual spreadsheets",
        ],
        after: [
          "The classic indie launch stack: create one short link per channel, share everywhere, check clicks on day 3, double down on the winner. You don't need multi-touch attribution in week one. You need: clicks, referrers, and UTM tags.",
        ],
      },
      {
        h2: "2026 URL shortener tools compared",
        tools: [
          {
            h3: "Bitly — $35+/mo",
            p: "Industry standard for link management. Growth plan $35/mo for custom domains and click analytics. Great for marketing teams. Expensive when you're bootstrapping with 5 links per launch.",
          },
          {
            h3: "Rebrandly — $29+/mo",
            p: "Custom branded domains, link retargeting. Essentials $29/mo. Solid for agencies. Overkill for solo devs who just want click counts.",
          },
          {
            h3: "TinyURL — free",
            p: "Basic shortening, no analytics. No referrer tracking. No UTM capture. Fine for one-off shares, not for launch campaigns.",
          },
          {
            h3: "Google Analytics + raw URLs — free",
            p: "Powerful but setup-heavy. UTM builder spreadsheets. Cross-domain tracking headaches. Works but slow for quick launch experiments.",
          },
          {
            h3: "Link Pulse — $29/mo flat",
            p: "Built for indie hackers who want short links + click analytics without per-seat fees. Create links in 30 seconds, see referrers and UTM breakdown.",
            link: { href: "/join", text: "5 free links to try", suffix: ", then $29/mo flat. No annual lock-in." },
          },
        ],
      },
      {
        h2: "What link analytics to track at indie scale",
        paragraphs: ["Before comparing prices, decide what you actually check per launch:"],
        ordered: [
          "Total clicks — did anyone click at all?",
          "7-day trend — is traffic still coming or did it die after day 1?",
          "Top referrers — Twitter, HN, Reddit, or direct?",
          "UTM breakdown — which campaign tag performed best?",
        ],
        after: [
          "Skip enterprise metrics you won't act on in launch week one: multi-touch attribution, cohort LTV by referrer, A/B tested destination URLs.",
        ],
      },
      {
        h2: "How to set up tracked launch links in 30 seconds",
        paragraphs: ["The fastest path for a solo founder:"],
        ordered: [
          "Paste your landing page URL into a short link tool",
          "Add a custom slug like launch-day or hn-post",
          "Append UTM params to the destination if needed",
          "Share the short link on each channel with a unique slug",
          "Check referrers on day 3 and focus on the winning channel",
        ],
        after: [
          "Most founders over-analyze before they ship. Start with one link per channel. Add fancy attribution only when you have consistent weekly launches.",
        ],
      },
      {
        h2: "UTM tracking without the spreadsheet hell",
        paragraphs: [
          "Here's a real scenario: you launch on Product Hunt and Twitter the same day. Both links go to the same landing page. Without UTM tags, all traffic looks identical.",
          "With UTM parameters — utm_source=twitter, utm_medium=social, utm_campaign=launch — each click records the source. On day 3 you see Twitter drove 68 clicks and PH drove 31. You know where to engage next.",
          "UTM tracking isn't vanity analytics. It's how you stop guessing which launch channel works.",
        ],
      },
      {
        h2: "Pricing math for indie founders",
        paragraphs: [
          "Bitly Growth: $35/mo × 12 = $420/year. For 10 links per launch × 3 launches = $14 per link per year.",
          "Rebrandly Essentials: $29/mo × 12 = $348/year, plus domain costs.",
          "Link Pulse: $29/mo × 12 = $118.80/year. Unlimited links and clicks.",
          "For bootstrapped founders, the break-even is one saved hour of manual UTM spreadsheet work per month.",
        ],
        after: [
          "Ready to try? Create 5 short links free, track clicks on your next launch, and upgrade only when you need unlimited links.",
        ],
      },
    ],
    cta: {
      title: "Create tracked short links free",
      subtitle: "5 free links · click analytics · $29/mo unlimited",
      button: "Open dashboard →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Bitly 平替指南 — 短链点击分析选型",
      description:
        "Bitly 点击分析起步 $35/月。对比独立开发者发布用短链工具，找到 $29/月一口价、含 UTM 追踪与来源统计的方案。",
    },
    h1: "2026 独立开发者 Bitly 平替：短链点击分析选型指南",
    updated: "更新于 2026 年 6 月 · 阅读约 10 分钟",
    intro: [
      "每次产品发布周，独立开发者把同一个落地页链接贴进推特帖、Reddit 评论、Hacker News 和邮件通讯。然后纳闷：到底是哪条链接带来了注册？",
      "Bitly 为企业解决了这个问题 — 品牌短链、点击数、来源分析。但 Bitly 成长版 $35/月。对一年做 2–3 次发布的独立开发者，仅看 10 条链接的点击统计就要 $420/年。",
      "问题在于？Google Analytics 对单个落地页太重。原始 URL 上的 UTM 参数难看又容易打错。你需要的是：短链、点击数、热门来源、UTM 捕获。四样东西，不是营销套件。",
      "在 r/SaaS 和 Indie Hackers 上，创始人反复问：「最便宜的带分析短链工具是什么？」还有人写道：「我只想知道 HN 帖还是推特线程带来更多流量 — Bitly 太重了。」如果这像你说的，这篇指南就是为你写的。",
      "本指南对比 2026 年适合独立开发者的短链工具、在 indie 规模真正重要的分析指标，以及如何选择不会吃掉发布预算的工具。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要短链点击分析",
        paragraphs: ["原始落地页链接无法告诉你分发效果："],
        list: [
          "哪个渠道带来流量 — 推特 vs Hacker News vs 邮件",
          "点击率 — 有人真的点了你的行动链接吗？",
          "来源分布 — 直接访问、社交、搜索还是邮件客户端",
          "UTM 参数 — 来源、媒介、活动，无需手工表格",
        ],
        after: [
          "经典 indie 发布流程：每个渠道一条短链，到处分享，第 3 天看点击，加码表现最好的渠道。第一周不需要多触点归因。你需要的是：点击、来源、UTM 标签。",
        ],
      },
      {
        h2: "2026 短链工具对比",
        tools: [
          {
            h3: "Bitly — $35+/月",
            p: "链接管理行业标准。成长版 $35/月含自定义域名与点击分析。适合营销团队。每次发布 5 条链接的自举开发者偏贵。",
          },
          {
            h3: "Rebrandly — $29+/月",
            p: "自定义品牌域名、链接再营销。基础版 $29/月。代理商好用。只想看点击数的独立开发者过重。",
          },
          {
            h3: "TinyURL — 免费",
            p: "基础缩短，无分析。无来源追踪。无 UTM 捕获。适合一次性分享，不适合发布活动。",
          },
          {
            h3: "Google Analytics + 原始链接 — 免费",
            p: "功能强但配置重。UTM 构建表格。跨域追踪麻烦。能做但慢，不适合快速发布实验。",
          },
          {
            h3: "短链点击统计 — $29/月 一口价",
            p: "为想要短链 + 点击分析、不想按席位付费的独立开发者打造。30 秒创建链接，查看来源与 UTM 明细。",
            link: { href: "/join", text: "免费体验 5 条短链", suffix: "，之后 $29/月一口价。无年付绑定。" },
          },
        ],
      },
      {
        h2: "indie 规模该追踪什么链接指标",
        paragraphs: ["比价格之前，先想清楚每次发布真正看什么："],
        ordered: [
          "总点击 — 有人点了吗？",
          "7 日趋势 — 流量还在来还是第一天就凉了？",
          "热门来源 — 推特、HN、Reddit 还是直接访问？",
          "UTM 明细 — 哪个活动标签表现最好？",
        ],
        after: [
          "跳过发布第一周不会行动的指标：多触点归因、按来源的队列 LTV、目的地 URL A/B 测试。",
        ],
      },
      {
        h2: "30 秒设置带追踪的发布链接",
        paragraphs: ["独立开发者最快路径："],
        ordered: [
          "把落地页链接粘贴到短链工具",
          "添加自定义别名如 launch-day 或 hn-post",
          "如需要给目标链接加上 UTM 参数",
          "每个渠道分享不同别名的短链",
          "第 3 天看来源，聚焦表现最好的渠道",
        ],
        after: [
          "多数创始人在发布前就过度分析。先从每个渠道一条链接开始。有稳定周更发布再加复杂归因。",
        ],
      },
      {
        h2: "不用表格地狱做 UTM 追踪",
        paragraphs: [
          "真实场景：同一天在 Product Hunt 和推特发布。两条链接指向同一落地页。没有 UTM 标签，所有流量看起来一样。",
          "加上 UTM 参数 — utm_source=twitter、utm_medium=social、utm_campaign=launch — 每次点击记录来源。第 3 天看到推特 68 次点击、PH 31 次。你知道下一步该在哪互动。",
          "UTM 追踪不是虚荣分析。它是你停止猜测哪个发布渠道有效的方式。",
        ],
      },
      {
        h2: "独立开发者的定价账",
        paragraphs: [
          "Bitly 成长版：$35/月 × 12 = $420/年。每次发布 10 条链接 × 3 次发布 = 每条链接每年 $14。",
          "Rebrandly 基础版：$29/月 × 12 = $348/年，另加域名费用。",
          "短链点击统计：$29/月 × 12 = $118.80/年。短链与点击不限量。",
          "对自举创始人，回本只需每月少花一小时手工维护 UTM 表格。",
        ],
        after: [
          "准备好试试？免费创建 5 条短链，追踪下次发布的点击，需要无限短链时再升级。",
        ],
      },
    ],
    cta: {
      title: "免费创建带追踪的短链",
      subtitle: "免费 5 条短链 · 点击分析 · $29/月 不限量",
      button: "打开控制台 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
