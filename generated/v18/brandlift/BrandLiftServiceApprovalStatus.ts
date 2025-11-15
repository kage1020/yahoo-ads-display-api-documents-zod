import { z } from 'zod';

export const BrandLiftServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type BrandLiftServiceApprovalStatus = z.infer<typeof BrandLiftServiceApprovalStatus>;
