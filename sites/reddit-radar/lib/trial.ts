export const SITE_ID = "reddit-radar";

export { FREE_TRIAL_LIMIT, getTrialStatus, consumeTrial, incrementTrial } from "./trial-core";

export async function getTrialInfo(isMember: boolean) {
  const { getTrialStatus } = await import("./trial-core");
  return getTrialStatus(SITE_ID, isMember);
}
