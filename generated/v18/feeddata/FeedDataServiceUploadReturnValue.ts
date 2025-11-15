import { z } from 'zod';

import { FeedDataServiceValue } from './FeedDataServiceValue';

export const FeedDataServiceUploadReturnValue = z.object({
  values: z.array(FeedDataServiceValue).nullable()
}).nullable();

export type FeedDataServiceUploadReturnValue = z.infer<typeof FeedDataServiceUploadReturnValue>;
