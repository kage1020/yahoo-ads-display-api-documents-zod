import { z } from 'zod';

import { videoServiceExtraSpecs } from './VideoServiceExtraSpecs';
import { videoServiceFileType } from './VideoServiceFileType';

export const videoServiceSetting = z.object({
  extraSpecs: z.array(videoServiceExtraSpecs).nullable(),
  fileSize: z.number().int().nullable(),
  fileType: videoServiceFileType,
  height: z.number().int().nullable(),
  playbackTime: z.number().int().nullable(),
  videoAdFormat: z.string().nullable(),
  videoAspectRatio: z.string().nullable(),
  width: z.number().int().nullable()
}).nullable();

export type VideoServiceSetting = z.infer<typeof videoServiceSetting>;
