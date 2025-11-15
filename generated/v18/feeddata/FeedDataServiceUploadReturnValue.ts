import { z } from 'zod';

import { feedDataServiceValue } from './FeedDataServiceValue';

export const feedDataServiceUploadReturnValue = z.object({
  values: z.array(feedDataServiceValue).nullable()
}).nullable();

export type FeedDataServiceUploadReturnValue = z.infer<typeof feedDataServiceUploadReturnValue>;
