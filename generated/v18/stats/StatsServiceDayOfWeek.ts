import { z } from 'zod';

export const StatsServiceDayOfWeek = z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "UNKNOWN"]).nullable();

export type StatsServiceDayOfWeek = z.infer<typeof StatsServiceDayOfWeek>;
