import { z } from 'zod';

import { statsServicePeriod } from './StatsServicePeriod';
import { statsServiceValue } from './StatsServiceValue';

export const statsServicePage = z.object({
  period: statsServicePeriod,
  totalNumEntries: z.number().int(),
  values: z.array(statsServiceValue).nullable()
}).nullable();

export type StatsServicePage = z.infer<typeof statsServicePage>;
