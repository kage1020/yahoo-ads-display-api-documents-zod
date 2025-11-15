import { z } from 'zod';

export const brandLiftServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type BrandLiftServiceApprovalStatus = z.infer<typeof brandLiftServiceApprovalStatus>;
