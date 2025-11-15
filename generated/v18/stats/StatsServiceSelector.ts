import { z } from 'zod';

import { statsServiceStatsPeriod } from './StatsServiceStatsPeriod';
import { statsServicePeriodCustomDate } from './StatsServicePeriodCustomDate';
import { statsServiceTargetType } from './StatsServiceTargetType';
import { statsServiceType } from './StatsServiceType';

export const statsServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adIds: z.array(z.number().int().nullable()).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  statsPeriod: statsServiceStatsPeriod,
  periodCustomDate: statsServicePeriodCustomDate,
  targetTypes: z.array(statsServiceTargetType).nullable(),
  type: statsServiceType,
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type StatsServiceSelector = z.infer<typeof statsServiceSelector>;
