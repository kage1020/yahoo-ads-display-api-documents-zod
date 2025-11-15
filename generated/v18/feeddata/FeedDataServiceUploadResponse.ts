import { z } from 'zod';

import { error } from '../../common/Error';
import { feedDataServiceUploadReturnValue } from './FeedDataServiceUploadReturnValue';

export const feedDataServiceUploadResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: feedDataServiceUploadReturnValue
}).nullable();

export type FeedDataServiceUploadResponse = z.infer<typeof feedDataServiceUploadResponse>;
