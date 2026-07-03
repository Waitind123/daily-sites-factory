import { FREE_TRIAL_LIMIT, getTrialStatus, consumeTrial, incrementTrial } from "./trial-core";

export const SITE_ID = "coworking-pass";

export { FREE_TRIAL_LIMIT, getTrialStatus, consumeTrial, incrementTrial };

export async function getTrialInfo(isMember: boolean) {
  return getTrialStatus(SITE_ID, isMember);
}
