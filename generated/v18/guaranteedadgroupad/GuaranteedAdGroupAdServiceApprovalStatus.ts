import { z } from 'zod';

export const guaranteedAdGroupAdServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceApprovalStatus = z.infer<typeof guaranteedAdGroupAdServiceApprovalStatus>;
