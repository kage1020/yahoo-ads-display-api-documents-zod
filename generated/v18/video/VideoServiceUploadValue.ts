import { z } from 'zod';

import { error } from '../../common/Error';
import { videoServiceUploadData } from './VideoServiceUploadData';

export const videoServiceUploadValue = z.object({
  errors: z.array(error).nullable(),
  uploadData: videoServiceUploadData,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type VideoServiceUploadValue = z.infer<typeof videoServiceUploadValue>;
