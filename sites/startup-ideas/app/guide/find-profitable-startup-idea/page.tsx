import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getSiteConfig } from "@/lib/seo";

const zhConfig = getSiteConfig("zh");

export const metadata: Metadata = buildSiteMetadata(
  { ...zhConfig, keywords: [...zhConfig.keywords] },
  {
  title: "如何找到能赚钱的创业点子 — 独立开发者验证指南",
  description:
    "从 Reddit、HN 到 MVP 验证：手把手教 indie hacker 找到有人愿意付费的创业方向。含竞品分析框架和 5 步验证法。",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        如何找到能赚钱的创业点子：独立开发者验证指南
      </h1>
      <p className="text-muted not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 10 分钟
      </p>

      <p>
        独立开发者最大的浪费不是写错代码，而是<strong>花了三个月 build 一个没人要的产品</strong>。levelsio 用 12 个周末做了 12 个付费产品，Nomad List 第一天就收费——他们的共同点是：在写第一行代码之前，就已经知道有人愿意付钱。
      </p>
      <p>
        这篇指南帮你用系统化方法找到可落地的创业点子，避免「我觉得这个 idea 很 clever」的陷阱。
      </p>

      <h2>一、为什么大多数创业点子会失败？</h2>
      <p>
        Indie Hackers 上最成功的 post 往往不是「我赚了 $10K MRR」，而是「我花了 6 个月 build 了一个没人用的 App，这是我学到的」。失败模式惊人地相似：
      </p>
      <ul>
        <li><strong>解决自己的问题</strong>：「我需要这个工具」≠「1000 个人需要并愿意付费」</li>
        <li><strong>竞争大词</strong>：做「项目管理工具」而不是「远程团队 async standup 工具」</li>
        <li><strong>无 monetization 设计</strong>：先 build 免费产品，「以后再说怎么赚钱」</li>
        <li><strong>无 distribution 计划</strong>：以为 Product Hunt 发一次就能有用户</li>
      </ul>
      <p>
        正确的顺序是：<strong>痛点 → 付费意愿 → MVP → 分发</strong>。不是反过来。
      </p>

      <h2>二、去哪里找真实痛点？</h2>
      <p>
        不要 brainstorm。去用户已经在抱怨的地方找：
      </p>
      <ul>
        <li><strong>Hacker News</strong>：搜 &ldquo;I wish there was&rdquo;、&ldquo;looking for alternative&rdquo;</li>
        <li><strong>Reddit</strong>：r/SaaS、r/indiehackers、r/Entrepreneur 的 hot 帖</li>
        <li><strong>Indie Hackers</strong>：「What are you working on?」帖下的 pain points</li>
        <li><strong>Twitter/X</strong>：搜 &ldquo;frustrated with [工具名]&rdquo;</li>
        <li><strong>竞品 App Store 评论</strong>：1-3 星评论是金矿</li>
      </ul>
      <p>
        高价值信号的关键词：
      </p>
      <ul>
        <li>&ldquo;I&apos;d pay $X/month for...&rdquo; — 直接表明付费意愿</li>
        <li>&ldquo;Why doesn&apos;t X exist yet?&rdquo; — 市场空白</li>
        <li>&ldquo;Alternatives to [incumbent]?&rdquo; — 竞品不满</li>
        <li>&ldquo;I spent X hours doing Y manually&rdquo; — 时间成本 = 付费动机</li>
      </ul>

      <h2>三、5 步验证框架（写代码前必做）</h2>

      <h3>Step 1：问题陈述（1 句话）</h3>
      <p>
        格式：「[目标用户] 在 [场景] 下，因为 [限制]，无法 [期望结果]。」
      </p>
      <p>
        例：「独立开发者在 Vercel 部署多个 API 项目时，因为各平台账单分散，无法实时知道本月 API 总花费。」
      </p>

      <h3>Step 2：竞品扫描（30 分钟）</h3>
      <p>
        找 3-5 个现有解决方案，记录：
      </p>
      <table>
        <thead>
          <tr>
            <th>竞品</th>
            <th>定价</th>
            <th>缺口</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Incumbent A</td>
            <td>$49/月</td>
            <td>太重，indie 用不起</td>
          </tr>
          <tr>
            <td>DIY 方案</td>
            <td>免费</td>
            <td>手动操作，每周 2 小时</td>
          </tr>
          <tr>
            <td>你的机会</td>
            <td>$9/月</td>
            <td>简单、便宜、当天上线</td>
          </tr>
        </tbody>
      </table>
      <p>
        如果<strong>没有竞品</strong>，要警惕——可能是伪需求。如果<strong>竞品太多且都免费</strong>，差异化更难。
      </p>

      <h3>Step 3：定价测试（Landing Page）</h3>
      <p>
        在写代码之前，做一个 landing page + waitlist 或 fake door test。levelsio 的经典做法：页面上放价格，看点击率。如果 100 个访问 0 个点击「Subscribe」，方向可能有问题。
      </p>
      <p>
        我们的{" "}
        <Link href="/ideas" className="text-brand-500 hover:underline">
          创业点子库
        </Link>{" "}
        每个分析都含建议定价，可直接参考。非会员可免费体验 5 次深度分析，之后{" "}
        <Link href="/join" className="text-brand-500 hover:underline">
          $29/月
        </Link>{" "}
        无限阅读。
      </p>

      <h3>Step 4：MVP 范围（1 周末）</h3>
      <p>
        问自己：「如果只有 48 小时，能 ship 什么？」砍掉一切非核心功能：
      </p>
      <ol>
        <li>核心功能（1 个）</li>
        <li>Landing page + 定价</li>
        <li>Stripe Checkout（或 Polar）</li>
        <li>一个分发渠道（Show HN 或 Reddit post）</li>
      </ol>
      <p>
        不要：用户系统、团队功能、API、移动 App、admin dashboard。
      </p>

      <h3>Step 5：Launch + 迭代</h3>
      <p>
        发布渠道优先级（对 indie dev 产品）：
      </p>
      <ol>
        <li><strong>Show HN</strong>：技术社区，适合 dev tools</li>
        <li><strong>Reddit r/SideProject</strong>：友好，允许 self-promo</li>
        <li><strong>Indie Hackers</strong>：build in public 帖</li>
        <li><strong>Product Hunt</strong>：需要准备，竞争大</li>
        <li><strong>Twitter/X</strong>：30 秒 demo 视频 + 链接</li>
      </ol>

      <h2>四、什么样的点子适合 solo founder？</h2>
      <p>
        不是每个好点子都适合一个人做。筛选标准：
      </p>
      <ul>
        <li><strong>Build time ≤ 2 周</strong>：第一个版本必须快</li>
        <li><strong>无需 sales team</strong>：self-serve + 信用卡订阅</li>
        <li><strong>低 support 负担</strong>：避免需要 hand-holding 的企业客户</li>
        <li><strong>可自动化分发</strong>：SEO 长尾词或社区 marketing</li>
        <li><strong>MRR 目标 $1K-$10K</strong>：这个区间 solo 可持续，不需要融资</li>
      </ul>

      <h2>五、常见陷阱</h2>
      <ul>
        <li><strong>完美主义</strong>：MVP 不需要完美，需要可用 + 可付费</li>
        <li><strong>免费陷阱</strong>：永久免费档吸引错误用户，levelsio 思路是第一天收费</li>
        <li><strong>功能 creep</strong>：用户说「如果能加 X 就好了」→ 加完还是 0 付费用户</li>
        <li><strong>忽视分发</strong>：build 占 20%，marketing 占 80%</li>
      </ul>

      <h2>六、下一步行动</h2>
      <p>
        1. 浏览我们的{" "}
        <Link href="/ideas" className="text-brand-500 hover:underline">
          8+ 精选创业点子
        </Link>
        ，每个含深度市场分析
      </p>
      <p>
        2. 选 1 个与你技能匹配的方向，按 MVP 清单周末 ship
      </p>
      <p>
        3. Show HN 或 Reddit 发布，收集真实反馈
      </p>
      <p>
        4. 有付费用户后迭代，没付费用户就 pivot——别恋战
      </p>

      <div className="not-prose mt-10 rounded-xl bg-brand-600/10 border border-brand-200 p-6 text-center">
        <p className="font-semibold text-foreground mb-2">准备好找方向了？</p>
        <p className="text-sm text-muted mb-4">
          免费体验 5 次深度分析 · 含竞品定价、MRR 预估、MVP 路线图
        </p>
        <Link
          href="/ideas"
          className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
        >
          浏览创业点子 →
        </Link>
      </div>
    </article>
  );
}
