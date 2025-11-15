import { z } from 'zod';

import { feedFtpServiceScheduleWeek } from './FeedFtpServiceScheduleWeek';

export const feedFtpServiceScheduleWeekly = z.object({
  scheduleWeek: feedFtpServiceScheduleWeek,
  time: z.number().int().nullable()
}).nullable();

export type FeedFtpServiceScheduleWeekly = z.infer<typeof feedFtpServiceScheduleWeekly>;
