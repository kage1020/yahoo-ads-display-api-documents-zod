import { z } from 'zod';

import { Stats } from './Stats';
import { StatsServiceTarget } from './StatsServiceTarget';

export const StatsServiceTargetStatsValue = z.object({
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  stats: Stats,
  target: StatsServiceTarget
}).nullable();

export type StatsServiceTargetStatsValue = z.infer<typeof StatsServiceTargetStatsValue>;
