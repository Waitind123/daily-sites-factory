import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getSiteConfig } from "@/lib/seo";
import { getLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const cfg = getSiteConfig(locale);
  return buildSiteMetadata(
    { ...cfg, keywords: [...cfg.keywords] },
    locale === "zh"
      ? {
          title: "虚拟图书馆共工指南 — 远程孤独与安静专注",
          description:
            "远程工作者独自办公孤独？本文介绍虚拟图书馆共工、body doubling 原理，以及 5 个在安静阅览室提升专注力的技巧。",
        }
      : {
          title: "Virtual Library Cowork Guide — Beat Remote Loneliness in Silence",
          description:
            "Remote work feels lonely at home. Learn how virtual library coworking and body doubling help you focus — plus 5 practical tips.",
        }
  );
}

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        如何克服远程办公孤独感：虚拟图书馆共工完全指南
      </h1>
      <p className="text-muted not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 10 分钟
      </p>

      <p>
        2020 年之后，全球远程工作者数量激增。Buffer 的《State of Remote Work》报告显示，<strong>20% 的远程工作者将「孤独感」列为最大挑战</strong>，仅次于「无法下班」和「跨时区协作」。如果你在家办公时经常感到空虚、拖延、或者明明有很多事却提不起劲——你不是一个人。这篇文章帮你理解远程孤独的心理机制，并介绍一种被验证有效的解决方案：<strong>Body Doubling（身体加倍）</strong>。
      </p>

      <h2>一、远程办公孤独感：不只是「想找人聊天」</h2>
      <p>
        很多人把远程孤独误解为社交需求。其实它更深层的影响是<strong>专注力下降</strong>和<strong>执行力减弱</strong>。心理学研究发现，人类在他人存在时（即使不说话、不看对方），会自发提高任务投入度。这种现象叫做 Social Facilitation（社会促进效应）。
      </p>
      <p>
        在办公室里，同事敲击键盘的声音、偶尔走动的身影、茶水间的闲聊——这些「背景社交信号」在不知不觉中维持着你的工作状态。回到家，这些信号消失了，大脑进入一种「无人监督」模式，拖延和分心随之而来。
      </p>
      <p>远程孤独的典型表现：</p>
      <ul>
        <li><strong>启动困难</strong>：知道要做什么，但就是不想开始</li>
        <li><strong>中途分心</strong>：写 10 分钟代码就去刷手机</li>
        <li><strong>效率波动</strong>：有些天状态极好，有些天完全废掉</li>
        <li><strong>情绪低谷</strong>：下午 3 点突然感到空虚和焦虑</li>
        <li><strong>社交饥渴</strong>：频繁打开 Slack/微信，但聊完更空虚</li>
      </ul>

      <h2>二、什么是 Body Doubling？</h2>
      <p>
        Body Doubling 源自 ADHD 社区，后来被远程工作者广泛采用。核心概念很简单：<strong>在他人在场的情况下做自己的事</strong>。对方不需要帮你、不需要看你、甚至不需要认识你——仅仅是「有人在」这个事实，就能激活你的执行功能。
      </p>
      <p>
        常见的 Body Doubling 形式：
      </p>
      <ul>
        <li><strong>实体共工</strong>：去咖啡馆、图书馆、联合办公空间</li>
        <li><strong>视频共工</strong>：Focusmate、Flow Club 等 1v1 或小组视频</li>
        <li><strong>虚拟共工</strong>：看到其他人在线专注的状态，无需视频</li>
        <li><strong>直播共工</strong>：在 Twitch/YouTube 上「Study With Me」</li>
      </ul>
      <p>
        每种形式各有利弊。咖啡馆有噪音和通勤成本；视频共工需要预约、开摄像头、有社交压力；直播共工是单向的，缺乏互动感。虚拟共工室试图取各方案之长：<strong>零社交压力 + 即时可用 + 环境氛围</strong>。
      </p>

      <h2>三、虚拟共工室如何工作？</h2>
      <p>
        我们的{" "}
        <Link href="/room" className="text-brand-500 hover:underline">
          虚拟图书馆阅览室
        </Link>{" "}
        提供四种共工模式：
      </p>
      <ul>
        <li><strong>深度专注（90 分钟）</strong>：适合写代码、写文章等需要长时间沉浸的任务</li>
        <li><strong>番茄钟（25 分钟）</strong>：经典 Pomodoro 工作法，专注 + 5 分钟休息</li>
        <li><strong>创意发散（45 分钟）</strong>：适合设计、头脑风暴等创意工作</li>
        <li><strong>晨间共工（60 分钟）</strong>：和全球远程工作者一起开启一天</li>
      </ul>
      <p>
        进入共工室后，你会看到全球其他远程工作者的在线状态（头像 + 名字 + 正在做什么），同时可以选择环境音（咖啡馆、雨声、图书馆、森林）营造专注氛围。没有聊天功能、没有视频、没有通知——只有安静的陪伴。
      </p>
      <p>
        非会员可免费体验 5 次共工会话。体验后如果觉得有效，{" "}
        <Link href="/join" className="text-brand-500 hover:underline">
          $9.9/月
        </Link>{" "}
        即可无限使用。比 Focusmate 的 $5/周（1v1 视频）便宜，比咖啡馆日票更安静。
      </p>

      <h2>四、5 个克服远程孤独的实操技巧</h2>
      <ol>
        <li>
          <strong>固定开工仪式</strong>：每天同一时间进入共工室，大脑会形成「现在是工作模式」的条件反射。建议选晨间共工模式，和全球时区的工作者同步开工。
        </li>
        <li>
          <strong>环境音比音乐更有效</strong>：研究表明，带歌词的音乐会占用语言处理脑区，降低认知任务表现。环境音（白噪音、自然声）不干扰语言中枢，更适合编程、写作等任务。
        </li>
        <li>
          <strong>番茄钟 + Body Doubling 组合</strong>：25 分钟专注 + 5 分钟休息的循环，配合虚拟同伴在线，是 ADHD 社区验证过最高效的组合。我们的番茄钟模式内置自动休息提醒。
        </li>
        <li>
          <strong>每周至少 2 次线下社交</strong>：虚拟共工解决的是「工作时的孤独」，但不能替代真实社交。每周安排 1-2 次线下见面（联合办公、Meetup、朋友咖啡），平衡线上陪伴和线下连接。
        </li>
        <li>
          <strong>追踪专注数据</strong>：记录每天专注时长，看到进步曲线会带来正向反馈。会员可查看每日/每周专注统计，把抽象的「感觉更专注了」变成具体数字。
        </li>
      </ol>

      <h2>五、虚拟共工 vs 其他方案对比</h2>
      <table>
        <thead>
          <tr>
            <th>方案</th>
            <th>价格</th>
            <th>社交压力</th>
            <th>即时可用</th>
            <th>适合人群</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>咖啡馆</td>
            <td>$3-5/杯</td>
            <td>低</td>
            <td>需出门</td>
            <td>喜欢线下氛围者</td>
          </tr>
          <tr>
            <td>Focusmate</td>
            <td>$5/周</td>
            <td>高（视频）</td>
            <td>需预约</td>
            <td>需要 accountability 者</td>
          </tr>
          <tr>
            <td>Flow Club</td>
            <td>$40/月</td>
            <td>中（小组视频）</td>
            <td>固定时段</td>
            <td>喜欢小组能量者</td>
          </tr>
          <tr>
            <td>远程共工室</td>
            <td>$9.9/月</td>
            <td>零</td>
            <td>即时</td>
            <td>独立开发者、写作者、远程工程师</td>
          </tr>
        </tbody>
      </table>

      <h2>六、谁最适合虚拟共工？</h2>
      <p>
        根据我们的用户数据，以下人群反馈最好：
      </p>
      <ul>
        <li><strong>独立开发者</strong>：独自写代码，缺乏「同事在身边」的感觉</li>
        <li><strong>自由撰稿人/博主</strong>：长时间写作需要持续专注，容易走神</li>
        <li><strong>远程全职员工</strong>：公司不要求开摄像头，但独自在家效率低</li>
        <li><strong>ADHD 人群</strong>：Body Doubling 是 ADHD 社区公认的有效策略</li>
        <li><strong>备考学生</strong>：需要长时间学习但不想去图书馆</li>
      </ul>

      <h2>七、开始你的第一次虚拟共工</h2>
      <p>
        不需要注册复杂账号，不需要下载 App，打开浏览器就能开始。建议第一次选<strong>番茄钟模式 + 雨声环境音</strong>，25 分钟后你会感受到差异。
      </p>
      <p>
        如果 5 次免费体验后你觉得有价值，$9.9/月解锁无限会话。没有年付绑架，没有功能分级——一个价格，全部功能。这就是 levelsio 风格的定价：简单、直接、第一天就收费。
      </p>

      <div className="not-prose mt-10 rounded-2xl bg-brand-600/10 border border-brand-200 p-8 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">准备好告别远程孤独了吗？</h3>
        <p className="text-muted mb-6">免费体验 5 次共工会话，感受 Body Doubling 的力量</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/room"
            className="inline-block rounded-xl bg-brand-600 px-8 py-3 text-white font-semibold hover:bg-brand-700 transition-colors"
          >
            进入共工室
          </Link>
          <Link
            href="/join"
            className="inline-block rounded-xl border border-brand-300 px-8 py-3 text-brand-500 font-semibold hover:bg-brand-100 transition-colors"
          >
            订阅 $9.9/月
          </Link>
        </div>
      </div>
    </article>
  );
}
