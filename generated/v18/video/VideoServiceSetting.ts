import { z } from 'zod';

import { VideoServiceExtraSpecs } from './VideoServiceExtraSpecs';
import { VideoServiceFileType } from './VideoServiceFileType';

export const VideoServiceSetting = z.object({
  extraSpecs: z.array(VideoServiceExtraSpecs).nullable(),
  fileSize: z.number().int().nullable(),
  fileType: VideoServiceFileType,
  height: z.number().int().nullable(),
  playbackTime: z.number().int().nullable(),
  videoAdFormat: z.string().nullable(),
  videoAspectRatio: z.string().nullable(),
  width: z.number().int().nullable()
}).nullable();

export type VideoServiceSetting = z.infer<typeof VideoServiceSetting>;
