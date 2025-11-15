import { z } from 'zod';

export const StatsServicePeriodCustomDate = z.object({
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type StatsServicePeriodCustomDate = z.infer<typeof StatsServicePeriodCustomDate>;
