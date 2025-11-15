import { z } from 'zod';

import { VideoServiceApprovalStatus } from './VideoServiceApprovalStatus';
import { VideoServiceProcessStatus } from './VideoServiceProcessStatus';
import { VideoServiceUserStatus } from './VideoServiceUserStatus';
import { VideoServiceCreatedDateRange } from './VideoServiceCreatedDateRange';

export const VideoServiceSelector = z.object({
  accountId: z.number().int(),
  approvalStatuses: z.array(VideoServiceApprovalStatus).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  processStatuses: z.array(VideoServiceProcessStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(VideoServiceUserStatus).nullable(),
  createdDateRange: VideoServiceCreatedDateRange
}).nullable();

export type VideoServiceSelector = z.infer<typeof VideoServiceSelector>;
