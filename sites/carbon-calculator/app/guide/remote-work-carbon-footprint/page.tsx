import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(
  { ...siteConfig, keywords: [...siteConfig.keywords] },
  {
  title: "远程办公碳足迹怎么算 — 混合办公 ESG 基线完整指南",
  description:
    "手把手教你计算远程 vs 通勤碳排放：GHG Protocol 方法论、Scope 3 披露要点、混合办公政策数据支撑。含免费计算器。",
});

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        远程办公碳足迹怎么算？混合办公 ESG 基线完整指南
      </h1>
      <p className="text-muted not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 10 分钟
      </p>

      <p>
        疫情之后，混合办公成为常态。但一个问题很少被量化：<strong>员工少通勤几天，到底减少了多少碳排放？</strong>
        对于 HR 制定到岗政策、CSO 编制 ESG 报告、或参与政府招标的团队来说，这个问题已经从「nice to have」变成了「must have」。
        本指南基于 GHG Protocol 和 EcoAct 居家办公方法论，手把手教你建立远程办公碳足迹基线。
      </p>

      <h2>一、为什么混合办公碳排被低估了？</h2>
      <p>
        大多数企业的碳排放报告只统计 Scope 1（直接燃烧）和 Scope 2（外购电力），Scope 3（价值链排放）往往被忽略。
        但远程办公普及后，<strong>员工通勤和居家办公能耗</strong>已成为 Scope 3 中占比显著的部分。
      </p>
      <p>
        英国环境部（DEFRA）数据显示，一次 15 公里的私家车通勤往返，每年产生约 1,600 kg CO₂e。
        如果 100 名员工每周少来 2 天，年度减排量超过 64 吨——相当于 3,000 棵树的碳吸收量。
      </p>
      <p>常见误区：</p>
      <ul>
        <li><strong>只算通勤，不算居家能耗</strong>：远程办公会增加家庭用电（笔记本、照明、空调），必须双向计算</li>
        <li><strong>用全国平均值代替个人数据</strong>：交通方式和通勤距离差异巨大，需要员工级或团队级参数</li>
        <li><strong>忽略办公室空置成本</strong>：混合办公下，办公室 HVAC 和照明仍按满员运行，分摊到到岗员工身上</li>
        <li><strong>报告格式不符合招标要求</strong>：政府 tender 和 BCorp 认证需要特定格式的 Carbon Reduction Plan</li>
      </ul>

      <h2>二、GHG Protocol 通勤排放计算方法</h2>
      <p>
        全球温室气体协议（GHG Protocol）将员工通勤归入 Scope 3 Category 7（Employee Commuting）。
        基本公式为：
      </p>
      <p>
        <strong>年度通勤排放 (kg CO₂e) = 单程距离 × 2 × 年到岗天数 × 排放因子</strong>
      </p>
      <p>常用交通方式排放因子（kg CO₂e/km）：</p>
      <ul>
        <li>私家车（汽油）：0.21</li>
        <li>公交：0.089</li>
        <li>地铁/轻轨：0.041</li>
        <li>电动车：0.005（含电网排放）</li>
        <li>步行/骑行：0</li>
      </ul>
      <p>
        排放因子因国家电网结构而异。中国电网平均约 0.57 kg CO₂/kWh，欧盟约 0.28，美国约 0.39。
        我们的{" "}
        <Link href="/calculate" className="text-brand-500 hover:underline">
          碳足迹计算器
        </Link>{" "}
        支持四个电网区域，非会员可免费体验 5 次。
      </p>

      <h2>三、居家办公能耗：EcoAct 方法论</h2>
      <p>
        EcoAct 2020 年发布的《Homeworking Emissions Whitepaper》是行业参考标准。
        核心思路：将员工家庭能耗按「办公时间占比」分摊到工作相关排放。
      </p>
      <p>典型居家办公日能耗包括：</p>
      <ul>
        <li>笔记本电脑：0.05 kWh/小时 × 8 小时 = 0.4 kWh</li>
        <li>照明：0.01 kWh/小时 × 8 小时 = 0.08 kWh</li>
        <li>空调/暖气分摊：0.5–1.0 kWh（取决于季节和地区）</li>
        <li>合计约 1.0–1.5 kWh/天</li>
      </ul>
      <p>
        乘以电网排放因子和远程工作天数，即可得到居家办公年度排放。
        注意：这是<strong>增量排放</strong>——如果员工本来白天就不在家，居家办公确实增加了家庭能耗；
        如果本来就在家（如全职远程），则全部计入。
      </p>

      <h2>四、三场景对比：为什么需要看全貌？</h2>
      <p>
        单一数字没有意义。有效的碳足迹分析需要对比三种场景：
      </p>
      <ol>
        <li><strong>全勤通勤</strong>：每周 5 天到岗，作为基准线（baseline）</li>
        <li><strong>当前混合</strong>：实际到岗天数，反映现状</li>
        <li><strong>完全远程</strong>：零通勤，全部居家，作为目标场景</li>
      </ol>
      <p>
        通过三场景对比，你可以回答管理层最关心的问题：「如果我们把到岗政策从每周 3 天改为 2 天，能减排多少？」
        这种数据驱动的政策讨论，比「远程办公更环保」的空洞口号有效 100 倍。
      </p>
      <p>
        使用我们的计算器，输入通勤距离和到岗天数后，三场景结果和减排百分比会自动生成。
        会员可{" "}
        <Link href="/join" className="text-brand-500 hover:underline">
          导出 PDF/CSV 报告
        </Link>{" "}
        ，直接嵌入 ESG 披露文件。
      </p>

      <h2>五、Scope 3 披露：中小团队也能做</h2>
      <p>
        你可能觉得 ESG 报告是大公司的事。但 2024 年后，趋势明显：
      </p>
      <ul>
        <li>欧盟 CSRD 要求供应链上的中小企业提供排放数据</li>
        <li>中国政府采购 increasingly 要求 Carbon Reduction Plan</li>
        <li>BCorp 认证需要 Scope 3 基线</li>
        <li>大型客户（如 Apple、Microsoft）向供应商发送 ESG 问卷</li>
      </ul>
      <p>
        对于 50–500 人的团队，找 McKinsey 或 Big 4 做 Scope 3 基线，费用 5–50 万。
        但通勤和居家办公排放的计算逻辑并不复杂——关键是<strong>方法论正确 + 数据可审计</strong>。
        一个 $29/月的 SaaS 工具，10 分钟出基线，对于预算有限的 HR 和 CSO 来说是合理选择。
      </p>

      <h2>六、实操步骤：今天就开始</h2>
      <ol>
        <li>
          <strong>收集参数</strong>：团队平均通勤距离（可从 HR 系统或问卷获取）、当前到岗政策、主要交通方式
        </li>
        <li>
          <strong>运行计算</strong>：在{" "}
          <Link href="/calculate" className="text-brand-500 hover:underline">
            计算器
          </Link>{" "}
          输入参数，获取三场景对比
        </li>
        <li>
          <strong>模拟政策</strong>：调整到岗天数 slider，看不同政策的减排效果
        </li>
        <li>
          <strong>导出报告</strong>：会员导出 PDF，加入公司 ESG 报告或招标文件
        </li>
        <li>
          <strong>定期更新</strong>：每季度重新计算，跟踪政策变化的效果
        </li>
      </ol>

      <h2>七、常见问题</h2>
      <h3>远程办公真的更环保吗？</h3>
      <p>
        不一定。如果员工从地铁通勤改为在家开足空调，居家能耗可能抵消通勤减排。
        这就是为什么必须<strong>双向计算</strong>——我们的计算器同时计入通勤和居家能耗，给出净结果。
      </p>
      <h3>数据精度够用于正式 ESG 报告吗？</h3>
      <p>
        我们的计算器基于 GHG Protocol 和 EcoAct 方法论，排放因子来自 DEFRA 和 IEA 公开数据。
        对于 Scope 3 Category 7 的基线估算完全够用。正式第三方审计（assurance）需要更细粒度的员工级数据，
        会员的团队批量功能支持逐人输入。
      </p>
      <h3>和 Watershed、Persefoni 比有什么区别？</h3>
      <p>
        那些平台面向 $1B+ 企业，年费 $50 万起。我们聚焦<strong>通勤 + 居家办公</strong>这一个 Scope 3 子类，
        $29/月，5 分钟出结果。不是替代 enterprise ESG 平台，而是让中小团队也能起步。
      </p>

      <div className="not-prose mt-12 rounded-2xl bg-brand-600 text-white p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">5 分钟出基线，不用等咨询报价</h2>
        <p className="text-brand-100 mb-6">
          免费体验 5 次计算 · 会员 $29/月无限使用 + 报告导出
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/calculate"
            className="inline-block bg-surface text-brand-500 px-6 py-3 rounded-xl font-semibold hover:bg-brand-600/10 transition-colors"
          >
            开始计算
          </Link>
          <Link
            href="/join"
            className="inline-block border border-white/40 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
          >
            订阅 $29/月
          </Link>
        </div>
      </div>
    </article>
  );
}
