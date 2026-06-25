export type ProposalInput = {
  freelancerName: string;
  freelancerEmail: string;
  clientName: string;
  clientEmail: string;
  projectTitle: string;
  deliverables: string;
  timeline: string;
  amount: number;
  currency: string;
  paymentTerms: string;
  includeContract: boolean;
};

export type GeneratedProposal = {
  id: string;
  createdAt: string;
  validUntil: string;
  freelancer: { name: string; email: string };
  client: { name: string; email: string };
  project: {
    title: string;
    deliverables: string[];
    timeline: string;
    amount: number;
    currency: string;
    paymentTerms: string;
  };
  contractClauses: string[];
  invoice: {
    number: string;
    dueDate: string;
    lineItems: { description: string; amount: number }[];
    total: number;
    currency: string;
  };
  markdown: string;
};

export const templates = [
  {
    id: "web-dev",
    name: "网站开发",
    icon: "💻",
    defaults: {
      projectTitle: "网站设计与开发",
      deliverables: "响应式网站设计\n前端开发（Next.js）\nCMS 集成\n2 轮修改",
      timeline: "4-6 周",
      paymentTerms: "50% 预付，50% 交付后 7 天内",
    },
  },
  {
    id: "design",
    name: "UI/UX 设计",
    icon: "🎨",
    defaults: {
      projectTitle: "UI/UX 设计项目",
      deliverables: "用户调研\n线框图\n高保真设计稿\n设计规范文档",
      timeline: "2-3 周",
      paymentTerms: "100% 预付",
    },
  },
  {
    id: "consulting",
    name: "技术咨询",
    icon: "🧠",
    defaults: {
      projectTitle: "技术咨询服务",
      deliverables: "架构评审\n技术方案文档\n2 次线上会议\n邮件支持 30 天",
      timeline: "按小时计费，预计 20 小时",
      paymentTerms: "月结，Net 15",
    },
  },
  {
    id: "content",
    name: "内容创作",
    icon: "✍️",
    defaults: {
      projectTitle: "内容创作服务",
      deliverables: "10 篇 SEO 文章（800+ 字）\n关键词研究\n1 轮修改",
      timeline: "3 周",
      paymentTerms: "50% 预付，50% 交付后",
    },
  },
];

export const features = [
  {
    icon: "📄",
    title: "一键生成报价单",
    desc: "填写项目信息，30 秒生成专业 PDF 级报价文档",
  },
  {
    icon: "📋",
    title: "内置合同条款",
    desc: "标准自由职业合同模板，保护双方权益",
  },
  {
    icon: "🧾",
    title: "自动发票",
    desc: "报价确认后一键生成发票，含付款条款",
  },
  {
    icon: "💰",
    title: "多币种支持",
    desc: "USD / CNY / EUR，适合国内外客户",
  },
  {
    icon: "⚡",
    title: "比 HoneyBook 快 10 倍",
    desc: "无复杂配置，打开即用，专注报价核心流程",
  },
  {
    icon: "🔒",
    title: "数据本地生成",
    desc: "报价内容在浏览器生成，不上传敏感客户信息",
  },
];

export const testimonials = [
  {
    name: "张明",
    role: "独立开发者 · 全栈",
    text: "HoneyBook 涨到 $36/月，我只用报价功能。报价单通 $9.9 完全够用，5 分钟出报价。",
  },
  {
    name: "Sarah Lin",
    role: "Freelance Designer",
    text: "Finally a tool that does proposals without 50 features I'll never use. Clean and fast.",
  },
  {
    name: "王浩",
    role: "技术顾问",
    text: "合同条款模板省了我找律师的时间，客户签字率明显提高了。",
  },
];

export function generateProposal(input: ProposalInput): GeneratedProposal {
  const id = `PROP-${Date.now().toString(36).toUpperCase()}`;
  const now = new Date();
  const validUntil = new Date(now);
  validUntil.setDate(validUntil.getDate() + 14);

  const deliverablesList = input.deliverables
    .split("\n")
    .map((d) => d.trim())
    .filter(Boolean);

  const contractClauses = input.includeContract
    ? [
        "知识产权：项目交付并收到全款后，客户获得最终交付物的完整使用权。",
        "修改范围：报价包含 2 轮合理修改，超出范围按 $80/小时计费。",
        "取消政策：项目启动前取消全额退款；启动后取消按已完成工作量结算。",
        "保密条款：双方对项目相关信息保密，期限 2 年。",
        "争议解决：优先友好协商，协商不成提交仲裁。",
      ]
    : [];

  const invoiceNumber = `INV-${Date.now().toString(36).toUpperCase()}`;
  const dueDate = new Date(now);
  dueDate.setDate(dueDate.getDate() + 15);

  const lineItems = deliverablesList.map((d, i) => ({
    description: d,
    amount: i === 0 ? input.amount : 0,
  }));

  if (lineItems.length === 0) {
    lineItems.push({ description: input.projectTitle, amount: input.amount });
  } else {
    lineItems[0].amount = input.amount;
  }

  const currencySymbol =
    input.currency === "CNY" ? "¥" : input.currency === "EUR" ? "€" : "$";

  const markdown = `# 项目报价单

**报价编号：** ${id}  
**日期：** ${now.toLocaleDateString("zh-CN")}  
**有效期至：** ${validUntil.toLocaleDateString("zh-CN")}

---

## 服务提供方
- **姓名：** ${input.freelancerName}
- **邮箱：** ${input.freelancerEmail}

## 客户
- **公司/姓名：** ${input.clientName}
- **邮箱：** ${input.clientEmail}

---

## 项目概述
**${input.projectTitle}**

### 交付物
${deliverablesList.map((d) => `- ${d}`).join("\n")}

### 项目周期
${input.timeline}

### 报价金额
**${currencySymbol}${input.amount.toLocaleString()} ${input.currency}**

### 付款条款
${input.paymentTerms}

${
  contractClauses.length > 0
    ? `---

## 合同条款

${contractClauses.map((c, i) => `${i + 1}. ${c}`).join("\n\n")}`
    : ""
}

---

## 发票信息

**发票号：** ${invoiceNumber}  
**到期日：** ${dueDate.toLocaleDateString("zh-CN")}

| 项目 | 金额 |
|------|------|
${lineItems.map((item) => `| ${item.description} | ${currencySymbol}${item.amount.toLocaleString()} |`).join("\n")}
| **合计** | **${currencySymbol}${input.amount.toLocaleString()}** |

---

*本报价由报价单通生成 · 接受本报价即表示同意上述条款*
`;

  return {
    id,
    createdAt: now.toISOString(),
    validUntil: validUntil.toISOString(),
    freelancer: { name: input.freelancerName, email: input.freelancerEmail },
    client: { name: input.clientName, email: input.clientEmail },
    project: {
      title: input.projectTitle,
      deliverables: deliverablesList,
      timeline: input.timeline,
      amount: input.amount,
      currency: input.currency,
      paymentTerms: input.paymentTerms,
    },
    contractClauses,
    invoice: {
      number: invoiceNumber,
      dueDate: dueDate.toISOString(),
      lineItems,
      total: input.amount,
      currency: input.currency,
    },
    markdown,
  };
}
