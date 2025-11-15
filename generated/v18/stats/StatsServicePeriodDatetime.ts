import { z } from 'zod';

export const statsServicePeriodDatetime = z.object({
  periodDate: z.string().nullable()
}).nullable();

export type StatsServicePeriodDatetime = z.infer<typeof statsServicePeriodDatetime>;
