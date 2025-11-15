import { z } from 'zod';

import { Stats } from './Stats';

export const StatsServiceAdStatsValue = z.object({
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adId: z.number().int().nullable(),
  adName: z.string().nullable(),
  stats: Stats
}).nullable();

export type StatsServiceAdStatsValue = z.infer<typeof StatsServiceAdStatsValue>;
