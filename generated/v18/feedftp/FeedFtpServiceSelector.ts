import { z } from 'zod';

export const FeedFtpServiceSelector = z.object({
  accountId: z.number().int(),
  feedIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type FeedFtpServiceSelector = z.infer<typeof FeedFtpServiceSelector>;
