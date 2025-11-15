import { z } from 'zod';

import { FeedFtpServiceScheduleDaily } from './FeedFtpServiceScheduleDaily';
import { FeedFtpServiceScheduleHourly } from './FeedFtpServiceScheduleHourly';
import { FeedFtpServiceScheduleType } from './FeedFtpServiceScheduleType';
import { FeedFtpServiceScheduleWeekly } from './FeedFtpServiceScheduleWeekly';

export const FeedFtpServiceSchedule = z.object({
  scheduleDaily: FeedFtpServiceScheduleDaily,
  scheduleHourly: FeedFtpServiceScheduleHourly,
  scheduleType: FeedFtpServiceScheduleType,
  scheduleWeekly: FeedFtpServiceScheduleWeekly
}).nullable();

export type FeedFtpServiceSchedule = z.infer<typeof FeedFtpServiceSchedule>;
