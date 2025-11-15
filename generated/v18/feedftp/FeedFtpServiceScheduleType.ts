import { z } from 'zod';

export const FeedFtpServiceScheduleType = z.enum(["HOURLY", "DAILY", "WEEKLY", "UNKNOWN"]).nullable();

export type FeedFtpServiceScheduleType = z.infer<typeof FeedFtpServiceScheduleType>;
