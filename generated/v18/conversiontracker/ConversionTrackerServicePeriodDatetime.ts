import { z } from 'zod';

export const conversionTrackerServicePeriodDatetime = z.object({
  periodDate: z.string().nullable()
}).nullable();

export type ConversionTrackerServicePeriodDatetime = z.infer<typeof conversionTrackerServicePeriodDatetime>;
