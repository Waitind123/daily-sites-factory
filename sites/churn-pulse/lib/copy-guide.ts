import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 Baremetrics Alternative for Indie Hackers — Customer Health Score Guide",
      description:
        "Baremetrics starts at $50+/mo. Compare customer health score tools for indie SaaS. Find a $9.9/mo flat-rate churn alert tool that connects only to Stripe subscriptions.",
    },
    h1: "2026 Baremetrics Alternative for Indie Hackers: Customer Health Score Guide",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "Every week, bootstrapped founders discover churn in their MRR dashboard — three days after customers already cancelled. By then, the damage is done. Enterprise customer success platforms like Baremetrics, ChartMogul, and Vitally charge $50–$500/month to predict churn. They're built for teams with dedicated CS managers, not solo devs with 80 paying subscribers.",
      "What you actually need is simpler: a health score per customer (0–100), a list of at-risk accounts, and a Stripe connection that takes 2 minutes. When Design Studio hasn't logged in for 21 days and missed a payment retry, you want an alert — not a 40-page retention playbook.",
      "The problem? Baremetrics starts around $50/month and scales with MRR. Vitally requires Salesforce integration. ChurnZero wants a sales call before you see pricing. For a solo founder at $4K MRR, spending 1.25% of revenue on churn prediction feels wrong when you could just email 3 at-risk customers personally.",
      "On Indie Hackers and r/SaaS, founders repeatedly ask: \"What's the cheapest way to know which customers are about to churn?\" Another wrote: \"I wish there was a tool that just reads Stripe and tells me who to email this week.\" If that sounds like you, this guide is for you.",
      "This guide compares 2026 customer health tools for solo founders, what signals actually predict churn at indie scale, and how to pick a monitoring tool that won't eat your margins.",
    ],
    sections: [
      {
        h2: "Why indie hackers need customer health scores",
        paragraphs: ["Stripe shows you who paid. It doesn't tell you who's about to leave:"],
        list: [
          "Days since last login — the #1 early churn signal for SaaS products",
          "Payment failures — failed retries often precede cancellation by 7–14 days",
          "Usage decline — feature adoption dropping week over week",
          "Support ticket sentiment — angry tickets before cancel are common",
          "Plan downgrades — contraction MRR is a leading indicator",
          "Health score composite — one number instead of checking 6 dashboards",
        ],
        after: [
          "The classic indie playbook: scan health scores on Monday, email at-risk customers personally, offer a call or discount before they hit cancel. You don't need AI-powered churn prediction with 95% accuracy in month one. You need: a score, a list, and 30 minutes to reach out.",
        ],
      },
      {
        h2: "2026 customer health tools compared",
        tools: [
          {
            h3: "Baremetrics — $50+/mo",
            p: "Industry standard for SaaS metrics with cancellation insights. Forecasting and dunning on higher tiers. Great for funded startups. Expensive when you're bootstrapping at $3–5K MRR with 60 customers.",
          },
          {
            h3: "Vitally — $500+/mo",
            p: "Full customer success platform with health scores, playbooks, and CRM sync. Built for B2B teams with dedicated CS reps. Overkill for solo founders who just want a churn alert list.",
          },
          {
            h3: "ChurnZero — custom pricing",
            p: "Enterprise churn management with journey mapping and in-app messaging. Requires sales call and implementation. Not designed for indie hackers shipping solo.",
          },
          {
            h3: "Stripe Dashboard — free",
            p: "Shows active subscriptions and recent cancellations. No health scores. No at-risk alerts. No activity tracking. You find out about churn when MRR drops.",
          },
          {
            h3: "Google Sheets + manual tracking — free",
            p: "Log last login dates in a spreadsheet. Update weekly. Breaks when you have 50+ customers. Works until you forget to check for 3 weeks.",
          },
          {
            h3: "Churn Pulse — $9.9/mo flat",
            p: "Built for indie hackers who want health scores and churn alerts without per-customer fees. Connect Stripe in 2 minutes, scan weekly, see at-risk customers ranked by score.",
            link: { href: "/join", text: "5 free scans to try", suffix: ", then $9.9/mo flat. No annual lock-in." },
          },
        ],
      },
      {
        h2: "What health signals matter at indie scale",
        paragraphs: ["Before comparing prices, decide what you actually check weekly:"],
        ordered: [
          "Health score 0–100 — one number per customer, sorted lowest first",
          "Days inactive — if above 14 days, send a check-in email",
          "Payment failures — retry failed? reach out before auto-cancel",
          "MRR at risk — prioritize high-value accounts in your outreach",
          "Trend direction — score dropping 20+ points in a week is urgent",
        ],
        after: [
          "Skip enterprise metrics you won't act on in month one: NPS surveys with 30 customers, 12-month cohort retention curves, AI churn prediction models requiring 1000+ data points.",
        ],
      },
      {
        h2: "How to connect Stripe in 2 minutes",
        paragraphs: ["The fastest path for a solo founder:"],
        ordered: [
          "Create a restricted API key in Stripe Dashboard (read-only, subscriptions)",
          "Paste the key into your health monitoring tool",
          "Click scan — see health scores and at-risk customers ranked",
          "Set a Monday calendar reminder to scan and email at-risk accounts",
          "When a critical customer appears, reach out within 24 hours",
        ],
        after: [
          "Most founders over-analyze before they have paying customers. Start with health scores and personal outreach. Add automated playbooks only when you have 200+ customers and can't email everyone.",
        ],
      },
      {
        h2: "Churn alerts: the feature that saves your business",
        paragraphs: [
          "Here's a real scenario: your MRR is $4,800 with 95 customers. Average health score is 72 — looks healthy. But Cloud Nine (score: 28, $199/mo MRR) had 2 payment failures and hasn't logged in for 21 days. Without churn alerts, you'd see -$199 in next week's MRR drop.",
          "With health monitoring, you email Cloud Nine on Tuesday. They had a card expiry issue and forgot to update. They fix it Wednesday. You saved $2,388 in annual revenue from one email.",
          "At indie scale, saving one $199/mo customer pays for 20 months of your health monitoring tool. Churn alerts aren't vanity analytics — they're how you catch problems before they compound.",
        ],
      },
      {
        h2: "Pricing math for indie founders",
        paragraphs: [
          "Baremetrics at $50/mo: $600/year. At $4K MRR, that's 1.25% of revenue.",
          "Vitally at $500/mo: $6,000/year — more than many indie products' entire profit.",
          "Churn Pulse: $9.9/mo × 12 = $118.80/year. Flat pricing regardless of customer count.",
          "For bootstrapped founders, the break-even is immediate. One saved churned customer pays for years of health monitoring.",
        ],
        after: [
          "Ready to try? Connect Stripe free, scan customer health 5 times, and upgrade only when you need unlimited weekly monitoring.",
        ],
      },
    ],
    cta: {
      title: "Scan your customers' health free",
      subtitle: "5 free scans · health scores · churn alerts · $9.9/mo unlimited",
      button: "Open dashboard →",
    },
  },
  zh: {
    meta: {
      title: "2026 独立开发者 Baremetrics 平替指南 — 客户健康分与流失预警",
      description:
        "Baremetrics 起步 $50+/月。对比独立开发者客户健康分工具，找到 $9.9/月一口价、仅连 Stripe 订阅的流失告警工具。",
    },
    h1: "2026 独立开发者 Baremetrics 平替：客户健康分与流失预警指南",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "每周，自举创始人都在 MRR 仪表盘上发现流失 — 客户取消三天后才看到。那时伤害已成。Baremetrics、ChartMogul、Vitally 等企业客户成功平台收 $50–$500/月做流失预测，为专职客户成功经理的团队设计，不是为 80 个付费订阅者的独立开发者。",
      "你真正需要的更简单：每位客户一个健康分（0–100）、一份风险账户清单、2 分钟接好的 Stripe 连接。当设计工作室 21 天未登录且付款重试失败时，你要的是告警 — 不是 40 页留存手册。",
      "问题在于？Baremetrics 约 $50/月起并随 MRR 涨价。Vitally 要 Salesforce 集成。ChurnZero 看定价前要先销售电话。对 $4K MRR 的独立创始人，花 1.25% 收入做流失预测感觉不对 — 你完全可以亲自邮件联系 3 个风险客户。",
      "在 Indie Hackers 和 r/SaaS 上，创始人反复问：「最便宜的方式是什么，能知道哪些客户即将流失？」还有人写道：「希望有个工具只读 Stripe，告诉我这周该邮件联系谁。」如果这像你说的，这篇指南就是为你写的。",
      "本指南对比 2026 年适合独立开发者的客户健康工具、在 indie 规模真正预测流失的信号，以及如何选择不会侵蚀利润率的监控工具。",
    ],
    sections: [
      {
        h2: "为什么独立开发者需要客户健康分",
        paragraphs: ["Stripe 告诉你谁付了款，但不告诉你谁即将离开："],
        list: [
          "距上次登录天数 — SaaS 产品头号早期流失信号",
          "付款失败 — 重试失败通常在取消前 7–14 天",
          "使用下降 — 功能采用周环比下降",
          "工单情绪 — 取消前的愤怒工单很常见",
          "套餐降级 — 收缩 MRR 是领先指标",
          "健康分综合 — 一个数字代替查 6 个仪表盘",
        ],
        after: [
          "经典 indie 流程：周一扫描健康分，亲自邮件联系风险客户，在点取消前提供通话或折扣。第一个月不需要 95% 准确率的 AI 流失预测。你需要的是：一个分数、一份清单、30 分钟联系时间。",
        ],
      },
      {
        h2: "2026 客户健康工具对比",
        tools: [
          {
            h3: "Baremetrics — $50+/月",
            p: "SaaS 指标行业标准，含取消洞察。高档有预测和催款。适合融资创业公司。$3–5K MRR、60 个客户时自举偏贵。",
          },
          {
            h3: "Vitally — $500+/月",
            p: "完整客户成功平台：健康分、剧本、CRM 同步。为专职客户成功代表的 B2B 团队打造。独立开发者只要流失告警清单就太重。",
          },
          {
            h3: "ChurnZero — 定制定价",
            p: "企业流失管理：旅程映射与应用内消息。需销售电话和实施。不是为独立开发者单人 ship 设计。",
          },
          {
            h3: "Stripe 仪表盘 — 免费",
            p: "显示活跃订阅和近期取消。无健康分。无风险告警。无活跃追踪。MRR 下跌时才发现流失。",
          },
          {
            h3: "Google 表格 + 手动追踪 — 免费",
            p: "在表格记录最后登录日期。每周更新。50+ 客户就崩。三周没看就忘了。",
          },
          {
            h3: "客户健康分 — $9.9/月 一口价",
            p: "为想要健康分和流失告警、不想按客户付费的独立开发者打造。2 分钟连接 Stripe，每周扫描，按分数排序查看风险客户。",
            link: { href: "/join", text: "免费体验 5 次扫描", suffix: "，之后 $9.9/月一口价。无年付绑定。" },
          },
        ],
      },
      {
        h2: "indie 规模真正重要的健康信号",
        paragraphs: ["比价格之前，先想清楚每周真正看什么："],
        ordered: [
          "健康分 0–100 — 每位客户一个数，最低排最前",
          "未活跃天数 — 超 14 天发问候邮件",
          "付款失败 — 重试失败？自动取消前联系",
          "风险 MRR — 优先联系高价值账户",
          "趋势方向 — 一周内降 20+ 分需紧急处理",
        ],
        after: [
          "跳过第一个月不会行动的指标：30 个客户的 NPS 调研、12 个月队列留存曲线、需要 1000+ 数据点的 AI 流失预测模型。",
        ],
      },
      {
        h2: "2 分钟连接 Stripe",
        paragraphs: ["独立开发者最快路径："],
        ordered: [
          "在 Stripe 后台创建受限 API 密钥（只读，订阅）",
          "将密钥粘贴到健康监控工具",
          "点击扫描 — 查看健康分与排序后的风险客户",
          "设置周一日历提醒扫描并邮件联系风险账户",
          "出现高危客户时 24 小时内联系",
        ],
        after: [
          "多数创始人在有付费客户前就过度分析。从健康分和个人联系开始。200+ 客户、无法邮件所有人时再加自动化剧本。",
        ],
      },
      {
        h2: "流失告警：能救业务的功能",
        paragraphs: [
          "真实场景：MRR $4,800，95 个客户。平均健康分 72 — 看起来健康。但云端九号（分数 28，$199/月 MRR）有 2 次付款失败且 21 天未登录。没有流失告警，下周 MRR 降 $199 才知道。",
          "有健康监控后，周二邮件联系云端九号。他们是卡片过期忘了更新。周三修好。一封邮件挽回 $2,388 年收入。",
          "在 indie 规模，挽回一个 $199/月客户够付 20 个月健康监控工具费。流失告警不是虚荣分析 — 是你在问题复合化前发现它们的方式。",
        ],
      },
      {
        h2: "独立开发者的定价账",
        paragraphs: [
          "Baremetrics $50/月：$600/年。$4K MRR 时占收入 1.25%。",
          "Vitally $500/月：$6,000/年 — 超过许多 indie 产品全部利润。",
          "客户健康分：$9.9/月 × 12 = $118.80/年。不论客户数一口价。",
          "对自举创始人，回本立竿见影。挽回一个流失客户够付数年健康监控。",
        ],
        after: [
          "准备好试试？免费连接 Stripe，扫描 5 次客户健康，需要每周无限监控时再升级。",
        ],
      },
    ],
    cta: {
      title: "免费扫描客户健康分",
      subtitle: "免费 5 次扫描 · 健康分 · 流失告警 · $9.9/月 不限量",
      button: "打开仪表盘 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
