import { z } from 'zod';

import { Stats } from './Stats';

export const StatsServiceAdGroupStatsValue = z.object({
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  stats: Stats
}).nullable();

export type StatsServiceAdGroupStatsValue = z.infer<typeof StatsServiceAdGroupStatsValue>;
