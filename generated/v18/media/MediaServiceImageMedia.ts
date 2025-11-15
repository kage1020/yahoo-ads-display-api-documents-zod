import { z } from 'zod';

import { mediaServiceType } from './MediaServiceType';
import { mediaServiceFileType } from './MediaServiceFileType';

export const mediaServiceImageMedia = z.object({
  mediaType: mediaServiceType,
  aspectRatio: z.string().nullable(),
  data: z.string().nullable(),
  fileSize: z.number().int().nullable(),
  height: z.number().int().nullable(),
  mediaAdFormat: z.string().nullable(),
  mediaFileType: mediaServiceFileType,
  width: z.number().int().nullable(),
  upscaleImageEnabled: z.boolean().nullable()
}).nullable();

export type MediaServiceImageMedia = z.infer<typeof mediaServiceImageMedia>;
