import { z } from 'zod';

export const FeedFtpServiceScheduleDaily = z.object({
  time: z.number().int().nullable()
}).nullable();

export type FeedFtpServiceScheduleDaily = z.infer<typeof FeedFtpServiceScheduleDaily>;
