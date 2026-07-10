import { NextResponse } from "next/server";
import { isReplicateConfigured } from "@/lib/replicate";
import { polarPaymentsConfigured } from "@/lib/polar-checkout";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    replicate: isReplicateConfigured(),
    polar: polarPaymentsConfigured(),
  });
}
