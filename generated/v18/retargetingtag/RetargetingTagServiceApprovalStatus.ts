import { z } from 'zod';

export const retargetingTagServiceApprovalStatus = z.enum(["AVAILABLE", "DISAPPROVED", "DISAPPROVED_WITH_REVIEW", "UNKNOWN"]).nullable();

export type RetargetingTagServiceApprovalStatus = z.infer<typeof retargetingTagServiceApprovalStatus>;
