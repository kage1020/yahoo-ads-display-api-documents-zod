import { z } from 'zod';

import { StatsServiceDeliverType } from './StatsServiceDeliverType';

export const StatsServiceAudienceListTarget = z.object({
  deliverType: StatsServiceDeliverType,
  audienceListName: z.string().nullable()
}).nullable();

export type StatsServiceAudienceListTarget = z.infer<typeof StatsServiceAudienceListTarget>;
