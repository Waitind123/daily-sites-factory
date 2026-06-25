import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(siteConfig, {
  title: "2026 中国开发者如何找到远程工作 — 完整指南",
  description:
    "从技能准备、平台选择到薪资谈判，手把手教你找到海外远程岗位。含 React/Go/PM 热门方向分析和避坑清单。",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        2026 中国开发者如何找到远程工作：完整指南
      </h1>
      <p className="text-muted not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 8 分钟
      </p>

      <p>
        远程工作不再是疫情期间的临时方案，而是全球科技公司的常态雇佣模式。对中国开发者来说，找到一份海外远程岗位意味着以美元/欧元薪资生活在中国二三线城市，生活质量可能翻倍。但路径并不透明——LinkedIn 上 spam 职位太多，Boss 直聘几乎没有真正的 remote 岗。这篇指南基于数百个成功案例，帮你系统性地找到远程工作。
      </p>

      <h2>一、先确认：你适合远程吗？</h2>
      <p>
        远程工作不是「不用通勤」这么简单。成功的远程开发者通常具备：英语读写流利（会议口语可以慢慢练）、自律的时间管理、异步沟通能力（写清楚的文档比开会有价值），以及至少一项在全球市场有需求的核心技能。
      </p>
      <p>热门远程技能栈（2026 数据）：</p>
      <ul>
        <li><strong>前端</strong>：React、Next.js、TypeScript — 需求最大，竞争也最大</li>
        <li><strong>后端</strong>：Go、Rust、Node.js — Go 在基础设施公司（Stripe、GitLab）极受欢迎</li>
        <li><strong>DevOps/SRE</strong>：Kubernetes、Terraform — 薪资高，经验门槛也高</li>
        <li><strong>产品/设计</strong>：B2B SaaS 背景 + 英语 — 国内 PM 转型远程的案例越来越多</li>
      </ul>

      <h2>二、去哪里找远程职位？</h2>
      <p>
        市面上的远程招聘平台可以分三类：综合型（LinkedIn、Indeed）、远程专属（We Work Remotely、Remote OK），以及 curated 精选板（质量更高、spam 更少）。
      </p>
      <p>
        综合平台的问题是：搜 &ldquo;remote&rdquo; 会出来大量「远程但要求美国时区」「远程但薪资按当地」的混合职位。精选远程板的优势是每一帖都经过筛选，薪资范围透明，且面向真正接受全球候选人的公司。
      </p>
      <p>
        我们的{" "}
        <Link href="/jobs" className="text-brand-500 hover:underline">
          远程工作板
        </Link>{" "}
        就属于第三类：200+ 职位每日更新，覆盖 Stripe、GitLab、Notion 等远程友好公司，以及国内支持远程的创业公司。非会员可免费体验 5 次查看完整详情，之后{" "}
        <Link href="/join" className="text-brand-500 hover:underline">
          ¥699/年
        </Link>{" "}
        无限查看。
      </p>

      <h2>三、简历和作品集怎么改？</h2>
      <p>海外 HR 看简历的逻辑和国内不同：</p>
      <ol>
        <li><strong>量化成果</strong>：不说「负责前端开发」，说「将 Dashboard 加载时间从 3s 降到 800ms，DAU 提升 12%」</li>
        <li><strong>GitHub 链接</strong>：至少 2-3 个有 README 的开源项目或 side project</li>
        <li><strong>英文简历一页</strong>：不要两页，不要照片，不要年龄婚姻状况</li>
        <li><strong>Remote 关键词</strong>：在 summary 里写 &ldquo;3 years remote experience across UTC+8 and US timezones&rdquo;</li>
      </ol>

      <h2>四、面试流程有什么不同？</h2>
      <p>
        海外远程面试通常是：Recruiter 电话（30min）→ Hiring Manager（45min 技术/行为）→ Team Loop（2-3 轮）→ Offer。全程视频，很少 onsite。
      </p>
      <p>
        行为面试（Behavioral Interview）比重比国内大。准备 STAR 格式回答：Situation、Task、Action、Result。常见问题：「Tell me about a time you disagreed with your manager」「How do you handle async communication?」
      </p>

      <h2>五、薪资谈判：别只比数字</h2>
      <p>
        远程 offer 的 package 通常包括：Base Salary、Equity（期权/RSU）、Benefits（健康保险、设备补贴、Coworking 津贴）、以及 PTO（带薪假期，美国公司通常 15-25 天）。
      </p>
      <table className="w-full text-sm border-collapse not-prose my-6">
        <thead>
          <tr className="bg-surface-muted">
            <th className="border border-border px-4 py-2 text-left">级别</th>
            <th className="border border-border px-4 py-2 text-left">美国远程（年）</th>
            <th className="border border-border px-4 py-2 text-left">欧洲远程（年）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-border px-4 py-2">Mid-level Engineer</td>
            <td className="border border-border px-4 py-2">$120k–$160k</td>
            <td className="border border-border px-4 py-2">€60k–€90k</td>
          </tr>
          <tr>
            <td className="border border-border px-4 py-2">Senior Engineer</td>
            <td className="border border-border px-4 py-2">$160k–$220k</td>
            <td className="border border-border px-4 py-2">€80k–€120k</td>
          </tr>
          <tr>
            <td className="border border-border px-4 py-2">Staff Engineer</td>
            <td className="border border-border px-4 py-2">$200k–$280k</td>
            <td className="border border-border px-4 py-2">€100k–€150k</td>
          </tr>
        </tbody>
      </table>
      <p>
        生活在中国拿美元薪资，税后购买力可能相当于国内同级别的 2-3 倍。但注意：部分公司用 EOR（Employer of Record）雇佣中国员工，会扣当地社保和个税，实际到手需具体计算。
      </p>

      <h2>六、常见坑和避坑清单</h2>
      <ul>
        <li>❌ 「100% 远程但要求 EST 9-5 出勤」— 实质是换时区上班</li>
        <li>❌ 薪资写 &ldquo;competitive&rdquo; 不写范围 — 大概率低于预期</li>
        <li>❌ 要求先完成免费测试项目 — 可能是骗方案</li>
        <li>❌ 公司无官网 / LinkedIn 无员工 — 可能是 shell company</li>
        <li>✅ 薪资范围透明、团队页面真实、Glassdoor 有评价 — 优先考虑</li>
      </ul>

      <h2>七、下一步行动</h2>
      <p>
        远程工作的搜索是长期游戏，不是投 10 份简历就有回音。建议：每周固定 2 小时浏览新职位、维护 GitHub、写英文技术博客（这是最好的 remote-friendly 信号）。
      </p>
      <p>
        现在就去{" "}
        <Link href="/jobs" className="text-brand-500 hover:underline font-medium">
          浏览最新远程职位
        </Link>
        ，免费体验 5 次查看完整详情。如果你是 HR 想招远程人才，{" "}
        <Link href="/join" className="text-brand-500 hover:underline font-medium">
          ¥699/年无限发帖
        </Link>
        。
      </p>
    </article>
  );
}
