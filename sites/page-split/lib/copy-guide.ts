import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 VWO Alternative for Indie Hackers — Landing Page A/B Testing Guide",
      description:
        "VWO costs $198/mo for solo founders. Compare A/B testing tools for indie SaaS: VWO, Convert, Google Optimize. Find a $29/mo flat-rate alternative with unlimited pageviews.",
    },
    h1: "2026 VWO Alternative for Indie Hackers: Landing Page A/B Testing Guide",
    updated: "Updated June 2026 · 10 min read",
    intro: [
      "You launched a landing page. Traffic is coming in — 200 visitors a day from Product Hunt, Twitter, and SEO. But your conversion rate sits at 3%. You wonder: would a different headline convert better? Should the CTA say \"Start free\" or \"Try 5 days free\"?",
      "A/B testing answers these questions with data, not gut feeling. Split visitors 50/50 between two variants, measure which converts more signups, and ship the winner. The problem? Enterprise tools like VWO charge $198/month and require sales demos. Google Optimize was discontinued. Convert starts at $299/mo.",
      "On Indie Hackers, founders repeatedly post: \"I was about to pay $198 for VWO — this is exactly what I needed for $9.\" Another wrote: \"I just wanted to change a headline, split traffic 50/50, and see which version converted better. Without writing code. Without a sales demo.\"",
      "This guide compares 2026 A/B testing tools for solo founders, what actually matters at indie scale, and how to run your first landing page test without eating your entire MRR on a single tool.",
    ],
    sections: [
      {
        h2: "Why indie hackers need A/B testing",
        paragraphs: [
          "A single headline change can lift conversion 10–30%. Indie hackers who test ship faster and waste less traffic on underperforming copy. At 500 visitors/day, a 2% improvement means 10 extra signups daily — compounding into real MRR.",
        ],
        list: [
          "Validate pricing page copy before a big launch",
          "Test CTA buttons without redeploying code",
          "Compare hero images or social proof placement",
          "Build a culture of data-driven decisions from day one",
        ],
        after: [
          "The classic indie stack: create an experiment, paste a snippet, wait for statistical significance, ship the winner. At solo scale, you don't need multivariate testing across 12 variants, heatmaps bundled at $500/mo, or account managers. You need: 50/50 split, conversion tracking, flat pricing.",
        ],
      },
      {
        h2: "2026 A/B testing tools compared",
        tools: [
          {
            h3: "VWO — $198+/mo",
            p: "Full-featured experimentation platform. Visual editor, multivariate tests, heatmaps add-on. Overkill for a solo founder testing one pricing headline. Annual contracts on higher tiers. Great for e-commerce teams, painful for bootstrapped SaaS.",
          },
          {
            h3: "Convert — $299+/mo",
            p: "Privacy-focused A/B testing with strong statistical engine. Excellent for agencies. Pricing starts where most indie products end. No free tier for meaningful traffic.",
          },
          {
            h3: "Google Optimize — discontinued",
            p: "Was free but confusing and now shut down. Many indie hackers still search for alternatives and land on enterprise tools with 20× the price.",
          },
          {
            h3: "Page Split — $29/mo flat",
            p: "Built for indie hackers: create experiments, 50/50 traffic split, live conversion dashboard, auto winner detection. 5 free experiments, then $29/mo unlimited. No per-visitor fees, no sales calls.",
            link: { href: "/experiments", text: "Start a test free", suffix: " — five experiments, no credit card." },
          },
        ],
      },
      {
        h2: "What to test first on your landing page",
        paragraphs: ["Start with high-impact, low-effort tests:"],
        ordered: [
          "Hero headline — your biggest lever for first impressions",
          "Primary CTA text — \"Get started\" vs \"Start free — no card\"",
          "Pricing anchor — monthly vs annual default",
          "Social proof placement — above vs below the fold",
        ],
        after: [
          "Run one test at a time. Wait for at least 100 conversions per variant before declaring a winner. Patience beats running 5 tests simultaneously on 50 daily visitors.",
        ],
      },
      {
        h2: "5 minutes to launch your first A/B test",
        paragraphs: ["The fastest indie path:"],
        ordered: [
          "Name your experiment and paste your landing page URL",
          "Write two headline variants (A and B)",
          "Add the tracking snippet before </body>",
          "Drive traffic — share on Twitter, run a small ad, or wait for organic",
          "Check the dashboard daily; ship the winner when confidence hits 95%",
        ],
        afterLink: {
          href: "/experiments",
          label: "Page Split",
          prefix: "Use ",
          suffix: " to create your first experiment in under a minute. Five free tests, no credit card.",
        },
      },
      {
        h2: "SEO and distribution for A/B testing tools",
        paragraphs: [
          "Long-tail content like \"VWO alternative indie hacker\" and \"cheap landing page A/B test\" ranks within 1–3 months on a custom domain. Submit your sitemap to Google Search Console.",
          "Distribution channels: Product Hunt launch, Hacker News Show HN, Reddit r/SideProject and r/SaaS, Twitter/X thread on your first test result, Indie Hackers milestone post.",
        ],
      },
      {
        h2: "Summary",
        closingLink: {
          href: "/join",
          label: "try Page Split free",
          prefix: "VWO is powerful software built for teams with experimentation budgets. If you need 50/50 split, conversion tracking, and $29/mo flat pricing, ",
          suffix: ". Five experiments, no credit card. Stop guessing — start testing.",
        },
      },
    ],
    cta: {
      title: "Ready to test your landing page?",
      subtitle: "5 free experiments · unlimited pageviews after subscribe",
      button: "Start your first test",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 VWO 替代品指南 — 落地页 A/B 测试",
      description:
        "VWO 对独立开发者要 $198/月。对比 VWO、Convert、Google Optimize 等 A/B 测试工具，找到 $29/月一口价的无限流量替代方案。",
    },
    h1: "2026 独立开发者 VWO 替代品：落地页 A/B 测试完整指南",
    updated: "更新于 2026 年 6 月 · 阅读约 10 分钟",
    intro: [
      "你上线了落地页，每天从 Product Hunt、推特和 SEO 来 200 个访客，但转化率只有 3%。你在想：换个标题会不会更好？按钮写「立即开始」还是「免费试用 5 天」？",
      "A/B 测试用数据回答这些问题，而不是靠直觉。把访客 50/50 分到两个变体，看哪个带来更多注册，然后上线赢家版本。问题是：VWO 这类企业工具要 $198/月，还要销售演示。Google Optimize 已停服，Convert 起步 $299/月。",
      "Indie Hackers 上经常有创始人发帖：「我本来要付 VWO $198/月，$29 的工具刚好够用。」还有人说：「我只想改个标题、50/50 分流、看哪个版本转化更好，不想写代码，不想销售演示。」",
      "本指南对比 2026 年适合独立开发者的 A/B 测试工具、一人规模真正需要什么，以及如何不把整月 MRR 花在单一工具上就跑通第一个落地页测试。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要 A/B 测试",
        paragraphs: [
          "一个标题改动就能让转化率提升 10–30%。会做测试的独立开发者上线更快，少浪费流量在低效文案上。每天 500 访客，转化率提升 2% 就是每天多 10 个注册，复利成真实 MRR。",
        ],
        list: [
          "大发布前验证定价页文案",
          "测试按钮文案而无需重新部署",
          "对比首屏图片或社会证明位置",
          "从第一天就建立数据驱动决策习惯",
        ],
        after: [
          "经典独立开发者路径：创建实验、贴代码片段、等统计显著、上线赢家。一人规模不需要 12 变体多变量测试、$500/月捆绑的热力图，或客户经理。你需要的是：50/50 分流、转化追踪、一口价。",
        ],
      },
      {
        h2: "2026 年 A/B 测试工具对比",
        tools: [
          {
            h3: "VWO — $198+/月",
            p: "功能完整的实验平台，可视化编辑器、多变量测试、热力图插件。对只测一个定价标题的独立开发者来说太重。高级方案要年付合同，适合电商团队，不适合自举 SaaS。",
          },
          {
            h3: "Convert — $299+/月",
            p: "注重隐私的 A/B 测试，统计引擎强大，适合代理商。定价起点已是多数独立产品的终点，没有有意义的免费档。",
          },
          {
            h3: "Google Optimize — 已停服",
            p: "曾经免费但难用，现已关闭。很多独立开发者搜替代品时直接落到贵 20 倍的企业工具上。",
          },
          {
            h3: "Page Split — $29/月 一口价",
            p: "为独立开发者打造：创建实验、50/50 分流、实时转化看板、自动判定赢家。免费 5 个实验，之后 $29/月 不限量，不按访客收费，无需销售演示。",
            link: { href: "/experiments", text: "免费开始测试", suffix: " — 五个实验，无需信用卡。" },
          },
        ],
      },
      {
        h2: "落地页应该先测什么",
        paragraphs: ["从高影响、低成本的测试开始："],
        ordered: [
          "首屏标题 — 第一印象的最大杠杆",
          "主按钮文案 — 「立即开始」对比「免费开始 — 无需信用卡」",
          "定价锚点 — 默认月付还是年付",
          "社会证明位置 — 首屏上方还是下方",
        ],
        after: [
          "一次只跑一个测试。每个变体至少 100 次转化再判定赢家。每天 50 访客时，耐心比同时跑 5 个测试更重要。",
        ],
      },
      {
        h2: "5 分钟上线第一个 A/B 测试",
        paragraphs: ["独立开发者最快路径："],
        ordered: [
          "命名实验并粘贴落地页链接",
          "写两个标题变体（A 和 B）",
          "在 </body> 前加入追踪代码片段",
          "导流 — 发推特、小预算广告或等自然流量",
          "每天查看看板，置信度到 95% 就上线赢家",
        ],
        afterLink: {
          href: "/experiments",
          label: "Page Split",
          prefix: "用",
          suffix: "一分钟内创建第一个实验，免费 5 次，无需信用卡。",
        },
      },
      {
        h2: "A/B 测试工具的 SEO 与分发",
        paragraphs: [
          "「VWO 替代品 独立开发者」「便宜落地页 A/B 测试」等长尾词在自定义域名下 1–3 个月可排名。向 Google Search Console 提交 sitemap。",
          "分发渠道：Product Hunt 发布、Hacker News Show HN、Reddit r/SideProject 和 r/SaaS、推特分享首次测试结果、Indie Hackers 里程碑帖。",
        ],
      },
      {
        h2: "总结",
        closingLink: {
          href: "/join",
          label: "免费试用 Page Split",
          prefix: "VWO 是面向有实验预算团队的重型软件。若你需要 50/50 分流、转化追踪、$29/月 一口价，可",
          suffix: "。五个实验，无需信用卡。别再猜 — 开始测试。",
        },
      },
    ],
    cta: {
      title: "准备好测试你的落地页了吗？",
      subtitle: "免费 5 个实验 · 订阅后页面浏览不限量",
      button: "开始第一个测试",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
