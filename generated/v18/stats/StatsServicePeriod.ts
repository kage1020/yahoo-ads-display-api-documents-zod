import { z } from 'zod';

import { statsServicePeriodDatetime } from './StatsServicePeriodDatetime';

export const statsServicePeriod = z.object({
  periodEndDate: statsServicePeriodDatetime,
  periodStartDate: statsServicePeriodDatetime
}).nullable();

export type StatsServicePeriod = z.infer<typeof statsServicePeriod>;
