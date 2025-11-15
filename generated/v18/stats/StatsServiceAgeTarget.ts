import { z } from 'zod';

import { statsServiceAge } from './StatsServiceAge';
import { statsServiceEstimateFlg } from './StatsServiceEstimateFlg';

export const statsServiceAgeTarget = z.object({
  age: statsServiceAge,
  estimateFlg: statsServiceEstimateFlg
}).nullable();

export type StatsServiceAgeTarget = z.infer<typeof statsServiceAgeTarget>;
