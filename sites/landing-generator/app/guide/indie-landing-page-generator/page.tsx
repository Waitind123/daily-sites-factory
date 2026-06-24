import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(siteConfig, {
  title: "Indie 开发者 Landing Page 生成指南 — 30 秒上线落地页",
  description:
    "手把手教你为 indie 产品快速创建 landing page：工具对比（Carrd vs Webflow vs AI 生成器）、SEO 优化、部署到 Vercel。levelsio 第一天收费思路。",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 not-prose mb-4">
        Indie 开发者 Landing Page 生成指南：30 秒上线落地页
      </h1>
      <p className="text-stone-500 not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 12 分钟
      </p>

      <p>
        独立开发者最经典的拖延症之一：产品功能写好了，landing page 拖了 2 周还没上线。Indie Hackers 上最常见的帖子是「我的 MVP 做好了，但 landing page 不知道怎么写」。levelsio 的核心原则是<strong>第一天就要有 landing page 和收费点</strong>——不是等产品完美，而是先验证需求。
      </p>
      <p>
        这篇指南帮你从 0 到 1 快速创建 indie 产品的 landing page，覆盖工具选择、文案结构、SEO 优化和部署流程。
      </p>

      <h2>一、为什么 indie 开发者必须第一天就有 landing page？</h2>
      <p>
        很多开发者认为 landing page 是「产品做完后的营销工作」。但 2026 年的 indie 现实是：
      </p>
      <ul>
        <li><strong>验证需求</strong>：没有 landing page，你无法收集 waitlist 邮箱，无法做 fake door test</li>
        <li><strong>定价测试</strong>：levelsio 经典做法——页面上放价格，看点击率。100 访问 0 点击 = 方向有问题</li>
        <li><strong>SEO 起步</strong>：Google 收录需要时间，越早上线 landing page，越早开始积累长尾词排名</li>
        <li><strong>社交分发</strong>：Product Hunt、Show HN、Reddit 都需要一个链接。没有页面 = 无法分发</li>
      </ul>
      <p>
        Pieter Levels 在 Nomad List 上线第一天就有 landing page 和 $99/年 订阅。他的思路不是「等产品完美再收费」，而是「先收费验证有人愿意付钱」。
      </p>

      <h2>二、Landing Page 工具对比：Carrd vs Webflow vs AI 生成器</h2>

      <h3>Carrd（$19/年）</h3>
      <table>
        <thead>
          <tr>
            <th>优点</th>
            <th>缺点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>极简、便宜、5 分钟上手</td>
            <td>模板 generic，SEO 控制有限</td>
          </tr>
          <tr>
            <td>自定义域名支持</td>
            <td>只能做单页，扩展性差</td>
          </tr>
          <tr>
            <td>适合 waitlist 页</td>
            <td>无法导出 HTML，绑死在平台</td>
          </tr>
        </tbody>
      </table>

      <h3>Webflow（免费版有限制）</h3>
      <table>
        <thead>
          <tr>
            <th>优点</th>
            <th>缺点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>设计自由度极高</td>
            <td>学习曲线 2-3 天，indie 等不起</td>
          </tr>
          <tr>
            <td>CMS 功能强大</td>
            <td>免费版不能绑自定义域名</td>
          </tr>
          <tr>
            <td>适合设计驱动的品牌</td>
            <td>过度工程，MVP 阶段不需要</td>
          </tr>
        </tbody>
      </table>

      <h3>AI Landing Page 生成器（$9.9/月）</h3>
      <table>
        <thead>
          <tr>
            <th>优点</th>
            <th>缺点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30 秒生成，输入描述即可</td>
            <td>需要微调文案</td>
          </tr>
          <tr>
            <td>HTML 导出，部署自由</td>
            <td>不如 Webflow 设计自由度</td>
          </tr>
          <tr>
            <td>SEO meta 自动生成</td>
            <td>复杂交互需要手动加</td>
          </tr>
          <tr>
            <td>4 种风格快速 A/B 测试</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
      <p>
        对于 indie 开发者，推荐路径是：<strong>AI 生成器出初稿 → 微调文案 → 导出 HTML → 部署 Vercel</strong>。总耗时 30 分钟，而不是 3 天学 Webflow。
      </p>

      <h2>三、高转化 Landing Page 的 5 要素</h2>
      <ol>
        <li>
          <strong>一句话价值主张</strong>：用户 3 秒内知道你是做什么的。Bad: 「下一代 AI 驱动平台」。Good: 「独立开发者的极简项目管理，$9/月」
        </li>
        <li>
          <strong>社会证明</strong>：即使是 pre-revenue，也可以放 beta 用户反馈或「已有 X 人注册」
        </li>
        <li>
          <strong>清晰 CTA</strong>：一个主按钮，文案具体。「免费试用 14 天」比「开始使用」好 3 倍
        </li>
        <li>
          <strong>功能列表 ≤ 4 个</strong>：indie 用户不需要 20 个功能点。3-4 个核心功能 + 图标足够
        </li>
        <li>
          <strong>定价可见</strong>：levelsio 思路——页面上直接放价格。隐藏定价 = 流失潜在客户
        </li>
      </ol>

      <h2>四、SEO 优化 checklist</h2>
      <p>landing page 上线后，确保以下 SEO 基础到位：</p>
      <ul>
        <li><code>&lt;title&gt;</code> 含核心关键词 + 品牌名（60 字内）</li>
        <li><code>&lt;meta description&gt;</code> 含价值主张 + CTA（160 字内）</li>
        <li>H1 唯一，含目标关键词</li>
        <li>移动端响应式（Google Mobile-First Indexing）</li>
        <li>页面加载 &lt; 3 秒（静态 HTML 天然优势）</li>
        <li>提交 <a href="https://search.google.com/search-console">Google Search Console</a> 并提交 sitemap</li>
      </ul>
      <p>
        新站不要抢大词（如「landing page builder」），做长尾词（如「indie hacker landing page 模板」「独立开发者落地页生成」）。1-3 个月后长尾词会开始有自然流量。
      </p>

      <h2>五、部署流程：从 HTML 到公网</h2>
      <ol>
        <li>生成 HTML 并下载</li>
        <li>创建 GitHub 仓库，push HTML 文件</li>
        <li>连接 Vercel，一键部署（免费 Hobby 计划足够）</li>
        <li>绑定自定义域名（Namecheap $10/年 .com）</li>
        <li>配置 DNS + HTTPS（Vercel 自动）</li>
        <li>提交 Google Search Console</li>
      </ol>
      <p>
        整个流程 15 分钟。自定义域名 &gt; vercel.app 子域名，对 SEO 和品牌信任都有帮助。
      </p>

      <h2>六、分发：上线后 24 小时内必做</h2>
      <ul>
        <li><strong>Product Hunt</strong>：准备 3 张截图 + 30 秒 demo 视频</li>
        <li><strong>Hacker News Show HN</strong>：标题格式「Show HN: [产品名] – [一句话价值]」</li>
        <li><strong>Reddit</strong>：r/SideProject、r/Entrepreneur（遵守各 sub 规则）</li>
        <li><strong>Twitter/X</strong>：30 秒屏幕录制 + 链接</li>
        <li><strong>Indie Hackers</strong>：Build in public 帖，分享数据和教训</li>
      </ul>

      <h2>七、立即开始</h2>
      <p>
        如果你还在拖 landing page，现在就用{" "}
        <Link href="/studio" className="text-brand-600 font-semibold">
          Landing 生成器
        </Link>{" "}
        生成第一版。免费体验 5 次，30 秒出稿。不满意可以换风格重新生成，比从零写 HTML 快 100 倍。
      </p>
      <p>
        记住 levelsio 的核心：<strong>ship fast，第一天收费，先验证再优化</strong>。完美的 landing page 不存在，存在的只有已经上线的那版。
      </p>

      <div className="not-prose mt-10 rounded-xl bg-brand-50 border border-brand-200 p-6 text-center">
        <p className="font-semibold text-brand-800 mb-4">免费体验 5 次 · 之后 $9.9/月</p>
        <Link
          href="/studio"
          className="inline-block bg-brand-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-700"
        >
          立即生成 Landing Page
        </Link>
        <p className="mt-3 text-sm text-brand-600">
          或{" "}
          <Link href="/join" className="underline">
            查看订阅方案
          </Link>
        </p>
      </div>
    </article>
  );
}
