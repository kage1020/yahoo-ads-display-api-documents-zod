import { z } from 'zod';

export const adGroupTargetServiceDayOfWeek = z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDayOfWeek = z.infer<typeof adGroupTargetServiceDayOfWeek>;
