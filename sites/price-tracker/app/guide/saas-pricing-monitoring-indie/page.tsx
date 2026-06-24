import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(siteConfig, {
  title: "Indie 开发者竞品定价监控指南 — 如何自动追踪 SaaS 价格变动",
  description:
    "手把手教你监控 Notion、Linear、Cursor 等竞品定价变动：手动 vs 自动方案、工具对比、定价策略应对。比 RivalPeek $49/月 便宜的 indie 方案。",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 not-prose mb-4">
        Indie 开发者竞品定价监控指南：如何自动追踪 SaaS 价格变动
      </h1>
      <p className="text-stone-500 not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 12 分钟
      </p>

      <p>
        独立开发者最尴尬的时刻之一：潜在客户说「你们比 XX 贵」，而你根本不知道竞品上周刚降了 20%。Indie Hackers 上最常见的抱怨是每周手动打开 4-5 个竞品定价页截图对比，一周后全忘了，三周后从销售电话才知道竞品已经调价。
      </p>
      <p>
        这篇指南帮你建立一套<strong>竞品定价监控体系</strong>，从手动方案到自动化工具，覆盖 indie 开发者能负担的成本范围（$0-10/月）。
      </p>

      <h2>一、为什么 indie 开发者必须追踪竞品定价？</h2>
      <p>
        很多人以为定价是「设一次就不用管」的事。但 2026 年的 SaaS 市场现实是：
      </p>
      <ul>
        <li><strong>定价变动频率在上升</strong>：SBI Growth 数据显示，超过 60% 的 SaaS 公司每年至少调整一次定价</li>
        <li><strong>变动不只是价格</strong>：功能门控、免费额度缩减、新套餐推出——这些比单纯涨价更难发现</li>
        <li><strong>信息差 = 丢单</strong>：竞品降价 3 周后你才知道，意味着至少 3 周的定价劣势</li>
        <li><strong>定价会议需要数据</strong>：「他们涨了多少」「多久涨一次」——没有历史数据只能猜</li>
      </ul>
      <p>
        一个 Indie Hackers 上的创始人写道：他每周花 2 小时手动检查 5 个竞品定价页，结果还是错过了 Linear 涨价 25%。他真正需要的不是「更勤奋地截图」，而是「变动了自动通知我」。
      </p>

      <h2>二、手动监控 vs 自动监控：怎么选？</h2>

      <h3>手动方案（$0，适合 1-2 个竞品）</h3>
      <table>
        <thead>
          <tr>
            <th>方法</th>
            <th>优点</th>
            <th>缺点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>每周日历提醒 + 截图</td>
            <td>零成本</td>
            <td>容易忘记，无历史对比</td>
          </tr>
          <tr>
            <td>Wayback Machine</td>
            <td>有历史快照</td>
            <td>更新不及时，无提醒</td>
          </tr>
          <tr>
            <td>Visualping / Distill.io</td>
            <td>页面变动邮件提醒</td>
            <td>噪音大，无法区分定价变动和 UI 调整</td>
          </tr>
          <tr>
            <td>Google Sheets 记录</td>
            <td>可协作</td>
            <td>全靠人工录入</td>
          </tr>
        </tbody>
      </table>
      <p>
        手动方案在竞品少于 3 个时尚可接受。超过 3 个竞品，每周检查就要 1-2 小时，而且几乎一定会漏掉变动。
      </p>

      <h3>自动方案（$10-50/月，适合 3+ 竞品）</h3>
      <table>
        <thead>
          <tr>
            <th>工具</th>
            <th>价格</th>
            <th>适合谁</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SaaS 价格追踪（本站）</td>
            <td>$9.9/月</td>
            <td>Indie 开发者，关注 SaaS 定价</td>
          </tr>
          <tr>
            <td>RivalPeek</td>
            <td>$49/月</td>
            <td>需要 AI 摘要的团队</td>
          </tr>
          <tr>
            <td>Snoopt</td>
            <td>$29/月</td>
            <td>需要全站变动检测</td>
          </tr>
          <tr>
            <td>Crayon / Klue</td>
            <td>$500+/月</td>
            <td>企业竞争情报团队</td>
          </tr>
        </tbody>
      </table>
      <p>
        对 indie 开发者来说，$9.9/月的专用定价追踪工具是甜蜜点：比企业级工具便宜 50 倍，比手动方案省每周 2 小时。
      </p>

      <h2>三、应该追踪哪些竞品？</h2>
      <p>
        不是追踪越多越好。indie 开发者建议追踪 5-10 个直接竞品：
      </p>
      <ol>
        <li><strong>直接替代品</strong>：客户会在你和它之间二选一的工具</li>
        <li><strong>定价锚点</strong>：市场领导者（如 Notion、Figma）的定价影响客户预期</li>
        <li><strong>低价竞争者</strong>：可能用价格战抢你客户的工具</li>
        <li><strong>相邻品类</strong>：客户可能用「凑合方案」替代你的工具</li>
      </ol>
      <p>
        例如你做项目管理 SaaS，应该追踪：Linear（高端）、Height（中端）、Jira（企业锚点）、Trello（免费锚点）。
      </p>

      <h2>四、2026 年 SaaS 定价变动趋势</h2>
      <p>
        根据我们追踪的 6 个主流 SaaS 产品，2026 年 Q1-Q2 的定价变动模式：
      </p>
      <ul>
        <li><strong>温和涨价</strong>：Notion Plus +20%、Linear Standard +25%——市场领导者有定价权</li>
        <li><strong>功能门控</strong>：Cursor 缩减免费额度、Figma Dev Mode 独立付费——比直接涨价更隐蔽</li>
        <li><strong>高端层推出</strong>：Cursor Ultra $200/月——提升 ARPU 而非全面涨价</li>
        <li><strong>附加费模式</strong>：Stripe Billing +0.7%——核心费率稳定，附加产品收费</li>
        <li><strong>用量定价收紧</strong>：Vercel 超额带宽 +37.5%——基础设施成本转嫁</li>
      </ul>
      <p>
        这些变动对 indie 开发者的启示：如果你还没涨价，现在可能是好时机（市场在接受涨价）；如果你依赖某个工具的免费层，关注免费额度是否缩减。
      </p>

      <h2>五、发现竞品变动后怎么办？</h2>
      <p>
        追踪只是第一步。收到变动通知后的 actionable 步骤：
      </p>
      <ol>
        <li><strong>评估影响</strong>：这次变动影响你的目标客户吗？是涨价还是降价？</li>
        <li><strong>更新定位</strong>：竞品涨价 = 你的相对性价比提升，可以更新 landing page 文案</li>
        <li><strong>通知团队</strong>：销售/客服需要知道竞品变动，避免信息差丢单</li>
        <li><strong>考虑跟进</strong>：市场领导者涨价后 30-60 天是跟进涨价的安全窗口</li>
        <li><strong>记录决策</strong>：即使决定不行动，也记录原因，下次定价会议有依据</li>
      </ol>

      <h2>六、开始追踪：3 步上手</h2>
      <ol>
        <li>
          <strong>列出 5 个竞品</strong>：写下名字和定价页 URL
        </li>
        <li>
          <strong>选择监控方案</strong>：1-2 个竞品用手动，3+ 个用{" "}
          <Link href="/track">自动追踪工具</Link>
        </li>
        <li>
          <strong>设置提醒节奏</strong>：定价页建议每日检查，博客/功能页每周检查
        </li>
      </ol>
      <p>
        我们的工具已预置 Notion、Linear、Cursor、Figma、Vercel、Stripe 的 90 天定价历史。免费体验 5 次深度追踪，之后{" "}
        <Link href="/join">$9.9/月无限追踪 + 邮件提醒</Link>。
      </p>

      <div className="not-prose mt-10 rounded-xl bg-brand-50 border border-brand-200 p-6 text-center">
        <h3 className="text-xl font-bold text-stone-900 mb-2">
          停止手动截图，开始自动追踪
        </h3>
        <p className="text-stone-600 mb-4">
          免费体验 5 次 · 追踪 6+ 主流 SaaS 定价变动
        </p>
        <Link
          href="/track"
          className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
        >
          开始追踪竞品定价
        </Link>
      </div>
    </article>
  );
}
