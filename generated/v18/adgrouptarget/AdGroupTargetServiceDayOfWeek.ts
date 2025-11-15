import { z } from 'zod';

export const AdGroupTargetServiceDayOfWeek = z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDayOfWeek = z.infer<typeof AdGroupTargetServiceDayOfWeek>;
