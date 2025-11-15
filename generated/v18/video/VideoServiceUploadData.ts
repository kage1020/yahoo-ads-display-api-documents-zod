import { z } from 'zod';

import { VideoServiceUserStatus } from './VideoServiceUserStatus';

export const VideoServiceUploadData = z.object({
  accountId: z.number().int().nullable(),
  mediaId: z.number().int().nullable(),
  videoName: z.string().nullable(),
  videoTitle: z.string().nullable(),
  userStatus: VideoServiceUserStatus
}).nullable();

export type VideoServiceUploadData = z.infer<typeof VideoServiceUploadData>;
