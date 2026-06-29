import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Podium $399/mo? · $19/mo flat",
    title: "Automated Google review requests via SMS",
    subtitle:
      "Send personalized SMS with direct Google review links after every job. 5 free sends, then $19/mo. 3–5× higher conversion than email.",
    ctaPrimary: "Send reviews free",
    ctaPrimaryHref: "/campaigns",
    ctaSecondary: "Subscribe · $19/mo",
    ctaSecondaryHref: "/join",
    note: "5 free SMS sends · then $19/mo",
    stats: [
      { stat: "3–5×", label: "SMS vs email review conversion" },
      { stat: "$19", label: "flat/mo vs Podium $399+" },
      { stat: "2 hrs", label: "optimal send delay after service" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste your Google review link",
          desc: "Drop your direct Google review form URL — not your profile page. One tap for customers.",
        },
        {
          step: "2",
          title: "Add customer after service",
          desc: "Enter name + phone after each job. We compose a warm, TCPA-friendly SMS template.",
        },
        {
          step: "3",
          title: "Track sent & reviewed",
          desc: "See delivery status, follow-up reminders, and review velocity in one dashboard.",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📱",
        title: "SMS-first automation",
        desc: "Trigger review requests 2–4 hours post-service — when satisfaction peaks.",
      },
      {
        icon: "🔗",
        title: "Direct Google links",
        desc: "Opens the review form instantly. No search-and-find friction.",
      },
      {
        icon: "📊",
        title: "Campaign dashboard",
        desc: "Sent, pending, and reviewed counts — know your review velocity at a glance.",
      },
      {
        icon: "💰",
        title: "Flat $19/mo",
        desc: "Unlimited SMS campaigns for local businesses. No per-location enterprise fees.",
      },
    ],
    testimonialsTitle: "What local business owners say",
    testimonials: [
      {
        name: "Mike T.",
        role: "Auto repair shop",
        text: "Podium wanted $399/mo. Review Pulse sends SMS after every oil change — we got 47 new Google reviews in 2 months.",
      },
      {
        name: "Sarah C.",
        role: "Dental clinic",
        text: "Email review requests got 4% response. SMS gets 18%. The direct Google link is the secret.",
      },
      {
        name: "James L.",
        role: "HVAC contractor",
        text: "5 free sends let me test with real customers. Subscribed after the first week of 5-star reviews rolling in.",
      },
    ],
    closing: {
      title: "Get more Google reviews without enterprise pricing",
      subtitle: "5 free SMS sends · then $19/mo unlimited",
      ctaPrimary: "Send reviews free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Campaign dashboard preview",
      caption: "SMS sends · delivery status · review tracking",
      preview:
        "⭐ Review Pulse                         Last send: 12 min ago\n─────────────────────────────────────────────────────\n  Mike R. · (555) 234-8901 · Auto detail\n  ✓ Delivered · 2h after service · Pending review\n─────────────────────────────────────────────────────\n  Sent: 142    Reviewed: 38    Rate: 27%\n─────────────────────────────────────────────────────\n  SMS preview:\n  \"Hi Mike! Thanks for choosing us today.\n   Mind leaving a quick Google review? [link]\"\n─────────────────────────────────────────────────────\n  [ Send SMS ]  [ Schedule follow-up ]  [ + New customer ]",
    },
  },
  zh: {
    badge: "Podium 要 $399/月？· $19/月一口价",
    title: "短信自动索取 Google 评价",
    subtitle:
      "每次服务完成后发送带 Google 评价直达链接的个性化短信。免费体验 5 次发送，之后 $19/月。转化率比邮件高 3–5 倍。",
    ctaPrimary: "免费发送评价请求",
    ctaPrimaryHref: "/campaigns",
    ctaSecondary: "订阅 · $19/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $19/月",
    stats: [
      { stat: "3–5 倍", label: "短信 vs 邮件评价转化率" },
      { stat: "$19", label: "一口价/月，Podium 要 $399+" },
      { stat: "2 小时", label: "服务后最佳发送时机" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴 Google 评价链接",
          desc: "填入直达 Google 评价表单的链接 — 不是商家主页。客户一键即可评价。",
        },
        {
          step: "2",
          title: "服务后添加客户",
          desc: "每次服务完成输入姓名和手机号。系统自动生成合规友好的短信模板。",
        },
        {
          step: "3",
          title: "追踪发送与评价",
          desc: "查看送达状态、跟进提醒和评价增速 — 一屏掌握全部数据。",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📱",
        title: "短信优先自动化",
        desc: "服务完成后 2–4 小时触发评价请求 — 客户满意度最高时刻。",
      },
      {
        icon: "🔗",
        title: "Google 直达链接",
        desc: "一键打开评价表单。告别「搜索商家再评价」的流失。",
      },
      {
        icon: "📊",
        title: "活动控制台",
        desc: "已发送、待评价、已评价数量 — 一眼看清评价增速。",
      },
      {
        icon: "💰",
        title: "$19/月一口价",
        desc: "本地商家无限短信活动。无按门店收取的企业级费用。",
      },
    ],
    testimonialsTitle: "本地商家怎么说",
    testimonials: [
      {
        name: "Mike T.",
        role: "汽车维修店",
        text: "Podium 要 $399/月。评价脉冲每次换油后发短信 — 两个月新增 47 条 Google 评价。",
      },
      {
        name: "Sarah C.",
        role: "牙科诊所",
        text: "邮件评价请求只有 4% 回复率。短信有 18%。直达 Google 链接是关键。",
      },
      {
        name: "James L.",
        role: "暖通承包商",
        text: "5 次免费发送让我用真实客户测试。第一周五星评价涌入后就订阅了。",
      },
    ],
    closing: {
      title: "不用企业级定价也能获取更多 Google 评价",
      subtitle: "免费体验 5 次短信 · 之后 $19/月不限量",
      ctaPrimary: "免费发送评价请求",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "活动控制台实时预览",
      caption: "短信发送 · 送达状态 · 评价追踪",
      preview:
        "⭐ 评价脉冲                            最近发送：12 分钟前\n─────────────────────────────────────────────────────\n  Mike R. · (555) 234-8901 · 汽车美容\n  ✓ 已送达 · 服务后 2 小时 · 待评价\n─────────────────────────────────────────────────────\n  已发送：142    已评价：38    转化率：27%\n─────────────────────────────────────────────────────\n  短信预览：\n  「Mike 你好！感谢今天选择我们。\n   方便留个 Google 评价吗？[链接]」\n─────────────────────────────────────────────────────\n  [ 发送短信 ]  [ 设置跟进 ]  [ + 添加客户 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
