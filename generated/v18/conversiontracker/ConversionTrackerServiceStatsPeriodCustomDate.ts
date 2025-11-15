import { z } from 'zod';

export const ConversionTrackerServiceStatsPeriodCustomDate = z.object({
  statsEndDate: z.string().nullable(),
  statsStartDate: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceStatsPeriodCustomDate = z.infer<typeof ConversionTrackerServiceStatsPeriodCustomDate>;
