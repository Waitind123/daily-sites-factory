"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import {
  getRoomCopy,
  getRoomTypesCopy,
  getAmbientSoundsCopy,
  getApiErrorMessage,
} from "@/lib/copy-app";
import { roomTypeMeta, ambientSoundIcons, virtualCoworkers } from "@/lib/data";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type SessionState = "idle" | "active" | "break" | "done";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export function CoworkRoom({ locale }: { locale: Locale }) {
  const c = getRoomCopy(locale);
  const roomTypes = getRoomTypesCopy(locale);
  const ambientSounds = getAmbientSoundsCopy(locale);

  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string>(roomTypes[1].id);
  const [selectedSound, setSelectedSound] = useState("cafe");
  const [sessionState, setSessionState] = useState<SessionState>("idle");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [loadTrial]);

  useEffect(() => {
    if (sessionState !== "active" && sessionState !== "break") return;

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          if (sessionState === "active") {
            setSessionState("break");
            return 5 * 60;
          }
          setSessionState("done");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [sessionState]);

  async function startSession() {
    setLoading(true);
    setError(null);

    const roomCopy = roomTypes.find((r) => r.id === selectedRoom)!;
    const res = await fetch("/api/session/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId: roomCopy.id, sound: selectedSound }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(getApiErrorMessage(data.code, locale));
      setLoading(false);
      return;
    }

    const meta = roomTypeMeta.find((r) => r.id === roomCopy.id)!;
    const durationSec = meta.duration * 60;
    setTotalSeconds(durationSec);
    setSecondsLeft(durationSec);
    setSessionState("active");
    await loadTrial();
    setLoading(false);
  }

  function endSession() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSessionState("idle");
    setSecondsLeft(0);
  }

  const roomCopy = roomTypes.find((r) => r.id === selectedRoom)!;
  const roomMeta = roomTypeMeta.find((r) => r.id === selectedRoom)!;
  const progress = totalSeconds > 0 ? ((totalSeconds - secondsLeft) / totalSeconds) * 100 : 0;
  const sound = ambientSounds.find((s) => s.id === selectedSound);
  const soundIcon = ambientSoundIcons[selectedSound] ?? "🔇";

  if (sessionState === "active" || sessionState === "break") {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-brand-200 bg-gradient-to-b from-brand-50 to-white p-8 text-center">
          <p className="text-sm font-medium text-brand-500 mb-2">
            {sessionState === "active"
              ? `${roomMeta.icon} ${roomCopy.name}`
              : `☕ ${c.breakTime}`}
          </p>
          <p className="text-6xl sm:text-7xl font-bold text-foreground tabular-nums tracking-tight">
            {formatTime(secondsLeft)}
          </p>
          <div className="mt-6 mx-auto max-w-xs h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-600/100 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            {sound && sound.id !== "none"
              ? `${soundIcon} ${sound.name} ${c.ambientSuffix}`
              : `🔇 ${c.silentMode}`}
            {" · "}
            {virtualCoworkers.length + roomMeta.activeUsers} {c.coworkingNow}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {virtualCoworkers.map((coworker) => (
            <div
              key={coworker.id}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm"
            >
              <span>{coworker.avatar}</span>
              <span className="text-muted">{coworker.name}</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={endSession}
            className="rounded-xl border border-border px-6 py-2.5 text-sm font-medium text-muted hover:bg-surface-muted transition-colors"
          >
            {c.endSession}
          </button>
        </div>
      </div>
    );
  }

  if (sessionState === "done") {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="text-5xl">🎉</div>
        <h2 className="text-2xl font-bold">{c.sessionDone}</h2>
        <p className="text-muted">
          {c.sessionDoneBody(roomMeta.duration, roomCopy.name)}
        </p>
        <button
          type="button"
          onClick={() => setSessionState("idle")}
          className="rounded-xl bg-brand-600 px-8 py-3 text-white font-semibold hover:bg-brand-700 transition-colors"
        >
          {c.startNew}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            {c.freeSessions}{" "}
            <strong>
              {trial.remaining}/{trial.limit}
            </strong>
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            {c.subscribeCta}
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          {c.memberBadge}
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
          {error.includes(locale === "zh" ? "订阅" : "subscribe") && (
            <Link href="/join" className="ml-2 font-semibold underline">
              {c.subscribeNow}
            </Link>
          )}
        </div>
      )}

      <div>
        <h2 className="text-lg font-bold mb-3">{c.chooseMode}</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {roomTypes.map((r) => {
            const meta = roomTypeMeta.find((m) => m.id === r.id)!;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelectedRoom(r.id)}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  selectedRoom === r.id
                    ? "border-brand-500 bg-brand-600/10 ring-2 ring-brand-200"
                    : "border-border bg-surface hover:border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{meta.icon}</span>
                  <span className="text-xs text-muted">
                    {meta.activeUsers} {c.online}
                  </span>
                </div>
                <p className="font-semibold mt-2">{r.name}</p>
                <p className="text-xs text-muted mt-1">
                  {meta.duration} {c.minutes} · {r.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-3">{c.ambientSounds}</h2>
        <div className="flex flex-wrap gap-2">
          {ambientSounds.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedSound(s.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedSound === s.id
                  ? "bg-brand-600 text-white"
                  : "bg-surface border border-border text-muted hover:border-border"
              }`}
            >
              {ambientSoundIcons[s.id]} {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-background p-4">
        <p className="text-sm text-muted text-center mb-3">{c.roomOnline}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {virtualCoworkers.map((coworker) => (
            <div
              key={coworker.id}
              className="flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1 text-xs"
            >
              <span>{coworker.avatar}</span>
              <span className="text-muted">{coworker.name}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        disabled={loading}
        onClick={startSession}
        className="w-full rounded-xl bg-brand-600 px-6 py-4 text-lg font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors disabled:opacity-50"
      >
        {loading ? c.entering : c.startSession(roomMeta.duration)}
      </button>
    </div>
  );
}
