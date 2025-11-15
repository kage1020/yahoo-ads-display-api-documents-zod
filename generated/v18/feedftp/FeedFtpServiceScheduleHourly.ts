import { z } from 'zod';

export const feedFtpServiceScheduleHourly = z.object({
  interval: z.number().int().nullable()
}).nullable();

export type FeedFtpServiceScheduleHourly = z.infer<typeof feedFtpServiceScheduleHourly>;
