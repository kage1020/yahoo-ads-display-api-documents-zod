import { z } from 'zod';

import { mediaServiceApprovalStatus } from './MediaServiceApprovalStatus';
import { mediaServiceUserStatus } from './MediaServiceUserStatus';
import { mediaServiceCreatedDateRange } from './MediaServiceCreatedDateRange';

export const mediaServiceSelector = z.object({
  accountId: z.number().int(),
  approvalStatuses: z.array(mediaServiceApprovalStatus).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(mediaServiceUserStatus).nullable(),
  createdDateRange: mediaServiceCreatedDateRange
}).nullable();

export type MediaServiceSelector = z.infer<typeof mediaServiceSelector>;
