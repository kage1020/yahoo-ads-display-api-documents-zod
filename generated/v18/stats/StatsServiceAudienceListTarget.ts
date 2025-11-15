import { z } from 'zod';

import { statsServiceDeliverType } from './StatsServiceDeliverType';

export const statsServiceAudienceListTarget = z.object({
  deliverType: statsServiceDeliverType,
  audienceListName: z.string().nullable()
}).nullable();

export type StatsServiceAudienceListTarget = z.infer<typeof statsServiceAudienceListTarget>;
