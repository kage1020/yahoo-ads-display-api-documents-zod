import { z } from 'zod';

export const feedFtpServiceScheduleWeek = z.enum(["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "UNKNOWN"]).nullable();

export type FeedFtpServiceScheduleWeek = z.infer<typeof feedFtpServiceScheduleWeek>;
