import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Statuspage $29/mo? · $9.9/mo flat",
    title: "Paste alert → status update, email, Slack — in 60 seconds",
    subtitle:
      "Paste your monitoring alert or describe the outage. AI drafts customer-facing status updates, emails, Slack notes, and postmortems. 5 free drafts, then $9.9/mo.",
    ctaPrimary: "Draft free",
    ctaPrimaryHref: "/draft",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free drafts · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Statuspage $29+" },
      { stat: "4", label: "channels from one alert" },
      { stat: "60s", label: "alert to published update" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste the alert",
          desc: "Drop your PagerDuty, Datadog, or uptime alert — raw text works fine",
        },
        {
          step: "2",
          title: "Get 4 drafts",
          desc: "Status page update, customer email, internal Slack, postmortem — each professional",
        },
        {
          step: "3",
          title: "Copy and publish",
          desc: "One-click copy per channel. Stop writing under pressure at 3 AM",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📋",
        title: "Status page writer",
        desc: "Customer-facing incident updates with severity labels — ready for your status page.",
      },
      {
        icon: "📧",
        title: "Email drafts",
        desc: "Professional customer notification emails with subject lines. Empathetic, not robotic.",
      },
      {
        icon: "💬",
        title: "Slack internal notes",
        desc: "On-call coordination messages with action items and @mentions for your team.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited incident drafts. No Statuspage.io $29/mo or PageCalm upsells.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo SaaS founder",
        text: "3 AM outage. Used to spend 20 min writing the status update. Incident AI does it in 60 seconds while I fix the bug.",
      },
      {
        name: "Sarah L.",
        role: "Indie hacker",
        text: "Statuspage.io wanted $29/mo just for a status page. I paste alerts here and get email + Slack drafts too.",
      },
      {
        name: "Tom K.",
        role: "Bootstrapped dev",
        text: "The postmortem draft alone saves me 30 minutes per incident. Finally communicates like a real team.",
      },
    ],
    closing: {
      title: "Stop scrambling to write incident updates",
      subtitle: "5 free drafts · then $9.9/mo for unlimited",
      ctaPrimary: "Draft free",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Live draft preview",
      caption: "One alert → status · email · Slack · postmortem",
      preview:
        "🚨 Incident AI                         Generated: 47 sec ago\n─────────────────────────────────────────────────────\n  Input: PagerDuty — API latency 2000ms on checkout-service\n─────────────────────────────────────────────────────\n  📋 Status page:\n  [Investigating] checkout-service incident\n  We are aware of an issue affecting checkout-service.\n  Our team is actively working on a fix...\n─────────────────────────────────────────────────────\n  📧 Customer email:\n  Subject: [Service Notice] checkout-service — Investigating\n  Hi there, We detected an issue with checkout-service...\n─────────────────────────────────────────────────────\n  💬 Slack (internal):\n  🚨 Incident #a3f2 — checkout-service\n  Status: Investigating · /cc @oncall @support\n─────────────────────────────────────────────────────\n  [ Copy status ]  [ Copy email ]  [ + New draft ]",
    },
  },
  zh: {
    badge: "Statuspage 要 $29/月？· $9.9/月一口价",
    title: "粘贴告警 → 状态页、邮件、Slack — 60 秒搞定",
    subtitle:
      "粘贴监控告警或描述故障。AI 自动生成面向客户的状态页更新、邮件、Slack 内部通知和复盘报告。免费体验 5 次，之后 $9.9/月。",
    ctaPrimary: "免费生成",
    ctaPrimaryHref: "/draft",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Statuspage 要 $29+" },
      { stat: "4", label: "个渠道一次生成" },
      { stat: "60 秒", label: "从告警到可发布更新" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴告警",
          desc: "填入 PagerDuty、Datadog 或 uptime 告警 — 原始文本即可",
        },
        {
          step: "2",
          title: "获取 4 份草稿",
          desc: "状态页更新、客户邮件、内部 Slack、复盘报告 — 每份都专业得体",
        },
        {
          step: "3",
          title: "复制并发布",
          desc: "每个渠道一键复制。凌晨 3 点不用再手忙脚乱写文案",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📋",
        title: "状态页文案",
        desc: "面向客户的事件更新，含严重程度标签 — 可直接发布到状态页。",
      },
      {
        icon: "📧",
        title: "邮件草稿",
        desc: "专业的客户通知邮件，含主题行。语气得体，不生硬。",
      },
      {
        icon: "💬",
        title: "Slack 内部通知",
        desc: "值班协调消息，含行动项和 @提及，方便团队协作。",
      },
      {
        icon: "💰",
        title: "$9.9/月一口价",
        desc: "无限次事件草稿。无需 Statuspage.io $29/月或 PageCalm 加价。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "独立 SaaS 创始人",
        text: "凌晨 3 点宕机。以前写状态更新要 20 分钟。Incident AI 60 秒搞定，我可以专心修 bug。",
      },
      {
        name: "Sarah L.",
        role: "独立开发者",
        text: "Statuspage.io 光状态页就要 $29/月。我在这里粘贴告警，邮件和 Slack 草稿一起出。",
      },
      {
        name: "Tom K.",
        role: "自举开发者",
        text: "光是复盘报告草稿就帮我省了每次事件 30 分钟。终于像正规团队一样沟通了。",
      },
    ],
    closing: {
      title: "别再手忙脚乱写事件更新了",
      subtitle: "免费体验 5 次 · 之后 $9.9/月不限量",
      ctaPrimary: "免费生成",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "实时草稿预览",
      caption: "一条告警 → 状态页 · 邮件 · Slack · 复盘",
      preview:
        "🚨 AI 事件摘要                         生成于：47 秒前\n─────────────────────────────────────────────────────\n  输入：PagerDuty — checkout-service API 延迟 2000ms\n─────────────────────────────────────────────────────\n  📋 状态页：\n  【调查中】checkout-service 服务异常\n  我们已注意到 checkout-service 出现异常...\n─────────────────────────────────────────────────────\n  📧 客户邮件：\n  主题：[服务通知] checkout-service 当前调查中\n  尊敬的用户，我们检测到 checkout-service 出现异常...\n─────────────────────────────────────────────────────\n  💬 Slack（内部）：\n  🚨 事件 #a3f2 — checkout-service\n  状态：调查中 · /cc @oncall @support\n─────────────────────────────────────────────────────\n  [ 复制状态页 ]  [ 复制邮件 ]  [ + 新建草稿 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
