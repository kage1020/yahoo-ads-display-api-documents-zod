import { z } from 'zod';

import { videoServiceUserStatus } from './VideoServiceUserStatus';

export const videoServiceUploadData = z.object({
  accountId: z.number().int().nullable(),
  mediaId: z.number().int().nullable(),
  videoName: z.string().nullable(),
  videoTitle: z.string().nullable(),
  userStatus: videoServiceUserStatus
}).nullable();

export type VideoServiceUploadData = z.infer<typeof videoServiceUploadData>;
