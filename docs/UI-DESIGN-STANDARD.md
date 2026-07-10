# UI 设计标准

新站 UI **必须对标** [nuwa.world](https://nuwa.world/) 与 [photoai.com](https://photoai.com/) 的质感，而非通用 Bootstrap / corporate 模板。

## 共同特征（两站都具备）

| 维度 | 要求 |
|------|------|
| **背景** | 深色为主（`#0A0A0F` ~ `#111`），高对比文字 |
| **排版** | 超大标题（`text-4xl`~`6xl`）、紧凑字距、清晰层级 |
| **强调色** | 单一品牌色渐变或高饱和 accent（Indigo / Violet / 品红），CTA 醒目 |
| **区块节奏** | 全宽 section + 充足留白（`py-16`~`24`），每块一个核心信息 |
| **产品演示** | 首页必须有「假 UI / 截图 / 动效」展示核心功能，而非纯文字 |
| **社会证明** | 评价、数据条（`$9.9` / `99%` / `5 min`）、logo 条 |
| **CTA** | 主按钮实心 + 次按钮描边；Hero 和页底各一组 |
| **FAQ** | 手风琴或编号列表（参考 Nuwa FAQ） |
| **动效** | 轻量：hover 缩放、渐变光晕、数字计数（勿过度） |

## nuwa.world 重点借鉴

- 顶部 **产品能力 Tab**（Face Search / Deep Research / API）
- **实时演示卡片**：进度条、置信度、匹配数等「像在跑」的状态
- **代码块 + API 指标**（响应时间、uptime）
- 编号 FAQ（`01` `02`…）
- 极简导航 + 一个大 Hero 句

## photoai.com 重点借鉴

- **极强首屏**：一句话价值 + 立即试用
- Before/After 或效果对比
- 定价清晰、订阅导向
- 大量真实感 UI mock（照片、结果预览）
- 轻松但不幼稚的语调

## 本仓库落地规则

1. **技术**：Next.js + Tailwind + 深色 `site-shell`（`templates/site-shell/`）
2. **i18n**：`lib/copy.ts` + `lib/i18n-shared.ts` — **切换中文后全站零英文**（含指南页、表单、错误提示、Stripe 产品名、metadata）
3. **首页结构**（顺序固定）：
   - Hero（badge + 标题 + 副标题 + 双 CTA）
   - Stats 三列
   - How it works 三步
   - **产品演示区**（mock UI，必做）
   - Core features 网格
   - Testimonials
   - 底部 CTA
   - Feedback 留言板
4. **禁止**：紫色渐变 corporate 风、stock 图占位、Lorem ipsum、仅英文硬编码

## 参考链接

- https://nuwa.world/
- https://photoai.com/
