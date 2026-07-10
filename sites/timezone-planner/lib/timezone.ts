export type Participant = {
  id: string;
  name: string;
  timezone: string;
  workStart: number;
  workEnd: number;
};

export type MeetingSlot = {
  startUtc: string;
  endUtc: string;
  startLabel: string;
  endLabel: string;
  miseryScore: number;
  miseryDetails: { name: string; localTime: string; misery: number }[];
  fairnessNote: string;
};

export type PlanResult = {
  slots: MeetingSlot[];
  participants: Participant[];
  durationMinutes: number;
  daysScanned: number;
  totalOverlapHours: number;
};

export const CITY_PRESETS = [
  { id: "shanghai", name: "上海", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  { id: "beijing", name: "北京", timezone: "Asia/Shanghai", flag: "🇨🇳" },
  { id: "singapore", name: "新加坡", timezone: "Asia/Singapore", flag: "🇸🇬" },
  { id: "tokyo", name: "东京", timezone: "Asia/Tokyo", flag: "🇯🇵" },
  { id: "sydney", name: "悉尼", timezone: "Australia/Sydney", flag: "🇦🇺" },
  { id: "london", name: "伦敦", timezone: "Europe/London", flag: "🇬🇧" },
  { id: "berlin", name: "柏林", timezone: "Europe/Berlin", flag: "🇩🇪" },
  { id: "paris", name: "巴黎", timezone: "Europe/Paris", flag: "🇫🇷" },
  { id: "newyork", name: "纽约", timezone: "America/New_York", flag: "🇺🇸" },
  { id: "losangeles", name: "洛杉矶", timezone: "America/Los_Angeles", flag: "🇺🇸" },
  { id: "chicago", name: "芝加哥", timezone: "America/Chicago", flag: "🇺🇸" },
  { id: "toronto", name: "多伦多", timezone: "America/Toronto", flag: "🇨🇦" },
  { id: "dubai", name: "迪拜", timezone: "Asia/Dubai", flag: "🇦🇪" },
  { id: "mumbai", name: "孟买", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { id: "bangalore", name: "班加罗尔", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { id: "saopaulo", name: "圣保罗", timezone: "America/Sao_Paulo", flag: "🇧🇷" },
] as const;

function getLocalHour(date: Date, timezone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    hour12: false,
  }).formatToParts(date);
  const hour = parts.find((p) => p.type === "hour")?.value ?? "0";
  return parseInt(hour, 10) % 24;
}

function getLocalMinute(date: Date, timezone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    minute: "numeric",
  }).formatToParts(date);
  return parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
}

function formatLocalTime(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: timezone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function formatTimeOnly(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function getLocalDayOfWeek(date: Date, timezone: string): number {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
  }).format(date);
  const map: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  return map[weekday] ?? 0;
}

function isWeekend(date: Date, timezone: string): boolean {
  const dow = getLocalDayOfWeek(date, timezone);
  return dow === 0 || dow === 6;
}

function isWithinWorkingHours(
  date: Date,
  participant: Participant
): boolean {
  const hour = getLocalHour(date, participant.timezone);
  const minute = getLocalMinute(date, participant.timezone);
  const decimalHour = hour + minute / 60;
  return decimalHour >= participant.workStart && decimalHour < participant.workEnd;
}

function miseryForHour(hour: number, workStart: number, workEnd: number): number {
  const center = (workStart + workEnd) / 2;
  const distFromCenter = Math.abs(hour + 0.5 - center);
  const range = (workEnd - workStart) / 2;

  if (hour < workStart || hour >= workEnd) return 10;
  if (distFromCenter <= range * 0.3) return 0;
  if (distFromCenter <= range * 0.6) return 1;
  if (distFromCenter <= range * 0.85) return 2;
  return 3;
}

function slotMisery(
  startDate: Date,
  participants: Participant[]
): { total: number; details: MeetingSlot["miseryDetails"] } {
  const details = participants.map((p) => {
    const hour = getLocalHour(startDate, p.timezone);
    const misery = miseryForHour(hour, p.workStart, p.workEnd);
    return {
      name: p.name,
      localTime: formatTimeOnly(startDate, p.timezone),
      misery,
    };
  });
  const total = details.reduce((sum, d) => sum + d.misery, 0);
  return { total, details };
}

function fairnessNote(details: MeetingSlot["miseryDetails"]): string {
  const worst = details.reduce((a, b) => (a.misery > b.misery ? a : b));
  if (worst.misery === 0) return "全员舒适时段，无需轮换";
  if (worst.misery <= 2) return `${worst.name} 稍偏早/晚（${worst.localTime}），下次可轮换`;
  return `${worst.name} 在 ${worst.localTime} 较辛苦，建议下次选其他时段公平轮换`;
}

export function planMeeting(
  participants: Participant[],
  durationMinutes: number,
  daysToScan = 7
): PlanResult {
  if (participants.length < 2) {
    return {
      slots: [],
      participants,
      durationMinutes,
      daysScanned: daysToScan,
      totalOverlapHours: 0,
    };
  }

  const now = new Date();
  const startScan = new Date(now);
  startScan.setMinutes(Math.ceil(startScan.getMinutes() / 30) * 30, 0, 0);

  const endScan = new Date(startScan);
  endScan.setDate(endScan.getDate() + daysToScan);

  const slotsNeeded = Math.ceil(durationMinutes / 30);
  const candidateSlots: MeetingSlot[] = [];
  let overlapHalfHours = 0;

  const cursor = new Date(startScan);
  while (cursor < endScan) {
    const allInWork = participants.every((p) => {
      if (isWeekend(cursor, p.timezone)) return false;
      return isWithinWorkingHours(cursor, p);
    });

    if (allInWork) {
      overlapHalfHours++;
      let consecutive = 1;
      const slotStart = new Date(cursor);

      while (consecutive < slotsNeeded) {
        const next = new Date(cursor.getTime() + consecutive * 30 * 60 * 1000);
        if (next >= endScan) break;
        const allStill = participants.every((p) => {
          if (isWeekend(next, p.timezone)) return false;
          return isWithinWorkingHours(next, p);
        });
        if (!allStill) break;
        consecutive++;
      }

      if (consecutive >= slotsNeeded) {
        const slotEnd = new Date(slotStart.getTime() + durationMinutes * 60 * 1000);
        const { total, details } = slotMisery(slotStart, participants);

        candidateSlots.push({
          startUtc: slotStart.toISOString(),
          endUtc: slotEnd.toISOString(),
          startLabel: participants
            .map((p) => `${p.name}: ${formatLocalTime(slotStart, p.timezone)}`)
            .join(" · "),
          endLabel: formatLocalTime(slotEnd, participants[0].timezone),
          miseryScore: total,
          miseryDetails: details,
          fairnessNote: fairnessNote(details),
        });

        cursor.setTime(cursor.getTime() + durationMinutes * 60 * 1000);
        continue;
      }
    }

    cursor.setTime(cursor.getTime() + 30 * 60 * 1000);
  }

  const uniqueByStart = new Map<string, MeetingSlot>();
  for (const slot of candidateSlots) {
    const key = slot.startUtc.slice(0, 16);
    const existing = uniqueByStart.get(key);
    if (!existing || slot.miseryScore < existing.miseryScore) {
      uniqueByStart.set(key, slot);
    }
  }

  const slots = Array.from(uniqueByStart.values())
    .sort((a, b) => a.miseryScore - b.miseryScore || a.startUtc.localeCompare(b.startUtc))
    .slice(0, 12);

  return {
    slots,
    participants,
    durationMinutes,
    daysScanned: daysToScan,
    totalOverlapHours: Math.round((overlapHalfHours / 2) * 10) / 10,
  };
}

export function getCurrentTimeInZone(timezone: string): string {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export function getUtcOffset(timezone: string): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    timeZoneName: "shortOffset",
  });
  const parts = formatter.formatToParts(now);
  return parts.find((p) => p.type === "timeZoneName")?.value ?? "UTC";
}

export type TimelineHour = {
  hour: number;
  inWork: boolean;
  label: string;
};

export function getDayTimeline(
  participant: Participant,
  referenceDate = new Date()
): TimelineHour[] {
  const timeline: TimelineHour[] = [];
  for (let h = 0; h < 24; h++) {
    timeline.push({
      hour: h,
      inWork: h >= participant.workStart && h < participant.workEnd,
      label: `${h.toString().padStart(2, "0")}:00`,
    });
  }
  return timeline;
}
