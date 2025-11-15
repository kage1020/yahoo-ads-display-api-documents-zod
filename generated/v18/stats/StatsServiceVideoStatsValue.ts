import { z } from 'zod';

import { stats } from './Stats';

export const statsServiceVideoStatsValue = z.object({
  mediaId: z.number().int().nullable(),
  videoName: z.string().nullable(),
  videoTitle: z.string().nullable(),
  stats: stats
}).nullable();

export type StatsServiceVideoStatsValue = z.infer<typeof statsServiceVideoStatsValue>;
