/**
 * 每小时健康巡检配置 — 分层测试与自动修复映射
 */

/** 深度测试（收款/核心功能） */
export const TIER1_SITES = [
  "ai-headshots",
  "intercom-pulse",
  "feature-vote",
  "team-headshots",
];

export const CONTACT_EMAIL = "17722513101@163.com";

/** 1x1 PNG */
export const TINY_TEST_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

export const CHECKOUT_REDIRECT_HOSTS = [
  "buy.polar.sh",
  "checkout.polar.sh",
  "checkout.stripe.com",
  "polar.sh",
];

export const DASHBOARD_REQUIRED_KEYS = [
  "rollup",
  "summary",
  "revenueSprint",
  "visitorTable",
  "promoPerformance",
];

export const REVENUE_JOIN_MARKERS = [
  "checkout",
  "join",
  "Polar",
  "Stripe",
  "¥69",
  "$9.9",
  "9.9",
];

/** 失败类型 → 自动修复动作（按顺序执行） */
export const AUTOFIX_ACTIONS = {
  site_unreachable: ["redeploy"],
  page_http_error: ["redeploy"],
  page_app_error: ["redeploy"],
  trial_api_broken: ["redeploy"],
  checkout_probe_fail: ["sync-polar", "redeploy"],
  checkout_redirect_fail: ["sync-polar", "redeploy"],
  checkout_demo_revenue: ["sync-polar"],
  generate_api_fail: ["redeploy"],
  boards_api_fail: ["redeploy"],
  tickets_api_fail: ["redeploy"],
  dashboard_api_fail: ["redeploy"],
  dashboard_stale_schema: ["redeploy"],
  collect_pipeline_fail: ["redeploy"],
  missing_contact_email: ["sync-footer", "inject-contact-bar", "redeploy"],
  missing_join_cta: ["redeploy"],
  missing_crosssell: ["sync-promo", "redeploy"],
};

export const SYNC_SCRIPTS = {
  "sync-polar": ["node", "scripts/apply-polar-api-checkout.mjs"],
  "sync-footer": ["node", "scripts/sync-footer-contact.mjs"],
  "inject-contact-bar": ["node", "scripts/inject-fixed-contact-bar.mjs"],
  "sync-promo": ["node", "scripts/sync-promo-cross-sell.mjs"],
  "patch-promo": ["node", "scripts/patch-promo-layouts.mjs"],
};
