import { z } from 'zod';

export const ConversionTrackerServicePeriodDatetime = z.object({
  periodDate: z.string().nullable()
}).nullable();

export type ConversionTrackerServicePeriodDatetime = z.infer<typeof ConversionTrackerServicePeriodDatetime>;
