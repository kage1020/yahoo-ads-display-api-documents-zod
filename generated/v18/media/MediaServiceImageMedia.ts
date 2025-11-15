import { z } from 'zod';

import { MediaServiceType } from './MediaServiceType';
import { MediaServiceFileType } from './MediaServiceFileType';

export const MediaServiceImageMedia = z.object({
  mediaType: MediaServiceType,
  aspectRatio: z.string().nullable(),
  data: z.string().nullable(),
  fileSize: z.number().int().nullable(),
  height: z.number().int().nullable(),
  mediaAdFormat: z.string().nullable(),
  mediaFileType: MediaServiceFileType,
  width: z.number().int().nullable(),
  upscaleImageEnabled: z.boolean().nullable()
}).nullable();

export type MediaServiceImageMedia = z.infer<typeof MediaServiceImageMedia>;
