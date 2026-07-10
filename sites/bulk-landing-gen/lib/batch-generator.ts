import { type LandingStyle, type GeneratedLanding, generateLanding } from "./generator";

export type BatchInput = {
  productName: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  style: LandingStyle;
  audience?: string;
  keywords: string[];
};

export type BatchResult = {
  id: string;
  keyword: string;
  landing: GeneratedLanding;
};

function keywordHeadline(productName: string, keyword: string): string {
  const k = keyword.trim();
  if (!k) return productName;
  if (productName.toLowerCase().includes(k.toLowerCase())) return productName;
  return `${productName} — ${k}`;
}

function keywordDescription(base: string, keyword: string): string {
  const k = keyword.trim();
  if (!k) return base;
  return `${base} ${k} 相关需求的最佳选择。专为 Google Ads 关键词「${k}」优化。`;
}

export function generateBatch(input: BatchInput): BatchResult[] {
  const keywords = input.keywords.filter(Boolean).slice(0, 20);
  if (keywords.length === 0) {
    keywords.push(input.productName);
  }

  return keywords.map((keyword, i) => {
    const landing = generateLanding({
      productName: keywordHeadline(input.productName, keyword),
      tagline: `${input.tagline} · ${keyword}`,
      description: keywordDescription(input.description, keyword),
      features: input.features,
      ctaText: input.ctaText,
      style: input.style,
      audience: input.audience,
    });
    landing.meta.keywords = [keyword, input.productName, ...input.features.slice(0, 2)];
    landing.meta.title = `${keyword} — ${input.productName}`;
    landing.meta.description = keywordDescription(input.description, keyword).slice(0, 155);

    return {
      id: `kw-${i + 1}-${landing.id}`,
      keyword,
      landing,
    };
  });
}

export const batchExample = {
  productName: "TaskFlow",
  tagline: "极简项目管理，专为独立开发者设计",
  description:
    "不用 Jira 的复杂，5 分钟上手。Kanban + 时间追踪 + GitHub 集成，$9/月。",
  features: ["无限项目", "GitHub 双向同步", "时间追踪报表", "移动端适配"],
  ctaText: "免费试用 14 天",
  style: "minimal" as LandingStyle,
  audience: "独立开发者",
  keywords: [
    "indie project management tool",
    "simple kanban for developers",
    "github project tracker",
    "solo developer task manager",
    "lightweight jira alternative",
  ],
};
