/** Re-export email validation as AI scoring for API compatibility */
export {
  validateEmail as scoreEmail,
  analyzeWaitlistEmails as analyzeWaitlist,
} from "./email-validator";
export type {
  EmailValidation as LeadScore,
  WaitlistEmailReport as WaitlistAnalysis,
} from "./email-validator";
