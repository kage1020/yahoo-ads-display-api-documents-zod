import { z } from 'zod';

import { VideoServiceApprovalStatus } from './VideoServiceApprovalStatus';
import { VideoServiceProcessStatus } from './VideoServiceProcessStatus';
import { VideoServiceUserStatus } from './VideoServiceUserStatus';
import { VideoServiceSetting } from './VideoServiceSetting';

export const Video = z.object({
  accountId: z.number().int().nullable(),
  approvalStatus: VideoServiceApprovalStatus,
  reviewApplicationDate: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  mediaId: z.number().int().nullable(),
  processStatus: VideoServiceProcessStatus,
  userStatus: VideoServiceUserStatus,
  videoName: z.string().nullable(),
  videoSetting: VideoServiceSetting,
  videoTitle: z.string().nullable(),
  createdDate: z.string().nullable()
}).nullable();

export type Video = z.infer<typeof Video>;
