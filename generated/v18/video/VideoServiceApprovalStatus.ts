import { z } from 'zod';

export const videoServiceApprovalStatus = z.enum(["APPROVED", "REVIEW", "PENDING_UNSPECIFIED_AD", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type VideoServiceApprovalStatus = z.infer<typeof videoServiceApprovalStatus>;
