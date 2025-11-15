import { z } from 'zod';

export const FeedFtpRequest = z.object({
  feedId: z.number().int().nullable()
}).nullable();

export type FeedFtpRequest = z.infer<typeof FeedFtpRequest>;
