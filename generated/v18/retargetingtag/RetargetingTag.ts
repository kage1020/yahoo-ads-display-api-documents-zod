import { z } from 'zod';

import { RetargetingTagServiceApprovalStatus } from './RetargetingTagServiceApprovalStatus';

export const RetargetingTag = z.object({
  accountId: z.number().int().nullable(),
  approvalStatus: RetargetingTagServiceApprovalStatus,
  retargetingTagId: z.string().nullable(),
  advancedTag: z.string().nullable()
}).nullable();

export type RetargetingTag = z.infer<typeof RetargetingTag>;
