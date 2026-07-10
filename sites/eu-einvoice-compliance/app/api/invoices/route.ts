import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
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
import {
  generateUblXml,
  validateCompliance,
  complianceScore,
  type SellerInfo,
} from "@/lib/ubl";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n-shared";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  return jar.get(LOCALE_COOKIE)?.value === "zh" ? "zh" : "en";
}

function parseSeller(body: Record<string, unknown>): SellerInfo | null {
  const name = String(body.sellerName ?? "").trim();
  const vatId = String(body.sellerVat ?? "").trim();
  const country = String(body.sellerCountry ?? "").trim().toUpperCase();
  const address = String(body.sellerAddress ?? "").trim();
  const city = String(body.sellerCity ?? "").trim();
  const postalCode = String(body.sellerPostal ?? "").trim();
  if (!name || !vatId || !country) return null;
  return { name, vatId, country, address, city, postalCode };
}

export async function GET(request: NextRequest) {
  const locale = await getLocale();
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
      markdown: generateInvoiceMarkdown(invoice, locale),
    });
  }

  return NextResponse.json({ invoices: listInvoices() });
}

export async function POST(request: NextRequest) {
  try {
    const locale = await getLocale();
    const body = (await request.json()) as {
      action?: string;
      id?: string;
      clientName?: string;
      clientEmail?: string;
      buyerVatId?: string;
      projectTitle?: string;
      lineItems?: { description: string; quantity: number; unitPrice: number }[];
      currency?: string;
      vatRate?: number;
      notes?: string;
      sellerName?: string;
      sellerVat?: string;
      sellerCountry?: string;
      sellerAddress?: string;
      sellerCity?: string;
      sellerPostal?: string;
    };

    if (body.action === "mark-paid") {
      if (!body.id) return apiError("INVOICE_NOT_FOUND", 400);
      const updated = markInvoicePaid(body.id);
      if (!updated) return apiError("INVOICE_NOT_FOUND", 404);
      return NextResponse.json({
        invoice: updated,
        markdown: generateInvoiceMarkdown(updated, locale),
      });
    }

    if (!body.clientName?.trim()) return apiError("CLIENT_NAME_REQUIRED", 400);
    if (!body.clientEmail?.trim()) return apiError("CLIENT_EMAIL_REQUIRED", 400);
    if (!isValidEmail(body.clientEmail.trim())) return apiError("CLIENT_EMAIL_INVALID", 400);
    if (!body.projectTitle?.trim()) return apiError("PROJECT_TITLE_REQUIRED", 400);
    if (!body.lineItems?.length || !body.lineItems.some((i) => i.description?.trim())) {
      return apiError("LINE_ITEMS_REQUIRED", 400);
    }

    const seller = parseSeller(body);
    if (!seller) {
      if (!body.sellerVat?.trim()) return apiError("SELLER_VAT_REQUIRED", 400);
      return apiError("SELLER_COUNTRY_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const invoice = createInvoice({
      clientName: body.clientName,
      clientEmail: body.clientEmail,
      buyerVatId: body.buyerVatId,
      projectTitle: body.projectTitle,
      lineItems: body.lineItems,
      currency: (body.currency || "EUR").toUpperCase(),
      vatRate: body.vatRate,
      notes: body.notes,
    });

    const checks = validateCompliance(invoice, seller);
    const ubl = generateUblXml(invoice, seller);
    const score = complianceScore(checks);

    const payload = {
      invoice,
      markdown: generateInvoiceMarkdown(invoice, locale),
      ubl,
      compliance: { score, checks },
    };

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        ...payload,
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
      ...payload,
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
    const locale = await getLocale();
    const body = (await request.json()) as { id?: string; action?: string };
    if (body.action !== "mark-paid" || !body.id) {
      return apiError("INVOICE_NOT_FOUND", 400);
    }
    const updated = markInvoicePaid(body.id);
    if (!updated) return apiError("INVOICE_NOT_FOUND", 404);
    return NextResponse.json({
      invoice: updated,
      markdown: generateInvoiceMarkdown(updated, locale),
    });
  } catch {
    return apiError("INVOICE_UPDATE_FAILED", 500);
  }
}
