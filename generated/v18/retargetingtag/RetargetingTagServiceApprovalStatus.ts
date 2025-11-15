import { z } from 'zod';

export const RetargetingTagServiceApprovalStatus = z.enum(["AVAILABLE", "DISAPPROVED", "DISAPPROVED_WITH_REVIEW", "UNKNOWN"]).nullable();

export type RetargetingTagServiceApprovalStatus = z.infer<typeof RetargetingTagServiceApprovalStatus>;
