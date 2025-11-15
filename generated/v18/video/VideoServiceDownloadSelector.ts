import { z } from 'zod';

import { VideoServiceQualityType } from './VideoServiceQualityType';

export const VideoServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  mediaId: z.number().int(),
  qualityType: VideoServiceQualityType
}).nullable();

export type VideoServiceDownloadSelector = z.infer<typeof VideoServiceDownloadSelector>;
