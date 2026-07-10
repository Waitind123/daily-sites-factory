import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(
  { ...siteConfig, keywords: [...siteConfig.keywords] },
  {
    title: "CSRD Scope 3 员工通勤怎么算 — 第 7 类排放完整指南",
    description:
      "手把手教你收集员工通勤数据、计算 Scope 3 Category 7 排放、满足 CSRD 2026 披露要求。含免费团队基线工具。",
  }
);

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        CSRD Scope 3 员工通勤怎么算？第 7 类排放完整指南
      </h1>
      <p className="text-muted not-prose mb-8">更新于 2026 年 7 月 · 阅读约 12 分钟</p>

      <p>
        2026 年，欧盟 CSRD（Corporate Sustainability Reporting Directive）进入全面执行阶段。
        对许多中小企业来说，最紧迫的 Scope 3 子类不是复杂的供应链，而是<strong>员工通勤（Category 7）</strong>。
        每位员工的通勤距离、交通方式、到岗天数都不同 — 用 Excel 汇总 50 人已经是噩梦。
        Watershed 报价 €4 万/年，Footprint Intelligence 按人头收费 — 预算有限的 CSO 和 HR 需要更轻量的方案。
        本指南基于 GHG Protocol，手把手教你建立 CSRD 合规的员工通勤排放基线。
      </p>

      <h2>一、为什么 Category 7 是 CSRD 的「低垂果实」？</h2>
      <p>
        Scope 3 共有 15 个子类，但 Category 7（Employee Commuting）和 Category 7 相关的居家办公排放，
        是大多数办公室型 SaaS 和服务企业<strong>最容易量化</strong>的部分。
        你不需要追踪供应商的工厂排放，只需要问员工：你怎么通勤？每周来几天？
      </p>
      <p>
        根据 DEFRA 2024 排放因子，一位每天开车 25 公里、每周到岗 3 天的员工，年度通勤排放约 3,200 kg CO₂e。
        50 人团队就是 160 吨 — 占许多中小企业 Scope 3 总量的 20–40%。
        CSRD 不要求完美精度，但要求<strong>方法论透明 + 数据可追溯</strong>。
      </p>

      <h2>二、GHG Protocol Category 7 计算公式</h2>
      <p>
        基本公式：
        <strong>年度通勤排放 = 单程距离 × 2 × 年到岗天数 × 交通排放因子</strong>
      </p>
      <p>常用交通方式排放因子（kg CO₂e/km）：</p>
      <ul>
        <li>私家车：0.21</li>
        <li>公交：0.089</li>
        <li>地铁：0.041</li>
        <li>电动车：0.005</li>
        <li>步行/骑行：0</li>
      </ul>
      <p>
        远程办公日需额外计入居家能耗（EcoAct 方法论）：约 1.0–1.5 kWh/天 × 电网排放因子 × 远程天数。
        我们的{" "}
        <Link href="/survey" className="text-brand-500 hover:underline">
          团队通勤调研工具
        </Link>{" "}
        自动双向计算，非会员可免费体验 5 次团队基线。
      </p>

      <h2>三、员工调研：收集数据的三种方式</h2>
      <ol>
        <li>
          <strong>全员问卷</strong>：Google Forms 或 Typeform 收集通勤距离和交通方式。
          响应率通常 60–80%，需 2–3 周跟进。
        </li>
        <li>
          <strong>HR 系统估算</strong>：用办公地址 + 员工邮编估算平均通勤距离。
          精度较低但速度快，适合首次基线。
        </li>
        <li>
          <strong>混合采样</strong>：对 20% 员工做精确调研，其余用部门平均值 extrapolate。
          GHG Protocol 允许 activity-based 和 spend-based 混合方法。
        </li>
      </ol>
      <p>
        无论哪种方式，关键是记录<strong>方法论选择</strong>和<strong>数据日期</strong>，
        以便审计师追溯。CSRD 要求披露数据收集方法和局限性。
      </p>

      <h2>四、团队汇总：从个人到 Cat.7 总量</h2>
      <p>
        收集完员工级数据后，需要：
      </p>
      <ul>
        <li>汇总团队总 kg CO₂e</li>
        <li>计算人均排放</li>
        <li>按交通方式拆分（私家车占比高 → 推广拼车或公交补贴）</li>
        <li>对比「当前混合」vs「全勤」vs「完全远程」三场景</li>
      </ul>
      <p>
        三场景对比是 CSRD 报告的核心叙事：「我们的混合办公政策相比全勤减排 X%，
        相当于 Y 棵树/年的碳吸收量。」这种数据支撑 HR 政策讨论和董事会 ESG 汇报。
      </p>

      <h2>五、CSRD vs VSME：中小企业该选哪个？</h2>
      <p>
        CSRD 适用于大型企业和在欧盟上市的子公司。VSME（Voluntary SME Standard）是 2024 年发布的
        中小企业自愿标准，字段更少、成本更低。许多 50–250 人的欧洲 SaaS 公司选择先按 VSME 披露，
        再逐步升级到 CSRD 完整版。
      </p>
      <p>
        无论哪个标准，Category 7 的计算逻辑相同。区别在于报告格式和审计要求。
        我们的工具导出 CSV/PDF，包含 GHG Protocol 方法论说明，可直接嵌入两种格式的报告。
      </p>

      <h2>六、Watershed 太贵？中小企业替代方案对比</h2>
      <table>
        <thead>
          <tr>
            <th>平台</th>
            <th>定位</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Watershed</td>
            <td>Fortune 500 全 Scope 1–3</td>
            <td>$50k+/年</td>
          </tr>
          <tr>
            <td>Footprint Intelligence</td>
            <td>中大型企业 CSRD</td>
            <td>按人头报价</td>
          </tr>
          <tr>
            <td>CarbonTool</td>
            <td>SME 全 Scope</td>
            <td>€200+/月</td>
          </tr>
          <tr>
            <td>Scope3 Commute Pulse</td>
            <td>仅 Cat.7 通勤+远程</td>
            <td>$29/月</td>
          </tr>
        </tbody>
      </table>
      <p>
        如果你只需要 Category 7 基线（而非全供应链），专用工具比 enterprise 平台划算 100 倍。
        等公司业务增长、Scope 3 范围扩大后，再迁移到全功能平台也不迟。
      </p>

      <h2>七、实操步骤：今天就开始</h2>
      <ol>
        <li>
          <strong>确定范围</strong>：全职员工 + 长期合同工，不含外包和实习生（除非 CSRD 要求包含）
        </li>
        <li>
          <strong>收集数据</strong>：在{" "}
          <Link href="/survey" className="text-brand-500 hover:underline">
            团队调研页
          </Link>{" "}
          逐人输入或批量导入
        </li>
        <li>
          <strong>生成基线</strong>：获取 Cat.7 总量、交通拆分、三场景对比
        </li>
        <li>
          <strong>导出报告</strong>：会员{" "}
          <Link href="/join" className="text-brand-500 hover:underline">
            导出 CSV/PDF
          </Link>{" "}
          嵌入 CSRD/VSME 申报
        </li>
        <li>
          <strong>设定目标</strong>：基于基线设定下年度减排目标（如推广远程 1 天/周 → 减排 8%）
        </li>
      </ol>

      <h2>八、常见问题</h2>
      <h3>居家办公算不算 Category 7？</h3>
      <p>
        GHG Protocol 将员工居家办公能耗归入 Category 7 相关排放（部分指南归入 Category 3 间接能源）。
        关键是<strong>一致性</strong>：选定一种分类方法并在报告中说明。
      </p>
      <h3>数据精度够审计吗？</h3>
      <p>
        CSRD 有限保证（limited assurance）审计不要求第三方验证每个员工的通勤距离。
        但要求方法论符合 GHG Protocol，且数据来源可追溯。我们的工具在导出中包含方法论说明和计算明细。
      </p>

      <div className="not-prose mt-12 rounded-2xl bg-brand-600 text-white p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">15 分钟出团队 Cat.7 基线</h2>
        <p className="text-brand-100 mb-6">免费体验 5 次 · 会员 $29/月无限基线 + CSRD 导出</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/survey"
            className="inline-block bg-surface text-brand-500 px-6 py-3 rounded-xl font-semibold hover:bg-brand-600/10 transition-colors"
          >
            开始团队调研
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
