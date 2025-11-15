import { z } from 'zod';

import { Error } from './Error';
import { FeedDataServiceUploadReturnValue } from './FeedDataServiceUploadReturnValue';

export const FeedDataServiceUploadResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: FeedDataServiceUploadReturnValue
}).nullable();

export type FeedDataServiceUploadResponse = z.infer<typeof FeedDataServiceUploadResponse>;
