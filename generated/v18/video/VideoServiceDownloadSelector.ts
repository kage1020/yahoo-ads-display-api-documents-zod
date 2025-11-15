import { z } from 'zod';

import { videoServiceQualityType } from './VideoServiceQualityType';

export const videoServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  mediaId: z.number().int(),
  qualityType: videoServiceQualityType
}).nullable();

export type VideoServiceDownloadSelector = z.infer<typeof videoServiceDownloadSelector>;
