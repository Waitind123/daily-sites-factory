import {
  FREE_TRIAL_LIMIT,
  getTrialStatus,
  consumeTrial,
  incrementTrial,
  getTrialCookieName,
} from "./trial-core";

export const SITE_ID = "feature-vote";

export { FREE_TRIAL_LIMIT, consumeTrial, incrementTrial, getTrialCookieName };

export async function getTrialInfo(isMember: boolean) {
  return getTrialStatus(SITE_ID, isMember);
}

export async function useTrial(isMember: boolean) {
  return consumeTrial(SITE_ID, isMember);
}

export async function recordTrialUse() {
  const { incrementTrial } = await import("./trial-core");
  const result = await incrementTrial(SITE_ID);
  if (result.wasFirstTrial) {
    const { reportReferralTrialComplete } = await import("./referral-server");
    await reportReferralTrialComplete(SITE_ID);
  }
  return result;
}
