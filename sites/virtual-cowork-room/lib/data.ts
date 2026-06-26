export type RoomTypeMeta = {
  id: string;
  icon: string;
  duration: number;
  activeUsers: number;
};

export const roomTypeMeta: RoomTypeMeta[] = [
  { id: "deep-focus", icon: "🎯", duration: 90, activeUsers: 47 },
  { id: "pomodoro", icon: "🍅", duration: 25, activeUsers: 83 },
  { id: "creative", icon: "💡", duration: 45, activeUsers: 31 },
  { id: "morning-sync", icon: "🌅", duration: 60, activeUsers: 56 },
];

export const ambientSoundIcons: Record<string, string> = {
  cafe: "☕",
  rain: "🌧️",
  library: "📚",
  forest: "🌲",
  none: "🔇",
};

export const virtualCoworkers = [
  { id: "1", name: "Alex", avatar: "👨‍💻" },
  { id: "2", name: "Mia", avatar: "👩‍🎨" },
  { id: "3", name: "Ken", avatar: "✍️" },
  { id: "4", name: "Sara", avatar: "📋" },
  { id: "5", name: "Leo", avatar: "📊" },
  { id: "6", name: "Yuki", avatar: "⚛️" },
  { id: "7", name: "Emma", avatar: "🔍" },
  { id: "8", name: "Tom", avatar: "🚀" },
];

export const todayStats = {
  activeSessions: 217,
  totalFocusHours: 1843,
  avgSessionMin: 52,
};
