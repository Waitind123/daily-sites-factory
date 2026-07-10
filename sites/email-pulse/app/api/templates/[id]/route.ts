import { NextRequest, NextResponse } from "next/server";
import {
  getTemplateById,
  renderHtml,
  updateTemplateBlocks,
  type EmailBlock,
} from "@/lib/emails";
import { apiError } from "@/lib/api-errors";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const template = getTemplateById(id);
    if (!template) return apiError("TEMPLATE_NOT_FOUND", 404);

    const body = (await request.json()) as { blocks?: EmailBlock[] };
    if (!body.blocks?.length) return apiError("TEMPLATE_UPDATE_FAILED", 400);

    const updated = updateTemplateBlocks(id, body.blocks);
    if (!updated) return apiError("TEMPLATE_UPDATE_FAILED", 500);

    return NextResponse.json({ template: updated });
  } catch (error) {
    console.error("Template update error:", error);
    return apiError("TEMPLATE_UPDATE_FAILED", 500);
  }
}
