import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(siteConfig, {
  title: "如何养成每日习惯 — 21 天法则真的有用吗？",
  description:
    "从心理学到实操：手把手教你用极简打卡工具养成阅读、运动、冥想等每日习惯。含 Streak 策略和避坑指南。",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 not-prose mb-4">
        如何养成每日习惯：21 天法则真的有用吗？
      </h1>
      <p className="text-stone-500 not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 9 分钟
      </p>

      <p>
        「21 天养成习惯」这个说法流传很广，但心理学研究告诉我们：养成一个习惯平均需要 66 天，复杂习惯甚至需要 254 天。好消息是，你不需要等 66 天才能受益——习惯的力量来自<strong>重复</strong>和<strong>可见的进度</strong>。这篇指南帮你用极简方法，从今天开始养成每日习惯。
      </p>

      <h2>一、为什么大多数习惯 App 让你失败？</h2>
      <p>
        打开 App Store 搜「习惯」，你会看到几百个选择：Habitica 把打卡变成 RPG 游戏，Notion 让你自建复杂模板，Apple 健康整合在系统里但缺乏专注感。问题不是功能不够，而是<strong>摩擦太大</strong>。
      </p>
      <p>
        习惯养成的第一原则是：<strong>降低启动成本</strong>。如果你打开 App 需要 5 步操作才能完成打卡，你会在第 3 天放弃。成功的习惯追踪工具应该做到：打开 → 点一下 → 关闭，全程 3 秒。
      </p>
      <p>常见失败模式：</p>
      <ul>
        <li><strong>习惯太多</strong>：同时追踪 10 个习惯，任何一个断了都会产生挫败感</li>
        <li><strong>目标太大</strong>：「每天跑步 5 公里」不如「穿上跑鞋出门」</li>
        <li><strong>没有反馈</strong>：看不到连续天数（Streak），缺乏即时奖励</li>
        <li><strong>工具太复杂</strong>：设置提醒、分类、标签花了 30 分钟，还没开始打卡</li>
      </ul>

      <h2>二、选择 1-3 个「锚定习惯」</h2>
      <p>
        James Clear 在《Atomic Habits》里提出「习惯堆叠」：把新习惯绑在一个已有习惯后面。例如：
      </p>
      <ul>
        <li>刷完牙 → 冥想 2 分钟</li>
        <li>喝完第一杯咖啡 → 写 3 行日记</li>
        <li>午饭前 → 阅读 10 页</li>
      </ul>
      <p>
        先从 1 个习惯开始，坚持 2 周再加第二个。我们的{" "}
        <Link href="/track" className="text-brand-600 hover:underline">
          打卡页面
        </Link>{" "}
        默认提供阅读、运动、冥想、喝水、日记 5 个模板，你可以直接选用或自定义。非会员可免费体验 5 次打卡，之后{" "}
        <Link href="/join" className="text-brand-600 hover:underline">
          $29.9/月
        </Link>{" "}
        无限习惯。
      </p>

      <h2>三、Streak 的心理学：为什么连续天数有效？</h2>
      <p>
        Duolingo 的 Streak 功能是其留存率的核心武器。连续天数创造了一种「损失厌恶」——你已经坚持了 15 天，今天不打卡就意味着归零，这种心理推力比任何励志语录都强。
      </p>
      <p>使用 Streak 的最佳实践：</p>
      <ol>
        <li><strong>允许「冻结」</strong>：旅行或生病时，会员可以暂停 Streak（我们即将推出）</li>
        <li><strong>庆祝里程碑</strong>：7 天、21 天、66 天、100 天，每个节点都值得认可</li>
        <li><strong>不要追求完美</strong>：断了就重来，自责只会让你彻底放弃</li>
        <li><strong>公开承诺</strong>：告诉朋友你在坚持什么，社交压力是免费的 accountability</li>
      </ol>

      <h2>四、每日提醒：什么时候发？</h2>
      <p>
        提醒的时间比内容更重要。研究建议绑定在已有行为的时间点，而不是随机时间。如果你通常 7:30 起床，把阅读提醒设在 7:35（刷完牙后）比设在 9:00 有效 3 倍。
      </p>
      <p>
        习惯打卡会员可以自定义每个习惯的提醒时间。建议先从 1 个提醒开始，确认有效后再加。太多提醒 = 全部忽略。
      </p>

      <h2>五、数据回顾：周报表的力量</h2>
      <p>
        每周日花 5 分钟看完成率报表，问自己三个问题：
      </p>
      <ol>
        <li>哪几天完成率最低？为什么？（通常是周末或出差）</li>
        <li>哪个习惯最容易坚持？可以从中提取成功经验</li>
        <li>哪个习惯总是跳过？目标是否太大，需要拆分？</li>
      </ol>
      <p>
        我们的周/月报表会自动计算完成率趋势，会员还可以导出 CSV 做更深入分析。数据不会说谎——如果你连续 3 周周三完成率都是 40%，说明周三有结构性障碍，需要调整策略而不是靠意志力硬撑。
      </p>

      <h2>六、常见误区与避坑</h2>
      <table className="w-full text-sm border-collapse not-prose my-6">
        <thead>
          <tr className="bg-stone-100">
            <th className="border border-stone-200 px-3 py-2 text-left">误区</th>
            <th className="border border-stone-200 px-3 py-2 text-left">正确做法</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-stone-200 px-3 py-2">新年一口气定 10 个目标</td>
            <td className="border border-stone-200 px-3 py-2">从 1 个开始，21 天后加第 2 个</td>
          </tr>
          <tr>
            <td className="border border-stone-200 px-3 py-2">断了就「从明天重新开始」</td>
            <td className="border border-stone-200 px-3 py-2">断了立刻当天补打卡或接受归零</td>
          </tr>
          <tr>
            <td className="border border-stone-200 px-3 py-2">买课程/书代替行动</td>
            <td className="border border-stone-200 px-3 py-2">3 秒打卡 &gt; 300 页自律书</td>
          </tr>
          <tr>
            <td className="border border-stone-200 px-3 py-2">等「有动力了」再开始</td>
            <td className="border border-stone-200 px-3 py-2">动力来自行动，不是等待</td>
          </tr>
        </tbody>
      </table>

      <h2>七、今天就开始</h2>
      <p>
        习惯养成没有完美时机。你不需要等周一、等月初、等买了新 App。现在打开{" "}
        <Link href="/track" className="text-brand-600 hover:underline">
          习惯打卡
        </Link>
        ，选一个最小的习惯，点一下。这就是第 1 天。
      </p>
      <p>
        免费体验 5 次，感受 Streak 的推力。觉得有用就{" "}
        <Link href="/join" className="text-brand-600 hover:underline">
          订阅 $29.9/月
        </Link>
        —— 比一杯 Starbucks 还便宜，但可能改变接下来 365 天的你。
      </p>

      <div className="not-prose mt-10 rounded-xl bg-brand-50 border border-brand-200 p-6 text-center">
        <p className="font-semibold text-brand-800 mb-4">准备好养成第一个习惯了吗？</p>
        <Link
          href="/track"
          className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          免费体验 5 次打卡
        </Link>
      </div>
    </article>
  );
}
