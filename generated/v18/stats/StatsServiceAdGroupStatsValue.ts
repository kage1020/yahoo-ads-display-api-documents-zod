import { z } from 'zod';

import { stats } from './Stats';

export const statsServiceAdGroupStatsValue = z.object({
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  stats: stats
}).nullable();

export type StatsServiceAdGroupStatsValue = z.infer<typeof statsServiceAdGroupStatsValue>;
