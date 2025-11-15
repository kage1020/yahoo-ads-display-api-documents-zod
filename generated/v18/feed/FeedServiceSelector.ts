import { z } from 'zod';

export const FeedServiceSelector = z.object({
  accountId: z.number().int(),
  feedIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type FeedServiceSelector = z.infer<typeof FeedServiceSelector>;
