import { randomBytes } from "crypto";

export type DocType = "invoice" | "proposal" | "contract" | "expense" | "project";

export type LineItem = {
  description: string;
  quantity: number;
  unitPrice: number;
};

export type Document = {
  id: string;
  type: DocType;
  number: string;
  title: string;
  clientName: string;
  clientEmail: string;
  lineItems: LineItem[];
  currency: string;
  notes: string;
  status: "draft" | "sent" | "paid" | "signed" | "active" | "done";
  createdAt: string;
  dueDate?: string;
  paidAt?: string;
  meta?: Record<string, string>;
};

const documents = new Map<string, Document>();

function randomId(): string {
  return randomBytes(6).toString("hex");
}

const PREFIX: Record<DocType, string> = {
  invoice: "INV",
  proposal: "PROP",
  contract: "CTR",
  expense: "EXP",
  project: "PRJ",
};

function docNumber(type: DocType): string {
  return `${PREFIX[type]}-${Date.now().toString(36).toUpperCase()}`;
}

function calcTotal(items: LineItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function createDocument(input: {
  type: DocType;
  title: string;
  clientName: string;
  clientEmail: string;
  lineItems?: LineItem[];
  currency?: string;
  notes?: string;
  meta?: Record<string, string>;
}): Document {
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 15);

  const defaultStatus: Document["status"] =
    input.type === "contract" ? "draft" : input.type === "project" ? "active" : "sent";

  const doc: Document = {
    id: randomId(),
    type: input.type,
    number: docNumber(input.type),
    title: input.title.trim(),
    clientName: input.clientName.trim(),
    clientEmail: input.clientEmail.trim(),
    lineItems: (input.lineItems ?? []).map((item) => ({
      description: item.description.trim(),
      quantity: Math.max(1, item.quantity),
      unitPrice: Math.max(0, item.unitPrice),
    })),
    currency: input.currency || "USD",
    notes: input.notes?.trim() || "",
    status: defaultStatus,
    createdAt: new Date().toISOString(),
    dueDate: input.type === "invoice" ? dueDate.toISOString() : undefined,
    meta: input.meta,
  };

  documents.set(doc.id, doc);
  return doc;
}

export function listDocuments(type?: DocType): Document[] {
  const all = [...documents.values()];
  const filtered = type ? all.filter((d) => d.type === type) : all;
  return filtered.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getDocument(id: string): Document | undefined {
  return documents.get(id);
}

export function updateDocumentStatus(
  id: string,
  status: Document["status"]
): Document | null {
  const doc = documents.get(id);
  if (!doc) return null;
  const updated: Document = {
    ...doc,
    status,
    paidAt: status === "paid" ? new Date().toISOString() : doc.paidAt,
  };
  documents.set(id, updated);
  return updated;
}

export function getSummary() {
  const all = listDocuments();
  const byType = (t: DocType) => all.filter((d) => d.type === t).length;
  const paid = all.filter((d) => d.status === "paid");
  const outstanding = all.filter((d) => d.type === "invoice" && d.status !== "paid");
  const totalOutstanding = outstanding.reduce((sum, inv) => sum + calcTotal(inv.lineItems), 0);
  const totalPaid = paid.reduce((sum, inv) => sum + calcTotal(inv.lineItems), 0);

  return {
    totalDocuments: all.length,
    invoiceCount: byType("invoice"),
    proposalCount: byType("proposal"),
    contractCount: byType("contract"),
    expenseCount: byType("expense"),
    projectCount: byType("project"),
    paidCount: paid.length,
    outstandingCount: outstanding.length,
    totalOutstanding,
    totalPaid,
    recent: all.slice(0, 8),
  };
}

function formatMoney(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

function formatDate(iso: string, locale: "en" | "zh"): string {
  return new Date(iso).toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function generateMarkdown(doc: Document, locale: "en" | "zh" = "en"): string {
  const total = calcTotal(doc.lineItems);
  const labels = {
    en: {
      invoice: "Invoice",
      proposal: "Proposal",
      contract: "Service Agreement",
      expense: "Expense Report",
      project: "Project Roadmap",
    },
    zh: {
      invoice: "发票",
      proposal: "报价单",
      contract: "服务合同",
      expense: "费用报销",
      project: "项目路线图",
    },
  };

  const typeLabel = labels[locale][doc.type];
  const header =
    locale === "zh"
      ? `# ${typeLabel} ${doc.number}\n\n**标题：** ${doc.title}\n**客户：** ${doc.clientName} (${doc.clientEmail})\n**日期：** ${formatDate(doc.createdAt, locale)}\n`
      : `# ${typeLabel} ${doc.number}\n\n**Title:** ${doc.title}\n**Client:** ${doc.clientName} (${doc.clientEmail})\n**Date:** ${formatDate(doc.createdAt, locale)}\n`;

  let body = "";
  if (doc.lineItems.length > 0) {
    const tableHeader =
      locale === "zh"
        ? "\n| 项目 | 数量 | 单价 | 小计 |\n| --- | ---: | ---: | ---: |\n"
        : "\n| Item | Qty | Unit | Subtotal |\n| --- | ---: | ---: | ---: |\n";
    const lines = doc.lineItems.map(
      (item) =>
        `| ${item.description} | ${item.quantity} | ${formatMoney(item.unitPrice, doc.currency)} | ${formatMoney(item.quantity * item.unitPrice, doc.currency)} |`
    );
    const totalLine =
      locale === "zh"
        ? `\n**合计：${formatMoney(total, doc.currency)}**\n`
        : `\n**Total: ${formatMoney(total, doc.currency)}**\n`;
    body = tableHeader + lines.join("\n") + totalLine;
  }

  if (doc.type === "contract") {
    const terms =
      locale === "zh"
        ? `\n## 合同条款\n\n1. **服务范围：** ${doc.title}\n2. **付款条款：** 50% 定金，50% 交付后付清\n3. **知识产权：** 全款到账后转移至客户\n4. **取消政策：** 开工前可全额退款\n`
        : `\n## Terms\n\n1. **Scope:** ${doc.title}\n2. **Payment:** 50% deposit, 50% on delivery\n3. **IP:** Transfers to client upon full payment\n4. **Cancellation:** Full refund before work begins\n`;
    body += terms;
  }

  if (doc.type === "project") {
    const phases =
      locale === "zh"
        ? `\n## 里程碑\n\n- [ ] 需求确认\n- [ ] 初稿交付\n- [ ] 客户反馈\n- [ ] 最终交付\n`
        : `\n## Milestones\n\n- [ ] Requirements confirmed\n- [ ] First draft delivered\n- [ ] Client feedback\n- [ ] Final delivery\n`;
    body += phases;
  }

  if (doc.type === "expense") {
    const expenseNote =
      locale === "zh"
        ? `\n**费用类别：** ${doc.meta?.category || "杂项"}\n`
        : `\n**Category:** ${doc.meta?.category || "Miscellaneous"}\n`;
    body += expenseNote;
  }

  const notes = doc.notes
    ? locale === "zh"
      ? `\n**备注：** ${doc.notes}\n`
      : `\n**Notes:** ${doc.notes}\n`
    : "";

  if (doc.dueDate && doc.type === "invoice") {
    const due =
      locale === "zh"
        ? `**到期日：** ${formatDate(doc.dueDate, locale)}\n`
        : `**Due:** ${formatDate(doc.dueDate, locale)}\n`;
    body = due + body;
  }

  return header + body + notes;
}

export function exportAllJson(): string {
  return JSON.stringify(listDocuments(), null, 2);
}
