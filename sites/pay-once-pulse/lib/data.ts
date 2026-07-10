import type { Locale } from "./i18n-shared";
import { localizeToolFields } from "./tools-locale";

export type ToolCategory =
  | "project-management"
  | "forms"
  | "feedback"
  | "analytics"
  | "invoicing"
  | "docs"
  | "monitoring";

export type IndieTool = {
  id: string;
  name: string;
  tagline: string;
  category: ToolCategory;
  pricing: string;
  website: string;
  indieScore: number;
  preview: string;
  review: {
    summary: string;
    bestFor: string[];
    pricingDetail: string;
    alternatives: { name: string; pricing: string; when: string }[];
    pros: string[];
    cons: string[];
    setupTips: string[];
    verdict: string;
  };
};

export const indieTools: IndieTool[] = [
  {
    id: "feedback-glow",
    name: "Feedback Glow",
    tagline: "Canny 替代品 — 功能投票 + 公开路线图，支持一次性买断",
    category: "feedback",
    pricing: "$99 一次性",
    website: "feedbackglow.com",
    indieScore: 9,
    preview:
      "Canny $79/月太贵？Feedback Glow 提供功能请求、公开路线图、更新日志，支持 pay-once 买断，适合 indie 小团队。",
    review: {
      summary:
        "HN Show HN 2024 推出的 Canny 轻量替代。收集功能请求、bug 反馈、公开路线图，用户无需登录即可投票。最大亮点：一次性付款选项，告别每月 $79 的 Canny 账单。",
      bestFor: ["indie maker 产品反馈", "不想付 Canny $79/月", "需要公开路线图"],
      pricingDetail:
        "月付 $19/月 或一次性 $99 买断。对比 Canny Launch $79/月、ProductBoard $25+/月，indie 预算友好 10 倍。",
      alternatives: [
        { name: "Canny", pricing: "$79/月起", when: "大企业、需要 CRM 集成" },
        { name: "Featurebase", pricing: "$49/月起", when: "需要 changelog + 帮助中心一体" },
        { name: "自建 GitHub Issues", pricing: "免费", when: "纯开发者产品、用户都是 dev" },
      ],
      pros: ["支持一次性买断", "公开路线图 + changelog", "无需登录投票", "品牌化自定义"],
      cons: ["功能比 Canny 少", "无原生 Intercom 集成", "社区较小"],
      setupTips: [
        "feedbackglow.com 注册",
        "创建 Board，嵌入 widget 到落地页",
        "配置公开路线图 URL",
        "选择一次性付款计划锁定价格",
      ],
      verdict: "indie 产品反馈首选。$99 买断 vs Canny $948/年，第一年省 $849。",
    },
  },
  {
    id: "kanba",
    name: "Kanba",
    tagline: "开源 Trello 替代 — MIT 许可，自托管，数据归你",
    category: "project-management",
    pricing: "免费自托管",
    website: "github.com/uaghazade/kanba",
    indieScore: 8,
    preview:
      "Meetup 涨价、Trello 功能臃肿？Kanba 是轻量看板工具，React + Supabase，MIT 开源，完全自托管。",
    review: {
      summary:
        "HN Show HN 2025 发布的自托管 PM 工具。定位 Trello 的开源替代，数据存在你自己的 Supabase，无 vendor lock-in。适合不想为 Asana/Trello 付 $10+/席位/月的 solo 团队。",
      bestFor: ["solo founder 任务管理", "需要数据自主权", "已有 Supabase 技术栈"],
      pricingDetail:
        "完全免费自托管。对比 Trello Standard $5/用户/月、Asana $10.99/用户/月，5 人团队年省 $300–660。",
      alternatives: [
        { name: "Trello", pricing: "$5/用户/月", when: "不想自托管、需要 Power-Ups" },
        { name: "Plane", pricing: "免费自托管", when: "需要 Sprint + 周期规划" },
        { name: "Notion", pricing: "$8/用户/月", when: "文档 + PM 一体" },
      ],
      pros: ["MIT 开源", "轻量 UI", "Supabase 后端可控", "无月费"],
      cons: ["需自己部署维护", "功能比 Trello 少", "移动端体验一般"],
      setupTips: [
        "git clone Kanba 仓库",
        "创建 Supabase 项目，配置 .env",
        "npm install && npm run build",
        "部署到 Vercel 或自有 VPS",
      ],
      verdict: "自托管 PM 的最低成本方案。一人团队够用，数据永远在你手里。",
    },
  },
  {
    id: "formbricks",
    name: "Formbricks",
    tagline: "开源 Typeform 替代 — 无限表单，自托管，MIT 许可",
    category: "forms",
    pricing: "免费自托管",
    website: "formbricks.com",
    indieScore: 9,
    preview:
      "Typeform 免费版仅 10 条/月？Formbricks 开源表单 + 用户调研，自托管无限回复，还支持应用内微调研。",
    review: {
      summary:
        "德国团队开发的开源 Typeform 替代，YC 背景。不只是表单——支持应用内 pop-up 调研、NPS 收集、功能优先级投票。自托管版完全免费，云托管 $49/月起。",
      bestFor: ["MVP 用户调研", "不想被 Typeform 10 条限制", "需要应用内调研"],
      pricingDetail:
        "自托管免费无限表单。对比 Typeform Basic $25/月 100 回复、Business $50/月 1000 回复，indie 省 $300–600/年。",
      alternatives: [
        { name: "Typeform", pricing: "$25/月起", when: "需要精美 UI、不想自托管" },
        { name: "Tally", pricing: "免费无限", when: "简单表单、接受 tally.so 域名" },
        { name: "form-pulse", pricing: "$9.9/月", when: "需要放弃率分析 + 嵌入小部件" },
      ],
      pros: ["开源可自托管", "应用内调研 widget", "无限表单回复", "GDPR 友好"],
      cons: ["自托管需维护", "UI 不如 Typeform 精致", "高级分析需付费云版"],
      setupTips: [
        "docker compose up 一键部署",
        "或 formbricks.com 注册云版试用",
        "创建 Survey，嵌入 script 到落地页",
        "配置 webhook 收集回复到 Notion/Slack",
      ],
      verdict: "indie 表单调研最佳开源方案。自托管 = 永久免费 + 数据自主。",
    },
  },
  {
    id: "umami",
    name: "Umami",
    tagline: "开源 Plausible 替代 — 隐私友好分析，一键自托管",
    category: "analytics",
    pricing: "免费自托管",
    website: "umami.is",
    indieScore: 9,
    preview:
      "Mixpanel $500/月、Plausible $9/月？Umami 开源网站分析，自托管免费，script 仅 2KB，GDPR 合规。",
    review: {
      summary:
        "最流行的开源网站分析工具之一，GitHub 20K+ stars。轻量 script、隐私优先、无 cookie banner 烦恼。自托管完全免费，Umami Cloud $9/月托管版。",
      bestFor: ["落地页 PV/UV 追踪", "隐私合规要求", "不想付 Plausible/Mixpanel"],
      pricingDetail:
        "自托管 $0。对比 Plausible $9/月、Mixpanel Growth $500/月，落地页分析零成本。",
      alternatives: [
        { name: "Plausible", pricing: "$9/月起", when: "不想自托管、要托管服务" },
        { name: "PostHog", pricing: "免费 1M events", when: "需要产品分析 + Feature Flags" },
        { name: "Google Analytics", pricing: "免费", when: "接受 Google 追踪、复杂配置" },
      ],
      pros: ["2KB 轻量 script", "开源可审计", "Docker 一键部署", "实时 dashboard"],
      cons: ["无漏斗分析", "无 Session Replay", "自托管需维护"],
      setupTips: [
        "docker run ghcr.io/umami-software/umami",
        "添加网站，复制 tracking script",
        "嵌入 layout.tsx <head>",
        "可选：配置自定义域名 + HTTPS",
      ],
      verdict: "落地页分析的开源标配。自托管 5 分钟搞定，永久免费。",
    },
  },
  {
    id: "invoice-ninja",
    name: "Invoice Ninja",
    tagline: "开源发票工具 — 报价+合同+发票+收款，自托管免费",
    category: "invoicing",
    pricing: "免费自托管",
    website: "invoiceninja.com",
    indieScore: 8,
    preview:
      "HoneyBook 涨价 89%、Bonsai $25/月？Invoice Ninja 开源报价+发票+在线收款，自托管完全免费。",
    review: {
      summary:
        "成熟的开源发票/报价工具，2014 年至今持续维护。支持报价单、合同、发票、在线支付（Stripe/PayPal）、客户门户。自托管版功能完整免费，云版 $10/月起。",
      bestFor: ["自由职业者报价开票", "不想付 HoneyBook/Bonsai", "需要客户自助门户"],
      pricingDetail:
        "自托管 $0 全功能。对比 Bonsai $25/月、HoneyBook $39/月，年省 $300–468。",
      alternatives: [
        { name: "Bonsai", pricing: "$25/月起", when: "需要合同模板 + 美国税务" },
        { name: "invoice-desk", pricing: "$9.9/月", when: "极简 UI、中文本地化" },
        { name: "Wave", pricing: "免费", when: "北美小企业、接受广告" },
      ],
      pros: ["开源 10 年历史", "Stripe/PayPal 集成", "客户门户", "多币种"],
      cons: ["UI 偏传统", "自托管配置复杂", "中文支持有限"],
      setupTips: [
        "Docker 部署或 invoiceninja.com 云版",
        "配置 Stripe 收款",
        "创建报价模板",
        "发送客户门户链接收款",
      ],
      verdict: "自由职业者发票最佳开源方案。功能不输 $25/月 SaaS，成本 $0。",
    },
  },
  {
    id: "listmonk",
    name: "Listmonk",
    tagline: "开源 Newsletter 工具 — 百万订阅者零月费",
    category: "docs",
    pricing: "免费自托管",
    website: "listmonk.app",
    indieScore: 9,
    preview:
      "Mailchimp $20/月起、ConvertKit $29/月？Listmonk 自托管邮件列表管理，百万订阅者也只付 SMTP 费用。",
    review: {
      summary:
        "印度开发者 Vik 创建的高性能邮件列表工具，单二进制部署。支持订阅管理、模板编辑、活动发送、分析统计。自托管只需付 Amazon SES $0.10/千封 SMTP 费用。",
      bestFor: ["indie newsletter 发件", "订阅者 >1000 想省钱", "已有 VPS/Docker 能力"],
      pricingDetail:
        "软件 $0，SMTP ~$1/万封。对比 ConvertKit $29/月 1000 订阅、Mailchimp $20/月 500 订阅，万级列表年省 $240–348。",
      alternatives: [
        { name: "ConvertKit", pricing: "$29/月起", when: "不想自托管、要落地页构建" },
        { name: "Buttondown", pricing: "$9/月起", when: "极简 newsletter、Markdown 写作" },
        { name: "Resend", pricing: "免费 3K/月", when: "纯事务邮件、非 newsletter" },
      ],
      pros: ["单二进制部署", "百万级性能", "模板 API", "订阅者完全自主"],
      cons: ["需配置 SMTP", "无拖拽编辑器", "送达率靠自己维护"],
      setupTips: [
        "docker compose 部署 listmonk",
        "配置 Amazon SES 或 Postmark SMTP",
        "导入订阅者 CSV",
        "创建模板，发送首封 newsletter",
      ],
      verdict: "大规模 newsletter 的终极省钱方案。万级订阅者年省数千美元。",
    },
  },
  {
    id: "cal-com",
    name: "Cal.com",
    tagline: "开源 Calendly 替代 — 自托管免费，白标预约页",
    category: "invoicing",
    pricing: "免费自托管",
    website: "cal.com",
    indieScore: 9,
    preview:
      "Calendly $12/月且无白标？Cal.com 开源预约调度，自托管免费，支持自定义域名和品牌。",
    review: {
      summary:
        "GitHub 30K+ stars 的开源调度工具。支持个人/团队预约、时区自动转换、Google/Outlook 日历同步、Stripe 收款预约。自托管版功能完整，Cal.com Cloud $12/月起。",
      bestFor: ["独立开发者预约咨询", "需要白标预约页", "Calendly 涨价后迁移"],
      pricingDetail:
        "自托管 $0。对比 Calendly Standard $12/月、Teams $20/月，年省 $144–240。",
      alternatives: [
        { name: "Calendly", pricing: "$12/月起", when: "不想自托管、要最简单体验" },
        { name: "book-pulse", pricing: "$9.9/月", when: "极简预约 + 项目展示" },
        { name: "TidyCal", pricing: "$29 终身", when: "要终身买断、接受 LTD" },
      ],
      pros: ["完全开源", "白标自定义", "Stripe 收款集成", "团队调度"],
      cons: ["自托管维护成本", "UI 不如 Calendly 精致", "移动端体验一般"],
      setupTips: [
        "cal.com 注册或 Docker 自托管",
        "连接 Google Calendar",
        "创建 Event Type，设置可用时间",
        "嵌入预约链接到落地页",
      ],
      verdict: "预约调度的开源标准。自托管 = 永久免费 + 完全白标。",
    },
  },
  {
    id: "statping-ng",
    name: "Statping-ng",
    tagline: "开源状态页 + Uptime 监控 — 替代 Statuspage.io $29/月",
    category: "monitoring",
    pricing: "免费自托管",
    website: "github.com/statping-ng/statping-ng",
    indieScore: 8,
    preview:
      "Statuspage.io $29/月、UptimeRobot 涨价 4 倍？Statping-ng 自托管监控 + 公开状态页，一次部署永久免费。",
    review: {
      summary:
        "Statping 的社区维护分支，Go 编写单二进制部署。HTTP/TCP/ICMP 监控、公开状态页、事件管理、邮件/Slack 告警。完美替代 Statuspage + UptimeRobot 组合。",
      bestFor: ["SaaS 状态页", "多服务 uptime 监控", "不想付 Statuspage $29/月"],
      pricingDetail:
        "自托管 $0。对比 Statuspage $29/月 + UptimeRobot Pro $7/月，年省 $432。",
      alternatives: [
        { name: "uptime-alt", pricing: "$9.9/月", when: "不想自托管、要托管服务" },
        { name: "Better Stack", pricing: "$20/月起", when: "需要日志 + 监控一体" },
        { name: "Cachet", pricing: "免费自托管", when: "纯状态页、不需监控" },
      ],
      pros: ["监控+状态页一体", "单二进制部署", "多通知渠道", "完全开源"],
      cons: ["UI 偏技术风", "需自己维护服务器", "无全球探测节点"],
      setupTips: [
        "Docker 部署 statping-ng",
        "添加 HTTP 监控端点",
        "配置 Slack/邮件告警",
        "发布公开状态页 URL 给客户",
      ],
      verdict: "indie SaaS 监控+状态页最佳自托管方案。年省 $400+。",
    },
  },
  {
    id: "papermark",
    name: "Papermark",
    tagline: "开源 DocSend 替代 — 安全文档分享 + 阅读分析",
    category: "docs",
    pricing: "免费自托管",
    website: "papermark.com",
    indieScore: 8,
    preview:
      "DocSend $15/月只是分享 PDF？Papermark 开源文档分享，追踪谁看了、看了多久，自托管免费。",
    review: {
      summary:
        "Vercel 团队背景的开源 DocSend 替代。上传 PDF/演示文稿，生成安全分享链接，追踪阅读时长、下载、转发。适合创始人向投资人发送 BP、销售发送提案。",
      bestFor: ["向投资人发 BP", "销售提案追踪", "不想付 DocSend $15/月"],
      pricingDetail:
        "自托管免费。Papermark Cloud 免费层 3 文档，Pro $29/月。对比 DocSend $15/月，自托管年省 $180。",
      alternatives: [
        { name: "DocSend", pricing: "$15/月起", when: "大企业、需要 CRM 集成" },
        { name: "Notion 公开链接", pricing: "免费", when: "不需要阅读追踪" },
        { name: "Google Drive", pricing: "免费", when: "内部分享、不需分析" },
      ],
      pros: ["阅读时长追踪", "链接密码保护", "开源可自托管", "现代 UI"],
      cons: ["仅支持 PDF/演示", "自托管需配置 S3", "免费云版限制 3 文档"],
      setupTips: [
        "papermark.com 注册或 GitHub 自托管",
        "上传 PDF，生成分享链接",
        "设置密码和过期时间",
        "Dashboard 查看阅读分析",
      ],
      verdict: "创始人发 BP 的最佳开源工具。知道投资人是否真正读了你的 deck。",
    },
  },
  {
    id: "twenty",
    name: "Twenty",
    tagline: "开源 Salesforce 替代 — 现代 CRM，自托管免费",
    category: "project-management",
    pricing: "免费自托管",
    website: "twenty.com",
    indieScore: 8,
    preview:
      "HubSpot CRM 免费但功能受限、Pipedrive $15/月？Twenty 开源现代 CRM，Notion 风格 UI，自托管完全免费。",
    review: {
      summary:
        "YC W24 批次的开源 CRM，定位「Salesforce for the 21st century」。联系人、公司、商机、邮件集成，UI 现代如 Notion。自托管免费，Cloud $12/用户/月。",
      bestFor: ["B2B indie SaaS 客户管理", "不想付 Pipedrive $15/月", "需要现代 UI 的 CRM"],
      pricingDetail:
        "自托管 $0。对比 Pipedrive $15/用户/月、HubSpot Sales Hub $20/月，5 人团队年省 $900–1200。",
      alternatives: [
        { name: "Pipedrive", pricing: "$15/用户/月", when: "成熟销售流程、不想自托管" },
        { name: "HubSpot Free", pricing: "免费", when: "接受 HubSpot 生态锁定" },
        { name: "Notion CRM 模板", pricing: "免费", when: "极简需求、已有 Notion" },
      ],
      pros: ["现代 Notion 风 UI", "开源可扩展", "邮件集成", "API 完善"],
      cons: ["相对较新", "自托管配置复杂", "高级自动化需 Cloud 版"],
      setupTips: [
        "twenty.com 注册或 Docker 自托管",
        "导入现有联系人 CSV",
        "配置邮件集成",
        "创建商机 Pipeline",
      ],
      verdict: "indie B2B SaaS 的现代 CRM 首选。自托管免费，UI 碾压传统 CRM。",
    },
  },
  {
    id: "docmost",
    name: "Docmost",
    tagline: "开源 Notion 替代 — 团队 Wiki，自托管免费",
    category: "docs",
    pricing: "免费自托管",
    website: "docmost.com",
    indieScore: 8,
    preview:
      "Notion $8/用户/月、GitBook $65/月？Docmost 开源协作文档 Wiki，自托管免费，支持实时协作。",
    review: {
      summary:
        "新兴的开源 Notion/Confluence 替代。富文本编辑、页面嵌套、团队协作、权限管理。适合 indie 团队内部文档、API 文档、产品 Wiki。Docker 一键部署。",
      bestFor: ["团队内部 Wiki", "API 文档托管", "不想付 Notion/GitBook"],
      pricingDetail:
        "自托管 $0。对比 Notion Plus $8/用户/月、GitBook $65/月，5 人团队年省 $480–780。",
      alternatives: [
        { name: "Notion", pricing: "$8/用户/月", when: "需要数据库 + PM 一体" },
        { name: "docs-pulse", pricing: "$9.9/月", when: "纯 API 文档 + llms.txt" },
        { name: "Outline", pricing: "免费自托管", when: "成熟 Wiki、已有经验" },
      ],
      pros: ["实时协作", "Docker 部署", "权限管理", "完全开源"],
      cons: ["生态较新", "无 Notion 数据库", "模板较少"],
      setupTips: [
        "Docker compose 部署 Docmost",
        "创建 Workspace 和首个 Space",
        "邀请团队成员",
        "迁移现有 Markdown 文档",
      ],
      verdict: "团队 Wiki 的高性价比开源方案。自托管 = 数据自主 + 零月费。",
    },
  },
  {
    id: "tidycal",
    name: "TidyCal",
    tagline: "Calendly 终身买断 — AppSumo $29 一次性",
    category: "invoicing",
    pricing: "$29 终身",
    website: "tidycal.com",
    indieScore: 7,
    preview:
      "Calendly $12/月永无止境？TidyCal AppSumo 终身Deal $29 一次性，无限预约类型，适合预算极紧的 indie。",
    review: {
      summary:
        "AppSumo 常年热销的 Calendly 终身替代。$29 一次性买断，无限预约类型、日历集成、自定义域名。功能不如 Cal.com 丰富，但零维护成本、零月费。",
      bestFor: ["极致预算 indie", "不想自托管 Cal.com", "简单预约需求"],
      pricingDetail:
        "$29 一次性终身。对比 Calendly $12/月，3 个月回本，3 年省 $403。",
      alternatives: [
        { name: "Cal.com 自托管", pricing: "免费", when: "有技术能力、要完全控制" },
        { name: "Calendly", pricing: "$12/月起", when: "要最成熟体验" },
        { name: "Cal.com Cloud", pricing: "$12/月起", when: "开源但不想自托管" },
      ],
      pros: ["$29 终身买断", "零维护", "日历集成", "自定义域名"],
      cons: ["功能较基础", "AppSumo 风 UI", "无团队调度", "依赖 AppSumo 存续"],
      setupTips: [
        "AppSumo 购买 TidyCal LTD $29",
        "连接 Google Calendar",
        "创建预约类型",
        "分享链接到落地页",
      ],
      verdict: "最便宜的 Calendly 替代。$29 买断适合不想碰服务器的 indie。",
    },
  },
];

export const categoryKeys: ToolCategory[] = [
  "project-management",
  "forms",
  "feedback",
  "analytics",
  "invoicing",
  "docs",
  "monitoring",
];

export function getToolById(id: string, locale: Locale = "en"): IndieTool | undefined {
  const tool = indieTools.find((t) => t.id === id);
  if (!tool) return undefined;
  return localizeToolFields(tool, locale);
}

export function getPublicTools(locale: Locale = "en"): Omit<IndieTool, "review">[] {
  return indieTools.map(({ review: _r, ...rest }) => {
    const localized = localizeToolFields({ ...rest, review: _r }, locale);
    const { review: _rv, ...pub } = localized;
    return pub;
  });
}

export const stats = {
  toolCount: indieTools.length,
  categoryCount: categoryKeys.length,
  avgScore: (
    indieTools.reduce((sum, t) => sum + t.indieScore, 0) / indieTools.length
  ).toFixed(1),
};
