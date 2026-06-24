"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { roomTypes, ambientSounds, virtualCoworkers } from "@/lib/data";

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

export function CoworkRoom() {
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [selectedRoom, setSelectedRoom] = useState(roomTypes[1].id);
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

    const room = roomTypes.find((r) => r.id === selectedRoom)!;
    const res = await fetch("/api/session/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId: room.id, sound: selectedSound }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "无法开始会话");
      setLoading(false);
      return;
    }

    const durationSec = room.duration * 60;
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

  const room = roomTypes.find((r) => r.id === selectedRoom)!;
  const progress = totalSeconds > 0 ? ((totalSeconds - secondsLeft) / totalSeconds) * 100 : 0;
  const sound = ambientSounds.find((s) => s.id === selectedSound);

  if (sessionState === "active" || sessionState === "break") {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-brand-200 bg-gradient-to-b from-brand-50 to-white p-8 text-center">
          <p className="text-sm font-medium text-brand-600 mb-2">
            {sessionState === "active" ? `${room.icon} ${room.name}` : "☕ 休息时间"}
          </p>
          <p className="text-6xl sm:text-7xl font-bold text-stone-900 tabular-nums tracking-tight">
            {formatTime(secondsLeft)}
          </p>
          <div className="mt-6 mx-auto max-w-xs h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-500 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-stone-500">
            {sound && sound.id !== "none" ? `${sound.icon} ${sound.name} 环境音` : "🔇 静音模式"}
            {" · "}
            {virtualCoworkers.length + room.activeUsers} 人正在共工
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {virtualCoworkers.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm"
            >
              <span>{c.avatar}</span>
              <span className="text-stone-600">{c.name}</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={endSession}
            className="rounded-xl border border-stone-300 px-6 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors"
          >
            结束会话
          </button>
        </div>
      </div>
    );
  }

  if (sessionState === "done") {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="text-5xl">🎉</div>
        <h2 className="text-2xl font-bold">专注完成！</h2>
        <p className="text-stone-500">
          你完成了 {room.duration} 分钟的 {room.name} 会话。继续保持！
        </p>
        <button
          type="button"
          onClick={() => setSessionState("idle")}
          className="rounded-xl bg-brand-600 px-8 py-3 text-white font-semibold hover:bg-brand-700 transition-colors"
        >
          开始新会话
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费体验
          </span>
          <Link href="/join" className="font-semibold text-brand-700 hover:underline">
            订阅 $9.9/月 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限共工会话
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
          {error.includes("订阅") && (
            <Link href="/join" className="ml-2 font-semibold underline">
              立即订阅
            </Link>
          )}
        </div>
      )}

      <div>
        <h2 className="text-lg font-bold mb-3">选择共工模式</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {roomTypes.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setSelectedRoom(r.id)}
              className={`rounded-xl border p-4 text-left transition-colors ${
                selectedRoom === r.id
                  ? "border-brand-500 bg-brand-50 ring-2 ring-brand-200"
                  : "border-stone-200 bg-white hover:border-stone-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{r.icon}</span>
                <span className="text-xs text-stone-400">{r.activeUsers} 人在线</span>
              </div>
              <p className="font-semibold mt-2">{r.name}</p>
              <p className="text-xs text-stone-500 mt-1">{r.duration} 分钟 · {r.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-3">环境音</h2>
        <div className="flex flex-wrap gap-2">
          {ambientSounds.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedSound(s.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedSound === s.id
                  ? "bg-brand-600 text-white"
                  : "bg-white border border-stone-200 text-stone-600 hover:border-stone-300"
              }`}
            >
              {s.icon} {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
        <p className="text-sm text-stone-500 text-center mb-3">当前共工室在线</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {virtualCoworkers.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-1.5 rounded-full bg-white border border-stone-200 px-3 py-1 text-xs"
            >
              <span>{c.avatar}</span>
              <span className="text-stone-600">{c.name}</span>
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
        {loading ? "进入中..." : `开始 ${room.duration} 分钟共工 →`}
      </button>
    </div>
  );
}
