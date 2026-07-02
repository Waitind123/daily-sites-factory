import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  createDocument,
  getDocument,
  getSummary,
  generateMarkdown,
  listDocuments,
  updateDocumentStatus,
  exportAllJson,
  type DocType,
} from "@/lib/documents";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n-shared";
import { apiError } from "@/lib/api-errors";

const VALID_TYPES = new Set<DocType>(["invoice", "proposal", "contract", "expense", "project"]);

async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  return jar.get(LOCALE_COOKIE)?.value === "zh" ? "zh" : "en";
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const locale = await getLocale();

  if (searchParams.get("summary") === "1") {
    return NextResponse.json({ summary: getSummary() });
  }

  if (searchParams.get("export") === "json") {
    return NextResponse.json({ data: exportAllJson() });
  }

  const id = searchParams.get("id");
  if (id) {
    const doc = getDocument(id);
    if (!doc) return apiError("DOC_NOT_FOUND", 404);
    return NextResponse.json({ document: doc, markdown: generateMarkdown(doc, locale) });
  }

  const type = searchParams.get("type") as DocType | null;
  const docs = listDocuments(type && VALID_TYPES.has(type) ? type : undefined);
  return NextResponse.json({ documents: docs });
}

export async function POST(req: NextRequest) {
  const locale = await getLocale();
  const body = await req.json();

  if (body.action === "mark-paid" || body.action === "mark-signed") {
    const doc = getDocument(body.id);
    if (!doc) return apiError("DOC_NOT_FOUND", 404);
    const status = body.action === "mark-paid" ? "paid" : "signed";
    const updated = updateDocumentStatus(body.id, status);
    if (!updated) return apiError("UPDATE_FAILED", 500);
    return NextResponse.json({
      document: updated,
      markdown: generateMarkdown(updated, locale),
    });
  }

  const type = body.type as DocType;
  if (!type || !VALID_TYPES.has(type)) return apiError("INVALID_TYPE", 400);
  if (!body.title?.trim() || !body.clientName?.trim()) return apiError("INVALID_INPUT", 400);

  const member = await isMember();
  const access = await consumeTrial(SITE_ID, member);
  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const doc = createDocument({
    type,
    title: body.title,
    clientName: body.clientName,
    clientEmail: body.clientEmail || "",
    lineItems: body.lineItems,
    currency: body.currency,
    notes: body.notes,
    meta: body.meta,
  });

  if (!member) {
    const trial = await incrementTrial(SITE_ID);
    const response = NextResponse.json({
      document: doc,
      markdown: generateMarkdown(doc, locale),
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
    document: doc,
    markdown: generateMarkdown(doc, locale),
    trial: {
      limit: 5,
      used: access.used,
      remaining: access.remaining,
      isMember: true,
      canUse: true,
    },
  });
}
