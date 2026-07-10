import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(
  { ...siteConfig, keywords: [...siteConfig.keywords] },
  {
  title: "远程团队跨时区会议怎么排 — 全球调度完整指南",
  description:
    "手把手教你安排跨时区会议：时区重叠计算、公平轮换策略、痛苦指数、async-first 原则。含免费规划工具。",
  }
);

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        远程团队跨时区会议怎么排？全球调度完整指南
      </h1>
      <p className="text-muted not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 10 分钟
      </p>

      <p>
        你在 Slack 发了一句「这周什么时候方便开会？」，六个人在四个时区里花了四个小时回复。
        你手算 UTC 偏移，发现纽约同事要在早上 7 点参会，东京同事要在晚上 9 点——
        最后选了「伤害最小」的时段，但你知道下周还是同一个人吃亏。
        <strong>这就是远程团队最大的协调税：scheduling tax。</strong>
        本指南教你用系统化方法安排跨时区会议，告别手算和无尽邮件链。
      </p>

      <h2>一、为什么跨时区会议这么难？</h2>
      <p>
        表面上看，时区数学不难：纽约比伦敦晚 5 小时，上海比伦敦早 7 小时。
        但真正难的是<strong>多方约束的叠加</strong>：每个人的工作时间不同、夏令时切换日期不同、
        有人是 shift worker、有人周五不上班。三个时区还好，四个以上就变成组合爆炸。
      </p>
      <p>常见痛点：</p>
      <ul>
        <li><strong>「第一个有空」策略不公平</strong>：日历上第一个空档往往让某时区的人总在早/晚参会</li>
        <li><strong>忽略 DST 切换</strong>：每年 3 月和 11 月，欧美时区偏移变化，会议时间悄悄偏移 1 小时</li>
        <li><strong>周末陷阱</strong>：UTC 周五下午 5 点，在悉尼已经是周六早上——没人提醒</li>
        <li><strong>Slack 线程地狱</strong>：6 人 × 4 个时区 = 24 种时间组合，邮件来回比会议本身还长</li>
      </ul>
      <p>
        研究显示，知识工作者每月因会议组织混乱浪费约 31 小时。
        对于跨 3 个以上时区的团队，这个数字翻倍。
      </p>

      <h2>二、时区重叠计算：核心方法论</h2>
      <p>
        跨时区会议规划的核心是找到<strong>工作时段交集（overlap window）</strong>。
        基本步骤：
      </p>
      <ol>
        <li>列出每个成员的时区和本地工作时间（默认 9:00–18:00，shift worker 需自定义）</li>
        <li>将所有人工作时段转换到同一参考系（通常用 UTC）</li>
        <li>找交集：所有成员同时处于工作时段的连续时间块</li>
        <li>在交集中选择会议时长可容纳的时段</li>
      </ol>
      <p>以上海 + 伦敦 + 纽约三地团队为例（均为 9:00–18:00 本地）：</p>
      <ul>
        <li>上海 UTC+8：工作时段 01:00–10:00 UTC</li>
        <li>伦敦 UTC+1（夏令时）：工作时段 08:00–17:00 UTC</li>
        <li>纽约 UTC-4（夏令时）：工作时段 13:00–22:00 UTC</li>
        <li><strong>三方重叠：13:00–17:00 UTC，约 4 小时/天</strong></li>
      </ul>
      <p>
        我们的{" "}
        <Link href="/planner" className="text-brand-500 hover:underline">
          跨时区会议规划器
        </Link>{" "}
        自动完成上述计算，非会员可免费体验 5 次。
      </p>

      <h2>三、痛苦指数：谁在为会议买单？</h2>
      <p>
        找到重叠时段只是第一步。更重要的是<strong>公平性</strong>：
        同样是 14:00 UTC 的会议，对纽约人是早上 10 点（舒适），对上海人是晚上 10 点（痛苦）。
      </p>
      <p>痛苦指数（Misery Score）评估标准：</p>
      <ul>
        <li><strong>0 分（舒适）</strong>：本地时间 10:00–16:00，核心工作时段</li>
        <li><strong>1–2 分（可接受）</strong>：本地时间 9:00 或 17:00 前后</li>
        <li><strong>3+ 分（辛苦）</strong>：本地时间早于 8:00 或晚于 18:00</li>
        <li><strong>10 分（禁止）</strong>：工作时段外或周末</li>
      </ul>
      <p>
        每次选会议时间时，计算所有参与者的痛苦指数总和，优先选总分最低的时段。
        如果某成员连续 3 次痛苦指数最高，下次<strong>主动轮换</strong>到对他更友好的时段。
        这是 GlobalSync、Whenest 等工具的核心思路，也是远程团队建立信任的关键。
      </p>

      <h2>四、公平轮换策略</h2>
      <p>
        对于每周固定站会（standup、sync），永远选「重叠窗口中间」意味着同一个人总在牺牲。
        推荐轮换策略：
      </p>
      <ul>
        <li><strong>双周轮换</strong>：奇数周偏亚太友好，偶数周偏美洲友好</li>
        <li><strong>痛苦积分制</strong>：记录每人累计痛苦指数，下次优先照顾积分最高者</li>
        <li><strong>录制 + async</strong>：无法轮换时，录制会议供缺席者异步观看</li>
      </ul>
      <p>
        会员可使用我们的 ICS 导出功能，将轮换后的会议时间直接导入 Google Calendar 或 Outlook。
        <Link href="/join" className="text-brand-500 hover:underline">
          订阅 $29/月
        </Link>{" "}
        解锁无限规划和日历导出。
      </p>

      <h2>五、Async-first：减少会议本身</h2>
      <p>
        最好的跨时区会议，是不开会议。当团队跨越 12+ 小时时区时，同步会议窗口可能只有 1–2 小时/天，
        根本不够支撑每日站会 + 周会 + 1:1。
      </p>
      <p>Async-first 原则：</p>
      <ul>
        <li><strong>文档驱动决策</strong>：用 Notion/Linear 写 RFC，异步评论，会议只讨论分歧</li>
        <li><strong>Loom 替代同步 demo</strong>：录屏 5 分钟，各时区按需观看</li>
        <li><strong>书面站会</strong>：Slack/Discord 频道每日更新「昨天/今天/阻塞」</li>
        <li><strong>同步会议留给高价值场景</strong>：brainstorm、冲突解决、关系建设</li>
      </ul>
      <p>
        时区规划工具的价值，在于把有限的同步时间用在刀刃上——而不是每周浪费 20 分钟找时间。
      </p>

      <h2>六、工具对比：为什么不用 World Time Buddy？</h2>
      <p>
        World Time Buddy 和 Every Time Zone 是优秀的世界时钟，但它们只回答「现在几点」，
        不回答「什么时候开会最公平」。专业会议规划工具的区别：
      </p>
      <ul>
        <li><strong>自动扫描未来 N 天</strong>：不只是当前时刻</li>
        <li><strong>自定义工作时间</strong>：shift worker、弹性办公</li>
        <li><strong>痛苦指数排序</strong>：公平性量化</li>
        <li><strong>DST 自动处理</strong>：不用每年手动调</li>
        <li><strong>日历导出</strong>：一键导入，减少 copy-paste 错误</li>
      </ul>

      <h2>七、立即开始规划</h2>
      <p>
        添加你的团队成员，选择会议时长，30 秒内获得按痛苦指数排序的推荐时段。
        免费体验 5 次，之后 $29/月解锁无限规划、ICS 导出和团队模板。
      </p>
      <p>
        <Link
          href="/planner"
          className="inline-block rounded-xl bg-brand-600 text-white px-6 py-3 font-semibold no-underline hover:bg-brand-700"
        >
          免费规划跨时区会议 →
        </Link>
      </p>
    </article>
  );
}
