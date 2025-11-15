import { z } from 'zod';

import { StatsServiceAge } from './StatsServiceAge';
import { StatsServiceEstimateFlg } from './StatsServiceEstimateFlg';

export const StatsServiceAgeTarget = z.object({
  age: StatsServiceAge,
  estimateFlg: StatsServiceEstimateFlg
}).nullable();

export type StatsServiceAgeTarget = z.infer<typeof StatsServiceAgeTarget>;
