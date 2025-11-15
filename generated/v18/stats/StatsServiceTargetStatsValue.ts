import { z } from 'zod';

import { stats } from './Stats';
import { statsServiceTarget } from './StatsServiceTarget';

export const statsServiceTargetStatsValue = z.object({
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  stats: stats,
  target: statsServiceTarget
}).nullable();

export type StatsServiceTargetStatsValue = z.infer<typeof statsServiceTargetStatsValue>;
