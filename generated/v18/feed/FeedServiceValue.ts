import { z } from 'zod';

import { Feed } from './Feed';
import { FeedServiceUploadLimit } from './FeedServiceUploadLimit';
import { Error } from './Error';

export const FeedServiceValue = z.object({
  feed: Feed,
  uploadLimits: z.array(FeedServiceUploadLimit).nullable(),
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type FeedServiceValue = z.infer<typeof FeedServiceValue>;
