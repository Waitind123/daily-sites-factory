import { NextRequest, NextResponse } from "next/server";
import type { GridRegion, TransportMode } from "@/lib/calculator";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { apiError } from "@/lib/api-errors";
import { getLocale } from "@/lib/locale";
import { getScenarioLabels } from "@/lib/copy-app";
import {
  calculateTeamCommute,
  type EmployeeEntry,
} from "@/lib/team-commute";

const VALID_MODES = new Set(["car", "bus", "subway", "ebike", "walk"]);
const VALID_GRIDS = new Set(["cn", "us", "eu", "global"]);

function parseEmployees(raw: unknown): EmployeeEntry[] | null {
  if (!Array.isArray(raw) || raw.length === 0) return null;

  const employees: EmployeeEntry[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") return null;
    const commuteKm = Number(item.commuteKm);
    const officeDaysPerWeek = Number(item.officeDaysPerWeek);
    const transportMode = item.transportMode as TransportMode;
    const gridRegion = item.gridRegion as GridRegion;

    if (!Number.isFinite(commuteKm) || commuteKm < 0 || commuteKm > 200) return null;
    if (!Number.isFinite(officeDaysPerWeek) || officeDaysPerWeek < 0 || officeDaysPerWeek > 5) {
      return null;
    }
    if (!VALID_MODES.has(transportMode)) return null;
    if (!VALID_GRIDS.has(gridRegion)) return null;

    employees.push({
      id: String(item.id || Math.random()),
      name: String(item.name || "Employee"),
      commuteKm,
      officeDaysPerWeek,
      transportMode,
      gridRegion,
    });
  }
  return employees;
}

export async function POST(request: NextRequest) {
  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const body = await request.json().catch(() => ({}));
  const employees = parseEmployees(body.employees);

  if (!employees) {
    return apiError("INVALID_EMPLOYEES", 400);
  }

  if (!member && employees.length > 20) {
    return apiError("TOO_MANY_EMPLOYEES", 400);
  }

  const locale = await getLocale();
  const labels = getScenarioLabels(locale);
  const result = calculateTeamCommute(employees, labels.current);

  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({ ok: true, result, remaining });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({ ok: true, result, remaining });
}
