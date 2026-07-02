/**
 * 计算站点在全厂的上线序号（用于飞书通知）
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

function loadJson(path) {
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf8"));
}

/** 合并 history + sites.json 得到各站首次上线时间 */
export function buildFirstDeployMap() {
  const state = loadJson(join(root, "state.json")) || {};
  const sitesPath = join(root, "sites", "intercom-pulse", "data", "sites.json");
  const sites = loadJson(sitesPath) || [];

  const firstAt = new Map();
  for (const h of state.history || []) {
    if (!h.deployedAt) continue;
    const prev = firstAt.get(h.verticalId);
    if (!prev || h.deployedAt < prev) firstAt.set(h.verticalId, h.deployedAt);
  }
  for (const s of sites) {
    if (!s.deployedAt) continue;
    const prev = firstAt.get(s.id);
    if (!prev || s.deployedAt < prev) firstAt.set(s.id, s.deployedAt);
  }
  return { firstAt, state };
}

/** 已部署上线的站点 ID 列表（有公网 URL） */
export function getLiveSiteIds(extraSiteId) {
  const urls = loadJson(join(root, "scripts", "sites-deploy-urls.json")) || {};
  const ids = new Set(Object.keys(urls));
  if (extraSiteId) ids.add(extraSiteId);
  return [...ids];
}

/**
 * 上线序号：有日期的按时间升序，无日期的排在后面（按 id 稳定排序）
 */
export function getSiteDeployOrdinal(siteId) {
  const { firstAt } = buildFirstDeployMap();
  const live = getLiveSiteIds(siteId);
  const known = live.filter((id) => firstAt.has(id)).sort((a, b) => firstAt.get(a).localeCompare(firstAt.get(b)));
  const unknown = live.filter((id) => !firstAt.has(id)).sort();
  const ordered = [...known, ...unknown];
  const index = ordered.indexOf(siteId);
  return {
    ordinal: index >= 0 ? index + 1 : null,
    totalLive: ordered.length,
    ordered,
  };
}

/** 飞书文案：全厂第 N/M 个上线站点 */
export function formatSiteDeployLabel(siteId) {
  const { ordinal, totalLive } = getSiteDeployOrdinal(siteId);
  if (!ordinal) return `全厂上线站点（共 ${totalLive} 个）`;
  return `全厂第 ${ordinal}/${totalLive} 个上线站点`;
}

/** 多站摘要（健康巡检失败列表） */
export function formatSiteDeployLabelShort(siteId) {
  const { ordinal, totalLive } = getSiteDeployOrdinal(siteId);
  if (!ordinal) return siteId;
  return `${siteId}（第 ${ordinal}/${totalLive} 站）`;
}

/** 工厂概况一行 */
export function formatFactoryDeploySummary() {
  const { state } = buildFirstDeployMap();
  const totalLive = getLiveSiteIds().length;
  const verticalNo = typeof state.lastIndex === "number" ? state.lastIndex + 1 : null;
  const parts = [`全厂 ${totalLive} 个站点已上线`];
  if (verticalNo) parts.push(`垂类队列 #${verticalNo}`);
  return parts.join(" · ");
}
