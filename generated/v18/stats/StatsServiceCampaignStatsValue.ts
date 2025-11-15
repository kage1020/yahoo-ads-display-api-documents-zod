import { z } from 'zod';

import { Stats } from './Stats';

export const StatsServiceCampaignStatsValue = z.object({
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  stats: Stats
}).nullable();

export type StatsServiceCampaignStatsValue = z.infer<typeof StatsServiceCampaignStatsValue>;
