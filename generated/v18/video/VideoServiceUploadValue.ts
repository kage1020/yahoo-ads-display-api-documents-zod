import { z } from 'zod';

import { Error } from './Error';
import { VideoServiceUploadData } from './VideoServiceUploadData';

export const VideoServiceUploadValue = z.object({
  errors: z.array(Error).nullable(),
  uploadData: VideoServiceUploadData,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type VideoServiceUploadValue = z.infer<typeof VideoServiceUploadValue>;
