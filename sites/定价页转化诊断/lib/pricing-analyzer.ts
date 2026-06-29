import { createHash, randomBytes } from "crypto";

export type HeatmapZone = {
  section: string;
  attention: number;
  dropOffRisk: "low" | "medium" | "high";
};

export type AbSuggestion = {
  element: string;
  current: string;
  suggested: string;
  expectedLift: string;
};

export type DropOffPoint = {
  step: string;
  rate: string;
  fix: string;
};

export type PricingAnalysis = {
  id: string;
  pageUrl: string;
  overallScore: number;
  estimatedConversion: string;
  heatmap: HeatmapZone[];
  dropOffPoints: DropOffPoint[];
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

const heatmapSections = {
  en: ["Hero headline", "Pricing tiers", "Feature comparison", "FAQ accordion", "CTA button", "Social proof"],
  zh: ["首屏标题", "定价档位", "功能对比", "常见问题", "行动按钮", "社会证明"],
};

const dropOffTemplates = {
  en: [
    { step: "Hero → pricing scroll", rate: "38%", fix: "Add anchor link + sticky CTA to pricing section" },
    { step: "Pricing tier selection", rate: "52%", fix: "Highlight recommended plan with badge + annual savings" },
    { step: "Checkout click", rate: "71%", fix: "Show money-back guarantee and payment icons above CTA" },
    { step: "Annual vs monthly toggle", rate: "45%", fix: "Default to annual with savings % visible" },
  ],
  zh: [
    { step: "首屏 → 定价区滚动", rate: "38%", fix: "添加锚点链接 + 固定定价区行动按钮" },
    { step: "选择定价档位", rate: "52%", fix: "推荐方案加角标 + 年付节省金额" },
    { step: "点击结账", rate: "71%", fix: "行动按钮上方展示退款保证与支付图标" },
    { step: "年付/月付切换", rate: "45%", fix: "默认年付并突出节省百分比" },
  ],
};

const abTemplates = {
  en: [
    {
      element: "Primary CTA",
      current: "Get started",
      suggested: "Start free — no card required",
      expectedLift: "+12–18%",
    },
    {
      element: "Annual pricing",
      current: "$9.9/mo",
      suggested: "$99/yr (save 17%)",
      expectedLift: "+8–14%",
    },
    {
      element: "Social proof",
      current: "Trusted by teams",
      suggested: "2,400+ indie hackers subscribed",
      expectedLift: "+6–11%",
    },
  ],
  zh: [
    {
      element: "主行动按钮",
      current: "立即开始",
      suggested: "免费开始 — 无需信用卡",
      expectedLift: "+12–18%",
    },
    {
      element: "年付定价",
      current: "$9.9/月",
      suggested: "$99/年（省 17%）",
      expectedLift: "+8–14%",
    },
    {
      element: "社会证明",
      current: "深受团队信赖",
      suggested: "2,400+ 独立开发者已订阅",
      expectedLift: "+6–11%",
    },
  ],
};

export function analyzePricingPage(pageUrl: string, locale: "en" | "zh" = "en"): PricingAnalysis {
  const seed = hashSeed(pageUrl);
  const sections = heatmapSections[locale];
  const heatmap: HeatmapZone[] = sections.map((section, i) => {
    const attention = 35 + ((seed >> (i * 3)) % 55);
    const risk = attention < 45 ? "high" : attention < 65 ? "medium" : "low";
    return {
      section,
      attention,
      dropOffRisk: risk as HeatmapZone["dropOffRisk"],
    };
  });

  const dropOffs = dropOffTemplates[locale];
  const dropOffPoints = [0, 1, 2].map((i) => pick(dropOffs, seed, i));

  const abSuggestions = abTemplates[locale].map((t, i) => ({
    ...t,
    expectedLift: pick(["+8–12%", "+12–18%", "+6–11%", "+10–15%"], seed, i + 5),
  }));

  const overallScore = 42 + (seed % 38);
  const conversion = (1.2 + (seed % 30) / 10).toFixed(1);

  const analysis: PricingAnalysis = {
    id: randomBytes(8).toString("hex"),
    pageUrl: pageUrl.trim(),
    overallScore,
    estimatedConversion: `${conversion}%`,
    heatmap,
    dropOffPoints,
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
