import { NextRequest, NextResponse } from "next/server";
import {
  createInvoice,
  listInvoices,
  getInvoice,
  markInvoicePaid,
  generateInvoiceMarkdown,
  getInvoiceSummary,
} from "@/lib/invoices";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const summary = request.nextUrl.searchParams.get("summary");

  if (summary === "1") {
    return NextResponse.json({ summary: getInvoiceSummary() });
  }

  if (id) {
    const invoice = getInvoice(id);
    if (!invoice) return apiError("INVOICE_NOT_FOUND", 404);
    return NextResponse.json({
      invoice,
      markdown: generateInvoiceMarkdown(invoice, "en"),
    });
  }

  return NextResponse.json({ invoices: listInvoices() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      action?: string;
      id?: string;
      clientName?: string;
      clientEmail?: string;
      projectTitle?: string;
      lineItems?: { description: string; quantity: number; unitPrice: number }[];
      currency?: string;
      notes?: string;
    };

    if (body.action === "mark-paid") {
      if (!body.id) return apiError("INVOICE_NOT_FOUND", 400);
      const updated = markInvoicePaid(body.id);
      if (!updated) return apiError("INVOICE_NOT_FOUND", 404);
      return NextResponse.json({
        invoice: updated,
        markdown: generateInvoiceMarkdown(updated, "en"),
      });
    }

    if (!body.clientName?.trim()) return apiError("CLIENT_NAME_REQUIRED", 400);
    if (!body.clientEmail?.trim()) return apiError("CLIENT_EMAIL_REQUIRED", 400);
    if (!isValidEmail(body.clientEmail.trim())) return apiError("CLIENT_EMAIL_INVALID", 400);
    if (!body.projectTitle?.trim()) return apiError("PROJECT_TITLE_REQUIRED", 400);
    if (!body.lineItems?.length || !body.lineItems.some((i) => i.description?.trim())) {
      return apiError("LINE_ITEMS_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const invoice = createInvoice({
      clientName: body.clientName,
      clientEmail: body.clientEmail,
      projectTitle: body.projectTitle,
      lineItems: body.lineItems,
      currency: body.currency || "USD",
      notes: body.notes,
    });

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        invoice,
        markdown: generateInvoiceMarkdown(invoice, "en"),
        trial: {
          limit: 5,
          used: trial.used,
          remaining: trial.remaining,
          isMember: false,
          canUse: trial.remaining > 0,
        },
      });
      response.headers.append("Set-Cookie", trial.cookieHeader);
      return response;
    }

    return NextResponse.json({
      invoice,
      markdown: generateInvoiceMarkdown(invoice, "en"),
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Invoice error:", error);
    return apiError("INVOICE_CREATE_FAILED", 500);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = (await request.json()) as { id?: string; action?: string };
    if (body.action !== "mark-paid" || !body.id) {
      return apiError("INVOICE_NOT_FOUND", 400);
    }
    const updated = markInvoicePaid(body.id);
    if (!updated) return apiError("INVOICE_NOT_FOUND", 404);
    return NextResponse.json({
      invoice: updated,
      markdown: generateInvoiceMarkdown(updated, "en"),
    });
  } catch {
    return apiError("INVOICE_UPDATE_FAILED", 500);
  }
}
