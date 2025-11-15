import { z } from 'zod';

export const feedFtpServiceScheduleDaily = z.object({
  time: z.number().int().nullable()
}).nullable();

export type FeedFtpServiceScheduleDaily = z.infer<typeof feedFtpServiceScheduleDaily>;
