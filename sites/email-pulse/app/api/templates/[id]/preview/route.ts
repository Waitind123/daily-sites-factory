import { NextRequest, NextResponse } from "next/server";
import { getTemplateById, renderHtml, type EmailBlock } from "@/lib/emails";
import { apiError } from "@/lib/api-errors";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const template = getTemplateById(id);
  if (!template) return apiError("TEMPLATE_NOT_FOUND", 404);
  return NextResponse.json({ html: renderHtml(template) });
}

export async function POST(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const template = getTemplateById(id);
  if (!template) return apiError("TEMPLATE_NOT_FOUND", 404);

  const body = (await request.json()) as { blocks?: EmailBlock[] };
  const preview = body.blocks
    ? { ...template, blocks: body.blocks }
    : template;

  return NextResponse.json({ html: renderHtml(preview) });
}
