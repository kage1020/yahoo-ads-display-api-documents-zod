import { z } from 'zod';

import { StatsServiceStatsPeriod } from './StatsServiceStatsPeriod';
import { StatsServicePeriodCustomDate } from './StatsServicePeriodCustomDate';
import { StatsServiceTargetType } from './StatsServiceTargetType';
import { StatsServiceType } from './StatsServiceType';

export const StatsServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adIds: z.array(z.number().int().nullable()).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  statsPeriod: StatsServiceStatsPeriod,
  periodCustomDate: StatsServicePeriodCustomDate,
  targetTypes: z.array(StatsServiceTargetType).nullable(),
  type: StatsServiceType,
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type StatsServiceSelector = z.infer<typeof StatsServiceSelector>;
