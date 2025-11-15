import { z } from 'zod';

import { stats } from './Stats';

export const statsServiceImageStatsValue = z.object({
  mediaId: z.number().int().nullable(),
  mediaName: z.string().nullable(),
  mediaTitle: z.string().nullable(),
  stats: stats
}).nullable();

export type StatsServiceImageStatsValue = z.infer<typeof statsServiceImageStatsValue>;
