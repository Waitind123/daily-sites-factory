import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata, siteConfig } from "@/lib/seo";
import { cities } from "@/lib/data";

export const metadata: Metadata = buildSiteMetadata(siteConfig, {
  title: "2026 最佳数字游民城市 Top 10 — 数据排名指南",
  description:
    "清迈、里斯本、巴厘岛… 按生活成本、网速、签证、安全综合排名。免费解锁 5 个城市详情，帮远程工作者选下一站。",
  alternates: {
    canonical: `${siteConfig.url}/guide/best-digital-nomad-cities`,
  },
});

export default function NomadCitiesGuidePage() {
  const top = cities.filter((c) => !c.locked).slice(0, 10);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 prose prose-stone">
      <Link href="/" className="text-sm text-brand-600 no-underline">
        ← 返回首页
      </Link>
      <h1 className="text-3xl font-bold mt-4 not-prose">
        2026 最佳数字游民城市 Top 10
      </h1>
      <p className="lead text-stone-600 not-prose">
        远程工作者选城市看四个指标：月生活成本、网速、安全指数、签证友好度。
        以下是基于真实数据的 2026 年排名（仿 Nomad List，中文 curated）。
      </p>

      <h2>Top 10 城市概览</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-stone-200 rounded-lg">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-3 py-2 text-left">#</th>
              <th className="px-3 py-2 text-left">城市</th>
              <th className="px-3 py-2 text-left">月成本</th>
              <th className="px-3 py-2 text-left">网速</th>
              <th className="px-3 py-2 text-right">评分</th>
            </tr>
          </thead>
          <tbody>
            {top.map((c) => (
              <tr key={c.name} className="border-t border-stone-100">
                <td className="px-3 py-2">{c.rank}</td>
                <td className="px-3 py-2">
                  {c.flag} {c.name}
                </td>
                <td className="px-3 py-2">¥{c.cost.toLocaleString()}</td>
                <td className="px-3 py-2">{c.internet} Mbps</td>
                <td className="px-3 py-2 text-right font-semibold text-brand-600">
                  {c.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>怎么选适合自己的城市？</h2>
      <ul>
        <li>预算 &lt; ¥8,000/月：清迈、巴厘岛、波哥大</li>
        <li>要欧洲时区：里斯本、巴塞罗那、布达佩斯</li>
        <li>要极速网络：台北、东京、迪拜</li>
        <li>签证友好：泰国 DTV、葡萄牙 D7、墨西哥 180 天免签</li>
      </ul>

      <h2>免费体验 5 次完整数据</h2>
      <p>
        注册会员前可免费解锁 5 个城市的完整详情。200+ 城市数据、历史趋势、社区交流需订阅会员。
      </p>

      <div className="not-prose mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/#rankings"
          className="rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold text-center hover:bg-brand-700"
        >
          查看完整排行榜
        </Link>
        <Link
          href="/join"
          className="rounded-xl border border-stone-300 px-6 py-3 font-semibold text-center hover:bg-stone-50"
        >
          加入会员
        </Link>
      </div>
    </article>
  );
}
