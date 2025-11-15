import { z } from 'zod';

export const GuaranteedAdGroupAdServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceApprovalStatus = z.infer<typeof GuaranteedAdGroupAdServiceApprovalStatus>;
