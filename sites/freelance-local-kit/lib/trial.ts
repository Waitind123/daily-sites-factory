import { getTrialStatus, FREE_TRIAL_LIMIT, consumeTrial, incrementTrial } from "./trial-core";

export const SITE_ID = "freelance-local-kit";
export { FREE_TRIAL_LIMIT, getTrialStatus, consumeTrial, incrementTrial };

export async function getTrialInfo(isMember: boolean) {
  return getTrialStatus(SITE_ID, isMember);
}
