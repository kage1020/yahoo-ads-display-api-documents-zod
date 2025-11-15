import { z } from 'zod';

import { videoServiceApprovalStatus } from './VideoServiceApprovalStatus';
import { videoServiceProcessStatus } from './VideoServiceProcessStatus';
import { videoServiceUserStatus } from './VideoServiceUserStatus';
import { videoServiceCreatedDateRange } from './VideoServiceCreatedDateRange';

export const videoServiceSelector = z.object({
  accountId: z.number().int(),
  approvalStatuses: z.array(videoServiceApprovalStatus).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  processStatuses: z.array(videoServiceProcessStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(videoServiceUserStatus).nullable(),
  createdDateRange: videoServiceCreatedDateRange
}).nullable();

export type VideoServiceSelector = z.infer<typeof videoServiceSelector>;
