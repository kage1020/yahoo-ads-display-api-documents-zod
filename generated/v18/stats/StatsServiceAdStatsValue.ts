import { z } from 'zod';

import { stats } from './Stats';

export const statsServiceAdStatsValue = z.object({
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adId: z.number().int().nullable(),
  adName: z.string().nullable(),
  stats: stats
}).nullable();

export type StatsServiceAdStatsValue = z.infer<typeof statsServiceAdStatsValue>;
