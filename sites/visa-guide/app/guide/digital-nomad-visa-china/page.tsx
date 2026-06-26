import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getSiteConfig } from "@/lib/seo";

const guideConfig = getSiteConfig("zh");

export const metadata: Metadata = buildSiteMetadata(
  { ...guideConfig, keywords: [...guideConfig.keywords] },
  {
  title: "2026 中国护照数字游民签证完全指南 — 28 国对比",
  description:
    "中国护照持有者如何申请数字游民签证？葡萄牙 D8、泰国 DTV、西班牙、格鲁吉亚等国家门槛、材料清单、税务政策完整对比。",
  }
);

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">
        2026 中国护照数字游民签证完全指南：28 国远程工作签证对比
      </h1>
      <p className="text-muted not-prose mb-8">
        更新于 2026 年 6 月 · 阅读约 12 分钟
      </p>

      <p>
        2026 年，全球已有 <strong>60+ 个国家推出数字游民签证（Digital Nomad Visa）</strong>。对中国护照持有者来说，这意味着远程工作者可以合法长期居住在海外，而不再依赖 30–90 天的旅游签证「灰色操作」。
      </p>
      <p>
        但信息碎片化是最大痛点：Reddit 上厄瓜多尔签证的讨论和官方要求完全对不上，Facebook 群组里的「经验帖」往往过时两年。本文基于 2026 年 6 月最新政策，帮你系统理解数字游民签证的选择逻辑。
      </p>

      <h2>一、什么是数字游民签证？</h2>
      <p>
        数字游民签证是一种<strong>允许外国人在该国居住、同时为海外雇主或客户工作</strong>的居留许可。核心特征：
      </p>
      <ul>
        <li><strong>收入来源在境外</strong>：不能在当地公司全职就业</li>
        <li><strong>有最低收入门槛</strong>：通常 $900–$5,000/月不等</li>
        <li><strong>停留 6 个月到 5 年</strong>：部分可续签或转永居</li>
        <li><strong>税务优惠</strong>：多数国家对境外收入免税或低税</li>
      </ul>
      <p>
        与旅游签证的区别：旅游签证不允许工作（包括远程工作），长期停留可能面临遣返风险。DN 签证提供合法身份，可开银行账户、租房、购买保险。
      </p>

      <h2>二、中国护照申请 DN 签证的优势与挑战</h2>
      <h3>优势</h3>
      <ul>
        <li>中国护照免签/落地签国家增多，中转更方便</li>
        <li>远程工作收入（美元/欧元）在东南亚、拉美购买力极强</li>
        <li>华人社区在泰国、马来西亚、葡萄牙等地成熟</li>
      </ul>
      <h3>挑战</h3>
      <ul>
        <li>部分国家要求文件海牙认证（Apostille），中国尚未加入海牙公约，需双重认证</li>
        <li>无犯罪记录证明需到户籍所在地派出所开具</li>
        <li>部分欧洲国家对非欧盟申请者审批更严格</li>
      </ul>

      <h2>三、2026 年最值得关注的 6 个 DN 签证</h2>

      <h3>1. 泰国 DTV（目的地签证）— 性价比之王</h3>
      <p>
        <strong>门槛</strong>：存款 ≥ ฿500,000（约 $14,000）或月收入 ≥ $16,000<br />
        <strong>时长</strong>：5 年（每 180 天离境或报到）<br />
        <strong>税务</strong>：外国收入免税<br />
        <strong>为什么推荐</strong>：清迈是全球最大的数字游民聚集地，月租公寓 $300–500，签证审批 7–14 天。华人社区成熟，中文服务便利。
      </p>

      <h3>2. 葡萄牙 D8 — 欧盟永居路径</h3>
      <p>
        <strong>门槛</strong>：月收入 ≥ €3,280（约 $3,480）<br />
        <strong>时长</strong>：2 年，可续签<br />
        <strong>税务</strong>：NHR 税收优惠已改革，需单独评估<br />
        <strong>为什么推荐</strong>：5 年永居、申根区自由通行。里斯本/波尔图华人社区活跃。是全球华人申请最多的 DN 签证之一。
      </p>

      <h3>3. 西班牙远程工作者签证 — 最低欧盟门槛</h3>
      <p>
        <strong>门槛</strong>：月收入 ≥ €2,600（约 $2,760）<br />
        <strong>时长</strong>：1 年，最长 5 年<br />
        <strong>税务</strong>：183 天以下通常不征税<br />
        <strong>为什么推荐</strong>：欧盟最低收入门槛之一。巴塞罗那和瓦伦西亚数字游民社区活跃，生活成本低于北欧。
      </p>

      <h3>4. 格鲁吉亚 Remotely from Georgia — 最快最便宜</h3>
      <p>
        <strong>门槛</strong>：月收入 ≥ $2,000<br />
        <strong>时长</strong>：1 年<br />
        <strong>税务</strong>：年停留 &lt;183 天免税<br />
        <strong>为什么推荐</strong>：完全在线申请，无需到场。第比利斯生活成本极低，IT 社区快速成长。
      </p>

      <h3>5. 哥伦比亚 V 签证 — 全球最低门槛</h3>
      <p>
        <strong>门槛</strong>：月收入 ≥ $900<br />
        <strong>时长</strong>：2 年<br />
        <strong>税务</strong>：外国收入通常免税<br />
        <strong>为什么推荐</strong>：麦德林数字游民社区庞大，气候宜人，拉美时区覆盖全美客户。
      </p>

      <h3>6. 阿联酋迪拜 Virtual Working — 零税 + 最快审批</h3>
      <p>
        <strong>门槛</strong>：月收入 ≥ $5,000<br />
        <strong>时长</strong>：1 年<br />
        <strong>税务</strong>：零个人所得税<br />
        <strong>为什么推荐</strong>：5–7 天出签，全球最快。适合高收入远程工作者。
      </p>

      <h2>四、如何选择：决策框架</h2>
      <p>用 4 个问题快速筛选：</p>
      <ol>
        <li><strong>预算多少？</strong> $900/月（哥伦比亚）到 $5,000/月（迪拜）</li>
        <li><strong>要不要申根通行？</strong> 葡萄牙、西班牙、爱沙尼亚 = 是</li>
        <li><strong>要不要永居路径？</strong> 葡萄牙 5 年、西班牙 5 年、墨西哥 4 年</li>
        <li><strong>生活成本？</strong> 东南亚 &lt; 拉美 &lt; 南欧 &lt; 北欧/迪拜</li>
      </ol>

      <table>
        <thead>
          <tr>
            <th>国家</th>
            <th>月收入门槛</th>
            <th>时长</th>
            <th>申根</th>
            <th>永居</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>哥伦比亚</td><td>$900</td><td>2 年</td><td>否</td><td>否</td></tr>
          <tr><td>格鲁吉亚</td><td>$2,000</td><td>1 年</td><td>否</td><td>否</td></tr>
          <tr><td>西班牙</td><td>$2,760</td><td>1–5 年</td><td>是</td><td>是</td></tr>
          <tr><td>葡萄牙</td><td>$3,480</td><td>2 年</td><td>是</td><td>是</td></tr>
          <tr><td>泰国 DTV</td><td>$14,000 存款</td><td>5 年</td><td>否</td><td>否</td></tr>
          <tr><td>阿联酋</td><td>$5,000</td><td>1 年</td><td>否</td><td>否</td></tr>
        </tbody>
      </table>

      <h2>五、申请材料通用清单</h2>
      <p>无论哪个国家，以下材料几乎都需要：</p>
      <ul>
        <li><strong>护照</strong>：有效期 ≥ 12 个月，空白页 ≥ 2 页</li>
        <li><strong>收入证明</strong>：工资单 + 银行流水（连续 3–6 个月）</li>
        <li><strong>远程工作合同</strong>：注明可远程、雇主国别、职位</li>
        <li><strong>健康保险</strong>：覆盖目的地国、保额通常 ≥ €30,000</li>
        <li><strong>无犯罪记录</strong>：户籍所在地派出所 → 公证 → 双认证</li>
        <li><strong>住宿证明</strong>：租房合同或酒店预订</li>
      </ul>
      <p>
        <strong>常见踩坑</strong>：个人银行流水显示 freelance 收入 ≠ 被所有国家接受。厄瓜多尔、葡萄牙等国要求正式雇佣合同或注册公司。务必查阅各国具体要求，不要只看 Reddit 经验帖。
      </p>

      <h2>六、税务注意事项</h2>
      <p>
        数字游民签证不等于免税。关键规则：
      </p>
      <ul>
        <li><strong>183 天规则</strong>：一年内居住超过 183 天，多数国家视你为税务居民</li>
        <li><strong>领土原则</strong>：哥斯达黎加、克罗地亚等只对本国内收入征税</li>
        <li><strong>零税天堂</strong>：阿联酋、巴巴多斯等无个人所得税</li>
        <li><strong>中国税务</strong>：中国税务居民需就全球收入纳税。长期海外居住可能触发「非居民」认定，建议咨询税务师</li>
      </ul>

      <h2>七、申请时间线建议</h2>
      <p>以葡萄牙 D8 为例的合理时间线：</p>
      <ol>
        <li><strong>T-90 天</strong>：确定目标国，评估收入是否达标</li>
        <li><strong>T-60 天</strong>：开具无犯罪记录、办理公证认证</li>
        <li><strong>T-45 天</strong>：申请目的地税号（如葡萄牙 NIF）、开银行账户</li>
        <li><strong>T-30 天</strong>：购买保险、签署租房合同</li>
        <li><strong>T-14 天</strong>：提交签证申请</li>
        <li><strong>T+0</strong>：获批，安排行程</li>
      </ol>

      <h2>八、下一步行动</h2>
      <p>
        签证政策每月都在变化。2026 年印尼将巴厘岛签证延长至 5 年，克罗地亚即将加入申根区，泰国 DTV 细则仍在调整。
      </p>
      <p>
        我们的 <Link href="/visas">签证数据库</Link> 覆盖 28+ 国最新政策，含收入门槛、材料清单、税务速查和实操建议。免费体验 5 次详情查询，之后 $9.9/月无限查阅。
      </p>

      <div className="not-prose mt-10 rounded-2xl bg-brand-600/10 border border-brand-200 p-6 text-center">
        <p className="font-semibold text-foreground mb-2">准备好选签证了？</p>
        <p className="text-sm text-muted mb-4">
          浏览 28 国对比数据库，一张表看清收入门槛和材料清单
        </p>
        <Link
          href="/visas"
          className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          免费体验 5 次查询
        </Link>
        <p className="text-xs text-muted mt-3">
          或 <Link href="/join" className="text-brand-500 hover:underline">订阅 $9.9/月</Link> 无限查阅
        </p>
      </div>
    </article>
  );
}
