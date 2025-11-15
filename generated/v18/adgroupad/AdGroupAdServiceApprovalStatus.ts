import { z } from 'zod';

export const adGroupAdServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type AdGroupAdServiceApprovalStatus = z.infer<typeof adGroupAdServiceApprovalStatus>;
