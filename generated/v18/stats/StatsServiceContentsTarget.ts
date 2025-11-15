import { z } from 'zod';

import { statsServiceDeliverType } from './StatsServiceDeliverType';

export const statsServiceContentsTarget = z.object({
  deliverType: statsServiceDeliverType,
  contentsKeywordListName: z.string().nullable()
}).nullable();

export type StatsServiceContentsTarget = z.infer<typeof statsServiceContentsTarget>;
