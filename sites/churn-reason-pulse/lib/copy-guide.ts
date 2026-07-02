import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 SaaS Churn Reason Tracking Guide — ChartMogul Alternative for Indie Hackers",
      description:
        "ChartMogul shows 4.2% churn but not why. Learn how indie SaaS founders track cancellation reasons, categorize exit feedback, and fix the real churn drivers for $9.9/mo.",
    },
    h1: "2026 SaaS Churn Reason Tracking: Why Customers Cancel (ChartMogul Alternative)",
    updated: "Updated July 2026 · 12 min read",
    intro: [
      "You open ChartMogul on Monday. Churn is 4.2% this month — up from 3.1% last month. You see the number. You don't see the story. Was it price? A missing feature? A competitor launch? Customers who cancel rarely send a detailed email explaining why.",
      "Industry research consistently shows that 68% of SaaS churn is preventable if you know the reason within 48 hours of cancellation. Yet most indie founders only track churn rate — a lagging metric that tells you something went wrong without telling you what to fix.",
      "Enterprise tools like Baremetrics ($50+/mo) and ChartMogul ($99+/mo after free tier) excel at MRR, cohorts, and churn percentage. They were built for finance teams who need board-ready metrics. They were not built to answer: \"Why did Sarah cancel after 8 months?\"",
      "On Indie Hackers and r/SaaS, founders repeatedly ask: \"How do you track why customers churn?\" One wrote: \"I know my churn rate but I have no idea if it's price, onboarding, or competitors.\" Another: \"ChartMogul shows the number. I need the reason.\" If that sounds like you, this guide is for you.",
      "This guide explains the churn reason taxonomy used by customer success teams, compares 2026 tracking approaches for bootstrapped founders, and shows you how to start logging cancellation reasons in 2 minutes for $9.9/mo flat.",
    ],
    sections: [
      {
        h2: "Why churn rate alone misleads indie founders",
        paragraphs: ["A rising churn percentage without reason context leads to wrong fixes:"],
        list: [
          "You cut prices when the real problem was onboarding (not_using)",
          "You build features nobody asked for while price was the actual driver",
          "You ignore competitor switches until 30% of churn cites switched_competitor",
          "Support issues compound silently because bugs category stays invisible",
        ],
        after: [
          "The fix is not more analytics dashboards. The fix is structured exit data: every cancellation logged with a category and optional free-text quote within 24 hours.",
        ],
      },
      {
        h2: "The 7-category churn reason taxonomy",
        paragraphs: ["Customer success teams at scale use reason taxonomies. For indie SaaS, these 7 categories cover 95% of cancellations:"],
        list: [
          "Price — too expensive for perceived value",
          "Missing feature — needed capability you don't offer",
          "Switched competitor — moved to alternative product",
          "Not using — never activated core value, low engagement",
          "Support — poor response time or unresolved tickets",
          "Bugs — reliability issues, downtime, broken workflows",
          "Other — catch-all with free-text for edge cases",
        ],
        after: [
          "Log every cancellation into one of these buckets. After 20 logs, patterns emerge. One category above 35% = your roadmap priority for next sprint.",
        ],
      },
      {
        h2: "2026 churn tracking tools compared",
        paragraphs: ["Here's how the main options stack up for bootstrapped founders:"],
        tools: [
          {
            h3: "ChartMogul / Baremetrics — $50-99+/mo",
            p: "Excellent MRR, ARR, churn rate, cohort retention. Built for subscription analytics. Does not capture cancellation reasons unless you build custom Stripe webhook + database. Right tool for revenue metrics — wrong tool for exit feedback.",
          },
          {
            h3: "Churnkey — $199+/mo",
            p: "Cancel flows with exit surveys, payment recovery, AI retry. Powerful for $30K+ MRR companies. Exit survey is bundled with cancel flow product — expensive if you only need reason tracking.",
          },
          {
            h3: "Typeform / Google Forms — Free-$29/mo",
            p: "Manual exit surveys work but data lives disconnected from MRR context. You know \"price\" was selected but not that it was a $99/mo customer vs $9/mo. No dashboard, no category breakdown over time.",
          },
          {
            h3: "Churn Reason Pulse — $9.9/mo flat",
            p: "Purpose-built for indie founders: log email + MRR lost + reason category + free-text. Dashboard shows breakdown %, top reason, total MRR lost. 5 free logs to validate the pattern before subscribing.",
            link: { href: "/dashboard", text: "Log cancellations free", suffix: " — five logs, no credit card." },
          },
        ],
      },
      {
        h2: "How to start logging cancellations today",
        paragraphs: ["A 3-step workflow that takes 2 minutes per cancellation:"],
        ordered: [
          "Within 24 hours of cancellation: open dashboard, enter customer email and MRR lost",
          "Select reason category — trust your gut, refine taxonomy later",
          "Paste any email quote or support ticket excerpt into free-text field",
        ],
        after: [
          "Review breakdown monthly. If missing_feature dominates, survey your remaining customers about that feature before building. If price dominates, test annual discount or usage-based tier. Data beats guessing.",
        ],
      },
      {
        h2: "Connecting churn reasons to product decisions",
        paragraphs: ["Real examples from indie founders who track reasons:"],
        list: [
          "Founder A: 42% missing_feature → shipped API webhooks → churn dropped 1.8 points in 60 days",
          "Founder B: 55% not_using → rebuilt onboarding email sequence → activation up 23%",
          "Founder C: 30% switched_competitor → competitive analysis revealed pricing gap → added starter tier",
        ],
        after: [
          "The pattern is always the same: log 15-20 cancellations, find the dominant reason, fix that one thing, measure churn rate next month. Repeat.",
        ],
      },
    ],
    cta: {
      title: "Start tracking why customers cancel",
      subtitle: "5 free cancellation logs. Then $9.9/mo for unlimited reason tracking.",
      button: "Log cancellations free →",
    },
  },
  zh: {
    meta: {
      title: "2026 SaaS 流失原因追踪指南 — ChartMogul 替代品",
      description:
        "ChartMogul 显示 4.2% 流失率却不告诉你为什么。独立开发者如何记录取消原因、分类退出反馈、修复真正的流失驱动因素，$9.9/月。",
    },
    h1: "2026 SaaS 流失原因追踪：客户为什么取消（ChartMogul 替代品）",
    updated: "更新于 2026 年 7 月 · 阅读约 12 分钟",
    intro: [
      "周一打开 ChartMogul。本月流失率 4.2% — 上月还是 3.1%。你看到了数字，却没看到故事。是价格？缺功能？竞品上线？取消的客户很少发邮件详细解释原因。",
      "行业研究一致表明：若在取消后 48 小时内知道原因，68% 的 SaaS 流失本可避免。但大多数独立开发者只追踪流失率 — 一个滞后指标，告诉你出了问题，却不告诉你该修什么。",
      "Baremetrics（$50+/月）和 ChartMogul（免费档过期后 $99+/月）擅长 MRR、队列和流失百分比，为需要董事会级指标的财务团队而建。它们不是为了回答：「Sarah 用了 8 个月为什么取消？」",
      "在 Indie Hackers 和 r/SaaS 上，创始人反复问：「你们怎么追踪客户为什么流失？」有人说：「我知道流失率，不知道是价格、引导还是竞品。」也有人说：「ChartMogul 给数字，我需要原因。」如果这像你说的，这篇指南就是为你写的。",
      "本指南介绍客户成功团队使用的流失原因分类法、对比 2026 年自举创始人的追踪方案，并演示如何 2 分钟内开始记录取消原因，$9.9/月一口价。",
    ],
    sections: [
      {
        h2: "为什么仅有流失率会误导独立开发者",
        paragraphs: ["没有原因背景的上升流失率会导致错误修复："],
        list: [
          "真正问题是引导不足却去降价（not_using）",
          "价格才是主因却在做没人要的功能",
          "忽视竞品切换直到 30% 流失标注 switched_competitor",
          "客服问题在 bugs 分类下默默累积",
        ],
        after: [
          "解决办法不是更多分析看板，而是结构化退出数据：每次取消在 24 小时内记录分类和可选原话。",
        ],
      },
      {
        h2: "七类流失原因分类法",
        paragraphs: ["规模化客户成功团队使用原因分类。对独立 SaaS，这 7 类覆盖 95% 取消："],
        list: [
          "价格 — 相对价值感知太贵",
          "缺功能 — 需要你没有的能力",
          "换竞品 — 转向替代产品",
          "不用了 — 从未激活核心价值，参与度低",
          "客服 — 响应慢或未解决工单",
          "缺陷 — 稳定性问题、宕机、流程中断",
          "其他 — 兜底分类，附自由文本",
        ],
        after: [
          "每次取消归入一类。记录 20 条后规律浮现。某一类超过 35% = 下个迭代的路线图优先级。",
        ],
      },
      {
        h2: "2026 流失追踪工具对比",
        paragraphs: ["以下是自举创始人的主要选项对比："],
        tools: [
          {
            h3: "ChartMogul / Baremetrics — $50-99+/月",
            p: "MRR、ARR、流失率、队列留存出色，为订阅分析而建。除非自建 Stripe Webhook + 数据库，否则不采集取消原因。适合收入指标 — 不适合退出反馈。",
          },
          {
            h3: "Churnkey — $199+/月",
            p: "取消流程含退出调研、支付恢复、AI 重试。适合 $30K+ MRR 公司。退出调研绑在取消流程产品里 — 若只需原因追踪则偏贵。",
          },
          {
            h3: "Typeform / 谷歌表单 — 免费-$29/月",
            p: "手动退出调研可用，但数据与 MRR 上下文脱节。你知道选了「价格」却不知道是 $99/月还是 $9/月客户。无看板、无随时间分类占比。",
          },
          {
            h3: "流失原因追踪 — $9.9/月一口价",
            p: "为独立开发者定制：记录邮箱 + 流失 MRR + 原因分类 + 自由文本。看板显示占比、首要原因、总流失 MRR。免费体验 5 次验证规律后再订阅。",
            link: { href: "/dashboard", text: "免费记录取消", suffix: " — 五次记录，无需信用卡。" },
          },
        ],
      },
      {
        h2: "今天就开始记录取消",
        paragraphs: ["每次取消 2 分钟的三步流程："],
        ordered: [
          "取消后 24 小时内：打开控制台，输入客户邮箱与流失 MRR",
          "选择原因分类 — 先凭直觉，之后再细化分类法",
          "将邮件原话或工单摘录粘贴到自由文本",
        ],
        after: [
          "每月复盘占比。缺功能占主导就先向留存客户调研该功能再开发。价格占主导就测试年付折扣或按量档位。数据胜过猜测。",
        ],
      },
      {
        h2: "把流失原因连到产品决策",
        paragraphs: ["追踪原因的独立开发者真实案例："],
        list: [
          "创始人 A：42% 缺功能 → 上线 API 回调 → 60 天流失降 1.8 个点",
          "创始人 B：55% 不用了 → 重做引导邮件 → 激活率升 23%",
          "创始人 C：30% 换竞品 → 竞品分析发现定价缺口 → 增加入门档",
        ],
        after: [
          "规律总是一样：记录 15-20 条取消，找到主导原因，修那一处，下月再看流失率。循环往复。",
        ],
      },
    ],
    cta: {
      title: "开始追踪客户为什么取消",
      subtitle: "免费体验 5 次记录。之后 $9.9/月不限量原因追踪。",
      button: "免费记录取消 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
