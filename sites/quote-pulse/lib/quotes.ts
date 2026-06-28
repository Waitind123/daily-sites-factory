import { randomBytes } from "crypto";

export type QuoteStatus = "draft" | "sent" | "paid";

export type Quote = {
  id: string;
  clientName: string;
  clientEmail: string;
  projectTitle: string;
  description: string;
  amount: number;
  currency: string;
  status: QuoteStatus;
  createdAt: string;
  quoteNumber: string;
  contractText?: string;
  invoiceText?: string;
};

const quotes = new Map<string, Quote>();

function randomId(): string {
  return randomBytes(8).toString("hex");
}

function quoteNumber(): string {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `QP-${new Date().getFullYear()}-${n}`;
}

export function createQuote(
  clientName: string,
  clientEmail: string,
  projectTitle: string,
  description: string,
  amount: number,
  currency = "USD"
): Quote {
  const quote: Quote = {
    id: randomId(),
    clientName: clientName.trim(),
    clientEmail: clientEmail.trim(),
    projectTitle: projectTitle.trim(),
    description: description.trim(),
    amount,
    currency,
    status: "draft",
    createdAt: new Date().toISOString(),
    quoteNumber: quoteNumber(),
  };
  quotes.set(quote.id, quote);
  return quote;
}

export function listQuotes(): Quote[] {
  return [...quotes.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getQuote(id: string): Quote | undefined {
  return quotes.get(id);
}

export function generateContract(quoteId: string): { contractText: string } | null {
  const quote = quotes.get(quoteId);
  if (!quote) return null;

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dueDate = new Date(Date.now() + 14 * 86400000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const contractText = `FREELANCE SERVICE AGREEMENT
Quote #${quote.quoteNumber} · ${today}

PARTIES
Provider: [Your Name / Business]
Client: ${quote.clientName} (${quote.clientEmail})

PROJECT
${quote.projectTitle}

SCOPE OF WORK
${quote.description}

COMPENSATION
Total fee: ${quote.currency} ${quote.amount.toFixed(2)}
Payment due: ${dueDate}
50% deposit upon signing, 50% upon delivery (customize as needed).

TERMS
1. Client grants Provider right to use deliverables in portfolio unless NDA signed.
2. Revisions: up to 2 rounds included; additional at $75/hr.
3. Either party may terminate with 7 days written notice; Client pays for work completed.
4. Intellectual property transfers to Client upon full payment.

SIGNATURES
Provider: _________________________ Date: _______
Client:   _________________________ Date: _______`;

  quote.contractText = contractText;
  quote.status = "sent";
  quotes.set(quoteId, quote);

  return { contractText };
}

export function generateInvoice(quoteId: string): { invoiceText: string } | null {
  const quote = quotes.get(quoteId);
  if (!quote) return null;

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dueDate = new Date(Date.now() + 14 * 86400000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const invoiceText = `INVOICE
Invoice #${quote.quoteNumber.replace("QP", "INV")}
Date: ${today}
Due: ${dueDate}

BILL TO
${quote.clientName}
${quote.clientEmail}

DESCRIPTION                          AMOUNT
${quote.projectTitle.padEnd(36)} ${quote.currency} ${quote.amount.toFixed(2)}
${quote.description.slice(0, 60)}...

                              ─────────────
TOTAL DUE                     ${quote.currency} ${quote.amount.toFixed(2)}

Payment: Bank transfer / Stripe link / PayPal
Notes: Thank you for your business!`;

  quote.invoiceText = invoiceText;
  quotes.set(quoteId, quote);

  return { invoiceText };
}
