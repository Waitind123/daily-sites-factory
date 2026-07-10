import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(
  { ...siteConfig, keywords: [...siteConfig.keywords] },
  {
  title: "Indie 开发者 Newsletter 工具选型指南 — Substack vs Beehiiv vs ConvertKit 怎么选",
  description:
    "手把手教你选择 Newsletter 工具：Substack、Beehiiv、ConvertKit、Mailchimp、Buttondown、Ghost 深度对比。按订阅者阶段推荐，含迁移指南和真实成本计算。",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        Indie 开发者 Newsletter 工具选型指南：Substack vs Beehiiv vs ConvertKit 怎么选
      </h1>
      <p className="text-muted not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 12 分钟
      </p>

      <p>
        独立开发者开始写 newsletter 时，最常见的困境不是「写什么」，而是「用哪个平台」。Indie Hackers 上每周都有人用「I wish there was a simple comparison」抱怨：Substack 抽成 10% 到底值不值？Beehiiv 和 ConvertKit 差在哪？Mailchimp 免费层够用吗？
      </p>
      <p>
        这篇指南按<strong>订阅者阶段</strong>和<strong>使用场景</strong>帮你选对工具，避免在错误平台上浪费两年时间和数千美元。
      </p>

      <h2>一、先算真实成本，别看表面月费</h2>
      <p>
        很多人选 Newsletter 工具只看月费，忽略了最大的隐性成本：<strong>平台抽成</strong>。
      </p>

      <table>
        <thead>
          <tr>
            <th>平台</th>
            <th>表面月费</th>
            <th>隐性成本</th>
            <th>MRR $1000 时真实月费</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Substack</td>
            <td>$0</td>
            <td>10% 平台抽成</td>
            <td><strong>$100/月</strong></td>
          </tr>
          <tr>
            <td>Beehiiv</td>
            <td>$0-49</td>
            <td>0% 抽成</td>
            <td><strong>$49/月</strong>（Scale 计划）</td>
          </tr>
          <tr>
            <td>Kit (ConvertKit)</td>
            <td>$0-29</td>
            <td>0% 抽成</td>
            <td><strong>$29/月</strong>（Creator 1000 人）</td>
          </tr>
          <tr>
            <td>Buttondown</td>
            <td>$0-9</td>
            <td>0% 抽成</td>
            <td><strong>$9/月</strong>（Basic 1000 人）</td>
          </tr>
          <tr>
            <td>Mailchimp</td>
            <td>$0-13</td>
            <td>功能过剩</td>
            <td><strong>$13/月</strong>（仅 500 联系人）</td>
          </tr>
        </tbody>
      </table>

      <p>
        关键洞察：<strong>Substack 在 MRR $500 以上时比所有月费工具都贵</strong>。一个 Indie Hackers 用户写道：「我在 Substack 交了两年 10% 抽成，MRR $800 时每月多付 $80。迁到 Beehiiv 后省了 $60/月。」
      </p>

      <h2>二、按订阅者阶段选工具</h2>

      <h3>阶段 1：0 → 500 订阅者（验证阶段）</h3>
      <p>
        这个阶段你的目标是验证内容是否有人看，不需要复杂功能。
      </p>
      <ul>
        <li><strong>首选 Substack</strong>：零门槛，自带发现网络，5 分钟上线。接受 10% 抽成，因为此时收入几乎为零</li>
        <li><strong>备选 Buttondown</strong>：$0 免费 100 订阅者，Markdown 写作，适合技术写作者</li>
        <li><strong>不推荐 Mailchimp</strong>：免费层仅 500 联系人，界面复杂，功能过剩</li>
      </ul>

      <h3>阶段 2：500 → 5000 订阅者（增长阶段）</h3>
      <p>
        有了初步受众，开始考虑变现和增长工具。
      </p>
      <ul>
        <li><strong>首选 Beehiiv</strong>：2500 订阅者免费，Ad Network 被动收入，推荐网络有机增长。从 Substack 一键迁移</li>
        <li><strong>备选 Kit</strong>：如果你卖课程/数字产品，自动化漏斗比 Beehiiv 强</li>
        <li><strong>开始警惕 Substack 抽成</strong>：MRR $500+ 时每月多付 $50+，该规划迁移了</li>
      </ul>

      <h3>阶段 3：5000+ 订阅者（变现阶段）</h3>
      <p>
        订阅者够多，平台选择和成本优化变得关键。
      </p>
      <ul>
        <li><strong>纯 newsletter</strong>：Beehiiv Scale $49/月 或 Kit Creator Pro $59/月</li>
        <li><strong>博客 + newsletter</strong>：Ghost $25/月起，SEO 友好，可自托管</li>
        <li><strong>极简主义</strong>：Buttondown $29/月 5000 人，API 优先</li>
        <li><strong>必须离开 Substack</strong>：MRR $2000 时每月 $200 抽成，一年 $2400</li>
      </ul>

      <h2>三、六大平台核心差异</h2>

      <h3>Substack — 发现网络 {'>'} 一切</h3>
      <p>
        优势是 Recommendations 推荐网络和 Notes 社交功能，小账号也能获得曝光。劣势是 10% 抽成、数据导出有限、品牌感弱。适合从零开始、依赖平台流量的写作者。
      </p>

      <h3>Beehiiv — 2026 年 Indie Hacker 最爱</h3>
      <p>
        核心差异化是 Ad Network（平台帮你接广告）和更开放的推荐网络。2500 订阅者免费，0% 抽成。Indie Hackers 上最常见的 Substack 迁移目标。缺点是写作体验不如 Substack 极简。
      </p>

      <h3>Kit (ConvertKit) — 营销自动化王者</h3>
      <p>
        可视化自动化构建器是行业最佳，适合课程发售、产品漏斗。10000 订阅者免费但限 1 个自动化。不适合纯写作的 newsletter，适合卖数字产品的创作者。
      </p>

      <h3>Mailchimp — 功能全面但过重</h3>
      <p>
        2024 年免费层从 2000 缩至 500 联系人，对小创作者越来越不友好。CRM、广告、电商功能全面，但「我只想发 newsletter」的人会觉得功能过剩。
      </p>

      <h3>Buttondown — 程序员的极简选择</h3>
      <p>
        Markdown 原生、API 优先、$9/月 1000 订阅者。无增长功能，适合「我只想好好写」的技术写作者。
      </p>

      <h3>Ghost — 博客 + Newsletter 一体</h3>
      <p>
        开源可自托管，SEO 友好的独立博客 + newsletter。适合想拥有完整内容平台、重视 SEO 的创作者。缺点是 newsletter 增长功能弱，需要自己做流量。
      </p>

      <h2>四、迁移实操：从 Substack 迁出</h2>
      <p>
        最常见的迁移路径是 Substack → Beehiiv 或 Substack → Kit。关键步骤：
      </p>
      <ol>
        <li><strong>导出新平台</strong>：Beehiiv 有一键 Substack 迁移工具；Kit 用 CSV 导入</li>
        <li><strong>提前 2 周通知</strong>：在 Substack 发迁移公告，说明新地址和原因</li>
        <li><strong>付费订阅者单独处理</strong>：Stripe 连接需在新平台重新设置，通知订阅者更新支付方式</li>
        <li><strong>保留 Substack 3 个月</strong>：作为发现渠道，主 newsletter 迁走</li>
        <li><strong>检查送达率</strong>：新平台发 2-3 期测试，确认邮件不进垃圾箱</li>
      </ol>

      <h2>五、常见误区</h2>
      <ul>
        <li><strong>「Substack 免费所以最便宜」</strong>：MRR $500+ 时 10% 抽成比任何月费工具都贵</li>
        <li><strong>「功能越多越好」</strong>：Mailchimp 的 CRM 和广告功能对纯 newsletter 是负担</li>
        <li><strong>「迁移太麻烦就不迁了」</strong>：两年 10% 抽成可能多花 $2000+，迁移 2 小时就完成</li>
        <li><strong>「一个平台用到底」</strong>：0-500 用 Substack 获客，500+ 迁到 Beehiiv/Kit 省钱</li>
      </ul>

      <h2>六、我的推荐决策树</h2>
      <p>
        不确定选哪个？按这个顺序问自己：
      </p>
      <ol>
        <li>你有博客吗？→ 有 → <strong>Ghost</strong></li>
        <li>你卖课程/数字产品吗？→ 是 → <strong>Kit</strong></li>
        <li>你是技术写作者、要 Markdown 吗？→ 是 → <strong>Buttondown</strong></li>
        <li>你从零开始、需要平台流量吗？→ 是 → <strong>Substack</strong>（但规划迁移）</li>
        <li>其他情况 → <strong>Beehiiv</strong></li>
      </ol>

      <div className="not-prose mt-10 rounded-xl bg-brand-600/10 border border-brand-200 p-6 text-center">
        <p className="font-semibold text-foreground mb-3">
          想一键对比全部 6 个平台的定价、功能和迁移指南？
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/compare"
            className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
          >
            免费体验 5 次深度对比
          </Link>
          <Link
            href="/join"
            className="inline-block border border-brand-300 text-brand-500 px-6 py-3 rounded-xl font-semibold hover:bg-brand-600/10"
          >
            订阅 $29/月 无限对比
          </Link>
        </div>
      </div>
    </article>
  );
}
