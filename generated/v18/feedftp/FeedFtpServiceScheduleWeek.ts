import { z } from 'zod';

export const FeedFtpServiceScheduleWeek = z.enum(["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "UNKNOWN"]).nullable();

export type FeedFtpServiceScheduleWeek = z.infer<typeof FeedFtpServiceScheduleWeek>;
