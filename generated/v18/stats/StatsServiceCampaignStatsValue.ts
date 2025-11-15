import { z } from 'zod';

import { stats } from './Stats';

export const statsServiceCampaignStatsValue = z.object({
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  stats: stats
}).nullable();

export type StatsServiceCampaignStatsValue = z.infer<typeof statsServiceCampaignStatsValue>;
