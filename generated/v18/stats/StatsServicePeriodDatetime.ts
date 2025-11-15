import { z } from 'zod';

export const StatsServicePeriodDatetime = z.object({
  periodDate: z.string().nullable()
}).nullable();

export type StatsServicePeriodDatetime = z.infer<typeof StatsServicePeriodDatetime>;
