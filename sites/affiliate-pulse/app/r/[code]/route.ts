import { NextRequest, NextResponse } from "next/server";
import { getProgramByCode, recordClick } from "@/lib/affiliates";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const program = getProgramByCode(code);

  if (!program) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  recordClick(code);

  const dest = new URL(program.productUrl);
  dest.searchParams.set("ref", code);
  dest.searchParams.set("via", "affiliate-pulse");

  return NextResponse.redirect(dest.toString());
}
