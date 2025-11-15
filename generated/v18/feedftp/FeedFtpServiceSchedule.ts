import { z } from 'zod';

import { feedFtpServiceScheduleDaily } from './FeedFtpServiceScheduleDaily';
import { feedFtpServiceScheduleHourly } from './FeedFtpServiceScheduleHourly';
import { feedFtpServiceScheduleType } from './FeedFtpServiceScheduleType';
import { feedFtpServiceScheduleWeekly } from './FeedFtpServiceScheduleWeekly';

export const feedFtpServiceSchedule = z.object({
  scheduleDaily: feedFtpServiceScheduleDaily,
  scheduleHourly: feedFtpServiceScheduleHourly,
  scheduleType: feedFtpServiceScheduleType,
  scheduleWeekly: feedFtpServiceScheduleWeekly
}).nullable();

export type FeedFtpServiceSchedule = z.infer<typeof feedFtpServiceSchedule>;
