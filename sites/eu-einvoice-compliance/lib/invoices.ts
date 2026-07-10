import { randomBytes } from "crypto";

export type LineItem = {
  description: string;
  quantity: number;
  unitPrice: number;
};

export type InvoiceStatus = "draft" | "sent" | "paid";

export type Invoice = {
  id: string;
  number: string;
  clientName: string;
  clientEmail: string;
  buyerVatId?: string;
  projectTitle: string;
  lineItems: LineItem[];
  currency: string;
  vatRate?: number;
  notes: string;
  status: InvoiceStatus;
  createdAt: string;
  dueDate: string;
  paidAt?: string;
  receiptNumber?: string;
};

const invoices = new Map<string, Invoice>();

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function invoiceNumber(): string {
  return `INV-${Date.now().toString(36).toUpperCase()}`;
}

function receiptNumber(): string {
  return `RCP-${Date.now().toString(36).toUpperCase()}`;
}

function calcTotal(items: LineItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function createInvoice(input: {
  clientName: string;
  clientEmail: string;
  buyerVatId?: string;
  projectTitle: string;
  lineItems: LineItem[];
  currency: string;
  vatRate?: number;
  notes?: string;
}): Invoice {
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 15);

  const invoice: Invoice = {
    id: randomId(),
    number: invoiceNumber(),
    clientName: input.clientName.trim(),
    clientEmail: input.clientEmail.trim(),
    buyerVatId: input.buyerVatId?.trim() || "",
    projectTitle: input.projectTitle.trim(),
    vatRate: input.vatRate ?? 23,
    lineItems: input.lineItems.map((item) => ({
      description: item.description.trim(),
      quantity: Math.max(1, item.quantity),
      unitPrice: Math.max(0, item.unitPrice),
    })),
    currency: input.currency || "USD",
    notes: input.notes?.trim() || "",
    status: "sent",
    createdAt: new Date().toISOString(),
    dueDate: dueDate.toISOString(),
  };

  invoices.set(invoice.id, invoice);
  return invoice;
}

export function listInvoices(): Invoice[] {
  return [...invoices.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getInvoice(id: string): Invoice | undefined {
  return invoices.get(id);
}

export function markInvoicePaid(id: string): Invoice | null {
  const invoice = invoices.get(id);
  if (!invoice) return null;
  if (invoice.status === "paid") return invoice;

  const updated: Invoice = {
    ...invoice,
    status: "paid",
    paidAt: new Date().toISOString(),
    receiptNumber: receiptNumber(),
  };
  invoices.set(id, updated);
  return updated;
}

export function generateInvoiceMarkdown(invoice: Invoice, locale: "en" | "zh" = "en"): string {
  const total = calcTotal(invoice.lineItems);
  const lines = invoice.lineItems.map(
    (item) =>
      `| ${item.description} | ${item.quantity} | ${formatMoney(item.unitPrice, invoice.currency)} | ${formatMoney(item.quantity * item.unitPrice, invoice.currency)} |`
  );

  const header =
    locale === "zh"
      ? `# 发票 ${invoice.number}\n\n**项目：** ${invoice.projectTitle}\n**客户：** ${invoice.clientName} (${invoice.clientEmail})\n**开票日期：** ${formatDate(invoice.createdAt, locale)}\n**到期日：** ${formatDate(invoice.dueDate, locale)}\n**状态：** ${statusLabel(invoice.status, locale)}\n`
      : `# Invoice ${invoice.number}\n\n**Project:** ${invoice.projectTitle}\n**Client:** ${invoice.clientName} (${invoice.clientEmail})\n**Issued:** ${formatDate(invoice.createdAt, locale)}\n**Due:** ${formatDate(invoice.dueDate, locale)}\n**Status:** ${statusLabel(invoice.status, locale)}\n`;

  const tableHeader =
    locale === "zh"
      ? "\n| 项目 | 数量 | 单价 | 小计 |\n| --- | ---: | ---: | ---: |\n"
      : "\n| Item | Qty | Unit | Subtotal |\n| --- | ---: | ---: | ---: |\n";

  const totalLine =
    locale === "zh"
      ? `\n**合计：${formatMoney(total, invoice.currency)}**\n`
      : `\n**Total: ${formatMoney(total, invoice.currency)}**\n`;

  const notes = invoice.notes
    ? locale === "zh"
      ? `\n**备注：** ${invoice.notes}\n`
      : `\n**Notes:** ${invoice.notes}\n`
    : "";

  let receipt = "";
  if (invoice.status === "paid" && invoice.receiptNumber) {
    receipt =
      locale === "zh"
        ? `\n---\n\n## 收据 ${invoice.receiptNumber}\n\n已于 ${formatDate(invoice.paidAt!, locale)} 收到付款 ${formatMoney(total, invoice.currency)}。\n`
        : `\n---\n\n## Receipt ${invoice.receiptNumber}\n\nPayment of ${formatMoney(total, invoice.currency)} received on ${formatDate(invoice.paidAt!, locale)}.\n`;
  }

  return header + tableHeader + lines.join("\n") + totalLine + notes + receipt;
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

function statusLabel(status: InvoiceStatus, locale: "en" | "zh"): string {
  const labels = {
    en: { draft: "Draft", sent: "Sent", paid: "Paid" },
    zh: { draft: "草稿", sent: "已发送", paid: "已付款" },
  };
  return labels[locale][status];
}

export function getInvoiceSummary() {
  const all = listInvoices();
  const paid = all.filter((i) => i.status === "paid");
  const outstanding = all.filter((i) => i.status !== "paid");
  const totalOutstanding = outstanding.reduce((sum, inv) => sum + calcTotal(inv.lineItems), 0);
  const totalPaid = paid.reduce((sum, inv) => sum + calcTotal(inv.lineItems), 0);

  return {
    totalInvoices: all.length,
    paidCount: paid.length,
    outstandingCount: outstanding.length,
    totalOutstanding,
    totalPaid,
    recent: all.slice(0, 5),
  };
}
