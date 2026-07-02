import {
  FREE_TRIAL_LIMIT,
  getTrialStatus,
  consumeTrial,
  getTrialCookieName,
  incrementTrial as incrementTrialCore,
} from "./trial-core";

export const SITE_ID = "nomad-cities";

export { FREE_TRIAL_LIMIT, getTrialCookieName, getTrialStatus, consumeTrial };

export async function getTrialInfo(isMember: boolean) {
  return getTrialStatus(SITE_ID, isMember);
}

export async function useTrial(isMember: boolean) {
  return consumeTrial(SITE_ID, isMember);
}

export async function incrementTrial(siteId: string = SITE_ID) {
  const result = await incrementTrialCore(siteId);
  if (siteId === SITE_ID && result.wasFirstTrial) {
    const { reportReferralTrialComplete } = await import("./referral-server");
    await reportReferralTrialComplete(SITE_ID);
  }
  return result;
}
