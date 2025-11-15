import { z } from 'zod';

import { videoServiceApprovalStatus } from './VideoServiceApprovalStatus';
import { videoServiceProcessStatus } from './VideoServiceProcessStatus';
import { videoServiceUserStatus } from './VideoServiceUserStatus';
import { videoServiceSetting } from './VideoServiceSetting';

export const video = z.object({
  accountId: z.number().int().nullable(),
  approvalStatus: videoServiceApprovalStatus,
  reviewApplicationDate: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  mediaId: z.number().int().nullable(),
  processStatus: videoServiceProcessStatus,
  userStatus: videoServiceUserStatus,
  videoName: z.string().nullable(),
  videoSetting: videoServiceSetting,
  videoTitle: z.string().nullable(),
  createdDate: z.string().nullable()
}).nullable();

export type Video = z.infer<typeof video>;
