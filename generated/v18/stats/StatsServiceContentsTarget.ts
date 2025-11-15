import { z } from 'zod';

import { StatsServiceDeliverType } from './StatsServiceDeliverType';

export const StatsServiceContentsTarget = z.object({
  deliverType: StatsServiceDeliverType,
  contentsKeywordListName: z.string().nullable()
}).nullable();

export type StatsServiceContentsTarget = z.infer<typeof StatsServiceContentsTarget>;
