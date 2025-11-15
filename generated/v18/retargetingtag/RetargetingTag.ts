import { z } from 'zod';

import { retargetingTagServiceApprovalStatus } from './RetargetingTagServiceApprovalStatus';

export const retargetingTag = z.object({
  accountId: z.number().int().nullable(),
  approvalStatus: retargetingTagServiceApprovalStatus,
  retargetingTagId: z.string().nullable(),
  advancedTag: z.string().nullable()
}).nullable();

export type RetargetingTag = z.infer<typeof retargetingTag>;
