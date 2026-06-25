import {
  FREE_TRIAL_LIMIT,
  getTrialStatus,
  consumeTrial,
  getTrialCookieName,
} from "./trial-core";

export const SITE_ID = "team-headshots";

export { FREE_TRIAL_LIMIT, getTrialCookieName };

export async function getTrialInfo(isMember: boolean) {
  return getTrialStatus(SITE_ID, isMember);
}

export async function useTrial(isMember: boolean) {
  return consumeTrial(SITE_ID, isMember);
}

export async function recordTrialUse() {
  const { incrementTrial } = await import("./trial-core");
  return incrementTrial(SITE_ID);
}
