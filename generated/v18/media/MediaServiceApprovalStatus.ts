import { z } from 'zod';

export const MediaServiceApprovalStatus = z.enum(["APPROVED", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "PENDING_UNSPECIFIED_AD", "UNKNOWN"]).nullable();

export type MediaServiceApprovalStatus = z.infer<typeof MediaServiceApprovalStatus>;
