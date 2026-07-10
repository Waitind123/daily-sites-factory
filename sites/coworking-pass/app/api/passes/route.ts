import { NextRequest, NextResponse } from "next/server";
import { getLocale } from "@/lib/locale";
import { searchSpaces, localizeSpace } from "@/lib/data";

export async function GET(request: NextRequest) {
  const locale = await getLocale();
  const { searchParams } = request.nextUrl;
  const q = searchParams.get("q") ?? undefined;
  const city = searchParams.get("city") ?? undefined;
  const videoOnly = searchParams.get("video") === "1";

  const spaces = searchSpaces(locale, q, city, videoOnly).map((s) => localizeSpace(s, locale));
  return NextResponse.json({ spaces });
}
