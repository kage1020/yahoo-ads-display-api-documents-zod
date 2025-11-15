import { z } from 'zod';

import { FeedFtpServiceScheduleWeek } from './FeedFtpServiceScheduleWeek';

export const FeedFtpServiceScheduleWeekly = z.object({
  scheduleWeek: FeedFtpServiceScheduleWeek,
  time: z.number().int().nullable()
}).nullable();

export type FeedFtpServiceScheduleWeekly = z.infer<typeof FeedFtpServiceScheduleWeekly>;
