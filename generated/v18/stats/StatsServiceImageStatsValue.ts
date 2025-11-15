import { z } from 'zod';

import { Stats } from './Stats';

export const StatsServiceImageStatsValue = z.object({
  mediaId: z.number().int().nullable(),
  mediaName: z.string().nullable(),
  mediaTitle: z.string().nullable(),
  stats: Stats
}).nullable();

export type StatsServiceImageStatsValue = z.infer<typeof StatsServiceImageStatsValue>;
