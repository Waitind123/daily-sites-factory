import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(siteConfig, {
  title: "中国 indie 线下聚会组织指南 — 从 0 到 50 人 RSVP 管理",
  description:
    "手把手教你在上海、北京、深圳组织 indie hacker 线下聚会：场地选择、RSVP 管理、候补队列、no-show 应对。比 Meetup.com 便宜 10 倍的轻量方案。",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 not-prose mb-4">
        中国 indie 线下聚会组织指南：从 0 到 50 人 RSVP 管理
      </h1>
      <p className="text-stone-500 not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 15 分钟
      </p>

      <p>
        独立开发者社区最被低估的增长渠道是<strong>线下聚会</strong>。Product Hunt 上爆的产品，很多最初用户来自创始人在本地组织的 Coffee Chat 或 Build in Public 夜谈。但组织者的真实痛点是：Meetup.com 一年 $170、Google Forms 管不了候补、微信群 RSVP 一团糟。
      </p>
      <p>
        这篇指南帮你在上海、北京、深圳等城市组织第一场 indie 线下聚会，控制成本在 ¥500/月以内，同时用轻量工具管理 RSVP 和候补队列。
      </p>

      <h2>一、为什么 indie 组织者需要自己的 RSVP 工具？</h2>
      <p>
        Reddit r/SaaS 和 Indie Hackers 上最常见的组织者抱怨：
      </p>
      <ul>
        <li><strong>Meetup.com 太贵</strong>：Pro 订阅一年 $170+，对无收入的社区组织者是负担</li>
        <li><strong>Google Forms 太笨</strong>：满员后不会自动关闭，候补要手动管表格</li>
        <li><strong>微信群 RSVP 混乱</strong>：「+1」「我也来」刷屏，无法追踪出席率</li>
        <li><strong>no-show 率高</strong>：免费 RSVP 无约束，30-40% 的人不来</li>
      </ul>
      <p>
        一个社区组织者在 2026 年的博客中写道：他运营 3 个 Meetup 群组，每年平台订阅费 ₹21,000（约 $210），还没算场地和物料。他真正需要的是「一个平台管 RSVP + 候补 + 提醒」，而不是 Meetup + Zoom + WhatsApp + Telegram 六件套。
      </p>

      <h2>二、第一场聚会：选城市、定格式、找场地</h2>

      <h3>城市选择</h3>
      <p>
        中国 indie 社区最活跃的城市（2026 年数据）：
      </p>
      <table>
        <thead>
          <tr>
            <th>城市</th>
            <th>适合格式</th>
            <th>典型容量</th>
            <th>场地成本</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>上海</td>
            <td>Indie Coffee Chat</td>
            <td>15-25 人</td>
            <td>WeWork 日票 ¥0-150</td>
          </tr>
          <tr>
            <td>北京</td>
            <td>Build in Public 夜谈</td>
            <td>20-40 人</td>
            <td>创业大街免费场地</td>
          </tr>
          <tr>
            <td>深圳</td>
            <td>SaaS Founders 午餐</td>
            <td>8-15 人</td>
            <td>科技园 Co-working</td>
          </tr>
          <tr>
            <td>杭州</td>
            <td>设计 Critique</td>
            <td>10-20 人</td>
            <td>咖啡馆包场</td>
          </tr>
          <tr>
            <td>成都</td>
            <td>远程共工</td>
            <td>15-30 人</td>
            <td>太古里咖啡馆</td>
          </tr>
        </tbody>
      </table>

      <h3>活动格式建议</h3>
      <p>
        第一场聚会建议选<strong>低门槛、高互动</strong>的格式：
      </p>
      <ul>
        <li><strong>Coffee Chat（2-3 小时）</strong>：自我介绍 + 自由交流，最适合冷启动</li>
        <li><strong>Build in Public 夜谈（2 小时）</strong>：每人 5 分钟 demo，需要投影设备</li>
        <li><strong>午餐会（1.5 小时）</strong>：小圈子深度交流，建议 8-12 人上限</li>
      </ul>
      <p>
        避免第一场就搞大型分享会或 hackathon——你需要先验证「有人愿意来」，再扩大规模。
      </p>

      <h3>场地获取</h3>
      <p>
        免费/低成本场地渠道：
      </p>
      <ul>
        <li>WeWork / 氪空间：联系社区经理，很多愿意免费提供活动场地换曝光</li>
        <li>创业大街 / 孵化器：北京中关村、深圳南山有大量免费活动空间</li>
        <li>咖啡馆：非高峰时段（工作日下午）谈包场，¥200-500/场</li>
        <li>联合办公日票：参会者自购日票，组织者零成本</li>
      </ul>

      <h2>三、RSVP 管理：容量、候补、提醒</h2>

      <h3>设置合理容量</h3>
      <p>
        容量设置的核心原则：<strong>场地实际容量 × 0.9 = RSVP 上限</strong>。预留 10% buffer 应对 no-show。例如 20 人场地开放 18 个确认名额 + 5-8 个候补。
      </p>
      <p>
        使用专业 RSVP 工具（如 <Link href="/events" className="text-brand-600 hover:underline">Meetup 组织助手</Link>）的好处：
      </p>
      <ul>
        <li>满员自动关闭 RSVP，不用半夜检查 Google Forms</li>
        <li>候补队列自动排序，取消后自动通知下一位</li>
        <li>记录历史出席率，优先邀请可靠参与者</li>
      </ul>

      <h3>降低 no-show 率</h3>
      <p>
        免费 RSVP 的 no-show 率通常在 20-40%。以下策略可降至 10-15%：
      </p>
      <ol>
        <li><strong>T-24h 提醒邮件</strong>：活动前 24 小时发提醒，附取消链接</li>
        <li><strong>T-2h 二次提醒</strong>：活动当天再发一次，确认出席</li>
        <li><strong>小额押金</strong>：¥20 押金，到场退还（适合全天共工活动）</li>
        <li><strong>出席率排序</strong>：连续 2 次 no-show 的用户下次进入审核</li>
        <li><strong>RSVP 截止时间</strong>：活动前 6 小时关闭 RSVP，减少临时取消</li>
      </ol>

      <h3>候补队列最佳实践</h3>
      <p>
        候补管理是组织者最耗时的环节。手动流程：
      </p>
      <ol>
        <li>有人取消 → 查表格找候补 #1 → 发微信/邮件通知</li>
        <li>候补 #1 未在 24h 内确认 → 通知候补 #2</li>
        <li>重复直到名额填满或候补耗尽</li>
      </ol>
      <p>
        这个流程每场活动可能花 1-2 小时。自动化工具的价值就在这里：取消即触发通知，24h 超时自动顺延。
      </p>

      <h2>四、活动当天：签到与跟进</h2>
      <p>
        活动当天的 checklist：
      </p>
      <ul>
        <li>提前 30 分钟到场，测试 WiFi 和投影</li>
        <li>打开签到视图，到场即标记「已签到」</li>
        <li>记录 no-show，更新出席率数据</li>
        <li>拍合影发群（最好的社群运营素材）</li>
        <li>活动后 24h 内发感谢邮件 + 下次活动预告</li>
      </ul>
      <p>
        签到数据的价值远超「点名」——它帮你识别核心社区成员（出席率 80%+ 的人），这些人是你下次活动的种子用户和志愿者。
      </p>

      <h2>五、成本对比：Meetup.com vs 轻量工具</h2>
      <table>
        <thead>
          <tr>
            <th>方案</th>
            <th>月费</th>
            <th>候补管理</th>
            <th>签到视图</th>
            <th>提醒邮件</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Meetup.com Pro</td>
            <td>~$14/月</td>
            <td>基础</td>
            <td>无</td>
            <td>有限</td>
          </tr>
          <tr>
            <td>Google Forms</td>
            <td>免费</td>
            <td>手动</td>
            <td>无</td>
            <td>无</td>
          </tr>
          <tr>
            <td>Luma</td>
            <td>免费/Pro</td>
            <td>基础</td>
            <td>无</td>
            <td>有</td>
          </tr>
          <tr>
            <td>Meetup 组织助手</td>
            <td>$9.9/月</td>
            <td>自动</td>
            <td>有</td>
            <td>模板</td>
          </tr>
        </tbody>
      </table>
      <p>
        对大多数 indie 社区组织者（1-3 个周期性聚会），$9.9/月的轻量工具比 $170/年的 Meetup Pro 更划算，且专注 RSVP 核心需求。
      </p>

      <h2>六、从第一场到可持续社区</h2>
      <p>
        组织 3-5 场活动后，你会积累：
      </p>
      <ul>
        <li><strong>核心成员名单</strong>：出席率 80%+ 的 10-15 人</li>
        <li><strong>场地合作</strong>：2-3 个固定场地联系人</li>
        <li><strong>活动模板</strong>：可克隆的 RSVP 表单 + 提醒模板</li>
        <li><strong>社群渠道</strong>：微信群/Telegram 群 50-100 人</li>
      </ul>
      <p>
        这时候可以考虑：收小额会员费覆盖场地成本（¥29/月）、找本地 SaaS 公司赞助、或者把组织经验产品化。
      </p>

      <h2>七、立即开始</h2>
      <p>
        不要等「完美方案」再办第一场。levelsio 的路径是：本周末定场地 → 发 RSVP 链接 → 来几个人算几个。工具选最轻的，<Link href="/join" className="text-brand-600 hover:underline">$9.9/月</Link> 的 RSVP 管理比免费 Google Forms 省下的时间，第一场活动就值回票价。
      </p>
      <p>
        <Link href="/events" className="text-brand-600 hover:underline font-semibold">
          免费体验 5 次活动管理 →
        </Link>
      </p>
    </article>
  );
}
