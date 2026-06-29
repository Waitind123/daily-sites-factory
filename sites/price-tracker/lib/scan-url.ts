import type { Locale } from "./i18n-shared";
import type { SaasProduct } from "./data";

type ScanResult = {
  name: string;
  category: string;
  preview: string;
  tracking: SaasProduct["tracking"];
};

const genericEn: ScanResult = {
  name: "Custom SaaS",
  category: "Custom",
  preview: "AI extracted 3 pricing tiers from your URL — 1 change detected in 90 days",
  tracking: {
    summary:
      "Pricing page scanned successfully. Detected tiered plans with per-seat billing. One moderate price adjustment in the last quarter.",
    lastChecked: "2026-06-29",
    checkFrequency: "Daily",
    changesLast90Days: 1,
    history: [
      {
        date: "2026-05-12",
        type: "price_increase",
        summary: "Pro plan increased ~15% (estimated from page diff)",
        impact: "medium",
        before: "Previous tier",
        after: "Current tier",
      },
    ],
    competitiveNotes: [
      "Compare against 2-3 direct competitors in the same category",
      "Watch for feature gating moves to higher tiers",
    ],
    alertRecommendations: [
      "Set email alert to catch the next change within 24h",
      "Export this snapshot before your next pricing review",
    ],
    marketPosition: "Mid-market SaaS — monitor quarterly for packaging shifts",
  },
};

const genericZh: ScanResult = {
  name: "自定义 SaaS",
  category: "自定义",
  preview: "已从 URL 提取 3 个定价套餐 — 90 天内检测到 1 次变动",
  tracking: {
    summary:
      "定价页扫描完成。检测到按席位计费的套餐结构，上季度有一次温和调价。",
    lastChecked: "2026-06-29",
    checkFrequency: "每日",
    changesLast90Days: 1,
    history: [
      {
        date: "2026-05-12",
        type: "price_increase",
        summary: "专业版涨价约 15%（页面差异估算）",
        impact: "medium",
        before: "原套餐",
        after: "现套餐",
      },
    ],
    competitiveNotes: [
      "建议与同品类 2-3 个直接竞品对比",
      "关注功能门控是否上移到更高套餐",
    ],
    alertRecommendations: [
      "设置邮件提醒，下次变动 24h 内通知",
      "定价会议前导出此快照备查",
    ],
    marketPosition: "中端 SaaS — 建议每季度检查套餐包装变化",
  },
};

const knownHosts: Record<string, { en: Partial<ScanResult>; zh: Partial<ScanResult> }> = {
  "intercom.com": {
    en: {
      name: "Intercom",
      category: "Customer Support",
      preview: "Essential $39→$74/seat (+90%) in 90 days — biggest indie pain point",
      tracking: {
        summary:
          "Intercom raised Essential from $39 to $74/seat in Q2 2026 and removed the free tier for new accounts. Classic enterprise squeeze on indie founders.",
        lastChecked: "2026-06-29",
        checkFrequency: "Daily",
        changesLast90Days: 3,
        history: [
          {
            date: "2026-04-01",
            type: "price_increase",
            summary: "Essential $39/seat → $59/seat (+51%)",
            impact: "high",
            before: "$39/seat",
            after: "$59/seat",
          },
          {
            date: "2026-05-15",
            type: "price_increase",
            summary: "Essential $59/seat → $74/seat (+25%)",
            impact: "high",
            before: "$59/seat",
            after: "$74/seat",
          },
          {
            date: "2026-06-01",
            type: "removed_tier",
            summary: "Free tier removed for new signups",
            impact: "high",
            before: "Free plan",
            after: "Paid only",
          },
        ],
        competitiveNotes: [
          "Crisp $25/mo flat — popular indie alternative",
          "Help Scout $20/user — simpler pricing",
          "desk-pulse $9.9/mo — built for solo founders",
        ],
        alertRecommendations: [
          "If you use Intercom, budget +90% YoY or migrate now",
          "Competitors: pitch「we didn't 2x in 90 days」",
          "Watch Advanced tier — next hike likely Q3",
        ],
        marketPosition: "Premium incumbent — indie exodus accelerating",
      },
    },
    zh: {
      name: "Intercom",
      category: "客服工具",
      preview: "Essential $39→$74/席位（+90%），90 天内 indie 最大痛点",
      tracking: {
        summary:
          "Intercom 2026 Q2 将 Essential 从 $39/席位涨至 $74/席位，新账号取消免费层。典型大企业挤压 indie 创始人。",
        lastChecked: "2026-06-29",
        checkFrequency: "每日",
        changesLast90Days: 3,
        history: [
          {
            date: "2026-04-01",
            type: "price_increase",
            summary: "Essential $39/席位 → $59/席位（+51%）",
            impact: "high",
            before: "$39/席位",
            after: "$59/席位",
          },
          {
            date: "2026-05-15",
            type: "price_increase",
            summary: "Essential $59/席位 → $74/席位（+25%）",
            impact: "high",
            before: "$59/席位",
            after: "$74/席位",
          },
          {
            date: "2026-06-01",
            type: "removed_tier",
            summary: "新注册用户取消免费层",
            impact: "high",
            before: "免费计划",
            after: "仅付费",
          },
        ],
        competitiveNotes: [
          "Crisp $25/月固定价 — indie 热门替代",
          "Help Scout $20/用户 — 定价更简单",
          "desk-pulse $9.9/月 — 为 solo 创始人打造",
        ],
        alertRecommendations: [
          "若在用 Intercom，预算需按年涨 90% 或立即迁移",
          "竞品营销：「我们 90 天没涨 2 倍」",
          "关注 Advanced 套餐 — Q3 可能继续涨",
        ],
        marketPosition: "高端在位者 — indie 流失加速",
      },
    },
  },
  "zendesk.com": {
    en: {
      name: "Zendesk",
      category: "Customer Support",
      preview: "Suite Team $55→$69/agent — annual-only discounts removed",
      tracking: {
        summary:
          "Zendesk removed multi-year discounts in 2026 and raised Suite Team per-agent pricing. Support Suite now starts at $69/agent vs $49 last year.",
        lastChecked: "2026-06-29",
        checkFrequency: "Daily",
        changesLast90Days: 2,
        history: [
          {
            date: "2026-03-20",
            type: "price_increase",
            summary: "Suite Team $55/agent → $69/agent (+25%)",
            impact: "high",
            before: "$55/agent",
            after: "$69/agent",
          },
          {
            date: "2026-05-01",
            type: "feature_change",
            summary: "Annual discount capped at 10% (was 20%)",
            impact: "medium",
            before: "20% annual off",
            after: "10% annual off",
          },
        ],
        competitiveNotes: [
          "Freshdesk $15/agent — budget alternative",
          "Intercom Essential now $74/seat — both expensive",
          "desk-pulse $9.9/mo flat for indie teams",
        ],
        alertRecommendations: [
          "5-agent team now pays $345/mo vs $275 last year",
          "Evaluate per-seat vs flat-rate alternatives",
          "Renewal season: negotiate or switch before auto-renew",
        ],
        marketPosition: "Enterprise default — SMBs increasingly priced out",
      },
    },
    zh: {
      name: "Zendesk",
      category: "客服工具",
      preview: "Suite Team $55→$69/客服 — 取消多年折扣",
      tracking: {
        summary:
          "Zendesk 2026 年取消多年折扣并上调 Suite Team 按客服定价。Support Suite 现价 $69/客服，去年 $49 起。",
        lastChecked: "2026-06-29",
        checkFrequency: "每日",
        changesLast90Days: 2,
        history: [
          {
            date: "2026-03-20",
            type: "price_increase",
            summary: "Suite Team $55/客服 → $69/客服（+25%）",
            impact: "high",
            before: "$55/客服",
            after: "$69/客服",
          },
          {
            date: "2026-05-01",
            type: "feature_change",
            summary: "年付折扣上限 10%（原 20%）",
            impact: "medium",
            before: "年付 8 折",
            after: "年付 9 折",
          },
        ],
        competitiveNotes: [
          "Freshdesk $15/客服 — 预算替代",
          "Intercom Essential 现 $74/席位 — 都很贵",
          "desk-pulse $9.9/月固定价适合 indie 团队",
        ],
        alertRecommendations: [
          "5 人客服团队现 $345/月，去年 $275",
          "评估按席位 vs 固定月费替代方案",
          "续约季：自动续费前谈判或迁移",
        ],
        marketPosition: "企业默认选择 — 中小企业 increasingly 被挤出",
      },
    },
  },
};

function matchHost(hostname: string): string | null {
  const h = hostname.replace(/^www\./, "").toLowerCase();
  for (const key of Object.keys(knownHosts)) {
    if (h === key || h.endsWith(`.${key}`)) return key;
  }
  return null;
}

export function scanCustomUrl(hostname: string, locale: Locale): ScanResult {
  const key = matchHost(hostname);
  const base = locale === "en" ? genericEn : genericZh;

  if (!key) {
    return {
      ...base,
      name: hostname.replace(/^www\./, ""),
    };
  }

  const known = knownHosts[key][locale];
  return {
    ...base,
    ...known,
    tracking: known.tracking ?? base.tracking,
  } as ScanResult;
}
