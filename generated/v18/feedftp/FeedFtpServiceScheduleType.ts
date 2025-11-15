import { z } from 'zod';

export const feedFtpServiceScheduleType = z.enum(["HOURLY", "DAILY", "WEEKLY", "UNKNOWN"]).nullable();

export type FeedFtpServiceScheduleType = z.infer<typeof feedFtpServiceScheduleType>;
