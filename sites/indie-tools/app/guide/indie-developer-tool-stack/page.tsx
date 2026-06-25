import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(siteConfig, {
  title: "独立开发者技术栈选型指南 — 2026 年 indie hacker 工具推荐",
  description:
    "从支付到部署：手把手教 indie hacker 选择 Polar、Vercel、Resend 等工具，控制 MVP 成本，第一天就能收费。含完整技术栈清单和选型决策树。",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        独立开发者技术栈选型指南：2026 年 indie hacker 工具推荐
      </h1>
      <p className="text-muted not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 12 分钟
      </p>

      <p>
        独立开发者最大的时间浪费不是写错代码，而是<strong>在工具选型上纠结两周，还没写第一行业务逻辑</strong>。levelsio 用 Vercel + Stripe 在 12 个周末 ship 了 12 个付费产品——他的秘诀不是选了「最好的」工具，而是选了「足够好、当天能上线」的工具。
      </p>
      <p>
        这篇指南帮你用决策树方法快速确定 indie SaaS 的技术栈，控制 MVP 月成本在 $50 以内，同时第一天就设计收费点。
      </p>

      <h2>一、为什么工具选型是 indie 的头号陷阱？</h2>
      <p>
        Reddit r/indiehackers 上最常见的帖子类型：「我在选数据库/支付/邮件服务，已经调研了一周，还没开始写代码」。失败模式惊人地相似：
      </p>
      <ul>
        <li><strong>过度调研</strong>：对比 20 个工具，每个都看 pricing page 和 G2 评论</li>
        <li><strong>追新</strong>：今天 Turso 火就用 Turso，明天 Neon 火就迁移</li>
        <li><strong>忽视成本</strong>：选了 $99/月的工具，MRR 还是 $0</li>
        <li><strong>自建过度</strong>：自己写 auth、自己搭邮件服务器</li>
      </ul>
      <p>
        正确的原则：<strong>用成熟工具、控制月费、第一天收费、周末能 ship</strong>。
      </p>

      <h2>二、2026 indie SaaS 标准技术栈（$50/月以内）</h2>
      <p>
        以下是一个经过数百个 indie 产品验证的「默认栈」。除非有特殊理由，否则不要偏离：
      </p>

      <h3>前端 + 部署：Next.js + Vercel</h3>
      <p>
        Next.js 15 + TypeScript + Tailwind 是 2026 年 indie 前端的事实标准。Vercel Hobby 免费层够 MVP，Pro $20/月解锁更多带宽。git push 即部署，Show HN 当天就能有公网 URL。
      </p>
      <p>
        替代方案：Cloudflare Pages（更便宜但 Next.js 支持弱）、Railway（需要持久化后端时）。
      </p>

      <h3>支付：Polar（无公司）或 Stripe（有美国公司）</h3>
      <p>
        这是 indie 圈 2025-2026 年最大的变化。<strong>没有海外公司的开发者，Polar 是首选</strong>——它作为 Merchant of Record 处理全球税务，4%+$0.40/笔，无月费。有美国公司的用 Stripe 裸接（2.9%+$0.30）。
      </p>
      <p>
        卖数字产品（模板、课程）而非纯 SaaS？选 Lemon Squeezy，hosted checkout 零代码。
      </p>
      <p>
        <Link href="/tools" className="text-brand-500 hover:underline">
          查看支付工具深度对比 →
        </Link>
      </p>

      <h3>邮件：Resend</h3>
      <p>
        事务邮件（注册确认、密码重置、支付收据）用 Resend。免费 3000 封/月够 MVP，API 极简，React Email 写模板。别用 SendGrid（配置地狱）或自己搭 SMTP（deliverability 灾难）。
      </p>

      <h3>认证：Clerk 或 Supabase Auth</h3>
      <p>
        <strong>别自己写 auth</strong>。Clerk 免费 10K MAU，5 分钟集成 Next.js，提供登录 UI 组件。已用 Supabase 做后端的用 Supabase Auth（免费但 UI 自建）。
      </p>

      <h3>数据库：Supabase</h3>
      <p>
        Supabase 免费层：500MB Postgres + 1GB 存储 + 50K auth MAU。Pro $25/月扩展到生产。一个 Postgres 实例 + 自动 API + Dashboard，周末搭完后端。
      </p>

      <h3>分析：Plausible（landing）+ PostHog（SaaS）</h3>
      <p>
        Landing page 用 Plausible（$9/月，隐私友好，无 cookie banner）。SaaS 产品内分析用 PostHog（免费 1M events/月，含 Feature Flags）。不要一上来就用 Mixpanel（$28/月起）。
      </p>

      <h2>三、选型决策树（5 分钟版）</h2>
      <p>按顺序回答以下问题：</p>
      <ol>
        <li><strong>有美国公司吗？</strong> 有 → Stripe。没有 → Polar。</li>
        <li><strong>卖 SaaS 订阅还是数字产品？</strong> SaaS → Polar/Stripe API。数字产品 → Lemon Squeezy。</li>
        <li><strong>需要用户登录吗？</strong> 要 → Clerk。不要 → 跳过。</li>
        <li><strong>需要持久化数据吗？</strong> 要 → Supabase。不要 → localStorage/JSON 够用。</li>
        <li><strong>需要发邮件吗？</strong> 要 → Resend。不要 → 跳过。</li>
        <li><strong>需要产品分析吗？</strong> Landing → Plausible。SaaS → PostHog。</li>
      </ol>
      <p>
        回答完这 6 个问题，你的技术栈就确定了。总月费：$0（全免费层）到 $50（全 Pro）。
      </p>

      <h2>四、MVP 成本控制清单</h2>
      <table>
        <thead>
          <tr>
            <th>工具</th>
            <th>免费层</th>
            <th>Pro 价格</th>
            <th>何时升级</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vercel</td>
            <td>Hobby 免费</td>
            <td>$20/月</td>
            <td>需要团队协作或 Analytics</td>
          </tr>
          <tr>
            <td>Polar</td>
            <td>无月费</td>
            <td>4%+$0.40/笔</td>
            <td>第一天就用</td>
          </tr>
          <tr>
            <td>Resend</td>
            <td>3000 封/月</td>
            <td>$20/月 50K 封</td>
            <td>月发送 &gt; 2500 封</td>
          </tr>
          <tr>
            <td>Clerk</td>
            <td>10K MAU</td>
            <td>$25/月</td>
            <td>MAU &gt; 8K</td>
          </tr>
          <tr>
            <td>Supabase</td>
            <td>500MB DB</td>
            <td>$25/月</td>
            <td>DB &gt; 400MB 或需 7x24</td>
          </tr>
          <tr>
            <td>Plausible</td>
            <td>无</td>
            <td>$9/月</td>
            <td>上线 landing page 当天</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>关键原则</strong>：在免费层验证付费意愿，有第一笔收入后再升级 Pro。不要在 $0 MRR 时花 $200/月买工具。
      </p>

      <h2>五、常见错误和避坑</h2>
      <ul>
        <li><strong>自建 auth</strong>：省 $0，浪费 2 周，引入安全漏洞。用 Clerk。</li>
        <li><strong>同时用 3 个数据库</strong>：Supabase + PlanetScale + Redis。一个 Postgres 够用。</li>
        <li><strong>过早优化</strong>：MVP 阶段不需要 K8s、微服务、消息队列。</li>
        <li><strong>忽视支付</strong>：「先免费积累用户再收费」= 99% 永远不收费。</li>
        <li><strong>工具囤积</strong>：订阅 10 个 SaaS 工具但产品还没上线。</li>
      </ul>

      <h2>六、下一步行动</h2>
      <p>
        1. 用上面的决策树确定你的 6 个工具<br />
        2. 在 Vercel 创建项目，git push 部署<br />
        3. 接入 Polar/Stripe，<Link href="/join" className="text-brand-500 hover:underline">设计 $9.9/月定价页</Link><br />
        4. 本周末 ship MVP，Show HN 获取第一批用户
      </p>
      <p>
        需要每个工具的定价对比、替代方案和接入指南？
        <Link href="/tools" className="text-brand-500 hover:underline font-semibold">
          浏览独立开发者工具箱完整目录
        </Link>
        ，免费体验 5 次深度评测。
      </p>

      <div className="not-prose mt-10 rounded-xl bg-brand-600/10 border border-brand-200 p-6 text-center">
        <p className="font-semibold text-foreground">不想一个个调研？</p>
        <p className="text-sm text-muted mt-2">
          我们已评测 40+ indie 工具，含定价对比和 5 分钟接入指南
        </p>
        <Link
          href="/join"
          className="inline-block mt-4 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
        >
          订阅 $9.9/月 · 无限查阅
        </Link>
      </div>
    </article>
  );
}
