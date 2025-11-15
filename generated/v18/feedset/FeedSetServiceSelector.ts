import { z } from 'zod';

export const FeedSetServiceSelector = z.object({
  accountId: z.number().int(),
  feedId: z.number().int(),
  feedSetIds: z.array(z.number().int().nullable()).nullable(),
  includeItemCount: z.boolean().nullable()
}).nullable();

export type FeedSetServiceSelector = z.infer<typeof FeedSetServiceSelector>;
