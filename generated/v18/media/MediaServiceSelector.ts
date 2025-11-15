import { z } from 'zod';

import { MediaServiceApprovalStatus } from './MediaServiceApprovalStatus';
import { MediaServiceUserStatus } from './MediaServiceUserStatus';
import { MediaServiceCreatedDateRange } from './MediaServiceCreatedDateRange';

export const MediaServiceSelector = z.object({
  accountId: z.number().int(),
  approvalStatuses: z.array(MediaServiceApprovalStatus).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(MediaServiceUserStatus).nullable(),
  createdDateRange: MediaServiceCreatedDateRange
}).nullable();

export type MediaServiceSelector = z.infer<typeof MediaServiceSelector>;
