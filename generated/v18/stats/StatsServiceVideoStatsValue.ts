import { z } from 'zod';

import { Stats } from './Stats';

export const StatsServiceVideoStatsValue = z.object({
  mediaId: z.number().int().nullable(),
  videoName: z.string().nullable(),
  videoTitle: z.string().nullable(),
  stats: Stats
}).nullable();

export type StatsServiceVideoStatsValue = z.infer<typeof StatsServiceVideoStatsValue>;
