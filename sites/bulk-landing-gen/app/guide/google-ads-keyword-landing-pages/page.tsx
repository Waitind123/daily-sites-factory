import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getSiteConfig } from "@/lib/seo";
import { getLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const cfg = getSiteConfig(locale);
  return buildSiteMetadata({ ...cfg, keywords: [...cfg.keywords] }, {
    title:
      locale === "zh"
        ? "Google Ads 关键词落地页指南 — 批量生成提升质量得分"
        : "Google Ads keyword landing pages guide — batch generate for Quality Score",
    description:
      locale === "zh"
        ? "独立开发者 Google Ads 投放完整指南：为什么每个关键词需要定制落地页、如何批量生成、URL 结构、UTM 参数、质量得分优化。Dynares 替代方案 $9.9/月。"
        : "Indie developer Google Ads playbook: per-keyword landing pages, batch generation, URL structure, UTM params, Quality Score tips. Dynares alternative at $9.9/mo.",
  });
}

export default async function GuidePage() {
  const locale = await getLocale();
  const isZh = locale === "zh";

  if (!isZh) {
    return (
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
          Google Ads Keyword Landing Pages: Batch Generate for Quality Score
        </h1>
        <p className="text-muted not-prose mb-8">Updated June 2026 · 12 min read</p>
        <p>
          Running Google Ads with one generic landing page is the #1 mistake indie founders make.
          Google&apos;s Quality Score rewards keyword relevance — when your ad says &quot;indie project
          management tool&quot; but your page title says &quot;TaskFlow — project management&quot;, you pay
          more per click and rank lower.
        </p>
        <h2>Why per-keyword landing pages matter</h2>
        <p>
          Dynares and enterprise tools charge $99+/mo for this. For indie ad budgets ($50–500/mo),
          you need a $9.9/mo batch generator that creates customized pages per keyword with
          matching headlines and meta tags.
        </p>
        <h2>How to batch generate</h2>
        <ol>
          <li>Export keywords from Google Ads (one per line)</li>
          <li>Paste into <Link href="/studio">Batch Studio</Link></li>
          <li>Set product base info (shared across all pages)</li>
          <li>Download HTML for each keyword — deploy to /kw-slug paths</li>
        </ol>
        <h2>URL structure for ads</h2>
        <p>
          Use paths like <code>yoursite.com/indie-pm-tool</code> matching each keyword slug.
          Add UTM params per ad group: <code>?utm_source=google&utm_campaign=saas-tools</code>.
        </p>
        <p className="not-prose mt-8">
          <Link href="/studio" className="text-brand-500 font-semibold hover:underline">
            Try batch generation free →
          </Link>
          {" · "}
          <Link href="/join" className="text-brand-500 font-semibold hover:underline">
            Subscribe $9.9/mo
          </Link>
        </p>
      </article>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        Google Ads 关键词落地页完整指南：批量生成提升质量得分
      </h1>
      <p className="text-muted not-prose mb-8">更新于 2026 年 6 月 · 阅读约 12 分钟</p>

      <p>
        独立开发者跑 Google Ads 最常犯的错误：所有广告指向同一个通用落地页。Google
        质量得分（Quality Score）奖励关键词相关性 — 当你的广告文案写「独立开发者项目管理工具」，但落地页标题是「TaskFlow
        — 项目管理」，系统判定页面与搜索意图不匹配，CPC 上涨、排名下降。
      </p>
      <p>
        HN 上 dynares 的案例研究证明：为每个关键词定制落地页可将转化率提升 2–3 倍。但 Dynares
        等企业工具 $99+/月，对 indie 广告预算（$50–500/月）太贵。你需要 $9.9/月的批量生成工具。
      </p>

      <h2>一、为什么每个关键词需要独立落地页？</h2>
      <p>
        Google Ads 质量得分由三个因素决定：预期点击率（CTR）、广告相关性、落地页体验。其中落地页体验的核心是<strong>页面内容与搜索关键词的匹配度</strong>。
      </p>
      <p>具体表现：</p>
      <ul>
        <li>标题（H1）包含或紧密关联目标关键词</li>
        <li>meta description 提及关键词及其变体</li>
        <li>页面正文自然融入关键词语义</li>
        <li>URL 路径反映关键词（如 /indie-pm-tool）</li>
      </ul>
      <p>
        一个通用页面无法满足 10+ 个不同关键词的语义匹配。手动在 Webflow 为每个关键词做页面，每个广告组至少 2 小时 — 10 个关键词就是 20 小时。
      </p>

      <h2>二、批量生成工作流（60 秒完成）</h2>
      <ol>
        <li>
          <strong>导出关键词</strong>：从 Google Ads 关键词规划师或广告组导出，每行一个关键词
        </li>
        <li>
          <strong>粘贴到批量生成器</strong>：打开{" "}
          <Link href="/studio">批量生成工作室</Link>，粘贴关键词列表
        </li>
        <li>
          <strong>设置产品基础信息</strong>：产品名、标语、功能列表 — 所有关键词页面共享
        </li>
        <li>
          <strong>选择风格</strong>：极简适合 SaaS，暗色适合开发者工具，保持品牌一致
        </li>
        <li>
          <strong>批量导出 HTML</strong>：每页独立下载，部署到自定义域名的 /kw-slug 路径
        </li>
      </ol>
      <p>
        免费体验 5 次批量生成，每次最多 20 个关键词。会员 $9.9/月无限批量 — 比 Dynares $99/月便宜
        10 倍。
      </p>

      <h2>三、URL 结构与 UTM 参数</h2>
      <p>部署建议：</p>
      <ul>
        <li>
          路径匹配关键词：<code>yourproduct.com/indie-pm-tool</code>、
          <code>yourproduct.com/kanban-for-developers</code>
        </li>
        <li>
          广告组级 UTM：<code>?utm_source=google&utm_medium=cpc&utm_campaign=saas-tools&utm_content=adgroup-1</code>
        </li>
        <li>Final URL 后缀在 Google Ads 广告组设置中统一添加 UTM</li>
        <li>每个关键词页面设置独立转化跟踪（Google Ads 转化代码 + thank-you 页）</li>
      </ul>

      <h2>四、质量得分优化清单</h2>
      <ul>
        <li>✅ H1 包含目标关键词（批量生成器自动处理）</li>
        <li>✅ meta title 60 字符内，含关键词 + 品牌名</li>
        <li>✅ 页面加载 &lt; 3 秒（静态 HTML 部署到 Vercel Edge）</li>
        <li>✅ 移动端适配（生成器默认响应式）</li>
        <li>✅ CTA 明确，链到 Stripe Checkout 或注册表单</li>
        <li>✅ 页面内容与广告承诺一致（避免「标题党」降分）</li>
      </ul>

      <h2>五、工具对比：Dynares vs 批量生成器 vs 手动 Webflow</h2>
      <table className="not-prose w-full text-sm border border-border rounded-lg overflow-hidden">
        <thead className="bg-surface">
          <tr>
            <th className="p-3 text-left">方案</th>
            <th className="p-3 text-left">价格</th>
            <th className="p-3 text-left">20 关键词耗时</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-border">
            <td className="p-3">Dynares</td>
            <td className="p-3">$99/月</td>
            <td className="p-3">~30 分钟（自动）</td>
          </tr>
          <tr className="border-t border-border">
            <td className="p-3">批量落地页生成</td>
            <td className="p-3">$9.9/月</td>
            <td className="p-3">~60 秒</td>
          </tr>
          <tr className="border-t border-border">
            <td className="p-3">手动 Webflow</td>
            <td className="p-3">$0–23/月</td>
            <td className="p-3">~40 小时</td>
          </tr>
        </tbody>
      </table>

      <h2>六、第一天收费：levelsio 思路</h2>
      <p>
        不要等广告跑顺了再考虑收费。落地页生成本身就是付费产品 — 免费体验 5 次批量生成，让用户感受「20
        个关键词页面 60 秒完成」的价值，然后 $9.9/月订阅。你的 Google Ads 落地页和用户订阅你的工具，是同一个增长飞轮。
      </p>

      <p className="not-prose mt-8 flex flex-wrap gap-4">
        <Link
          href="/studio"
          className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
        >
          免费体验批量生成
        </Link>
        <Link
          href="/join"
          className="inline-block border border-brand-600 text-brand-500 px-6 py-3 rounded-xl font-semibold hover:bg-brand-600/10"
        >
          订阅 $9.9/月
        </Link>
      </p>
    </article>
  );
}
