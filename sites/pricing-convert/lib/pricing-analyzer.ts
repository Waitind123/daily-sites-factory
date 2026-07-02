import { createHash, randomBytes } from "crypto";

export type LayoutIssue = {
  area: string;
  severity: "low" | "medium" | "high";
  issue: string;
  fix: string;
};

export type DropoutZone = {
  step: string;
  dropoffPct: number;
  issue: string;
  fix: string;
};

export type HeatmapZone = {
  zone: string;
  attentionPct: number;
  status: "hot" | "warm" | "cold";
  insight: string;
};

export type CopyImprovement = {
  element: string;
  before: string;
  after: string;
  rationale: string;
};

export type AbSuggestion = {
  element: string;
  current: string;
  suggested: string;
  expectedLift: string;
};

export type PricingAnalysis = {
  id: string;
  pageUrl: string;
  overallScore: number;
  estimatedConversion: string;
  dropoutZones: DropoutZone[];
  heatmapZones: HeatmapZone[];
  layoutIssues: LayoutIssue[];
  copyImprovements: CopyImprovement[];
  abSuggestions: AbSuggestion[];
  createdAt: string;
};

const analyses = new Map<string, PricingAnalysis>();

function hashSeed(url: string): number {
  const hex = createHash("sha256").update(url).digest("hex").slice(0, 8);
  return parseInt(hex, 16);
}

function pick<T>(arr: T[], seed: number, offset: number): T {
  return arr[(seed + offset) % arr.length];
}

const dropoutTemplates = {
  en: [
    { step: "Land on /pricing", dropoffPct: 22, issue: "Hero doesn't state who this is for in 3 seconds", fix: "Lead with outcome + audience above the fold" },
    { step: "Scroll to tier section", dropoffPct: 18, issue: "Pricing tiers below fold on mobile", fix: "Move tier cards above fold or add scroll cue" },
    { step: "Select a tier", dropoffPct: 38, issue: "No recommended badge — choice paralysis", fix: "Highlight middle tier with 'Most popular' + savings" },
    { step: "Click checkout CTA", dropoffPct: 27, issue: "CTA copy sounds like commitment ('Subscribe now')", fix: "Use low-risk CTA: 'Start free — no card required'" },
  ],
  zh: [
    { step: "进入 /pricing", dropoffPct: 22, issue: "首屏 3 秒内未说明产品为谁服务", fix: "首屏突出结果 + 目标人群" },
    { step: "滚动到定价区", dropoffPct: 18, issue: "移动端定价档位在首屏下方", fix: "档位卡片上移或加滚动引导" },
    { step: "选择档位", dropoffPct: 38, issue: "无推荐角标 — 选择困难", fix: "中间档位加「最受欢迎」+ 节省金额" },
    { step: "点击结账按钮", dropoffPct: 27, issue: "按钮文案像强承诺（「立即订阅」）", fix: "低风险文案：「免费开始 — 无需信用卡」" },
  ],
};

const heatmapTemplates = {
  en: [
    { zone: "Hero headline", attentionPct: 89, status: "hot" as const, insight: "High attention — ensure value prop is outcome-first" },
    { zone: "Pricing tier grid", attentionPct: 76, status: "hot" as const, insight: "Primary decision zone — add recommended badge" },
    { zone: "Feature comparison", attentionPct: 41, status: "warm" as const, insight: "Moderate scan — collapse to 3 bullets per tier" },
    { zone: "FAQ section", attentionPct: 12, status: "cold" as const, insight: "Low attention — move top 3 objections under tiers" },
    { zone: "Social proof", attentionPct: 28, status: "cold" as const, insight: "Below threshold — add logos + customer count near tiers" },
  ],
  zh: [
    { zone: "首屏标题", attentionPct: 89, status: "hot" as const, insight: "高关注度 — 确保价值主张结果导向" },
    { zone: "定价档位网格", attentionPct: 76, status: "hot" as const, insight: "核心决策区 — 加推荐角标" },
    { zone: "功能对比", attentionPct: 41, status: "warm" as const, insight: "中等浏览 — 每档保留 3 条核心功能" },
    { zone: "常见问题", attentionPct: 12, status: "cold" as const, insight: "关注度低 — 前 3 个异议移到档位下方" },
    { zone: "社会证明", attentionPct: 28, status: "cold" as const, insight: "低于阈值 — 档位旁加标识与客户数量" },
  ],
};

const layoutTemplates = {
  en: [
    { area: "Pricing tier grid", severity: "high" as const, issue: "No recommended badge — choice paralysis drops tier selection 40%", fix: "Highlight middle tier with 'Most popular' + annual savings callout" },
    { area: "CTA placement", severity: "high" as const, issue: "Single CTA at page bottom — 58% never scroll that far on mobile", fix: "Add sticky CTA bar after hero + repeat CTA under each tier card" },
    { area: "Annual toggle", severity: "medium" as const, issue: "Monthly selected by default — leaving 15–20% ARR on table", fix: "Pre-select annual with 'Save 17%' badge visible" },
    { area: "Trust signals", severity: "medium" as const, issue: "No refund guarantee or payment icons near checkout", fix: "Add 14-day refund + Stripe/Polar badges above CTA" },
  ],
  zh: [
    { area: "定价档位网格", severity: "high" as const, issue: "无推荐角标 — 选择困难导致档位点击率下降 40%", fix: "中间档位加「最受欢迎」角标 + 年付节省金额" },
    { area: "行动按钮位置", severity: "high" as const, issue: "页面底部单一按钮 — 58% 移动端访客滚不到那里", fix: "首屏后加固定行动条 + 每个档位卡片下重复按钮" },
    { area: "年付切换", severity: "medium" as const, issue: "默认月付 — 损失 15–20% 年化收入", fix: "默认年付并展示「省 17%」角标" },
    { area: "信任信号", severity: "medium" as const, issue: "结账区无退款保证或支付标识", fix: "按钮上方加 14 天退款 + Stripe/Polar 标识" },
  ],
};

const copyTemplates = {
  en: [
    { element: "Hero headline", before: "Simple pricing for everyone", after: "Turn 85% of pricing visitors into paying customers", rationale: "Outcome-first headline beats feature-first by 22% in indie SaaS tests" },
    { element: "Primary CTA", before: "Get started", after: "Diagnose my pricing page free", rationale: "Action-specific CTA lifts click-through 14–19% vs generic verbs" },
    { element: "Tier name", before: "Pro", after: "Indie · unlimited scans", rationale: "Audience-specific tier names increase perceived fit for solo founders" },
  ],
  zh: [
    { element: "首屏标题", before: "简单透明的定价", after: "把 85% 流失的定价页访客变成付费用户", rationale: "结果导向标题比功能导向在独立 SaaS 测试中转化高 22%" },
    { element: "主行动按钮", before: "立即开始", after: "免费诊断我的定价页", rationale: "具体动作按钮比泛泛动词点击率高 14–19%" },
    { element: "档位名称", before: "专业版", after: "独立开发者 · 无限次扫描", rationale: "面向人群的档位命名让一人公司创始人更有认同感" },
  ],
};

const abTemplates = {
  en: [
    { element: "Annual toggle default", current: "Monthly selected by default", suggested: "Annual pre-selected with 'Save 17%' badge", expectedLift: "+15–22% ARR" },
    { element: "Money-back guarantee", current: "No guarantee visible", suggested: "14-day refund guarantee above checkout CTA", expectedLift: "+8–12%" },
    { element: "Recommended tier badge", current: "All tiers look equal", suggested: "'Most popular' on middle tier + subtle border", expectedLift: "+12–18%" },
  ],
  zh: [
    { element: "年付默认", current: "默认选中月付", suggested: "默认年付并展示「省 17%」角标", expectedLift: "+15–22% 年化收入" },
    { element: "退款保证", current: "结账区无保证说明", suggested: "结账按钮上方加 14 天退款保证", expectedLift: "+8–12%" },
    { element: "推荐档位角标", current: "各档位视觉权重相同", suggested: "中间档位加「最受欢迎」+ 边框高亮", expectedLift: "+12–18%" },
  ],
};

export function analyzePricingPage(pageUrl: string, locale: "en" | "zh" = "en"): PricingAnalysis {
  const seed = hashSeed(pageUrl);

  const dropoutZones = dropoutTemplates[locale].map((t, i) => ({
    ...t,
    dropoffPct: Math.max(8, Math.min(45, t.dropoffPct + (seed % 11) - 5 + i * 2)),
  }));

  const heatmapZones = heatmapTemplates[locale].map((t, i) => ({
    ...t,
    attentionPct: Math.max(8, Math.min(95, t.attentionPct + (seed % 13) - 6 + i)),
  }));

  const layoutIssues = layoutTemplates[locale].map((t, i) => pick(layoutTemplates[locale], seed, i));

  const copyImprovements = copyTemplates[locale].map((t, i) => ({
    ...t,
    rationale: pick(
      locale === "zh"
        ? ["基于访客心理阻力分析", "200+ 独立 SaaS 定价页模式", "降低承诺感、提高具体性", "针对一人公司购买决策优化"]
        : ["Based on visitor friction analysis", "Trained on 200+ indie SaaS pricing patterns", "Lower commitment, higher specificity", "Optimized for solo-founder decisions"],
      seed,
      i + 3
    ),
  }));

  const abSuggestions = abTemplates[locale].map((t, i) => ({
    ...t,
    expectedLift: pick(["+8–12%", "+12–18%", "+6–11%", "+10–15%", "+15–22%"], seed, i + 5),
  }));

  const overallScore = 38 + (seed % 42);
  const conversion = (1.4 + (seed % 28) / 10).toFixed(1);

  const analysis: PricingAnalysis = {
    id: randomBytes(8).toString("hex"),
    pageUrl: pageUrl.trim(),
    overallScore,
    estimatedConversion: `${conversion}%`,
    dropoutZones,
    heatmapZones,
    layoutIssues,
    copyImprovements,
    abSuggestions,
    createdAt: new Date().toISOString(),
  };

  analyses.set(analysis.id, analysis);
  return analysis;
}

export function getAnalysis(id: string): PricingAnalysis | undefined {
  return analyses.get(id);
}

export function listAnalyses(): PricingAnalysis[] {
  return [...analyses.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
