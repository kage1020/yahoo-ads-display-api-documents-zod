import { z } from 'zod';

import { StatsServicePeriod } from './StatsServicePeriod';
import { StatsServiceValue } from './StatsServiceValue';

export const StatsServicePage = z.object({
  period: StatsServicePeriod,
  totalNumEntries: z.number().int(),
  values: z.array(StatsServiceValue).nullable()
}).nullable();

export type StatsServicePage = z.infer<typeof StatsServicePage>;
