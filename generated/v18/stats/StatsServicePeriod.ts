import { z } from 'zod';

import { StatsServicePeriodDatetime } from './StatsServicePeriodDatetime';

export const StatsServicePeriod = z.object({
  periodEndDate: StatsServicePeriodDatetime,
  periodStartDate: StatsServicePeriodDatetime
}).nullable();

export type StatsServicePeriod = z.infer<typeof StatsServicePeriod>;
