import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { apiError } from "@/lib/api-errors";
import { cities, getCityByRank, localizeCity } from "@/lib/data";
import { getLocale } from "@/lib/locale";
import { isMember } from "@/lib/member";
import { SITE_ID, consumeTrial, getTrialStatus, incrementTrial } from "@/lib/trial";

const UNLOCK_COOKIE = "nomad_cities_unlocked";

async function getUnlockedRanks(): Promise<number[]> {
  const jar = await cookies();
  const raw = jar.get(UNLOCK_COOKIE)?.value;
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as number[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function unlockCookieHeader(ranks: number[]): string {
  const maxAge = 365 * 24 * 60 * 60;
  return `${UNLOCK_COOKIE}=${JSON.stringify(ranks)}; Path=/; Max-Age=${maxAge}; SameSite=Lax; HttpOnly`;
}

export async function GET() {
  const locale = await getLocale();
  const member = await isMember();
  const unlockedRanks = await getUnlockedRanks();

  const localized = cities.map((c) => {
    const localizedCity = localizeCity(c, locale);
    const accessible = member || !c.locked || unlockedRanks.includes(c.rank);
    if (!accessible) {
      return {
        ...localizedCity,
        name: "???",
        country: "???",
        costLabel: "—",
        internet: 0,
        safety: 0,
        visa: "—",
      };
    }
    return localizedCity;
  });

  return NextResponse.json({ cities: localized, unlockedRanks, isMember: member });
}

export async function POST(request: NextRequest) {
  const locale = await getLocale();
  const member = await isMember();
  const body = await request.json().catch(() => ({}));
  const rank = Number(body.rank);

  if (!rank || !Number.isFinite(rank)) {
    return apiError("CITY_RANK_REQUIRED", 400);
  }

  const city = getCityByRank(rank);
  if (!city) {
    return apiError("CITY_NOT_FOUND", 404);
  }

  if (!city.locked) {
    return apiError("CITY_ALREADY_FREE", 400);
  }

  const unlockedRanks = await getUnlockedRanks();
  if (unlockedRanks.includes(rank)) {
    return apiError("CITY_ALREADY_UNLOCKED", 400);
  }

  if (member) {
    const nextRanks = [...unlockedRanks, rank];
    const res = NextResponse.json({
      ok: true,
      city: localizeCity(city, locale),
      unlockedRanks: nextRanks,
      trial: await getTrialStatus(SITE_ID, true),
    });
    res.headers.append("Set-Cookie", unlockCookieHeader(nextRanks));
    return res;
  }

  const access = await consumeTrial(SITE_ID, false);
  if (!access.consumed) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const inc = await incrementTrial(SITE_ID);
  const nextRanks = [...unlockedRanks, rank];
  const res = NextResponse.json({
    ok: true,
    city: localizeCity(city, locale),
    unlockedRanks: nextRanks,
    trial: {
      ...(await getTrialStatus(SITE_ID, false)),
      used: inc.used,
      remaining: inc.remaining,
    },
  });
  res.headers.append("Set-Cookie", inc.cookieHeader);
  res.headers.append("Set-Cookie", unlockCookieHeader(nextRanks));
  return res;
}
