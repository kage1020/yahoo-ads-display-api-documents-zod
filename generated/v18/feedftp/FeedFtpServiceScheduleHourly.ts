import { z } from 'zod';

export const FeedFtpServiceScheduleHourly = z.object({
  interval: z.number().int().nullable()
}).nullable();

export type FeedFtpServiceScheduleHourly = z.infer<typeof FeedFtpServiceScheduleHourly>;
