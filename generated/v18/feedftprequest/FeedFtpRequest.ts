import { z } from 'zod';

export const feedFtpRequest = z.object({
  feedId: z.number().int().nullable()
}).nullable();

export type FeedFtpRequest = z.infer<typeof feedFtpRequest>;
