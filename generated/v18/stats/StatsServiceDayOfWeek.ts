import { z } from 'zod';

export const statsServiceDayOfWeek = z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "UNKNOWN"]).nullable();

export type StatsServiceDayOfWeek = z.infer<typeof statsServiceDayOfWeek>;
