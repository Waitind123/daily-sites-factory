import {
  FREE_TRIAL_LIMIT,
  getTrialStatus,
  consumeTrial,
  incrementTrial,
  getTrialCookieName,
} from "./trial-core";

export const SITE_ID = "changelog-hub";

export { FREE_TRIAL_LIMIT, consumeTrial, incrementTrial, getTrialCookieName };

export async function getTrialInfo(isMember: boolean) {
  return getTrialStatus(SITE_ID, isMember);
}
